# onboard

# Onboard to Codebase

You are an onboarding assistant that helps new developers understand this codebase quickly and effectively.

## Task

Walk the developer through the codebase architecture, purpose, and key patterns. Be concise but thorough.

## Overview

This is **Cursor Demos** - a demo repository for showcasing Cursor's AI-powered coding capabilities. It contains:

1. **A Next.js blog application** ("Cursor Curious") used as the demo target
2. **Presenter documentation** for running demos (Cursor 101, 201, 2.0)
3. **Cursor commands and rules** for automating demo workflows

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15 | App Router, React framework |
| React | 19 | UI library |
| TypeScript | 5.9 | Type safety |
| TailwindCSS | 3.4 | Styling |
| pnpm | 10.18 | Package manager |
| gray-matter | 4.x | Markdown frontmatter parsing |
| remark/rehype | latest | Markdown to HTML processing |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── context/            # React context providers
│   ├── posts/[...slug]/    # Dynamic blog post pages
│   ├── presenter-docs/     # Documentation viewer
│   ├── page.tsx            # Home page (server component)
│   ├── homePage.tsx        # Home page (client component)
│   └── globals.css         # Global styles + Tailwind
│
├── lib/                    # Shared utilities
│   ├── posts.ts            # Blog post data fetching
│   ├── presenter-docs.ts   # Docs tree/content fetching
│   └── searchIndex.ts      # Search functionality
│
├── posts/                  # Blog content (markdown)
│   └── YYYY/MM/            # Organized by date
│
├── docs/                   # Documentation content
│   ├── presenter-docs/     # Demo guides & feature docs
│   └── feature-docs/       # PRDs and planning docs
│
├── .cursor/                # Cursor IDE configuration
│   ├── commands/           # Slash commands (/start-demo, /commit, etc.)
│   └── rules/              # AI behavior rules (.mdc files)
│
└── scripts/                # Utility scripts
    └── posts/              # Post creation helpers
```

## Key Architectural Patterns

### 1. Server/Client Component Split
- **Server components** (`page.tsx`) fetch data at build/request time
- **Client components** (`"use client"`) handle interactivity
- Example: `app/page.tsx` (server) → `app/homePage.tsx` (client)

### 2. Context for Global State
- `FilterContext` manages search/filter state across components
- Located in `app/context/FilterContext.tsx`
- Used by `SideBar` and `FilteredPosts` components

### 3. Markdown Content Pipeline
- Posts stored as `.md` files with YAML frontmatter
- `lib/posts.ts` handles:
  - Recursive file discovery
  - Frontmatter parsing (gray-matter)
  - Markdown → HTML conversion (remark)
  - Reading time calculation

### 4. Design System
- Custom color tokens in `tailwind.config.ts`:
  - `dev-primary` / `dev-accent`: #06302B (dark teal)
  - `dev-bg`: #FEFCF6 (warm white)
  - `dev-text`: #06302B
  - `dev-secondary`: 60% opacity variant
- Typography: EB Garamond (serif)
- All components use Tailwind utility classes

### 5. Component Conventions
- Functional components only (no classes)
- Explicit TypeScript interfaces for props
- Named exports preferred
- Components in `app/components/` follow rules in `.cursor/rules/react-components.mdc`

## Key Files to Know

| File | Purpose |
|------|---------|
| `lib/posts.ts` | Core data layer for blog posts |
| `app/components/FilteredPosts.tsx` | Main post list with search/pagination |
| `app/components/SideBar.tsx` | Navigation, search, date filtering |
| `app/context/FilterContext.tsx` | Global filter state |
| `tailwind.config.ts` | Design tokens and theme |
| `app/globals.css` | Base styles, prose classes |

## Available Commands

Run these via Cursor's command palette or as slash commands:

| Command | Purpose |
|---------|---------|
| `/start-demo` | Install deps, start server, begin demo |
| `/start-app` | Start the dev server only |
| `/reset` | Reset workspace to clean state |
| `/commit` | Create conventional commits automatically |
| `/create-pr` | Create/update GitHub PR |

## Quick Start for Development

1. **Install dependencies**: `pnpm install`
2. **Start dev server**: `pnpm dev` (runs on port 3000 with Turbopack)
3. **View the blog**: http://localhost:3000
4. **View presenter docs**: http://localhost:3000/presenter-docs

## Common Tasks

### Adding a new blog post
```bash
pnpm create  # Interactive post creator
```
Or manually create `posts/YYYY/MM/YYYY-MM-DD.md` with frontmatter:
```yaml
---
title: "Post Title"
date: "YYYY.MM.DD"
tags: ["tag1", "tag2"]
---
```

### Adding a new component
1. Create `app/components/ComponentName.tsx`
2. Use explicit props interface
3. Export as named function
4. Follow patterns in existing components

### Modifying styles
- Add Tailwind classes directly to components
- Custom tokens go in `tailwind.config.ts`
- Global/prose styles in `app/globals.css`

## Cursor Rules (AI Behavior)

Located in `.cursor/rules/`:
- `react-components.mdc` - React component patterns
- `refactor.mdc` - Refactoring guidelines
- `validation.mdc` - Form validation best practices

These automatically apply when editing matching files.

## Questions?

Ask me anything about:
- How specific features work
- Where to find certain code
- How to implement new features
- Best practices for this codebase

