# Cursor Demos

A standardized demo repository for showcasing Cursor's AI-powered coding capabilities. Built for Account Executives, Technical Account Managers, and anyone demoing Cursor to customers.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/fieldsphere/cursor-demos.git
cd cursor-demos

# Open in Cursor
cursor .
```

Once open in Cursor, run [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) to install dependencies, start the server, and begin demoing.

## 📖 Start Here

**→ [Presenter Documentation](./docs/presenter-docs/README.md)**

The presenter docs contain everything you need:
- Step-by-step demo flows (Cursor 101, Cursor 2.0)
- Individual feature guides with screenshots
- Slash commands for demo setup and reset
- Tips for delivering great demos

## Quick Reference

| Action | Shortcut / Command |
|--------|-------------------|
| Open Agent Chat | `Cmd+L` |
| Inline Edit | `Cmd+K` |
| Accept Tab suggestion | `Tab` |
| Start demo session | [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) |
| Start app only | [/start-app](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-app) |
| Reset workspace | [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) |

## The Demo App

This repository includes a Next.js blog application used as the demo target:

- **Next.js 15** with App Router
- **TypeScript** for type-safe development
- **Tailwind CSS** for styling
- **Markdown** for blog content

You don't need to understand the app deeply—just follow the presenter guides.

## GitHub CLI Setup

```bash
# Install (macOS)
brew install gh

# Authenticate
gh auth login

# Clone
gh repo clone fieldsphere/cursor-demos
```
