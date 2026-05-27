/**
 * Numbered objectives / context-and-purpose section.
 *
 * Two-column layout on lg+: left column is a heading + intro + optional
 * bullet list; right column is the numbered objectives grid (01–06).
 */

export function EventObjectives({
  eyebrow,
  heading,
  intro,
  bullets,
  objectivesEyebrow,
  objectivesHeading,
  objectives,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  intro: React.ReactNode;
  bullets?: string[];
  objectivesEyebrow: string;
  objectivesHeading: React.ReactNode;
  objectives: string[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
              {intro}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              {objectivesEyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
              {objectivesHeading}
            </h3>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {objectives.map((o, i) => (
                <li
                  key={i}
                  className="rounded-2xl bg-brand-mist p-5 ring-1 ring-brand-soft/70"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-orange-dark">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink">
                    {o}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
