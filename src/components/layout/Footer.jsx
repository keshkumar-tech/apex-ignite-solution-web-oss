import { Link } from "react-router-dom";
import { ABOUT_LINKS, CONTACT, PRODUCTS, SITE } from "../../data/site";
import Icon from "../ui/Icon";
import { Container } from "../ui/Primitives";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about-us" },
  { label: "Our Customers", to: "/our-customers" },
  { label: "Industries", to: "/industries" },
  { label: "Gallery", to: "/gallery" },
  { label: "Careers", to: "/careers" },
  { label: "Contact us", to: "/contact-us" },
  { label: "Sitemap", to: "/sitemap" },
];

export const FOOTER_ABOUT_COPY =
  "Apex Ignite Solutions Pvt. Ltd. is a leading manufacturer of precision plastic components, offering in-house mold design and tool-making facilities. With 2D & 3D design capabilities, advanced injection molding machines from 50 to 350 tons, ultrasonic welding, and expertise in a wide range of thermoplastic materials, we deliver quality solutions for automotive, electrical, and industrial applications.";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-[1rem] text-white/70">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />

      {/* --------------------------- LET'S TALK -------------------------- */}
      <div className="relative border-b border-white/[0.09]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-0 select-none text-[clamp(3.5rem,13vw,11rem)] font-bold leading-none tracking-tight text-white/[0.035]"
        >
          APEX IGNITE
        </span>
        <Container className="relative flex flex-col items-start justify-between gap-6 py-9 sm:flex-row sm:items-center lg:py-11">
          <div>
            <span className="mb-2 inline-flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-accent">
              Get started with a project?{" "}
              <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
            </span>
            <h2 className="text-[clamp(1.7rem,4vw,2.8rem)] font-semibold uppercase leading-none tracking-[-0.02em] text-white">
              Let&apos;s talk
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-[0.92rem] text-white/85 transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email1}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-[0.92rem] text-white/85 transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4" /> Email
            </a>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-5 py-2.5 text-[0.9rem] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
            >
              Start the journey <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>

      {/* ------------------------- contact strip ------------------------- */}
      <div className="border-b border-white/[0.09]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {CONTACT.units.map((u, i) => (
              <div
                key={u.id}
                className={`flex gap-3.5 py-6 xl:px-6 ${i === 0 ? "xl:pl-0" : "xl:border-l xl:border-white/[0.08]"}`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-accent/15 text-accent">
                  <Icon name="pin" className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <strong className="mb-1 block text-[0.8rem] font-bold uppercase tracking-[0.14em] text-white">
                    {u.id}
                  </strong>
                  <p className="text-[0.95rem] leading-[1.7] text-white/70">
                    {u.lines[0]}
                    <br />
                    {u.lines[1]}
                  </p>
                </div>
              </div>
            ))}
            <a
              href={`mailto:${CONTACT.email1}`}
              className="group flex gap-3.5 border-t border-white/[0.08] py-6 sm:border-t-0 xl:border-l xl:border-white/[0.08] xl:px-6"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-accent/15 text-accent">
                <Icon name="mail" className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0">
                <strong className="mb-1 block text-[0.8rem] font-bold uppercase tracking-[0.14em] text-white">
                  Mail us
                </strong>
                <span className="block truncate text-[0.95rem] leading-[1.7] text-white/70 transition-colors group-hover:text-accent">
                  {CONTACT.email1}
                </span>
                <span className="block truncate text-[0.95rem] leading-[1.7] text-white/70 transition-colors group-hover:text-accent">
                  {CONTACT.email2}
                </span>
              </div>
            </a>
            <div className="flex gap-3.5 border-t border-white/[0.08] py-6 sm:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0 xl:border-white/[0.08] xl:px-6 xl:pr-0">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-accent/15 text-accent">
                <Icon name="phone" className="h-[18px] w-[18px]" />
              </span>
              <div>
                <strong className="mb-1 block text-[0.8rem] font-bold uppercase tracking-[0.14em] text-white">
                  Call us directly
                </strong>
                <a
                  href={`tel:${CONTACT.phone1Href}`}
                  className="block text-[0.95rem] leading-[1.7] text-white/70 transition-colors hover:text-accent"
                >
                  {CONTACT.phone1}
                </a>
                <a
                  href={`tel:${CONTACT.phone2Href}`}
                  className="block text-[0.95rem] leading-[1.7] text-white/70 transition-colors hover:text-accent"
                >
                  {CONTACT.phone2}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* --------------------------- main grid --------------------------- */}
      <Container className="py-12 lg:py-16">
        <div className="grid gap-9 md:grid-cols-2 md:gap-10 xl:grid-cols-[1.35fr_0.8fr_0.95fr_1.4fr] xl:gap-12">
          <div>
            {/* white plate so the navy/blue transparent logo stays legible on the dark footer */}
            <Link
              to="/"
              aria-label="Apex Ignite Solutions — Home"
              className="mb-6 inline-flex max-w-full items-center justify-center rounded-xl bg-white px-4 py-3 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/25 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <img
                src={SITE.logo}
                alt={SITE.name}
                width="150"
                height="48"
                className="block h-auto w-[132px] object-contain sm:w-[168px]"
              />
            </Link>
            <p className="max-w-[46ch] text-[1rem] leading-[1.85] text-white/75 sm:text-[1.02rem]">
              {FOOTER_ABOUT_COPY}
            </p>
            <div className="mt-5 flex gap-2.5">
              {["facebook", "instagram", "linkedin", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={`${s} (profile link to be provided)`}
                  className="grid h-10 w-10 place-items-center rounded-[10px] border border-white/[0.14] text-white/70 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon name={s} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[0.95rem] text-white/70 transition-all hover:pl-1 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Know More About">
            {ABOUT_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[0.95rem] text-white/70 transition-all hover:pl-1 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-[0.95rem] font-bold uppercase tracking-[0.12em] text-white">
              <span aria-hidden="true" className="h-3.5 w-0.5 rounded-full bg-accent" />
              Products
            </h3>
            <ul className="grid gap-3.5">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="group block">
                    <span className="block text-[0.95rem] font-medium leading-snug text-white/85 transition-colors group-hover:text-accent">
                      {p.name}
                    </span>
                    <span className="mt-0.5 block text-[0.84rem] leading-snug text-white/45">
                      {p.short}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* --------------------------- facts row --------------------------- */}
      <div className="border-t border-white/[0.09]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <Fact icon="gst" title="GST Numbers">
              {CONTACT.gst.map((g) => (
                <li key={g.id} className="text-[0.92rem]">
                  <span className="text-white/90">{g.id}</span> {g.value}
                </li>
              ))}
            </Fact>
            <Fact icon="user" title="Managing Directors" bordered>
              {CONTACT.directors.map((d) => (
                <li key={d} className="text-[0.92rem]">
                  {d}
                </li>
              ))}
            </Fact>
            <Fact
              icon="clock"
              title="Working Hours"
              bordered
              className="sm:border-l"
            >
              <li>{CONTACT.hours[0]}</li>
              <li>{CONTACT.hours[1]}</li>
            </Fact>
          </div>
        </Container>
      </div>

      {/* -------------------------- bottom bar -------------------------- */}
      <div className="border-t border-white/[0.09]">
        <Container className="flex flex-col gap-3 py-6 text-[0.9rem] xl:flex-row xl:items-center xl:justify-between">
          <p>
            © 2026{" "}
            <strong className="font-semibold text-white">
              {SITE.legalName}
            </strong>
            . All Rights Reserved. Designed By |{" "}
            <a
              href="https://omsoftsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 align-middle transition-colors hover:text-accent"
            >
              Om Soft Solution
              <img
                src="/images/omosftlogo.webp"
                alt=""
                width="56"
                height="16"
                className="h-4 w-auto opacity-80"
                loading="lazy"
              />
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="transition-colors hover:text-accent"
            >
              Terms of Service
            </Link>
            <Link to="/sitemap" className="transition-colors hover:text-accent">
              Sitemap
            </Link>
            <a
              href={`tel:${CONTACT.phone2Href}`}
              className="transition-colors hover:text-accent"
            >
              {CONTACT.phone2}
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 text-[0.95rem] font-bold uppercase tracking-[0.12em] text-white">
        <span aria-hidden="true" className="h-3.5 w-0.5 rounded-full bg-accent" />
        {title}
      </h3>
      <ul className="grid gap-2.5">{children}</ul>
    </div>
  );
}

function Fact({ icon, title, children, bordered, className = "" }) {
  return (
    <div
      className={`flex gap-3.5 py-5 ${bordered ? "sm:border-l sm:border-white/[0.08] sm:px-6" : ""} ${className}`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-accent/15 text-accent">
        <Icon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <div>
        <strong className="mb-1.5 block text-[0.8rem] font-bold uppercase tracking-[0.14em] text-white">
          {title}
        </strong>
        <ul className="grid gap-1 text-[0.92rem] text-white/70">{children}</ul>
      </div>
    </div>
  );
}
