import type { Metadata } from "next";
import { VolunteerHero } from "@/components/volunteer/hero";
import { VolunteerSectionNav } from "@/components/volunteer/section-nav";
import { WhyVolunteer } from "@/components/volunteer/why-volunteer";
import { ProgrammeLevels } from "@/components/volunteer/programme-levels";
import { VolunteerTracks } from "@/components/volunteer/tracks";
import { VolunteerClosingCta } from "@/components/volunteer/closing-cta";

export const metadata: Metadata = {
  title: "Volunteer with GuruJal — A College Volunteering Programme",
  description:
    "Building India's next generation of green leaders. Six volunteering tracks — from digital storytelling to native nursery work — each ending in a named GuruJal certificate.",
};

export default function VolunteerPage() {
  return (
    <>
      <VolunteerHero />
      <VolunteerSectionNav />
      <WhyVolunteer />
      <ProgrammeLevels />
      <VolunteerTracks />
      <VolunteerClosingCta />
    </>
  );
}
