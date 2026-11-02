import { Link } from "react-router-dom";
import useSeo from "../lib/useSeo";
import {
  CHALLENGES,
  INDUSTRY_FOCUS,
  PRODUCTS,
  PRODUCTS_INTRO,
  PROCESS,
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
import { ProductGrid } from "../components/sections/ProductCard";
import Process from "../components/sections/Process";

export default function Products() {
  useSeo({
    title: "Products — Precision Plastic Components",
    description:
      "Apex Ignite product groups: automotive lock components, auto electrical alternator and starter parts, automotive steering components, washing machine parts, MCB & switchgear parts, speedometer and oil gauge meter components.",
    path: "/products",
    image: "/images/lock-cosmponet.webp",
  });

  return (
    <>
      <PageBanner
        eyebrow="Products"
        title="Precision Plastic Components &amp; Engineered Solutions"
        description={PRODUCTS_INTRO}
        crumbs={[{ label: "Products" }]}
      >
        <div className="mt-7 flex flex-wrap gap-2">
          {PRODUCTS.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[0.78rem] text-white/85 transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              {p.name}
            </a>
          ))}
        </div>
      </PageBanner>

      {/* --------------------------- category list -------------------------- */}
      <Section tone="white" ornament>
        <SectionHeading
          eyebrow="Product categories"
          title="Eight component groups, one manufacturing system"
          description="Every group is produced using the same in-house tooling, moulding, inspection and assembly capability. Open a category to see the actual components we mould."
        />
        <ProductGrid products={PRODUCTS} cols={4} />
      </Section>

      {/* ------------------------- detail listing -------------------------- */}
      <Section tone="gradient" ornament>
        <SectionHeading
          eyebrow="In detail"
          title="What we manufacture in each group"
        />
        <div className="grid gap-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 50}>
              <article
                id={p.slug}
                className="scroll-mt-28 overflow-hidden rounded-card border border-ink-line bg-white"
              >
                <div className="grid gap-0 md:grid-cols-[240px_minmax(0,1fr)]">
                  <Link
                    to={`/products/${p.slug}`}
                    className="block bg-surface-light"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width="480"
                      height="360"
                      className="h-full max-h-[220px] w-full object-cover md:max-h-none"
                    />
                  </Link>
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[1.05rem] sm:text-[1.12rem]">
                        <Link
                          to={`/products/${p.slug}`}
                          className="transition-colors hover:text-brand"
                        >
                          {p.name}
                        </Link>
                      </h3>
                      <span className="rounded-full bg-brand/[0.07] px-2.5 py-1 text-[0.72rem] font-semibold text-brand">
                        {p.parts.length}{" "}
                        {p.parts.length === 1 ? "component" : "components"}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[0.9rem] leading-[1.75] text-ink-muted">
                      {p.description}
                    </p>
                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      {p.parts.slice(0, 6).map((part, idx) => (
                        <span
                          key={`${part.name}-${idx}`}
                          className="rounded-md border border-ink-line bg-surface-light px-2 py-1 text-[0.76rem] text-ink"
                        >
                          {part.name}
                        </span>
                      ))}
                      {p.parts.length > 6 && (
                        <span className="text-[0.76rem] font-medium text-ink-muted">
                          +{p.parts.length - 6} more
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/products/${p.slug}`}
                      className="link-arrow mt-4 inline-flex"
                    >
                      View components <Icon name="arrowRight" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------- challenges --------------------------- */}
      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Business challenges</Eyebrow>
            <h2 className="text-section-title mb-4">
              What our customers ask us to solve
            </h2>
            <p className="mb-6 text-[0.96rem] leading-[1.8] text-ink-muted">
              The six challenges below are the ones Apex Ignite addresses with
              its in-house tooling, moulding and quality capability.
            </p>
            <div className="rounded-panel border border-ink-line bg-surface-light p-5">
              <h3 className="mb-3 text-[0.95rem]">Industry focus</h3>
              <div className="flex flex-wrap gap-2">
                {INDUSTRY_FOCUS.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-ink-line bg-white px-3 py-1.5 text-[0.78rem] text-ink"
                  >
                    {i}
                  </span>
                ))}
              </div>
              <Link to="/industries" className="link-arrow mt-4 inline-flex">
                View all industries <Icon name="arrowRight" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 60}>
                <div className="h-full rounded-card border border-ink-line/80 bg-white p-5 shadow-soft">
                  <span className="mb-2 grid h-9 w-9 place-items-center rounded-[9px] bg-brand/[0.07] text-brand">
                    <Icon name="target" className="h-4 w-4" />
                  </span>
                  <h3 className="mb-1.5 text-[0.98rem]">{c.title}</h3>
                  <p className="text-[0.88rem] leading-[1.7] text-ink-muted">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ----------------------------- process ---------------------------- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="How we make it"
          title="Ensuring quality, precision and reliability at every stage."
        />
        <Process items={PROCESS} />
        <div className="mt-8">
          <Button to="/contact-us" icon="arrowRight">
            Discuss a component
          </Button>
        </div>
      </Section>

      <CtaBand
        title="Don’t see your component listed?"
        text="We manufacture customized thermoplastic components based on customer drawings, specifications and application needs."
      />
    </>
  );
}
