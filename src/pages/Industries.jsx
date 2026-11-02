import { Link } from "react-router-dom";
import useSeo from "../lib/useSeo";
import {
  CHALLENGES,
  INDUSTRIES,
  INDUSTRIES_INTRO,
  INDUSTRY_FOCUS,
  PRODUCTS,
} from "../data/site";
import Icon from "../components/ui/Icon";
import {
  Button,
  CtaBand,
  Eyebrow,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
} from "../components/ui/Primitives";

export default function IndustriesPage() {
  useSeo({
    title: "Industries We Serve",
    description:
      "Apex Ignite supplies precision plastic components for automotive, ATV, 4-wheeler steering parts, JCB crane, MCB parts, washing machine parts, starter motors, alternator motors, electrical and engineering components.",
    path: "/industries",
    image: "/images/steering-wheel.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Industries we serve"
        title="Precision Plastic Solutions Across Diverse Industries"
        description={INDUSTRIES_INTRO}
        crumbs={[{ label: "Industries" }]}
      />

      {/* ---------------------------- industry grid ------------------------ */}
      <Section tone="white" ornament>
        <SectionHeading
          eyebrow="Application areas"
          title="Where our components are used"
          description="These are the application areas listed by the company — each maps directly to one or more of our product groups."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 60} className="h-full">
              <article className="group relative flex h-full items-start gap-4 overflow-hidden rounded-panel border border-ink-line/80 bg-white p-5 shadow-premium transition-all duration-400 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-hover">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-accent/15 to-brand/10 opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-brand transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-ink-line/60 bg-gradient-to-br from-surface-light to-white p-2.5 transition-all duration-400 group-hover:scale-105 group-hover:border-brand/15">
                  <img
                    src={ind.image}
                    alt=""
                    loading="lazy"
                    width="56"
                    height="56"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </span>
                <div className="relative">
                  <h2 className="text-[1.02rem] leading-snug transition-colors duration-300 group-hover:text-brand">
                    {ind.name}
                  </h2>
                  <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-muted">
                    Injection moulded thermoplastic components for{" "}
                    {ind.name.toLowerCase()} applications.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------ focus ------------------------------ */}
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <Eyebrow light>Industry focus</Eyebrow>
            <h2 className="text-section-title mb-4 text-white">
              Sectors we build for
            </h2>
            <p className="mb-7 text-[0.96rem] leading-[1.8] text-white/70">
              We serve a wide range of industries including automotive, electric
              vehicles (EV), auto electricals, home appliances, switchgears and
              measuring instruments — manufacturing components for steering
              systems, fuel tank caps, MCB parts and electrical fan parts,
              catering to top OEMs and Tier-1 suppliers.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {INDUSTRY_FOCUS.map((f) => (
                <span
                  key={f}
                  className="rounded-lg border border-white/[0.12] bg-white/[0.05] px-3 py-2.5 text-[0.84rem] text-white/85"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 rounded-panel border border-white/[0.11] bg-white/[0.04] p-5">
              <p className="text-[0.9rem] leading-[1.75] text-white/70">
                Every component in these sectors is produced with the same
                in-house tool room, moulding floor and inspection laboratory —
                described in detail on the capabilities page.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/our-infrastructure"
                  className="btn btn-primary btn-sm"
                >
                  Our infrastructure
                </Link>
                <Link
                  to="/quality-certifications"
                  className="btn btn-sm border-white/30 bg-white/5 text-white hover:bg-white hover:text-navy"
                >
                  Quality systems
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Eyebrow light>Business challenges</Eyebrow>
            <h2 className="mb-5 text-[1.3rem] text-white">
              Problems we solve for customers
            </h2>
            <ul className="grid gap-2.5">
              {CHALLENGES.map((c) => (
                <li
                  key={c.title}
                  className="rounded-xl border border-white/[0.11] bg-white/[0.04] p-4"
                >
                  <strong className="block text-[0.92rem] text-white">
                    {c.title}
                  </strong>
                  <span className="text-[0.85rem] leading-relaxed text-white/65">
                    {c.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* --------------------------- mapping ------------------------------ */}
      <Section tone="gradient" ornament>
        <SectionHeading
          eyebrow="Products by application"
          title="Our product groups"
          description="Every product group below is moulded in-house, inspected in-house and dispatched from Faridabad or Haridwar."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 60}>
              <Link
                to={`/products/${p.slug}`}
                className="group flex h-full items-center gap-4 rounded-card border border-ink-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="h-14 w-16 shrink-0 overflow-hidden rounded-[10px] bg-surface-light">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width="128"
                    height="112"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <strong className="block text-[0.95rem] font-semibold text-navy">
                    {p.name}
                  </strong>
                  <span className="block text-[0.82rem] leading-snug text-ink-muted">
                    {p.short}
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
        <div className="mt-8">
          <Button to="/products" variant="navy" icon="arrowRight">
            View all products
          </Button>
        </div>
      </Section>

      <CtaBand title="Tell us the application — we’ll specify the component" />
    </>
  );
}
