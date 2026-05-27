import Image from "next/image";

/**
 * Event partners / supporters row — a clean wall of logos, each on a
 * white tile so any background colour works underneath them.
 */

export type PartnerLogo = {
  name: string;
  src: string;
  role?: string;
};

export function EventPartners({
  eyebrow = "Collaboration & Partnership",
  heading = "Partners & Supporters",
  partners,
}: {
  eyebrow?: string;
  heading?: string;
  partners: PartnerLogo[];
}) {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <li
              key={p.name}
              className="flex h-36 flex-col items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 ring-1 ring-brand-soft/70"
            >
              <div className="relative flex flex-1 items-center justify-center">
                <Image
                  src={p.src}
                  alt={p.name}
                  width={300}
                  height={140}
                  className="max-h-20 w-auto max-w-full object-contain"
                />
              </div>
              {p.role && (
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                  {p.role}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
