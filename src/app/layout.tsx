import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnnouncementBar } from "@/components/announcement-bar";
import { FloatingTools } from "@/components/floating-tools";

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
        {/* Stack: announcement bar (dark teal, normal flow) → sticky white
            header → page content. Header takes flow space so the hero (and
            every inner page) starts below it naturally. */}
        <AnnouncementBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingTools />
      </body>
    </html>
  );
}
