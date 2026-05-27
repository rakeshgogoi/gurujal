import type { Metadata } from "next";
import { ReportPage } from "@/components/pdf/report-page";

export const metadata: Metadata = {
  title: "Annual Report 2022–23 — GuruJal",
  description:
    "GuruJal's programmatic, financial and impact disclosures for fiscal year 2022–23.",
};

export default function AnnualReport2022_23Page() {
  return (
    <ReportPage
      fiscalYear="2022–23"
      title="A year of laying the groundwork"
      lead={
        <>
          Our first formal annual disclosure as an autonomous
          organisation — capturing the programmes shipped, the
          partnerships built and the early indicators of impact across
          our pond, wells and community programmes.
        </>
      }
      about={
        <>
          <p>
            The <strong>Annual Report for FY 2022–23</strong> covers
            GuruJal&apos;s programmatic, financial and impact
            disclosures for the year. It documents the projects
            executed, the partners and donors who made them possible,
            and the audited financials of the organisation.
          </p>
          <p>
            This was the year GuruJal transitioned to being an
            autonomous organisation — focused on transparent governance,
            community-driven programmes and integrated solutions for
            multiple geographies.
          </p>
        </>
      }
      highlights={[
        { value: "10+", label: "Programmes Run" },
        { value: "5+", label: "States Touched" },
        { value: "20+", label: "Partners" },
        { value: "100%", label: "Audited" },
      ]}
      pdfSrc="/uploads/2025/11/Annual_Report_2022-23.pdf"
      downloadName="GuruJal-Annual-Report-2022-23.pdf"
      otherYears={[
        { fiscalYear: "2023–24", href: "/annual-report-2023-24" },
        { fiscalYear: "2024–25", href: "/annual-report-2024-25" },
      ]}
    />
  );
}
