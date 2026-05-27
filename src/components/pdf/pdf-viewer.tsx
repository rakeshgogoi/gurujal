/**
 * Embedded PDF viewer.
 *
 *  - Renders the PDF inline via <iframe>. All modern browsers (Chrome,
 *    Edge, Safari, Firefox on desktop, most mobile browsers) ship a
 *    built-in PDF viewer that picks the iframe up automatically.
 *  - Above the frame: title, optional eyebrow, and two CTAs —
 *    Download and Open in new tab.
 *  - Tall enough to be useful (~720px on desktop) but constrained so
 *    the page above/below still feels in control.
 *
 * Note: this is a plain server component — no `"use client"` needed
 * because the iframe + anchor tags are static.
 */

export function PdfViewer({
  title,
  eyebrow,
  pdfSrc,
  downloadName,
}: {
  title?: string;
  eyebrow?: string;
  pdfSrc: string;
  /** Filename suggested when the user clicks Download. Falls back to
   *  the browser's default if omitted. */
  downloadName?: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-brand-soft/80">
      {(title || eyebrow) && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-soft/70 px-5 py-4 sm:px-6">
          <div>
            {eyebrow && (
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                {eyebrow}
              </p>
            )}
            {title && (
              <h3 className="mt-1 text-base font-semibold text-brand-ink sm:text-lg">
                {title}
              </h3>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={pdfSrc}
              download={downloadName}
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
            >
              <DownloadIcon />
              Download
            </a>
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:border-brand-accent hover:text-brand-accent-dark"
            >
              Open in new tab
              <ExternalIcon />
            </a>
          </div>
        </div>
      )}

      <div className="relative h-[60vh] w-full bg-brand-mist sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
        <iframe
          title={title || "PDF"}
          src={`${pdfSrc}#view=FitH&toolbar=1`}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      </div>

      <div className="border-t border-brand-soft/70 px-5 py-3 text-center text-xs leading-relaxed text-brand-muted sm:px-6">
        Trouble viewing the embed?{" "}
        <a
          href={pdfSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-primary hover:text-brand-accent-dark"
        >
          Open the PDF in a new tab
        </a>{" "}
        or{" "}
        <a
          href={pdfSrc}
          download={downloadName}
          className="font-semibold text-brand-primary hover:text-brand-accent-dark"
        >
          download a copy
        </a>
        .
      </div>
    </div>
  );
}

function DownloadIcon() {
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
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ExternalIcon() {
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
    >
      <path d="M7 7h10v10" />
      <line x1="7" y1="17" x2="17" y2="7" />
    </svg>
  );
}
