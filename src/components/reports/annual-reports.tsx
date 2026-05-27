import Link from "next/link";

/**
 * Annual Reports — three downloadable PDFs.
 *
 * Each card is a download tile: year badge + report title + a clear
 * download button. The PDFs live under /uploads/2025/11/ and open in
 * a new tab so the user doesn't lose their place on the page.
 */

// Each card links to the composed Annual Report page (which embeds the
// PDF + offers download), not to the PDF directly — so readers stay
// inside the site and we get a chance to surface highlights and other
// years.
const reports = [
  {
    year: "2022–23",
    title: "Annual Report",
    href: "/annual-report-2022-23",
  },
  {
    year: "2023–24",
    title: "Annual Report",
    href: "/annual-report-2023-24",
  },
  {
    year: "2024–25",
    title: "Annual Report",
    href: "/annual-report-2024-25",
  },
];

function PdfIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function DownloadIcon({ className = "" }: { className?: string }) {
  return (
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
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function AnnualReports() {
  return (
    <section id="reports" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Annual Reports
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            A year-by-year record of the work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Programmatic milestones, financial accountability and impact
            metrics — published openly every year.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {reports.map((r) => (
            <li key={r.year}>
              <Link
                href={r.href}
                className="group flex h-full flex-col items-start gap-5 rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:ring-brand-accent"
              >
                {/* Icon + year badge */}
                <div className="flex w-full items-start justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange-dark ring-1 ring-brand-orange/30">
                    <PdfIcon />
                  </span>
                  <span className="rounded-full bg-brand-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-teal-dark">
                    {r.year}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-brand-ink">
                    {r.title} {r.year}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    GuruJal&apos;s programmatic, financial and impact
                    disclosures for the {r.year} fiscal year.
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-brand-primary-dark">
                  Read & download
                  <DownloadIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
