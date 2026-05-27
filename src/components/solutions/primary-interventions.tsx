import Image from "next/image";
import Link from "next/link";
import { liveUrl } from "@/lib/live-url";

/**
 * The Primary Interventions — six solution cards.
 *
 * Each card is a self-contained mini-poster: hero photo, name, blurb,
 * "Find Out More →" link to the dedicated solution page (still served
 * by gurujal.org until those pages are built locally). The 6R icon
 * sits in the top-right corner as a small badge to tie back to the home
 * page's 6R framework.
 */

type Tone = "teal" | "green" | "orange";

const interventions: {
  name: string;
  blurb: string;
  href: string;
  photo: string;
  icon: string;
  tone: Tone;
}[] = [
  {
    name: "Support a Pond",
    blurb:
      "Restoring and rejuvenating closed water bodies across arid and semi-arid Indian regions.",
    href: "/support-a-pond",
    photo: "/uploads/2026/03/Support-a-pond-hero.jpg",
    icon: "/uploads/2025/06/restore.png",
    tone: "orange",
  },
  {
    name: "Connect the Drops",
    blurb:
      "Awareness, behaviour change and grassroots campaigns that turn water responsibility into daily habit.",
    href: "/connect-the-drop",
    photo: "/uploads/2024/08/connect-the-drops-scaled.jpg",
    icon: "/uploads/2025/06/rethink.png",
    tone: "teal",
  },
  {
    name: "Water Proofing",
    blurb:
      "Making institutions leak-proof and cutting freshwater consumption by up to 50%.",
    href: "/water-proofing",
    photo: "/uploads/2026/03/Water-proofing-hero.jpg",
    icon: "/uploads/2025/06/reduce.png",
    tone: "green",
  },
  {
    name: "We for Water",
    blurb:
      "A flagship fellowship building the next generation of sustainability leaders.",
    href: "/we-for-water",
    photo: "/uploads/2024/08/weforwater-hero.jpg",
    icon: "/uploads/2025/06/resource.png",
    tone: "teal",
  },
  {
    name: "Eco Restoration",
    blurb:
      "Reviving forest cover and native micro-habitats to bring biodiversity back to depleted landscapes.",
    href: "/eco-restoration",
    photo: "/uploads/2026/03/eco-hero.jpg",
    icon: "/uploads/2025/06/revive.png",
    tone: "green",
  },
  {
    name: "ESG Advisory",
    blurb:
      "Strategic roadmaps that turn corporate sustainability commitments into measurable impact.",
    href: "/esg-advisory",
    photo: "/uploads/2025/06/esg.jpg",
    icon: "/uploads/2025/06/realign.png",
    tone: "orange",
  },
];

const toneBadge: Record<Tone, string> = {
  teal: "bg-brand-teal/15 ring-brand-teal/30",
  green: "bg-brand-green/15 ring-brand-green/30",
  orange: "bg-brand-orange/15 ring-brand-orange/30",
};

const toneLink: Record<Tone, string> = {
  teal: "text-brand-teal-dark group-hover:text-brand-teal",
  green: "text-brand-green-dark group-hover:text-brand-green",
  orange: "text-brand-orange-dark group-hover:text-brand-orange",
};

export function PrimaryInterventions() {
  return (
    <section
      id="interventions"
      className="bg-brand-mist scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            The Primary Interventions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Through our programs, we devise and implement innovative
            strategies tailored to the specific needs of each community.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interventions.map((it) => (
            <li key={it.name}>
              <Link
                href={liveUrl(it.href)}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[5/3] w-full overflow-hidden bg-brand-soft/60">
                  <Image
                    src={it.photo}
                    alt={it.name}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Icon badge */}
                  <span
                    className={`absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 backdrop-blur ${toneBadge[it.tone]} bg-white/85`}
                  >
                    <Image
                      src={it.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-brand-ink sm:text-xl">
                    {it.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                    {it.blurb}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${toneLink[it.tone]}`}
                  >
                    Find out more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
