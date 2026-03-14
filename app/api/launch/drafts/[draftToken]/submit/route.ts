import { NextResponse } from "next/server";

import { submitDraft } from "@/lib/launch-repository";
import { applicationDraftSchema } from "@/lib/validation";

export async function POST(request: Request, { params }: { params: { draftToken: string } }) {
  try {
    const body = await request.json();
    const parsed = applicationDraftSchema.safeParse(body.values);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid submission payload." }, { status: 400 });
    }

    const draft = await submitDraft(params.draftToken, body.values);
    if (!draft) {
      return NextResponse.json({ error: "Draft not found." }, { status: 404 });
    }
    return NextResponse.json(draft);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to submit application." }, { status: 500 });
  }
}

