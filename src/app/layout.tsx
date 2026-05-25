import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnnouncementBar } from "@/components/announcement-bar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      {/* `relative` on body anchors the absolute SiteHeader's positioning */}
      <body className="relative min-h-full flex flex-col bg-white text-brand-ink">
        <AnnouncementBar />
        {/* SiteHeader is position:absolute, floating over the hero on the
            homepage. main needs no top padding because Hero handles its own
            internal spacing; other pages add their own padding via the
            site-content-offset utility (see globals.css). */}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
