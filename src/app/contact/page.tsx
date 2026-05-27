import type { Metadata } from "next";
import Link from "next/link";
import { ContactHero } from "@/components/contact/hero";
import { ContactInfoGrid } from "@/components/contact/info-grid";
import { ContactFormAndMap } from "@/components/contact/form-and-map";

export const metadata: Metadata = {
  title: "Contact GuruJal — Let's build water-secure communities, together",
  description:
    "Reach out to GuruJal — phone, email, office address and a contact form. We're open to collaborations with citizens, researchers, policymakers and corporate partners.",
};

function SupportStrip() {
  return (
    <section className="bg-white pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal via-brand-accent to-brand-primary px-8 py-12 sm:px-12 sm:py-14 lg:px-16">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                Support our work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Stand behind India&apos;s water security.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85">
                Help us revive ponds, recharge groundwater and restore
                ecosystems. Every contribution — financial, professional
                or volunteer — goes directly to communities on the ground.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
              >
                Support a Pond
              </Link>
              <Link
                href="/career"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoGrid />
      <ContactFormAndMap />
      <SupportStrip />
    </>
  );
}
