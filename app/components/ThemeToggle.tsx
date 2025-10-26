"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { useState, useRef, useEffect } from "react";

const themes = [
  { value: "light", label: "Light", icon: "☀️" },
  { value: "dark", label: "Dark", icon: "🌙" },
  { value: "orange", label: "Orange", icon: "🟠" },
  { value: "purple", label: "Purple", icon: "🟣" },
] as const;

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        listRef.current &&
        !listRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    themeValue: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setTheme(themeValue as typeof theme);
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <div className="relative" data-testid="theme-selector">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-label="Select theme"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        data-testid="theme-selector-button"
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover-theme-card focus:outline-none focus:ring-2 focus:ring-dev-accent focus:ring-offset-2"
      >
        <span className="text-lg" aria-hidden="true">
          {currentTheme.icon}
        </span>
        <span className="sr-only">Current theme: {currentTheme.label}</span>
        <span aria-hidden="true" className="text-xs">
          ▼
        </span>
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          aria-label="Theme options"
          data-testid="theme-selector-list"
          className="absolute right-0 mt-2 w-40 rounded-lg bg-theme-card shadow-lg border border-dev-accent/20 overflow-hidden z-50"
        >
          {themes.map((themeOption) => (
            <li
              key={themeOption.value}
              role="option"
              aria-selected={theme === themeOption.value}
              tabIndex={theme === themeOption.value ? 0 : -1}
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
                buttonRef.current?.focus();
              }}
              onKeyDown={(e) => handleOptionKeyDown(e, themeOption.value)}
              data-testid={`theme-option-${themeOption.value}`}
              className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors duration-150 ${
                theme === themeOption.value
                  ? "bg-dev-accent/10 font-semibold"
                  : "hover:bg-dev-accent/5"
              }`}
            >
              <span className="text-lg" aria-hidden="true">
                {themeOption.icon}
              </span>
              <span>{themeOption.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ThemeToggle;

