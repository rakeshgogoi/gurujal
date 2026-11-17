"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

/**
 * Google Analytics 4 (gtag.js).
 *
 * Loaded after the page is interactive so it never blocks rendering.
 * GA4's "enhanced measurement" tracks client-side route changes in the
 * App Router automatically, so no manual page_view calls are needed.
 *
 * The embedded Sanity Studio (/studio) is editors-only, so it is left
 * out to keep staff sessions out of the audience numbers.
 */
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
