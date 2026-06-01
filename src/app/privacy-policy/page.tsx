import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Abhipsa Foundation — through its GuruJal initiative — collects, uses and protects the personal data of individuals across our programmes, events, and digital channels.",
};

/**
 * Authoritative copy mirrors the official Abhipsa Foundation /
 * GuruJal Privacy Policy. Update lastUpdated whenever the source
 * policy changes.
 */
const sections: LegalSection[] = [
  {
    heading: "1. Purpose of Data Collection",
    body: [
      "We collect personal information only for purposes directly related to our work on water management, environmental initiatives, community programmes, research, training, and events. These purposes may include:",
      {
        kind: "list",
        items: [
          "Registration for events, workshops, or volunteer activities",
          "Implementation and monitoring of field projects",
          "Research, surveys, and assessments",
          "Communication and outreach",
          "Reporting to donors or partners (in aggregated or anonymised form)",
          "Compliance with legal or regulatory requirements",
        ],
      },
      "We do not sell, trade, or misuse personal data under any circumstances.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      { kind: "subheading", text: "2.1 Personal Information" },
      "Depending on the context, we may collect:",
      {
        kind: "list",
        items: [
          "Name, age, gender",
          "Address or location (village / ward / city)",
          "Phone number or email ID",
          "Organisation or affiliation",
          "Government-issued ID (only when required by law or for project verification)",
          "Photographs, audio, or video recordings during events or field activities",
        ],
      },
      {
        kind: "subheading",
        text: "2.2 Sensitive Personal Data (collected only with consent)",
      },
      {
        kind: "list",
        items: [
          "Socio-economic details",
          "Community or demographic information",
          "Health or vulnerability-related information relevant to water projects",
        ],
      },
      "We ensure strict safeguards for any sensitive data collected.",
      { kind: "subheading", text: "2.3 Automatically Collected Data" },
      "For website or digital platforms:",
      {
        kind: "list",
        items: [
          "IP address",
          "Browser type, device information",
          "Cookies and analytics data",
        ],
      },
    ],
  },
  {
    heading: "3. How We Use Personal Data",
    body: [
      "Your information may be used for:",
      {
        kind: "list",
        items: [
          "Delivering project activities and community services",
          "Communication regarding programmes, updates, or opportunities",
          "Sending event invitations, reports, newsletters, or outcomes",
          "Research and publication (data is anonymised unless explicit consent is obtained)",
          "Documentation, monitoring, and evaluation",
          "Impact reporting to donors or partners (aggregated / non-identifiable form)",
        ],
      },
      "We ensure that all uses are ethical, lawful, and purpose-specific.",
    ],
  },
  {
    heading: "4. Legal Basis for Processing",
    body: [
      "We collect and process personal data based on:",
      {
        kind: "list",
        items: [
          "Consent from individuals",
          "Legitimate organisational interests (programme delivery, reporting, documentation)",
          "Legal obligations where applicable",
          "Contractual requirements for specific partnerships or donor agreements",
        ],
      },
      "Individuals may withdraw their consent at any time by contacting us.",
    ],
  },
  {
    heading: "5. Data Sharing and Disclosure",
    body: [
      "We may share information only when necessary, and only with:",
      {
        kind: "list",
        items: [
          "Donor organisations (in aggregated or anonymised formats)",
          "Government authorities when required by law",
          "Partner organisations involved in programme delivery (with confidentiality obligations)",
          "Professional service providers such as auditors or IT service providers",
        ],
      },
      "We never share personal data for marketing, commercial, or unrelated purposes.",
    ],
  },
  {
    heading: "6. Data Storage and Security",
    body: [
      "We use secure systems and protocols to protect personal data, including:",
      {
        kind: "list",
        items: [
          "Encrypted digital storage",
          "Restricted access to authorised staff only",
          "Secure handling of physical documents",
          "Regular data backups",
          "Password-protected systems and devices",
        ],
      },
      "We store data only for as long as required for programme purposes or legal obligations.",
    ],
  },
  {
    heading: "7. Rights of Individuals",
    body: [
      "Individuals whose data we collect have the right to:",
      {
        kind: "list",
        items: [
          "Access their personal data",
          "Request correction or updating of inaccurate information",
          "Withdraw consent at any time",
          "Request deletion of their data (subject to legal or reporting requirements)",
          "Ask how their data is being used",
          "Request restrictions on certain uses of their data",
        ],
      },
      "We respond to such requests within a reasonable timeline.",
    ],
  },
  {
    heading: "8. Photographs, Video & Media Consent",
    body: [
      "During events, field visits, or documentation activities, photos or videos may be captured for reporting or communication purposes. We ensure:",
      {
        kind: "list",
        items: [
          "Prior verbal or written consent whenever required",
          "An option to opt out",
          "Sensitive communities or minors are photographed only with explicit permission from responsible guardians",
        ],
      },
    ],
  },
  {
    heading: "9. Data Breach Protocol",
    body: [
      "In the unlikely event of a data breach, we will:",
      {
        kind: "list",
        items: [
          "Notify affected individuals promptly",
          "Provide guidance on protective steps",
          "Report the breach to authorities when legally required",
          "Take corrective action to prevent future incidents",
        ],
      },
    ],
  },
  {
    heading: "10. Children's Privacy",
    body: [
      "We do not knowingly collect personal data from children under 18 without parental or guardian consent. Programmes involving minors follow strict safeguarding protocols.",
    ],
  },
  {
    heading: "11. Third-Party Websites and Links",
    body: [
      "Our website or communications may contain links to external websites. We are not responsible for their privacy practices and encourage users to review their policies.",
    ],
  },
  {
    heading: "12. Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will always be available on our website, and significant changes will be communicated where appropriate.",
    ],
  },
  {
    heading: "13. Contact Us",
    body: [
      "For questions, concerns, or requests related to your personal data, please contact our Data Protection Officer at Abhipsa Foundation:",
      {
        kind: "list",
        items: [
          "Email: management@gurujal.org",
          "Website: www.gurujal.org",
          "Phone: (+91) 931-141-1998",
          "Address: F6/9, Block F, DLF Phase 1, Sector 26A, Gurugram, Haryana 122001",
        ],
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead="Abhipsa Foundation, through its GuruJal initiative, is committed to protecting the privacy, security and confidentiality of every individual whose data we collect across our programmes, events, research, community engagement and digital channels."
      lastUpdated="June 2026"
      sections={sections}
    />
  );
}
