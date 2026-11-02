import { useRef, useState } from "react";
import { PROFILE_TABS } from "../../data/site";
import Icon from "../ui/Icon";
import { CheckList } from "../ui/Primitives";

/**
 * Vertical tabbed company profile (Achievements / Mission / Vision /
 * Capabilities / Quality). Accessible: roving tabindex + arrow-key support.
 */
export default function ProfileTabs({ tabs = PROFILE_TABS }) {
  const [active, setActive] = useState(0);
  const btnRefs = useRef([]);

  function onKeyDown(e, index) {
    const keys = [
      "ArrowDown",
      "ArrowRight",
      "ArrowUp",
      "ArrowLeft",
      "Home",
      "End",
    ];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    let next = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight")
      next = (index + 1) % tabs.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = (index - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    setActive(next);
    btnRefs.current[next]?.focus();
  }

  const tab = tabs[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-9">
      <div
        role="tablist"
        aria-label="Company profile"
        className="grid gap-1.5 sm:grid-cols-2 lg:sticky lg:top-24 lg:grid-cols-1 lg:self-start"
      >
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (btnRefs.current[i] = el)}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-xl border px-4 py-3.5 text-left text-[0.95rem] font-medium backdrop-blur-sm transition-all duration-300 ease-smooth ${
              i === active
                ? "border-accent/40 bg-white/[0.14] text-white shadow-[0_14px_30px_-18px_rgba(0,0,0,0.7)]"
                : "border-white/15 bg-white/[0.06] text-white/75 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.11] hover:text-white"
            }`}
          >
            {/* active left bar */}
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-accent-light transition-transform duration-300 ${
                i === active ? "scale-y-100" : "scale-y-0"
              }`}
            />
            <span className="flex items-center gap-2.5 pl-1.5">
              <span
                className={`text-[0.66rem] font-bold tracking-[0.1em] ${i === active ? "text-accent" : "text-white/45"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {t.label}
            </span>
            <Icon
              name="arrowRight"
              className={`h-[15px] w-[15px] shrink-0 transition-all duration-300 ${
                i === active
                  ? "text-accent opacity-100"
                  : "-translate-x-1 text-white/50 opacity-0"
              }`}
            />
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tab.id}`}
        aria-labelledby={`tab-${tab.id}`}
        key={tab.id}
        className="relative animate-fadeUp overflow-hidden rounded-panel border border-ink-line/70 bg-white p-6 shadow-premium sm:p-8 lg:p-10"
      >
        {/* subtle corner wash tied to the tab */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-brand/10 to-accent/10 blur-3xl"
        />
        <div className="relative grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/[0.07] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-brand">
              <Icon name={tab.icon} className="h-3 w-3" />
              {tab.label}
            </span>
            <h3 className="mb-3 text-[clamp(1.25rem,2vw,1.7rem)]">
              {tab.heading}
            </h3>
            <p className="mb-5 text-[0.95rem] leading-[1.8] text-ink-muted">
              {tab.description}
            </p>
            <CheckList items={tab.points} />
          </div>

          {/* stat card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-[#16263f] to-brand px-5 py-5 text-white shadow-lift lg:w-[190px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-accent/25 blur-2xl transition-transform duration-500 group-hover:scale-150"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
            <Icon name={tab.icon} className="mb-3 h-5 w-5 text-accent" />
            <b className="block text-[2rem] leading-none tracking-[-0.03em] lg:text-[2.2rem]">
              {tab.stat}
            </b>
            <span className="mt-2 block text-[0.75rem] leading-snug text-white/65">
              {tab.statLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
