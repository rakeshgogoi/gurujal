import Image from "next/image";

/**
 * Case study card — large hero photo on one side, narrative on the other.
 * Optional 3-pillar block beneath the narrative summarising the project
 * (e.g. context / problem / outcome).
 */

export type CaseStudyPillar = {
  label: string;
  body: React.ReactNode;
};

export function SolutionCaseStudy({
  eyebrow,
  title,
  blurb,
  paragraphs,
  pillars,
  photo,
  bg = "bg-white",
}: {
  eyebrow: string;
  title: string;
  blurb?: React.ReactNode;
  paragraphs: React.ReactNode[];
  pillars?: CaseStudyPillar[];
  photo: string;
  bg?: string;
}) {
  return (
    <section id="case-study" className={`${bg} scroll-mt-20`}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {title}
          </h2>
          {blurb && (
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              {blurb}
            </p>
          )}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-soft/60 shadow-md">
              <Image
                src={photo}
                alt={title}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {pillars && pillars.length > 0 && (
              <ul className="mt-6 grid gap-3">
                {pillars.map((p) => (
                  <li
                    key={p.label}
                    className="rounded-2xl bg-brand-mist px-5 py-4 ring-1 ring-brand-soft/70"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange-dark">
                      {p.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-ink sm:text-base">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
