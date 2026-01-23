"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const next: Theme = isDark ? "light" : "dark";

  const toggle = () => {
    const root = document.documentElement;
    const nowDark = next === "dark";
    root.classList.toggle("dark", nowDark);
    root.setAttribute("data-theme", nowDark ? "dark" : "light");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setTheme(nowDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-testid="theme-toggle"
      className="fixed top-4 right-4 z-50 rounded-md p-2 text-dev-text hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent bg-dev-card shadow-sm min-w-[44px] min-h-[44px]"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span aria-hidden>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
