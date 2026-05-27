import Image from "next/image";

/**
 * Speaker grid — round portrait + name + title + org, reuses the same
 * visual language as the people / team page.
 */

export type SpeakerCard = {
  name: string;
  /** Role or title (e.g. "Union Minister") */
  role?: string;
  /** Organisation / affiliation */
  org?: string;
  /** Optional 2-letter initials fallback when no photo exists */
  initials?: string;
  photo?: string;
};

export function EventSpeakers({
  eyebrow,
  heading,
  speakers,
  footnote,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  speakers: SpeakerCard[];
  footnote?: React.ReactNode;
}) {
  return (
    <section id="speakers" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {speakers.map((s) => (
            <li key={s.name} className="flex flex-col items-center text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-brand-soft/60 ring-4 ring-white shadow-md sm:h-36 sm:w-36">
                {s.photo ? (
                  <Image
                    src={s.photo}
                    alt={`Portrait of ${s.name}`}
                    fill
                    sizes="144px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand-mist text-2xl font-bold text-brand-primary">
                    {s.initials || s.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-brand-ink sm:text-base">
                {s.name}
              </h3>
              {s.role && (
                <p className="mt-1 text-xs leading-snug text-brand-muted sm:text-sm">
                  {s.role}
                </p>
              )}
              {s.org && (
                <p className="mt-0.5 text-[11px] leading-snug text-brand-muted sm:text-xs">
                  {s.org}
                </p>
              )}
            </li>
          ))}
        </ul>

        {footnote && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-brand-muted">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
