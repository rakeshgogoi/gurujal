"use client";

import { useEffect, useState } from "react";
import { PdfViewer } from "./pdf-viewer";

/**
 * Lead-capture gateway for a publication PDF.
 *
 * Behaviour
 *  - Visitor lands on the page and sees the publication metadata
 *    plus a 3-field form (Name / Email / Phone). The PDF viewer is
 *    hidden behind this.
 *  - On submit we (a) store the submission in localStorage so we
 *    don't ask the same visitor again on a future visit, and (b)
 *    fire a fetch() ping to the configured leadEndpoint if one is
 *    supplied — making it easy to wire up Google Forms / Zapier /
 *    a custom backend later without touching the UI.
 *  - Once unlocked, the PdfViewer is rendered inline. The viewer
 *    itself has its own Download + Open-in-new-tab CTAs.
 *
 * Storage key is per-PDF so submissions for one publication don't
 * silently unlock another.
 */

export function PdfGateway({
  pdfSrc,
  downloadName,
  publicationTitle,
  storageKey,
  /** Optional POST endpoint to ping when the form is submitted.
   *  Receives JSON `{name, email, phone, pdfSrc, publicationTitle, ts}`.
   *  Default: undefined — the submission only lives in localStorage. */
  leadEndpoint,
}: {
  pdfSrc: string;
  downloadName?: string;
  publicationTitle: string;
  storageKey: string;
  leadEndpoint?: string;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Restore "already unlocked" state on mount so returning visitors
  // skip the form entirely.
  useEffect(() => {
    try {
      if (localStorage.getItem(`gj-pdf:${storageKey}`)) {
        setUnlocked(true);
      }
    } catch {
      /* ignore — localStorage may be disabled in private mode */
    }
  }, [storageKey]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const payload = {
      name,
      email,
      phone,
      pdfSrc,
      publicationTitle,
      ts: new Date().toISOString(),
    };

    // 1. Persist locally so the gate doesn't re-appear next time.
    try {
      localStorage.setItem(
        `gj-pdf:${storageKey}`,
        JSON.stringify(payload)
      );
    } catch {
      /* ignore */
    }

    // 2. Fire-and-forget the optional backend hook. We don't block
    //    the UX on it — the visitor's been waiting long enough.
    if (leadEndpoint) {
      try {
        await fetch(leadEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch {
        /* network failures are non-fatal for the user */
      }
    }

    setSubmitting(false);
    setUnlocked(true);
  }

  if (unlocked) {
    return (
      <PdfViewer
        title={publicationTitle}
        eyebrow="Publication"
        pdfSrc={pdfSrc}
        downloadName={downloadName}
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-brand-soft/80">
      <div className="grid gap-0 lg:grid-cols-12">
        {/* Left: blurb + lock visual */}
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-primary to-brand-teal p-8 text-white sm:p-10 lg:col-span-5">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-orange/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-brand-teal-bright/40 blur-3xl"
          />
          <span
            aria-hidden
            className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur"
          >
            <LockIcon />
          </span>
          <p className="relative mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-teal-bright">
            View now
          </p>
          <h3 className="relative mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {publicationTitle}
          </h3>
          <p className="relative mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
            Please share a few details and we&apos;ll unlock the full
            publication right here on this page. You can read it
            inline or download a copy.
          </p>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-10 lg:col-span-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Name
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Phone
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Optional"
                className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Unlocking…" : "View publication"}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <p className="mt-4 text-xs leading-relaxed text-brand-muted">
            We only use your details to keep you informed about new
            publications and never share them with third parties.
          </p>
        </form>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
