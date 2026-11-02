import { useEffect, useState } from "react";
import useSeo from "../lib/useSeo";
import { GALLERY, PRODUCTS } from "../data/site";
import Icon from "../components/ui/Icon";
import {
  Button,
  CtaBand,
  Container,
  PageBanner,
  Reveal,
  Section,
  SectionHeading,
} from "../components/ui/Primitives";
import { Link } from "react-router-dom";

const FILTERS = [
  { id: "all", label: "All images" },
  { id: "facility", label: "Facility" },
  { id: "components", label: "Components" },
  { id: "quality", label: "Quality" },
];

/* map images to a filter group using their original captions */
function groupOf(caption) {
  const c = caption.toLowerCase();
  if (c.includes("quality") || c.includes("inspection")) return "quality";
  if (
    c.includes("facility") ||
    c.includes("plant") ||
    c.includes("infrastructure") ||
    c.includes("operations") ||
    c.includes("support")
  )
    return "facility";
  return "components";
}

export default function GalleryPage() {
  useSeo({
    title: "Gallery",
    description:
      "Photographs of Apex Ignite manufacturing — plant, injection moulding infrastructure, precision components and quality inspection, using the company's own images.",
    path: "/gallery",
    image: "/images/steringaa.webp",
  });

  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(-1);

  const items = GALLERY.filter(
    (g) => filter === "all" || groupOf(g.caption) === filter,
  );

  useEffect(() => {
    function onKey(e) {
      if (index < 0) return;
      if (e.key === "Escape") setIndex(-1);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + items.length) % items.length);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = index >= 0 ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length]);

  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="Manufacturing Gallery"
        description="The plant, the moulding floor, the components we mould and the inspection equipment — all photographs from the company's own website."
        crumbs={[{ label: "Gallery" }]}
      />

      <Section tone="white" ornament>
        <div className="mb-7 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setIndex(-1);
              }}
              className={`rounded-full border px-4 py-2 text-[0.84rem] font-medium transition-all ${
                filter === f.id
                  ? "border-navy bg-navy text-white"
                  : "border-ink-line bg-white text-ink hover:border-[#cfd8e4]"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto self-center text-[0.8rem] text-ink-muted">
            {items.length} image{items.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {items.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 50}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-ink-line bg-surface-light"
                aria-label={`View ${g.caption}`}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  decoding="async"
                  width="480"
                  height="360"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-3 bottom-2.5 translate-y-1.5 text-left text-[0.76rem] font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-[0.82rem] text-ink-muted">
          Captions describe what the original photographs show. Additional plant
          or product photographs can be added to this gallery on request.
        </p>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Product photos"
          title="Component photography"
          description="Each product page carries the component-level photographs for that group."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="group overflow-hidden rounded-card border border-ink-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-light">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width="480"
                  height="360"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <strong className="block text-[0.92rem] text-navy">
                  {p.name}
                </strong>
                <span className="link-arrow mt-1.5 text-[0.8rem]">
                  View components{" "}
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/products" variant="navy" icon="arrowRight">
            All products
          </Button>
        </div>
      </Section>

      <CtaBand
        title="Planning a plant visit?"
        text="We welcome customers and quality teams to visit our Faridabad and Haridwar plants."
      />

      {/* ------------------------------ lightbox --------------------------- */}
      {index >= 0 && items[index] && (
        <div
          className="fixed inset-0 z-[400] grid animate-fadeUp place-items-center bg-[#080f1a]/93 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery viewer"
          onClick={() => setIndex(-1)}
        >
          <button
            type="button"
            onClick={() => setIndex(-1)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white hover:border-accent hover:bg-accent"
          >
            <Icon name="close" className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + items.length) % items.length);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white hover:border-accent hover:bg-accent sm:grid"
          >
            <Icon name="arrowLeft" className="h-[18px] w-[18px]" />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-w-[min(1100px,94vw)]"
          >
            <img
              src={items[index].src}
              alt={items[index].caption}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-lift"
            />
            <figcaption className="mt-3 text-center text-[0.88rem] text-white/75">
              {items[index].caption} — {index + 1} / {items.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % items.length);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white hover:border-accent hover:bg-accent sm:grid"
          >
            <Icon name="arrowRight" className="h-[18px] w-[18px]" />
          </button>
        </div>
      )}

      <Container className="hidden" />
    </>
  );
}
