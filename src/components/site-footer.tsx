import Link from "next/link";
import Image from "next/image";
import { footerLinks, contactInfo } from "@/lib/nav";

/**
 * Site footer — matches gurujal.org's footer layout.
 * Dark teal background, white logo on left, link columns on right,
 * contact strip and copyright bar at bottom.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="GuruJal — home" className="inline-block">
              <Image
                src="/brand/gurujal-logo-white.png"
                alt="GuruJal"
                width={280}
                height={86}
                className="h-20 w-auto sm:h-24"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
              GuruJal is a water conservation initiative working on pond
              rejuvenation, eco-restoration, and water stewardship — a
              partnership of communities, government, and corporates.
            </p>

            <dl className="mt-7 space-y-3 text-sm">
              <ContactRow icon="phone" label="Phone">
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand-orange">
                  {contactInfo.phone}
                </a>
              </ContactRow>
              <ContactRow icon="mail" label="Email">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-orange">
                  {contactInfo.email}
                </a>
              </ContactRow>
              <ContactRow icon="pin" label="Location">
                {contactInfo.location}
              </ContactRow>
            </dl>
          </div>

          {/* Link columns */}
          <FooterColumn title="Solutions" links={footerLinks.solutions} className="lg:col-span-3" />
          <FooterColumn title="Resources" links={footerLinks.resources} className="lg:col-span-3" />
          <FooterColumn title="Organisation" links={footerLinks.organisation} className="lg:col-span-2" />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © {year} GuruJal. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
            {footerLinks.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
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

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: "phone" | "mail" | "pin";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden
        className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange"
      >
        {icon === "phone" && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
          </svg>
        )}
        {icon === "mail" && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        )}
        {icon === "pin" && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        )}
      </span>
      <div className="text-white/85">
        <dt className="sr-only">{label}</dt>
        <dd>{children}</dd>
      </div>
    </div>
  );
}
