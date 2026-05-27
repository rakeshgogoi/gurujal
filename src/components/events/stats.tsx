/**
 * Events page statistics strip — 4 KPI tiles.
 *
 * The live site shows "0+" across the board because the counters are
 * managed in the WordPress CMS; once real numbers exist they'll plug
 * straight into this component.
 */

// Numbers pulled from the live gurujal.org/events page (data-target
// attributes on the counter animation).
const stats = [
  { label: "Events Hosted", value: "41+" },
  { label: "Participants", value: "3,000+" },
  { label: "Cities", value: "12+" },
  { label: "Partners", value: "200+" },
];

export function EventsStats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-6 lg:px-8 lg:py-16">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl bg-brand-mist px-5 py-7 text-center ring-1 ring-brand-soft/70"
            >
              <div className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted sm:text-sm">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
