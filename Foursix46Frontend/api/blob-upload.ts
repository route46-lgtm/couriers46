/* ─────────────────────────────────────────────────────────────────────────────
   api/blob-upload.ts  →  /api/blob-upload

   Vercel serverless function that issues short-lived client upload tokens for
   Vercel Blob. The browser never sees BLOB_READ_WRITE_TOKEN — it asks this
   route for a one-file token, then uploads straight to Blob storage.

   Why the client-upload flow rather than proxying the bytes through here:
   a Vercel serverless function has a ~4.5 MB request body limit, which a
   single hero image can exceed. Client uploads go browser → Blob directly,
   so the limit does not apply.

   ADMIN ONLY. The route verifies the caller's Firebase ID token against
   Google's public keys and requires the same `admin === true` custom claim
   that gates /admin/dashboard. Without this check the endpoint would let
   anyone on the internet write to (and pay for) the Blob store.

   RUNTIME NOTE: this uses the Node.js signature (req, res). Vercel's Node
   runtime does NOT hand the handler a Web `Request`, so `await request.json()`
   throws "request.json is not a function" and the invocation fails. @vercel/blob
   only needs `headers.get()` off the request, so a tiny shim is passed instead.

   Environment (set in the Vercel project, never in code):
     BLOB_READ_WRITE_TOKEN     — added automatically when a Blob store is connected
     VITE_FIREBASE_PROJECT_ID  — optional; falls back to the literal below
─────────────────────────────────────────────────────────────────────────────── */

import type { IncomingMessage, ServerResponse } from "http";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { createRemoteJWKSet, jwtVerify } from "jose";

// Google's public keys for Firebase ID tokens. createRemoteJWKSet caches and
// refreshes these, so build it once per warm instance rather than per call.
const JWKS = createRemoteJWKSet(
  new URL(
    "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com",
  ),
);

const PROJECT_ID =
  process.env.VITE_FIREBASE_PROJECT_ID ||
  process.env.FIREBASE_PROJECT_ID ||
  "foursix46-production-4a43f";

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/gif",
  "image/svg+xml",
];

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

class AuthError extends Error {}

/** Verify a Firebase ID token and confirm the admin custom claim. */
async function requireAdmin(authHeader?: string): Promise<void> {
  const token = authHeader?.replace(/^Bearer\s+/i, "").trim();
  if (!token) throw new AuthError("Missing authentication token");

  let payload;
  try {
    ({ payload } = await jwtVerify(token, JWKS, {
      issuer: `https://securetoken.google.com/${PROJECT_ID}`,
      audience: PROJECT_ID,
    }));
  } catch (e) {
    throw new AuthError(
      `Sign-in token rejected: ${e instanceof Error ? e.message : "invalid token"}`,
    );
  }

  if (payload.admin !== true) {
    throw new AuthError("Admin privileges required for uploads");
  }
}

/** Read and JSON-parse the request body from a Node IncomingMessage. */
function readJsonBody(req: IncomingMessage): Promise<HandleUploadBody> {
  // Vercel often pre-parses JSON onto req.body; use it when present.
  const pre = (req as IncomingMessage & { body?: unknown }).body;
  if (pre && typeof pre === "object") return Promise.resolve(pre as HandleUploadBody);
  if (typeof pre === "string" && pre.length) {
    return Promise.resolve(JSON.parse(pre) as HandleUploadBody);
  }

  return new Promise((resolve, reject) => {
    let raw = "";
    req.setEncoding("utf8");
    req.on("data", (c) => (raw += c));
    req.on("end", () => {
      try {
        resolve(raw ? (JSON.parse(raw) as HandleUploadBody) : ({} as HandleUploadBody));
      } catch {
        reject(new Error("Request body was not valid JSON"));
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(
  req: IncomingMessage & { method?: string; body?: unknown },
  res: ServerResponse,
): Promise<void> {
  const send = (status: number, payload: unknown) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(payload));
  };

  // Health check — GET /api/blob-upload confirms the function deployed and
  // whether the Blob token is visible to it, without exposing the token.
  if (req.method === "GET") {
    return send(200, {
      ok: true,
      route: "/api/blob-upload",
      runtime: "nodejs",
      blobTokenConfigured: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      firebaseProjectId: PROJECT_ID,
    });
  }

  if (req.method !== "POST") {
    return send(405, { error: "Method not allowed" });
  }

  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return send(500, {
        error:
          "BLOB_READ_WRITE_TOKEN is not set on this deployment. Add it in Vercel → Settings → Environment Variables, then redeploy.",
      });
    }

    const body = await readJsonBody(req);
    const authHeader = req.headers.authorization as string | undefined;

    const result = await handleUpload({
      body,
      // @vercel/blob only reads headers.get() off this object; the Node
      // runtime has no Web Request, so pass a minimal shim.
      request: {
        headers: {
          get: (name: string) =>
            (req.headers[name.toLowerCase()] as string | undefined) ?? null,
        },
      } as unknown as Request,

      // Runs before a token is minted. Throwing here refuses the upload.
      onBeforeGenerateToken: async (pathname) => {
        await requireAdmin(authHeader);
        return {
          allowedContentTypes: ALLOWED_TYPES,
          maximumSizeInBytes: MAX_BYTES,
          // Blob appends a random suffix, so two files of the same name
          // never overwrite each other.
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ pathname }),
        };
      },

      // Fired by Blob after the upload lands. Nothing to persist — the URL is
      // written into the existing CMS column by the admin form, exactly as a
      // pasted URL used to be.
      onUploadCompleted: async ({ blob }) => {
        console.log("[blob-upload] stored:", blob.url);
      },
    });

    return send(200, result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    console.error("[blob-upload] failed:", message, error);
    return send(error instanceof AuthError ? 401 : 400, { error: message });
  }
}
