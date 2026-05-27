import Image from "next/image";
import Link from "next/link";
import { PdfGateway } from "./pdf-gateway";

/**
 * Shared layout for a publication-detail page.
 *
 * Hero (dark teal) with the publication name, type badge and lead.
 * Body sections: About this publication, What's inside (bullets),
 * gated PDF viewer (PdfGateway → PdfViewer), and a "related publications"
 * teaser at the bottom.
 */

export type RelatedPublication = {
  title: string;
  href: string;
};

export function PublicationPage({
  badge,
  title,
  lead,
  about,
  whatsInside,
  pdfSrc,
  downloadName,
  storageKey,
  related,
}: {
  badge: string;
  title: string;
  lead: React.ReactNode;
  about: React.ReactNode;
  whatsInside: string[];
  pdfSrc: string;
  downloadName: string;
  storageKey: string;
  related: RelatedPublication[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-deep">
        {/* Aerial pond shot — different angle from the Annual Reports hero
            so the two pages don't look like clones. Heavy brand-deep overlay
            keeps the existing text/badges fully readable. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          <Image
            src="/uploads/2024/08/DJI_0801.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-brand-deep/75" />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-teal/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/reports-and-publications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-bright hover:text-white"
          >
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Reports & Publications
          </Link>

          <span className="mt-6 inline-flex rounded-full bg-brand-teal/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-teal-bright ring-1 ring-brand-teal/40">
            {badge}
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {lead}
          </p>
        </div>
      </section>

      {/* About + What's inside */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                About this publication
              </p>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
                {about}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                  What&apos;s inside
                </p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-muted sm:text-base">
                  {whatsInside.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gated PDF viewer */}
      <section id="view" className="bg-brand-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Read or download
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              View the publication
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              We collect a few details so we can keep you informed about
              new research. The full publication appears below once
              you&apos;ve unlocked it — read inline or download a copy.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <PdfGateway
              pdfSrc={pdfSrc}
              downloadName={downloadName}
              publicationTitle={title}
              storageKey={storageKey}
            />
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white pb-12 lg:pb-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                Keep exploring
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                Other publications
              </h2>
            </div>

            <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group flex h-full items-start justify-between gap-4 rounded-2xl bg-brand-mist p-5 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-brand-accent"
                  >
                    <span className="text-sm font-semibold text-brand-ink group-hover:text-brand-primary">
                      {r.title}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
