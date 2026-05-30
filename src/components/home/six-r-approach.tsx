import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { isLocalRoute } from "@/lib/nav";
import { liveUrl } from "@/lib/live-url";

/** Resolve a 6R card href to either an internal path or the live site. */
function resolveHref(href: string): string {
  return isLocalRoute(href) ? href : liveUrl(href);
}

const sixR = [
  {
    key: "RESOURCE",
    icon: "/uploads/2025/06/resource.png",
    blurb:
      "Equip young adults with the skills to become experts in the green economy.",
    href: "/we-for-water",
    tone: "teal",
  },
  {
    key: "REDUCE",
    icon: "/uploads/2025/06/reduce.png",
    blurb: "Assist institutions in integrating climate-positive designs.",
    href: "/water-proofing",
    tone: "green",
  },
  {
    key: "RESTORE",
    icon: "/uploads/2025/06/restore.png",
    blurb:
      "Implement nature-based solutions to enhance groundwater tables.",
    href: "/support-a-pond",
    tone: "orange",
  },
  {
    key: "REVIVE",
    icon: "/uploads/2025/06/revive.png",
    blurb:
      "Foster the growth of natural forest covers to support local biodiversity.",
    href: "/eco-restoration",
    tone: "green",
  },
  {
    key: "RETHINK",
    icon: "/uploads/2025/06/rethink.png",
    blurb:
      "Promote behavior change to cultivate a positive attitude towards conservation.",
    href: "/connect-the-drop",
    tone: "teal",
  },
  {
    key: "REALIGN",
    icon: "/uploads/2025/06/realign.png",
    blurb: "Guide companies in balancing profits, people, and the planet.",
    href: "/esg-advisory",
    tone: "orange",
  },
] as const;

type Tone = (typeof sixR)[number]["tone"];

const toneGradient: Record<Tone, string> = {
  teal: "from-brand-teal/15 via-brand-teal/5",
  green: "from-brand-green/15 via-brand-green/5",
  orange: "from-brand-orange/15 via-brand-orange/5",
};
const toneIconRing: Record<Tone, string> = {
  teal: "ring-brand-teal/30 bg-brand-teal/10",
  green: "ring-brand-green/30 bg-brand-green/10",
  orange: "ring-brand-orange/30 bg-brand-orange/10",
};
const toneIconHalo: Record<Tone, string> = {
  teal: "bg-brand-teal/10",
  green: "bg-brand-green/10",
  orange: "bg-brand-orange/10",
};
const toneTitle: Record<Tone, string> = {
  teal: "text-brand-teal-dark",
  green: "text-brand-green-dark",
  orange: "text-brand-orange-dark",
};
const toneStepBg: Record<Tone, string> = {
  teal: "bg-brand-teal text-white",
  green: "bg-brand-green text-white",
  orange: "bg-brand-orange text-white",
};

/**
 * "The 6R Approach" — auto-marquee row of cards with arrow connectors
 * between them, emphasising the circular flow of the framework.
 *
 *   - Two copies of the cards-and-arrows set live in a flex track; a CSS
 *     keyframe translates the track by -50% over 60s for a seamless
 *     loop.
 *   - Hovering anywhere over the band pauses the animation so visitors
 *     can read.
 *   - Each card retains its hover lift, tone gradient sweep, icon nudge
 *     and "Learn more" arrow.
 */
export function SixRApproach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-brand-mist scroll-mt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            There is a Smart Solution for the Crisis
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            The 6R Approach
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            A circular and strategic framework for sustainability and
            resilience — six interlinked levers that compound into lasting
            water security.
          </p>
        </div>

        {/* Below lg: native touch-scroll with snap. lg+: auto-marquee
            with the CSS animation. Either way the user can pan with a
            finger on mobile because the wrapper is overflow-x-auto and
            the marquee animation is disabled at that breakpoint. */}
        <div className="gj-sixr-paused relative mt-14 -mx-4 overflow-x-auto overscroll-x-contain sm:-mx-6 lg:-mx-8 lg:overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="gj-sixr-marquee flex w-max items-stretch gap-6 snap-x snap-mandatory px-6 pb-2 sm:px-8 lg:snap-none lg:px-8">
            {[...sixR, ...sixR].map((r, i) => {
              const stepIndex = i % sixR.length; // 0..5
              return (
                <Fragment key={i}>
                  <li
                    data-card
                    className="snap-start shrink-0 w-[240px] sm:w-[260px] lg:w-[280px] lg:snap-none"
                  >
                    <Card r={r} stepIndex={stepIndex} />
                  </li>
                  <FlowArrow tone={r.tone} />
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Card({
  r,
  stepIndex,
}: {
  r: (typeof sixR)[number];
  stepIndex: number;
}) {
  return (
    <Link
      href={resolveHref(r.href)}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-soft/80 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-accent hover:shadow-2xl"
    >
      {/* Background tone gradient — invisible at rest, sweeps in on hover */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-br ${toneGradient[r.tone]} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Floating accent halo behind the icon */}
      <div
        aria-hidden
        className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${toneIconHalo[r.tone]} blur-2xl opacity-60 transition-all duration-500 group-hover:scale-125 group-hover:opacity-90`}
      />

      {/* Step badge + icon row */}
      <div className="relative flex items-center justify-between">
        <span
          className={`inline-flex h-6 items-center rounded-full px-2 text-[10px] font-bold uppercase tracking-[0.18em] ${toneStepBg[r.tone]}`}
        >
          Step {String(stepIndex + 1).padStart(2, "0")}
        </span>
        <span
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${toneIconRing[r.tone]} transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
        >
          <Image
            src={r.icon}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
        </span>
      </div>

      <div
        className={`relative mt-5 text-2xl font-bold tracking-tight ${toneTitle[r.tone]}`}
      >
        {r.key}
      </div>
      <p className="relative mt-2 flex-1 text-[13px] leading-relaxed text-brand-muted">
        {r.blurb}
      </p>
      <span className="relative mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
        Learn more
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-500 group-hover:translate-x-1.5"
          aria-hidden
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </Link>
  );
}

/**
 * Inter-card flow arrow. Tone tinted in the colour of the card it follows
 * so the flow visually carries the previous card's energy forward.
 */
function FlowArrow({ tone }: { tone: Tone }) {
  const arrowColor =
    tone === "teal"
      ? "text-brand-teal/55"
      : tone === "green"
        ? "text-brand-green/55"
        : "text-brand-orange/55";

  return (
    <li
      aria-hidden
      className="flex shrink-0 items-center justify-center self-center"
    >
      <svg
        width="36"
        height="24"
        viewBox="0 0 48 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={arrowColor}
      >
        <line x1="4" y1="16" x2="40" y2="16" />
        <polyline points="32 8, 40 16, 32 24" />
      </svg>
    </li>
  );
}
