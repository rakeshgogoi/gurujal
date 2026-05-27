/**
 * Solution "approach" grid — 4-6 cards explaining how the solution
 * works. Each card has an emoji or icon, an eyebrow, title and body.
 */

export type ApproachCard = {
  eyebrow?: string;
  title: string;
  body: React.ReactNode;
  emoji?: string;
  icon?: React.ReactNode;
  tone?: "teal" | "green" | "orange";
};

const toneAccent: Record<NonNullable<ApproachCard["tone"]>, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

export function SolutionApproachGrid({
  id = "approach",
  eyebrow,
  heading,
  intro,
  cards,
  cols = 4,
  bg = "bg-brand-mist",
}: {
  id?: string;
  eyebrow: string;
  heading: React.ReactNode;
  intro?: React.ReactNode;
  cards: ApproachCard[];
  cols?: 2 | 3 | 4;
  bg?: string;
}) {
  const grid =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

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
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              {intro}
            </p>
          )}
        </div>

        <ul className={`mt-12 grid gap-6 ${grid}`}>
          {cards.map((c, i) => (
            <li
              key={i}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {(c.emoji || c.icon) && (
                <span
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ring-1 ${toneAccent[c.tone || "teal"]}`}
                >
                  {c.emoji ? (
                    <span aria-hidden>{c.emoji}</span>
                  ) : (
                    <span className="h-6 w-6">{c.icon}</span>
                  )}
                </span>
              )}
              {c.eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  {c.eyebrow}
                </p>
              )}
              <h3 className="mt-1 text-lg font-semibold leading-snug text-brand-ink">
                {c.title}
              </h3>
              <div className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {c.body}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
