/**
 * "How the Programme Works" — three levels of engagement that a
 * volunteer graduates through, from the GuruJal_Volunteers document.
 */

type Tone = "teal" | "green" | "orange";

const levels: { level: string; commitment: string; reward: string; tone: Tone }[] = [
  {
    level: "Contributor",
    commitment: "2–4 hrs/month",
    reward: "Volunteer badge + event certificate",
    tone: "teal",
  },
  {
    level: "Green Champion",
    commitment: "6–8 hrs/month",
    reward: "Green Champion certificate + skills training",
    tone: "green",
  },
  {
    level: "Water Ambassador",
    commitment: "12+ hrs/month",
    reward: "Full Ambassador certification + GuruJal mentorship + internship priority",
    tone: "orange",
  },
];

const toneAccent: Record<Tone, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

export function ProgrammeLevels() {
  return (
    <section id="levels" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Three levels, feeding into each other
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            The GuruJal Volunteer Programme is built around three levels
            of engagement. Put in more hours, take on more
            responsibility, and unlock deeper mentorship and
            certification.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {levels.map((l, i) => (
            <li
              key={l.level}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ring-1 ${toneAccent[l.tone]}`}
              >
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-brand-ink">
                {l.level}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {l.commitment}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {l.reward}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
