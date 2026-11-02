import { Link } from "react-router-dom";
import Icon, { productIconName } from "../ui/Icon";
import { Reveal } from "../ui/Primitives";

/** Tone per product group — gives each card its own accent without inventing content. */
const TONES = {
  "automotive-lock-components": {
    from: "from-brand/12 to-brand/0",
    ring: "group-hover:border-brand/30",
    icon: "from-brand to-[#2b6cb0]",
    glow: "group-hover:shadow-[0_24px_60px_-28px_rgba(23,75,131,0.55)]",
  },
  "auto-electrical-alternator-parts": {
    from: "from-accent/14 to-accent/0",
    ring: "group-hover:border-accent/35",
    icon: "from-accent to-accent-dark",
    glow: "group-hover:shadow-[0_24px_60px_-28px_rgba(245,130,53,0.5)]",
  },
  "auto-electrical-starter-parts": {
    from: "from-teal/14 to-teal/0",
    ring: "group-hover:border-teal/35",
    icon: "from-teal to-[#0b7d6c]",
    glow: "group-hover:shadow-[0_24px_60px_-28px_rgba(14,159,138,0.5)]",
  },
  "automotive-steering-components": {
    from: "from-violet/14 to-violet/0",
    ring: "group-hover:border-violet/35",
    icon: "from-violet to-[#3f31a8]",
    glow: "group-hover:shadow-[0_24px_60px_-28px_rgba(91,75,214,0.5)]",
  },
  "washing-machine-parts": {
    from: "from-brand/12 to-teal/0",
    ring: "group-hover:border-brand/25",
    icon: "from-brand to-teal",
    glow: "group-hover:shadow-[0_24px_60px_-28px_rgba(23,75,131,0.45)]",
  },
  "mcb-switchgear-parts": {
    from: "from-accent/12 to-violet/0",
    ring: "group-hover:border-accent/30",
    icon: "from-[#f58235] to-violet",
    glow: "group-hover:shadow-[0_24px_60px_-28px_rgba(91,75,214,0.42)]",
  },
  "speedometer-components": {
    from: "from-teal/12 to-brand/0",
    ring: "group-hover:border-teal/30",
    icon: "from-teal to-brand",
    glow: "group-hover:shadow-[0_24px_60px_-28px_rgba(14,159,138,0.45)]",
  },
  "oil-gauge-meter-components": {
    from: "from-violet/12 to-accent/0",
    ring: "group-hover:border-violet/30",
    icon: "from-violet to-accent",
    glow: "group-hover:shadow-[0_24px_60px_-28px_rgba(91,75,214,0.45)]",
  },
};

const DEFAULT_TONE = TONES["automotive-lock-components"];

export default function ProductCard({ product, delay = 0, index = 1, glass = false }) {
  const tone = TONES[product.slug] || DEFAULT_TONE;

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-panel border shadow-premium transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-hover ${tone.ring} ${tone.glow} ${
          glass
            ? "border-white/20 bg-navy/45 backdrop-blur-md hover:bg-navy/35 hover:border-white/35"
            : "border-ink-line/80 bg-white"
        }`}
      >
        {/* soft tone wash that fades in */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.from} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* hairline highlight — the “frosted glass” edge on translucent cards */}
        {glass && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-panel bg-gradient-to-br from-white/[0.12] via-white/[0.03] to-transparent ring-1 ring-inset ring-white/20"
          />
        )}

        {/* image */}
        <Link
          to={`/products/${product.slug}`}
          className="relative block aspect-[4/3] overflow-hidden bg-surface-light"
          aria-label={product.name}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            width="640"
            height="480"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.08]"
          />

          {/* dark gradient at the bottom of the image for depth */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/45 via-navy/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
          />

          {/* sheen sweep */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 ease-smooth group-hover:translate-x-full"
          />

          {/* floating icon badge */}
          <span
            className={`absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${tone.icon} text-white shadow-lg ring-1 ring-white/25 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
          >
            <Icon name={productIconName(product.slug)} className="h-5 w-5" strokeWidth={2} />
          </span>

          {/* count pill on the image */}
          <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-navy/55 px-2.5 py-1 text-[0.68rem] font-semibold text-white backdrop-blur-md">
            {String(index).padStart(2, "0")}
          </span>

          {/* revealing "view" affordance */}
          <span className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-lg bg-white/95 py-2.5 text-[0.8rem] font-semibold text-navy opacity-0 shadow-lg backdrop-blur transition-all duration-400 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
            View components
            <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
        </Link>

        {/* body */}
        <div className="relative flex flex-1 flex-col p-5 sm:p-6">
          {product.tag && (
            <span className="mb-2.5 inline-flex w-fit items-center gap-1.5 rounded-md border border-accent/20 bg-accent-pale px-2 py-0.5 text-[0.66rem] font-bold uppercase tracking-[0.07em] text-accent-dark">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {product.tag}
            </span>
          )}

          <h3 className={`mb-2 text-[1.05rem] leading-snug sm:text-[1.12rem] ${glass ? "text-white" : ""}`}>
            <Link
              to={`/products/${product.slug}`}
              className={`bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-400 group-hover:bg-[length:100%_2px] ${
                glass
                  ? "from-white to-white hover:text-white"
                  : "from-brand to-brand hover:text-brand"
              }`}
            >
              {product.name}
            </Link>
          </h3>

          <p
            className={`mb-5 line-clamp-3 text-[0.88rem] leading-[1.7] sm:text-[0.9rem] ${
              glass ? "text-white/70" : "text-ink-muted"
            }`}
          >
            {product.description}
          </p>

          <div
            className={`mt-auto flex items-center justify-between gap-3 border-t pt-4 ${
              glass ? "border-white/15" : "border-ink-line/70"
            }`}
          >
            <Link
              to={`/products/${product.slug}`}
              className={`inline-flex items-center gap-1.5 text-[0.86rem] font-semibold transition-all duration-300 group-hover:gap-2.5 group-hover:text-accent ${
                glass ? "text-white/90" : "text-brand"
              }`}
            >
              Read more
              <Icon
                name="arrowRight"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <span
              className={`flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] ${
                glass ? "text-white/60" : "text-ink-muted"
              }`}
            >
              <Icon
                name="layers"
                className={`h-3.5 w-3.5 ${glass ? "text-white/50" : "text-brand/50"}`}
              />
              {product.parts.length}
            </span>
          </div>
        </div>

        {/* bottom accent line */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-light to-brand transition-transform duration-500 ease-smooth group-hover:scale-x-100"
        />
      </article>
    </Reveal>
  );
}

export function ProductGrid({ products, cols = 4, glass = false }) {
  const grid =
    cols === 3
      ? "lg:grid-cols-3"
      : cols === 2
        ? "md:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid grid-cols-1 gap-5 sm:gap-6 ${grid}`}>
      {products.map((p, i) => (
        <ProductCard
          key={p.slug}
          product={p}
          delay={(i % 4) * 70}
          index={i + 1}
          glass={glass}
        />
      ))}
    </div>
  );
}
