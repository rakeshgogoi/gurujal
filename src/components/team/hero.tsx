import Image from "next/image";

/**
 * Team page hero — slimmer than the About hero (no anchor nav baked in,
 * no min-h-viewport sizing) because the team page is content-heavy and
 * users should see the first row of faces close to the fold.
 *
 * Visuals match the About hero: dark teal band, faint pond backdrop with
 * a heavy overlay, brand-coloured glows in the corners.
 */
export function TeamHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Backdrop — GuruJal team members under the tree canopy, a literal
          "people behind a water-secure India" composition. Held back at
          opacity-30 with a brand-deep overlay so it reads as ambient
          texture behind the headline. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2024/08/weforwater-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-brand-deep/60" />
      </div>

      {/* Brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-teal/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:text-sm">
          Our Team
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          The people behind a{" "}
          <span className="text-brand-teal-bright">water-secure</span>{" "}
          <span className="text-brand-green">India</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
          Practitioners, policymakers, scientists and field associates — the
          full GuruJal family working from boardrooms to riverbanks.
        </p>
      </div>
    </section>
  );
}
