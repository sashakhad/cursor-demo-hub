"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "purple" | "orange";

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const storedTheme = root.getAttribute("data-theme") as Theme;
    setTheme(storedTheme || "light");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as Theme;
    const root = document.documentElement;
    root.setAttribute("data-theme", newTheme);
    root.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <select 
        data-testid="theme-selector" 
        defaultValue="light" 
        className="fixed top-4 right-4 z-50 text-sm rounded-md border border-dev-secondary bg-dev-card px-2 py-1 text-dev-text focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent shadow-sm"
        disabled
      >
        <option value="light">☀️ Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="purple">💜 Purple</option>
        <option value="orange">🔥 Orange</option>
      </select>
    );
  }

  return (
    <select 
      data-testid="theme-selector" 
      value={theme} 
      onChange={handleChange} 
      aria-label="Select theme" 
      className="fixed top-4 right-4 z-50 text-sm rounded-md border border-dev-secondary bg-dev-card px-2 py-1 text-dev-text focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent cursor-pointer hover:border-dev-accent transition-colors shadow-sm"
    >
      <option value="light">☀️ Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="purple">💜 Purple</option>
      <option value="orange">🔥 Orange</option>
    </select>
  );
}

