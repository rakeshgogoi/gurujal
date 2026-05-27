import type { Metadata } from "next";
import { EventsHero } from "@/components/events/hero";
import { EventsSectionNav } from "@/components/events/section-nav";
import { EventsStats } from "@/components/events/stats";
import { ImpactHighlights } from "@/components/events/impact-highlights";
import { UpcomingEmpty } from "@/components/events/upcoming-empty";
import { PastEvents } from "@/components/events/past-events";

export const metadata: Metadata = {
  title: "Events — Where Ideas Meet Impact",
  description:
    "GuruJal's water-action events: knowledge-driven convenings, dialogues and collaborations advancing water security, sustainable cities and community-led transformation across India.",
};

/**
 * /events — composed from the section components under /components/events.
 *
 * Each past event card links to either the dedicated MDX page (still
 * rendered via the [slug] catch-all) or to an external URL where
 * applicable (e.g. ALT EFF on urbanaut.app).
 */
export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsSectionNav />
      <EventsStats />
      <ImpactHighlights />
      <UpcomingEmpty />
      <PastEvents />
    </>
  );
}
