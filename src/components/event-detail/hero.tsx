import Image from "next/image";
import Link from "next/link";

/**
 * Shared event-detail hero.
 *
 * Same shape across all event detail pages:
 *   • dark teal band with a faint backdrop image + brand overlay
 *   • eyebrow (event name + date / venue line)
 *   • multi-line headline with one word styled as italic-accent
 *   • lead paragraph
 *   • two CTAs (report / gallery)
 *   • 4 fact chips along the bottom (Date / Venue / Timings / Edition)
 */

export type FactChip = { label: string; value: string };

export function EventDetailHero({
  eyebrow,
  dateLine,
  headlineBefore,
  headlineAccent,
  headlineAfter,
  lead,
  primaryCta,
  secondaryCta,
  facts,
  backdrop,
}: {
  eyebrow: string;
  dateLine: string;
  headlineBefore: string;
  headlineAccent: string;
  headlineAfter: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  facts: FactChip[];
  backdrop: string;
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
        <div className="absolute inset-0 bg-brand-deep/65" />
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
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:text-sm">
          {eyebrow}
        </p>
        <p className="mt-2 text-sm text-white/75 sm:text-base">{dateLine}</p>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {headlineBefore}{" "}
          <em className="not-italic text-brand-teal-bright">
            {headlineAccent}
          </em>{" "}
          {headlineAfter}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {lead}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
          >
            {secondaryCta.label}
          </Link>
        </div>

        {/* Fact chips */}
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/15 backdrop-blur"
            >
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                {f.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white sm:text-base">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
