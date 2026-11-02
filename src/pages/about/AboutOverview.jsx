import { Link } from "react-router-dom";
import useSeo from "../../lib/useSeo";
import {
  ABOUT_LINKS,
  CONTACT,
  INDUSTRIES,
  MILESTONES,
  PROCESS,
  PRODUCTS,
  PROFILE_TABS,
} from "../../data/site";
import Icon from "../../components/ui/Icon";
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
} from "../../components/ui/Primitives";
import ProfileTabs from "../../components/sections/ProfileTabs";
import Timeline from "../../components/sections/Timeline";
import Process from "../../components/sections/Process";

const HIGHLIGHTS = [
  {
    icon: "build",
    title: "In-house tool room",
    text: "Dedicated tool room with VMC, EDM, Wire Cut and CNC machines for in-house mold design and precision tool making.",
  },
  {
    icon: "layers",
    title: "Injection moulding",
    text: "61 automatic injection molding machines ranging from 60 to 600 tons across our Faridabad and Haridwar plants.",
  },
  {
    icon: "shield",
    title: "Zero-defect production",
    text: "Robotics and vision camera systems integrated with the moulding process, supported by CMM and vision measuring machines.",
  },
  {
    icon: "factory",
    title: "Complete manufacturing support",
    text: "Injection molding, sheet metal parts, ultrasonic welding and complete assembly under one roof.",
  },
];

export default function AboutOverview() {
  useSeo({
    title: "About Apex Ignite Solutions — Overview",
    description:
      "Apex Ignite Solutions Pvt. Ltd. — established 1993, manufacturing in Faridabad and Haridwar. In-house tool making, 61 injection moulding machines from 60 to 600 tons, ultrasonic welding and IATF 16949 quality systems.",
    path: "/about-us",
    image: "/images/overview.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Overview"
        title="About Apex Ignite Solutions"
        description="Our journey, values and what we do — a thermoplastic injection moulding company built on in-house tooling, precision manufacturing and reliable delivery."
        crumbs={[{ label: "About Us", to: "/about-us" }]}
      />

      {/* ---------------------------- intro ---------------------------- */}
      <Section tone="white" ornament>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-section-title mb-5">
              A thermoplastic moulding partner since 1993
            </h2>
            <p className="mb-5 text-[0.98rem] leading-[1.8] text-ink-muted sm:text-[1.02rem]">
              Apex Ignite Solutions Pvt. Ltd. is a manufacturer of{" "}
              <strong className="font-medium text-ink">
                thermoplastic moulded components and moulds
              </strong>
              , equipped with an{" "}
              <strong className="font-medium text-ink">
                in-house tool-making facility
              </strong>{" "}
              and a dedicated design section for precision mold development,
              featuring advanced{" "}
              <strong className="font-medium text-ink">
                2D &amp; 3D design capabilities
              </strong>
              .
            </p>
            <p className="mb-5 text-[0.98rem] leading-[1.8] text-ink-muted sm:text-[1.02rem]">
              Our state-of-the-art facilities include{" "}
              <strong className="font-medium text-ink">
                61 automatic injection molding machines
              </strong>
              , ranging from{" "}
              <strong className="font-medium text-ink">60 to 600 tons</strong>,
              along with 15 power press machines. To ensure zero-defect
              production, we utilize{" "}
              <strong className="font-medium text-ink">
                robotics and vision camera systems
              </strong>
              .
            </p>
            <p className="mb-7 text-[0.98rem] leading-[1.8] text-ink-muted sm:text-[1.02rem]">
              We also offer{" "}
              <strong className="font-medium text-ink">
                ultrasonic welding of plastic components
              </strong>{" "}
              and work with a wide range of{" "}
              <strong className="font-medium text-ink">
                thermoplastic materials
              </strong>{" "}
              to manufacture high-quality precision components for automotive,
              EV, and industrial sectors.
            </p>
            {/* inline fact strip — fills the column and adds scan-ability */}
            <div className="mb-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { v: "1993", l: "Established" },
                { v: "61", l: "Moulding machines" },
                { v: "60–600 t", l: "Tonnage range" },
                { v: "2", l: "Plants" },
              ].map((f) => (
                <div
                  key={f.l}
                  className="group rounded-xl border border-ink-line/80 bg-white px-3 py-2.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-premium"
                >
                  <b className="block whitespace-nowrap text-[1.05rem] leading-none tracking-[-0.02em] text-navy group-hover:text-brand sm:text-[1.15rem]">
                    {f.v}
                  </b>
                  <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.06em] text-ink-muted">
                    {f.l}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/mission-vision" variant="navy" icon="arrowRight">
                Mission &amp; Vision
              </Button>
              <Button to="/our-infrastructure" variant="outline">
                Our infrastructure
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="group relative overflow-hidden rounded-panel border border-ink-line/60 bg-surface-light shadow-premium">
              <img
                src="/images/overview.webp"
                alt="Apex Ignite manufacturing capability overview"
                loading="lazy"
                width="800"
                height="840"
                className="aspect-[4/4.2] h-full w-full object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent"
              />
            </div>

            <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-xl bg-navy/95 px-4 py-3 text-white shadow-lift backdrop-blur">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/20 text-accent">
                <Icon name="gear" className="h-4 w-4" />
              </span>
              <div>
                <b className="block text-[1.25rem] leading-none">61</b>
                <span className="text-[0.62rem] uppercase tracking-[0.1em] text-white/60">
                  Moulding machines
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------- key capabilities ------------------------- */}
      <Section tone="light" className="py-14 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow="What we do"
          title="Manufacturing capability under one roof"
          description="Tooling, moulding, assembly and inspection are performed in-house, which is what allows short development cycles and consistent quality."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="h-full">
              <article className="group h-full rounded-panel border border-ink-line/80 bg-white p-6 shadow-premium transition-all duration-400 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-hover">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand/[0.08] text-brand transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon name={h.icon} className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-[1.05rem]">{h.title}</h3>
                <p className="text-[0.9rem] leading-[1.7] text-ink-muted">
                  {h.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------ facts ------------------------------ */}
      <Section className="py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { v: "1993", l: "Factory started with 3 hand moulding machines" },
            { v: "2", l: "Manufacturing units — Faridabad & Haridwar" },
            { v: "60–600 t", l: "Injection moulding machine range" },
            { v: "15", l: "Power press machines" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 60}>
              <div className="rounded-card border border-ink-line/80 bg-white p-5 shadow-soft sm:p-6">
                <b className="block text-[1.6rem] leading-tight tracking-[-0.02em] text-navy sm:text-[2rem]">
                  {s.v}
                </b>
                <span className="mt-2 block text-[0.8rem] leading-snug text-ink-muted">
                  {s.l}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------- company profile ------------------------- */}
      <Section tone="gradient" ornament>
        <SectionHeading
          eyebrow="Company profile"
          title="Achievements, mission, vision &amp; capabilities"
        />
        <ProfileTabs tabs={PROFILE_TABS} />
      </Section>

      {/* ---------------------------- milestones --------------------------- */}
      <Section id="milestones">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Company milestones</Eyebrow>
            <h2 className="text-section-title mb-4">
              Our Journey, 1993 to 2027
            </h2>
            <p className="mb-6 text-[0.98rem] leading-[1.8] text-ink-muted">
              The company&apos;s own record of growth — plant by plant, machine
              by machine.
            </p>
            <dl className="grid gap-3">
              {[
                {
                  t: "Faridabad plant",
                  d: "40,000 sq. ft. plant installed at Sec-57 (2017)",
                },
                {
                  t: "Haridwar plant",
                  d: "Own 20,000 sq. ft. plant in Sidcul (2022)",
                },
                {
                  t: "New land",
                  d: "1600 sq. yards bought in FIT; construction approx. 50,000 sq. ft.",
                },
                {
                  t: "Quality systems",
                  d: "ISO 9001:2015 â†’ ISO 14001:2015 & ISO 45001:2018 at both plants",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-xl border border-ink-line bg-white p-4"
                >
                  <dt className="text-[0.86rem] font-semibold text-navy">
                    {x.t}
                  </dt>
                  <dd className="text-[0.85rem] leading-relaxed text-ink-muted">
                    {x.d}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Timeline items={MILESTONES} />
        </div>
      </Section>

      {/* ------------------------------ process ---------------------------- */}
      <Section tone="white" ornament>
        <SectionHeading
          eyebrow="Our process"
          title="Ensuring quality, precision and reliability at every stage."
        />
        <Process items={PROCESS} />
      </Section>

      {/* ------------------------------ explore ----------------------------- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Explore"
          title="Continue through the company profile"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_LINKS.map((l, i) => (
            <Reveal key={l.to} delay={(i % 3) * 60}>
              <Link
                to={l.to}
                className="group flex items-center gap-4 rounded-panel border border-ink-line/80 bg-white p-5 shadow-premium transition-all duration-400 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-hover"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand/[0.07] text-brand transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon name="file" className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <strong className="block text-[0.95rem] font-semibold text-navy">
                    {l.label}
                  </strong>
                  <span className="block text-[0.8rem] text-ink-muted">
                    {l.caption}
                  </span>
                </span>
                <Icon
                  name="chevronRight"
                  className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------- products + industries ---------------------- */}
      <Section tone="light" className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-panel border border-ink-line bg-white p-6 sm:p-8">
            <Eyebrow>Our products</Eyebrow>
            <h2 className="mb-4 text-[1.4rem]">Eight component groups</h2>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="flex items-start gap-2 text-[0.9rem] text-ink transition-colors hover:text-brand"
                  >
                    <Icon
                      name="check"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                      strokeWidth={3}
                    />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-panel border border-ink-line bg-white p-6 sm:p-8">
            <Eyebrow>Industries</Eyebrow>
            <h2 className="mb-4 text-[1.4rem]">Sectors we manufacture for</h2>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {INDUSTRIES.map((i) => (
                <li
                  key={i.name}
                  className="flex items-start gap-2 text-[0.9rem] text-ink"
                >
                  <Icon
                    name="check"
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                    strokeWidth={3}
                  />
                  {i.name}
                </li>
              ))}
            </ul>
            <Link to="/industries" className="link-arrow mt-4 inline-flex">
              Industry detail <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ------------------------------- cta -------------------------------- */}
      <div className="bg-surface-light">
        <Container className="pb-16 sm:pb-20">
          <div className="grid gap-5 rounded-panel border border-ink-line bg-white p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h3 className="mb-2 text-[1.25rem]">Two manufacturing units</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {CONTACT.units.map((u) => (
                  <p
                    key={u.id}
                    className="text-[0.9rem] leading-relaxed text-ink-muted"
                  >
                    <strong className="block text-navy">{u.id}</strong>
                    {u.lines.join(" ")}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button to="/contact-us" icon="arrowRight">
                Contact us
              </Button>
              <Button
                href={`tel:${CONTACT.phone1Href}`}
                variant="outline"
                iconLeft="phone"
              >
                Call
              </Button>
            </div>
          </div>
          <CheckList
            className="mt-6"
            items={[
              "IATF 16949:2016 Certified (Valid till 31st Mar 2028)",
              "Gold Certificate in ZED (Ministry of MSME)",
              "Green Supplier as per MSIL T2 Vendor Assessment System",
            ]}
          />
        </Container>
      </div>

      <CtaBand />
    </>
  );
}
