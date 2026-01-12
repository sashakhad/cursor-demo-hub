# Start Here

Welcome to the **Cursor Demo Hub**—everything you need to demo Cursor's features.

---

## Choose Your Setup Path

### 🟢 Easy Setup (Non-Developers)

Don't have developer tools installed? No problem—Cursor will set everything up for you.

1. [Download Cursor](https://cursor.com/download)
2. Open Cursor (you can skip any project setup—just open the app)
3. Click: [**Set Up My Mac**](cursor://anysphere.cursor-deeplink/prompt?text=Help%20me%20set%20up%20my%20Mac%20to%20run%20the%20Cursor%20Demo%20Hub.%0A%0APlease%20do%20the%20following%3A%0A%0A1.%20Check%20if%20Homebrew%20is%20installed%20%28brew%20--version%29.%20If%20not%2C%20install%20it%20with%3A%0A%20%20%20%2Fbin%2Fbash%20-c%20%22%24%28curl%20-fsSL%20https%3A%2F%2Fraw.githubusercontent.com%2FHomebrew%2Finstall%2FHEAD%2Finstall.sh%29%22%0A%20%20%20Then%20add%20to%20PATH%20%28Apple%20Silicon%3A%20eval%20%22%24%28%2Fopt%2Fhomebrew%2Fbin%2Fbrew%20shellenv%29%22%29%0A%0A2.%20Check%20if%20Git%20is%20installed%20%28git%20--version%29.%20If%20not%3A%20brew%20install%20git%0A%0A3.%20Check%20if%20Node.js%2020%2B%20is%20installed%20%28node%20--version%29.%20If%20not%3A%20brew%20install%20node%4020%0A%0A4.%20Check%20if%20pnpm%20is%20installed%20%28pnpm%20--version%29.%20If%20not%3A%20npm%20install%20-g%20pnpm%0A%0A5.%20Create%20the%20directory%20and%20clone%20the%20repo%3A%0A%20%20%20mkdir%20-p%20~%2FDocuments%2FCode%0A%20%20%20cd%20~%2FDocuments%2FCode%0A%20%20%20git%20clone%20https%3A%2F%2Fgithub.com%2Fsashakhad%2Fcursor-demo-hub.git%0A%20%20%20cd%20cursor-demo-hub%0A%0A6.%20Install%20dependencies%3A%20pnpm%20install%0A%0A7.%20Tell%20me%20to%20open%20the%20folder%20in%20Cursor%3A%20File%20%E2%86%92%20Open%20Folder%20%E2%86%92%20Documents%2FCode%2Fcursor-demo-hub%0A%0AIf%20any%20step%20fails%2C%20help%20me%20troubleshoot.%20Be%20friendly%20and%20explain%20what%20each%20step%20does.)
4. Follow the instructions—Cursor will install Homebrew, Node.js, and clone the repo
5. When done, open the folder: **File → Open Folder → Documents/Code/cursor-demo-hub**
6. Run `/start-demo` in Agent Chat to begin

<details>
<summary><strong>If something goes wrong</strong></summary>

See the [full setup guide](../feature-docs/MACOS_SETUP_GUIDE.md) for detailed troubleshooting.

Common issues:
- **Homebrew not in PATH**: Run `eval "$(/opt/homebrew/bin/brew shellenv)"` (Apple Silicon) or `eval "$(/usr/local/bin/brew shellenv)"` (Intel)
- **Permission denied**: You may need to enter your Mac password during Homebrew installation
- **Network errors**: Check your internet connection and try again

</details>

---

### 🔵 Developer Setup (Terminal)

If you're comfortable with the terminal and already have Node.js installed:

```bash
git clone https://github.com/sashakhad/cursor-demo-hub.git
cd cursor-demo-hub
pnpm install
cursor .
```

Then run `/start-demo` in Agent Chat.

<details>
<summary><strong>System requirements</strong></summary>

| Requirement | Version | Check |
|-------------|---------|-------|
| macOS | 12+ | `sw_vers` |
| Git | Any | `git --version` |
| Node.js | 20+ | `node --version` |
| pnpm | 10+ | `pnpm --version` |

**Missing something?** See the [full setup guide](../feature-docs/MACOS_SETUP_GUIDE.md).

</details>

<details>
<summary><strong>Alternative: Clone from Cursor</strong></summary>

[Clone from Cursor](cursor://anysphere.cursor-deeplink/prompt?text=Clone%20the%20repository%20https%3A%2F%2Fgithub.com%2Fsashakhad%2Fcursor-demo-hub.git)

1\. Click here

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-01/3b38f913-5e02-4073-b35b-6b30642fb3c9/ascreenshot_fe3775afd50a486185d518ad2bda0658_text_export.jpeg)

2\. Click here

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-01/83227571-4066-446a-8704-8d85ed62c206/ascreenshot_eac2d5f16417497984d40b55c6bda4e9_text_export.jpeg)

3\. Click "text field"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-01/1205a986-7ad6-441e-8bf5-bd28dec964f5/ascreenshot_6e8087d4edc74948adb2822a94144536_text_export.jpeg)

4\. Click "Open"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-01/bda94460-5959-4210-bec6-d1c0acac950f/ascreenshot_db0b94d2b57548db8b1ea5783bbe86e9_text_export.jpeg)

</details>

---

## First Run

Once the repository is open in Cursor:

1. Open Agent Chat: `Cmd+L`
2. Type `/start-demo`
3. Press Enter
4. Wait for the blog app to appear in Cursor's browser
5. You're ready to demo!

---

## Demo Guides

| Demo | Description |
|------|-------------|
| **[Cursor 2.0](/presenter-docs/Cursor-2.0/DEMO_FLOW)** | Advanced demo: Browser, Worktrees, Bugbot |
| **[Cursor 101](/presenter-docs/Cursor-101/DEMO_FLOW)** | Intro demo: Layout, Tab + Inline Edit, Agent Chat |
| **[Features](/presenter-docs/Features/README)** | Modular guides to pick and choose from |

**Tip:** Practice the demos yourself using the screenshot guides before presenting live.

---

## Quick Reference

| Action | Shortcut / Command |
|--------|-------------------|
| Open Agent Chat | `Cmd+L` |
| Inline Edit | `Cmd+K` |
| Accept Tab suggestion | `Tab` |
| Chat History | `Opt+Cmd+'` |
| Add selection to chat | Select + `Cmd+L` |
| Start demo session | `/start-demo` |
| Start app only | `/start-app` |
| Reset workspace | `/reset` |

---

<details>
<summary><strong>Slash Commands</strong></summary>

Type `/` in Agent Chat to see available commands.

### /start-demo

Prepares a clean demo environment:
1. Fetches latest from `main`
2. Creates a timestamped branch (`demo-run-YYYYMMDD-HHMMSS`)
3. Installs dependencies
4. Starts the dev server
5. Opens the app in Cursor's browser

### /start-app

Starts the server without creating a new branch:
1. Kills processes on ports 3000-3009
2. Starts the dev server
3. Opens `http://localhost:3000`

### /reset

Restores a clean state between demo sections:
1. Stashes uncommitted changes
2. Resets to HEAD
3. Removes untracked files

⚠️ Run `/reset` between features to ensure each demo starts fresh.

</details>

<details>
<summary><strong>Deep Links</strong></summary>

Clickable links like [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20for%20this%20blog%20application.%20Add%20a%20toggle%20in%20the%20header%20and%20persist%20the%20preference.) open a chat dialog with a pre-filled prompt.

**How to use:**
1. Click the deep link
2. Click "Create Chat" in the dialog
3. Select your model (recommend **Composer** for speed)
4. Submit to run the agent

**Why deep links matter:**
- Consistency – Same prompts for every presenter
- Reproducibility – Predictable results
- Speed – No typing required

</details>

<details>
<summary><strong>Tips for a Great Demo</strong></summary>

1. **Practice first** – Run through the guides yourself
2. **Run /start-demo** – Creates a clean, traceable branch
3. **Run /reset between sections** – Fresh state for each feature
4. **Use deep links** – Click, don't type
5. **Use Composer** – Cursor's agent model optimized for speed
6. **Check the browser** – Changes appear immediately

</details>

<details>
<summary><strong>Troubleshooting</strong></summary>

### "command not found: cursor"

Install the CLI:
1. Open Cursor
2. `Cmd+Shift+P` → "Install 'cursor' command"

### "command not found: pnpm"

```bash
npm install -g pnpm
```

### Port 3000 already in use

```bash
lsof -ti:3000 | xargs kill -9
```

Or run `/start-app` which handles this automatically.

### Dependencies fail to install

Check Node version:
```bash
node --version  # Should be 20+
```

See the [full setup guide](../feature-docs/MACOS_SETUP_GUIDE.md) for help.

</details>

<details>
<summary><strong>About the Demo App</strong></summary>

This repository contains a **blog application** built with Next.js, TypeScript, and Tailwind CSS. You don't need to understand the app to demo—just follow the guides.

Curious? [Ask Cursor about the codebase](cursor://anysphere.cursor-deeplink/prompt?text=Explain%20the%20structure%20of%20this%20application.%20What%20are%20the%20main%20components%2C%20how%20is%20the%20routing%20set%20up%2C%20and%20where%20does%20the%20content%20come%20from%3F).

</details>
