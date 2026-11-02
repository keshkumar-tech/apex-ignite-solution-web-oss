import { useState } from "react";
import { FAQS } from "../../data/site";
import Icon from "../ui/Icon";

export default function Faq({ items = FAQS, defaultOpen = 1 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mx-auto grid max-w-4xl gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-400 ease-smooth ${
              isOpen
                ? "border-brand/25 shadow-premium"
                : "border-ink-line/80 shadow-soft hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-premium"
            }`}
          >
            {/* left accent bar */}
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent to-brand transition-transform duration-400 ${
                isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
              }`}
            />
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-3 p-4 text-left text-[0.95rem] font-semibold leading-snug text-navy sm:gap-4 sm:p-5 sm:text-base"
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[0.72rem] font-bold transition-colors duration-300 ${
                    isOpen
                      ? "bg-brand text-white"
                      : "bg-surface-light text-accent group-hover:bg-brand/10 group-hover:text-brand"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 transition-colors duration-300 ${isOpen ? "text-brand" : "group-hover:text-brand"}`}
                >
                  {item.q}
                </span>
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full transition-all duration-400 ${
                    isOpen
                      ? "rotate-[135deg] bg-accent text-white shadow-glow"
                      : "bg-surface-light text-navy group-hover:bg-brand/10 group-hover:text-brand"
                  }`}
                >
                  <Icon name="plus" className="h-3 w-3" strokeWidth={3} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!isOpen}
              className="animate-fadeUp border-t border-dashed border-ink-line/70 px-4 pb-5 pl-[52px] pt-4 text-[0.92rem] leading-[1.75] text-ink-muted sm:px-5 sm:pb-6 sm:pl-[68px] sm:text-[0.95rem]"
            >
              {item.a.map((p) => (
                <p key={p} className="mt-2 first:mt-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
