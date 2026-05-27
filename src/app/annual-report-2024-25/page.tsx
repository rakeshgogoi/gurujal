import type { Metadata } from "next";
import { ReportPage } from "@/components/pdf/report-page";

export const metadata: Metadata = {
  title: "Annual Report 2024–25 — GuruJal",
  description:
    "GuruJal's programmatic, financial and impact disclosures for fiscal year 2024–25.",
};

export default function AnnualReport2024_25Page() {
  return (
    <ReportPage
      fiscalYear="2024–25"
      title="Pan-India, with depth"
      lead={
        <>
          The most recent annual disclosure — reaching five cities
          across India with innovative, context-specific projects
          that raise groundwater tables, while building technology
          for transparent governance and large-scale impact.
        </>
      }
      about={
        <>
          <p>
            The <strong>Annual Report for FY 2024–25</strong> covers
            programmatic, financial and impact disclosures for the
            year. This was the year GuruJal moved from focused
            regional work into a national programme spanning five
            cities, alongside continued deepening of partnerships in
            the existing geographies.
          </p>
          <p>
            The report includes audited financials, programme
            highlights and the year&apos;s impact metrics in
            groundwater recharge, pond restoration, community
            engagement and the WeForWater Fellowship.
          </p>
        </>
      }
      highlights={[
        { value: "5", label: "Cities Reached" },
        { value: "30+", label: "Programmes Run" },
        { value: "100+", label: "Partners" },
        { value: "100%", label: "Audited" },
      ]}
      pdfSrc="/uploads/2025/11/Annual_Report_2024-25.pdf"
      downloadName="GuruJal-Annual-Report-2024-25.pdf"
      otherYears={[
        { fiscalYear: "2022–23", href: "/annual-report-2022-23" },
        { fiscalYear: "2023–24", href: "/annual-report-2023-24" },
      ]}
    />
  );
}
