import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Neutral ramp anchored on brand charcoal (#1A1A1A = charcoal-900)
        charcoal: {
          50: "#FAFAFA",
          100: "#F2F2F2",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#1A1A1A",
          950: "#0D0D0D",
        },
        // Steel-navy ramp anchored on brand accent (#1B4E71 = navy-600)
        navy: {
          50: "#EEF6FB",
          100: "#D9EBF7",
          200: "#B3D7EF",
          300: "#81BCE4",
          400: "#429AD6",
          500: "#2472A8",
          600: "#1B4E71",
          700: "#133D5A",
          800: "#0E2D43",
          900: "#0A1F2E",
          950: "#06131C",
        },
        // Semantic tokens, wired to CSS vars so light/dark stay in one place
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      backgroundImage: {
        "mesh-navy":
          "radial-gradient(ellipse 80% 50% at 20% -10%, hsl(var(--mesh-1)) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 10%, hsl(var(--mesh-2)) 0%, transparent 55%), radial-gradient(ellipse 60% 60% at 50% 100%, hsl(var(--mesh-3)) 0%, transparent 60%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
