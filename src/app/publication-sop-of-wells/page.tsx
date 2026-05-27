import type { Metadata } from "next";
import { PublicationPage } from "@/components/pdf/publication-page";

export const metadata: Metadata = {
  title: "SoP of Wells — GuruJal",
  description:
    "Standard Operating Procedure for the assessment, rejuvenation and management of traditional open wells across India — a practical handbook for practitioners and government officers.",
};

export default function SopOfWellsPage() {
  return (
    <PublicationPage
      badge="Standard Operating Procedure"
      title="SoP of Wells"
      lead={
        <>
          A practical handbook for the assessment, rejuvenation and
          ongoing care of traditional open wells across India —
          designed for practitioners, community groups and government
          officers undertaking restoration work.
        </>
      }
      about={
        <>
          <p>
            The <strong>Standard Operating Procedure (SoP) for Wells</strong>{" "}
            captures GuruJal&apos;s methodology for the assessment,
            rejuvenation and ongoing care of traditional open wells
            across India.
          </p>
          <p>
            It is intended as a practical handbook for practitioners,
            community groups and government officers undertaking
            similar restoration work — bridging engineering, ecology
            and community ownership.
          </p>
        </>
      }
      whatsInside={[
        "Site assessment & baseline ecology",
        "Structural and hydrological evaluation",
        "Step-by-step restoration protocols",
        "Community engagement guidance",
        "Monitoring and stewardship templates",
      ]}
      pdfSrc="/uploads/2024/08/SoP-of-Wells.pdf"
      downloadName="GuruJal-SoP-of-Wells.pdf"
      storageKey="sop-of-wells"
      related={[
        { title: "Wells of Gurugram", href: "/publication-wells-of-gurugram" },
        { title: "Pond Rejuvenation SOP", href: "/publication-pond-rejuvenation-sop" },
        { title: "The Green Wall of Aravalli", href: "/publication-green-wall-of-aravalli" },
      ]}
    />
  );
}
