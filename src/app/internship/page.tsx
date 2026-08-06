import type { Metadata } from "next";
import { InternshipHero } from "@/components/internship/hero";
import { InternshipSectionNav } from "@/components/internship/section-nav";
import { WhyIntern } from "@/components/internship/why-intern";
import { OpenInternships } from "@/components/internship/roles";
import { CommonFeatures } from "@/components/internship/common-features";
import { InternshipClosingCta } from "@/components/internship/closing-cta";

export const metadata: Metadata = {
  title: "Internships at GuruJal — Water Conservation & Ecological Restoration",
  description:
    "Seven internship tracks across rural water security, community mobilisation, communications, native nursery restoration, volunteer management and events. Real deliverables, field exposure, and a GuruJal Certificate of Internship.",
};

export default function InternshipPage() {
  return (
    <>
      <InternshipHero />
      <InternshipSectionNav />
      <WhyIntern />
      <OpenInternships />
      <CommonFeatures />
      <InternshipClosingCta />
    </>
  );
}
