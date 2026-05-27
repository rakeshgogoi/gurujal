import type { Metadata } from "next";
import { ReportPage } from "@/components/pdf/report-page";

export const metadata: Metadata = {
  title: "Annual Report 2023–24 — GuruJal",
  description:
    "GuruJal's programmatic, financial and impact disclosures for fiscal year 2023–24.",
};

export default function AnnualReport2023_24Page() {
  return (
    <ReportPage
      fiscalYear="2023–24"
      title="From pilots to programmes"
      lead={
        <>
          A year of scaling — the second annual report captures
          deeper geographic reach, the launch of the WeForWater
          Fellowship and the institutionalisation of GuruJal&apos;s
          governance frameworks.
        </>
      }
      about={
        <>
          <p>
            The <strong>Annual Report for FY 2023–24</strong>{" "}
            documents a year of consolidation and growth — pond
            restorations across new geographies, the formalisation of
            the WeForWater Fellowship, and continued investment in
            transparent governance and audited financials.
          </p>
          <p>
            It records the partners, donors and field teams who made
            the year possible — and sets the stage for the larger
            ambition outlined in the 2024–25 report.
          </p>
        </>
      }
      highlights={[
        { value: "20+", label: "Programmes Run" },
        { value: "7+", label: "States Touched" },
        { value: "40+", label: "Partners" },
        { value: "1", label: "Fellowship Launched" },
      ]}
      pdfSrc="/uploads/2025/11/Annual_Report_2023-24.pdf"
      downloadName="GuruJal-Annual-Report-2023-24.pdf"
      otherYears={[
        { fiscalYear: "2022–23", href: "/annual-report-2022-23" },
        { fiscalYear: "2024–25", href: "/annual-report-2024-25" },
      ]}
    />
  );
}
