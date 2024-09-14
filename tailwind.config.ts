import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        body: ["var(--font-inter)"],
        display: ["var(--font-mirai)"],
      },
      colors: {
        // primary: "#213141",
        // secondary: "#427EBF",
        body: "#1e1e1e",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "ken-burns-small": "ken-burns-small 30s 1",
        "ken-burns-large": "ken-burns-large 30s 1",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "ken-burns-small": {
          "0%": {
            opacity: "0",
            transform: "scale3d(2, 2, 2) translate3d(100px, 100px, 0px)",
            "animation-timing-function": "ease-in",
          },
          "5%": { opacity: "1" },
          "100%": {
            transform: "scale3d(1, 1, 1) translate3d(0px, 0px, 0px)",
          },
        },
        "ken-burns-large": {
          "0%": {
            opacity: "0",
            transform: "scale3d(1.4, 1.4, 1.4) translate3d(50px, 50px, 0px)",
            "animation-timing-function": "ease-in",
          },
          "5%": { opacity: "1" },
          "100%": {
            transform: "scale3d(1, 1, 1) translate3d(0px, 0px, 0px)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};
export default config;
