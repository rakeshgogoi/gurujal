/**
 * Who should engage — 6-tile community grid summarising the people the
 * event is designed for. Used at the bottom of HydroMingle / Urban
 * Adda pages right before the closing CTA.
 */

export type EngageItem = {
  title: string;
  body: string;
};

export function EventEngage({
  eyebrow,
  heading,
  intro,
  groups,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  intro?: React.ReactNode;
  groups: EngageItem[];
}) {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              {intro}
            </p>
          )}
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <li
              key={g.title}
              className="rounded-2xl bg-white p-6 ring-1 ring-brand-soft/70"
            >
              <h3 className="text-base font-semibold leading-snug text-brand-ink sm:text-lg">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {g.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
