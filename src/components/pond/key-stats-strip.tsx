/**
 * Key-stats strip — the horizontal row of "value / unit / label" tiles
 * that used to sit inside each pond hero. Lifted out into its own
 * section so the hero can keep its overlay only where the text is, and
 * the photo can breathe on the right side.
 */

export type KeyStat = {
  value: string;
  /** Optional unit suffix (e.g. "KLD", "acres"). */
  unit?: string;
  label: string;
};

export function KeyStatsStrip({ stats }: { stats: KeyStat[] }) {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-6 sm:py-12 lg:px-8">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {stats.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-soft/70"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-brand-ink sm:text-3xl">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-teal-dark">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-1.5 text-[11px] font-semibold leading-snug text-brand-muted sm:text-xs">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
