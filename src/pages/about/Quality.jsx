import useSeo from "../../lib/useSeo";
import { CONTACT, FAQS, PROCESS, PROFILE_TABS } from "../../data/site";
import Icon from "../../components/ui/Icon";
import {
  Button,
  CheckList,
  CtaBand,
  Eyebrow,
  Notice,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
} from "../../components/ui/Primitives";
import AboutSidebar from "../../components/sections/AboutSidebar";
import Process from "../../components/sections/Process";

const quality = PROFILE_TABS.find((t) => t.id === "quality");
const qualityFaq = FAQS[5];

const CERTIFICATIONS = [
  {
    title: "IATF 16949:2016",
    scope: "Automotive quality management system",
    note: "Certified — valid till 31st Mar 2028 (as stated on the original website).",
  },
  {
    title: "ISO 14001:2015",
    scope: "Environment management system",
    note: "Achieved at both plants (2023).",
  },
  {
    title: "ISO 45001:2018",
    scope: "Occupational health & safety management system",
    note: "Achieved at both plants (2023).",
  },
  {
    title: "ISO 9001:2015",
    scope: "Quality management system",
    note: "Certification recorded at the Haridwar plant in 2020; ISO 9000 first adopted in 1995.",
  },
  {
    title: "ZED — Gold Certificate",
    scope: "Zero Defect Zero Effect, Ministry of MSME",
    note: "Gold Certificate awarded.",
  },
  {
    title: "MSIL T2 Vendor Assessment",
    scope: "Supplier assessment",
    note: "Assessed as a Green supplier.",
  },
];

export default function Quality() {
  useSeo({
    title: "Quality & Certifications",
    description:
      "Apex Ignite Solutions quality systems: IATF 16949:2016 (valid till 31 Mar 2028), ISO 14001:2015, ISO 45001:2018, ISO 9001:2015, ZED Gold (Ministry of MSME) and Green Supplier per MSIL T2 Vendor Assessment — with CMM, vision measuring and raw material testing.",
    path: "/quality-certifications",
    image: "/images/lock-cosmponet.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Quality"
        title="Quality &amp; Certifications"
        description="Our commitment to global standards — certified systems, in-house inspection and a quality-focused process from raw material to dispatch."
        crumbs={[{ label: "About Us", to: "/about-us" }]}
      />

      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div>
            <div className="rounded-panel border border-ink-line bg-white p-6 sm:p-8">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mb-3 text-[clamp(1.35rem,2.4vw,1.75rem)]">
                {quality.heading}
              </h2>
              <p className="mb-6 text-[0.97rem] leading-[1.8] text-ink-muted">
                {quality.description}
              </p>
              <CheckList items={quality.points} />
            </div>

            <div className="mt-6 grid items-center gap-6 rounded-panel border border-ink-line bg-surface-light p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_220px]">
              <div>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent">
                  Performance
                </span>
                <b className="mt-2 block text-[2.4rem] leading-none tracking-[-0.03em] text-navy">
                  100%
                </b>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-muted">
                  Quality &amp; delivery performance — the target Apex Ignite
                  works to, supported by vision measuring machines, CMM and
                  real-time production dashboards.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl bg-white">
                <img
                  src="/images/lock-cosmponet.webp"
                  alt="Automotive lock components moulded by Apex Ignite"
                  loading="lazy"
                  width="440"
                  height="440"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>

          <AboutSidebar />
        </div>
      </Section>

      {/* -------------------------- certifications ------------------------- */}
      <Section tone="white" ornament>
        <SectionHeading
          eyebrow="Certifications"
          title="Certificates held by Apex Ignite Solutions"
          description="System certifications and vendor assessments stated by the company. PDF copies can be provided by our quality department on request."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 70} className="h-full">
              <article className="flex h-full flex-col rounded-panel border border-ink-line/80 bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-accent/12 text-accent-dark">
                    <Icon name="shield" className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-[0.7rem] font-semibold text-green-700">
                    Certified
                  </span>
                </div>
                <h3 className="mb-1 text-[1.02rem] leading-snug">{c.title}</h3>
                <span className="mb-3 block text-[0.8rem] font-medium text-brand">
                  {c.scope}
                </span>
                <p className="text-[0.88rem] leading-[1.7] text-ink-muted">
                  {c.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------- inspection --------------------------- */}
      <Section tone="light">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="overflow-hidden rounded-panel bg-surface-light">
            <img
              src="/images/steringaa.webp"
              alt="Automotive steering components moulded by Apex Ignite"
              loading="lazy"
              width="900"
              height="900"
              className="aspect-[4/4.4] w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>Inspection &amp; testing</Eyebrow>
            <h2 className="text-section-title mb-4">Measured, not assumed</h2>
            <p className="mb-6 text-[0.98rem] leading-[1.8] text-ink-muted">
              Our facilities are equipped with advanced testing and measuring
              equipment, and the quality-focused approach uses Vision Measuring
              Machines, CMM and real-time production dashboards.
            </p>
            <CheckList
              className="mb-6"
              items={[
                "Well-equipped inspection area with Vision Measuring Machines, CMM and raw material testing facilities",
                "Robotics and vision camera systems inside the moulding process",
                "High-precision CMM, optical testing and batch traceability",
                "Continuous Kaizen & process optimization across manufacturing cycles",
                "Reliable delivery schedules with real-time dispatch monitoring",
              ]}
            />
            <div className="grid gap-3 sm:grid-cols-1">
              <div className="rounded-xl border border-ink-line bg-white p-5">
                <h3 className="mb-1.5 text-[0.98rem]">{qualityFaq.q}</h3>
                {qualityFaq.a.map((p) => (
                  <p
                    key={p}
                    className="mt-1.5 text-[0.9rem] leading-[1.75] text-ink-muted"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ----------------------------- process ----------------------------- */}
      <Section tone="gradient" ornament>
        <SectionHeading
          eyebrow="Quality in the process"
          title="Ensuring quality, precision and reliability at every stage."
        />
        <Process items={PROCESS} />
      </Section>

      {/* ---------------------------- chain of custody --------------------- */}
      <Section tone="gradient" ornament>
        <SectionHeading
          eyebrow="Traceability"
          title="From raw material to dispatch"
          description="Each step is covered by the in-house process described on the original website."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Raw material testing",
              d: "Material selection carried out according to required mechanical properties and customer specification.",
            },
            {
              t: "In-process checks",
              d: "Robotics and vision camera systems integrated with the moulding process.",
            },
            {
              t: "Final inspection",
              d: "Vision Measuring Machines and CMM measurement with batch traceability.",
            },
            {
              t: "Dispatch control",
              d: "Finished goods store with a systematic FIFO board system for safe handling and preservation.",
            },
          ].map((s, i) => (
            <div
              key={s.t}
              className="rounded-card border border-ink-line/80 bg-white p-5 shadow-soft"
            >
              <span className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-accent">
                0{i + 1}
              </span>
              <strong className="block text-[0.96rem] text-navy">{s.t}</strong>
              <p className="mt-1.5 text-[0.87rem] leading-[1.7] text-ink-muted">
                {s.d}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Notice title="Certificate copies">
            Certificate numbers, scopes and scanned copies are not published on
            the original website. To request the current certificates for vendor
            registration, contact our quality desk at{" "}
            <a
              href={`mailto:${CONTACT.emailSupport}`}
              className="font-medium text-brand underline"
            >
              {CONTACT.emailSupport}
            </a>
            .
          </Notice>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact-us" icon="arrowRight">
            Request certificates
          </Button>
          <Button to="/awards-achievements" variant="outline">
            Awards &amp; Achievements
          </Button>
        </div>
      </Section>

      <CtaBand
        title="Quality requirements to build into the quote"
        text="Tell us your inspection standard, PPAP requirement and rejection targets — we will quote against them."
      />
    </>
  );
}
