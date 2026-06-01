import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { contactInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the GuruJal website, our content, donations, and event registrations.",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    body: [
      "These Terms & Conditions govern your access to and use of the GuruJal website, our content, donation channels, event registrations and any other services we make available online. By using the site you agree to these Terms. If you do not agree, please discontinue use of the site.",
    ],
  },
  {
    heading: "About GuruJal",
    body: [
      "GuruJal is a not-for-profit initiative focused on water conservation, pond rejuvenation, eco-restoration and community-led water stewardship. Our work is implemented through a combination of public-funded programs, corporate CSR partnerships and individual donations.",
    ],
  },
  {
    heading: "Permitted use of the website",
    body: [
      "You may browse the GuruJal website for personal, non-commercial purposes; share links to our pages and downloadable resources with credit; and contact us, register for events, or make donations through the channels we provide.",
      "You must not: copy, redistribute or sell any GuruJal content for commercial purposes without our written permission; reverse-engineer, scrape, or attempt to access non-public parts of the site; upload anything that is unlawful, defamatory, infringing, malicious, or that disrupts the site's normal operation; or impersonate GuruJal, our staff, partners, donors or other users.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All text, images, illustrations, reports, publications, videos, the GuruJal name, logo and visual identity on this site are the property of GuruJal or our partners and contributors. They are protected under applicable copyright, trademark and other intellectual-property laws.",
      "We are happy to license or share specific resources for educational, research or advocacy purposes — please write to us at the email address below to discuss.",
    ],
  },
  {
    heading: "Donations and contributions",
    body: [
      "Donations to GuruJal are voluntary and used to advance our stated programs. We accept donations only through the channels published on our site (UPI, direct bank transfer, or trusted payment gateways).",
      "All Indian-rupee donations are eligible for tax benefits under Section 80G of the Income Tax Act, subject to our then-current registration status — a receipt will be issued for each donation. Foreign donations are accepted only as permitted under the Foreign Contribution (Regulation) Act, 2010 (FCRA) and its rules.",
      "Donations once made are non-refundable, except in cases of clear duplicate transactions or processing errors — please contact us promptly if you believe such an error has occurred.",
    ],
  },
  {
    heading: "Event registration",
    body: [
      "Where we run events — site visits, symposia, workshops, conferences — registration may be free or carry a contribution. Registration is personal to the individual and not transferable without our prior consent.",
      "We reserve the right to reschedule, modify, or cancel events for reasons including weather, safety, low registration, or force majeure. Where applicable, contributions will be refunded or carried forward to a subsequent event.",
    ],
  },
  {
    heading: "Third-party links and content",
    body: [
      "Our website contains links to third-party websites and embeds third-party content (for example LinkedIn post embeds, YouTube videos, the Google Translate widget). GuruJal does not endorse or assume responsibility for the content, policies or practices of these third parties — use them at your own discretion.",
    ],
  },
  {
    heading: "Disclaimers",
    body: [
      "The information on this site is provided for general awareness and program documentation. While we make reasonable efforts to keep it accurate and up to date, we make no warranties — express or implied — about completeness, accuracy, suitability for a particular purpose, or uninterrupted availability of the site.",
      "Technical or scientific content (for example pond rejuvenation methodologies, hydrological data, SOPs) is shared for informational purposes; users should consult qualified professionals before applying any of it in their own contexts.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the maximum extent permitted by applicable law, GuruJal, its trustees, employees, volunteers and partners will not be liable for any indirect, incidental, special or consequential loss or damage arising out of or in connection with your use of this website or any reliance on its content.",
    ],
  },
  {
    heading: "Governing law and jurisdiction",
    body: [
      "These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms or your use of the website will be subject to the exclusive jurisdiction of the courts at Gurugram, Haryana.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these Terms from time to time. The 'Last updated' date at the top of this page indicates when they were last revised. Continued use of the site after a change constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `For any questions about these Terms, write to ${contactInfo.email} or call ${contactInfo.phone}. Our registered address is ${contactInfo.location}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lead="Please read these Terms carefully before using the GuruJal website. By accessing the site you agree to be bound by them."
      lastUpdated="June 2026"
      sections={sections}
    />
  );
}
