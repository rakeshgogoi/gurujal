import Image from "next/image";
import Link from "next/link";

const sixR = [
  {
    key: "RESOURCE",
    icon: "/uploads/2025/06/resource.png",
    blurb: "Equip young adults with the skills to become experts in the green economy.",
    href: "/we-for-water",
  },
  {
    key: "REDUCE",
    icon: "/uploads/2025/06/reduce.png",
    blurb: "Assist institutions in integrating climate-positive designs.",
    href: "/water-proofing",
  },
  {
    key: "RESTORE",
    icon: "/uploads/2025/06/restore.png",
    blurb: "Implement nature-based solutions to enhance groundwater tables.",
    href: "/support-a-pond",
  },
  {
    key: "REVIVE",
    icon: "/uploads/2025/06/revive.png",
    blurb: "Foster the growth of natural forest covers to support local biodiversity.",
    href: "/eco-restoration",
  },
  {
    key: "RETHINK",
    icon: "/uploads/2025/06/rethink.png",
    blurb: "Promote behavior change to cultivate a positive attitude towards conservation.",
    href: "/connect-the-drops",
  },
  {
    key: "REALIGN",
    icon: "/uploads/2025/06/realign.png",
    blurb: "Guide companies in balancing profits, people, and the planet.",
    href: "/esg-advisory",
  },
];

export function SixRApproach() {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            There is a Smart Solution for the Crisis
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            The 6R Approach
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            A circular and strategic framework for sustainability and resilience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sixR.map((r) => (
            <Link
              key={r.key}
              href={r.href}
              className="group relative flex flex-col rounded-2xl border border-brand-soft/80 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-mist ring-1 ring-brand-soft">
                  <Image
                    src={r.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </span>
                <div className="text-2xl font-bold tracking-tight text-brand-primary">
                  {r.key}
                </div>
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-brand-muted">
                {r.blurb}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
