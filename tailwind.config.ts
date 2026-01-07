import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // RBK Brand Colors
        // Purple accent (from logo)
        primary: {
          DEFAULT: "#6D28D9",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          950: "#2E1065",
        },
        // Mint/Teal accent (from logo)
        mint: {
          DEFAULT: "#29D6AA",
          50: "#ECFDF8",
          100: "#D1FAE8",
          200: "#A7F3D5",
          300: "#6EE7BD",
          400: "#34D9A5",
          500: "#29D6AA",
          600: "#0FAF87",
          700: "#0D9070",
          800: "#0E7159",
          900: "#0D5D4A",
        },
        // Neutral grays
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
        // Semantic colors (light mode)
        surface: "#FAFAFA",
        background: "#FFFFFF",
        text: {
          DEFAULT: "#171717",
          secondary: "#525252",
          muted: "#737373",
        },
        border: "#E5E5E5",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      backgroundImage: {
        // Light mode gradients
        'gradient-hero': 'linear-gradient(135deg, #FFFFFF 0%, #F5F3FF 50%, #ECFDF8 100%)',
        'gradient-section': 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
        'gradient-accent': 'linear-gradient(135deg, #6D28D9 0%, #29D6AA 100%)',
        // Dark mode gradients
        'gradient-hero-dark': 'linear-gradient(135deg, #0A0A0A 0%, #1a1025 50%, #0d1f1a 100%)',
        'gradient-section-dark': 'linear-gradient(180deg, #171717 0%, #0A0A0A 100%)',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
        'glow-purple': '0 0 20px rgba(109, 40, 217, 0.15)',
        'glow-mint': '0 0 20px rgba(41, 214, 170, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
