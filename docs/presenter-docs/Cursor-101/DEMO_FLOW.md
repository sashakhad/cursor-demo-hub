# Cursor 101 Demo Flow

An introductory walkthrough of Cursor's core features for new users.

---

## Prerequisites

Before starting the demo:

1. **Start the server:** Run `/start-demo` to launch the development server and open the blog app in the browser
2. **Reset workspace:** Use `/reset` between sections to ensure a clean state for deterministic results

> **📝 Deep Links:** Throughout this demo, clickable links like `[Example Link]` open a "Create chat with prompt" dialog. Click **"Create Chat"** to start the agent with the pre-filled prompt.

---

## 1. [Layout Walkthrough](../Features/Layout-Walkthrough/Layout-Walkthrough.md)

> Cursor is an IDE forked from VS Code, now fully built out with AI-native features. Understanding the layout helps you navigate efficiently.

### Key Areas

| Area | Location | Purpose |
|------|----------|---------|
| File Explorer | Left sidebar | Navigate project files |
| Editor | Center | View and edit code |
| Terminal | Bottom panel | Run commands |
| Agent Panel | Right sidebar | AI chat and agent interactions |

### Demo Flow

1. Show the **File Explorer** - click folder icon (left)
2. Open the **Terminal** - click terminal area (bottom)
3. Open the **Agent Panel** - click chat icon (right) or `Cmd+L`
4. Demonstrate **Custom Layouts** - save and switch between layouts

### What to Highlight

- Familiar VS Code experience with AI enhancements
- Customizable panel arrangement for different workflows
- Agent panel is always accessible via `Cmd+L`

---

## 2. [Tab + Quick Edit](../Features/Tab-Quick-Edit/Tab-Quick-Edit.md)

> Tab provides context-aware, multi-line code suggestions as you type. Quick Edit (Cmd+K) lets you edit code using natural language.

### 2a. Tab Autocomplete

**Demo:** Open an empty component file and watch Tab predict your intent.

1. Open `app/components/Footer.tsx` (empty placeholder file)
2. Start typing `f` or `function`
3. Watch Tab suggest a complete Footer component
4. Press `Tab` to accept suggestions
5. Type hints like "newsletter signup" to guide it
6. Tab uses your existing codebase patterns

### 2b. Quick Edit (Cmd+K)

**Demo:** Make surgical edits to existing code with natural language.

1. Open any component (e.g., `SideBar.tsx`)
2. Select a section of code
3. Press `Cmd+K`
4. Type: "make this more colorful" or "add hover effects"
5. Review the diff preview
6. Click **Accept** or **Reject**

### What to Highlight

- Tab learns your patterns and style
- Quick Edit only changes what you select (surgical)
- Both work without leaving the editor
- Combine them: Tab for building, Quick Edit for refining

> **Reset:** Use `/reset` before moving to Agent Chat

---

## 3. [Agent Chat](../Features/Agent-Chat/Agent-Chat.md)

> Agent Chat is the command center for agentic workflows. An agent can read, write, and execute code across your entire codebase.

### 3a. Agent Modes

Show the mode dropdown and explain each:

| Mode | Use Case |
|------|----------|
| **Agent** | Execute code changes (default) |
| **Plan** | Create implementation plans |
| **Debug** | Hypothesis-driven bug fixing |
| **Ask** | Read-only codebase exploration |

### 3b. Model Selection

1. Click the model dropdown
2. Explain options: **Composer 1** (fast), **Auto** (smart selection), frontier models
3. Show **Cursor Settings > Models** for enabling/disabling models

### 3c. Adding Context

Demonstrate the `@` context menu:

- **@Files** - Reference specific files
- **@Folders** - Include entire directories
- **@Docs** - Library documentation (Zod, React, etc.)
- **@Terminal** - Pipe terminal output to agent

### 3d. Making Changes

- [Change sidebar color to blue](cursor://anysphere.cursor-deeplink/prompt?text=Change%20the%20background%20color%20of%20the%20sidebar%20to%20blue%20%40SideBar.tsx)

1. Click the deep link above
2. Click **Create Chat**
3. Select **composer-1** for speed
4. Watch the agent make changes
5. Click **Review Changes** to see the diff
6. **Keep** or **Undo** the changes

### 3e. Terminal Output → Agent

Show how to pipe errors directly to the agent:

1. Introduce a bug: Use `/introduce-runtime-bug`
2. See the error in terminal
3. Select the error text
4. Press `Cmd+L` to add to chat
5. Submit to have the agent fix it

### 3f. Using Documentation

- [Add validation with Zod](cursor://anysphere.cursor-deeplink/prompt?text=Add%20validation%20to%20my%20search%20input%20using%20%40Zod.%20Limit%20to%20100%20characters%20and%20block%20special%20characters.)

1. Type `@docs` in the chat
2. Search for "Zod"
3. Reference documentation in your prompt
4. Show how to add custom docs via **Add new doc**

### 3g. Demo: Implement Dark Mode

End with a complete feature implementation:

- [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20for%20this%20blog%20app.%20Add%20a%20theme%20toggle%20button%20and%20persist%20the%20user%27s%20preference.)

1. Click the deep link
2. Click **Create Chat**
3. Select **composer-1**
4. Watch the agent implement the feature
5. Click **Review** to see all changes
6. Accept the changes

---

## Quick Reference

| Action | Shortcut/Command |
|--------|------------------|
| Open Agent Chat | `Cmd+L` |
| Quick Edit | `Cmd+K` |
| Accept Tab suggestion | `Tab` |
| Start demo server | `/start-demo` |
| Reset workspace | `/reset` |
| Add to chat | Select + `Cmd+L` |

---

## Next Steps

After Cursor 101, explore:

- **[Plan Mode](../Features/Agent-Chat/Plan-Mode.md)** - Detailed implementation planning
- **[Debug Mode](../Features/Agent-Chat/Debug-Mode.md)** - Hypothesis-driven debugging
- **[Browser](../Features/Browser/Browser.md)** - Built-in browser testing
- **[Worktrees](../Features/Worktrees/Worktrees.md)** - Parallel agents and Best of N
