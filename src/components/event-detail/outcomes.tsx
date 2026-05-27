/**
 * Outcomes / next steps — a 6-tile grid of short paired headings+blurbs
 * summarising what the event achieved.
 */

export type OutcomeItem = {
  title: string;
  body: string;
};

export function EventOutcomes({
  eyebrow,
  heading,
  outcomes,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  outcomes: OutcomeItem[];
}) {
  return (
    <section id="outcomes" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <li
              key={i}
              className="rounded-2xl bg-brand-mist p-6 ring-1 ring-brand-soft/70"
            >
              <h3 className="text-base font-semibold leading-snug text-brand-ink sm:text-lg">
                {o.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {o.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
