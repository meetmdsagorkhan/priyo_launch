import { NextResponse } from "next/server";

import { createDraft } from "@/lib/launch-repository";
import { draftCreateSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = draftCreateSchema.safeParse(body.values);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid draft payload." }, { status: 400 });
    }

    const draft = await createDraft(body.values);
    return NextResponse.json(draft);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to create draft." }, { status: 500 });
  }
}

