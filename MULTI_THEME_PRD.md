# Four Themes and Simple Theme Dropdown — PRD

## Overview
Simplify theming to four standalone themes: Light, Dark, Purple, and Orange. Replace the previous mode+accent matrix with a single dropdown that selects exactly one theme. Maintain a token-based design and deliver a flicker-free, accessible experience.

## Objectives
- Reduce complexity to a single axis (theme).
- Preserve visual consistency via design tokens; avoid per-component rewrites.
- Ensure accessibility and strong testability.

## Current State (As-Is)
- Light and Dark themes exist with a binary toggle and persisted choice.
- Early initialization prevents theme flash (no FOUC).

## Proposed Direction (To-Be)
- Four standalone themes: Light, Dark, Purple, Orange.
- Single dropdown labeled “Theme” that selects one theme.
- Persist selection locally and apply before first paint.

## In Scope
- Four themes and a single dropdown selector.
- Persistence and early initialization (no FOUC).
- E2E-friendly attributes and root data attribute.

## Out of Scope
- System-following behavior (may be revisited later).
- Additional themes or typography/spacing changes.

## User Stories
- As a reader, I can choose among Light, Dark, Purple, or Orange.
- As a returning reader, my selection is remembered locally.
- As a keyboard-only user, I can operate the dropdown easily.
- As a low-vision user, contrast remains compliant.

## Functional Requirements
- Options: Light, Dark, Purple, Orange.
- Default theme: Light.
- Persistence: localStorage key `theme` set to one of `light|dark|purple|orange`.
- No FOUC: apply the selected theme before initial paint.
- Control: native select preferred; accessible listbox acceptable.
- Testing exposure:
  - data-testid="theme-selector" on the control.
  - `html[data-theme]` equals the selected theme.

## Accessibility Requirements
- Native select semantics or WAI-ARIA compliant listbox.
- Keyboard: Tab to focus, Arrow keys to navigate, Enter/Space to select, Esc to close (if custom listbox).
- Visible focus ring with sufficient contrast.
- Minimum 44×44 px tap target.

## Visual/Theming Requirements
- Semantic tokens: accent, text-primary, text-secondary, background, card, border-subtle.
- Theme values:
  - Light:
    - accent: #06302B
    - text-primary: #06302B
    - text-secondary: rgba(6,48,43,0.6)
    - background: #FEFCF6
    - card: #FFFFFF
  - Dark:
    - accent: #7CD4C2
    - text-primary: #E7F4F1
    - text-secondary: rgba(231,244,241,0.7)
    - background: #0B1217
    - card: #111927
  - Purple:
    - accent: #7C3AED
    - text-primary: #06302B
    - text-secondary: rgba(6,48,43,0.6)
    - background: #FEFCF6
    - card: #FFFFFF
  - Orange:
    - accent: #C2410C
    - text-primary: #06302B
    - text-secondary: rgba(6,48,43,0.6)
    - background: #FEFCF6
    - card: #FFFFFF
- Derived tokens:
  - `border-subtle` via color-mix from accent (Light/Purple/Orange: ~15%; Dark: ~25%).
  - Links and code tints derive from accent.

## Non-Functional Requirements
- No perceptible flash on load; minimal CLS.
- Selection latency < 50ms.
- Evergreen browser support; without JS defaults to Light.

## QA & Testability
- First load defaults to Light with `html[data-theme="light"]`.
- Selecting each theme updates `data-theme` and persists across reloads.
- Keyboard navigation works on the selector.
- Axe/PA11Y finds no critical issues.

## Success Metrics
- >= 95% of sessions render the chosen theme without flash.
- 0 critical accessibility issues related to the selector or contrast.

## Risks & Mitigations
- Contrast regressions: audit and adjust token values.
- Inconsistent derived styles: centralize on tokens only.

## Information Architecture & Naming
- Control label: “Theme”.
- Options: “Light”, “Dark”, “Purple”, “Orange”.
- Data attribute: `html[data-theme]` ∈ {light, dark, purple, orange}.