# Cursor 101 Demo Flow (with Screenshots)

An introductory walkthrough of Cursor's core features for new users.

---

## Prerequisites

Before starting the demo:

1. **Start the server:** Run `/start-demo` to launch the development server and open the blog app in the browser
2. **Reset workspace:** Use `/reset` between sections to ensure a clean state for deterministic results

> **📝 Deep Links:** Throughout this demo, clickable links like `[Example Link]` open a "Create chat with prompt" dialog. Click **"Create Chat"** to start the agent with the pre-filled prompt.

---

## 1. [Layout Walkthrough](../Features/Layout-Walkthrough/Layout-Walkthrough.screenshots.md)

> Cursor is an IDE forked from VS Code, now fully built out with AI-native features. Understanding the layout helps you navigate efficiently.

### Key Areas

| Area | Location | Purpose |
|------|----------|---------|
| File Explorer | Left sidebar | Navigate project files |
| Editor | Center | View and edit code |
| Terminal | Bottom panel | Run commands |
| Agent Panel | Right sidebar | AI chat and agent interactions |

### Demo Flow

**When you first open Cursor, you'll see an empty editor:**

![Empty editor view](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/c377bc6c-dc94-4b22-860c-d0d2e75d44d7/ascreenshot_48c7278b84de4699a28d05ebb26fd5e4_text_export.jpeg)

**Click the File Explorer icon to see your project's file system:**

![File Explorer panel](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/242d3dc7-be71-49f7-ac50-b9f2e0241ea8/ascreenshot_86429487af914df5b897932f919030d1_text_export.jpeg)

**Click the Terminal area to open the integrated terminal:**

![Terminal panel](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/72dbd776-f68c-44b4-bb20-2b3a03d07510/ascreenshot_32e30b27d1d246d996e6d1b9b4265f00_text_export.jpeg)

**Click to open the Agent panel for AI chat and interactions:**

![Agent panel](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/bba84ab6-4e9b-40fd-8f81-23f9ce8687aa/ascreenshot_24230aea6b6d4529a78dc51b27e19db7_text_export.jpeg)

### What to Highlight

- Familiar VS Code experience with AI enhancements
- Customizable panel arrangement for different workflows
- Agent panel is always accessible via `Cmd+L`

---

## 2. [Tab + Quick Edit](../Features/Tab-Quick-Edit/Tab-Quick-Edit.screenshots.md)

> Tab provides context-aware, multi-line code suggestions as you type. Quick Edit (Cmd+K) lets you edit code using natural language.

### 2a. Tab Autocomplete

**Open an empty component file like `Footer.tsx`:**

![Open Footer.tsx](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/ac8031b5-214a-4eec-bc5e-4bc8940253f3/ascreenshot_383cf1fcd2bd4ae68b7d027b647f584b_text_export.jpeg)

**Type the letter "F"—Tab detects you're in `Footer.tsx` and suggests the component:**

![Start typing F](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/1bfcc4dd-1210-4c58-9ecd-e10422b1ed86/ascreenshot_7f55064d30594a0ca4919082472c0bea_text_export.jpeg)

**Tab suggests a complete Footer component structure:**

![Tab suggestion appears](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/f24a173e-585a-4a87-ac86-4666154e74c3/ascreenshot_b59184c76ed2451a850314da3119a654_text_export.jpeg)

**Press Tab to accept and continue building:**

![Accept Tab suggestion](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/b01817de-9927-4086-9415-f5fa56c5458c/ascreenshot_f22ec6ad4cb44e34be69217591e84c07_text_export.jpeg)

**Type "sign up" and Tab auto-completes using your codebase components:**

![Tab uses existing components](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/62da6a67-13ce-4f91-85f3-c01c75ab7f22/ascreenshot_84318c37534a46b9885dfcd378507ae5_text_export.jpeg)

### 2b. Quick Edit (Cmd+K)

**Select code and press Cmd+K to open the quick edit panel:**

![Quick edit prompt](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/825f8951-69cb-4831-9b85-ab60c8653ed3/ascreenshot_62c96380a4014cefb6e90ec6067bb135_text_export.jpeg)

**Type your instruction—"make this more colorful":**

![Type instruction](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/188b6ae4-6fe1-4211-a4b5-4986f095a52a/ascreenshot_539e37512b9e406f8ccf9c8b4f76be3d_text_export.jpeg)

**Cursor edits only the selected section and shows the diff:**

![View the diff](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6ab10cad-cd6b-4c6f-8d5e-0f118fe073a0/ascreenshot_a04a01e5a22a4b8fb7b5cad0baa7a6a6_text_export.jpeg)

### What to Highlight

- Tab learns your patterns and style
- Quick Edit only changes what you select (surgical)
- Both work without leaving the editor

> **Reset:** Use `/reset` before moving to Agent Chat

---

## 3. [Agent Chat](../Features/Agent-Chat/Agent-Chat.screenshots.md)

> Agent Chat is the command center for agentic workflows. An agent can read, write, and execute code across your entire codebase.

### 3a. Agent Modes

**Click the mode dropdown to see available options:**

![Agent mode selector](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/add45b19-efa5-401f-9b3e-6568c88002cc/ascreenshot_7f3bc9ab4f9f4909827f54a755ba02a5_text_export.jpeg)

**Select from Agent, Plan, Debug, or Ask mode:**

![Mode options](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/24d857cc-a885-40bf-ba6b-2d8793af7c4b/ascreenshot_56883a28a241433180502a3952fb7b3a_text_export.jpeg)

### 3b. Model Selection

**Click the model selector:**

![Model selector](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6d9492d4-1121-4326-9e1f-eb9c3a0e4767/ascreenshot_4a42b42d960e4ee2bfbe04b1448b1b77_text_export.jpeg)

**Choose from available models:**

![Model options](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/89c572df-f8be-484a-a05c-6c722a9c0539/ascreenshot_d3bcce33e0d54c3cabb7268919fad54d_text_export.jpeg)

### 3c. Adding Context

**Click the Add Context button:**

![Add Context button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/4a72196f-3a51-4643-9680-4b184b74850d/ascreenshot_2efecad5ca954d529b508f6674085525_text_export.jpeg)

**Context options menu:**

![Context options](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/3318391f-67d4-4eaf-9e1f-184dc30a32d3/ascreenshot_d1fd1056e182499bab344956cbead8dc_text_export.jpeg)

### 3d. Making Changes

- [Change sidebar color to blue](cursor://anysphere.cursor-deeplink/prompt?text=Change%20the%20background%20color%20of%20the%20sidebar%20to%20blue%20%40SideBar.tsx)

**Reference a file in your prompt:**

![File reference in prompt](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/5238c67e-094b-4967-8735-b310e9649e58/ascreenshot_978e47c4b6d04fa2bae7dc037d2d5b19_text_export.jpeg)

**Agent identifies the correct component:**

![Agent finds component](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/345c6473-e31f-473f-ac5b-a971d64112b8/ascreenshot_75a8961f8ace4147980a6fb4644aea2f_text_export.jpeg)

**Review changes with the diff view:**

![Review changes](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/ccf2ced0-63da-48b8-b826-26b3023ee30f/ascreenshot_135dfd31a6ca4536baaa3d6dc37548d6_text_export.jpeg)

### 3e. Terminal Output → Agent

**Select the error text and press Cmd+L:**

![Select error text](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/72da8eb3-ff19-431a-83de-51a05b19282e/ascreenshot_d11e8c63b5134b95adc98bfcfcd235e7_text_export.jpeg)

**Error added to chat context:**

![Error in chat context](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/0547a575-9759-4472-a058-ee4a049a1379/ascreenshot_23f593b414c64e7cab596f12fb69c08f_text_export.jpeg)

### 3f. Using Documentation

- [Add validation with Zod](cursor://anysphere.cursor-deeplink/prompt?text=Add%20validation%20to%20my%20search%20input%20using%20%40Zod.%20Limit%20to%20100%20characters%20and%20block%20special%20characters.)

**Search for documentation:**

![Search docs](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/26fd89d8-6114-4be0-bbe0-751af63d8cb3/ascreenshot_5cdb76a9e4264a72b436f840b488b1cb_text_export.jpeg)

**Select from available documentation:**

![Select Zod docs](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/7e292d12-1e4c-4f41-b7ee-85ae1cb96a15/ascreenshot_8ce804d338334971865d3c8c87c04021_text_export.jpeg)

### 3g. Demo: Implement Dark Mode

End with a complete feature implementation:

- [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20for%20this%20blog%20app.%20Add%20a%20theme%20toggle%20button%20and%20persist%20the%20user%27s%20preference.)

**Click the deep link to open the prompt:**

![Click Implement Dark Mode](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/7997f380-b64a-4914-8544-6745df34631f/ascreenshot_b14b1ebbc3af482ea91d90f757ef3979_text_export.jpeg)

**Click Create Chat:**

![Create Chat dialog](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/b43e8d68-7afa-4fbc-8d43-14e483e0dc45/ascreenshot_cbdca248fee040099d983a60ca1d507a_text_export.jpeg)

**Click the model dropdown:**

![Model dropdown](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/e74195e7-ff1e-41b3-ad34-48a8b4f10b0a/ascreenshot_3986a89130fd4b648bc97ecd13dae879_text_export.jpeg)

**Select composer-1 for faster results:**

![Select composer-1](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/273d22ff-ad48-4207-b842-6c39038a6cf0/ascreenshot_739b8c3a3308474090b9222b52b21fae_text_export.jpeg)

**Agent implements the feature:**

![Agent working](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6999f238-0115-4395-8f5c-c90699ad96bc/ascreenshot_bd6d07fdca3a421b8fc201117f098d40_text_export.jpeg)

**Click Review to see all changes:**

![Click Review](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/52e4014d-39ae-4366-80af-03e34f025b2e/ascreenshot_57effbc16bd544228b648a8f9805e3db_text_export.jpeg)

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

- **[Plan Mode](../Features/Agent-Chat/Plan-Mode.screenshots.md)** - Detailed implementation planning
- **[Debug Mode](../Features/Agent-Chat/Debug-Mode.screenshots.md)** - Hypothesis-driven debugging
- **[Browser](../Features/Browser/Browser.screenshots.md)** - Built-in browser testing
- **[Worktrees](../Features/Worktrees/Worktrees.screenshots.md)** - Parallel agents and Best of N

