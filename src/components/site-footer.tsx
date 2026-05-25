import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="GuruJal — home" className="inline-block">
              <Image
                src="/brand/gurujal-logo-white.png"
                alt="GuruJal"
                width={200}
                height={62}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
              GuruJal is a water conservation initiative working on pond
              rejuvenation, eco-restoration, and water stewardship across
              India.
            </p>
            <p className="mt-6 text-sm text-white/60">
              Water is life.
            </p>
          </div>

          {/* Initiatives */}
          <FooterColumn title="Initiatives" links={footerLinks.initiatives} />
          {/* About */}
          <FooterColumn title="Organisation" links={footerLinks.about} />
          {/* Legal */}
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © {year} GuruJal. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Built with care · Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
