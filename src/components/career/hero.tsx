import Image from "next/image";

/**
 * Careers hero — "Careers at GuruJal · #GrowWithGuruJal".
 *
 * Same hero language as the other composed pages: dark teal band, faint
 * backdrop with brand overlay, headline with an italic-accent word, lead
 * paragraph, and a primary "View Open Roles" CTA that jumps to the
 * positions section.
 */
export function CareerHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2024/08/weforwater-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:brightness(0.5)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 via-brand-deep/35 to-brand-deep/55" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-teal/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:text-sm">
          Careers
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Careers at{" "}
          <span className="text-brand-teal-bright">GuruJal</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
          Join us to build a career that is both{" "}
          <em className="not-italic font-semibold text-brand-green">
            rewarding
          </em>{" "}
          and purposeful.
        </p>
        <p className="mx-auto mt-3 text-sm font-bold tracking-[0.16em] text-brand-orange sm:text-base">
          #GrowWithGuruJal
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#positions"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
          >
            View Open Roles
            <Arrow />
          </a>
          <a
            href="#why"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
          >
            Why GuruJal
          </a>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
