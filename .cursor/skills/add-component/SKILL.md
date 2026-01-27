---
name: add-component
description: Create React components following project conventions with visual verification. Use when adding new UI components, creating reusable elements, or when the user asks to build a component.
---

# Add Component

Create React components that follow this project's patterns, then verify they render correctly in the browser.

## Component Conventions

All components in `app/components/` follow these patterns:

1. **Named function declarations** (not arrow functions)
2. **Explicit TypeScript interfaces** for props (named `{ComponentName}Props`)
3. **Variant pattern** for style variations using a `variant` prop
4. **TailwindCSS** for all styling
5. **Default export** at the bottom
6. **Optional `className` prop** for customization

## Component Template

```tsx
import { ReactNode } from "react";

interface {ComponentName}Props {
  children: ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

function {ComponentName}({ children, variant = "default", className = "" }: {ComponentName}Props) {
  const variantStyles = {
    default: "bg-white text-dev-primary",
    secondary: "bg-dev-card text-dev-text",
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default {ComponentName};
```

## Client vs Server Components

- **Server components** (default): No directive needed. Use for static UI.
- **Client components**: Add `"use client";` at the top when using:
  - `useState`, `useEffect`, or other hooks
  - Event handlers (`onClick`, `onChange`)
  - Browser APIs

## Scripts

This skill includes utility scripts in `scripts/`:

| Script | Purpose |
|--------|---------|
| `scaffold-component.ts` | Generate boilerplate for a new component |
| `validate-component.ts` | Check that a component follows conventions |

## Workflow

### Step 1: Scaffold the Component

Use the scaffold script to generate boilerplate:

```bash
npx ts-node .cursor/skills/add-component/scripts/scaffold-component.ts Badge
```

For client components (with hooks/state):

```bash
npx ts-node .cursor/skills/add-component/scripts/scaffold-component.ts VisitorBadge --client
```

Then customize the generated file for your specific needs.

### Step 2: Validate Conventions

After editing, validate the component follows conventions:

```bash
npx ts-node .cursor/skills/add-component/scripts/validate-component.ts Badge
```

This checks:
- Has explicit props interface
- Uses named function declaration
- Has default export
- Includes className prop
- Correct "use client" usage
- No `any` types

### Step 3: Verify Build

Run the build to catch TypeScript errors:

```bash
pnpm build
```

### Step 3: Visual Verification (Demo Feature)

Use the browser MCP to verify the component renders correctly:

1. **Start the dev server** if not running:
   ```bash
   pnpm dev
   ```

2. **Navigate to a page using the component**:
   Use `browser_navigate` to open the relevant page.

3. **Take a snapshot** to verify the component is in the DOM:
   Use `browser_snapshot` to capture the accessibility tree.

4. **Take a screenshot** for visual confirmation:
   Use `browser_take_screenshot` to capture the rendered result.

## Design System Tokens

Use these Tailwind classes for consistency:

| Token | Class | Usage |
|-------|-------|-------|
| Primary bg | `bg-dev-primary` | Main background (dark green) |
| Accent | `bg-dev-accent` | Buttons, highlights |
| Card bg | `bg-dev-card` | Card backgrounds |
| Primary text | `text-dev-text` | Main text |
| Secondary text | `text-dev-secondary` | Muted text |

## Examples

For reference implementations, see:
- `Button.tsx` - Variant pattern with multiple styles
- `Container.tsx` - Layout component with variants
- `VisitorCounter.tsx` - Client component with data fetching
- `Input.tsx` - Form element with controlled input pattern

## Checklist

Before completing:

- [ ] Props interface is explicit (no `any`)
- [ ] Uses named function declaration
- [ ] Variant pattern used if multiple styles needed
- [ ] `className` prop included for customization
- [ ] `"use client"` added only if needed
- [ ] Build passes (`pnpm build`)
- [ ] Component renders correctly in browser
