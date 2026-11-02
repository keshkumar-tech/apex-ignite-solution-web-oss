import { MILESTONES } from "../../data/site";
import { Reveal } from "../ui/Primitives";

export default function Timeline({
  items = MILESTONES,
  compact = false,
  horizontal = false,
}) {
  if (horizontal) return <HorizontalTimeline items={items} />;

  return (
    <div>
      <ol className="relative pl-7 sm:pl-8">
        <span
          aria-hidden="true"
          className="absolute left-[5px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-accent via-brand/40 to-transparent sm:left-[6px]"
        />
        {items.map((m, i) => (
          <Reveal
            as="li"
            key={m.year + m.title}
            delay={(i % 3) * 60}
            className="relative pb-5 last:pb-0 sm:pb-6"
          >
            <span
              aria-hidden="true"
              className={`absolute -left-7 top-1.5 h-3.5 w-3.5 rounded-full border-[3px] bg-white transition-transform duration-300 sm:-left-8 ${
                m.plan
                  ? "border-accent/70 shadow-[0_0_0_4px_rgba(245,130,53,0.12)]"
                  : "border-accent shadow-[0_0_0_4px_rgba(245,130,53,0.12)]"
              }`}
            />
            <div
              className={`group relative overflow-hidden rounded-xl border bg-white px-4 py-4 shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-premium sm:px-5 sm:py-5 ${
                m.plan ? "border-dashed border-ink-line" : "border-ink-line/80"
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent to-brand transition-transform duration-400 group-hover:scale-y-100 ${
                  m.plan ? "from-accent/60" : ""
                }`}
              />
              <span
                className={`relative mb-2 inline-block rounded-md px-2.5 py-0.5 text-[0.74rem] font-bold tracking-[0.08em] text-white shadow-sm ${
                  m.plan
                    ? "bg-gradient-to-r from-accent-light to-accent"
                    : "bg-gradient-to-r from-navy to-brand"
                }`}
              >
                {m.year}
              </span>
              <h3 className="relative mb-1.5 text-[1rem] transition-colors duration-300 group-hover:text-brand sm:text-[1.02rem]">
                {m.title}
              </h3>
              <p className="relative text-[0.88rem] leading-[1.65] text-ink-muted sm:text-[0.9rem]">
                {m.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
      <div className="mt-5 flex flex-wrap gap-4 text-[0.78rem] text-ink-muted">
        <span className="inline-flex items-center gap-2">
          <i className="h-2.5 w-2.5 rounded-full bg-navy" /> Completed
        </span>
        <span className="inline-flex items-center gap-2">
          <i className="h-2.5 w-2.5 rounded-full bg-accent" /> Planned / in
          progress
        </span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Horizontal milestone rail — used on the home page so the journey reads
 * left-to-right instead of as a long vertical stack.
 * ------------------------------------------------------------------------ */
function HorizontalTimeline({ items }) {
  return (
    <div>
      {/* snapping rail: every card is one snap-stop, the line runs behind */}
      <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        <div className="hide-scrollbar relative overflow-x-auto overscroll-x-contain pb-4 [scroll-snap-type:x_mandatory]">
          <ol className="relative flex w-max gap-4 px-1 pt-2 sm:gap-5">
            {/* connecting rail */}
            <span
              aria-hidden="true"
              className="absolute left-2 right-2 top-[13px] h-0.5 bg-gradient-to-r from-accent via-brand/45 to-accent/60"
            />
            {items.map((m, i) => (
              <Reveal
                as="li"
                key={m.year + m.title}
                delay={(i % 4) * 50}
                className="relative w-[240px] shrink-0 [scroll-snap-align:start] sm:w-[268px]"
              >
                {/* node on the rail */}
                <span
                  aria-hidden="true"
                  className={`relative z-10 mb-4 block h-3.5 w-3.5 rounded-full border-[3px] bg-white shadow-[0_0_0_4px_rgba(245,130,53,0.12)] ${
                    m.plan ? "border-accent/70" : "border-accent"
                  }`}
                />
                <div
                  className={`group relative h-full overflow-hidden rounded-xl border bg-white px-4 py-4 shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-brand/20 hover:shadow-premium sm:px-5 sm:py-5 ${
                    m.plan
                      ? "border-dashed border-ink-line"
                      : "border-ink-line/80"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-brand transition-transform duration-400 group-hover:scale-x-100"
                  />
                  <span
                    className={`relative mb-2 inline-block rounded-md px-2.5 py-0.5 text-[0.74rem] font-bold tracking-[0.08em] text-white shadow-sm ${
                      m.plan
                        ? "bg-gradient-to-r from-accent-light to-accent"
                        : "bg-gradient-to-r from-navy to-brand"
                    }`}
                  >
                    {m.year}
                  </span>
                  <h3 className="relative mb-1.5 text-[0.98rem] leading-snug transition-colors duration-300 group-hover:text-brand">
                    {m.title}
                  </h3>
                  <p className="relative text-[0.85rem] leading-[1.6] text-ink-muted">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        {/* right-edge fade hints that more cards exist off-screen */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent lg:hidden"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.78rem] text-ink-muted">
        <span className="inline-flex items-center gap-2">
          <i className="h-2.5 w-2.5 rounded-full bg-navy" /> Completed
        </span>
        <span className="inline-flex items-center gap-2">
          <i className="h-2.5 w-2.5 rounded-full bg-accent" /> Planned / in
          progress
        </span>
        <span className="inline-flex items-center gap-1.5 text-[0.74rem] italic text-ink-muted/80 lg:hidden">
          Swipe to explore
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-3.5 w-3.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
