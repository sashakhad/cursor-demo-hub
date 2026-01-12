# Model Selection Strategies

> ⚠️ **WIP: This document is a work in progress and may need additional screenshots.**

> Choosing the right model for the task at hand can significantly impact both quality and speed. Understanding when to use thinking vs. executing models helps you work more efficiently.

## Overview

Not all models are created equal—different models excel at different tasks. Cursor gives you fine-grained control over which model to use, or you can let it decide automatically.

---

## 1. Thinking vs. Executing Models

Models are distinguished by the **brain icon** in the model selector.

### Thinking Models

- Uses extra internal reasoning tokens to improve correctness
- Better for architectural questions and decisions
- Better for asking about the codebase
- Trade-off: Slower, uses more tokens on reasoning

### Executing Models

- Minimizes internal reasoning to use more tokens on your input
- Better for implementation tasks
- Trade-off: May miss nuance on complex decisions

---

## 2. Recommendations

### Get to Know Your Models

We strongly recommend getting to know different models, switching between them, and seeing how they perform. Each has strengths and weaknesses.

### Auto Mode

Cursor has an **auto** feature if you don't want to think about model selection.

Think of it like driving:
- For most people, automatic transmission is just fine
- For those who want precise control and maneuverability, manually switching between models will give the best performance

### Avoid Heavyweight Models for Everything

What developers often miss is that heavyweight models tend to be more expensive, and you don't always need such heavy horsepower.

It's like using a mode that consumes more gas when you could have the same performance with a cheaper model consuming less gas.

**Use lighter-weight models for daily work.**

### For Coding Specifically

**Composer** is Cursor's agent model designed for software engineering intelligence and speed. On our benchmarks, the model achieves frontier coding results with generation speed four times faster than similar models.

---

## 3. Context Window Considerations

For long-running tasks or analyzing large bodies of work, consider models with very large context windows (up to 1 million tokens).

Use cases for large context windows:
- Large codebases
- Large text files
- Large datasets
- Long conversation histories

> **Tip:** If you're hitting context limits frequently, consider a model with a larger window or restructure your prompts to be more focused.

