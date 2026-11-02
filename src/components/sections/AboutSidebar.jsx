import { Link, useLocation } from "react-router-dom";
import { ABOUT_LINKS, CONTACT } from "../../data/site";

const FACTS = [
  { t: "Manufacturing since", d: "1993" },
  { t: "Injection moulding", d: "61 machines, 60–600 tons" },
  { t: "Power presses", d: "15 machines" },
  { t: "Quality systems", d: "IATF 16949 · ISO 14001 · ISO 45001" },
  { t: "Tool room", d: "VMC, EDM, Wire Cut, CNC" },
];
import Icon from "../ui/Icon";
import { Button } from "../ui/Primitives";

/** Shared right rail for every About page. */
export default function AboutSidebar({ title = "Know more about" }) {
  const { pathname } = useLocation();
  return (
    <aside className="grid content-start gap-5">
      <nav
        aria-label="About pages"
        className="rounded-card border border-ink-line bg-white p-3"
      >
        <h2 className="px-3 pb-2 pt-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-muted">
          {title}
        </h2>
        <ul className="grid gap-0.5">
          {ABOUT_LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-[0.89rem] transition-colors ${
                    active
                      ? "bg-navy font-medium text-white"
                      : "text-ink hover:bg-surface-light hover:text-brand"
                  }`}
                >
                  {l.label}
                  <Icon
                    name="arrowRight"
                    className={`h-3.5 w-3.5 ${active ? "text-accent" : "text-ink-muted/50"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rounded-card bg-navy p-6 text-white/70">
        <h2 className="mb-2 text-[1rem] text-white">
          Need a manufacturing partner?
        </h2>
        <p className="mb-4 text-[0.86rem] leading-relaxed">
          Share your drawings and volumes — our engineering desk will respond
          with a manufacturing plan.
        </p>
        <Button to="/contact-us" size="sm" icon="arrowRight" className="w-full">
          Request a quote
        </Button>
        <a
          href={`tel:${CONTACT.phone1Href}`}
          className="mt-3 flex items-center gap-2 text-[0.86rem] text-white transition-colors hover:text-accent"
        >
          <Icon name="phone" className="h-4 w-4 text-accent" />
          {CONTACT.phone1}
        </a>
      </div>

      <div className="rounded-card border border-ink-line bg-white p-5">
        <h2 className="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-ink-muted">
          Quick facts
        </h2>
        <dl className="grid gap-2.5">
          {FACTS.map((f) => (
            <div
              key={f.t}
              className="border-b border-ink-line pb-2.5 last:border-b-0 last:pb-0"
            >
              <dt className="text-[0.72rem] uppercase tracking-[0.08em] text-ink-muted">
                {f.t}
              </dt>
              <dd className="text-[0.86rem] font-medium leading-snug text-navy">
                {f.d}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-card border border-dashed border-ink-line bg-white p-5">
        <h2 className="mb-3 text-[0.95rem] text-navy">
          Two manufacturing units
        </h2>
        <ul className="grid gap-2.5">
          {CONTACT.units.map((u) => (
            <li key={u.id} className="flex gap-2.5">
              <Icon
                name="pin"
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
              />
              <span className="text-[0.82rem] leading-snug text-ink-muted">
                <strong className="mb-0.5 block text-[0.78rem] text-navy">
                  {u.id}
                </strong>
                {u.lines.join(" ")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
