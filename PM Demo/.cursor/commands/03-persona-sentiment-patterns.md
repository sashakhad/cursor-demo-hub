# Command: Persona Sentiment & Pattern Mining

## ⚠️ Output Instructions
**CRITICAL**: Write ALL output to a SINGLE markdown file:
- Location: `analysis/transcript-analysis-{YYYY-MM-DD}/03-persona-sentiment-patterns.md`
- Create the folder if it doesn't exist
- Include ALL sections below in ONE file
- Do NOT create multiple files or intermediate outputs

**TIP**: Invoke `@transcript-analysis-output` to enforce these rules automatically

## Objective
Capture sentiment and patterns across Executive, Leadership, and IC cohorts. Provide representative quotes, topics, and notable divergences by persona.

## Inputs
- transcripts_dir: directory of transcripts
- personas: ["Executive", "Leadership", "IC"] (default)
- time_window (optional)

## Method
1) Segment utterances by persona; compute sentiment (-1..1) and emotion tags (e.g., trust, frustration, excitement).
2) Topic-model or cluster by themes (jobs, value, risk, workflow, data quality, integrations).
3) Identify persona-specific highs/lows and where perceptions diverge.
4) Extract representative quotes with precise citations.

## Deliverables
1) Persona sentiment table
2) Top themes per persona (with quotes)
3) Divergence analysis (where personas disagree)

## Output Format (Markdown)
### Persona Sentiment Summary
| Persona | Sentiment (-1..1) | Top Positive Themes | Top Negative Themes | Quotes |
|---|---:|---|---|---|
| Executive | 0.18 | Strategic Fit, ROI | Security, Change Risk | [Q-11], [Q-37] |
| Leadership | 0.02 | Visibility, Reporting | Workflow Friction, Data Gaps | [Q-09] |
| IC | -0.15 | Speed | Usability, Coverage, Bugs | [Q-21], [Q-34] |

### Themes by Persona
- Executive: … (quotes: [Q-11], …)
- Leadership: … (quotes: [Q-09], …)
- IC: … (quotes: [Q-21], [Q-34])

### Divergences & Alignments
- Example: Leadership favors reporting improvements; ICs prioritize coverage accuracy. Execs care about risk and ROI.

### Evidence Appendix
- [Q-09] "…"
- [Q-11] "…"
- [Q-21] "…"
- [Q-34] "…"

## Notes
- If persona not specified in transcript, infer cautiously from context and role.


