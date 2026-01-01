# Start Here

Welcome to the **Cursor Demo Repository**—a standardized, scalable resource for demonstrating Cursor's features.

---

## Philosophy

This repository is a **medium to demonstrate Cursor's features**, not a showcase of every possible use case.

The goal is to enable **anyone**—Account Executives, Technical Account Managers, AI Deployment Managers, or anyone else (technical or non-technical)—to confidently demo Cursor without having to create their own repository structure, demo scripts, or workflows from scratch. Across hundreds of employees, this eliminates massive duplication of effort.

**What this repo is:**
- A standardized way to show Cursor 101 and 201 demos
- A systematic guide to Cursor's key features
- A consistent, reproducible demo experience
- A learning tool for mastering Cursor's capabilities

**What this repo is not:**
- A showcase for every industry or use case
- A replacement for custom demos tailored to specific customer needs

If someone says, *"This isn't applicable to us—we use Java and don't build web apps,"* that's the signal to bring in a **Field Engineer**. The Field Engineering team has created demos for different languages, frameworks, and use cases. This repository simply ensures everyone can demo Cursor's core features quickly and consistently.

---

## The Demo App

This repository contains a **blog application** built with Next.js, TypeScript, and Tailwind CSS. You don't need to understand the app deeply to demo—just follow the guides.

If you want to explore the codebase structure, [ask Cursor about the application](cursor://anysphere.cursor-deeplink/prompt?text=Explain%20the%20structure%20of%20this%20application.%20What%20are%20the%20main%20components%2C%20how%20is%20the%20routing%20set%20up%2C%20and%20where%20does%20the%20content%20come%20from%3F).

---

## Slash Commands

This repository includes pre-configured slash commands accessible from Agent Chat. Type `/` in the chat to see available commands.

### `/start-demo`

**Use this when beginning a demo session.**

[Run /start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo)

What it does:
1. Fetches the latest from `main`
2. Creates a uniquely timestamped branch (`demo-run-YYYYMMDD-HHMMSS`)
3. Starts the Next.js development server
4. Opens the app in Cursor's built-in browser

This ensures every demo starts from a clean, traceable state.

---

### `/start-app`

**Use this when you just want to start the server** (without creating a new branch).

[Run /start-app](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-app)

What it does:
1. Kills any processes running on ports 3000-3009
2. Starts the dev server in the background
3. Opens `http://localhost:3000` in Cursor's built-in browser

Use this for quick restarts or when continuing work on an existing branch.

---

### `/reset`

**Use this between demo sections to restore a clean state.**

[Run /reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset)

What it does:
1. Stashes any uncommitted changes (for safety)
2. Resets the repository to HEAD (discards local modifications)
3. Removes all untracked files and directories

⚠️ **Recommendation:** Run `/reset` between features to ensure each demo step starts from a clean slate. This prevents artifacts from previous steps affecting the next demonstration.

---

## [Deep Links](https://cursor.com/docs/integrations/deeplinks)

Throughout the documentation, you'll see clickable links like [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20for%20this%20blog%20application.%20Add%20a%20toggle%20in%20the%20header%20and%20persist%20the%20preference.). These are **deep links** that open a "Create chat with prompt" dialog with the prompt pre-filled.

**How to use them:**
1. Click the deep link in the documentation
2. Click **"Create Chat"** in the dialog that appears
3. Select your model (recommend **composer-1** for speed)
4. Submit to run the agent

**Why deep links matter:**
- **Consistency** – Every presenter uses the exact same prompts
- **Reproducibility** – Results are predictable across demos
- **Speed** – No typing required, just click and go

---

## Quick Reference

| Action | Shortcut / Command |
|--------|-------------------|
| Open Agent Chat | `Cmd+L` |
| Quick Edit | `Cmd+K` |
| Accept Tab suggestion | `Tab` |
| Chat History | `Opt+Cmd+'` |
| Add selection to chat | Select + `Cmd+L` |
| Start demo session | [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) |
| Start app only | [/start-app](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-app) |
| Reset workspace | [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) |

---

## Where to Start

The best way to learn these demos is to **run through them yourself using the screenshot versions**. Each demo guide has a `.screenshots.md` version with step-by-step visuals—follow along and practice before presenting live.

| Demo | Description |
|------|-------------|
| **[Cursor 101](./Cursor-101/)** | Intro demo: Layout, Tab + Quick Edit, Agent Chat |
| **[Cursor 2.0](./Cursor-2.0/)** | Advanced demo: Browser, Worktrees, Bugbot |
| **[Features](./Features/)** | Modular guides to pick and choose from |

---

## Tips for a Great Demo

1. **Practice with screenshots first** – Run through the `.screenshots.md` guides to learn the flow
2. **Run `/start-demo` at the beginning** – Creates a clean, traceable branch
3. **Run `/reset` between sections** – Ensures each feature demo starts fresh
4. **Use deep links** – Click, don't type, for consistent prompts
5. **Use composer-1** – Fastest model for live demos
6. **Check the browser** – Cursor's built-in browser shows your changes immediately
7. **Know when to escalate** – If the customer needs a use-case-specific demo, bring in Field Engineering

