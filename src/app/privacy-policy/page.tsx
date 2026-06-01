import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { contactInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GuruJal collects, uses and protects the personal information of visitors, donors, volunteers, and partners.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    body: [
      "GuruJal is a not-for-profit initiative committed to water conservation, pond rejuvenation and community-led eco-restoration. This Privacy Policy explains how we collect, use and safeguard information you share with us through this website, our contact and donation forms, our events, and any other interactions you have with GuruJal.",
      "By using the GuruJal website you agree to the practices described in this policy. If you do not agree, please stop using the site and our services.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Information you give us voluntarily — for example your name, email address, phone number, organisation, and message when you fill in a contact form, sign up for a newsletter, register for an event, or make a donation. Donor information additionally includes the amount and the channel (UPI, bank transfer, payment gateway, etc.) used for the contribution.",
      "Information collected automatically — basic analytics about how visitors use the site, such as pages viewed, time on page, device type, browser, and approximate location (derived from IP). We collect this through standard logging and privacy-respecting analytics; we do not attempt to identify individual visitors.",
      "Third-party content embedded on this site (for example LinkedIn post embeds, YouTube videos, or the Google Translate widget) may set cookies or collect their own analytics under their respective privacy policies.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "To respond to your enquiry, send you the resource you requested, register you for an event, or process and acknowledge your donation.",
      "To keep you informed — only with your consent — about GuruJal programs, impact updates, upcoming events, and ways to participate.",
      "To improve the website and our programs through aggregated, non-identifying analytics.",
      "To comply with applicable laws, including reporting requirements for donations under Indian tax and FCRA rules where relevant.",
    ],
  },
  {
    heading: "How we share your information",
    body: [
      "We do not sell or rent your personal information to anyone. Personal information is shared only with GuruJal staff and verified partners on a need-to-know basis, with service providers (such as payment processors, email-sending platforms, or hosting providers) that help us run our programs and which are bound by confidentiality terms, and with government authorities where the law requires us to do so.",
    ],
  },
  {
    heading: "Cookies and similar technologies",
    body: [
      "Essential cookies keep the site functional (for example remembering your language preference when you switch to Hindi). Analytics cookies help us understand usage in aggregate. Third-party embeds (LinkedIn, YouTube, Google Translate) may set their own cookies — please see their policies for details.",
      "You can block or delete cookies in your browser settings; the site will still work but some preferences will not persist between visits.",
    ],
  },
  {
    heading: "Data retention and security",
    body: [
      "We retain personal information only as long as needed for the purpose it was collected, or as required by law. Donation records are kept for the period mandated under Indian financial regulations.",
      "We take reasonable technical and organisational measures to protect personal information against loss, misuse, unauthorised access or disclosure. No method of transmission over the internet is fully secure; we encourage you to share sensitive information through secure channels only.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us at any time to confirm what personal information we hold about you, correct inaccuracies, withdraw consent to receive communications, or request deletion of your personal data — subject to any retention requirements imposed by law. To exercise these rights, write to us at the email address listed below.",
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      "The GuruJal website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us personal information, please contact us and we will take prompt steps to delete it.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time as our programs and the regulatory environment evolve. The 'Last updated' date at the top of this page indicates when the policy was most recently revised. Material changes will be notified through the website and, where appropriate, to subscribers by email.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `For questions about this policy or to exercise your rights, write to ${contactInfo.email} or call ${contactInfo.phone}. Our registered address is ${contactInfo.location}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead="GuruJal respects the privacy of every visitor, donor, volunteer and partner. This policy explains the information we collect and how it is used."
      lastUpdated="June 2026"
      sections={sections}
    />
  );
}
