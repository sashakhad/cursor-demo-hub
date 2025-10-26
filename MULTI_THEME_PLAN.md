# Four Themes + Simple Dropdown — Execution Plan

## Scope
Implement four standalone themes (Light, Dark, Purple, Orange) with a single dropdown selector. Persist user choice, apply on first paint (no FOUC), and ensure accessibility.

## Architecture Decisions
- State model
  - theme: "light" | "dark" | "purple" | "orange"
- Persistence
  - localStorage key: `theme` (one of the four strings)
- DOM contract
  - html.dataset.theme = theme
  - html.classList.toggle('dark', theme === 'dark') to preserve Tailwind dark utilities
- Tokens
  - Semantic CSS variables for text, background, card, accent, border-subtle
  - Each theme sets its own variable values

## Steps
1) CSS tokens: define four themes
- File: `app/globals.css`
  - `[data-theme="light"] { /* light neutrals + green accent */ }`
  - `[data-theme="dark"] { /* dark neutrals + teal accent */ }`
  - `[data-theme="purple"] { /* light neutrals + purple accent */ }`
  - `[data-theme="orange"] { /* light neutrals + orange accent */ }`
  - Ensure derived tokens (borders, links, code tints) use `var(--color-dev-accent)` and color-mix

2) Tailwind mapping
- File: `tailwind.config.ts`
  - Confirm `darkMode: "class"`
  - Map `colors.dev-*` to CSS variables if not already

3) Early-init (no FOUC)
- File: `app/layout.tsx`
  - Inline `beforeInteractive` script:
    - Read `localStorage['theme']` (default 'light')
    - Set `document.documentElement.dataset.theme = theme`
    - Toggle `dark` class when theme === 'dark'

4) ThemeSelector component (native select)
- File: `app/components/ThemeSelector.tsx`
  - `<select data-testid="theme-selector">` with options: light, dark, purple, orange
  - On change: update dataset/class, persist selection

5) Integrate selector
- File: `app/components/SideBar.tsx`
  - Remove old toggle; render `ThemeSelector` near the title

6) Cleanup
- Delete unused toggle component and references

7) QA
- Verify no FOUC
- Verify selection persistence across reloads
- Keyboard and focus behavior on native select
- Contrast spot checks for all four themes on key pages

## Acceptance Criteria
- Root `html` shows correct `data-theme` before first paint; `dark` class set only for Dark
- `ThemeSelector` present with `data-testid="theme-selector"` and four options
- WCAG AA contrast passes for text and interactive states
- No layout shift > 0.02 CLS attributable to theme changes

## Estimated Effort
- Tokens + Tailwind mapping: 1-2 hrs
- Early init: 0.5-1 hr
- ThemeSelector + integration: 1-2 hrs
- QA: 1-2 hrs
