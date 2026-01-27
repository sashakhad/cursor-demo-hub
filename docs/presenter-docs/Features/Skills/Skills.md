# Skills (WIP)

> Skills are portable, version-controlled packages that teach agents how to perform domain-specific tasks. They can include instructions, scripts, references, and assets.

**Docs:** [Agent Skills](https://cursor.com/docs/context/skills)

## Overview

Skills extend AI agents with specialized capabilities. Unlike rules (which modify behavior), skills package complete workflows—domain knowledge, executable scripts, and reference materials—that agents invoke to complete specific tasks.

Skills are automatically discovered from `.cursor/skills/` and appear in Cursor Settings under the **Agent Decides** section.

---

## 1. Skills vs Rules vs Commands

| Feature | Purpose | Invocation |
|---------|---------|------------|
| **Skills** | Teach agents domain-specific workflows with scripts and references | Auto-detected by agent, or `/skill-name` |
| **Rules** | Modify agent behavior and enforce conventions | Always apply, glob patterns, or manual `@rule-name` |
| **Commands** | Run a specific set of instructions | Explicit `/command-name` only |

**When to use Skills:**
- Complex workflows with multiple steps
- Tasks that benefit from scripts and automation
- Domain knowledge that includes reference materials
- Reusable patterns you want to share across projects

---

## 2. Skill Structure

Skills live in `.cursor/skills/` with this structure:

```
.cursor/skills/
└── my-skill/
    ├── SKILL.md           # Required - main instructions
    ├── scripts/           # Optional - executable code
    │   └── validate.ts
    ├── references/        # Optional - detailed docs
    │   └── PATTERNS.md
    └── assets/            # Optional - templates, configs
        └── template.json
```

**View the skill structure in the file explorer:**

![Skills directory structure](placeholder-skills-structure.jpeg)

---

## 3. Creating a Skill

### Step 1: Create the skill directory

Create a new folder in `.cursor/skills/` with your skill name (lowercase, hyphens only).

### Step 2: Add SKILL.md

Every skill requires a `SKILL.md` file with YAML frontmatter:

```markdown
---
name: my-skill
description: Short description of what this skill does and when to use it.
---

# My Skill

Detailed instructions for the agent.

## When to Use

- Use this skill when...
- This skill is helpful for...

## Instructions

Step-by-step guidance for the agent.
```

**Key frontmatter fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Skill identifier (must match folder name) |
| `description` | Yes | Helps agent decide when to apply the skill |
| `disable-model-invocation` | No | When `true`, only invoked via `/skill-name` |

### Step 3: Add scripts (optional)

Include executable scripts the agent can run:

```markdown
## Validation

Run the validation script before completing:

\`\`\`bash
npx ts-node .cursor/skills/my-skill/scripts/validate.ts
\`\`\`
```

---

## 4. Demo: Add Component Skill

> This codebase includes an `add-component` skill that demonstrates the full skill structure. The skill packages component conventions, scaffold scripts, and validation into a repeatable workflow.

This codebase includes an `add-component` skill that demonstrates the full skill structure.

### View the Skill Structure

**Open `.cursor/skills/add-component/` in the file explorer:**

```
.cursor/skills/add-component/
├── SKILL.md              # Main instructions
├── scripts/
│   ├── scaffold-component.ts   # Generates boilerplate
│   └── validate-component.ts   # Checks conventions
└── references/
    └── PATTERNS.md       # Design system tokens
```

**The skill teaches the agent:**
- Component naming conventions (`{ComponentName}Props` interface)
- Variant pattern for style variations
- TailwindCSS design tokens
- When to use `"use client"`

### Invoke the Skill

Skills are automatically applied when the agent determines they're relevant. You can also invoke explicitly with `/add-component`.

**Type `/add-component` in Agent chat to attach the skill:**

![Invoke skill](placeholder-invoke-skill.jpeg)

### Demo Prompt

Use this prompt to demonstrate the skill in action:

- [Add a Badge component](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20Badge%20component%20for%20showing%20status%20labels)

### What the Agent Does

When the skill is active, the agent follows its workflow:

1. **Reads the skill instructions** — understands component conventions
2. **Scaffolds the component** — runs `scaffold-component.ts` to generate boilerplate
3. **Customizes for the use case** — adds appropriate variants (success, warning, error, info)
4. **Validates conventions** — runs `validate-component.ts` to check:
   - Has explicit props interface (no `any`)
   - Uses named function declaration
   - Has default export
   - Includes `className` prop
   - Correct `"use client"` usage
5. **Verifies the build** — runs `pnpm build` to catch TypeScript errors

**Example output from validation:**

```
Validating Badge.tsx

✓ Has BadgeProps interface
✓ Uses named function declaration
✓ Has default export
✓ Has className prop for customization
✓ Correctly a server component
✓ No "any" types found

All checks passed! ✓
```

### What to Highlight

- **Progressive loading** — The agent only reads references when needed
- **Executable scripts** — Real automation, not just instructions
- **Validation** — Catches mistakes before code review
- **Reusability** — Same workflow for every component in the project

---

## 5. Viewing Installed Skills

**Open Cursor Settings (`Cmd+Shift+J`):**

![Open Cursor Settings](placeholder-cursor-settings.jpeg)

**Navigate to Rules — skills appear in the "Agent Decides" section:**

![Skills in Agent Decides](placeholder-agent-decides.jpeg)

---

## 6. Installing Skills from GitHub

You can import skills from GitHub repositories:

1. Open **Cursor Settings → Rules**
2. Click **Add Rule** in Project Rules
3. Select **Remote Rule (Github)**
4. Enter the repository URL

**Click Add Rule:**

![Add Rule button](placeholder-add-rule.jpeg)

**Select Remote Rule (Github):**

![Remote Rule option](placeholder-remote-rule.jpeg)

---

## 7. Migrating to Skills

Cursor includes a built-in `/migrate-to-skills` command that converts:

- **Dynamic rules** (Apply Intelligently) → Standard skills
- **Slash commands** → Skills with `disable-model-invocation: true`

**Run `/migrate-to-skills` in Agent chat:**

![Migrate to skills](placeholder-migrate.jpeg)

---

## Quick Reference

| Action | How |
|--------|-----|
| View skills | Cursor Settings → Rules → Agent Decides |
| Create skill | Add folder to `.cursor/skills/` with `SKILL.md` |
| Invoke skill | Type `/skill-name` in Agent chat |
| Import from GitHub | Cursor Settings → Add Rule → Remote Rule |
| Migrate existing | Run `/migrate-to-skills` |

---

## Best Practices

| Do | Don't |
|----|-------|
| Keep `SKILL.md` under 500 lines | Put everything in one file |
| Use progressive disclosure (references/) | Load all context upfront |
| Include executable scripts for automation | Make the agent write boilerplate |
| Write clear descriptions with trigger terms | Use vague descriptions |
| Test skills before sharing | Assume they work |

---

## Cleanup

Use [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) to undo all changes and restore the workspace to a clean state.
