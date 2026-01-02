# Add Section to 201 Demo

Copy content from feature documentation files into the 201 demo files.

## CRITICAL RULES

1. **USE TERMINAL COMMANDS** - Do NOT use write/search_replace tools. Use Python or shell scripts.
2. **COPY FROM FEATURE FILES** - Source is `docs/presenter-docs/Features/`, NOT `# Cursor Notes Reference`
3. **MATCH FILE TYPES**:
   - `$FEATURE.md` → `DEMO_FLOW.md`
   - `$FEATURE.screenshots.md` → `DEMO_FLOW.screenshots.md`

## Inputs

- `$SECTION_NAME` - One of: "Rules", "Commands", "Context Management", "Model Selection Strategies", "Plan Mode", "Debug Mode"

## Source → Target Mapping

| Section | Source Files |
|---------|--------------|
| Rules | `docs/presenter-docs/Features/Rules/Rules.md` and `Rules.screenshots.md` |
| Plan Mode | `docs/presenter-docs/Features/Agent/Plan-Mode/Plan-Mode.md` and `Plan-Mode.screenshots.md` |
| Debug Mode | `docs/presenter-docs/Features/Agent/Debug-Mode/Debug-Mode.md` and `Debug-Mode.screenshots.md` |

> **Note:** Commands, Context Management, and Model Selection Strategies don't have feature files yet. Skip these or create feature files first.

## Target Files

- `docs/presenter-docs/Cursor-201/DEMO_FLOW.md`
- `docs/presenter-docs/Cursor-201/DEMO_FLOW.screenshots.md`

## Implementation

Run this Python script (replace SECTION and SOURCE_DIR):

```bash
python3 << 'SCRIPT'
import re

# === CONFIGURE THESE ===
SECTION = "Rules"  # Section name exactly as it appears after ##
SOURCE_DIR = "docs/presenter-docs/Features/Rules/"
SOURCE_BASE = "Rules"  # Filename without extension
# ========================

# Read source files (skip first 6 lines: title, desc, docs, blank, ##Overview, para)
with open(f'{SOURCE_DIR}{SOURCE_BASE}.md', 'r') as f:
    content = ''.join(f.readlines()[6:])

with open(f'{SOURCE_DIR}{SOURCE_BASE}.screenshots.md', 'r') as f:
    content_ss = ''.join(f.readlines()[6:])

# Pattern matches ONLY this section's placeholder
pattern = rf'(## {SECTION}\n\n)<!-- Content will be added via /cursor-201/add-section -->'

# Update DEMO_FLOW.md
with open('docs/presenter-docs/Cursor-201/DEMO_FLOW.md', 'r') as f:
    demo = f.read()
demo = re.sub(pattern, r'\1' + content.replace('\\', r'\\'), demo, count=1)
with open('docs/presenter-docs/Cursor-201/DEMO_FLOW.md', 'w') as f:
    f.write(demo)

# Update DEMO_FLOW.screenshots.md
with open('docs/presenter-docs/Cursor-201/DEMO_FLOW.screenshots.md', 'r') as f:
    demo_ss = f.read()
demo_ss = re.sub(pattern, r'\1' + content_ss.replace('\\', r'\\'), demo_ss, count=1)
with open('docs/presenter-docs/Cursor-201/DEMO_FLOW.screenshots.md', 'w') as f:
    f.write(demo_ss)

print(f"✓ {SECTION} added to both DEMO_FLOW files")
SCRIPT
```

## Verification

After running, verify:
```bash
# Check images were copied to screenshots file
grep -c "!\[" docs/presenter-docs/Cursor-201/DEMO_FLOW.screenshots.md

# Check placeholder was removed for this section
grep "<!-- Content" docs/presenter-docs/Cursor-201/DEMO_FLOW.md | wc -l
```

## Safety

- Only replaces ONE placeholder (`count=1`)
- Other section placeholders remain untouched
- If placeholder already replaced, pattern won't match (no double-insert)
