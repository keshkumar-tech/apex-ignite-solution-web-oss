/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.25rem", lg: "1.5rem" },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1340px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#101d32",
          800: "#16263f",
          700: "#1b3055",
          900: "#0b1524",
        },
        brand: {
          DEFAULT: "#174b83",
          light: "#2b6cb0",
          pale: "#eef3f9",
          50: "#f0f6fc",
          100: "#dbe9f7",
          200: "#bcd6ef",
        },
        accent: {
          DEFAULT: "#f58235",
          dark: "#d96c22",
          light: "#ffa565",
          pale: "#fff3e9",
        },
        teal: { DEFAULT: "#0e9f8a", light: "#2ec4ad", pale: "#e7f8f5" },
        violet: { DEFAULT: "#5b4bd6", light: "#8b7cf0", pale: "#f1eefe" },
        ink: { DEFAULT: "#202a36", muted: "#687586", line: "#e3e8ef" },
        surface: {
          DEFAULT: "#ffffff",
          light: "#f5f7fa",
          mid: "#eef2f7",
          deep: "#e6ecf4",
        },
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "Sora",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        "page-title": [
          "clamp(2rem,4.4vw,3.4rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        "section-title": [
          "clamp(1.75rem,3.1vw,2.7rem)",
          { lineHeight: "1.14", letterSpacing: "-0.02em" },
        ],
        "hero-title": [
          "1.6rem",
          { lineHeight: "1.14", letterSpacing: "-0.02em" },
        ],
      },
      borderRadius: { card: "14px", panel: "22px" },
      boxShadow: {
        soft: "0 2px 10px rgba(16,29,50,0.05)",
        card: "0 14px 40px -18px rgba(16,29,50,0.28)",
        lift: "0 30px 70px -30px rgba(16,29,50,0.45)",
        glow: "0 12px 24px -14px rgba(245,130,53,0.9)",
        premium:
          "0 1px 2px rgba(16,29,50,0.04), 0 8px 16px -8px rgba(16,29,50,0.10), 0 24px 48px -24px rgba(16,29,50,0.22)",
        hover:
          "0 2px 4px rgba(16,29,50,0.04), 0 16px 32px -12px rgba(16,29,50,0.18), 0 40px 72px -32px rgba(23,75,131,0.35)",
        accentGlow:
          "0 0 0 1px rgba(245,130,53,0.35), 0 18px 40px -16px rgba(245,130,53,0.55)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.16)",
        ring: "0 0 0 4px rgba(23,75,131,0.10)",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(rgba(23,75,131,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(23,75,131,0.055) 1px, transparent 1px)",
        "mesh-light":
          "radial-gradient(at 8% 12%, rgba(23,75,131,0.09) 0px, transparent 50%), radial-gradient(at 92% 8%, rgba(245,130,53,0.10) 0px, transparent 45%), radial-gradient(at 50% 100%, rgba(14,159,138,0.08) 0px, transparent 55%)",
        "mesh-navy":
          "radial-gradient(at 15% 10%, rgba(43,108,176,0.55) 0px, transparent 50%), radial-gradient(at 88% 15%, rgba(245,130,53,0.22) 0px, transparent 45%), radial-gradient(at 50% 95%, rgba(14,159,138,0.20) 0px, transparent 55%)",
        shine:
          "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.55) 48%, rgba(255,255,255,0.16) 54%, transparent 62%)",
        "accent-line":
          "linear-gradient(90deg, transparent, rgba(245,130,53,0.75), transparent)",
      },
      backgroundSize: { grid: "64px 64px", "grid-sm": "28px 28px" },
      maxWidth: { site: "1240px" },
      transitionTimingFunction: { smooth: "cubic-bezier(0.22,0.61,0.36,1)" },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(245,130,53,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(245,130,53,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(245,130,53,0)" },
        },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        drawIn: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .5s cubic-bezier(0.22,0.61,0.36,1) both",
        marquee: "marquee 38s linear infinite",
        shine: "shine 1.1s cubic-bezier(0.22,0.61,0.36,1)",
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s cubic-bezier(0.22,0.61,0.36,1) infinite",
        gradientShift: "gradientShift 12s ease infinite",
        spinSlow: "spinSlow 22s linear infinite",
        drawIn: "drawIn .9s cubic-bezier(0.22,0.61,0.36,1) both",
      },
    },
  },
  plugins: [],
};
