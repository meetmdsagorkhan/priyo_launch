import { DocumentStatus, type DocumentType } from "@prisma/client";
import { NextResponse } from "next/server";

import { saveDocumentMeta } from "@/lib/launch-repository";
import { createDocumentUploadUrl, isS3Configured } from "@/lib/storage";
import { slugifyFileName } from "@/lib/utils";
import { uploadRequestSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = uploadRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid upload request." }, { status: 400 });
    }

    const storageKey = `${parsed.data.draftToken}/${parsed.data.documentType}/${Date.now()}-${slugifyFileName(parsed.data.fileName)}`;

    if (!isS3Configured()) {
      const document = await saveDocumentMeta({
        draftToken: parsed.data.draftToken,
        type: parsed.data.documentType as DocumentType,
        fileName: parsed.data.fileName,
        mimeType: parsed.data.mimeType,
        size: parsed.data.size,
        storageKey,
        uploadStatus: DocumentStatus.uploaded,
      });

      if (!document) {
        return NextResponse.json({ error: "Draft not found." }, { status: 404 });
      }

      return NextResponse.json({ mockUpload: true, document });
    }

    const signedUrl = await createDocumentUploadUrl({
      bucket: process.env.S3_BUCKET!,
      key: storageKey,
      contentType: parsed.data.mimeType,
    });

    const document = await saveDocumentMeta({
      draftToken: parsed.data.draftToken,
      type: parsed.data.documentType as DocumentType,
      fileName: parsed.data.fileName,
      mimeType: parsed.data.mimeType,
      size: parsed.data.size,
      storageKey,
      uploadStatus: DocumentStatus.pending_upload,
    });

    if (!document) {
      return NextResponse.json({ error: "Draft not found." }, { status: 404 });
    }

    return NextResponse.json({ mockUpload: false, signedUrl, document });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to prepare upload." }, { status: 500 });
  }
}

