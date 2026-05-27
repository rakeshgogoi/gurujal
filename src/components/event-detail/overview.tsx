/**
 * Overview section — section heading, headline, body paragraphs, and an
 * optional 4-tile stats strip above the prose. Used as the first
 * content section under the hero on each event detail page.
 */

export type StatTile = { value: string; label: string };

export function EventOverview({
  eyebrow,
  headline,
  stats,
  paragraphs,
}: {
  eyebrow: string;
  headline: React.ReactNode;
  stats?: StatTile[];
  paragraphs: React.ReactNode[];
}) {
  return (
    <section id="overview" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {headline}
          </h2>

          {stats && stats.length > 0 && (
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {stats.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-brand-mist px-5 py-6 text-center ring-1 ring-brand-soft/70"
                >
                  <div className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted sm:text-sm">
                    {s.label}
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 space-y-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
