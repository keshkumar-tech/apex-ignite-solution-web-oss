import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useSeo from "../lib/useSeo";
import {
  CONTACT,
  CUSTOMERS,
  INDUSTRIES,
  MILESTONES,
  PROCESS,
  PRODUCTS,
  PRODUCTS_INTRO,
  WHY_US,
  WHY_US_CLOSING,
} from "../data/site";
import Icon from "../components/ui/Icon";
import {
  Button,
  CheckList,
  Container,
  CtaBand,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "../components/ui/Primitives";
import ProfileTabs from "../components/sections/ProfileTabs";
import Timeline from "../components/sections/Timeline";
import Process from "../components/sections/Process";
import Faq from "../components/sections/Faq";
import { ProductGrid } from "../components/sections/ProductCard";
import EnquiryForm from "../components/sections/EnquiryForm";

const HERO_STATS = [
  { value: "1993", label: "Manufacturing since" },
  { value: "61", label: "Injection moulding machines" },
  { value: "60–600 t", label: "Machine tonnage range" },
  { value: "15", label: "Power press machines" },
];

const HERO_VIDEO_SRC = "/images/1029.mp4";

/**
 * Defers the hero video until the browser is idle so it never competes with
 * the hero text and poster for the first paint (which is the LCP element).
 * Returns `null` until it is time to load — the caller then renders the
 * <video> with a real `src` attribute, which is what actually makes the
 * browser fetch it. (Setting `src` on an inner <source> element later does
 * NOT trigger a load — that is what left the player stuck on its poster.)
 */
function useDeferredHeroVideo() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const conn = navigator.connection;
    // honour data-saver and reduced-motion: keep the still poster only
    if (conn?.saveData) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let cancelled = false;
    const start = () => {
      if (!cancelled) setReady(true);
    };

    const idle =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback
        : (cb) => window.setTimeout(cb, 800);

    const handle = idle(start, { timeout: 1800 });

    return () => {
      cancelled = true;
      if (
        typeof window.cancelIdleCallback === "function" &&
        typeof handle === "number"
      ) {
        window.cancelIdleCallback(handle);
      }
    };
  }, []);

  return ready;
}

export default function Home() {
  const videoReady = useDeferredHeroVideo();

  useSeo({
    title: "Apex Ignite | Thermoplastic Injection Moulding Manufacturer",
    description:
      "Apex Ignite Solutions Pvt. Ltd. manufactures thermoplastic moulded components and moulds with in-house tool making, 2D & 3D mould design, 61 automatic injection moulding machines (60–600 tons), robotics, vision inspection and ultrasonic welding.",
    path: "/",
    image: "/images/steringaa.webp",
  });

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="hero-gradient relative isolate flex flex-col justify-center overflow-hidden text-white lg:min-h-[calc(100svh-126px)]">
        <div
          aria-hidden="true"
          className="grid-lines absolute inset-0 -z-10 opacity-20"
        />
        {/* colour blooms for depth */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(245,130,53,0.22),transparent_62%)] blur-2xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(14,159,138,0.20),transparent_62%)] blur-2xl"
        />
        {/* soft bottom blend into the next section — no dark band */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent via-navy/10 to-navy/25"
        />
        <Container className="relative flex-1 pb-8 pt-4 sm:pb-10 sm:pt-6 lg:flex lg:flex-col lg:justify-center lg:pb-10 lg:pt-8">
          {/* Desktop: two columns — text (badge, heading, copy, CTAs, stats) on
              the left, video + tonnage card on the right. Unchanged.
              Mobile only: badge + heading + intro copy stay in the text
              column, the video block is ordered between the intro copy and
              the CTAs (see the `[data-hero-*]` rules in index.css), and the
              CTAs + stats live in a sibling block. Grid placement is
              mobile-only and everything is reset at lg. */}
          <div className="hero-layout flex flex-col gap-5 sm:gap-6 lg:grid lg:h-full lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center lg:gap-10">
            <div data-hero-text className="flex flex-col">
              <span className="mb-3 inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] py-1 pl-1 pr-3 text-[0.54rem] font-semibold uppercase leading-tight tracking-[0.07em] text-white sm:gap-2 sm:pr-3 sm:text-[0.62rem]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent">
                  <Icon
                    name="check"
                    className="h-2.5 w-2.5 text-accent"
                    strokeWidth={4}
                  />
                </span>
                IATF &amp; ISO/TS 16949 · Quality · Cost · Delivery · Service
              </span>

              <h1 className="text-hero-title mt-0 text-[1.6rem] text-white sm:text-[1.85rem] lg:text-[2.5rem]">
                Precision thermoplastic components,{" "}
                <em className="not-italic text-accent">engineered</em> for
                demanding industries
              </h1>

              <p
                data-hero-copy
                className="mt-3 max-w-[560px] text-[0.84rem] leading-[1.65] text-white/75 sm:text-[0.9rem]"
              >
                Welcome to Apex Ignite Solutions Pvt. Ltd. —{" "}
                <strong className="font-medium text-white">
                  thermoplastic moulded components and moulds
                </strong>{" "}
                with in-house tool making, 2D &amp; 3D mould design and{" "}
                <strong className="font-medium text-white">
                  61 automatic injection moulding machines from 60 to 600 tons
                </strong>
                , supported by robotics and vision inspection for zero-defect
                production.
              </p>
            </div>

            {/* CTAs + stats. Sibling of the media block so that on phones the
                video can sit between the intro copy and these buttons. At lg
                both are placed back into grid column 1, so the desktop hero
                keeps its original order: copy → CTAs → stats. */}
            <div data-hero-actions className="flex flex-col">
              <div className="flex flex-col gap-2.5 sm:flex-row lg:mt-6">
                <Button
                  to="/products"
                  icon="arrowRight"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Explore Products
                </Button>
                <Button
                  to="/contact-us"
                  variant="ghost"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Get a Quote
                </Button>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-2.5 pb-1 sm:mt-7 sm:grid-cols-4">
                {HERO_STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className="group relative min-w-0 overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] px-2.5 py-2.5 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.12] sm:px-3 sm:py-3"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-4 -top-4 h-14 w-14 rounded-full bg-accent/20 opacity-0 blur-xl transition-opacity duration-400 group-hover:opacity-100"
                    />
                    <dd className="whitespace-nowrap text-[0.95rem] font-bold leading-none tracking-[-0.02em] text-white sm:text-[1rem] lg:text-[1.05rem] xl:text-[1.15rem]">
                      {s.value}
                    </dd>
                    <dt className="mt-1 text-[0.58rem] leading-snug text-white/55 transition-colors group-hover:text-white/80 sm:text-[0.6rem] lg:text-[0.63rem]">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Media — a grid item of its own at lg (column 2). On phones it
                is ordered between the intro copy and the CTAs. */}
            <div
              data-hero-media
              className="relative flex flex-col justify-start lg:justify-center"
            >
                <div className="relative aspect-[16/9] overflow-hidden rounded-panel border border-white/15 bg-navy shadow-lift sm:aspect-[4/2.6]">
                  <img
                    src="/images/steringaa.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    decoding="async"
                    width="960"
                    height="540"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {videoReady && (
                    <video
                      src={HERO_VIDEO_SRC}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster="/images/steringaa.webp"
                      aria-label="Apex Ignite thermoplastic injection moulding manufacturing facility"
                      className="absolute inset-0 z-10 h-full w-full object-cover"
                    />
                  )}
                  {/* subtle edge tint so the frame melts into the navy hero */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
                  />
                </div>
                {/* sits BELOW the video, never overlapping it on any breakpoint */}
                <div className="group relative mt-2.5 flex items-center gap-4 overflow-hidden rounded-xl bg-white px-4 py-2.5 text-navy shadow-lift transition-transform duration-400 hover:-translate-y-0.5 sm:mt-3 sm:px-5 sm:py-3">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-brand"
                  />
                  <strong className="block whitespace-nowrap pl-1.5 text-[1.3rem] leading-none font-bold tracking-[-0.03em] sm:text-[1.7rem]">
                    <span className="text-gradient-brand">60–600</span>
                    <span className="text-accent">t</span>
                  </strong>
                  <span className="h-8 w-px shrink-0 bg-ink-line" />
                  <small className="text-[0.68rem] font-semibold uppercase leading-snug tracking-[0.08em] text-ink-muted">
                    Machine tonnage range
                    <br />
                    <span className="font-medium lowercase tracking-normal text-ink-muted/80">
                      61 automatic machines
                    </span>
                  </small>
                </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================== ABOUT / WELCOME ========================= */}
      <Section>
        {/* Decorative layer is clipped to the section via contain:paint, so the
            glows add depth without creating horizontal overflow. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none [contain:paint]"
        >
          <span className="absolute inset-0 bg-grid-slate bg-grid opacity-25 [mask-image:radial-gradient(65%_50%_at_50%_45%,#000,transparent)]" />
          <span className="absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(23,75,131,0.12),transparent_65%)] blur-2xl" />
          <span className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(245,130,53,0.13),transparent_65%)] blur-2xl" />
        </div>

        <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
          <div>
            <Eyebrow>About our company</Eyebrow>
            <h2 className="text-section-title mb-5">
              Welcome to Apex Ignite Solutions Pvt. Ltd.
            </h2>
            <p className="mb-6 text-[0.98rem] leading-[1.8] text-ink-muted sm:text-[1.03rem]">
              We are a leading manufacturer of{" "}
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
              . Our state-of-the-art facilities include{" "}
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
              . We also offer{" "}
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
            <CheckList
              className="mb-8"
              items={[
                "In-house tool making with VMC, EDM, Wire Cut and CNC machines",
                "Dedicated design section — 2D & 3D precision mould development",
                "61 automatic injection moulding machines, 60 to 600 tons",
                "15 power press machines and ultrasonic welding of plastic components",
                "Robotics and vision camera systems for zero-defect production",
              ]}
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/about-us" variant="navy" icon="arrowRight">
                Know more about us
              </Button>
              <Button to="/our-infrastructure" variant="outline">
                Our infrastructure
              </Button>
            </div>

            {/* inline trust strip — fills the lower-left space with real facts */}
            <div className="mt-8 grid gap-2.5 border-t border-ink-line/70 pt-6 sm:grid-cols-3">
              {[
                { i: "shield", t: "IATF 16949", d: "Quality system" },
                { i: "award", t: "ZED Gold", d: "Ministry of MSME" },
                { i: "target", t: "Green Supplier", d: "MSIL T2 vendor" },
              ].map((x) => (
                <div key={x.t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-dark ring-1 ring-accent/15">
                    <Icon name={x.i} className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0">
                    <strong className="block text-[0.8rem] font-semibold leading-tight text-navy">
                      {x.t}
                    </strong>
                    <span className="block text-[0.7rem] leading-snug text-ink-muted">
                      {x.d}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* image stack */}
            <div className="group relative pb-12 pl-6 sm:pb-14 sm:pl-14">
              <div className="relative aspect-[4/3.4] overflow-hidden rounded-panel border border-ink-line/60 bg-surface-light shadow-premium">
                <img
                  src="/images/steringaa.webp"
                  alt="Automotive steering components moulded by Apex Ignite"
                  loading="lazy"
                  width="900"
                  height="620"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
                />
              </div>

              {/* floating secondary image */}
              <div className="absolute bottom-0 left-0 aspect-square w-[46%] overflow-hidden rounded-2xl border-[6px] border-white bg-surface-light shadow-lift transition-transform duration-500 group-hover:-translate-y-1">
                <img
                  src="/images/lock-cosmponet.webp"
                  alt="Automotive lock components moulded by Apex Ignite"
                  loading="lazy"
                  width="400"
                  height="400"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* floating stat chip */}
              <div className="absolute right-3 top-4 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-lift backdrop-blur sm:right-4">
                <b className="block text-[1.15rem] leading-none text-navy">
                  61
                </b>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                  Machines
                </span>
              </div>
            </div>

            {/* certified strip */}
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-ink-line/70 bg-gradient-to-r from-brand/[0.06] via-white to-accent/[0.06] px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-accent-dark shadow-soft ring-1 ring-accent/15">
                <Icon name="shield" className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <strong className="block text-[0.78rem] font-semibold leading-tight text-navy">
                  IATF 16949 · ISO 14001 · ISO 45001
                </strong>
                <span className="text-[0.7rem] text-ink-muted">
                  Certified at both plants
                </span>
              </div>
            </div>

            {/* capability mini-grid fills the column */}
            <div className="mb-2.5 mt-2.5 grid grid-cols-2 gap-2.5">
              {[
                { i: "build", t: "Tool room", v: "VMC · EDM" },
                { i: "layers", t: "Moulding", v: "60–600 t" },
                { i: "shield", t: "Inspection", v: "CMM · Vision" },
                { i: "factory", t: "Plants", v: "Faridabad · Haridwar" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="group/mini flex items-center gap-2.5 rounded-xl border border-ink-line/80 bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-premium"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand/[0.07] text-brand transition-colors group-hover/mini:bg-brand group-hover/mini:text-white">
                    <Icon name={x.i} className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block truncate text-[0.78rem] font-semibold leading-tight text-navy">
                      {x.t}
                    </strong>
                    <span className="block text-[0.66rem] leading-snug text-ink-muted">
                      {x.v}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== COMPANY PROFILE TABS ======================= */}
      <Section
        tone="dark"
        overlay="dark"
        bgImage="/images/mb-machine-pdfg.webp"
        bgPosition="center right"
      >
        <SectionHeading
          light
          eyebrow="Company profile"
          title="Achievements, mission, vision &amp; capabilities"
          description="A closer look at what we have achieved, what we stand for and the manufacturing capability behind every component."
        />
        <ProfileTabs />
      </Section>

      {/* =========================== MILESTONES =========================== */}
      <Section>
        <div className="mb-9 grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-14">
          <div>
            <Eyebrow>Company milestones</Eyebrow>
            <h2 className="text-section-title">Our Journey, 1993 to 2027</h2>
          </div>
          <p className="text-[0.96rem] leading-[1.8] text-ink-muted">
            From three hand moulding machines in 1993 to two manufacturing units
            and an expanding moulding base — the milestones below are the
            company&apos;s own record.
          </p>
        </div>

        <Timeline items={MILESTONES} horizontal />

        <div className="mt-9 grid gap-8 border-t border-ink-line/70 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <div className="auto-rows-fr grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {[
                { v: "2", l: "Manufacturing units — Faridabad & Haridwar" },
                { v: "40,000 sq. ft.", l: "Faridabad plant installed in 2017" },
                { v: "20,000 sq. ft.", l: "Own plant in Sidcul, Haridwar" },
                { v: "≈50,000 sq. ft.", l: "New land under construction" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={i * 60} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-card border border-ink-line/80 bg-white p-5 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:border-brand/25 hover:shadow-premium">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-5 -top-5 h-16 w-16 rounded-full bg-gradient-to-br from-brand/12 to-transparent opacity-0 blur-xl transition-opacity duration-400 group-hover:opacity-100"
                    />
                    <b className="relative block text-[1.5rem] leading-tight tracking-[-0.02em] text-navy">
                      {s.v}
                    </b>
                    <span className="relative mt-1.5 block text-[0.8rem] text-ink-muted">
                      {s.l}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-brand transition-transform duration-500 group-hover:scale-x-100"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            <Link
              to="/about-us#milestones"
              className="link-arrow mt-7 inline-flex"
            >
              Full company timeline <Icon name="arrowRight" />
            </Link>
          </div>
          <div className="rounded-panel border border-ink-line/80 bg-gradient-to-br from-brand/[0.05] via-white to-accent/[0.07] p-5 shadow-soft sm:p-6">
            <h3 className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink-muted">
              Journey at a glance
            </h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3">
              {[
                { v: "1993", l: "Factory started" },
                { v: "2027", l: "Mass production target" },
                { v: "61", l: "Injection moulding machines" },
                { v: "15", l: "Power press machines" },
                { v: "2", l: "Manufacturing plants" },
                { v: "3", l: "ISO certifications held" },
              ].map((s) => (
                <div key={s.l}>
                  <b className="block text-[1.15rem] leading-none tracking-[-0.02em] text-navy">
                    {s.v}
                  </b>
                  <span className="mt-1 block text-[0.74rem] leading-snug text-ink-muted">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================ PRODUCTS ============================ */}
      <Section tone="dark" overlay="dark" ornament>
        <div className="mb-10 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
          <div>
            <Eyebrow light>Our products</Eyebrow>
            <h2 className="text-section-title text-white">
              Precision Plastic <span className="text-accent">Components</span>{" "}
              &amp; Engineered Solutions
            </h2>
          </div>
          <p className="text-[0.96rem] leading-[1.8] text-white/75">
            {PRODUCTS_INTRO}
          </p>
        </div>
        <ProductGrid products={PRODUCTS} cols={4} glass />
        <div className="mt-9">
          <Button to="/products" icon="arrowRight">
            View all products
          </Button>
        </div>
      </Section>

      {/* ============================= PROCESS ============================ */}
      <Section>
        <SectionHeading
          eyebrow="Our process"
          title="Ensuring quality, precision and reliability at every stage."
          description="Four connected stages — from tool room and die storage to finished goods dispatch."
        />
        <Process items={PROCESS} />
      </Section>

      {/* ========================== WHY CHOOSE US ========================= */}
      <Section
        tone="dark"
        overlay="dark"
        bgImage="/images/infrastructure.webp"
        bgPosition="center"
      >
        <div className="mb-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <Eyebrow light>Why choose us</Eyebrow>
            <h2 className="text-section-title text-white">
              Advanced Thermoplastic Injection Molding &amp; Precision Plastic
              Manufacturing
            </h2>
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-panel bg-surface-mid">
            <img
              src="/images/electrical-star4ter.webp"
              alt="Auto electrical starter components moulded by Apex Ignite"
              loading="lazy"
              width="900"
              height="560"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {WHY_US.map((item, i) => (
            <Reveal key={item.num} delay={i * 70} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-panel border border-ink-line/80 bg-white p-6 shadow-premium transition-all duration-400 ease-smooth hover:-translate-y-2 hover:border-transparent hover:shadow-hover sm:p-7">
                {/* corner glow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl transition-transform duration-500 group-hover:scale-150"
                />
                {/* oversized ghost number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 right-2 select-none text-[5.5rem] font-bold leading-none tracking-tighter text-navy/[0.045] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-navy/[0.08]"
                >
                  {item.num}
                </span>

                <div className="relative mb-5 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-navy to-brand text-white shadow-lg ring-1 ring-white/10 transition-all duration-400 group-hover:scale-110 group-hover:-rotate-6 group-hover:from-accent group-hover:to-accent-dark">
                    <Icon
                      name={["shield", "build", "gear", "factory"][i % 4]}
                      className="h-5 w-5"
                    />
                  </span>
                  <span className="text-[0.68rem] font-bold tracking-[0.16em] text-ink-muted">
                    {item.num}
                  </span>
                </div>

                <h3 className="relative mb-2.5 text-[1.08rem] leading-snug transition-colors duration-300 group-hover:text-brand sm:text-[1.12rem]">
                  {item.title}
                </h3>
                <p className="relative text-[0.9rem] leading-[1.7] text-ink-muted">
                  {item.text}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-light to-brand transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-9 text-[0.97rem] leading-[1.85] text-white/75 lg:text-[1.03rem]">
          {WHY_US_CLOSING}
        </p>
      </Section>

      {/* =========================== INDUSTRIES =========================== */}
      <section className="bg-navy py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <div className="mb-10 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
            <div>
              <Eyebrow light>Industries we serve</Eyebrow>
              <h2 className="text-section-title text-white">
                Precision Plastic Solutions Across Diverse Industries
              </h2>
            </div>
            <p className="text-[0.96rem] leading-[1.8] text-white/70">
              From concept and mold design to precision injection molding and
              component finishing, we provide reliable manufacturing solutions
              that meet the demanding requirements of diverse industries with
              quality, flexibility, and advanced in-house capabilities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 5) * 50}>
                <div className="group relative flex h-full items-center gap-3 overflow-hidden rounded-xl border border-white/[0.11] bg-white/[0.045] p-3.5 transition-all duration-400 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-white/[0.1] hover:shadow-[0_18px_40px_-20px_rgba(245,130,53,0.6)] sm:gap-3.5 sm:p-4">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-6 h-16 w-16 rounded-full bg-accent/25 opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100"
                  />
                  {/* Icons are WHITE line-art, so the tile must stay dark —
                     a white tile makes them disappear entirely (the reported
                     bug). Hover only lifts opacity, never changes the fill. */}
                  <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-white/10 p-1.5 ring-1 ring-inset ring-white/25 transition-all duration-400 group-hover:scale-110 group-hover:bg-accent group-hover:ring-accent sm:h-11 sm:w-11">
                    <img
                      src={ind.image}
                      alt=""
                      loading="lazy"
                      decoding="sync"
                      width="44"
                      height="44"
                      className="h-full w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </span>
                  <span className="relative text-[0.85rem] font-medium leading-snug text-white/90 transition-colors group-hover:text-white sm:text-[0.92rem]">
                    {ind.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/industries" variant="ghost" icon="arrowRight">
              Explore industries
            </Button>
          </div>
        </Container>
      </section>

      {/* =============================== FAQ ============================== */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Frequently asked questions"
          title="Everything You Need to Know About Our Solutions"
          description="Get answers to your common questions about our capabilities, facilities and quality systems."
        />
        <Faq />
        <div className="mt-9 text-center">
          <Link to="/about-us" className="link-arrow">
            More about our company <Icon name="arrowRight" />
          </Link>
        </div>
      </Section>

      {/* ============================ CUSTOMERS =========================== */}
      <Section
        tone="dark"
        overlay="dark"
        className="py-14 sm:py-16 lg:py-20"
        bgImage="/images/steringaa.webp"
        bgPosition="center"
      >
        <div className="mb-8 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
          <div>
            <Eyebrow light>Our esteemed customers</Eyebrow>
            <h2 className="text-section-title text-white">
              Trusted by Leading Brands
            </h2>
          </div>
          <p className="text-[0.96rem] leading-[1.8] text-white/75">
            Building lasting relationships with leading organizations through
            quality, reliability, and solutions that deliver measurable value.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {CUSTOMERS.map((c) => (
            <div
              key={c.name}
              className="group relative grid min-h-[84px] place-items-center overflow-hidden rounded-xl border border-white/25 bg-white p-4 shadow-[0_10px_28px_-16px_rgba(0,0,0,0.6)] transition-all duration-400 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-premium sm:min-h-[104px] sm:p-5"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-light transition-transform duration-500 group-hover:scale-x-100"
              />
              <img
                src={c.image}
                alt={`${c.name} logo`}
                loading="lazy"
                width="160"
                height="60"
                className="max-h-9 w-auto max-w-full object-contain opacity-90 transition-all duration-400 group-hover:scale-105 group-hover:opacity-100 sm:max-h-[46px]"
              />
            </div>
          ))}
        </div>
        <Link
          to="/our-customers"
          className="link-arrow mt-7 inline-flex text-white/85 hover:text-accent"
        >
          See our customers <Icon name="arrowRight" />
        </Link>
      </Section>

      {/* ============================= ENQUIRY ============================ */}
      <Section id="enquiry">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <Eyebrow>Talk to an expert</Eyebrow>
            <h2 className="text-section-title mb-4">
              Let&apos;s Build Together Your Next Solution
            </h2>
            <p className="mb-7 text-[0.98rem] leading-[1.8] text-ink-muted">
              Our experts will get in touch with you. Share your product
              requirement and our engineering desk will revert with a
              manufacturing proposal.
            </p>
            <CheckList
              className="mb-8"
              items={[
                "Send drawings, specifications or sample requirements",
                "Component development from mould design to mass production",
                "Two-shift operations across both plants",
              ]}
            />
            <div className="grid gap-3.5">
              <a
                href={`tel:${CONTACT.phone1Href}`}
                className="flex gap-4 rounded-xl border border-ink-line bg-white p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                  <Icon name="phone" className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <strong className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
                    Call us directly
                  </strong>
                  <span className="block text-[0.94rem] text-ink">
                    {CONTACT.phone1}
                    <br />
                    {CONTACT.phone2}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${CONTACT.emailSupport}`}
                className="flex gap-4 rounded-xl border border-ink-line bg-white p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-brand/[0.08] text-brand">
                  <Icon name="mail" className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <strong className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
                    Mail us
                  </strong>
                  <span className="block truncate text-[0.94rem] text-ink">
                    {CONTACT.emailSupport}
                  </span>
                  <span className="block truncate text-[0.94rem] text-ink">
                    {CONTACT.email1}
                  </span>
                </span>
              </a>
            </div>
          </div>
          <EnquiryForm title="Talk to an Expert" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
