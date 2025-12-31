import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dev-primary": "var(--color-dev-primary)",
        "dev-accent": "var(--color-dev-accent)",
        "dev-text": "var(--color-dev-text)",
        "dev-secondary": "var(--color-dev-secondary)",
        "dev-bg": "var(--color-dev-bg)",
        "dev-card": "var(--color-dev-card)",
        "dev-surface": "var(--color-dev-surface)",
        "dev-peach": "var(--color-dev-peach)",
      },
      fontFamily: {
        "mono": ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
