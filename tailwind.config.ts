import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // FDA SERVICE Brand Colors - Light turquoise primary, darker turquoise accent
        primary: {
          DEFAULT: "#26D6BB", // Light turquoise (PRIMARY)
          50: "#E6FBF7",
          100: "#C6F4EC",
          200: "#9EEEE0",
          300: "#76E8D4",
          400: "#4EDEC8",
          500: "#26D6BB", // Main light turquoise
          600: "#1EB19C",
          700: "#178C7D",
          800: "#0F675E",
          900: "#08423F",
        },
        secondary: "#00C9A7", // Darker turquoise (ACCENT)
        tertiary: "#F1F5F9", // Light grey for backgrounds
        surface: "#F8FAFC", // Very light grey
        background: "#FFFFFF",
        text: {
          DEFAULT: "#1E293B", // Dark slate for main text
          muted: "#64748B", // Medium grey for secondary text
          light: "#94A3B8", // Light grey
        },
        border: "#E2E8F0", // Light grey border
        accent: {
          turquoise: "#00C9A7", // Darker turquoise accent
          light: "#26D6BB", // Light turquoise
          pale: "#E6FBF7",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
        'section-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
