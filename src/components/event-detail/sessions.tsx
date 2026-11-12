import Image from "next/image";

/**
 * Themes / sessions / programme list.
 *
 * Each session is a card with a time/day badge + a session number,
 * title, and prose body. Works for HydroMingle's 5 sessions and Urban
 * Adda's 3-day programme — caller decides the heading + cards.
 */

export type SessionItem = {
  /** Badge text on top — e.g. "Session 2 · 10:30–11:30 AM" */
  badge: string;
  /** Session title */
  title: string;
  /** Subtitle / day-theme name */
  subtitle?: string;
  /** Body text */
  body: React.ReactNode;
  /** Optional promotional image (e.g. the session poster) shown beside
   *  the text on sm+ and above it on phones. */
  image?: { src: string; alt: string; width: number; height: number };
  /** Optional photos from the session, shown as a strip under the text. */
  photos?: { src: string; alt: string }[];
};

export function EventSessions({
  id = "themes",
  eyebrow,
  heading,
  sessions,
  bg = "bg-brand-mist",
}: {
  id?: string;
  eyebrow: string;
  heading: React.ReactNode;
  sessions: SessionItem[];
  bg?: string;
}) {
  return (
    <section id={id} className={`${bg} scroll-mt-20`}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-5">
          {sessions.map((s, i) => (
            <li
              key={i}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:shadow-md sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                  {s.badge}
                </span>
                <span className="text-3xl font-bold tracking-tight text-brand-teal-dark/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-brand-ink sm:text-2xl">
                {s.title}
              </h3>
              {s.subtitle && (
                <p className="mt-1 text-sm font-semibold text-brand-teal-dark">
                  {s.subtitle}
                </p>
              )}
              {/* div, not p: bodies may contain paragraphs and lists. */}
              <div
                className={
                  s.image
                    ? "mt-3 grid gap-6 md:grid-cols-[minmax(0,1fr)_280px] md:items-start"
                    : "mt-3"
                }
              >
                <div className="text-sm leading-relaxed text-brand-muted sm:text-base md:order-1">
                  {s.body}
                </div>
                {s.image && (
                  <figure className="mx-auto w-full max-w-[280px] md:order-2 md:mx-0">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      width={s.image.width}
                      height={s.image.height}
                      sizes="(min-width: 768px) 280px, 70vw"
                      className="h-auto w-full rounded-2xl shadow-md ring-1 ring-brand-soft"
                    />
                  </figure>
                )}
              </div>
              {s.photos && s.photos.length > 0 && (
                <ul
                  className="mt-6 flex flex-wrap justify-center gap-3"
                  aria-label={`Photos from ${s.title}`}
                >
                  {s.photos.map((ph) => (
                    <li
                      key={ph.src}
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-soft/60 ring-1 ring-brand-soft/70 ${
                        s.photos!.length === 1
                          ? "basis-full sm:basis-2/3 md:basis-1/2"
                          : "basis-[calc(50%-0.375rem)] md:basis-[calc(33.333%-0.5rem)]"
                      }`}
                    >
                      <Image
                        src={ph.src}
                        alt={ph.alt}
                        fill
                        sizes="(min-width: 768px) 300px, 45vw"
                        className="object-cover"
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
