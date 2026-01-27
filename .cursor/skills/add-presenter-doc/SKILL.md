---
name: add-presenter-doc
description: Create presenter documentation for Cursor features. Use when adding new feature docs, creating demo guides, or documenting Cursor capabilities for presenters.
---

# Add Presenter Doc

Create documentation for the presenter-docs system following established conventions.

## Structure

Presenter docs live in `docs/presenter-docs/Features/` with this structure:

```
docs/presenter-docs/Features/
└── Feature-Name/
    └── Feature-Name.md
```

Complex features may include sections:

```
docs/presenter-docs/Features/
└── Feature-Name/
    ├── Feature-Name.md
    └── _sections/
        ├── Section-One.md
        └── Section-Two.md
```

## Document Template

Every feature doc follows this structure:

```markdown
# Feature Name

> One-line description of what the feature does.

**Docs:** [Feature Name](https://cursor.com/docs/path-to-official-docs)

## Overview

Brief explanation of the feature and its purpose.

---

## 1. Section Title

> Callout explaining why this matters or context.

### Demo Prompts (if applicable)

- [Demo Name](cursor://anysphere.cursor-deeplink/prompt?text=URL%20encoded%20prompt)

**Screenshot description:**

![Alt text](https://colony-recorder.s3.amazonaws.com/path/to/image.jpeg)

---

## Quick Reference

| Action | How |
|--------|-----|
| Action 1 | Steps |
| Action 2 | Steps |

---

## Cleanup

Use [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) to undo all changes and restore the workspace to a clean state.
```

## Conventions

1. **Numbered sections** - Use `## 1. Section Title` format
2. **Callouts** - Use `> blockquote` for context/explanations
3. **Deep links** - Use `cursor://anysphere.cursor-deeplink/prompt?text=` for demo prompts
4. **Screenshots** - Reference external URLs (Colony Recorder S3)
5. **Tables** - Use for Quick Reference and comparisons
6. **Cleanup section** - Always include `/reset` link at the end

## Deep Link Format

Cursor deep links launch prompts directly:

```
cursor://anysphere.cursor-deeplink/prompt?text=URL%20encoded%20text
```

URL encode the prompt text. Spaces become `%20`, newlines become `%0A`.

## Workflow

### Step 1: Create the Feature Directory

```bash
mkdir -p docs/presenter-docs/Features/{Feature-Name}
```

### Step 2: Create the Main Doc

Create `{Feature-Name}.md` following the template above.

### Step 3: Link to Official Docs

Always include a link to the official Cursor docs at the top.

### Step 4: Add to Features README

Update `docs/presenter-docs/Features/README.md` to include the new feature in the appropriate section.

### Step 5: Test Deep Links

Verify any deep links work by clicking them in the rendered markdown.

## References

For detailed examples of existing feature docs, see:
- `Rules/Rules.md` - Comprehensive feature with multiple sections and screenshots
- `Browser/Browser.md` - Feature with demo prompts and visual guides
- `Bugbot/Bugbot.md` - Simple feature with step-by-step demo

Read these files for patterns: [references/EXAMPLES.md](references/EXAMPLES.md)

## Checklist

Before completing:

- [ ] Doc follows the template structure
- [ ] Official docs link included
- [ ] Deep links are URL-encoded correctly
- [ ] Added to Features README.md
- [ ] Cleanup section with `/reset` link
- [ ] Screenshots have descriptive alt text
