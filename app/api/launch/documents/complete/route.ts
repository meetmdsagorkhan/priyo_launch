import { NextResponse } from "next/server";

import { completeDocumentUpload } from "@/lib/launch-repository";
import { uploadCompleteSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = uploadCompleteSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid upload completion payload." }, { status: 400 });
    }

    const document = await completeDocumentUpload(parsed.data.draftToken, parsed.data.documentId);
    if (!document) {
      return NextResponse.json({ error: "Document not found." }, { status: 404 });
    }

    return NextResponse.json({ document });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to finalize upload." }, { status: 500 });
  }
}

