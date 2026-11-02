import useSeo from "../lib/useSeo";
import { CONTACT, PENDING_ITEMS } from "../data/site";
import { Notice, PageBanner, Section } from "../components/ui/Primitives";

export default function Terms() {
  useSeo({
    title: "Terms of Service",
    description:
      "Terms governing use of the Apex Ignite Solutions Pvt. Ltd. website, including accuracy of information, enquiries and quotations, intellectual property and applicable law.",
    path: "/terms-of-service",
    noindex: true,
  });

  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that apply when you use this website."
        crumbs={[{ label: "Terms of Service" }]}
      />

      <Section tone="white" ornament>
        <div className="prose-site">
          <div className="mb-8">
            <Notice title="Source note">{PENDING_ITEMS.terms}</Notice>
          </div>

          <h2>1. About these terms</h2>
          <p>
            These terms apply to your use of the Apex Ignite Solutions Pvt. Ltd.
            website. By using the site you accept them. If you do not agree,
            please do not use the site.
          </p>

          <h2>2. Information on this website</h2>
          <p>
            Product descriptions, component names, machine counts, tonnage
            ranges, milestones and certification details on this website are
            published for general information. Engineering specifications are
            developed individually for each customer according to the drawing,
            material and application agreed for that project.
          </p>
          <p>
            While we aim to keep the information current, the website is not a
            substitute for a written technical agreement, drawing approval or
            purchase order.
          </p>

          <h2>3. Enquiries and quotations</h2>
          <ul>
            <li>
              Submitting an enquiry creates no contract and no obligation to
              supply.
            </li>
            <li>
              Prices, lead times and tooling costs are only valid when confirmed
              in a written quotation issued by the company.
            </li>
            <li>
              Quotations are subject to material availability, tooling approval,
              technical feasibility and the commercial terms agreed for the
              project.
            </li>
          </ul>

          <h2>4. Your responsibilities</h2>
          <ul>
            <li>
              Provide accurate contact details and requirement information in
              enquiry forms.
            </li>
            <li>
              Do not submit unlawful, misleading or infringing content through
              the website.
            </li>
            <li>
              Ensure you have the right to share any drawings or specifications
              you send, and that they do not infringe third-party intellectual
              property.
            </li>
          </ul>

          <h2>5. Intellectual property</h2>
          <p>
            The company name, logo, product photographs, component photographs
            and text on this website belong to Apex Ignite Solutions Pvt. Ltd.
            or are used with permission. They may not be copied, reproduced or
            redistributed for commercial use without written permission.
          </p>

          <h2>6. Third-party services and links</h2>
          <p>
            This website uses embedded or linked third-party services (Google
            Maps, Google reCAPTCHA, Google Fonts) and may link to external
            websites. We are not responsible for the content or availability of
            those external services.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            The website is provided on an &quot;as is&quot; basis. To the extent
            permitted by law, the company is not liable for any indirect or
            consequential loss arising from use of the website or reliance on
            information published on it. Nothing in these terms limits liability
            that cannot be limited by law.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These website terms are governed by the laws of India, and the
            courts at Faridabad, Haryana have exclusive jurisdiction over any
            dispute relating to the website.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${CONTACT.emailSupport}`}>
              {CONTACT.emailSupport}
            </a>{" "}
            or <a href={`tel:${CONTACT.phone1Href}`}>{CONTACT.phone1}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
