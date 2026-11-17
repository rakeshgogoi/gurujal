import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteChromeTop, SiteChromeBottom } from "@/components/site-chrome";
import { GoogleAnalytics } from "@/components/google-analytics";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * Manrope — display font for all headings. Variable, geometric, clean,
 * widely used by professional brands for refined modern headlines while
 * pairing well with DM Sans body copy.
 */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GuruJal — Water is life",
    template: "%s | GuruJal",
  },
  description:
    "GuruJal is a water conservation initiative working on pond rejuvenation, eco-restoration, and water stewardship across India.",
  metadataBase: new URL("https://gurujal.org"),
  openGraph: {
    title: "GuruJal — Water is life",
    description:
      "Water conservation, pond rejuvenation, and eco-restoration initiatives by GuruJal.",
    url: "https://gurujal.org",
    siteName: "GuruJal",
    locale: "en_IN",
    type: "website",
  },
};

/** GA4 measurement ID for gurujal.org (public by design — it is visible in
 *  every page's source). Only sent from real production builds, so local
 *  development and Vercel preview deployments never pollute the numbers. */
const GA_MEASUREMENT_ID = "G-PQH8XBHZS1";
const GA_ENABLED =
  process.env.NODE_ENV === "production" &&
  process.env.VERCEL_ENV !== "preview";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-ink overflow-x-hidden">
        {/* Stack: announcement bar → sticky header → page content →
            footer + floating tools. Chrome is hidden on /studio so the
            embedded Sanity editor gets a clean full-screen canvas. */}
        <SiteChromeTop />
        <main className="flex-1">{children}</main>
        <SiteChromeBottom />
        <Analytics />
        {GA_ENABLED && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
