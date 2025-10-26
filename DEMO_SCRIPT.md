# Cursor 2.0 Demo Script

## Setup Required

### Prerequisites for Commit & PR
- GitHub account required
- GitHub CLI installed (recommended, easier to use)
- Alternative: GitHub MCP can be used if preferred

## Demo Flow

### 0. Setup Dev Environment
- **Open Terminal** - Press Shift+Command+P, type "terminal", select "Terminal: Create New Terminal"
- **Start Dev Server** - Run `pnpm run dev` in the terminal
- **Open Browser** - Navigate to the local development URL (typically http://localhost:3000)
- Explain that this is a blog application we built
- Show the current state before we make changes

### 1. Agent View (Start)
- **Start in Normal Editor View** - Begin demonstration in standard editor interface
- **Switch to Agent View** - Located at top-right corner of interface
- Introduce the fresh interface for working with agents as a first-class experience

### 2. Worktrees - Implement Dark Mode
- Click on the toggle at the bottom left underneath chat window, select Worktree
- Select 3-4 models to run in parallel
- **Task:** Implement dark mode
- **Deep Link:** [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20and%20add%20a%20theme%20toggle.%20Make%20sure%20the%20toggle%20follows%20accessibility%20best%20practices%20and%20is%20easily%20selectable%20with%20a%20test-id%20for%20e2e%20testing.)
- **Prompt Text:**
  ```
  Implement dark mode and add a theme toggle. Make sure the toggle follows accessibility best practices and is easily selectable with a test-id for e2e testing.
  ```
- Watch multiple implementations happen simultaneously
- Click on the different model buttons in the chat to view the different implementations 
- Select Composer's result, click "Apply All" in the bottom right
- Manually open up the browser to show the results of the dark mode implementation
- Open up a new agent, select only Composer
- Use custom slash command `/commit` to commit the dark mode implementation

### 3. Browser - Extend Feature with Themes
- Open a new agent tab
- **Task:** Add orange and purple theme options
- **Deep Link:** [Add Themes](cursor://anysphere.cursor-deeplink/prompt?text=Add%20orange%20and%20purple%20theme%20options%20to%20the%20theme%20system.%20Convert%20the%20dark%20mode%20toggle%20to%20a%20dropdown%20where%20I%20can%20select%20the%20themes.)

- **Prompt Text:**
  ```
  Add orange and purple theme options to the theme system. Convert the dark mode toggle to a dropdown where I can select the themes.
  ```
- IMPORTANT: Click the Globe icon in the chat and select the browser tab
- Run the prompt to demonstrate the theme updates in real time via the browser
- Use custom slash command `/commit` to commit the theme system changes

### 4. Diff View
- During the process, Diff View appears
- Show how to review local diffs without switching files
- Highlight: Faster and easier code review

### 5. Voice Mode
- Use voice to quickly adjust code
- Demonstrate: "Turn speech into prompts instantly"
- Show iteration speed improvement

### 6. Commit & PR
- Use custom slash command `/create-pr` to create a pull request
- Open up GH, see the generated commit

## Features Covered
- ✅ Agent View
- ✅ Worktrees
- ✅ Built-in Browser
- ✅ Diff View
- ✅ Voice Mode
- ✅ Composer (the intelligent coding model)
- ✅ Custom Slash Commands (`/commit`, `/create-pr`)

