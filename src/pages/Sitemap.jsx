import { Link } from "react-router-dom";
import useSeo from "../lib/useSeo";
import { ABOUT_LINKS, PRODUCTS } from "../data/site";
import Icon from "../components/ui/Icon";
import {
  CtaBand,
  PageBanner,
  Reveal,
  Section,
} from "../components/ui/Primitives";

const GROUPS = [
  {
    title: "Main pages",
    links: [
      { to: "/", label: "Home" },
      { to: "/our-customers", label: "Our Customers" },
      { to: "/industries", label: "Industries" },
      { to: "/careers", label: "Careers" },
      { to: "/contact-us", label: "Contact Us" },
      { to: "/gallery", label: "Gallery" },
    ],
  },
  {
    title: "Legal & navigation",
    links: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms-of-service", label: "Terms of Service" },
      { to: "/sitemap", label: "Sitemap" },
    ],
  },
];

export default function Sitemap() {
  useSeo({
    title: "Sitemap",
    description:
      "A complete index of every page on the Apex Ignite Solutions website — company pages, product categories, industries, customers, careers, contact and legal pages.",
    path: "/sitemap",
  });

  const total =
    1 +
    ABOUT_LINKS.length +
    1 +
    PRODUCTS.length +
    GROUPS.reduce((n, g) => n + g.links.length, 0) -
    2;

  return (
    <>
      <PageBanner
        eyebrow="Navigation"
        title="Sitemap"
        description={`Every page on this website — ${total} pages across the company profile, products, industries, customers, careers and legal information.`}
        crumbs={[{ label: "Sitemap" }]}
      />

      <Section tone="white" ornament>
        <div className="mb-10">
          <Link
            to="/"
            className="group flex items-center gap-4 rounded-card border border-ink-line/80 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-navy text-white">
              <Icon name="arrowRight" className="h-5 w-5" />
            </span>
            <span>
              <strong className="block text-[1.05rem] text-navy">Home</strong>
              <span className="text-[0.85rem] text-ink-muted">
                Company introduction, capabilities, products, milestones, FAQ
                and enquiry
              </span>
            </span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <Reveal>
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                <Icon name="file" className="h-4 w-4 text-accent" /> About Us
              </h2>
              <ul className="grid gap-1">
                {ABOUT_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="group flex items-center justify-between gap-2 border-b border-ink-line py-2.5 text-[0.9rem] text-ink transition-colors hover:text-brand"
                    >
                      <span>
                        {l.label}
                        <span className="block text-[0.76rem] text-ink-muted">
                          {l.caption}
                        </span>
                      </span>
                      <Icon
                        name="chevronRight"
                        className="h-3.5 w-3.5 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                <Icon name="layers" className="h-4 w-4 text-accent" /> Products
              </h2>
              <ul className="grid gap-1">
                <li>
                  <Link
                    to="/products"
                    className="flex items-center justify-between border-b border-ink-line py-2.5 text-[0.9rem] font-medium text-brand"
                  >
                    All products{" "}
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </Link>
                </li>
                {PRODUCTS.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/products/${p.slug}`}
                      className="flex items-center justify-between gap-2 border-b border-ink-line py-2.5 text-[0.9rem] text-ink transition-colors hover:text-brand"
                    >
                      <span>
                        {p.name}
                        <span className="block text-[0.76rem] text-ink-muted">
                          {p.parts.length}{" "}
                          {p.parts.length === 1 ? "component" : "components"}
                        </span>
                      </span>
                      <Icon
                        name="chevronRight"
                        className="h-3.5 w-3.5 shrink-0 text-ink-muted"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={120 + gi * 60}>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                  <Icon
                    name={gi === 0 ? "target" : "shield"}
                    className="h-4 w-4 text-accent"
                  />{" "}
                  {g.title}
                </h2>
                <ul className="grid gap-1">
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="flex items-center justify-between border-b border-ink-line py-2.5 text-[0.9rem] text-ink transition-colors hover:text-brand"
                      >
                        {l.label}
                        <Icon
                          name="chevronRight"
                          className="h-3.5 w-3.5 shrink-0 text-ink-muted"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-card border border-ink-line bg-surface-light p-5">
          <p className="text-[0.85rem] leading-relaxed text-ink-muted">
            A machine-readable version of this sitemap is available at{" "}
            <a
              href="/sitemap.xml"
              className="font-medium text-brand underline underline-offset-2"
            >
              /sitemap.xml
            </a>{" "}
            for search engines.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
