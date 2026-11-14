/* ─────────────────────────────────────────────────────────────────────────────
   src/components/admin/PublishSiteButton.tsx
   Re-publishes the website: asks the backend to trigger a new frontend build,
   so the static HTML (page source, search engines, social previews) carries
   the latest CMS content. Visitors' browsers already see edits instantly; the
   rebuild is what updates the HTML files themselves (~2–3 minutes).
───────────────────────────────────────────────────────────────────────────── */

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, UploadCloud } from "lucide-react";
import { auth } from "@/firebase";
import { Button } from "@/components/ui/button";

const apiUrl = import.meta.env.VITE_API_URL;

export type RebuildStatus = "triggered" | "not-configured" | "failed" | undefined;

/** One toast that explains what happened to the website HTML. */
export function announceRebuild(rebuild: RebuildStatus, saved = true) {
  const prefix = saved ? "Saved. " : "";
  if (rebuild === "triggered") {
    toast.success(
      `${prefix}Website is being re-published — the page HTML updates in about 2–3 minutes.`,
    );
  } else if (rebuild === "not-configured") {
    toast.warning(
      `${prefix}Live for visitors now, but automatic re-publishing is not set up yet, so the page HTML updates on the next deploy. (Backend needs FRONTEND_DEPLOY_HOOK_URL.)`,
      { duration: 10000 },
    );
  } else if (rebuild === "failed") {
    toast.error(
      `${prefix}Live for visitors now, but re-publishing the HTML failed. Click "Publish website" to try again.`,
      { duration: 10000 },
    );
  } else if (saved) {
    toast.success("Saved.");
  }
}

export function PublishSiteButton({ className }: { className?: string }) {
  const [busy, setBusy] = useState(false);

  const publish = async () => {
    setBusy(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      if (!token) throw new Error("You are signed out. Please sign in again.");
      const res = await fetch(`${apiUrl}/api/admin/rebuild-site`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json().catch(() => ({}));
      if (res.status === 401 || res.status === 403) {
        throw new Error(json.message || "Admin access required.");
      }
      announceRebuild(json.rebuild as RebuildStatus, false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not publish the website.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={publish}
      disabled={busy}
      className={className}
      title="Rebuild the website so every page's HTML carries the latest CMS content"
    >
      {busy ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        <UploadCloud className="w-4 h-4 mr-2" />
      )}
      Publish website
    </Button>
  );
}
