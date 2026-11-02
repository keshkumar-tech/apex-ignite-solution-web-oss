import { Link, Navigate, useParams } from "react-router-dom";
import useSeo from "../lib/useSeo";
import { FAQS, PENDING_ITEMS, PRODUCTS, getProduct } from "../data/site";
import Icon, { productIconName } from "../components/ui/Icon";
import {
  Button,
  CheckList,
  Container,
  CtaBand,
  Eyebrow,
  Notice,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
} from "../components/ui/Primitives";
import PartsGrid from "../components/sections/PartsGrid";
import EnquiryForm from "../components/sections/EnquiryForm";

const PROCESS_POINTS = [
  "Developed according to customer drawings, specifications and application requirements",
  "Manufactured on automatic injection moulding machines from 60 to 600 tons",
  "Robotics and vision camera systems for zero-defect production",
  "Inspected with Vision Measuring Machines and CMM",
  "Ultrasonic welding and assembly available where required",
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  useSeo({
    title: product ? `${product.name}` : "Product not found",
    description: product
      ? `${product.description} Manufactured by Apex Ignite Solutions using in-house tooling and automatic injection moulding (60–600 tons).`
      : "This product page does not exist.",
    path: `/products/${slug}`,
    image: product?.image,
    noindex: !product,
  });

  if (!product) return <Navigate to="/404" replace />;

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);
  const others = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      <PageBanner
        eyebrow="Product category"
        title={product.name}
        description={product.short}
        crumbs={[
          { label: "Products", to: "/products" },
          { label: product.name },
        ]}
      />

      {/* --------------------------- product hero -------------------------- */}
      <Section tone="white" ornament>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <div className="overflow-hidden rounded-panel border border-ink-line bg-surface-light">
              <img
                src={product.image}
                alt={product.name}
                width="900"
                height="700"
                className="aspect-[4/3.2] w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {others.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-ink-line bg-surface-light"
                  title={p.name}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width="280"
                    height="200"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand/[0.07] px-3 py-1.5 text-[0.74rem] font-semibold text-brand">
              <Icon
                name={productIconName(product.slug)}
                className="h-3.5 w-3.5"
              />
              {product.parts.length}{" "}
              {product.parts.length === 1 ? "component" : "components"} in this
              group
            </span>
            <h2 className="text-section-title mb-4">{product.name}</h2>
            <p className="mb-6 text-[0.98rem] leading-[1.8] text-ink-muted sm:text-[1.02rem]">
              {product.description}
            </p>

            <CheckList items={PROCESS_POINTS} className="mb-7" />

            <div className="mb-7 rounded-xl border border-ink-line bg-surface-light p-4">
              <p className="text-[0.86rem] leading-[1.7] text-ink-muted">
                <strong className="font-semibold text-navy">
                  Specifications:
                </strong>{" "}
                {PENDING_ITEMS.productSpecs}
              </p>
            </div>

            {product.imageNote && (
              <div className="mb-7">
                <Notice title="Image source note">{product.imageNote}</Notice>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                to={`/contact-us?product=${encodeURIComponent(product.name)}`}
                icon="arrowRight"
              >
                Enquire about this product
              </Button>
              <Button href="#components" variant="outline">
                View components
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------- components --------------------------- */}
      <Section id="components" tone="light" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Components"
          title={`Components in ${product.name}`}
          description="These are the parts we mould in this group, shown with the original component photographs published by the company."
        />
        {product.partsNote && (
          <div className="mb-6">
            <Notice title="Source note">{product.partsNote}</Notice>
          </div>
        )}
        <PartsGrid parts={product.parts} groupName={product.name} />
        <p className="mt-6 text-[0.82rem] text-ink-muted">
          Click any component to view it larger. Component names are reproduced
          as listed by the company; the same name may cover different variants.
        </p>
      </Section>

      {/* ------------------------- capabilities ---------------------------- */}
      <Section tone="white" ornament>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div>
            <Eyebrow>How it is made</Eyebrow>
            <h2 className="text-section-title mb-4">
              Manufacturing capability
            </h2>
            <p className="mb-6 text-[0.96rem] leading-[1.8] text-ink-muted">
              Apex Ignite Solutions manufactures this component group using
              advanced injection moulding technology, supported by in-house tool
              making, 2D &amp; 3D mould design and ultrasonic welding
              capabilities.
            </p>
            <div className="grid gap-3">
              {[
                { v: "61", l: "Automatic injection moulding machines" },
                { v: "60–600 t", l: "Machine tonnage range" },
                { v: "15", l: "Power press machines" },
                { v: "2", l: "Manufacturing units" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex items-center justify-between gap-4 rounded-xl border border-ink-line bg-white px-5 py-3.5"
                >
                  <span className="text-[0.88rem] text-ink-muted">{s.l}</span>
                  <b className="text-[1.05rem] text-navy">{s.v}</b>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-panel border border-ink-line bg-white p-6 sm:p-8">
            <h3 className="mb-4 text-[1.15rem]">
              Quality assurance for this group
            </h3>
            <ul className="grid gap-3">
              {FAQS.slice(1, 4).map((f) => (
                <li key={f.q} className="rounded-xl border border-ink-line p-4">
                  <h4 className="mb-1.5 text-[0.94rem]">{f.q}</h4>
                  <p className="text-[0.87rem] leading-[1.7] text-ink-muted">
                    {f.a[0]}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              to="/quality-certifications"
              className="link-arrow mt-4 inline-flex"
            >
              Quality &amp; certifications <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ----------------------------- enquiry ----------------------------- */}
      <Section tone="light">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div>
            <Eyebrow>Enquiry</Eyebrow>
            <h2 className="text-section-title mb-4">
              Enquire about {product.name}
            </h2>
            <p className="mb-6 text-[0.96rem] leading-[1.8] text-ink-muted">
              Send us your drawing, material, mould cavity requirement and
              annual volume — our engineering desk will respond with a
              manufacturing plan.
            </p>
            <CheckList
              items={[
                "Component developed from your drawing and specification",
                "Mould design and tooling in-house",
                "Prototype through to mass production",
              ]}
            />
          </div>
          <EnquiryForm
            product={product.name}
            title={`Enquiry — ${product.name}`}
          />
        </div>
      </Section>

      {/* ----------------------------- related ----------------------------- */}
      <Section tone="gradient" ornament>
        <SectionHeading eyebrow="Explore more" title="Other product groups" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to={`/products/${p.slug}`}
                className="group flex h-full items-center gap-3.5 rounded-card border border-ink-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-surface-light">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width="96"
                    height="96"
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <strong className="block text-[0.9rem] font-semibold leading-snug text-navy">
                    {p.name}
                  </strong>
                  <span className="block text-[0.78rem] text-ink-muted">
                    {p.parts.length} components
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
        <Container className="mt-8 px-0">
          <Link to="/products" className="link-arrow">
            All products <Icon name="arrowRight" />
          </Link>
        </Container>
      </Section>

      <CtaBand
        title={`Need ${product.name.toLowerCase()} for a new program?`}
        text="Share the drawing and annual volume — we will confirm tooling, cycle, material and delivery."
      />
    </>
  );
}
