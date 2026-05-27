import Image from "next/image";
import Link from "next/link";

/**
 * Shared solution-detail hero.
 *
 * Same shape as the event detail hero — dark teal band with a faint
 * backdrop, italicised accent word in the headline, lead paragraph,
 * two CTAs and an optional 6R-icon badge to tie back to the home page.
 */

export function SolutionHero({
  eyebrow,
  headlineBefore,
  headlineAccent,
  headlineAfter,
  lead,
  primaryCta,
  secondaryCta,
  backdrop,
  iconSrc,
  iconAlt = "",
  /** "square" for round badge logos (Connect the Drops); "wide" for
   * rectangular wordmarks (Support a Pond, Water Proofing). Controls
   * the aspect/dimensions of the logo panel. */
  iconShape = "square",
}: {
  eyebrow: string;
  headlineBefore: string;
  headlineAccent: string;
  headlineAfter: string;
  lead: React.ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backdrop: string;
  iconSrc?: string;
  iconAlt?: string;
  iconShape?: "square" | "wide";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src={backdrop}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-brand-deep/60" />
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
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:text-sm">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {headlineBefore}{" "}
              <em className="not-italic text-brand-teal-bright">
                {headlineAccent}
              </em>{" "}
              {headlineAfter}
            </h1>
            <div className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
              {lead}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {iconSrc && (
            <div className="hidden lg:col-span-4 lg:block">
              {/* Logos contain dark-teal type that needs a light backing
                  to remain legible against the dark hero band. We
                  centre the logo on a white panel and size differently
                  for wide wordmarks vs. round badges. */}
              <div
                className={`relative ml-auto flex items-center justify-center rounded-3xl bg-white p-5 shadow-xl ring-1 ring-white/20 ${
                  iconShape === "wide"
                    ? "h-40 w-72 xl:h-44 xl:w-80"
                    : "h-44 w-44 xl:h-52 xl:w-52"
                }`}
              >
                <Image
                  src={iconSrc}
                  alt={iconAlt}
                  width={400}
                  height={400}
                  sizes="(min-width: 1280px) 320px, 288px"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
