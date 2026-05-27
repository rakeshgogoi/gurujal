import type { Metadata } from "next";
import { PublicationPage } from "@/components/pdf/publication-page";

export const metadata: Metadata = {
  title: "Wells of Gurugram — GuruJal",
  description:
    "An inventory and study of the historic open-wells of Gurugram — their current state, ownership patterns and pathways for restoration — combining on-ground surveys with hydrological analysis.",
};

export default function WellsOfGurugramPage() {
  return (
    <PublicationPage
      badge="Inventory study"
      title="Wells of Gurugram"
      lead={
        <>
          An inventory and study of the historic open-wells of
          Gurugram — their current state, ownership patterns and
          pathways for restoration — combining on-ground surveys with
          hydrological analysis.
        </>
      }
      about={
        <>
          <p>
            <strong>Wells of Gurugram</strong> documents the city&apos;s
            network of historic open wells — once the backbone of the
            region&apos;s water security — and assesses their present
            condition, ownership patterns and revival potential.
          </p>
          <p>
            The report combines on-ground surveys with hydrological
            analysis to make the case for treating wells as integral
            to Gurugram&apos;s water future, not relics of its past.
          </p>
        </>
      }
      whatsInside={[
        "A census of identified wells across the district",
        "Condition assessment and classification",
        "Hydrological context (aquifer linkage, recharge zones)",
        "Community and institutional ownership map",
        "Restoration & revival recommendations",
      ]}
      pdfSrc="/uploads/2024/08/Wells-of-Gurugram.pdf"
      downloadName="GuruJal-Wells-of-Gurugram.pdf"
      storageKey="wells-of-gurugram"
      related={[
        { title: "SoP of Wells", href: "/publication-sop-of-wells" },
        { title: "Pond Rejuvenation SOP", href: "/publication-pond-rejuvenation-sop" },
        { title: "The Green Wall of Aravalli", href: "/publication-green-wall-of-aravalli" },
      ]}
    />
  );
}
