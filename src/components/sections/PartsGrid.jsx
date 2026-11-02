import { useState } from "react";
import Icon from "../ui/Icon";

/** Grid of real component photographs taken from the original site. */
export default function PartsGrid({ parts, groupName }) {
  const [zoom, setZoom] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {parts.map((part, i) => (
          <figure
            key={`${part.image}-${i}`}
            className="group overflow-hidden rounded-xl border border-ink-line bg-white transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-[#d5dce6] hover:shadow-card"
          >
            <button
              type="button"
              onClick={() => setZoom(part)}
              className="block w-full cursor-zoom-in bg-surface-light p-3"
              aria-label={`View larger image of ${part.name}`}
            >
              <img
                src={part.image}
                alt={`${part.name} — ${groupName}`}
                loading="lazy"
                decoding="async"
                width="320"
                height="320"
                className="aspect-square w-full object-contain transition-transform duration-500 ease-smooth group-hover:scale-105"
              />
            </button>
            <figcaption className="border-t border-ink-line px-3 py-3 text-[0.84rem] font-semibold leading-snug text-navy">
              {part.name}
            </figcaption>
          </figure>
        ))}
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-[400] grid place-items-center bg-[#080f1a]/92 p-5 animate-fadeUp"
          role="dialog"
          aria-modal="true"
          aria-label={zoom.name}
          onClick={() => setZoom(null)}
        >
          <button
            type="button"
            onClick={() => setZoom(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-accent hover:border-accent"
          >
            <Icon name="close" className="h-[18px] w-[18px]" />
          </button>
          <figure
            className="max-h-[86vh] max-w-[min(760px,94vw)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={zoom.image}
              alt={zoom.name}
              className="max-h-[72vh] w-full rounded-lg bg-white object-contain shadow-lift"
            />
            <figcaption className="mt-3 text-center text-[0.9rem] text-white/75">
              {zoom.name}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
