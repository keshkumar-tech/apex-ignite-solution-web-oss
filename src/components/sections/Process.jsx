import { PROCESS } from "../../data/site";
import { Reveal } from "../ui/Primitives";
import Icon from "../ui/Icon";

const ICONS = ["build", "gear", "shield", "factory"];
const TONES = [
  { bar: "from-brand to-brand-light", ico: "bg-brand/[0.08] text-brand", halo: "bg-brand/10" },
  { bar: "from-accent to-accent-light", ico: "bg-accent/12 text-accent-dark", halo: "bg-accent/12" },
  { bar: "from-teal to-teal-light", ico: "bg-teal/12 text-teal", halo: "bg-teal/10" },
  { bar: "from-violet to-violet-light", ico: "bg-violet/12 text-violet", halo: "bg-violet/10" },
];

export default function Process({ items = PROCESS }) {
  return (
    <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
      {/* connecting line across the steps on wide screens */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] right-[8%] top-[62px] hidden h-px bg-gradient-to-r from-brand/25 via-accent/40 to-violet/25 xl:block"
      />

      {items.map((item, i) => {
        const t = TONES[i % TONES.length];
        return (
          <Reveal as="li" key={item.step} delay={i * 90} className="relative">
            <div className="group relative h-full overflow-hidden rounded-panel border border-ink-line/80 bg-white p-6 shadow-premium transition-all duration-400 ease-smooth hover:-translate-y-2 hover:border-transparent hover:shadow-hover sm:p-7">
              {/* colour halo */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -right-8 -top-8 grid h-28 w-28 place-items-center rounded-full ${t.halo} blur-2xl transition-transform duration-500 group-hover:scale-150`}
              />

              <div className="relative mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl ${t.ico} ring-1 ring-current/10 transition-all duration-400 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <Icon name={ICONS[i % ICONS.length]} className="h-5 w-5" />
                  </span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ink-muted">
                    Step
                  </span>
                </div>
                <span
                  className={`text-[2.4rem] font-bold leading-none tracking-[-0.05em] text-navy/[0.08] transition-colors duration-400 group-hover:text-navy/[0.14]`}
                >
                  {item.step}
                </span>
              </div>

              <h3 className="relative mb-2.5 text-[1.04rem] transition-colors duration-300 group-hover:text-brand">
                {item.title}
              </h3>
              <p className="relative text-[0.89rem] leading-[1.7] text-ink-muted">
                {item.text}
              </p>

              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${t.bar} transition-transform duration-500 ease-smooth group-hover:scale-x-100`}
              />
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
