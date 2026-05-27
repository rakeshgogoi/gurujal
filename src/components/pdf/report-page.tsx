import Image from "next/image";
import Link from "next/link";
import { PdfViewer } from "./pdf-viewer";

/**
 * Shared layout for an Annual Report page.
 *
 * Annual reports are open-access — no gateway. The PdfViewer is shown
 * directly with prominent Download + Open-in-new-tab CTAs.
 */

export function ReportPage({
  fiscalYear,
  title,
  lead,
  about,
  highlights,
  pdfSrc,
  downloadName,
  otherYears,
}: {
  fiscalYear: string; // e.g. "2024–25"
  title: string;
  lead: React.ReactNode;
  about: React.ReactNode;
  highlights: { value: string; label: string }[];
  pdfSrc: string;
  downloadName: string;
  otherYears: { fiscalYear: string; href: string }[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-deep">
        {/* Aerial pond shot — kept low-opacity behind a heavy brand-deep
            overlay so the existing hero text/badges still read clearly. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          <Image
            src="/uploads/2024/08/DJI_0607.jpg"
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

          <div className="mt-6 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex rounded-full bg-brand-orange/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange ring-1 ring-brand-orange/40">
                Annual Report · {fiscalYear}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {lead}
              </p>
            </div>

            {/* Big year badge */}
            <div className="hidden lg:col-span-4 lg:block">
              <div className="ml-auto flex h-44 w-44 flex-col items-center justify-center rounded-3xl bg-white/10 text-center ring-1 ring-white/15 backdrop-blur xl:h-52 xl:w-52">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-teal-bright">
                  Fiscal Year
                </div>
                <div className="mt-2 text-3xl font-extrabold tracking-tight text-white xl:text-4xl">
                  {fiscalYear}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About + highlights */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                About this report
              </p>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
                {about}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                  Year highlights
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-4">
                  {highlights.map((h) => (
                    <li
                      key={h.label}
                      className="rounded-2xl bg-white px-4 py-4 text-center ring-1 ring-brand-soft/70"
                    >
                      <div className="text-2xl font-bold tracking-tight text-brand-primary sm:text-3xl">
                        {h.value}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted sm:text-xs">
                        {h.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viewer */}
      <section id="view" className="bg-brand-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Read or download
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Annual Report {fiscalYear}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              Read the full report inline below, or download a copy
              for offline review and sharing.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <PdfViewer
              eyebrow={`Annual Report · ${fiscalYear}`}
              title={title}
              pdfSrc={pdfSrc}
              downloadName={downloadName}
            />
          </div>
        </div>
      </section>

      {/* Other years */}
      {otherYears.length > 0 && (
        <section className="bg-white pb-12 lg:pb-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                Earlier years
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                Browse other annual reports
              </h2>
            </div>

            <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {otherYears.map((y) => (
                <li key={y.href}>
                  <Link
                    href={y.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-brand-mist px-6 py-5 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-brand-accent"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                        Fiscal Year
                      </p>
                      <p className="mt-1 text-lg font-semibold text-brand-ink group-hover:text-brand-primary">
                        Annual Report {y.fiscalYear}
                      </p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-brand-primary transition-transform group-hover:translate-x-1"
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
