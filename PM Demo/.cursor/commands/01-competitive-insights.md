# Command: Competitive Insights Synthesis

## ⚠️ Output Instructions
**CRITICAL**: Write ALL output to a SINGLE markdown file:
- Location: `analysis/transcript-analysis-{YYYY-MM-DD}/01-competitive-insights.md`
- Create the folder if it doesn't exist
- Include ALL sections below in ONE file
- Do NOT create multiple files or intermediate outputs

**TIP**: Invoke `@transcript-analysis-output` to enforce these rules automatically

## Objective
Outline the competitive landscape and synthesize how prospects/customers perceive our product versus key alternatives. Produce an executive summary, battlecards, and an evidence appendix of quotes.

## Inputs
- transcripts_dir: directory of transcripts (e.g., Markdown/notes)
- competitors (optional): list of vendors to track (e.g., ["Cognism", "ZoomInfo", ...])
- time_window (optional): filter window (e.g., "2024-04 to 2025-09")
- personas_of_interest (optional): ["Executive", "Leadership", "IC"]

## Method
1) Ingest transcripts in `transcripts_dir`. Identify and normalize vendor mentions.
2) Cluster feedback into themes: strengths, weaknesses, differentiators, risks, pricing, support.
3) Compare our product vs each competitor across themes and personas.
4) Summarize perception shifts over time (if dates available).
5) Extract high-signal, verbatim evidence with precise citations.

## Deliverables
1) Executive summary (bullets, <10 lines)
2) Competitive matrix
3) Battlecards (per competitor)
4) Persona perception snapshot (Exec, Leadership, IC)
5) Evidence appendix with quotes and citations

## Output Format (Markdown)
### Executive Summary
- Top wins/loss drivers
- Where we are uniquely strong/weak
- Urgent enablement opportunities

### Competitive Matrix
| Vendor | Key Strengths | Key Weaknesses | Differentiators vs Us | Win Scenarios | Loss Risks |
|---|---|---|---|---|---|
| Vendor A | ... | ... | ... | ... | ... |
| Vendor B | ... | ... | ... | ... | ... |

### Battlecard: <Vendor>
- Positioning: ...
- When we win: ...
- When we lose: ...
- Trap questions: ...
- Landmines to avoid: ...
- Required artifacts: case studies, ROI model, security answers

### Persona Perception Snapshot
| Persona | Sentiment (-1..1) | Top 3 Themes | Representative Quotes |
|---|---:|---|---|
| Executive | 0.23 | Cost, Risk, Strategic Fit | [Q-12], [Q-45] |
| Leadership | 0.05 | Workflow, Visibility, Ops | [Q-31] |
| IC | -0.12 | Usability, Coverage, Speed | [Q-08], [Q-29] |

### Evidence Appendix
- [Q-08] "…verbatim quote…" (file: <path>, section: <heading>, persona: IC)
- [Q-12] "…verbatim quote…" (file: <path>, section: <heading>, persona: Executive)

## Notes
- Cite quotes with stable IDs and file paths.
- If dates are unavailable, avoid time-based claims.
- Keep summary crisp; details live in matrix and appendix.


