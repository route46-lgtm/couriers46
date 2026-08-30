/* ─────────────────────────────────────────────────────────────────────────────
   api/blob-upload.ts  →  POST /api/blob-upload

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

   Required environment variables (set in the Vercel project, never in code):
     BLOB_READ_WRITE_TOKEN   — added automatically when you connect a Blob store
     VITE_FIREBASE_PROJECT_ID — used as the token issuer/audience to verify against
─────────────────────────────────────────────────────────────────────────────── */

import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { createRemoteJWKSet, jwtVerify } from "jose";

// Google's public keys for Firebase ID tokens. createRemoteJWKSet caches and
// refreshes these, so we build it once per warm instance rather than per call.
const JWKS = createRemoteJWKSet(
  new URL("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"),
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

/** Verify a Firebase ID token and confirm the admin custom claim. */
async function requireAdmin(authHeader?: string | null): Promise<void> {
  const token = authHeader?.replace(/^Bearer\s+/i, "").trim();
  if (!token) throw new Error("Missing authentication token");

  const { payload } = await jwtVerify(token, JWKS, {
    issuer: `https://securetoken.google.com/${PROJECT_ID}`,
    audience: PROJECT_ID,
  });

  if (payload.admin !== true) {
    throw new Error("Admin privileges required");
  }
}

export const config = { runtime: "nodejs" };

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = (await request.json()) as HandleUploadBody;

  try {
    const result = await handleUpload({
      body,
      request,

      // Runs before a token is minted. Throwing here refuses the upload.
      onBeforeGenerateToken: async (pathname) => {
        await requireAdmin(request.headers.get("authorization"));

        return {
          allowedContentTypes: ALLOWED_TYPES,
          maximumSizeInBytes: MAX_BYTES,
          // Blob appends a random suffix, so two files of the same name
          // never overwrite each other.
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ pathname }),
        };
      },

      // Fired by Blob after the upload lands. Nothing to persist here — the
      // resulting URL is written into the existing CMS column by the admin
      // form, exactly as a pasted URL used to be.
      onUploadCompleted: async ({ blob }) => {
        console.log("[blob-upload] stored:", blob.url);
      },
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Upload failed";
    const unauthorized =
      message.includes("Admin privileges") ||
      message.includes("Missing authentication") ||
      message.toLowerCase().includes("signature") ||
      message.toLowerCase().includes("exp");

    return new Response(JSON.stringify({ error: message }), {
      status: unauthorized ? 401 : 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
