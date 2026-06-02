/**
 * POST /api/publication-lead — receives the gated-form submission
 * from PdfGateway and stores it as a `publicationLead` document in
 * Sanity. Admins view/export the leads inside Studio.
 *
 * Trust model:
 *  - name / email / phone are visitor-supplied and stored as-is (no
 *    way to verify; this is lead-capture, not authentication).
 *  - publicationTitle / pdfSrc are also client-supplied since they
 *    live in the per-publication page component, but a hostile client
 *    sending bogus titles would only pollute their own row — the data
 *    isn't trusted for routing or display elsewhere.
 *  - accessedAt is set server-side; we ignore any client `ts`.
 *
 * Errors are deliberately terse — the visitor's UI doesn't surface
 * them anyway (PdfGateway treats network failures as non-fatal).
 */
import { NextResponse } from "next/server";
import {
  getSanityServerClient,
  hasSanityWriteToken,
} from "../../../../sanity/lib/server-client";
import { isSanityConfigured } from "../../../../sanity/env";

// Don't pre-render this route at build time.
export const dynamic = "force-dynamic";

// Lightweight email shape check. Not RFC-perfect — just enough to
// reject typos like "abc" or "a@b". Sanity stores a string either way.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  publicationTitle?: unknown;
  pdfSrc?: unknown;
};

function clamp(s: string, max: number): string {
  return s.length > max ? s.slice(0, max) : s;
}

export async function POST(request: Request) {
  if (!isSanityConfigured || !hasSanityWriteToken()) {
    // Operator misconfig — log so it shows up in Vercel and bail with
    // a generic 500 so the visitor still sees the PDF.
    console.error(
      "[publication-lead] Sanity not configured or SANITY_WRITE_TOKEN missing"
    );
    return NextResponse.json(
      { error: "Server not configured" },
      { status: 500 }
    );
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const publicationTitle =
    typeof body.publicationTitle === "string"
      ? body.publicationTitle.trim()
      : "";
  const pdfSrc = typeof body.pdfSrc === "string" ? body.pdfSrc.trim() : "";

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Valid email required" },
      { status: 400 }
    );
  }
  if (!publicationTitle) {
    return NextResponse.json(
      { error: "publicationTitle required" },
      { status: 400 }
    );
  }

  try {
    const client = getSanityServerClient();
    await client.create({
      _type: "publicationLead",
      // Clamp to defensive caps so a malicious client can't push
      // huge strings into our dataset.
      name: clamp(name, 200),
      email: clamp(email, 200),
      phone: clamp(phone, 50),
      publicationTitle: clamp(publicationTitle, 300),
      pdfSrc: clamp(pdfSrc, 500),
      accessedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[publication-lead] Sanity write failed", err);
    return NextResponse.json(
      { error: "Could not record submission" },
      { status: 500 }
    );
  }
}
