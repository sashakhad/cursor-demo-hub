# Cursor 101 Demo Flow

An introductory walkthrough of Cursor's core features for new users.

---

## Prerequisites

Before starting the demo:

1. **Start the server:** Run [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) to launch the development server and open the blog app in the browser
2. **Reset workspace:** Use [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) between sections to ensure a clean state for deterministic results

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

### Saving Custom Layouts

1. Arrange your panels as desired
2. Click "Change Layout" in the view menu
3. Save as a custom layout
4. Switch between saved layouts as needed

### What to Highlight

- Familiar VS Code experience with AI enhancements
- Customizable panel arrangement for different workflows
- Agent panel is always accessible via `Cmd+L`

### Tips

- Use keyboard shortcuts to toggle panels quickly
- Save different layouts for coding vs. AI-assisted tasks
- The agent panel can be resized or detached

---

## 2. [Tab + Quick Edit](../Features/Tab-Quick-Edit/Tab-Quick-Edit.md)

> Tab provides context-aware, multi-line code suggestions as you type. Quick Edit (Cmd+K) lets you edit code using natural language.

### How Tab Works

Cursor indexes your entire codebase to understand:
- Your project's conventions and patterns
- Existing components and utilities
- Import structures and dependencies

**Tab is a specialized Cursor model for autocompletion.** The more you use it, the better it becomes as you inject intent by accepting (`Tab`) or rejecting (`Escape`) suggestions.

### Tab Capabilities

| Capability | Description |
|------------|-------------|
| **Multi-line edits** | Modify multiple lines at once |
| **Auto-imports** | Add import statements when missing |
| **Cross-file jumps** | Jump within and across files for coordinated edits |
| **Contextual awareness** | Suggestions based on recent changes, linter errors, and accepted edits |

### 2a. Tab Autocomplete Demo

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

- **Codebase understanding:** Tab uses full codebase context to understand conventions
- **Learns your style:** The more you use it, the more it adapts to your preferences
- **Feels like mind-reading:** Power users report Tab predicting exactly what they want
- **Quick Edit is surgical:** Only changes what you select
- **Both work inline:** No context switching—stay in your editor

### Best Practices

- **Tab:** Start with hints in comments or partial code to guide suggestions
- **Accept/Reject signals:** Each `Tab` accept or `Escape` reject teaches the model your preferences
- **Quick Edit:** Be specific about what you want changed
- **Combine them:** Use Tab for building, Quick Edit for refining

> **Reset:** Use [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) before moving to Agent Chat

---

## 3. [Agent Chat](../Features/Agent-Chat/Agent-Chat.md)

> Agent Chat is the command center for agentic workflows. An agent can read, write, and execute code across your entire codebase.

---

### 3.1 Agent Configuration

> Configure the agent before starting work—choose your mode, model, and how you'll provide context.

#### Agent Modes

Show the mode dropdown and explain each:

| Mode | Use Case |
|------|----------|
| **Agent** | Execute code changes (default) |
| **Plan** | Create implementation plans |
| **Debug** | Hypothesis-driven bug fixing |
| **Ask** | Read-only codebase exploration |

#### Model Selection

1. Click the model dropdown
2. Explain options: **Composer 1** (fast), **Auto** (smart selection), frontier models
3. Show **Cursor Settings > Models** for enabling/disabling models:
   - Open **Cursor** menu > **Cursor Settings**
   - Navigate to **Models**
   - Click **View All Models** to see all available options
   - Enable or disable models based on your needs

#### Adding Context

Demonstrate the `@` context menu:

- **@Files** - Reference specific files
- **@Folders** - Include entire directories
- **@Docs** - Library documentation (Zod, React, etc.)
- **@Terminal** - Pipe terminal output to agent
- **@Past Chats** - Reference previous conversations

#### Image Upload

Show how to add visual context:

1. Click the image upload button (camera icon)
2. Select an image (mockup, screenshot, error message)
3. The image appears in the chat as context
4. Submit your prompt with the image

Use cases: UI mockups, error screenshots, design references

#### Voice Input

Demonstrate voice-to-prompt:

1. Click the microphone button
2. Speak your prompt naturally
3. Cursor transcribes and submits
4. Great for rapid iteration without typing

#### Execution Mode

Explain where agents run:

| Mode | Description |
|------|-------------|
| **Local** | Runs on your machine with full access to local files |
| **Cloud** | Runs on Cursor's cloud infrastructure |
| **Worktree** | Run parallel agents in isolated worktrees (advanced) |

Show the mode selector at the bottom of the chat panel.

#### Context Window Management

Explain context usage:

1. Show the context usage indicator (bottom of chat)
2. As conversations grow, context fills up
3. When full, Cursor summarizes and resets
4. **Best Practice:** Use atomic tasks—one focused task per agent, start new agents for new tasks

---

### 3.2 Working with the Agent

> Now that the agent is configured, walk through common workflows and code changes.

#### Starting the Server

- [Start the development server](cursor://anysphere.cursor-deeplink/prompt?text=Start%20the%20server)

1. Click the deep link or type "Start the server"
2. Agent inspects project config (package.json)
3. Agent requests permission to run terminal command
4. Show permission options: **Ask every time**, **Run in sandbox**, **Run everything**
5. Configure defaults in **Cursor Settings > Agents**

#### Making Code Changes

- [Change sidebar color to blue](cursor://anysphere.cursor-deeplink/prompt?text=Change%20the%20background%20color%20of%20the%20sidebar%20to%20blue%20%40SideBar.tsx)

1. Click the deep link above
2. Click **Create Chat**
3. Select **composer-1** for speed
4. Watch the agent make changes
5. Click **Review Changes** to see the diff
6. **Keep** or **Undo** the changes

#### Fixing Bugs from Terminal Output

Show how to pipe errors directly to the agent:

1. Introduce a bug: Use [/introduce-runtime-bug](cursor://anysphere.cursor-deeplink/prompt?text=%2Fintroduce-runtime-bug)
2. See the error in terminal
3. Select the error text
4. Press `Cmd+L` to add to chat
5. Submit to have the agent fix it

#### Using Documentation

**Built-in Docs:**

- [Add validation with Zod](cursor://anysphere.cursor-deeplink/prompt?text=Add%20validation%20to%20my%20search%20input%20using%20%40Zod.%20Limit%20to%20100%20characters%20and%20block%20special%20characters.)

1. Type `@docs` in the chat
2. Search for "Zod" (or React, Next.js, etc.)
3. Select the documentation
4. Reference it in your prompt

**Adding Custom Docs:**

1. Click **Add Context** button (or type `@`)
2. Select **Docs**
3. Scroll to bottom, click **Add new doc**
4. Paste the documentation URL (e.g., your internal docs, lesser-known libraries)
5. Cursor indexes it for future use
6. Now you can reference it with `@docs`

#### Git Diff Context

Show how to review changes against main:

- [Explain changes against main](cursor://anysphere.cursor-deeplink/prompt?text=Explain%20the%20changes%20that%20have%20been%20made%20%40Git%20%28Diff%20with%20Main%20Branch%29)

1. Type `@Git` in the chat
2. Select **Diff with Main Branch**
3. Ask the agent to explain or summarize changes
4. Useful for: understanding feature branches, generating commit messages, code review prep

#### Demo: Implement Dark Mode

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
| Chat History | `Opt+Cmd+'` |
| Start demo server | [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) |
| Reset workspace | [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) |
| Add to chat | Select + `Cmd+L` |

---

## Next Steps

After Cursor 101, explore:

- **[Plan Mode](../Features/Agent-Chat/Plan-Mode.md)** - Detailed implementation planning
- **[Debug Mode](../Features/Agent-Chat/Debug-Mode.md)** - Hypothesis-driven debugging
- **[Browser](../Features/Browser/Browser.md)** - Built-in browser testing
- **[Worktrees](../Features/Worktrees/Worktrees.md)** - Parallel agents and Best of N
