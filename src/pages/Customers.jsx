import useSeo from "../lib/useSeo";
import { CUSTOMERS, PRODUCTS } from "../data/site";
import Icon from "../components/ui/Icon";
import {
  Button,
  CtaBand,
  Eyebrow,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
  Container,
} from "../components/ui/Primitives";
import { Link } from "react-router-dom";

export default function Customers() {
  useSeo({
    title: "Our Customers",
    description:
      "Apex Ignite Solutions supplies leading brands including Groz, Havells, MIRC, Sanden, Sebros, Spark Minda, Talbros, Vidocon and Auto Lake, and is a direct-on-line tier-1 supplier to M/S Minda Corporation Ltd.",
    path: "/our-customers",
    image: "/images/sparkminda.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Our esteemed customers"
        title="Trusted by Leading Brands"
        description="Building lasting relationships with leading organizations through quality, reliability, and solutions that deliver measurable value."
        crumbs={[{ label: "Our Customers" }]}
      />

      <Section tone="white" ornament>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CUSTOMERS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 60} className="h-full">
              <article className="group relative flex h-full items-center gap-5 overflow-hidden rounded-panel border border-ink-line/80 bg-white p-6 shadow-premium transition-all duration-400 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-hover">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand/10 to-accent/10 opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-brand transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="relative grid h-[86px] w-[130px] shrink-0 place-items-center rounded-xl border border-ink-line/60 bg-gradient-to-br from-surface-light to-white p-3 transition-all duration-400 group-hover:border-brand/15">
                  <img
                    src={c.image}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    width="160"
                    height="60"
                    className="max-h-12 w-auto max-w-full object-contain opacity-85 grayscale transition-all duration-400 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="relative">
                  <h2 className="text-[1.02rem] transition-colors duration-300 group-hover:text-brand">
                    {c.name}
                  </h2>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-ink-muted">
                    Customer of Apex Ignite Solutions
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-[0.82rem] leading-relaxed text-ink-muted">
          Customer logos are reproduced from the company&apos;s own website. No
          additional clients, testimonials or ratings have been added.
        </p>
      </Section>

      {/* ----------------------------- marquee ----------------------------- */}
      <section className="border-y border-ink-line bg-surface-light py-9">
        <Container>
          <p className="mb-6 text-center text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
            Serving automotive, electrical, appliance &amp; instrumentation
            manufacturers
          </p>
          <div className="grid grid-cols-3 items-center justify-items-center gap-6 sm:grid-cols-5 lg:grid-cols-9">
            {CUSTOMERS.map((c) => (
              <img
                key={c.name}
                src={c.image}
                alt={`${c.name} logo`}
                loading="lazy"
                width="120"
                height="48"
                className="max-h-9 w-auto max-w-full object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:max-h-11"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------- supplier ---------------------------- */}
      <Section tone="gradient" ornament>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Eyebrow>Supplier status</Eyebrow>
            <h2 className="text-section-title mb-4">
              Direct-on-line tier-1 supplier
            </h2>
            <p className="mb-6 text-[0.97rem] leading-[1.8] text-ink-muted">
              Apex Ignite Solutions is a direct-on-line tier-1 supplier to M/S
              Minda Corporation Ltd. and is assessed as a Green supplier under
              the MSIL T2 Vendor Assessment System.
            </p>
            <ul className="grid gap-3">
              {[
                {
                  i: "shield",
                  t: "IATF 16949:2016",
                  d: "Automotive quality management certification, valid till 31st Mar 2028.",
                },
                {
                  i: "target",
                  t: "Green Supplier",
                  d: "Per the MSIL T2 Vendor Assessment System.",
                },
                {
                  i: "award",
                  t: "ZED Gold",
                  d: "Gold Certificate under the Ministry of MSME ZED scheme.",
                },
              ].map((x) => (
                <li
                  key={x.t}
                  className="flex gap-3.5 rounded-xl border border-ink-line bg-white p-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-accent/12 text-accent-dark">
                    <Icon name={x.i} className="h-4 w-4" />
                  </span>
                  <span>
                    <strong className="block text-[0.94rem] text-navy">
                      {x.t}
                    </strong>
                    <span className="text-[0.85rem] leading-relaxed text-ink-muted">
                      {x.d}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-panel bg-navy p-7 text-white sm:p-9">
            <h2 className="mb-3 text-[1.3rem] text-white">
              What customers order from us
            </h2>
            <p className="mb-5 text-[0.92rem] leading-relaxed text-white/70">
              Component groups supplied across automotive, electrical, home
              appliance and instrumentation applications.
            </p>
            <ul className="grid gap-2">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="flex items-center justify-between gap-3 border-b border-white/10 py-2.5 text-[0.9rem] text-white/80 transition-colors hover:text-accent"
                  >
                    {p.name}
                    <Icon
                      name="chevronRight"
                      className="h-3.5 w-3.5 shrink-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="light" className="py-14">
        <SectionHeading
          align="center"
          eyebrow="Next step"
          title="Looking for a supplier for your component?"
          description="Send us the drawing and volume — we will confirm feasibility, tooling and delivery."
        />
        <div className="flex justify-center">
          <Button to="/contact-us" icon="arrowRight">
            Start a conversation
          </Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
