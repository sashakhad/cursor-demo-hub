# Agent Chat

> The command center for agentic workflows within Cursor.

Agent Chat is where you interact with AI agents that can read, write, and execute code. This directory contains documentation for the main Agent Chat interface and its specialized modes.

## Contents

| Feature | Description | Files |
|---------|-------------|-------|
| [Agent Chat](./Agent-Chat.md) | Core agent interface, context, models, and workflows | [text](./Agent-Chat.md) \| [screenshots](./Agent-Chat.screenshots.md) |
| [Ask Mode](./Ask-Mode.md) | Explore codebases without making changes (read-only) | [text](./Ask-Mode.md) \| [screenshots](./Ask-Mode.screenshots.md) |
| [Plan Mode](./Plan-Mode.md) | Create implementation plans before writing code | [text](./Plan-Mode.md) \| [screenshots](./Plan-Mode.screenshots.md) |
| [Debug Mode](./Debug-Mode.md) | Hypothesis-driven debugging to find root causes | [text](./Debug-Mode.md) \| [screenshots](./Debug-Mode.screenshots.md) |

## Agent Modes Overview

| Mode | Use Case | Makes Changes? |
|------|----------|----------------|
| **Agent** | Execute code changes across your codebase | ✅ Yes |
| **Ask** | Learn about the codebase, answer questions | ❌ No (read-only) |
| **Plan** | Create detailed plans before implementation | ❌ No (planning only) |
| **Debug** | Find and fix bugs with hypothesis testing | ✅ Yes |

## Quick Start

1. Open Agent Chat with `Cmd+L`
2. Select your mode from the dropdown (default: Agent)
3. Choose a model (Auto, Composer 1, or frontier models)
4. Add context with `@` mentions (files, folders, docs)
5. Type your prompt and submit

## Docs

- [Agent Chat Overview](https://docs.cursor.com/chat/overview)
- [Agent Modes](https://docs.cursor.com/chat/modes)

