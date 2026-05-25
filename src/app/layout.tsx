import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
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
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
