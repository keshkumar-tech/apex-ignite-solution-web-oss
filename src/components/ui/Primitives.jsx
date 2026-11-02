import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

/* ------------------------------ Container --------------------------- */
export function Container({ className = "", children }) {
  return (
    <div
      className={`mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------- Section ---------------------------- */
/**
 * Section tones are intentionally NOT flat white. Each tone carries texture,
 * gradient depth or colour so the page never reads as an empty document.
 */
const TONES = {
  white: "bg-white",
  light: "section-mesh",
  navy: "section-navy-mesh text-white",
  pale: "bg-gradient-to-b from-white via-brand-50/40 to-white",
  grid: "section-grid",
  gradient: "bg-gradient-to-br from-brand-50 via-white to-accent-pale/50",
};

export function Section({
  id,
  tone = "white",
  ornament = false,
  bgImage = "",
  bgOpacity = 0.07,
  bgPosition = "center",
  overlay = "light",
  washStrength = 1,
  className = "",
  containerClass = "",
  children,
}) {
  const isDark = overlay === "dark";
  // "dark" overlay = photographic bg + navy wash + white text on top.
  // "light" overlay = the same photo faded to white for dark text.
  return (
    <section
      id={id}
      /* No overflow clipping here: decorative layers are constrained with
         `contain: paint` on their own wrapper instead, so section content
         (and scrollIntoView targets) are never cut off or trapped. */
      className={`relative isolate scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24 ${isDark ? "bg-navy text-white" : TONES[tone] || ""} ${className}`}
    >
      {isDark && (
        /* Soft colour depth for dark sections that use no photo: a navy mesh
           plus a faint grid keeps the panel from reading as flat ink. */
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        >
          <span className="absolute inset-0 bg-navy" />
          <span className="absolute inset-0 bg-mesh-navy opacity-40" />
          <span className="absolute inset-0 bg-grid-slate bg-grid opacity-[0.18] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
        </div>
      )}
      {bgImage && (
        /* Photographic texture sitting between the section background and the
           content. NOTE: deliberately NOT `-z-10` — a negative z-index would
           drop it behind the section's own background colour and it would
           never paint. `z-0` keeps it above the bg, below the z-10 content. */
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        >
          <img
            src={bgImage}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ objectPosition: bgPosition }}
            className="h-full w-full scale-105 object-cover"
          />
          {/* tint layers: a flat navy wash guarantees white-text contrast on
             every part of the photo, then a soft gradient adds depth without
             ever letting a bright area wash the text out. */}
          {isDark ? (
            /* `washStrength` (0–1) softens the navy wash so more of the photo
               shows through; it never drops below a readable level. */
            <>
              <span
                className="absolute inset-0 bg-navy/72"
                style={{ opacity: washStrength }}
              />
              <span
                className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-navy/25"
                style={{ opacity: washStrength }}
              />
              <span className="absolute inset-0 bg-gradient-to-b from-navy/45 via-transparent to-navy/75" />
            </>
          ) : (
            <>
              <span
                className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/25"
                style={{ opacity: 1 - bgOpacity }}
              />
              <span className="absolute inset-0 bg-gradient-to-b from-white/55 via-transparent to-white/55" />
            </>
          )}
        </div>
      )}
      {ornament && (
        /* same z-0 rule as bgImage: never negative, or the section bg hides it */
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        >
          <span className="absolute inset-0 bg-grid-slate bg-grid opacity-25 [mask-image:radial-gradient(70%_55%_at_50%_40%,#000,transparent)]" />
          <span className="absolute -right-32 top-10 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(23,75,131,0.10),transparent_65%)] blur-2xl" />
          <span className="absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(245,130,53,0.10),transparent_65%)] blur-2xl" />
        </div>
      )}
      <Container className={`relative z-10 ${containerClass}`}>{children}</Container>
    </section>
  );
}

/* --------------------------- Section ornament ----------------------- */
/** Decorative blurred glow — adds colour depth without content clutter. */
export function Glow({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

/* ------------------------------- Eyebrow ---------------------------- */
export function Eyebrow({ children, light = false, className = "" }) {
  return (
    <span className={`eyebrow ${light ? "eyebrow-light" : ""} ${className}`}>
      {children}
    </span>
  );
}

/* ---------------------------- SectionHeading ------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} mb-10 sm:mb-12 ${className}`}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-section-title ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-5 block h-[3px] w-16 rounded-full bg-gradient-to-r from-accent to-accent/0 ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p
          className={`mt-4 text-[0.98rem] leading-[1.8] sm:text-[1.03rem] ${light ? "text-white/72" : "text-ink-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* -------------------------------- Button ---------------------------- */
const VARIANTS = {
  primary: "btn-primary",
  navy: "btn-navy",
  outline: "btn-outline",
  ghost: "btn-ghost-light",
};

export function Button({
  to,
  href,
  variant = "primary",
  size,
  icon,
  iconLeft,
  children,
  className = "",
  ...rest
}) {
  const cls = `btn ${VARIANTS[variant] || "btn-primary"} ${size === "sm" ? "btn-sm" : ""} ${className}`;
  const content = (
    <>
      {iconLeft && <Icon name={iconLeft} />}
      {children}
      {icon && <Icon name={icon} />}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}

/* ------------------------------ PageBanner -------------------------- */
export function PageBanner({
  eyebrow,
  title,
  description,
  crumbs = [],
  children,
}) {
  return (
    <section className="banner-gradient relative overflow-hidden text-white">
      {/* concentric rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -right-36 h-[620px] w-[620px] rounded-full border border-white/10 shadow-[0_0_0_70px_rgba(255,255,255,0.025),0_0_0_140px_rgba(255,255,255,0.02)]"
      />
      {/* colour blooms */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(245,130,53,0.28),transparent_65%)] blur-2xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 -top-20 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(14,159,138,0.22),transparent_65%)] blur-2xl"
      />
      {/* fine grid */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(80%_80%_at_50%_0%,#000,transparent_75%)]"
      />
      <Container className="relative py-10 sm:py-14 lg:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.78rem] text-white/55 sm:text-[0.8rem]">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-2 before:content-['/'] before:text-white/30"
              >
                {c.to ? (
                  <Link
                    to={c.to}
                    className="transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                ) : (
                  c.label
                )}
              </li>
            ))}
            <li className="flex items-center gap-2 font-semibold text-accent before:content-['/'] before:font-normal before:text-white/30">
              {title}
            </li>
          </ol>
        </nav>
        {eyebrow && (
          <Eyebrow light className="mt-5">
            {eyebrow}
          </Eyebrow>
        )}
        <h1 className="text-page-title text-white">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[0.97rem] leading-[1.8] text-white/72 sm:text-[1.03rem]">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}

/* -------------------------------- Reveal ---------------------------- */
/**
 * Scroll reveal as
 * PROGRESSIVE ENHANCEMENT — never a requirement for content to be seen.
 *
 * Content is visible by default. The fade only activates after the component
 * has mounted AND IntersectionObserver + reduced-motion checks have passed, and
 * a safety timeout always reveals it. This guarantees that no content can be
 * stuck at opacity:0 (the previous version could hide whole product grids).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false); // animation turned on
  const [shown, setShown] = useState(false); // element has entered view

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    // arm only if the element is still below the fold, so above-the-fold
    // content never flashes invisible
    const rect = node.getBoundingClientRect();
    const inView = rect.top < (window.innerHeight || 0) * 0.95;
    if (inView) {
      setShown(true);
      return;
    }

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.05 },
    );
    io.observe(node);

    // absolute safety net: reveal no matter what after 1.2s
    const guard = window.setTimeout(() => setShown(true), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(guard);
    };
  }, []);

  const animate = armed && !shown;

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-smooth ${
        animate ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------- Notice ---------------------------- */
export function Notice({ title, children }) {
  return (
    <div className="flex gap-4 rounded-card border border-[#f6dcbf] bg-[#fffaf4] p-5 sm:p-6">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[9px] bg-accent/15 text-accent-dark">
        <Icon name="alert" className="h-[18px] w-[18px]" />
      </span>
      <div>
        <h4 className="mb-1 text-[0.98rem] text-navy">{title}</h4>
        <p className="text-[0.9rem] leading-[1.7] text-ink-muted">{children}</p>
      </div>
    </div>
  );
}

/* ---------------------------- Counter ------------------------------- */
/**
 * Counts up to a numeric value when scrolled into view.
 * Falls back to the final value immediately when motion is reduced or
 * IntersectionObserver is unavailable — the number is never hidden.
 */
export function Counter({
  to,
  duration = 1600,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(to);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* --------------------------- Stat tile ------------------------------ */
export function StatTile({ value, label, icon, tone = "brand", delay = 0 }) {
  const tones = {
    brand: "from-brand/10 text-brand",
    accent: "from-accent/12 text-accent-dark",
    teal: "from-teal/12 text-teal",
    violet: "from-violet/12 text-violet",
  };
  return (
    <Reveal delay={delay}>
      <div className="group relative overflow-hidden rounded-panel border border-ink-line/80 bg-white p-5 shadow-premium transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:shadow-hover sm:p-6">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${tones[tone] || tones.brand} to-transparent opacity-70 blur-2xl transition-transform duration-500 group-hover:scale-150`}
        />
        {icon && (
          <span
            className={`mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${tones[tone] || tones.brand} to-transparent ring-1 ring-current/10`}
          >
            <Icon name={icon} className="h-[18px] w-[18px]" />
          </span>
        )}
        <b className="block text-[1.6rem] leading-tight tracking-[-0.02em] text-navy sm:text-[2rem]">
          {value}
        </b>
        <span className="mt-2 block text-[0.8rem] leading-snug text-ink-muted">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-brand transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>
    </Reveal>
  );
}

/* ------------------------------ CheckList --------------------------- */
export function CheckList({ items, light = false, className = "" }) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className={`group/item relative pl-[38px] text-[0.95rem] leading-[1.65] transition-colors duration-300 ${
            light
              ? "text-white/80 hover:text-white"
              : "text-ink hover:text-navy"
          }`}
        >
          <span
            className={`absolute left-0 top-[2px] grid h-6 w-6 place-items-center rounded-lg transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6 ${
              light
                ? "bg-gradient-to-br from-accent/30 to-accent/5 text-accent ring-1 ring-accent/25"
                : "bg-gradient-to-br from-accent/20 to-accent/0 text-accent-dark ring-1 ring-accent/20"
            }`}
          >
            <Icon name="check" className="h-3 w-3" strokeWidth={3.4} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------- CtaBand ---------------------------- */
export function CtaBand({
  title = "Let’s build your next component together",
  text,
  children,
}) {
  return (
    <section className="section-navy-mesh relative overflow-hidden py-12 text-white sm:py-16">
      {/* colour blooms */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(245,130,53,0.4),transparent_65%)] blur-2xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(14,159,138,0.3),transparent_65%)] blur-2xl"
      />
      {/* fine grid overlay */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]"
      />
      {/* rotating dashed ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-dashed border-white/15 motion-safe:animate-spinSlow lg:block"
      />

      <Container className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-accent-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
            Let&apos;s work together
          </span>
          <h2 className="text-[clamp(1.45rem,2.7vw,2.3rem)] leading-tight text-white">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-white/70 sm:text-base">
            {text ||
              "Share your drawings, specifications and volumes — our engineering team will respond with a manufacturing plan."}
          </p>
          {children}
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button to="/contact-us" icon="arrowRight">
            Request a Quote
          </Button>
          <Button href="tel:+919811142144" variant="ghost" iconLeft="phone">
            +91-9811142144
          </Button>
        </div>
      </Container>
    </section>
  );
}
