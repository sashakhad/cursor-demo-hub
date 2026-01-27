# Presenter Doc Examples

Reference patterns from existing feature documentation.

## Pattern 1: Simple Feature (Bugbot)

Minimal structure for straightforward features:

```markdown
# Feature Name

> One-line description.

**Docs:** [Link](https://cursor.com/docs/...)

## Prerequisites

- Requirement 1
- Requirement 2

## Demo

### Step 1: Do something

- [Deep Link](cursor://anysphere.cursor-deeplink/prompt?text=...)

**Screenshot description:**

![Alt text](url)

### Step 2: Next step

Description of what happens.

### What to Highlight

- Key point 1
- Key point 2
```

## Pattern 2: Feature with Collapsible Sections (Commands)

Use `<details>` for content-heavy features:

```markdown
## Overview

Brief intro.

---

<details>
<summary>1. Section Title</summary>

> Context callout.

Content here.

![Screenshot](url)

</details>

---

<details>
<summary>2. Another Section</summary>

More content.

</details>
```

## Pattern 3: Feature with Sub-features (Worktrees)

When a feature has distinct modes or capabilities:

```markdown
# Feature Name (Sub-feature 1 & Sub-feature 2)

This feature combines two capabilities:
- **Sub-feature 1:** Description
- **Sub-feature 2:** Description

---

## Sub-feature 1

### Demo Prompts

- [Prompt 1](deep-link)
- [Prompt 2](deep-link)

Screenshots and explanation.

---

## Sub-feature 2

### Setup

Configuration steps.

### Demo

- [Demo Link](deep-link)

Screenshots and explanation.
```

## Pattern 4: Comprehensive Feature (Rules)

Full structure with multiple application modes:

```markdown
# Feature Name

> Description.

**Docs:** [Link](url)

## Overview

What the feature is for.

---

## 1. What It's For

- Use case 1
- Use case 2

---

## 2. Accessing the Feature

Screenshots of how to get there.

---

## 3. Configuration Options

| Option | Description |
|--------|-------------|
| Option A | What it does |
| Option B | What it does |

---

## 4. Creating New [Thing]

Step-by-step with screenshots.

---

## 5. Mode A

> Callout explaining when to use.

Screenshots and configuration.

---

## 6. Mode B

> Different context.

Example workflow.

---

## Best Practices

| Do | Don't |
|----|-------|
| Good practice | Bad practice |

### Caution

Warnings about common mistakes.

---

## Quick Reference

| Action | Location |
|--------|----------|
| Action 1 | Where |
```

## Deep Link Examples

### Simple prompt

```
cursor://anysphere.cursor-deeplink/prompt?text=Add%20dark%20mode
```

### Multi-line prompt

```
cursor://anysphere.cursor-deeplink/prompt?text=Step%201%3A%20Do%20this%0A%0AStep%202%3A%20Do%20that
```

### Prompt with code

```
cursor://anysphere.cursor-deeplink/prompt?text=Replace%20this%20code%3A%0A%0A%60%60%60typescript%0Aconst%20x%20%3D%201%3B%0A%60%60%60
```

## Screenshot Conventions

- Use descriptive text before the image: `**Description of what the screenshot shows:**`
- Alt text should describe what's visible
- External URLs (Colony Recorder S3) for actual screenshots
- Placeholder images during development: `placeholder-feature-name.jpeg`

## Table Conventions

### Quick Reference tables

```markdown
| Action | How |
|--------|-----|
| Do X | Steps to do X |
| Do Y | Steps to do Y |
```

### Comparison tables

```markdown
| Feature | Option A | Option B |
|---------|----------|----------|
| Aspect 1 | Value | Value |
| Aspect 2 | Value | Value |
```

### Do/Don't tables

```markdown
| Do | Don't |
|----|-------|
| Good practice | Bad practice |
| Another good | Another bad |
```
