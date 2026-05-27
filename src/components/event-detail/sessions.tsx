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
              <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
