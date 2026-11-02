import useSeo from "../lib/useSeo";
import { CONTACT, PENDING_ITEMS } from "../data/site";
import Icon from "../components/ui/Icon";
import {
  Button,
  CtaBand,
  Eyebrow,
  Notice,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
} from "../components/ui/Primitives";
import EnquiryForm from "../components/sections/EnquiryForm";

const FUNCTIONS = [
  {
    icon: "build",
    t: "Tool room & mould making",
    d: "VMC, EDM, Wire Cut and CNC lathe work for in-house mould development and maintenance.",
  },
  {
    icon: "layers",
    t: "Design & development",
    d: "2D & 3D mould design, CAD/CAM and engineering simulation.",
  },
  {
    icon: "gear",
    t: "Production & moulding",
    d: "Automatic injection moulding 60 to 600 tons, two-shift operations.",
  },
  {
    icon: "shield",
    t: "Quality",
    d: "Inspection with Vision Measuring Machines, CMM and raw material testing.",
  },
  {
    icon: "factory",
    t: "Press & assembly",
    d: "Power press operations, ultrasonic welding, pad printing and assembly.",
  },
  {
    icon: "file",
    t: "Stores & dispatch",
    d: "Finished goods storage with the FIFO board system and dispatch planning.",
  },
];

export default function Careers() {
  useSeo({
    title: "Careers",
    description:
      "Careers at Apex Ignite Solutions Pvt. Ltd. — manufacturing roles in tool room, design, moulding, press & assembly, quality, stores and dispatch across the Faridabad and Haridwar plants.",
    path: "/careers",
    image: "/images/formleft-img.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Careers"
        title="Build your career in precision manufacturing"
        description="Apex Ignite Solutions is built on in-house engineering — mould design, tool making, moulding, assembly and quality. If that is your craft, we would like to hear from you."
        crumbs={[{ label: "Careers" }]}
      />

      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div>
            <Eyebrow>Working with us</Eyebrow>
            <h2 className="text-section-title mb-4">
              Growth for every employee
            </h2>
            <p className="mb-6 text-[0.97rem] leading-[1.8] text-ink-muted">
              The company&apos;s stated mission includes the overall growth of
              every employee in consonance with the company&apos;s growth, along
              with continuous up-gradation of technology and quality management
              systems. Our plants run two shifts, across Faridabad (Haryana) and
              Haridwar (Uttarakhand).
            </p>

            <div className="mb-7">
              <Notice title="Openings pending verification">
                {PENDING_ITEMS.careers}
              </Notice>
            </div>

            <div className="rounded-panel border border-ink-line bg-white p-6 sm:p-7">
              <h3 className="mb-4 text-[1.1rem]">Plant locations</h3>
              <ul className="grid gap-3">
                {CONTACT.units.map((u) => (
                  <li
                    key={u.id}
                    className="flex gap-3 rounded-xl border border-ink-line p-4"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-brand/[0.08] text-brand">
                      <Icon name="pin" className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="block text-[0.92rem] text-navy">
                        {u.id}
                      </strong>
                      <span className="text-[0.86rem] leading-relaxed text-ink-muted">
                        {u.lines.join(" ")}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                <a
                  href={`mailto:${CONTACT.emailSupport}?subject=Career%20application`}
                  className="flex items-center gap-2.5 rounded-[10px] border border-ink-line bg-white px-4 py-3 text-[0.88rem] transition-colors hover:border-brand"
                >
                  <Icon name="mail" className="h-4 w-4 text-accent" />
                  <span className="truncate">Email your CV</span>
                </a>
                <a
                  href={`tel:${CONTACT.phone1Href}`}
                  className="flex items-center gap-2.5 rounded-[10px] border border-ink-line bg-white px-4 py-3 text-[0.88rem] transition-colors hover:border-brand"
                >
                  <Icon name="phone" className="h-4 w-4 text-accent" />
                  {CONTACT.phone1}
                </a>
              </div>
            </div>
          </div>

          <EnquiryForm title="Apply / send your profile" compact />
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Functions"
          title="Where people work at Apex Ignite"
          description="These are the in-house functions described on the company website. Specific vacancies, experience requirements and salaries can be published once confirmed by HR."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FUNCTIONS.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 60} className="h-full">
              <article className="h-full rounded-panel border border-ink-line/80 bg-white p-6 shadow-premium">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <h3 className="mb-1.5 text-[1.02rem]">{f.t}</h3>
                <p className="text-[0.88rem] leading-[1.7] text-ink-muted">
                  {f.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-14">
        <div className="grid gap-6 rounded-panel border border-ink-line bg-white p-6 sm:p-9 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <h2 className="mb-2 text-[1.3rem]">
              What to include in your application
            </h2>
            <ul className="grid gap-2 text-[0.92rem] leading-relaxed text-ink-muted sm:grid-cols-2">
              {[
                "Current CV with contact details",
                "Relevant experience and functional area",
                "Preferred plant — Faridabad or Haridwar",
                "Notice period and current CTC",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <Icon
                    name="check"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    strokeWidth={3}
                  />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <Button
            href={`mailto:${CONTACT.emailSupport}?subject=Career%20application`}
            icon="mail"
            className="lg:justify-self-end"
          >
            Email your CV
          </Button>
        </div>
      </Section>

      <CtaBand
        title="There is more to Apex Ignite than a job"
        text="Explore the plants, the machinery and the quality systems you would be working with."
      />
    </>
  );
}
