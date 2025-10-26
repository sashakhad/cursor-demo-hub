# Four Themes + Simple Dropdown — Execution Plan (Prescriptive)

## Goal
Implement four standalone themes (light, dark, purple, orange) that reliably change the accent and derived tokens across the app, with a single dropdown selector, persisted choice, early application (no FOUC), and clear acceptance criteria.

## Single Source of Truth (Critical Contract)
- Root element is `html`.
- `html` MUST have `data-theme` set to one of: `light | dark | purple | orange`.
- `html` MUST toggle the `dark` class ONLY when `data-theme="dark"`.
- All components MUST consume semantic tokens via Tailwind color aliases that resolve to CSS variables.

```12:35:app/layout.tsx
<Script id="theme-init" strategy="beforeInteractive">{`
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'light';
    var root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
  } catch(e) {}
})();
`}</Script>
```

## Tokens (CSS Variables)
Define semantic variables for all four themes. Purple and Orange MUST change `--color-dev-accent` to visibly purple/orange and ensure derived surfaces pick it up.

```1:40:app/globals.css
[data-theme="light"] {
  --color-dev-primary: #06302B;
  --color-dev-accent: #06302B;
  --color-dev-text: #06302B;
  --color-dev-secondary: rgba(6, 48, 43, 0.6);
  --color-dev-bg: #FEFCF6;
  --color-dev-card: #FFFFFF;
}

[data-theme="dark"] {
  --color-dev-primary: #06302B;  /* Keep dark for buttons - same as light */
  --color-dev-accent: #7CD4C2;   /* Bright teal for accents */
  --color-dev-text: #E7F4F1;     /* Light text for dark background */
  --color-dev-secondary: rgba(231, 244, 241, 0.7);
  --color-dev-bg: #0B1217;       /* Very dark background */
  --color-dev-card: #111927;     /* Slightly lighter dark for cards */
}

[data-theme="purple"] {
  --color-dev-primary: #06302B;
  --color-dev-accent: #7C3AED; /* Purple */
  --color-dev-text: #06302B;
  --color-dev-secondary: rgba(6, 48, 43, 0.6);
  --color-dev-bg: #FEFCF6;
  --color-dev-card: #FFFFFF;
}

[data-theme="orange"] {
  --color-dev-primary: #06302B;
  --color-dev-accent: #C2410C; /* Orange */
  --color-dev-text: #06302B;
  --color-dev-secondary: rgba(6, 48, 43, 0.6);
  --color-dev-bg: #FEFCF6;
  --color-dev-card: #FFFFFF;
}
```

Derived uses (borders, code tints) MUST use `color-mix` with `--color-dev-accent` so Purple/Orange changes are visible:

```41:75:app/globals.css
@layer components {
  .prose blockquote {
    @apply border-l-4 border-dev-accent pl-4 italic text-dev-secondary rounded-r-lg my-4;
    border-left-color: color-mix(in srgb, var(--color-dev-accent) 60%, transparent);
    background-color: color-mix(in srgb, var(--color-dev-accent) 5%, transparent);
  }
  .prose code {
    @apply px-2 py-1 rounded text-sm font-mono text-dev-text;
    background-color: color-mix(in srgb, var(--color-dev-accent) 10%, transparent);
  }
  .prose pre {
    @apply p-4 rounded-lg overflow-x-auto my-4;
    background-color: color-mix(in srgb, var(--color-dev-accent) 5%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-dev-accent) 20%, transparent);
  }
}
```

## Tailwind Mapping (No Hardcoded Colors)
Map semantic color names to variables. All components must use these classes only.

```1:26:tailwind.config.ts
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dev-primary': 'var(--color-dev-primary)',
        'dev-accent': 'var(--color-dev-accent)',
        'dev-text': 'var(--color-dev-text)',
        'dev-secondary': 'var(--color-dev-secondary)',
        'dev-bg': 'var(--color-dev-bg)',
        'dev-card': 'var(--color-dev-card)'
      }
    }
  }
}
```

## Selector Component
Native select with four options; updates `data-theme`, toggles `dark` class, persists to localStorage.

```1:62:app/components/ThemeSelector.tsx
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
      <select data-testid="theme-selector" defaultValue="light" className="rounded-md border border-dev-text bg-dev-bg px-3 py-2 text-dev-text focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
      </select>
    );
  }

  return (
    <select data-testid="theme-selector" value={theme} onChange={handleChange} aria-label="Select theme" className="rounded-md border border-dev-text bg-dev-bg px-3 py-2 text-dev-text focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent min-w-[100px]">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="purple">Purple</option>
      <option value="orange">Orange</option>
    </select>
  );
}
```

## Integration
Render selector in `SideBar` header area.

```67:75:app/components/SideBar.tsx
<div className="ml-2 mt-10 flex items-center justify-between gap-3 p-4">
  <div>
    <h1 className="text-dev-text">Cursor Curious</h1>
    <div className="text-base text-dev-secondary">Clean, markdown-powered blogging for developers who love to write.</div>
  </div>
  <ThemeSelector />
</div>
```

## Pitfalls (Make These Checks)
- The early-init script MUST set both `data-theme` and the `dark` class before hydration.
- Components MUST NOT hardcode purple/orange anywhere; rely on tokens.
- Derived UI (borders, code blocks, hover states) MUST use `--color-dev-accent` via color-mix so purple/orange are visible.

## Acceptance Criteria (Concrete)
- On fresh load with no localStorage, `html[data-theme="light"]` is present; background and text match light tokens.
- Selecting Purple updates the accent in:
  - Button primary background (`bg-dev-accent`) appears purple.
  - Links and underline hovers use purple (e.g., `.prose a`, `TextLink` hover).
  - Divider border tint uses purple via color-mix.
  - Code block background/border tints use purple.
- Selecting Orange reflects the same surfaces but orange.
- Selecting Dark switches to dark neutrals and teal accent, and `html` has class `dark`.
- Choice persists across reloads for each theme.
- Axe reports no new critical contrast issues across Home/List/Post pages.

## Test Hooks
- Control exposes `data-testid="theme-selector"`.
- Current theme is readable from `document.documentElement.dataset.theme`.

## Done When
- All acceptance criteria pass and purple/orange changes are visually obvious across the listed surfaces without component rewrites beyond token consumption.
