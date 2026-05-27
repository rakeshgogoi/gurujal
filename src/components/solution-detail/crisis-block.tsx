/**
 * Two-column "the crisis" / "the problem" block.
 *
 * Left: section eyebrow + bold headline + paragraphs.
 * Right: optional stat card with a big number, label, and supporting
 * text (e.g. "We lose 30,000 ponds every year").
 */

export function SolutionCrisisBlock({
  eyebrow,
  heading,
  paragraphs,
  stat,
  bg = "bg-white",
}: {
  eyebrow: string;
  heading: React.ReactNode;
  paragraphs: React.ReactNode[];
  stat?: { value: string; label: string; supporting?: React.ReactNode };
  bg?: string;
}) {
  return (
    <section id="crisis" className={`${bg} scroll-mt-20`}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              {heading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {stat && (
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-teal p-8 text-white shadow-xl sm:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-orange/30 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-brand-teal-bright/40 blur-3xl"
                />
                <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright">
                  {stat.label}
                </p>
                <div className="relative mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                  {stat.value}
                </div>
                {stat.supporting && (
                  <p className="relative mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                    {stat.supporting}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
