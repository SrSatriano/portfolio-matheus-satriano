import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#060a12",
          50: "#0c1220",
          100: "#111827",
          200: "#1e293b",
        },
        accent: {
          DEFAULT: "#22d3ee",
          dim: "#0891b2",
          glow: "#67e8f9",
        },
        mint: "#34d399",
        cinema: {
          gold: "#fbbf24",
          red: "#f87171",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "var(--font-sora)", "serif"],
        body: ["var(--font-source)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "ken-burns": "kenBurns 24s ease-in-out infinite alternate",
        "scroll-cue": "scrollCue 1.8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.05) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-1%, -1%)" },
        },
        scrollCue: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(12px)", opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
