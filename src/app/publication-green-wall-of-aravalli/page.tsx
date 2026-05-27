import type { Metadata } from "next";
import { PublicationPage } from "@/components/pdf/publication-page";

export const metadata: Metadata = {
  title: "The Green Wall of Aravalli — GuruJal",
  description:
    "A roadmap for ecological restoration of the Aravalli landscape around Damdama Lake, developed with 20+ experts across biodiversity, hydrology, recharge, social challenges and cultural heritage.",
};

export default function GreenWallOfAravalliPage() {
  return (
    <PublicationPage
      badge="Research roadmap"
      title="The Green Wall of Aravalli"
      lead={
        <>
          A roadmap for ecological restoration of a 5,000-acre landscape
          around Damdama Lake, developed with 20+ experts across
          biodiversity, hydrology, groundwater recharge, social
          challenges and cultural heritage.
        </>
      }
      about={
        <>
          <p>
            <strong>The Green Wall of Aravalli: A Roadmap for
            Ecological Restoration</strong> is a multi-disciplinary
            study covering a 5,000-acre landscape around Damdama Lake.
          </p>
          <p>
            Over 20 experts across biodiversity, hydrology, groundwater
            recharge, social challenges and cultural heritage came
            together to chart a credible path back to ecological health
            for this critical zone of the Aravalli range — combining
            field data, mapping, ecology and community narratives.
          </p>
        </>
      }
      whatsInside={[
        "Landscape-scale ecological baseline",
        "Hydrology and groundwater recharge analysis",
        "Biodiversity assessment & restoration priorities",
        "Community livelihoods & cultural heritage mapping",
        "Phased implementation roadmap",
      ]}
      pdfSrc="/uploads/2025/06/Green-Wall-of-Aravalli.pdf"
      downloadName="The-Green-Wall-of-Aravalli.pdf"
      storageKey="green-wall-of-aravalli"
      related={[
        { title: "Pond Rejuvenation SOP", href: "/publication-pond-rejuvenation-sop" },
        { title: "SoP of Wells", href: "/publication-sop-of-wells" },
        { title: "Wells of Gurugram", href: "/publication-wells-of-gurugram" },
      ]}
    />
  );
}
