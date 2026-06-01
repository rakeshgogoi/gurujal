/**
 * Shared layout for /privacy-policy and /terms-and-conditions.
 *
 * Renders a brand-deep hero band with the page title + last-updated
 * line, then the body sections as a single narrow prose column on a
 * brand-mist background.
 *
 * Each section's body is an array of "blocks". A block can be:
 *   - a plain string → rendered as a paragraph
 *   - `{ kind: "subheading", text }` → rendered as an h3
 *   - `{ kind: "list", items[] }` → rendered as a bullet list
 *
 * Editors update the copy by editing the section arrays passed in
 * from the page files — no MDX or CMS round-trip required.
 */

export type LegalBlock =
  | string
  | { kind: "subheading"; text: string }
  | { kind: "list"; items: string[] };

export type LegalSection = {
  heading: string;
  body: LegalBlock[];
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
                {s.body.map((block, i) => {
                  if (typeof block === "string") {
                    return <p key={i}>{block}</p>;
                  }
                  if (block.kind === "subheading") {
                    return (
                      <h3
                        key={i}
                        className="pt-2 text-base font-semibold text-brand-ink sm:text-lg"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.kind === "list") {
                    return (
                      <ul key={i} className="list-disc space-y-2 pl-6">
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
