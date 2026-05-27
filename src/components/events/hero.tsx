import Image from "next/image";

/**
 * Events hero — "Where Ideas Meet Impact".
 *
 * Same visual language as About/Team/Solutions/Reports heroes: dark teal
 * band, faint backdrop with heavy overlay, brand glows. The "Ideas" and
 * "Impact" words pop in colour to mirror the live site's italic emphasis.
 */
export function EventsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2026/03/events-hero.jpg"
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
          Water Action Events
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Where{" "}
          <em className="not-italic text-brand-teal-bright">Ideas</em>{" "}
          Meet{" "}
          <em className="not-italic text-brand-green">Impact</em>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
          Knowledge-driven convenings, dialogues and collaborations
          advancing water security, sustainable cities, and
          community-led transformation across India.
        </p>
      </div>
    </section>
  );
}
