import Image from "next/image";

/**
 * Reports & Publications hero — "Water Wisdom".
 *
 * Same visual language as About/Team/Solutions heroes: dark teal band,
 * faint pond backdrop with heavy overlay, brand glows in the corners.
 */
export function ReportsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2024/08/DJI_0800-1-scaled.jpg"
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

      <div className="relative mx-auto max-w-7xl px-6 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:text-sm">
          Reports & Publications
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Water Wisdom:{" "}
          <span className="text-brand-teal-bright">Research</span>,{" "}
          <span className="text-brand-green">Reports</span> &amp; Resources
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
          Data-backed insights and transparent reporting are essential for
          sustainable impact. Our reports, case studies, knowledge briefs
          and research publications focus on integrated water resource
          management, community engagement and environmental resilience.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          Developed in collaboration with experts, government bodies,
          academic institutions and field practitioners — designed to be
          replicated wherever the work needs to scale.
        </p>
      </div>
    </section>
  );
}
