# Component Patterns Reference

Detailed examples from this codebase for reference when creating new components.

## Pattern 1: Simple Variant Component

From `Button.tsx` - multiple visual variants with shared base styles:

```tsx
interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "pagination" | "pagination-active";
  className?: string;
}

function Button({ onClick, children, variant = "primary", className = "" }: ButtonProps) {
  const baseStyles = "rounded-lg px-4 py-2 transition-colors duration-100 ease-in";
  
  const variantStyles = {
    primary: "bg-dev-accent text-white hover:opacity-90",
    secondary: "bg-white text-dev-primary hover:bg-opacity-90 shadow-md",
    pagination: "text-white hover:bg-white hover:text-dev-primary",
    "pagination-active": "bg-dev-primary text-white border border-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
```

Key points:
- Separate `baseStyles` (shared) from `variantStyles` (per-variant)
- Default variant specified in destructuring
- `className` always appended last for overrides

## Pattern 2: Layout Component

From `Container.tsx` - structural component with layout variants:

```tsx
interface ContainerProps {
  children: ReactNode;
  variant?: "content" | "post";
  className?: string;
}

function Container({ children, variant = "content", className = "" }: ContainerProps) {
  const variantStyles = {
    content: "box-border flex w-full flex-col items-start gap-10 px-20 pt-5",
    post: "box-border flex w-full flex-col items-start justify-center gap-2 pl-16 pr-4 pt-3 md:px-20 md:pt-5",
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
```

Key points:
- No base styles when variants are completely different
- Responsive utilities (`md:`) in variant strings
- Simple wrapper div pattern

## Pattern 3: Client Component with State

From `VisitorCounter.tsx` - data fetching with loading states:

```tsx
"use client";

import { useEffect, useState } from "react";

interface Stats {
  totalViews: number | null;
  uniqueVisitors: number | null;
}

export function VisitorCounter() {
  const [stats, setStats] = useState<Stats>({
    totalViews: null,
    uniqueVisitors: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/stats");
        const data = await response.json();
        setStats({
          totalViews: data.totalViews,
          uniqueVisitors: data.uniqueVisitors,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="...">
        <span className="animate-pulse">Loading stats...</span>
      </div>
    );
  }

  if (stats.totalViews === null) {
    return null;
  }

  return (
    <div className="...">
      {/* Render stats */}
    </div>
  );
}
```

Key points:
- `"use client"` directive at top
- Typed state interface
- Loading and error states handled
- Named export (exception to default export rule for some client components)

## Pattern 4: Form Input Component

From `Input.tsx` - controlled input with event handlers:

```tsx
interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

function Input({ value, onChange, onInput, placeholder = "", className = "" }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onInput={onInput}
      placeholder={placeholder}
      className={`flex-grow rounded-lg bg-dev-card p-4 text-base text-dev-text placeholder-dev-secondary ${className}`}
      style={{ border: '1px solid rgba(6, 48, 43, 0.3)' }}
    />
  );
}
```

Key points:
- Explicit React event types for handlers
- Optional handlers with `?`
- Inline style only when Tailwind doesn't suffice

## Pattern 5: Click Handler Component

From `TextLink.tsx` - interactive element without navigation:

```tsx
interface TextLinkProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "default" | "underline" | "dev";
  className?: string;
}

function TextLink({ onClick, children, variant = "default", className = "" }: TextLinkProps) {
  const variantStyles = {
    default: "text-white cursor-pointer transition-colors hover:opacity-70",
    underline: "text-white cursor-pointer underline hover:font-semibold",
    dev: "text-dev-text cursor-pointer hover:underline",
  };

  return (
    <span
      onClick={onClick}
      className={`${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
```

Key points:
- Uses `<span>` not `<a>` for non-navigation clicks
- `cursor-pointer` always included for clickable elements
- Hover states defined in variant styles
