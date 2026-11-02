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

const mission = PROFILE_TABS.find((t) => t.id === "mission");
const vision = PROFILE_TABS.find((t) => t.id === "vision");

export default function MissionVision() {
  useSeo({
    title: "Mission & Vision",
    description:
      "Apex Ignite Solutions' mission and vision: a reliable supplier of technically superior, commercially viable thermoplastic components, meeting customer expectations of Quality, Cost, Delivery & Service.",
    path: "/mission-vision",
    image: "/images/electrical alternsator.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Our purpose"
        title="Mission &amp; Vision"
        description="Our purpose and future goals — why we manufacture, and where we are headed."
        crumbs={[{ label: "About Us", to: "/about-us" }]}
      />

      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div>
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <article className="flex h-full flex-col rounded-panel border border-ink-line bg-white p-6 sm:p-8">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand/[0.08] text-brand">
                    <Icon name="target" className="h-6 w-6" />
                  </span>
                  <span className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent">
                    Our Mission
                  </span>
                  <h2 className="mb-3 text-[1.35rem]">{mission.heading}</h2>
                  <p className="mb-5 text-[0.95rem] leading-[1.8] text-ink-muted">
                    {mission.description}
                  </p>
                  <CheckList items={mission.points} className="mt-auto" />
                </article>
              </Reveal>

              <Reveal delay={90}>
                <article className="flex h-full flex-col rounded-panel border border-ink-line bg-navy p-6 text-white sm:p-8">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-accent">
                    <Icon name="star" className="h-6 w-6" />
                  </span>
                  <span className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent">
                    Our Vision
                  </span>
                  <h2 className="mb-3 text-[1.35rem] text-white">
                    {vision.heading}
                  </h2>
                  <p className="mb-5 text-[0.95rem] leading-[1.8] text-white/70">
                    {vision.description}
                  </p>
                  <CheckList items={vision.points} light className="mt-auto" />
                </article>
              </Reveal>
            </div>

            {/* QCDS summary — values stated by the company */}
            <div className="mt-8 rounded-panel border border-ink-line bg-surface-light p-6 sm:p-8">
              <Eyebrow>The four priorities</Eyebrow>
              <h2 className="mb-5 text-[1.3rem]">
                Quality, Cost, Delivery &amp; Service
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    t: "Quality",
                    d: "Benchmarked against global standards, with CMM and vision measuring inspection.",
                  },
                  {
                    t: "Cost",
                    d: "Commercially viable products through in-house tooling and moulding.",
                  },
                  {
                    t: "Delivery",
                    d: "Reliable delivery schedules with real-time dispatch monitoring.",
                  },
                  {
                    t: "Service",
                    d: "Strong, long-term relationships with valued customers.",
                  },
                ].map((x, i) => (
                  <div
                    key={x.t}
                    className="rounded-xl border border-ink-line bg-white p-4"
                  >
                    <span className="mb-1 block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-accent">
                      0{i + 1}
                    </span>
                    <strong className="block text-[0.98rem] text-navy">
                      {x.t}
                    </strong>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-muted">
                      {x.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-panel border border-ink-line">
              <img
                src="/images/electrical alternsator.webp"
                alt="Auto electrical alternator components moulded by Apex Ignite"
                loading="lazy"
                width="1200"
                height="620"
                className="aspect-[16/8] w-full object-cover"
              />
            </div>
          </div>

          <AboutSidebar />
        </div>
      </Section>

      <Section tone="light" className="py-14 sm:py-16">
        <SectionHeading
          align="center"
          eyebrow="Our commitments"
          title="How the mission shows up in the plant"
          description="Every commitment below is backed by a facility, a process or a certification described elsewhere on this site."
          className="mb-8"
        />
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
          {[
            "In-house mold design and tool making facilities (VMC, EDM, Wire Cut)",
            "Comprehensive 2D & 3D CAD/CAM design & engineering simulation",
            "High-precision microprocessor injection molding (60 to 600 tons)",
            "Advanced ultrasonic welding and component assembly lines",
            "Robotics and Vision Camera integration for zero-defect production",
            "Consistent product quality benchmarked against global standards",
          ].map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-xl border border-ink-line bg-white p-4"
            >
              <Icon
                name="check"
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                strokeWidth={3}
              />
              <span className="text-[0.9rem] leading-relaxed text-ink">
                {t}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Work with a manufacturing partner aligned to your quality goals" />
    </>
  );
}
