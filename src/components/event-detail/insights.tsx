/**
 * Key insights / learnings — 3 numbered cards. Same "01 / 02 / 03"
 * layout shared across HydroMingle, Roots & Recharge, and Urban Adda.
 */

export type InsightItem = {
  title: string;
  body: React.ReactNode;
};

export function EventInsights({
  eyebrow,
  heading,
  insights,
  bg = "bg-brand-mist",
}: {
  eyebrow: string;
  heading: React.ReactNode;
  insights: InsightItem[];
  bg?: string;
}) {
  return (
    <section id="learnings" className={`${bg} scroll-mt-20`}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
        </div>

        <ol className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
          {insights.map((it, i) => (
            <li
              key={i}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80"
            >
              <span className="text-4xl font-extrabold tracking-tight text-brand-teal-dark/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-brand-ink sm:text-xl">
                {it.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted sm:text-base">
                {it.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
