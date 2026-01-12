# macOS Setup Guide

Complete setup instructions for running the Cursor Demo Hub on a Mac. Designed for users who may not have development tools installed.

## Overview

This guide covers installing all required dependencies and setting up the Cursor Demo Hub. The repository will be installed at:

```
~/Documents/Code/cursor-demo-hub
```

## System Requirements

| Requirement | Version | Purpose |
|-------------|---------|---------|
| macOS | 12+ (Monterey or later) | Operating system |
| Homebrew | Latest | Package manager for macOS |
| Git | Any | Version control |
| Node.js | 20+ | JavaScript runtime |
| pnpm | 10+ | Fast package manager |
| Cursor | Latest | AI-powered code editor |

## Dependency Installation

### Step 1: Homebrew

Homebrew is a package manager that makes installing software easy on macOS. It will also install Git automatically.

**Check if installed:**
```bash
brew --version
```

**Install if missing:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Important:** After installation, add Homebrew to your PATH:

For Apple Silicon Macs (M1/M2/M3):
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

For Intel Macs:
```bash
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/usr/local/bin/brew shellenv)"
```

**Verify:**
```bash
brew --version
```

---

### Step 2: Git

Git is version control software needed to download the repository.

**Check if installed:**
```bash
git --version
```

**Install if missing:**
```bash
brew install git
```

**Verify:**
```bash
git --version
```

---

### Step 3: Node.js

Node.js is the JavaScript runtime required to run the demo application.

**Check if installed:**
```bash
node --version
```

Should show `v20.x.x` or higher.

**Install if missing or outdated:**
```bash
brew install node@20
```

**Verify:**
```bash
node --version
```

---

### Step 4: pnpm

pnpm is a fast, efficient package manager used by this project.

**Check if installed:**
```bash
pnpm --version
```

**Install if missing:**
```bash
npm install -g pnpm
```

**Verify:**
```bash
pnpm --version
```

---

### Step 5: Cursor

Cursor is an AI-powered code editor—the tool you'll be demoing.

**Download:**
- Go to [cursor.com/download](https://cursor.com/download)
- Download for macOS
- Drag Cursor.app to Applications

**Install the CLI command (optional):**
1. Open Cursor
2. Press `Cmd+Shift+P` to open the command palette
3. Type "Install 'cursor' command" and select it

**Verify:**
```bash
cursor --version
```

---

### Step 6: GitHub CLI (Optional)

Required only if you want to demo PR creation features.

**Install:**
```bash
brew install gh
```

**Authenticate:**
```bash
gh auth login
```

Follow the prompts to log in with your GitHub account.

---

## Repository Setup

### Clone the Repository

```bash
# Create the directory structure
mkdir -p ~/Documents/Code

# Clone the repository
cd ~/Documents/Code
git clone https://github.com/sashakhad/cursor-demo-hub.git

# Navigate into it
cd cursor-demo-hub
```

### Install Dependencies

```bash
pnpm install
```

### Open in Cursor

**Option 1: Terminal** (if you installed the CLI)
```bash
cursor ~/Documents/Code/cursor-demo-hub
```

**Option 2: Cursor UI**
1. Open Cursor
2. File → Open Folder
3. Navigate to `Documents/Code/cursor-demo-hub`
4. Click "Open"

---

## Verify Setup

Run these commands to confirm everything is working:

```bash
# Check versions
node --version    # Should be 20+
pnpm --version    # Should be 10+
git --version     # Should show version

# Check repository
ls ~/Documents/Code/cursor-demo-hub
```

---

## Starting the Demo

Once the repository is open in Cursor:

1. Open Agent Chat: `Cmd+L`
2. Type `/start-demo`
3. Press Enter
4. Wait for the blog app to appear in Cursor's browser
5. You're ready to demo!

---

## Troubleshooting

### "command not found: brew"

Homebrew isn't in your PATH. Run:

```bash
# Apple Silicon
eval "$(/opt/homebrew/bin/brew shellenv)"

# Intel
eval "$(/usr/local/bin/brew shellenv)"
```

### "command not found: git"

Install Git via Homebrew:

```bash
brew install git
```

### "command not found: node"

Node.js isn't installed or not in PATH:

```bash
brew install node@20
```

### "command not found: pnpm"

Install pnpm:

```bash
npm install -g pnpm
```

### "command not found: cursor"

Install the Cursor CLI:
1. Open Cursor
2. `Cmd+Shift+P` → "Install 'cursor' command"

### Git clone fails with permission error

The repository is public, so this shouldn't happen. If it does:

```bash
# Check if you can reach GitHub
curl -I https://github.com

# Try cloning with verbose output
GIT_CURL_VERBOSE=1 git clone https://github.com/sashakhad/cursor-demo-hub.git
```

### pnpm install fails

Make sure you're in the correct directory:

```bash
cd ~/Documents/Code/cursor-demo-hub
pnpm install
```

If it still fails, try clearing the cache:

```bash
pnpm store prune
pnpm install
```

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `brew install git` | Install Git |
| `brew install node@20` | Install Node.js |
| `npm install -g pnpm` | Install pnpm |
| `cursor .` | Open current folder in Cursor |
| `/start-demo` | Start the demo (in Cursor) |
| `/reset` | Reset workspace (in Cursor) |
