import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ABOUT_LINKS, CONTACT, PRODUCTS, SITE } from "../../data/site";
import Icon, { productIconName } from "../ui/Icon";
import { Button, Container } from "../ui/Primitives";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us", menu: "about" },
  { label: "Products", to: "/products", menu: "products" },
  { label: "Our Customers", to: "/our-customers" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact-us" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  /* close everything on navigation */
  useEffect(() => {
    setDrawer(false);
    setOpenMenu(null);
    setOpenGroup(null);
  }, [location.pathname]);

  /* lock scroll while the drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDrawer(false);
        setOpenMenu(null);
      }
    };
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target))
        setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  /* menu items are opened on hover (desktop) and on click/keyboard too */
  function menuProps(key) {
    return {
      onMouseEnter: () => setOpenMenu(key),
      onMouseLeave: () => setOpenMenu(null),
    };
  }

  const isProductPage = location.pathname.startsWith("/products/");

  return (
    <>
      {/* ---------------------------- top bar ---------------------------- */}
      <div className="border-b border-white/[0.07] bg-navy text-[0.78rem] text-white/70">
        <Container className="flex min-h-[42px] flex-wrap items-center justify-between gap-3 py-1">
          <div className="hidden items-center gap-5 sm:flex">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-white">
              <Icon name="shield" className="h-3.5 w-3.5 text-accent" />
              {SITE.certificationLine} Certified
            </span>
            <span className="hidden h-3.5 w-px bg-white/20 md:block" />
            <span className="hidden md:inline">{SITE.tagline}</span>
          </div>
          <div className="flex w-full items-center justify-center gap-4 sm:w-auto sm:justify-end sm:gap-5">
            <a
              href={`mailto:${CONTACT.emailSupport}`}
              className="hidden items-center gap-2 transition-colors hover:text-white md:inline-flex"
            >
              <Icon name="mail" className="h-3.5 w-3.5 text-accent" />
              {CONTACT.emailSupport}
            </a>
            <a
              href={`tel:${CONTACT.phoneGeneralHref}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Icon name="phone" className="h-3.5 w-3.5 text-accent" />
              {CONTACT.phoneGeneral}
            </a>
          </div>
        </Container>
      </div>

      {/* ---------------------------- header ---------------------------- */}
      <header
        className={`sticky top-0 z-[200] border-b border-ink-line bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          stuck ? "shadow-[0_10px_30px_-22px_rgba(16,29,50,0.5)]" : ""
        }`}
      >
        <Container className="flex min-h-[66px] items-center justify-between gap-3 lg:min-h-[82px] lg:gap-6">
          <Link to="/" className="shrink-0" aria-label={`${SITE.name} — home`}>
            <img
              src={SITE.logo}
              alt={`${SITE.name} logo`}
              width="150"
              height="46"
              fetchPriority="high"
              decoding="async"
              className="h-[34px] w-auto sm:h-[40px] lg:h-[46px]"
            />
          </Link>

          {/* desktop nav */}
          <nav ref={navRef} className="hidden lg:block" aria-label="Main">
            {/* one line only — never wrap a label onto two rows */}
            <ul className="flex flex-nowrap items-center gap-1">
              {NAV.map((item) => {
                const active =
                  item.to === "/"
                    ? location.pathname === "/"
                    : location.pathname === item.to ||
                      (item.menu === "products" && isProductPage) ||
                      (item.menu === "about" &&
                        ABOUT_LINKS.some((a) => a.to === location.pathname));

                if (!item.menu) {
                  return (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        aria-current={active ? "page" : undefined}
                        className={`inline-flex whitespace-nowrap rounded-lg px-2.5 py-3 text-[0.9rem] font-medium transition-colors xl:px-3 xl:text-[0.92rem] ${
                          active
                            ? "bg-brand/[0.07] text-brand"
                            : "text-navy hover:bg-brand/[0.06] hover:text-brand"
                        }`}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                }

                const open = openMenu === item.menu;
                return (
                  <li
                    key={item.menu}
                    className="relative"
                    {...menuProps(item.menu)}
                  >
                    <NavLink
                      to={item.to}
                      aria-haspopup="true"
                      aria-expanded={open}
                      onFocus={() => setOpenMenu(item.menu)}
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-3 text-[0.9rem] font-medium transition-colors xl:px-3 xl:text-[0.92rem] ${
                        active || open
                          ? "bg-brand/[0.07] text-brand"
                          : "text-navy hover:text-brand"
                      }`}
                    >
                      {item.label}
                      <Icon
                        name="chevronDown"
                        className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        strokeWidth={2.4}
                      />
                    </NavLink>
                    <div
                      role="menu"
                      aria-label={item.label}
                      className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                        open
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="rounded-2xl border border-ink-line bg-white p-3 shadow-lift">
                        <span className="block px-3.5 pb-2 pt-1 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                          {item.menu === "about"
                            ? "Know more about"
                            : "Product categories"}
                        </span>
                        <ul className="grid gap-0.5 sm:grid-cols-2">
                          {(item.menu === "about" ? ABOUT_LINKS : PRODUCTS).map(
                            (entry) => (
                              <li key={entry.to || entry.slug}>
                                <Link
                                  to={entry.to || `/products/${entry.slug}`}
                                  role="menuitem"
                                  className="group flex items-center gap-3 rounded-[10px] px-3.5 py-2.5 transition-colors hover:bg-surface-light"
                                >
                                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-brand/[0.07] text-brand transition-colors group-hover:bg-accent group-hover:text-white">
                                    <Icon
                                      name={
                                        item.menu === "about"
                                          ? "file"
                                          : productIconName(entry.slug)
                                      }
                                      className="h-[17px] w-[17px]"
                                    />
                                  </span>
                                  <span className="min-w-0 leading-tight">
                                    <strong className="block text-[0.9rem] font-semibold text-navy">
                                      {entry.label || entry.name}
                                    </strong>
                                    <span className="block truncate text-[0.76rem] text-ink-muted">
                                      {entry.caption || entry.short}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                        {item.menu === "about" && (
                          <div className="mt-2 grid grid-cols-3 gap-2 rounded-[10px] bg-surface-light p-3">
                            {[
                              { i: "users", t: "Experienced Team" },
                              { i: "award", t: "Quality Driven" },
                              { i: "target", t: "Customer Focused" },
                            ].map((b) => (
                              <div
                                key={b.t}
                                className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2"
                              >
                                <Icon
                                  name={b.i}
                                  className="h-4 w-4 shrink-0 text-brand"
                                />
                                <span className="text-[0.74rem] font-medium leading-tight text-navy">
                                  {b.t}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        {item.menu === "products" && (
                          <div className="mt-2 flex items-center justify-between gap-3 rounded-[10px] bg-navy px-4 py-3">
                            <span className="text-[0.84rem] text-white/70">
                              Need a custom component or a new mould?
                            </span>
                            <Link
                              to="/contact-us"
                              className="btn btn-primary btn-sm"
                            >
                              Send Enquiry
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <a
              href={`tel:${CONTACT.phone1Href}`}
              className="hidden whitespace-nowrap border-r border-ink-line pr-4 leading-tight xl:block"
            >
              <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Call us
              </span>
              <span className="block text-[0.95rem] font-semibold text-navy">
                {CONTACT.phone1}
              </span>
            </a>
            <Button
              to="/contact-us"
              className="hidden whitespace-nowrap md:inline-flex"
              icon="arrowRight"
            >
              Get a Quote
            </Button>
            <button
              type="button"
              onClick={() => setDrawer(true)}
              aria-label="Open menu"
              aria-expanded={drawer}
              className="grid h-11 w-11 place-items-center rounded-[10px] border border-ink-line bg-white text-navy lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </Container>
      </header>

      {/* ----------------- */}
      <div
        className={`fixed inset-0 z-[290] bg-[#09111e]/55 transition-opacity duration-300 lg:hidden ${
          drawer ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawer(false)}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed bottom-0 right-0 top-0 z-[300] flex w-[min(420px,92vw)] flex-col bg-white shadow-lift transition-transform duration-300 ease-smooth lg:hidden ${
          drawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-line px-5 py-4">
          <img
            src={SITE.logo}
            alt={SITE.name}
            width="120"
            height="40"
            className="h-9 w-auto"
          />
          <button
            type="button"
            onClick={() => setDrawer(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-ink-line text-navy"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-8 pt-2">
          <div className="my-4 grid gap-2.5">
            <Button to="/contact-us" icon="arrowRight">
              Get a Quote
            </Button>
            <Button
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener"
              variant="outline"
              iconLeft="whatsapp"
            >
              {CONTACT.phone1}
            </Button>
          </div>

          <nav aria-label="Mobile">
            {NAV.map((item) => {
              if (!item.menu) {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center justify-between border-b border-ink-line py-3.5 text-[1.02rem] font-medium text-navy"
                  >
                    {item.label}
                  </Link>
                );
              }
              const children = item.menu === "about" ? ABOUT_LINKS : PRODUCTS;
              const isOpen = openGroup === item.menu;
              return (
                <div key={item.menu}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenGroup(isOpen ? null : item.menu)}
                    className="flex w-full items-center justify-between border-b border-ink-line py-3.5 text-left text-[1.02rem] font-medium text-navy"
                  >
                    {item.label}
                    <Icon
                      name="chevronDown"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : "text-ink-muted"}`}
                      strokeWidth={2.4}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-smooth ${isOpen ? "max-h-[800px]" : "max-h-0"}`}
                  >
                    <div className="grid pb-2 pt-1">
                      <Link
                        to={item.to}
                        className="border-b border-dashed border-ink-line py-2.5 pl-4 text-[0.88rem] font-medium text-brand"
                      >
                        View all {item.menu === "about" ? "about" : "products"}
                      </Link>
                      {children.map((c) => (
                        <Link
                          key={c.to || c.slug}
                          to={c.to || `/products/${c.slug}`}
                          className="border-b border-dashed border-ink-line py-2.5 pl-4 text-[0.9rem] text-ink-muted last:border-b-0"
                        >
                          {c.label || c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="mt-6 grid gap-3.5 rounded-card bg-surface-light p-5">
            <div>
              <strong className="block text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
                Corporate &amp; plant office
              </strong>
              {CONTACT.units.map((u) => (
                <p key={u.id} className="mt-1 text-[0.9rem] text-ink">
                  <b className="font-semibold text-brand">{u.id}</b> —{" "}
                  {u.lines.join(" ")}
                </p>
              ))}
            </div>
            <div>
              <strong className="block text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
                Mail us
              </strong>
              <a
                href={`mailto:${CONTACT.email1}`}
                className="block text-[0.9rem] text-ink"
              >
                {CONTACT.email1}
              </a>
              <a
                href={`mailto:${CONTACT.email2}`}
                className="block text-[0.9rem] text-ink"
              >
                {CONTACT.email2}
              </a>
            </div>
            <div>
              <strong className="block text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
                Call us directly
              </strong>
              <a
                href={`tel:${CONTACT.phone1Href}`}
                className="block text-[0.9rem] text-ink"
              >
                {CONTACT.phone1}
              </a>
              <a
                href={`tel:${CONTACT.phone2Href}`}
                className="block text-[0.9rem] text-ink"
              >
                {CONTACT.phone2}
              </a>
            </div>
            <div>
              <strong className="block text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
                Working hours
              </strong>
              <p className="text-[0.9rem] text-ink">
                {CONTACT.hours.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
