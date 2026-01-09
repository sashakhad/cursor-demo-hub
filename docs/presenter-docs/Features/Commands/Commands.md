# Commands

> Custom commands allow you to create reusable workflows that can be triggered with a simple `/` prefix in the chat input box. These commands help standardize processes across your team and make common tasks more efficient.

**Docs:** [Commands](https://cursor.com/docs/agent/chat/commands)

## Overview

Commands give you a way to quickly pipe a set of instructions to an LLM agent to perform a series of tasks that would otherwise require manual work or providing a lot of context. They're super useful for automating repeatable workflows and providing abstractions for developers and non-developers alike.

Commands are markdown files stored in the `.cursor/commands` directory. When you type `/command-name` in Agent chat, the file's contents become instructions for the agent to follow.

---

<details>
<summary>1. Using Commands</summary>

> Let's look at commands in action. Open a new Agent chat.

![New Agent chat](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/9f2b5853-54c0-4bbf-ab6e-55ee3aae92f8/ascreenshot_782a30dccf854dfd8dcacb84ca5bfd1d_text_export.jpeg)

![Click to open chat](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/ad518543-d2b3-441e-8505-6d3aa9048591/ascreenshot_79e3cf6846c442fc9f5ce2f298334228_text_export.jpeg)

> Type `/` to see all available slash commands. Run `/start-demo` which creates a clean demo environment.

![Slash commands list](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/bb1bd0ad-78ce-4653-9834-30155e306216/ascreenshot_6bda2d78f0d0467981175abbed4851d0_text_export.jpeg)

![Select start-demo](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/7c9f35c6-63b9-48f1-a41e-1157db7e58cb/ascreenshot_9898213c58d24328a66af9c7aacd6ca5_text_export.jpeg)

> What `/start-demo` does is a series of tasks that would otherwise be tedious to do manually when creating a demo — stashing local changes so nothing is lost, syncing up to date with the main branch, creating a new branch for the demo so PRs don't conflict with anything, killing local dev servers to ensure a fresh start, and starting the development environment.
>
> All of that happens in a single command instead of running multiple terminal commands.

![Start demo running](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/c0f1e192-b215-47eb-9262-cf1d6f65bfb5/ascreenshot_51d9ab7b46484031bf3c1197b27b099b_text_export.jpeg)

> This compounds over time — you save a ton of time and move with much more velocity.

</details>

---

<details>
<summary>2. Where Commands Live</summary>

> Commands are located in the `.cursor` directory under `commands`.

![Commands in cursor directory](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/dc4a2e66-9c04-4281-a7b9-323373f0a8e7/ascreenshot_1443cd52cff0408ba83e9eaf7a78a0fb_text_export.jpeg)

![Click commands folder](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/8687ecc8-dd6e-4cc4-81d9-a95d72f02a87/ascreenshot_22bee7f3f80d42e593f301551e5358c1_text_export.jpeg)

> You can see and view your commands here. All commands are markdown files that get piped into the context of the agent as instructions to follow.

![Command files](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/fe632c31-4fdc-4db2-b35d-b51182a3acdf/ascreenshot_36d960fd45034c5e88f1c120799a91d7_text_export.jpeg)

</details>

---

<details>
<summary>3. Creating a New Command</summary>

> To create a new command, go into Cursor Settings.

![Open settings](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/94d71dab-df51-42c6-aea8-166cfb50965b/ascreenshot_fa8b48e3a52b47fc8054c9b6722af695_text_export.jpeg)

Click Cursor Settings:

![Click Cursor Settings](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/06d52031-6117-4224-984c-355a35a13930/ascreenshot_9ea29a7be9ad4cd987d7955b5668c153_text_export.jpeg)

Click on Rules and Commands:

![Rules and Commands](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/5b016e9f-2c55-479b-bddc-228108b08c3a/ascreenshot_c9ea616705ee49748e4ca89ecd92c84b_text_export.jpeg)

Scroll down to Commands:

![Commands section](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/b6fecae1-370d-4064-8d25-1927803a79dd/ascreenshot_6a80de7608a844fa908309bd71cd5fcb_text_export.jpeg)

> Commands can be configured at the project level, the user level, and even the team level. Adding a command is simple — click Add Command and type the name.

![Command levels and add button](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/e2b0bd3f-7b7e-4c8a-9577-fe50c68a3890/ascreenshot_5f1b6cda66e64d2c843dd1b68362e893_text_export.jpeg)

![Click Add Command](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/8ac3455b-ba50-4b0e-9343-77365d098c81/ascreenshot_f887146b176f4f4bbf0e6e5d53c1b623_text_export.jpeg)

</details>

---

<details>
<summary>4. Example: Onboarding Command</summary>

> Another example is an onboarding command. Imagine you have a new hire or someone just coming onto the project. You want them to onboard quickly to the repository. We already have a command called `/onboard` set up in this codebase.
>
> It's an onboarding assistant that helps new developers understand the codebase quickly — sharing the tech stack, project structure, key architectural patterns, and where they can start. This can save developers hours or days of time.

Type `/onboard` and click on the slash command:

![Select onboard](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/3823a182-a118-4689-a4c1-d29b64e92932/ascreenshot_e1285feec5ed4ea685ec2ddea5b1b7d7_text_export.jpeg)

> Submit it and Cursor provides an interactive onboarding experience, telling developers how they can start, what they can do, and how to quickly understand the codebase.
>
> We've seen these kinds of commands be very useful not only for developers, but also as instructions for product managers or designers to get onboarded onto a codebase so they understand exactly where they can start contributing from day one.

![Onboarding response](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/54e4171a-d4ac-40dc-9b40-11df648ee8c9/ascreenshot_168467cd3a28433ba84b845f0c1f32e5_text_export.jpeg)

</details>

---

<details>
<summary>5. Example: Commit Command</summary>

> Some very common and effective commands are for committing code and creating pull requests. Let's look at what that looks like.
>
> First, make a simple change to the codebase.

[Change themes to blue](cursor://anysphere.cursor-deeplink/prompt?text=Change%20all%20of%20our%20theme%20colors%20to%20blue.%20Update%20tailwind.config.ts%20with%20these%20values%3A%0A-%20dev-primary%3A%20%231E40AF%0A-%20dev-accent%3A%20%232563EB%0A-%20dev-text%3A%20%231E3A8A%0A-%20dev-secondary%3A%20rgba(30%2C%2064%2C%20175%2C%200.6))

![Submit theme change](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/6492d347-bfdd-43e9-ba77-499b4d2f0cb4/ascreenshot_6d96a38de287427bbb30b0b7ba090f7f_text_export.jpeg)

> Cursor makes the changes and updates the themes.

![Changes applied](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/13d9b297-bb3e-47ad-9cc5-90684cc962b7/ascreenshot_08ca84dceee94d52aa5b4d83b9434b3a_text_export.jpeg)

![Themes updated](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/9d61235a-f2f7-4f3e-9d88-cc3c2b58a897/ascreenshot_ccd4e9e292cb47cb9afd678f062306c3_text_export.jpeg)

> Now let's keep those changes. Just like a developer would normally commit changes, having a commit command saves tons of time from manually selecting and reviewing all the changes.

![Ready to commit](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/50ef8bc0-6a17-4742-aeaa-3aedb625d60f/ascreenshot_ef36b6dddc5241ffa9ad2a859808a529_text_export.jpeg)

> A simple command that follows a specific structure. Enter the `/commit` command.

![Enter commit command](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/6e6b5782-0fdc-4f14-8448-6704b0898138/ascreenshot_3ae5667d5ce64ffb94fb2ed9a371c205_text_export.jpeg)

> When we review the slash command, you can see it's not just committing things.

![Commit command details](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/72ac7999-b84d-45de-a7c4-46563426fd5c/ascreenshot_2cccad5a93ed4743bc6badf9894d4dde_text_export.jpeg)

> It's actually doing many things — making sure changes are not being committed to the main branch but are on a feature branch, analyzing the changes to see all of them, and you can even instruct it to make multiple commits instead of one big commit. It follows commit conventions so developers no longer have to think deeply about how to follow them.

![Commit conventions](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/9696d046-147f-4d55-a005-bdba3b058f3e/ascreenshot_e0eedd3ee909430693c232b03fcaa4a0_text_export.jpeg)

> Cursor creates a commit for us to view.

![Commit created](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/549b537f-cb4f-41b3-9183-5ea82ac55f48/ascreenshot_0241f35801104dc29b77fc83eca997b2_text_export.jpeg)

</details>

---

<details>
<summary>6. Example: Create PR Command</summary>

> We can do the same thing for creating a pull request.

![Ready for PR](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/ea93b715-3db5-4296-926d-7ebd969cf965/ascreenshot_ef22df2ccec640f39fd69d5b4785a421_text_export.jpeg)

Run the `/create-pr` command:

![Select create-pr](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/399f5593-0b92-489e-868b-3ac5261a3726/ascreenshot_0f856aaf44b14688aabd511ace7d9c70_text_export.jpeg)

![Type create-pr](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/4423f8b3-08f6-4c12-8f78-6d7d97669577/ascreenshot_9afb02f7a6d946b88fdcfbcfb643a75e_text_export.jpeg)

> We've configured the `/create-pr` command to check if there are any remaining changes, commit anything that hasn't been committed, and create a thorough pull request description.

![PR command running](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/487889df-e49b-4772-8de7-6f93b5d32dbc/ascreenshot_b91201d51b5b49f287d46a3dfe472e3d_text_export.jpeg)

> And even open up the pull request for us.

![PR opened](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/1b45c5da-7bea-47c5-923c-1e57e6b35f90/ascreenshot_82486dd777dc4c639a9d076587c0400d_text_export.jpeg)

</details>

---

## Quick Reference

| Action | How |
|--------|-----|
| View all commands | Type `/` in Agent chat |
| Run a command | Type `/command-name` and press Enter |
| Create command | Cursor Settings > Rules and Commands > Commands > Add Command |
| Edit command | Open `.cursor/commands/command-name.md` |
| View command files | Browse `.cursor/commands/` directory |

---

## Common Commands

| Command | Purpose |
|---------|---------|
| `/start-demo` | Stash changes, sync with main, create demo branch, start server |
| `/commit` | Analyze changes, create atomic conventional commits |
| `/create-pr` | Push branch, create/update PR, open in browser |
| `/onboard` | Walk new developers through the codebase interactively |

