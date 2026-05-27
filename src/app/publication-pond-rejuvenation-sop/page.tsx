import type { Metadata } from "next";
import { PublicationPage } from "@/components/pdf/publication-page";

export const metadata: Metadata = {
  title: "Pond Rejuvenation SOP — GuruJal",
  description:
    "GuruJal's field-tested standard operating procedure for restoring rural and peri-urban ponds — from baseline survey through structural works to long-term governance.",
};

export default function PondRejuvenationSopPage() {
  return (
    <PublicationPage
      badge="Standard Operating Procedure"
      title="Pond Rejuvenation SOP"
      lead={
        <>
          A field-tested methodology for restoring ponds — from the
          first baseline survey through structural works, biodiversity
          revival and the long-term governance arrangements that keep
          revived ponds healthy.
        </>
      }
      about={
        <>
          <p>
            The <strong>Pond Rejuvenation SOP</strong> is GuruJal&apos;s
            field-tested methodology for restoring ponds — from the
            first baseline survey through structural works, biodiversity
            revival and the long-term governance arrangements that keep
            revived ponds healthy.
          </p>
          <p>
            It is designed to be picked up by any community, NGO or
            local-government body wanting to do this work well — a
            single, opinionated playbook so the right things happen in
            the right order, with the right stakeholders involved at
            each step.
          </p>
        </>
      }
      whatsInside={[
        "Pre-restoration baseline survey",
        "Bathymetric, hydrological and ecological assessment",
        "Restoration plan templates",
        "Community stewardship models",
        "Post-restoration monitoring & evaluation",
      ]}
      pdfSrc="/uploads/2025/06/Pond-Rejuvenation-SOP.pdf"
      downloadName="GuruJal-Pond-Rejuvenation-SOP.pdf"
      storageKey="pond-rejuvenation-sop"
      related={[
        { title: "The Green Wall of Aravalli", href: "/publication-green-wall-of-aravalli" },
        { title: "SoP of Wells", href: "/publication-sop-of-wells" },
        { title: "Wells of Gurugram", href: "/publication-wells-of-gurugram" },
      ]}
    />
  );
}
