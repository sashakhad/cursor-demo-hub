# Dark Mode + Accessible Theme Toggle

## What we’ll do

- Add Tailwind dark mode via class strategy and switch the existing `dev-*` palette to CSS variables so components automatically theme without edits.
- Define light/dark variable sets in `app/globals.css`.
- Prevent flash-of-wrong-theme with a tiny inline script in `app/layout.tsx` that sets the initial theme before hydration and exposes `data-theme` for tests.
- Create an accessible `ThemeToggle` component with `data-testid` and proper ARIA, then render it in `app/components/SideBar.tsx` near the site title.

## Files to change

- `tailwind.config.ts`: enable `darkMode: "class"`; map `dev-*` colors to CSS variables.
- `app/globals.css`: define light/dark CSS variables for `--color-dev-*` and keep existing base/utilities.
- `app/layout.tsx`: add `suppressHydrationWarning` and an inline `beforeInteractive` script to apply the theme class early; set `data-theme`.
- `app/components/ThemeToggle.tsx`: new client component.
- `app/components/SideBar.tsx`: render the toggle in the header area.

## Key edits (concise)

- tailwind.config.ts
```ts
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dev-primary": "var(--color-dev-primary)",
        "dev-accent": "var(--color-dev-accent)",
        "dev-text": "var(--color-dev-text)",
        "dev-secondary": "var(--color-dev-secondary)",
        "dev-bg": "var(--color-dev-bg)",
        "dev-card": "var(--color-dev-card)",
      },
    },
  },
};
```

- app/globals.css
```css
:root {
  --color-dev-primary: #06302b;
  --color-dev-accent: #06302b;
  --color-dev-text: #06302b;
  --color-dev-secondary: rgba(6, 48, 43, 0.6);
  --color-dev-bg: #fefcf6;
  --color-dev-card: #ffffff;
}
.dark {
  --color-dev-primary: #cbe7e2;
  --color-dev-accent: #7cd4c2;
  --color-dev-text: #e7f4f1;
  --color-dev-secondary: rgba(231, 244, 241, 0.7);
  --color-dev-bg: #0b1217; /* near slate-950 */
  --color-dev-card: #111927; /* near slate-900 */
}
```

- app/layout.tsx (apply theme before hydration)
```tsx
import Script from "next/script";

<html lang="en" suppressHydrationWarning>
  <body>...
    <Script id="theme-init" strategy="beforeInteractive">{`
      (function(){
        try {
          var stored = localStorage.getItem('theme');
          var mql = window.matchMedia('(prefers-color-scheme: dark)');
          var theme = stored || (mql.matches ? 'dark' : 'light');
          var root = document.documentElement;
          root.setAttribute('data-theme', theme);
          root.classList.toggle('dark', theme === 'dark');
        } catch(e) {}
      })();
    `}</Script>
  </body>
</html>
```

- app/components/ThemeToggle.tsx
```tsx
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
      className="rounded-md p-2 text-dev-text hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span aria-hidden>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
```

- app/components/SideBar.tsx (render toggle near the title)
```tsx
import ThemeToggle from "./ThemeToggle";
// ... inside header block near "Cursor Curious"
<div className="ml-2 mt-10 flex items-center justify-between gap-3 p-4">
  <div>
    <h1 className="text-dev-text">Cursor Curious</h1>
    <div className="text-base text-dev-secondary">Clean, markdown-powered blogging...</div>
  </div>
  <ThemeToggle />
</div>
```


## Accessibility & testing

- Uses a semantic button with `aria-pressed`, focus ring, keyboard support, and clear labels.
- Persistent preference via `localStorage`; respects system preference on first visit.
- E2E-friendly: toggle has `data-testid="theme-toggle"`; current theme is on `html[data-theme]`.

# Contract Alignment with Multi-Theme

- Root element: `html`
- Always set `data-theme` to `light` or `dark`.
- Only set the `dark` class when `data-theme === 'dark'`.
- Keep Tailwind `darkMode: 'class'` and CSS variables driven by `[data-theme]`.

Acceptance checks:
- On first visit: if system prefers dark, `html[data-theme="dark"].dark` is present; else `html[data-theme="light"]` and no `dark` class.
- Toggling persists to localStorage and round-trips on reload without FOUC.