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

/** Sets rendered in the track (split evenly across the two loop halves).
 *  Few announcements means each set is short, so repeat it enough that
 *  one half is always wider than the viewport — otherwise the loop would
 *  show a gap at the right edge. */
const SET_COUNT = 8;

const ANNOUNCEMENTS: Announcement[] = [
  {
    key: "hiring",
    emoji: "📢",
    text: "GuruJal is Hiring – Build a Career That Restores Water & Create Real Impact.",
    cta: "CLICK TO APPLY",
    href: "/career",
  },
];

function AnnouncementLink({
  item,
  decorative,
}: {
  item: Announcement;
  /** Repeated copy: skipped by the keyboard and screen readers. */
  decorative?: boolean;
}) {
  const content = (
    <>
      <span aria-hidden>{item.emoji}</span>
      <span>{item.text}</span>
      <span className="font-bold text-white underline underline-offset-2 hover:text-brand-orange">
        {item.cta}
      </span>
    </>
  );
  const tab = decorative ? { tabIndex: -1 } : {};
  const className =
    "inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-wide transition hover:text-brand-orange";

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} {...tab}>
      {content}
    </a>
  ) : (
    <Link href={item.href} className={className} {...tab}>
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
          <AnnouncementLink item={item} decorative={hidden} />
          <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-white/40" />
        </div>
      ))}
    </div>
  );
}

export function AnnouncementBar() {
  return (
    <div className="gj-announcement-paused w-full overflow-hidden bg-brand-deep text-white">
      <div className="flex h-[50px] items-center pl-4 sm:pl-6 lg:pl-8">
        <div className="flex w-max shrink-0 gj-announcement-marquee">
          {Array.from({ length: SET_COUNT }, (_, i) => (
            <AnnouncementSet key={i} hidden={i > 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
