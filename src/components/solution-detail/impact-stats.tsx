/**
 * Impact stats strip — 4 or 5 KPI tiles. Same look as Events page
 * counters but on a brand-deep panel so it pops between body sections.
 */

export type ImpactStat = {
  value: string;
  unit?: string;
  label: string;
};

export function SolutionImpactStats({
  eyebrow,
  heading,
  intro,
  stats,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  intro?: React.ReactNode;
  stats: ImpactStat[];
}) {
  const cols =
    stats.length === 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      : stats.length === 3
        ? "grid-cols-1 sm:grid-cols-3"
        : "grid-cols-2 sm:grid-cols-4";

  return (
    <section id="impact" className="bg-brand-deep text-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal-bright">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
              {intro}
            </p>
          )}
        </div>

        <ul className={`mt-12 grid gap-4 sm:gap-6 ${cols}`}>
          {stats.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl bg-white/[0.06] px-5 py-7 text-center ring-1 ring-white/15 backdrop-blur"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold tracking-tight text-brand-teal-bright sm:text-4xl">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="text-base font-semibold text-white/80">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75 sm:text-xs">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
