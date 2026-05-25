import Link from "next/link";

/**
 * Thin announcement strip across the very top of every page.
 * Mirrors the live site's "GuruJal is Hiring" callout.
 */
export function AnnouncementBar() {
  return (
    <div className="w-full bg-brand-deep text-white">
      <div className="mx-auto flex h-[50px] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/career"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide hover:text-brand-orange transition"
        >
          <span aria-hidden>📢</span>
          <span className="hidden sm:inline">
            GuruJal is Hiring – Build a Career That Restores Water & Create Real Impact.
          </span>
          <span className="sm:hidden">GuruJal is Hiring</span>
          <span className="font-bold underline underline-offset-2 text-white hover:text-brand-orange">
            CLICK TO APPLY
          </span>
        </Link>
      </div>
    </div>
  );
}
