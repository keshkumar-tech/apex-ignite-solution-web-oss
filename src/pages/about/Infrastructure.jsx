import useSeo from "../../lib/useSeo";
import { CONTACT, MILESTONES, PROFILE_TABS } from "../../data/site";
import Icon from "../../components/ui/Icon";
import {
  Button,
  CheckList,
  CtaBand,
  Eyebrow,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
} from "../../components/ui/Primitives";
import AboutSidebar from "../../components/sections/AboutSidebar";
import Timeline from "../../components/sections/Timeline";

const capabilities = PROFILE_TABS.find((t) => t.id === "capabilities");

const MACHINERY = [
  {
    icon: "build",
    title: "Tool room",
    items: [
      "VMC machines",
      "EDM machines",
      "Wire Cut machines",
      "CNC lathe machines",
    ],
  },
  {
    icon: "gear",
    title: "Injection moulding",
    items: [
      "61 automatic injection molding machines",
      "60 to 600 tons capacity",
      "Robotics and vision cameras",
      "Two-shift operations",
    ],
  },
  {
    icon: "layers",
    title: "Press & assembly",
    items: [
      "15 power press machines",
      "Ultrasonic welding of plastic components",
      "Pad printing machines",
      "Component assembly lines",
    ],
  },
  {
    icon: "shield",
    title: "Quality lab",
    items: [
      "Vision Measuring Machines",
      "CMM",
      "Raw material testing facilities",
      "Real-time production dashboards",
    ],
  },
];

const PLANTS = [
  {
    name: "Faridabad plant — Unit 1",
    address: "Plot No. G-9 & G-10, Sector-57 (FIT), Faridabad, Haryana.",
    detail:
      "40,000 sq. ft. plant installed at Sec-57 in 2017. Machines expanded in 2023 and 2024.",
    gst: "06ABACA4657P1ZA",
  },
  {
    name: "Haridwar plant — Unit 2",
    address: "Plot No. 28, Sector-11, SIDCUL, Haridwar, Uttarakhand.",
    detail:
      "Started in Sidcul in 2020, moved to an own 20,000 sq. ft. plant in 2022; a second plant was purchased in 2024.",
    gst: "05ADJPM7465M1ZY",
  },
];

export default function Infrastructure() {
  useSeo({
    title: "Our Infrastructure",
    description:
      "Apex Ignite infrastructure: Faridabad (40,000 sq. ft.) and Haridwar (SIDCUL) plants, 61 automatic injection moulding machines from 60 to 600 tons, 15 power presses, in-house tool room with VMC/EDM/Wire Cut and a quality lab with CMM and vision measuring.",
    path: "/our-infrastructure",
    image: "/images/electrical-star4ter.webp",
  });

  const buildMilestones = MILESTONES.filter((m) =>
    ["2017", "2020", "2022", "2023", "2024", "2025", "2026", "2027"].includes(
      m.year,
    ),
  );

  return (
    <>
      <PageBanner
        eyebrow="Facilities"
        title="Our Infrastructure"
        description="World-class facilities and capabilities — two plants, 61 moulding machines, an in-house tool room and a fully equipped inspection area."
        crumbs={[{ label: "About Us", to: "/about-us" }]}
      />

      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div>
            <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div>
                <Eyebrow>Capabilities</Eyebrow>
                <h2 className="mb-3 text-[clamp(1.35rem,2.4vw,1.8rem)]">
                  {capabilities.heading}
                </h2>
                <p className="mb-5 text-[0.96rem] leading-[1.8] text-ink-muted">
                  {capabilities.description}
                </p>
                <CheckList items={capabilities.points} />
              </div>
              <div className="overflow-hidden rounded-panel bg-surface-light">
                <img
                  src="/images/electrical-star4ter.webp"
                  alt="Auto electrical starter components moulded by Apex Ignite"
                  loading="lazy"
                  width="800"
                  height="620"
                  className="aspect-[4/3.2] w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
              {[
                { v: "2", l: "Manufacturing units" },
                { v: "61", l: "Injection moulding machines" },
                { v: "15", l: "Power press machines" },
                { v: "60–600 t", l: "Tonnage range" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-card border border-ink-line bg-white p-4 sm:p-5"
                >
                  <b className="block text-[1.35rem] leading-tight tracking-[-0.02em] text-navy sm:text-[1.6rem]">
                    {s.v}
                  </b>
                  <span className="mt-1 block text-[0.76rem] leading-snug text-ink-muted">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-panel border border-ink-line bg-surface-light p-6 sm:p-7">
              <h3 className="mb-1.5 text-[1.05rem]">
                What happens on the shop floor
              </h3>
              <p className="mb-5 text-[0.9rem] leading-[1.75] text-ink-muted">
                Moulds are built and maintained in the tool room, moulded on the
                automatic machines, joined or printed where required, inspected
                in the quality lab, then stored and dispatched using the FIFO
                system.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    t: "Tool room & die storage",
                    d: "Mould build, maintenance and organised die storage.",
                  },
                  {
                    t: "Injection moulding",
                    d: "61 automatic machines, 60 to 600 tons, robotics and vision cameras.",
                  },
                  {
                    t: "Press & assembly",
                    d: "15 power presses, ultrasonic welding, pad printing and assembly.",
                  },
                  {
                    t: "Store & dispatch",
                    d: "Finished goods storage with a systematic FIFO board system.",
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-xl border border-ink-line bg-white p-4"
                  >
                    <strong className="block text-[0.9rem] text-navy">
                      {x.t}
                    </strong>
                    <span className="text-[0.85rem] leading-relaxed text-ink-muted">
                      {x.d}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <AboutSidebar />
        </div>
      </Section>

      {/* ----------------------------- machinery ------------------------- */}
      <Section tone="gradient" ornament>
        <SectionHeading
          eyebrow="Machinery &amp; technology"
          title="The equipment behind every component"
          description="Tool room, moulding, press & assembly and the quality lab — all in-house."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {MACHINERY.map((m, i) => (
            <Reveal key={m.title} delay={i * 70} className="h-full">
              <article className="h-full rounded-panel border border-ink-line bg-white p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                    <Icon name={m.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-[1.08rem]">{m.title}</h3>
                </div>
                <ul className="grid gap-2.5">
                  {m.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-[0.91rem] leading-snug text-ink"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={3}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------- plants -------------------------- */}
      <Section tone="white" ornament>
        <SectionHeading
          eyebrow="Our plants"
          title="Two units, one quality system"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {PLANTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="flex h-full flex-col rounded-panel border border-ink-line bg-white p-6 sm:p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-[1.15rem]">{p.name}</h3>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-accent/12 text-accent-dark">
                    <Icon name="pin" className="h-[18px] w-[18px]" />
                  </span>
                </div>
                <p className="mb-3 text-[0.92rem] leading-[1.7] text-ink">
                  {p.address}
                </p>
                <p className="mb-5 text-[0.9rem] leading-[1.7] text-ink-muted">
                  {p.detail}
                </p>
                <p className="mt-auto border-t border-ink-line pt-4 text-[0.82rem] text-ink-muted">
                  <span className="font-semibold uppercase tracking-[0.1em]">
                    GST
                  </span>{" "}
                  — {p.gst}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact-us" icon="arrowRight">
            Plan a visit
          </Button>
          <Button
            href={`tel:${CONTACT.phone1Href}`}
            variant="outline"
            iconLeft="phone"
          >
            {CONTACT.phone1}
          </Button>
        </div>
      </Section>

      {/* --------------------------- plant milestones -------------------- */}
      <Section tone="light">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Infrastructure history</Eyebrow>
            <h2 className="text-section-title mb-4">
              Capacity added, year by year
            </h2>
            <p className="text-[0.96rem] leading-[1.8] text-ink-muted">
              Plant and machine additions as recorded in the company&apos;s
              milestone timeline — from the 40,000 sq. ft. Faridabad plant to
              the new land currently under construction.
            </p>
          </div>
          <Timeline items={buildMilestones} />
        </div>
      </Section>

      <CtaBand
        title="Need capacity for a new program?"
        text="Tell us the component, material and annual volume — we will confirm the machine, tooling and delivery plan."
      />
    </>
  );
}
