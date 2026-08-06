import Image from "next/image";

/**
 * Internship hero — mirrors the Careers / Volunteer hero pattern (same
 * backdrop image, same dark-band + left-aligned copy layout) since all
 * three pages sit under the "Work With Us" nav parent.
 */
export function InternshipHero() {
  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-brand-deep min-h-[calc(100vh-190px)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2024/08/weforwater-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="origin-top scale-[1.3] object-cover object-[80%_50%] sm:object-center sm:scale-100 sm:origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/45 to-brand-deep/85 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-brand-deep/90 via-brand-deep/55 to-transparent lg:block" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-brand-teal/15 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:mb-4 sm:text-sm">
              Internships
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Internships at{" "}
              <span className="text-brand-teal-bright">GuruJal</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-snug text-white/85 sm:mt-6 sm:text-lg lg:text-xl">
              Real work in schools, restoration sites, communities and
              content studios —{" "}
              <em className="not-italic font-semibold text-brand-green">
                not filing papers, not watching from the sidelines
              </em>
              .
            </p>
            <p className="mt-3 text-sm font-bold tracking-[0.3em] text-brand-orange sm:text-base">
              WATER · RESTORATION · COMMUNITY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
