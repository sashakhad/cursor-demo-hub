# Dark Mode + Accessible Theme Toggle

## ⚠️ CRITICAL REQUIREMENT: PRESERVE THE GREEN THEME
**The blog currently has a beautiful green/cream color scheme in light mode. This MUST be preserved exactly as-is. Only add dark mode support without changing ANY light mode colors.**

Current Light Mode Colors (DO NOT CHANGE):
- Background: Cream (#FEFCF6)
- Text: Dark Green (#06302B)
- Accents: Dark Green (#06302B)
- Secondary: Muted Green (rgba(6, 48, 43, 0.6))

## What we'll do

- Add Tailwind dark mode via class strategy, keeping ALL existing colors intact.
- Add dark mode CSS variables WITHOUT modifying the existing `:root` variables.
- Prevent flash-of-wrong-theme with a tiny inline script in `app/layout.tsx` that sets the initial theme before hydration and exposes `data-theme` for tests.
- Create an accessible `ThemeToggle` component with `data-testid` and proper ARIA, then render it in `app/components/SideBar.tsx` near the site title.

## Files to change

- `tailwind.config.ts`: enable `darkMode: "class"`; map `dev-*` colors to CSS variables.
- `app/globals.css`: define light/dark CSS variables for `--color-dev-*` and keep existing base/utilities.
- `app/layout.tsx`: add `suppressHydrationWarning` and an inline `beforeInteractive` script to apply the theme class early; set `data-theme`.
- `app/components/ThemeToggle.tsx`: new client component.
- `app/components/SideBar.tsx`: render the toggle in the header area.

## Key edits (concise)

### CRITICAL: PRESERVE THE ORIGINAL GREEN THEME IN LIGHT MODE
**The blog currently has a beautiful green/cream color scheme. DO NOT change or remove these colors when implementing dark mode!**

- tailwind.config.ts
```ts
export default {
  darkMode: "class",  // ADD this line
  theme: {
    extend: {
      colors: {
        // DO NOT CHANGE THESE - they map to CSS variables
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
/* CRITICAL: Keep ALL existing styles, just add/modify these CSS variables */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* LIGHT MODE - PRESERVE THE GREEN THEME */
  --color-dev-primary: #06302B;      /* Dark green - KEEP THIS */
  --color-dev-accent: #06302B;       /* Dark green - KEEP THIS */
  --color-dev-text: #06302B;         /* Dark green text - KEEP THIS */
  --color-dev-secondary: rgba(6, 48, 43, 0.6);  /* Muted green - KEEP THIS */
  --color-dev-bg: #FEFCF6;           /* Cream background - KEEP THIS */
  --color-dev-card: #FFFFFF;         /* White cards - KEEP THIS */
}

.dark {
  /* DARK MODE - New colors for dark theme only */
  --color-dev-primary: #06302B;      /* Keep dark for buttons */
  --color-dev-accent: #7CD4C2;       /* Teal for links/highlights */
  --color-dev-text: #E7F4F1;         /* Light text for dark bg */
  --color-dev-secondary: rgba(231, 244, 241, 0.7);  /* Muted light text */
  --color-dev-bg: #0B1217;           /* Very dark background */
  --color-dev-card: #111927;         /* Dark card background */
}

/* KEEP ALL EXISTING @layer base AND @layer components STYLES */
```

**IMPORTANT WARNINGS**: 
- DO NOT remove or change the green colors in light mode
- DO NOT change color values to generic colors like gray/slate
- DO NOT remove existing Tailwind classes that use `dev-*` colors
- ONLY add the `.dark` class variables, don't modify `:root`
- `dev-primary` is used for buttons and active states, NOT backgrounds
- `dev-bg` is the main background color for content areas

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


## Critical Implementation Notes

**COMMON MISTAKES TO AVOID:**
1. **DO NOT use `bg-dev-primary` for main content areas** - Use `bg-dev-bg` instead
2. **DO NOT use light colors for `dev-primary` in dark mode** - It's for buttons, keep it dark (#06302b)
3. **DO NOT hardcode `text-white`** - Always use `text-dev-text` for theme compatibility
4. **VERIFY that FilteredPosts.tsx uses `bg-dev-bg`** not `bg-dev-primary` for the main container

**CORRECT USAGE:**
- Main content background: `bg-dev-bg` (cream in light, near-black in dark)
- Text color: `text-dev-text` (dark green in light, off-white in dark)
- Button backgrounds: `bg-dev-primary` (dark green in both themes)
- Links and accents: `text-dev-accent` (dark green in light, teal in dark)

## Accessibility & testing

- Uses a semantic button with `aria-pressed`, focus ring, keyboard support, and clear labels.
- Persistent preference via `localStorage`; respects system preference on first visit.
- E2E-friendly: toggle has `data-testid="theme-toggle"`; current theme is on `html[data-theme]`.

## Verification Checklist

After implementation, verify:

### Light Mode MUST Have:
1. ✅ **Cream background** (#FEFCF6) - NOT white, NOT gray
2. ✅ **Dark green text** (#06302B) - NOT black, NOT gray
3. ✅ **Dark green links** (#06302B) - NOT blue, NOT generic colors
4. ✅ **Green-tinted code blocks** - Using color-mix with green accent
5. ✅ **Original green theme fully preserved** - Should look EXACTLY like before

### Dark Mode Should Have:
1. ✅ Near-black background (#0B1217)
2. ✅ Light text (#E7F4F1)
3. ✅ Teal accent for links (#7CD4C2)
4. ✅ Dark card backgrounds (#111927)
5. ✅ Good contrast for readability

### Common Mistakes to Check:
1. ❌ Light mode lost its green theme (turned gray/generic)
2. ❌ FilteredPosts using `bg-dev-primary` instead of `bg-dev-bg`
3. ❌ Hardcoded `text-white` instead of `text-dev-text`
4. ❌ CSS variables in `:root` were changed or removed
5. ❌ Existing styles in @layer base/components were deleted

# Contract Alignment with Multi-Theme

- Root element: `html`
- Always set `data-theme` to `light` or `dark`.
- Only set the `dark` class when `data-theme === 'dark'`.
- Keep Tailwind `darkMode: 'class'` and CSS variables driven by `[data-theme]`.

Acceptance checks:
- On first visit: if system prefers dark, `html[data-theme="dark"].dark` is present; else `html[data-theme="light"]` and no `dark` class.
- Toggling persists to localStorage and round-trips on reload without FOUC.