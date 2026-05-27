import Image from "next/image";

/**
 * Solutions hero — "Water systems are connected".
 *
 * Same visual language as About/Team heroes: dark teal band, faint pond
 * backdrop with heavy overlay, brand glows. Wide centered headline +
 * lead paragraph so the page opens with the framing argument before the
 * GuruJal Way principles below.
 */
export function SolutionsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Backdrop — aerial of a restored square pond surrounded by farm
          plots, dirt paths and community land. Held back at opacity-30
          with the brand-deep overlay so it reads as ambient texture. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2026/05/solutions-pond.jpg"
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
          Our Solutions
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Water systems are{" "}
          <span className="text-brand-teal-bright">connected</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
          Quick, isolated and short-term fixes in water resource management
          may provide temporary relief, but they fail to address the root
          causes of the crisis. GuruJal&apos;s philosophy is integrated and
          context-specific — complementary services and technology-driven
          governance, working in concert.
        </p>
      </div>
    </section>
  );
}
