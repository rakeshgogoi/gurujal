"use client";

import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingTools } from "@/components/floating-tools";

/**
 * Conditional site chrome. The Sanity Studio at /studio renders a
 * full-screen editor UI that must not be wrapped by the GuruJal
 * header / footer / floating tools — so we return null there. Every
 * other route gets the full chrome stack.
 */
function isChromeless(pathname: string | null) {
  return Boolean(pathname && pathname.startsWith("/studio"));
}

export function SiteChromeTop() {
  const pathname = usePathname();
  if (isChromeless(pathname)) return null;
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
    </>
  );
}

export function SiteChromeBottom() {
  const pathname = usePathname();
  if (isChromeless(pathname)) return null;
  return (
    <>
      <SiteFooter />
      <FloatingTools />
    </>
  );
}
