import Image from "next/image";

/**
 * Reports & Publications hero — "Water Wisdom".
 *
 * Matches the About-page hero pattern: full-height dark band, backdrop
 * shown in natural colour with the blue overlay anchored to the text
 * column on desktop, left-aligned headline + lead in a 12-col grid.
 */
export function ReportsHero() {
  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-brand-deep min-h-[calc(100vh-190px)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2024/08/DJI_0800-1-scaled.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Mobile / tablet: top-to-bottom gradient — the text wraps wide
            here so the photo can only breathe in the middle band. */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/45 to-brand-deep/85 lg:hidden" />
        {/* Desktop: gradient anchored to the left text column — the
            right half of the frame reveals the photo. */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-brand-deep/90 via-brand-deep/55 to-transparent lg:block" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-teal/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:mb-4 sm:text-sm">
              Reports & Publications
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Water Wisdom:{" "}
              <span className="text-brand-teal-bright">Research</span>,{" "}
              <span className="text-brand-green">Reports</span> &amp; Resources
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg lg:text-xl">
              Data-backed insights and transparent reporting are essential
              for sustainable impact. Our reports, case studies, knowledge
              briefs and research publications focus on integrated water
              resource management, community engagement and environmental
              resilience.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Developed in collaboration with experts, government bodies,
              academic institutions and field practitioners — designed to
              be replicated wherever the work needs to scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
