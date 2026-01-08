# Context Management

> ⚠️ **WIP: Screenshots in this document are currently broken and may need to be re-captured.**

> Understanding and managing the context window is essential for getting the best results from AI-assisted coding. Think of it as managing the model's attention span.

## Overview

The context window is the model's working memory. When it fills up, results degrade. Cursor helps you monitor and manage this automatically.

---

## 1. What is a Token?

A token is the basic unit a language model reads and writes.

A token can be:
- A whole word
- Part of a word
- Punctuation
- Whitespace

**Token intuition:**

| Measurement | Approximate Tokens |
|-------------|-------------------|
| One long novel | ~200k tokens |
| 1,000 lines of code | 10k–20k tokens |

> Code is token-dense. This becomes important when working with large codebases.

![Model context windows](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/e6622fe8-a74c-40ce-890b-63712baf6ee4/ascreenshot.jpeg)

---

## 2. What is the Context Window?

The context window is the model's working memory, measured in tokens. It's the maximum number of tokens a model can hold in working memory at one time.

It includes:
- Your input
- The model's internal reasoning
- The model's output

Once the window is full, the model must forget or ignore earlier tokens.

**Different models have different context windows:**

| Model | Context Window |
|-------|---------------|
| Composer 1 | 200k tokens |
| Claude 4.5 Opus | 200k tokens |
| Claude 4 Sonnet | 1 million tokens |

![Claude 4.5 Opus context](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/457ab536-7331-447d-b514-cc6f23f4340c/ascreenshot.jpeg)

![Claude 4 Sonnet context](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/3eb1be17-2b75-4c0e-a9eb-f54f66dd632d/ascreenshot.jpeg)

You'll use different models for different tasks. Some have larger context windows, some have smaller. Check the models page to see context window sizes and token rates.

![Models page](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/f67f8b90-5e4a-4f0e-9b92-11bf0c77a360/ascreenshot.jpeg)

---

## 3. Why Context Management Matters

Context window management is a big part of coding with AI. It's a new best practice—similar to how you need to manage memory deliberately in low-level languages like C.

When working with models, you need to be mindful of their context window to get the best results. Cursor makes this easy.

---

## 4. Context Window Monitor

Cursor monitors context window usage automatically.

**Open an agent:**

![Open agent](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/586088c1-869f-482e-8b6d-7543515e1119/ascreenshot.jpeg)

![Agent panel](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/3844ccde-606d-4806-8dbd-bc59d9773e93/ascreenshot.jpeg)

**Type a simple command to see the context window in action:**

![Simple command](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/f4fabf21-79c5-4237-92f2-d616953e62f1/ascreenshot.jpeg)

**View the context usage indicator:**

You can go to the little circle to see context usage. The context window wheel shows you the usage percentage—how much of the context window has been used.

![Context indicator](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/067147f1-23c4-4043-8a74-a88a478a2d45/ascreenshot.jpeg)

---

## 5. Filling the Context Window

**Open a large file to demonstrate context filling:**

This example uses a file with a thousand paragraphs of lorem ipsum—something that will fill up the context really quickly.

![Lorem ipsum file](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/758678f5-d1c0-4049-891b-11421dc35482/ascreenshot.jpeg)

![Select file](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/151ce7b9-06d2-4c3c-a76e-4a8d190d8da5/ascreenshot.jpeg)

![File selected](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/11086dad-b9d1-4790-9b3d-330b7300fd9a/ascreenshot.jpeg)

![Prepare to read](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/3df1ce25-e741-4035-b5d4-f3407b7520c1/ascreenshot.jpeg)

**Tell the agent to read the whole file:**

![Read command](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/bb0a9293-7f34-4f5a-b1e4-55bea85e027c/ascreenshot.jpeg)

**Watch the context window fill up:**

![Context filling](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/b1aadf29-bdc7-4451-8712-3d9bf0f8678d/ascreenshot.jpeg)

![Context indicator](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/faa1c2b2-5ea8-42b6-a8ce-e9b32922d99d/ascreenshot.jpeg)

---

## 6. Practical Limits

The context window will get really full—already 76% has been used.

![76% usage](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/7317b8e4-b7d0-4df5-a200-a935b5bb2dea/ascreenshot.jpeg)

**Results appear to degrade around 70–80% of the context window.**

This is an observed pattern, not a hard rule. The model is being asked to maintain all of this information in memory.

Think of context like the model's attention span:
- The more you have to keep in mind at once, the harder it is for the model to execute on tasks well
- It's juggling many things at once

![Degradation warning](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/fc873383-bfde-4c4d-a816-ed38eab3dcae/ascreenshot.jpeg)

---

## 7. What Happens at 100%

When the context window gets full, Cursor will summarize the chat so the model can continue.

![Approaching limit](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/cb31b815-0795-472d-a37d-48b15dba83bd/ascreenshot.jpeg)

Once the context window reaches 100%, Cursor will:
1. Summarize the results
2. Reset the context window
3. Continue the conversation with the summary as context

![Context reset](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/f8defb49-75a8-412a-bd1b-88356e55b7e5/ascreenshot.jpeg)

---

## Best Practices

| Do | Don't |
|----|-------|
| Open a new chat for each atomic piece of work | Let conversations grow indefinitely |
| Monitor context usage during complex tasks | Ignore the context indicator |
| Break large tasks into smaller chunks | Try to do everything in one chat |

> Very similar to engineering best practices in general around atomicity.

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| Token | Basic unit of LLM input/output |
| Context Window | Model's working memory (measured in tokens) |
| Degradation Point | ~70–80% of context window |
| At 100% | Cursor summarizes and resets |
| Best Practice | One atomic task per chat |
