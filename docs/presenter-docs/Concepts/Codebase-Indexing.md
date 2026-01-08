# Codebase Indexing

> Cursor indexes your codebase to enable semantic search—finding code by meaning, not just exact text. This gives the AI a full understanding of how your project works.

## How It Works

When you open a workspace, Cursor automatically:

1. Syncs your files securely to create a searchable index
2. Breaks code into meaningful chunks (functions, classes, logical blocks)
3. Converts each chunk into a vector embedding that captures its semantic meaning
4. Stores these embeddings in a vector database for fast similarity search

When you or Agent searches the codebase, your query is converted to a vector and matched against the stored embeddings—returning the most semantically relevant code.

---

## Why Semantic Search?

| Capability | Grep/Ripgrep | Semantic Search |
|------------|--------------|-----------------|
| Exact string matches | ✅ | ✅ |
| Find code by meaning | ❌ | ✅ |
| "Find navigation code" → finds `header.tsx` | ❌ | ✅ |

> Agent uses **both** grep and semantic search together for best results.

---

## Key Points

- **Automatic:** Indexing starts when you open a workspace
- **Incremental:** Only changed files are re-indexed
- **Private:** Code is never stored in plaintext—only encrypted embeddings
- **Fast:** Semantic search is computed during indexing, not at query time

**Docs:** [Codebase Indexing](https://cursor.com/docs/context/codebase-indexing)

