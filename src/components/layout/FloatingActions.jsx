import { useEffect, useState } from "react";
import { CONTACT } from "../../data/site";
import Icon from "../ui/Icon";

/* Each action carries its own brand colour + a label that slides out on
   hover/focus. Colours are deliberately distinct from the WhatsApp green so
   the cluster reads as three separate channels, not one repeated button. */
const ACTIONS = [
  {
    key: "call",
    href: `tel:${CONTACT.phone1Href}`,
    label: "Call us",
    icon: "phone",
    ring: "rgba(255,255,255,0.28)",
    base: "bg-[#174b83]",
    glow: "0 16px 34px -16px rgba(23,75,131,0.95)",
  },
  {
    key: "email",
    href: `mailto:${CONTACT.email1}`,
    label: "Email us",
    icon: "mail",
    ring: "rgba(255,255,255,0.28)",
    base: "bg-[#f58235]",
    glow: "0 16px 34px -16px rgba(245,130,53,0.95)",
  },
  {
    key: "whatsapp",
    href: CONTACT.whatsapp,
    label: "WhatsApp",
    icon: "whatsapp",
    ring: "rgba(255,255,255,0.25)",
    base: "bg-[#22a55b]",
    glow: "0 16px 34px -16px rgba(34,165,91,0.95)",
    external: true,
  },
];

export default function FloatingActions() {
  /* The contact dock is ALWAYS on screen (fixed, left edge). The back-to-top
     button is its own fixed element on the right and only appears once the
     user has scrolled. */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ---------------------- contact dock (left, always) ----------------
          Desktop: a vertical stack hugging the left edge.
          Mobile: a single horizontal row pinned to the bottom, so the three
          buttons only ever cover a ~56px band instead of a ~150px column
          sitting over the middle of the paragraph text. */}
      <div className="pointer-events-none fixed bottom-3 left-3 z-[150] flex flex-row items-end gap-2.5 sm:bottom-5 sm:left-5 sm:top-1/2 sm:flex-col sm:items-start sm:justify-center sm:-translate-y-1/2">
        {ACTIONS.map((a) => (
          <a
            key={a.key}
            href={a.href}
            {...(a.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={`${a.label} â€” ${CONTACT.phone1}`}
            className={`fa-pill group pointer-events-auto relative grid h-10 w-10 grid-cols-[2.5rem_0fr] items-center overflow-hidden rounded-full text-white ring-1 transition-[grid-template-columns,transform,box-shadow] duration-[420ms] ease-smooth hover:w-auto hover:grid-cols-[2.5rem_1fr] hover:translate-x-1 sm:h-11 sm:w-11 sm:grid-cols-[2.75rem_0fr] sm:hover:grid-cols-[2.75rem_1fr] ${a.base}`}
          >
            {/* halo that pulses on hover */}
            <span
              aria-hidden="true"
              className="fa-halo pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: a.glow }}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset"
              style={{ borderColor: a.ring }}
            />
            {/* icon disc, nudges + rotates slightly on hover */}
            <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full transition-transform duration-300 ease-smooth group-hover:rotate-[-8deg] group-hover:scale-95 sm:h-11 sm:w-11">
              <Icon
                name={a.icon}
                className="h-[18px] w-[18px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:h-5 sm:w-5"
              />
            </span>
            {/* label column opens from 0fr â†’ 1fr on hover/focus */}
            <span className="relative min-w-0 overflow-hidden whitespace-nowrap text-[0.78rem] font-semibold tracking-[0.02em] opacity-0 transition-opacity duration-300 group-hover:pl-1 group-hover:pr-4 group-hover:opacity-100 group-focus-visible:pl-1 group-focus-visible:pr-4 group-focus-visible:opacity-100">
              {a.label}
            </span>
          </a>
        ))}
      </div>

      {/* ------------------- back to top (right, on scroll) ---------------- */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        aria-hidden={!scrolled}
        tabIndex={scrolled ? 0 : -1}
        className={`fixed bottom-3.5 right-3.5 z-[150] grid h-10 w-10 place-items-center rounded-full bg-navy text-white shadow-lift ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-accent sm:bottom-5 sm:right-5 sm:h-11 sm:w-11 ${
          scrolled
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <Icon name="arrowUp" className="h-[18px] w-[18px]" />
      </button>
    </>
  );
}
