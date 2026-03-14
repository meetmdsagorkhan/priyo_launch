"use client";

import { Loader2, UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

import type { UploadDocumentMeta } from "@/lib/types";
import { cn } from "@/lib/utils";

export function UploadDropzone({
  label,
  draftToken,
  ensureDraftToken,
  value,
  onUploaded,
}: {
  label: string;
  draftToken?: string;
  ensureDraftToken?: () => Promise<string | null>;
  value: UploadDocumentMeta | null;
  onUploaded: (value: UploadDocumentMeta) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    setError(null);

    try {
      const token = draftToken ?? (ensureDraftToken ? await ensureDraftToken() : null);
      if (!token) {
        throw new Error("Complete founder details first so we can create a secure draft.");
      }

      const request = await fetch("/api/launch/documents/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          draftToken: token,
          documentType: "passport_id",
          fileName: file.name,
          mimeType: file.type || "application/octet-stream",
          size: file.size,
        }),
      });

      const payload = await request.json();
      if (!request.ok) {
        throw new Error(payload.error || "Unable to prepare document upload.");
      }

      if (!payload.mockUpload) {
        const uploadResponse = await fetch(payload.signedUrl, {
          method: "PUT",
          headers: { "Content-Type": file.type || "application/octet-stream" },
          body: file,
        });

        if (!uploadResponse.ok) {
          throw new Error("Upload failed. Please try again.");
        }

        const completeRequest = await fetch("/api/launch/documents/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ draftToken: token, documentId: payload.document.id }),
        });
        const completed = await completeRequest.json();
        if (!completeRequest.ok) {
          throw new Error(completed.error || "Unable to finalize upload.");
        }
        onUploaded(completed.document);
      } else {
        onUploaded(payload.document);
      }
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-white">{label}</span>
        {value ? <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Uploaded</span> : null}
      </div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={cn(
          "flex w-full items-center justify-between rounded-[24px] border border-dashed border-white/12 bg-white/[0.03] px-5 py-4 text-left transition hover:border-primary/40 hover:bg-white/[0.05]",
          uploading ? "opacity-80" : null
        )}
      >
        <div>
          <p className="text-sm font-medium text-white">{value ? value.fileName : "Upload passport or government ID"}</p>
          <p className="mt-1 text-sm text-muted">
            {value ? `${Math.round(value.size / 1024)} KB saved to draft` : "PDF, JPG, or PNG up to 20 MB"}
          </p>
        </div>
        {uploading ? <Loader2 className="h-5 w-5 animate-spin text-primary" /> : <UploadCloud className="h-5 w-5 text-primary" />}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            void handleFile(file);
          }
        }}
      />
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}

