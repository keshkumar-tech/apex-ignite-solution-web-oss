import useSeo from "../lib/useSeo";
import { CONTACT, FAQS } from "../data/site";
import Icon from "../components/ui/Icon";
import {
  Button,
  CheckList,
  Container,
  CtaBand,
  Eyebrow,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
} from "../components/ui/Primitives";
import EnquiryForm from "../components/sections/EnquiryForm";
import Faq from "../components/sections/Faq";

export default function Contact() {
  useSeo({
    title: "Contact Us",
    description:
      "Contact Apex Ignite Solutions Pvt. Ltd. — Unit 1: Plot No. G-9 & G-10, Sector-57 (FIT), Faridabad, Haryana. Unit 2: Plot No. 28, Sector-11, SIDCUL, Haridwar, Uttarakhand. Call +91-9811142144 / +91-9999119981.",
    path: "/contact-us",
    image: "/images/overview.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Contact Apex Ignite Solutions"
        description="Talk to our team about a component, a mould or a manufacturing requirement. We operate two plants — Faridabad (Haryana) and Haridwar (Uttarakhand)."
        crumbs={[{ label: "Contact Us" }]}
      />

      {/* ------------------------- contact + form -------------------------- */}
      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <Eyebrow>Reach us</Eyebrow>
            <h2 className="text-section-title mb-6">
              Corporate &amp; plant office
            </h2>

            <div className="grid gap-3.5">
              {CONTACT.units.map((u, i) => (
                <Reveal key={u.id} delay={i * 60}>
                  <div className="flex gap-4 rounded-card border border-ink-line/80 bg-white p-5 shadow-soft">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                      <Icon name="pin" className="h-5 w-5" />
                    </span>
                    <div>
                      <strong className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
                        {u.id}
                      </strong>
                      <p className="mt-1 text-[0.94rem] leading-[1.6] text-ink">
                        {u.lines.join(" ")}
                      </p>
                      <p className="mt-1.5 text-[0.8rem] text-ink-muted">
                        GST — {CONTACT.gst[i].value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <div className="flex gap-4 rounded-card border border-ink-line/80 bg-white p-5 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <div>
                  <strong className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
                    Call us directly
                  </strong>
                  <a
                    href={`tel:${CONTACT.phone1Href}`}
                    className="mt-1 block text-[0.94rem] text-ink hover:text-brand"
                  >
                    {CONTACT.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT.phone2Href}`}
                    className="block text-[0.94rem] text-ink hover:text-brand"
                  >
                    {CONTACT.phone2}
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneGeneralHref}`}
                    className="block text-[0.94rem] text-ink hover:text-brand"
                  >
                    {CONTACT.phoneGeneral}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-card border border-ink-line/80 bg-white p-5 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <strong className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
                    Mail us
                  </strong>
                  <a
                    href={`mailto:${CONTACT.emailSupport}`}
                    className="mt-1 block truncate text-[0.94rem] text-ink hover:text-brand"
                  >
                    {CONTACT.emailSupport}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email1}`}
                    className="block truncate text-[0.94rem] text-ink hover:text-brand"
                  >
                    {CONTACT.email1}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email2}`}
                    className="block truncate text-[0.94rem] text-ink hover:text-brand"
                  >
                    {CONTACT.email2}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-card border border-ink-line/80 bg-white p-5 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <div>
                  <strong className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
                    Working hours
                  </strong>
                  <p className="mt-1 text-[0.94rem] text-ink">
                    {CONTACT.hours.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-card border border-ink-line/80 bg-white p-5 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                  <Icon name="user" className="h-5 w-5" />
                </span>
                <div>
                  <strong className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
                    Managing directors
                  </strong>
                  <p className="mt-1 text-[0.94rem] text-ink">
                    {CONTACT.directors.join(" · ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                iconLeft="whatsapp"
              >
                WhatsApp us
              </Button>
              <Button
                href={`tel:${CONTACT.phone1Href}`}
                variant="outline"
                iconLeft="phone"
              >
                Call now
              </Button>
            </div>
          </div>

          <div id="enquiry" className="scroll-mt-24">
            <EnquiryForm title="Send an Enquiry" />
            <div className="mt-4 rounded-card border border-ink-line bg-surface-light p-5">
              <p className="text-[0.82rem] leading-relaxed text-ink-muted">
                Your enquiry is submitted to our engineering desk. For urgent
                requirements call{" "}
                <a
                  href={`tel:${CONTACT.phone1Href}`}
                  className="font-semibold text-brand"
                >
                  {CONTACT.phone1}
                </a>
                . We do not share your details with third parties.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------- map ------------------------------- */}
      <Section tone="light" className="py-14 sm:py-16">
        <SectionHeading
          eyebrow="Find us"
          title="Our location"
          description="Open the map for directions to our Faridabad (FIT, Sector-57) location."
        />
        <div className="overflow-hidden rounded-panel border border-ink-line bg-white">
          <iframe
            title="Apex Ignite Solutions location map"
            src={CONTACT.mapEmbed}
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {CONTACT.units.map((u) => (
            <div
              key={u.id}
              className="rounded-xl border border-ink-line bg-white p-4"
            >
              <strong className="block text-[0.8rem] uppercase tracking-[0.1em] text-navy">
                {u.id}
              </strong>
              <span className="text-[0.88rem] text-ink-muted">
                {u.lines.join(" ")}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------- facts ----------------------------- */}
      <Section className="py-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-panel border border-ink-line bg-white p-6 sm:p-8">
            <Eyebrow>Company details</Eyebrow>
            <h2 className="mb-4 text-[1.2rem]">Registration &amp; GST</h2>
            <dl className="grid gap-2.5 text-[0.9rem]">
              <div className="flex justify-between gap-4 border-b border-ink-line pb-2.5">
                <dt className="text-ink-muted">Unit-1 GST</dt>
                <dd className="font-medium text-ink">{CONTACT.gst[0].value}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink-line pb-2.5">
                <dt className="text-ink-muted">Unit-2 GST</dt>
                <dd className="font-medium text-ink">{CONTACT.gst[1].value}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink-line pb-2.5">
                <dt className="text-ink-muted">General enquiry</dt>
                <dd className="font-medium text-ink">{CONTACT.phoneGeneral}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-muted">Working hours</dt>
                <dd className="text-right font-medium text-ink">
                  {CONTACT.hoursSecondary}
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-panel border border-ink-line bg-white p-6 sm:p-8">
            <Eyebrow>Before you write</Eyebrow>
            <h2 className="mb-4 text-[1.2rem]">What helps us quote faster</h2>
            <CheckList
              items={[
                "Component drawing or sample with dimensions",
                "Polymer / material grade requirement",
                "Expected annual volume and batch size",
                "Mould ownership or new tooling requirement",
                "Inspection standard and packaging requirement",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* -------------------------------- faq ------------------------------ */}
      <Section tone="light">
        <SectionHeading
          align="center"
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Common questions about facilities, materials and customization."
        />
        <Faq items={[FAQS[0], FAQS[3], FAQS[6], FAQS[7]]} defaultOpen={0} />
        <Container className="mt-8 px-0 text-center">
          <p className="text-[0.86rem] text-ink-muted">
            More questions? See the{" "}
            <a href="/#faq" className="font-medium text-brand underline">
              full FAQ
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${CONTACT.phone1Href}`}
              className="font-medium text-brand underline"
            >
              {CONTACT.phone1}
            </a>
            .
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
