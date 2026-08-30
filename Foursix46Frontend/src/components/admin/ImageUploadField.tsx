/* ─────────────────────────────────────────────────────────────────────────────
   src/components/admin/ImageUploadField.tsx

   Drop-in replacement for the "paste an image URL" inputs in the admin CMS
   dialogs. Admin picks a file, it uploads to Vercel Blob, and the resulting
   URL is written back through onChange as a plain string.

   Nothing downstream changes: the value is still just a URL string, stored in
   the same Firestore column (heroImage / ogImage / imageUrl / featuredImage)
   and rendered on the public site exactly as before. The only difference is
   how the URL gets into the box.

   The URL field is kept and stays editable, so existing image links still work
   and can still be pasted — upload is an addition, not a removal.
─────────────────────────────────────────────────────────────────────────────── */

import { useRef, useState } from "react";
import { upload } from "@vercel/blob/client";
import { Loader2, Upload, X, ImageOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";

interface ImageUploadFieldProps {
  /** Omit to reuse the surrounding form's own <Label> markup. */
  label?: string;
  value: string;
  onChange: (url: string) => void;
  /** Called after the field loses focus, mirroring the old Input onBlur. */
  onBlur?: (url: string) => void;
  error?: string;
  placeholder?: string;
  /** Folder inside the Blob store, e.g. "services" or "blog". */
  folder?: string;
  /** Smaller layout for use inside content-block editors. */
  compact?: boolean;
}

const MAX_BYTES = 10 * 1024 * 1024; // keep in step with api/blob-upload.ts

export default function ImageUploadField({
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder = "https://… or upload a file",
  folder = "uploads",
  compact = false,
}: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [previewFailed, setPreviewFailed] = useState(false);

  const handleFile = async (file: File) => {
    setUploadError(null);

    if (!file.type.startsWith("image/")) {
      setUploadError("That file is not an image.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setUploadError(
        `Image is ${(file.size / 1024 / 1024).toFixed(1)} MB — the limit is 10 MB.`,
      );
      return;
    }

    setUploading(true);
    try {
      // The upload route requires a valid Firebase ID token carrying the
      // admin claim — the same gate as /admin/dashboard.
      const token = await auth.currentUser?.getIdToken();
      if (!token) throw new Error("You are signed out. Sign in again to upload.");

      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const blob = await upload(`${folder}/${safeName}`, file, {
        access: "public",
        handleUploadUrl: "/api/blob-upload",
        headers: { Authorization: `Bearer ${token}` },
      });

      setPreviewFailed(false);
      onChange(blob.url);
      onBlur?.(blob.url);
    } catch (err) {
      setUploadError(
        err instanceof Error ? err.message : "Upload failed. Please try again.",
      );
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const clear = () => {
    onChange("");
    onBlur?.("");
    setUploadError(null);
    setPreviewFailed(false);
  };

  return (
    <div className="space-y-2">
      {label && (
        <Label className={compact ? "text-xs" : undefined}>{label}</Label>
      )}

      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => {
            setPreviewFailed(false);
            onChange(e.target.value);
          }}
          onBlur={(e) => onBlur?.(e.target.value)}
          placeholder={placeholder}
          className="flex-1"
        />

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />

        <Button
          type="button"
          variant="outline"
          size={compact ? "sm" : "default"}
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className="shrink-0 gap-2"
        >
          {uploading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Uploading…
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              Upload
            </>
          )}
        </Button>

        {value && !uploading && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={clear}
            title="Remove image"
            className="shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {(uploadError || error) && (
        <p className="text-sm font-medium text-destructive">
          {uploadError || error}
        </p>
      )}

      {value && !previewFailed && (
        <img
          src={value}
          alt={label ? `${label} preview` : "Image preview"}
          className={`rounded border object-cover w-full ${compact ? "h-20" : "h-24"}`}
          onError={() => setPreviewFailed(true)}
        />
      )}

      {value && previewFailed && (
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <ImageOff className="w-3.5 h-3.5" />
          Preview unavailable — the URL may be wrong or the image is private.
        </p>
      )}
    </div>
  );
}
