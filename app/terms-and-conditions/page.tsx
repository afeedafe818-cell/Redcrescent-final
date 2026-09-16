import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const sections = [
  {
    title: "1. Website Purpose",
    paragraphs: [
      "This website provides information and online services related to:",
    ],
    bullets: [
      "Paramedical courses and programmes",
      "Admissions and eligibility",
      "Fees and academic information",
      "Facilities and campus activities",
      "Events and workshops",
      "Enquiries, applications and institutional announcements",
    ],
    closing:
      "The Institute may update, modify or discontinue website content, courses, programmes or services when necessary.",
  },
  {
    title: "2. Website Information",
    paragraphs: [
      "We make reasonable efforts to keep website information accurate and updated. However, course details, fees, eligibility, admission dates, affiliations and other information may change.",
      "In case of any discrepancy, the latest official communication issued by the Institute or the relevant educational or regulatory authority shall prevail.",
    ],
  },
  {
    title: "3. Admissions",
    paragraphs: [
      "Submitting an enquiry or online application does not guarantee admission.",
      "Admission is subject to eligibility requirements, seat availability, document verification, Institute policies, applicable university or regulatory requirements and payment of applicable fees.",
      "The Institute may reject or cancel an application or admission if the information provided is false, misleading or incomplete, subject to applicable law.",
    ],
  },
  {
    title: "4. User Responsibilities",
    paragraphs: [
      "Users must provide accurate, complete and genuine information when submitting enquiries, applications or documents.",
      "Users must not misuse the website, submit fraudulent information or attempt to access another person's confidential information.",
    ],
  },
  {
    title: "5. Fees and Payments",
    paragraphs: [
      "Users must follow the payment instructions provided by the Institute or authorised payment gateway.",
      "Refunds and cancellations, where applicable, will be governed by the Institute's applicable fee or refund policy and applicable law.",
      "The Institute is not responsible for payment delays or failures caused by banks, payment gateways or other third-party providers.",
    ],
  },
  {
    title: "6. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, the Institute owns or has permission to use the website's text, logo, photographs, graphics, videos, designs, documents and other original content.",
      "Such content may not be copied, reproduced, modified, distributed or commercially used without prior written permission, except where permitted by law.",
    ],
  },
  {
    title: "7. Prohibited Activities",
    paragraphs: ["Users must not:"],
    bullets: [
      "Use the website for unlawful purposes",
      "Attempt unauthorised access to website systems",
      "Introduce viruses, malware or harmful code",
      "Interfere with website security or functionality",
      "Submit fraudulent or misleading information",
      "Misuse enquiry or admission forms",
      "Copy protected content without permission",
      "Harass, threaten or harm others through the website",
    ],
    closing: "The Institute may restrict or suspend access in cases of misuse.",
  },
  {
    title: "8. Third-Party Links",
    paragraphs: [
      "The website may contain links to third-party websites, universities, educational bodies, payment gateways or social-media platforms.",
      "The Institute does not control or guarantee the content, security, availability or privacy practices of such third-party services. Users should review their respective terms and privacy policies.",
    ],
  },
  {
    title: "9. Website Availability",
    paragraphs: [
      "We make reasonable efforts to keep the website available and secure. However, uninterrupted or error-free operation cannot be guaranteed.",
      "The website may temporarily be unavailable due to maintenance, technical issues, network failures, security incidents or circumstances beyond our reasonable control.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by law, the Institute shall not be responsible for losses arising from temporary website interruptions, technical issues, third-party services or reliance on information that has subsequently been updated.",
    ],
  },
  {
    title: "11. Privacy",
    paragraphs: [
      "Use of this website is also governed by our Privacy Policy, which explains how personal information may be collected, used and protected.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    paragraphs: [
      "The Institute may update these Terms & Conditions from time to time. Updated terms will be published on this page with a revised Last Updated date.",
    ],
  },
  {
    title: "13. Governing Law",
    paragraphs: [
      "These Terms & Conditions shall be governed by the applicable laws of India. Subject to applicable law, disputes shall be subject to the jurisdiction of competent courts in Kerala, India.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <Box className="mx-auto w-full max-w-4xl overflow-hidden px-4 py-10 sm:px-8 sm:py-14">
      <Typography
        component="h1"
        className="consistent-heading text-center uppercase"
        sx={{ color: "#129A6A", fontSize: { xs: "1.8rem", sm: "2.25rem" } }}
      >
        Terms &amp; Conditions
      </Typography>

      <Box className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        <Typography className="consistent-body">Effective Date: 14/09/2026</Typography>
        <Typography className="consistent-body">Last Updated: 14/09/2026</Typography>
      </Box>

      <Typography className="consistent-body mt-8">
        Welcome to the official website of Red Crescent Institute of Paramedical
        Sciences. By accessing or using this website, you agree to the following
        Terms &amp; Conditions. If you do not agree, please discontinue use of the
        website.
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
            {section.closing && (
              <Typography className="consistent-body">{section.closing}</Typography>
            )}
          </Box>
        ))}

        <Box>
          <Typography component="h2" className="consistent-heading mb-3">
            14. Contact &amp; Grievance
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

        <Box>
          <Typography component="h2" className="consistent-heading mb-3">
            15. Acceptance of Terms
          </Typography>
          <Typography className="consistent-body">
            By accessing or using this website, you acknowledge that you have
            read, understood and agreed to these Terms &amp; Conditions. 
          </Typography>
        </Box>

        <Typography className="consistent-body border-t border-gray-800 pt-6 text-gray-800">
          Last Updated: 14/09/2026
        </Typography>
      </Box>
    </Box>
  );
}
