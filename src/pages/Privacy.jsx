import useSeo from "../lib/useSeo";
import { CONTACT, PENDING_ITEMS } from "../data/site";
import { Notice, PageBanner, Section } from "../components/ui/Primitives";

export default function Privacy() {
  useSeo({
    title: "Privacy Policy",
    description:
      "How Apex Ignite Solutions Pvt. Ltd. handles information submitted through the enquiry form on this website — what is collected, why it is used, how long it is kept and how to request its removal.",
    path: "/privacy-policy",
    noindex: true,
  });

  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        description="How information submitted through this website is handled."
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <Section tone="white" ornament>
        <div className="prose-site">
          <div className="mb-8">
            <Notice title="Source note">{PENDING_ITEMS.privacy}</Notice>
          </div>

          <h2>1. Who we are</h2>
          <p>
            This website is operated by{" "}
            <strong>Apex Ignite Solutions Pvt. Ltd.</strong>, with offices at
            Plot No. G-9 &amp; G-10, Sector-57 (FIT), Faridabad, Haryana, and
            Plot No. 28, Sector-11, SIDCUL, Haridwar, Uttarakhand. For any
            privacy question, write to{" "}
            <a href={`mailto:${CONTACT.emailSupport}`}>
              {CONTACT.emailSupport}
            </a>
            .
          </p>

          <h2>2. What we collect</h2>
          <p>
            We only collect what you type into an enquiry form on this website:
          </p>
          <ul>
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Company / organisation name (optional)</li>
            <li>Product or component of interest</li>
            <li>Your message / requirement description</li>
          </ul>
          <p>
            We do not ask for, and do not want, any sensitive personal data
            (such as financial, health or biometric information) through this
            website.
          </p>

          <h2>3. Why we use it</h2>
          <ul>
            <li>
              To respond to your enquiry and share a quotation or technical
              response.
            </li>
            <li>
              To contact you about the specific component or service you asked
              about.
            </li>
            <li>
              To keep a record of the business correspondence for our own
              reference.
            </li>
          </ul>

          <h2>4. How enquiries are transmitted</h2>
          <p>
            The enquiry form is submitted to our website&apos;s email handling
            script, which sends the details to our business email address. The
            form is protected by Google reCAPTCHA, which may set cookies and
            process technical data (such as your IP address) to prevent
            automated abuse. Google&apos;s own privacy terms apply to that
            processing.
          </p>

          <h2>5. Sharing</h2>
          <p>
            We do not sell, rent or trade the information you submit. Details
            are shared only with the company personnel who need them to answer
            your enquiry, or where we are legally required to disclose them.
          </p>

          <h2>6. Retention</h2>
          <p>
            Enquiry correspondence is retained for as long as needed to handle
            the enquiry and any resulting commercial relationship. You may ask
            us to delete it at any time using the contact details above.
          </p>

          <h2>7. Cookies and analytics</h2>
          <p>
            This website does not set marketing or profiling cookies of its own.
            Google Fonts and Google reCAPTCHA are loaded from Google servers
            when relevant, and Google Maps is embedded on the contact page —
            these services may set their own cookies or receive your IP address.
          </p>

          <h2>8. Your choices</h2>
          <ul>
            <li>You can ask what information we hold about you.</li>
            <li>You can ask us to correct or delete it.</li>
            <li>
              You can ask us to stop contacting you about a specific enquiry.
            </li>
          </ul>
          <p>
            To exercise any of these, email{" "}
            <a href={`mailto:${CONTACT.emailSupport}`}>
              {CONTACT.emailSupport}
            </a>{" "}
            or call <a href={`tel:${CONTACT.phone1Href}`}>{CONTACT.phone1}</a>.
          </p>

          <h2>9. Changes</h2>
          <p>
            If this policy changes, the updated version will be published on
            this page. This version is dated 2026.
          </p>
        </div>
      </Section>
    </>
  );
}
