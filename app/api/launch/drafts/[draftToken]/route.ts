import { NextResponse } from "next/server";

import { loadDraftByToken, saveDraft } from "@/lib/launch-repository";
import { applicationDraftSchema } from "@/lib/validation";

export async function GET(_: Request, { params }: { params: { draftToken: string } }) {
  try {
    const draft = await loadDraftByToken(params.draftToken);
    if (!draft) {
      return NextResponse.json({ error: "Draft not found." }, { status: 404 });
    }
    return NextResponse.json(draft);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to load draft." }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { draftToken: string } }) {
  try {
    const body = await request.json();
    const parsed = applicationDraftSchema.safeParse(body.values);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid draft payload." }, { status: 400 });
    }

    const draft = await saveDraft(params.draftToken, body.values);
    if (!draft) {
      return NextResponse.json({ error: "Draft not found." }, { status: 404 });
    }
    return NextResponse.json(draft);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to save draft." }, { status: 500 });
  }
}

