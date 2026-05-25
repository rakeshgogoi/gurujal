import Image from "next/image";
import Link from "next/link";

/**
 * Homepage hero — full-bleed image with rotating headline overlay.
 * Three lines rotate via CSS marquee defined in globals.css.
 */
const headlines = [
  { lead: "We", action: "REVITALIZE", suffix: "communities to make India", emphasis: "WATER-SECURE" },
  { lead: "We", action: "REVIVE", suffix: "water bodies to restore natural", emphasis: "ECOSYSTEMS" },
  { lead: "We", action: "DRIVE", suffix: "climate resilience through", emphasis: "ECO-RESTORATION" },
];

export function Hero() {
  return (
    <section className="relative isolate -mt-px overflow-hidden">
      {/* Background image (single still — full slider is a future enhancement) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/uploads/2026/03/Support-a-pond-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/55 to-brand-deep/85" />
      </div>

      <div className="mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Rotating headline */}
        <div className="relative h-[200px] sm:h-[240px] lg:h-[280px] overflow-hidden">
          <div className="gj-rotate-track">
            {headlines.concat(headlines[0]).map((h, i) => (
              <div
                key={i}
                className="flex flex-col justify-center text-white"
              >
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="inline-block rounded-md bg-brand-primary/80 px-3 py-1 text-white">{h.lead}</span>{" "}
                  <span className="text-brand-orange">{h.action}</span>{" "}
                  <span className="text-white/95">{h.suffix}</span>{" "}
                  <span className="text-brand-orange">{h.emphasis}</span>
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white hover:text-brand-deep"
          >
            Know More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Slider arrows (decorative for now) */}
      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep lg:block"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep lg:block"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}
