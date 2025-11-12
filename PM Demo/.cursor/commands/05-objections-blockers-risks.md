# Command: Objections, Blockers & Risk Signals

## ⚠️ Output Instructions
**CRITICAL**: Write ALL output to a SINGLE markdown file:
- Location: `analysis/transcript-analysis-{YYYY-MM-DD}/05-objections-blockers-risks.md`
- Create the folder if it doesn't exist
- Include ALL sections below in ONE file
- Do NOT create multiple files or intermediate outputs

**TIP**: Invoke `@transcript-analysis-output` to enforce these rules automatically

## Objective
De-risk deals by cataloging objections, blockers, and risk signals. Provide counter-messaging, required artifacts, owners, and follow-ups.

## Inputs
- transcripts_dir: directory of transcripts
- stages (optional): discovery, eval, security, legal, procurement, onboarding
- personas (optional)

## Method
1) Extract objections and risks; tag by stage, persona, category (security, legal, procurement, data, UX, pricing, integration).
2) Identify root causes and competitive traps.
3) Propose counter-messaging and assets needed (FAQ, security doc, ROI calc, demo script).
4) Track frequency and severity; flag red/yellow signals.

## Deliverables
1) Objection catalog with frequency/severity
2) Counter-messaging playbook
3) Risk register with owners and next steps
4) Evidence quotes

## Output Format (Markdown)
### Objection Catalog
| Objection | Stage | Persona | Category | Freq | Severity | Root Cause | Counter | Evidence |
|---|---|---|---|---:|---:|---|---|---|
| "Security review will be long" | security | Exec | Security | High | High | Vendor IT policy | Provide SIG, SOC2 mapping | [Q-03], [Q-19] |

### Risk Register
| Risk | Signal | Owner | Next Step | Due | Status |
|---|---|---|---|---|---|
| Data quality concerns | Multiple IC quotes | PM | Validate sample set | 2025-11-15 | Open |

### Counter-Messaging Playbook
- Scenario: <objection>
  - Message: …
  - Proof: case study, metric, quote
  - Asset: link

### Evidence Appendix
- [Q-03] "…"
- [Q-19] "…"

## Notes
- Keep counter-messaging specific and verifiable; avoid hand-waving.


