import useSeo from "../../lib/useSeo";
import { PROFILE_TABS } from "../../data/site";
import Icon from "../../components/ui/Icon";
import {
  CheckList,
  CtaBand,
  Eyebrow,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
} from "../../components/ui/Primitives";
import AboutSidebar from "../../components/sections/AboutSidebar";

const achievements = PROFILE_TABS.find((t) => t.id === "achievements");

const AWARDS = [
  {
    icon: "shield",
    title: "IATF 16949:2016",
    detail: "Valid till 31st Mar 2028",
    text: "Automotive quality management system certification, listed with its validity on the original website.",
    image: "/images/certificate-zed.png",
  },
  {
    icon: "award",
    title: "Gold Certificate in ZED",
    detail: "Ministry of MSME",
    text: "Zero Defect Zero Effect (ZED) certification awarded by the Ministry of MSME.",
  },
  {
    icon: "target",
    title: "Green Supplier",
    detail: "MSIL T2 Vendor Assessment System",
    text: "Assessed as a Green supplier under the MSIL T2 Vendor Assessment System.",
  },
  {
    icon: "layers",
    title: "ISO 14001:2015 &amp; ISO 45001:2018",
    detail: "Both plants",
    text: "Environment and occupational health &amp; safety management systems certified at both plants.",
  },
];

export default function Awards() {
  useSeo({
    title: "Awards & Achievements",
    description:
      "Apex Ignite Solutions achievements: IATF 16949:2016 certified till 31 March 2028, Gold Certificate in ZED (Ministry of MSME), Green Supplier per MSIL T2 Vendor Assessment, ISO 14001:2015 and ISO 45001:2018 at both plants, and a direct-on-line tier-1 supplier to M/S Minda Corporation Ltd.",
    path: "/awards-achievements",
    image: "/images/certificate-zed.png",
  });

  return (
    <>
      <PageBanner
        eyebrow="Recognition"
        title="Awards &amp; Achievements"
        description="Recognition of our excellence — certifications, assessments and customer acceptance recorded by the company."
        crumbs={[{ label: "About Us", to: "/about-us" }]}
      />

      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div>
            <div className="rounded-panel border border-ink-line bg-white p-6 sm:p-8">
              <Eyebrow>Achievements</Eyebrow>
              <h2 className="mb-3 text-[clamp(1.35rem,2.4vw,1.75rem)]">
                {achievements.heading}
              </h2>
              <p className="mb-6 text-[0.97rem] leading-[1.8] text-ink-muted">
                {achievements.description}
              </p>
              <CheckList items={achievements.points} />
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {AWARDS.map((a, i) => (
                <Reveal key={a.title} delay={i * 70} className="h-full">
                  <article className="flex h-full flex-col rounded-panel border border-ink-line/80 bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <span className="mb-4 grid h-11 w-11 place-items-center rounded-[10px] bg-accent/12 text-accent-dark">
                      <Icon name={a.icon} className="h-5 w-5" />
                    </span>
                    <h3
                      className="mb-1 text-[1.02rem]"
                      dangerouslySetInnerHTML={{ __html: a.title }}
                    />
                    <span
                      className="mb-3 block text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-ink-muted"
                      dangerouslySetInnerHTML={{ __html: a.detail }}
                    />
                    <p
                      className="text-[0.89rem] leading-[1.7] text-ink-muted"
                      dangerouslySetInnerHTML={{ __html: a.text }}
                    />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <AboutSidebar />
        </div>
      </Section>

      {/* ----------------------- performance + customers ------------------- */}
      <Section tone="gradient" ornament>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <div className="rounded-panel bg-navy p-7 text-white sm:p-9">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent">
              Sales turnover
            </span>
            <b className="mt-3 block text-[3rem] leading-none tracking-[-0.03em] sm:text-[3.6rem]">
              40.73
            </b>
            <span className="mt-2 block text-[0.9rem] text-white/65">
              Crore — FY 25-26
            </span>
            <div className="mt-6 border-t border-white/12 pt-5">
              <p className="text-[0.9rem] leading-relaxed text-white/70">
                Sales turnover reported by the company for FY 25-26, alongside
                100% quality and delivery performance targets.
              </p>
            </div>
          </div>

          <div className="rounded-panel border border-ink-line bg-white p-7 sm:p-9">
            <Eyebrow>Customer recognition</Eyebrow>
            <h2 className="mb-3 text-[1.3rem]">
              Direct-on-line tier-1 supplier
            </h2>
            <p className="mb-5 text-[0.95rem] leading-[1.8] text-ink-muted">
              Apex Ignite Solutions is a direct-on-line tier-1 supplier to M/S
              Minda Corporation Ltd., and supplies component groups across
              automotive, electrical, home appliance and instrumentation
              applications.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Minda Corporation Ltd.",
                "MSIL T2 Vendor Assessment",
                "Ministry of MSME — ZED",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-line bg-surface-light px-3.5 py-1.5 text-[0.8rem] font-medium text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" ornament>
        <SectionHeading
          eyebrow="Quality systems"
          title="Certifications held at both plants"
          description="Details of each certificate, its scope and validity are listed on the Quality &amp; Certifications page."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "IATF 16949:2016", s: "Quality management — automotive" },
            { t: "ISO 14001:2015", s: "Environment management" },
            { t: "ISO 45001:2018", s: "Occupational health & safety" },
            { t: "ZED Gold", s: "Ministry of MSME" },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-card border border-ink-line/80 bg-white p-5 shadow-soft"
            >
              <Icon name="shield" className="mb-3 h-5 w-5 text-accent" />
              <strong className="block text-[0.98rem] text-navy">{c.t}</strong>
              <span className="text-[0.82rem] text-ink-muted">{c.s}</span>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Need our certification details for vendor registration?"
        text="Our team can share the current certificates and vendor documentation on request."
      />
    </>
  );
}
