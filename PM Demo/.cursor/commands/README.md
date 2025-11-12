# Transcript Analysis Commands

## Overview
These commands analyze company interview transcripts from `notes/transcripts/company-transcripts/` and produce structured insights.

## Output Behavior
Each command produces **ONE single markdown file** in:
```
analysis/transcript-analysis-{YYYY-MM-DD}/
```

Example output structure:
```
analysis/
  transcript-analysis-2025-10-30/
    01-competitive-insights.md
    02-product-experience-gaps.md
    03-persona-sentiment-patterns.md
    04-decision-drivers-buying-criteria.md
    05-objections-blockers-risks.md
```

## Commands

### 01-competitive-insights.md
**Purpose**: Competitive landscape synthesis, battlecards, vendor comparison  
**Output**: Executive summary, competitive matrix, battlecards, persona perceptions, evidence appendix

### 02-product-experience-gaps.md
**Purpose**: Product gaps and friction points prioritized by impact  
**Output**: Prioritized gaps (RICE-like), opportunity briefs, evidence quotes

### 03-persona-sentiment-patterns.md
**Purpose**: Sentiment analysis across Executive, Leadership, and IC personas  
**Output**: Sentiment tables, themes by persona, divergence analysis, quotes

### 04-decision-drivers-buying-criteria.md
**Purpose**: How buyers evaluate solutions and vendor scoring  
**Output**: Weighted criteria, vendor scoring matrix, must-have/nice-to-have breakdown

### 05-objections-blockers-risks.md
**Purpose**: Catalog objections and provide counter-messaging  
**Output**: Objection catalog, counter-messaging playbook, risk register

## How to Use

1. **Invoke the output rule**: Include `@transcript-analysis-output` in your message
2. **Attach command & transcripts**: Attach the command file and transcripts folder
3. **The AI will**:
   - Create the output folder if needed
   - Process all transcripts
   - Generate ONE comprehensive markdown file
   - Include all sections with evidence citations

### Example Usage
```
@transcript-analysis-output run the competitive insights analysis on @company-transcripts
```

## Rules in Place

- **Manual Rule**: `@transcript-analysis-output` enforces single-file output (invoke when needed)
- **Command Instructions**: Each command has explicit output constraints
- **No file proliferation**: Commands will NOT create multiple files, drafts, or intermediates

## Input Data
- **Location**: `notes/transcripts/company-transcripts/`
- **Count**: 24 company interview transcripts
- **Companies**: Affirm, Amplitude, Block, Bridgewater, Capital One, Citadel, Cloudflare, Confluent, Databricks, D.E. Shaw, Figma, GitLab, Goldman Sachs, Jane Street, Netflix, Notion, Okta, Plaid, Snowflake, Stripe, Tesla, Toast, Two Sigma, Uber

## Tips

- Run commands independently or batch them together
- Each command is self-contained and can run on all transcripts
- Review `@transcript-analysis-output` rule for output enforcement rules
- All outputs consolidate into date-stamped folders for easy organization

