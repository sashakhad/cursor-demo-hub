import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "dev-primary": "#06302B",
        "dev-accent": "#06302B", 
        "dev-text": "#06302B",
        "dev-secondary": "rgba(6, 48, 43, 0.6)",
        "dev-bg": "#FEFCF6",
        "dev-card": "#ffffff",
        // Dark mode colors - true dark theme
        "dev-primary-dark": "#1a1a1a",
        "dev-accent-dark": "#3b82f6",
        "dev-text-dark": "#e5e7eb",
        "dev-secondary-dark": "rgba(229, 231, 235, 0.6)",
        "dev-bg-dark": "#0f0f0f",
        "dev-card-dark": "#181818",
      },
      fontFamily: {
        "mono": ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
