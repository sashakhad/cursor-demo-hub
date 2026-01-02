# Cursor 201 Demo Flow

An intermediate walkthrough covering Rules, Commands, Context Management, and Model Selection.

---

## Rules

## Overview

Rules live in the `.cursor` directory and can be applied at the project, user, or team level. They help ensure the AI behaves consistently and follows your conventions.

---

## 1. What Rules Are For

- Define consistent behavior across the codebase
- Enforce style guides and engineering standards
- Scope behavior to specific parts of the project using glob patterns
- Govern how models communicate with you

---

## 2. Accessing Rules

1. Open **Cursor** menu > **Cursor Settings** (or `Cmd+Shift+J`)
2. Navigate to **Rules and Commands**

---

## 3. Rule Levels

Rules can be configured at three levels:

| Level | Scope | Use Case |
|-------|-------|----------|
| **User** | Your personal settings | Rules you want globally for yourself |
| **Project** | Repository-specific | Conventions specific to this codebase |
| **Team** | Shared across team | Consistent behavior across your organization |

---

## 4. Creating a Custom Rule

1. Go to **Cursor Settings > Rules and Commands**
2. Click **Add Rule**
3. Select **Custom Rule** (or add a remote rule from GitHub)
4. Name your rule
5. Write the rule content
6. Choose the application mode

---

## 5. Always Apply

> Use **Always Apply** for rules that should be active in every conversation.

Let's create a rule called `ai-behavior` to prevent the agent from being overly agreeable. We'll tell it to never say "You're absolutely right" — keeping responses direct and honest.

Here's the snippet you can copy and paste:

```
- Be concise and direct.
- Do not use filler language or excessive politeness.
- Never say phrases that placate the user, such as:
  - "You are absolutely right"
  - "Great question"
- If a suggestion is made, briefly explain why it is correct.
- When uncertain, state assumptions clearly instead of guessing.
```

---

## 6. Apply to Specific Files

> Glob patterns let you enforce style guides for specific parts of your codebase.
>
> For example, React components (`.tsx` files in your components directory) are frontend code with their own conventions — Tailwind for styling, specific naming patterns, component structure. You don't want those rules applying to your backend API code. This keeps your code style coherent and consistent when written by the agent.

When you want rules to apply only to specific files, use **Apply to Specific Files** with glob patterns.

| Pattern | Matches |
|---------|---------|
| `app/components/**/*.tsx` | React components (frontend) |
| `lib/**/*.ts` | Library utilities |
| `**/*.test.ts` | Test files |

---

## 7. Apply Intelligently

> Some rules are hard to target with glob patterns.
>
> Take validation: you need it on the frontend (when users type into form inputs) and on the backend (when API requests come in). You never know when a malicious user might try to send bad data, so you validate in both places — that's a security best practice. Since validation code lives in multiple directories, you let the agent decide when the rule applies.

For rules that span multiple areas, use **Apply Intelligently** with a clear description. The agent reads the description and applies the rule when it's relevant.

---

## 8. Apply Manually

> Sometimes you want a rule only for a specific task.
>
> Refactoring is a good example: you want the agent to change a library or update a service, but you don't want it changing any core behavior — same functionality, cleaner code. You wouldn't want this rule always active (it would block legitimate feature work), so you tag it manually when you need it.

Use **Apply Manually** for situational rules you only need sometimes.

```
- Do not change behavior, only refactor
- Preserve all existing functionality
- Update library/service calls only
```

Tag manual rules in chat using `@rule-name` to activate them (in this example, `@refactor`).

---

## Best Practices

| Do | Don't |
|----|-------|
| Keep rules small and focused | Create rules for everything |
| Apply glob patterns for targeted areas | Fill the context window with large rule files |
| Use clear, actionable instructions | Write vague or overly detailed rules |
| Test rules and iterate | Assume rules work without validation |

### Caution

- Rules fill the context window when active
- Very large rules can degrade model performance
- Use rules judiciously at both team and project levels

---

## Quick Reference

| Action | Location |
|--------|----------|
| Open Rules Settings | **Cursor Settings > Rules and Commands** |
| Create Project Rule | **Project Rules > Add Rule** |
| Create Team Rule | **Team Rules > Add Rule** |
| Tag Manual Rule | Type `@rule-name` in chat |



---

## Commands

<!-- Content will be added via /cursor-201/add-section -->

---

## Context Management

<!-- Content will be added via /cursor-201/add-section -->

---

## Model Selection Strategies

<!-- Content will be added via /cursor-201/add-section -->

---

## Plan Mode

<!-- Content will be added via /cursor-201/add-section -->

---

## Debug Mode

<!-- Content will be added via /cursor-201/add-section -->

