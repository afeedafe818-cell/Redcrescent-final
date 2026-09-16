import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We may collect information that you provide when you contact us, submit an enquiry, request admission information or use an online form.",
    ],
    bullets: [
      "Name, email address, phone number and address",
      "Course, admission and eligibility information",
      "Documents or details submitted with an application or enquiry",
      "Messages, feedback and other information you choose to provide",
    ],
  },
  {
    title: "2. Information Collected Automatically",
    paragraphs: [
      "When you visit the website, limited technical information may be collected automatically, such as your IP address, browser type, device information, pages visited and approximate usage times. This information helps us maintain website security and improve the website experience.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: ["We may use collected information to:"],
    bullets: [
      "Respond to enquiries and provide requested information",
      "Process admission-related requests and applications",
      "Communicate about courses, events, facilities and institutional updates",
      "Verify information and provide support",
      "Improve website content, services and user experience",
      "Protect the website against fraud, misuse and security threats",
      "Comply with applicable legal and regulatory requirements",
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "We do not sell personal information. We may share information only where reasonably necessary to provide services, process applications or comply with law.",
      "This may include sharing information with authorised staff, affiliated educational or regulatory bodies, service providers, payment gateways, technology providers or government authorities where permitted or required.",
    ],
  },
  {
    title: "5. Forms, Payments and Third-Party Services",
    paragraphs: [
      "The website may link to or use third-party services, including admission forms, payment gateways, maps, social-media platforms and other external websites. Information submitted through those services may be governed by their own privacy policies and terms.",
      "The Institute does not control the privacy practices, security or availability of third-party services. Please review their policies before submitting information.",
    ],
  },
  {
    title: "6. Cookies and Similar Technologies",
    paragraphs: [
      "The website or its service providers may use cookies or similar technologies to support essential website functions, remember preferences, understand website usage and improve performance. You may be able to control cookies through your browser settings, although some website features may not work as intended if cookies are disabled.",
    ],
  },
  {
    title: "7. Data Security",
    paragraphs: [
      "We take reasonable administrative, technical and organisational measures to protect personal information from unauthorised access, loss, misuse or disclosure. However, no method of transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, to complete requested services, maintain institutional records, resolve disputes or comply with legal and regulatory obligations.",
    ],
  },
  {
    title: "9. Your Choices and Rights",
    paragraphs: [
      "Subject to applicable law, you may contact us to request access to, correction of or clarification about personal information that you have provided. You may also ask us about the use of your information or withdraw consent where processing is based on consent.",
      "Some information may need to be retained where required for legal, academic, admission or institutional purposes.",
    ],
  },
  {
    title: "10. Children's Privacy",
    paragraphs: [
      "The website is intended for general audiences. We do not knowingly request personal information from children in a manner that violates applicable law. Parents or guardians may contact us if they believe a child has submitted personal information without appropriate permission.",
    ],
  },
  {
    title: "11. External Links",
    paragraphs: [
      "The website may contain links to external websites or platforms. This Privacy Policy applies only to this website. We encourage users to read the privacy policies of external websites before providing personal information.",
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any updated version will be published on this page with a revised Last Updated date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <Box className="mx-auto w-full max-w-4xl overflow-hidden px-4 py-10 sm:px-8 sm:py-14">
      <Typography
        component="h1"
        className="consistent-heading text-center uppercase"
        sx={{ color: "#129A6A", fontSize: { xs: "1.8rem", sm: "2.25rem" } }}
      >
        Privacy Policy
      </Typography>

      <Box className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        <Typography className="consistent-body">Effective Date: 14/09/2026</Typography>
        <Typography className="consistent-body">Last Updated: 14/09/2026</Typography>
      </Box>

      <Typography className="consistent-body mt-8">
        Red Crescent Institute of Paramedical Sciences respects your privacy.
        This Privacy Policy explains how information may be collected, used,
        shared and protected when you visit or use this website.
      </Typography>

      <Box className="mt-8 space-y-8">
        {sections.map((section) => (
          <Box key={section.title}>
            <Typography component="h2" className="consistent-heading mb-3">
              {section.title}
            </Typography>
            {section.paragraphs?.map((paragraph) => (
              <Typography key={paragraph} className="consistent-body mb-3">
                {paragraph}
              </Typography>
            ))}
            {section.bullets && (
              <Box component="ul" className="consistent-body mb-3 list-disc space-y-1 pl-6">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </Box>
            )}
          </Box>
        ))}

        <Box>
          <Typography component="h2" className="consistent-heading mb-3">
            13. Contact Us
          </Typography>
          <Typography className="consistent-body">
            Red Crescent Institute of Paramedical Sciences
            <br />
            Inside Red Crescent Hospital Compound,
            <br />
            Feroke, Chungam Road, Kozhikode, Kerala, India
            <br />
            <br />
            Email: rchrims.feroke@gmail.com
            <br />
            Phone: +91 99479 93382
            <br />
            <br />
            Grievance Contact: Risaldar (MD)
            <br />
            Phone: +91 81118 92723
          </Typography>
        </Box>

        <Typography className="consistent-body border-t border-gray-800 pt-6 text-gray-600">
          Last Updated: 14/09/2026
        </Typography>
      </Box>
    </Box>
  );
}
