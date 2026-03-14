import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        line: "var(--line)",
        primary: "var(--primary)",
        "primary-strong": "var(--primary-strong)",
        "card-deep": "var(--card-deep)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 230, 138, 0.18), 0 24px 80px rgba(0, 230, 138, 0.16)",
        soft: "0 24px 70px rgba(5, 10, 20, 0.45)",
      },
      backgroundImage: {
        "launch-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "launch-radial":
          "radial-gradient(circle at top, rgba(0,230,138,0.16), transparent 40%), radial-gradient(circle at 80% 15%, rgba(34,211,238,0.14), transparent 28%), radial-gradient(circle at 15% 70%, rgba(14,165,233,0.12), transparent 25%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
