/**
 * Shared layout for /privacy-policy and /terms-and-conditions.
 *
 * Renders a brand-deep hero band with the page title + last-updated
 * line, then the body sections (each {heading, body[]}) as a single
 * narrow prose column on a brand-mist background. Editors can update
 * the copy by editing the section arrays passed in from the page
 * files — no MDX or CMS round-trip required.
 */

export type LegalSection = {
  heading: string;
  /** Each paragraph rendered as its own <p>. Plain strings only —
   *  use multiple entries for paragraph breaks. */
  body: string[];
};

export function LegalPage({
  title,
  lead,
  lastUpdated,
  sections,
}: {
  title: string;
  lead: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative isolate bg-brand-deep">
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-brand-deep via-brand-primary to-brand-deep" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:text-sm">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {lead}
          </p>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-white/55">
            Last updated · {lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-brand-mist">
        <div className="mx-auto max-w-3xl space-y-10 px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold tracking-tight text-brand-ink sm:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-ink/85 sm:text-lg">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
