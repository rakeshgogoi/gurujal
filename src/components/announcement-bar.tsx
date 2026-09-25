import Link from "next/link";

/**
 * Thin announcement strip across the very top of every page — a slow,
 * seamless horizontal ticker so more than one message can live here
 * without crowding the bar. The track renders two consecutive copies
 * of the announcement list; translateX(-50%) (see .gj-announcement-marquee
 * in globals.css) lands exactly at the start of the second copy, so the
 * loop never visibly resets. Hovering pauses it so a link is easy to
 * read and click.
 */

type Announcement = {
  key: string;
  emoji: string;
  text: string;
  cta: string;
  href: string;
  /** True for off-site links, which open in a new tab. */
  external?: boolean;
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    key: "hiring",
    emoji: "📢",
    text: "GuruJal is Hiring – Build a Career That Restores Water & Create Real Impact.",
    cta: "CLICK TO APPLY",
    href: "/career",
  },
  {
    key: "urban-adda",
    emoji: "🎉",
    text: "Urban Adda 26 — 5–7 October 2026, India Habitat Centre, New Delhi.",
    cta: "DETAILS & TICKETS",
    href: "https://www.urbanadda.org/",
    external: true,
  },
];

function AnnouncementLink({ item }: { item: Announcement }) {
  const content = (
    <>
      <span aria-hidden>{item.emoji}</span>
      <span>{item.text}</span>
      <span className="font-bold text-white underline underline-offset-2 hover:text-brand-orange">
        {item.cta}
      </span>
    </>
  );
  const className =
    "inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-wide transition hover:text-brand-orange";

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

/** One full pass through the announcement list, dot-separated. Used
 *  twice back-to-back to build the seamless scrolling track. */
function AnnouncementSet({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {ANNOUNCEMENTS.map((item) => (
        <div key={item.key} className="flex shrink-0 items-center gap-8">
          <AnnouncementLink item={item} />
          <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-white/40" />
        </div>
      ))}
    </div>
  );
}

export function AnnouncementBar() {
  return (
    <div className="gj-announcement-paused w-full overflow-hidden bg-brand-deep text-white">
      <div className="flex h-[50px] items-center">
        <div className="flex w-max gj-announcement-marquee pl-4 sm:pl-6 lg:pl-8">
          <AnnouncementSet />
          <AnnouncementSet hidden />
        </div>
      </div>
    </div>
  );
}
