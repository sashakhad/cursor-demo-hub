# Command: Product Experience Gaps & Opportunities

## ⚠️ Output Instructions
**CRITICAL**: Write ALL output to a SINGLE markdown file:
- Location: `analysis/transcript-analysis-{YYYY-MM-DD}/02-product-experience-gaps.md`
- Create the folder if it doesn't exist
- Include ALL sections below in ONE file
- Do NOT create multiple files or intermediate outputs

**TIP**: Invoke `@transcript-analysis-output` to enforce these rules automatically

## Objective
Analyze product gaps and friction points across the end-to-end experience. Prioritize fixes and opportunities by severity, frequency, persona impact, and business value.

## Inputs
- transcripts_dir: directory of transcripts
- personas_of_interest (optional): ["Executive", "Leadership", "IC"]
- stages (optional): discovery, eval, onboarding, adoption, renewal
- time_window (optional): e.g., "2024-04 to 2025-09"

## Method
1) Extract pain points and requests; tag them with stage, persona, area (UX, data, performance, integrations, support, pricing, security).
2) Deduplicate and cluster into themes.
3) Score each theme on Frequency, Severity, Persona Reach, Business Impact, and Effort (rough).
4) Propose opportunity framing and candidate solutions with next steps.

## Deliverables
1) Prioritized gaps list (RICE-like)
2) Opportunity briefs (top 3–5)
3) Evidence quotes with citations

## Output Format (Markdown)
### Prioritized Gaps
| Rank | Theme | Stage | Personas | Freq | Severity | Impact | Effort | Notes |
|---:|---|---|---|---:|---:|---:|---:|---|
| 1 | <theme> | adoption | IC, Leadership | High | High | High | Med | [Q-14], [Q-22] |

### Opportunity Brief: <Theme>
- Problem: …
- Who is affected: … (personas, segments)
- Why now: … (deal risk, churn risk, ARR upside)
- Proposed solution(s): …
- Expected outcome: … (KPIs, user goals)
- Risks/unknowns: …
- Evidence: [Q-14], [Q-22]

### Evidence Appendix
- [Q-14] "…verbatim quote…" (file: <path>, section: <heading>, persona: <role>)
- [Q-22] "…verbatim quote…" (file: <path>, section: <heading>, persona: <role>)

## Notes
- Keep ranks defensible: show the scoring inputs.
- If Effort is unknown, mark as TBD rather than guessing.


