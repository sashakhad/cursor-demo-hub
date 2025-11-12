# Command: Decision Drivers & Buying Criteria Map

## ⚠️ Output Instructions
**CRITICAL**: Write ALL output to a SINGLE markdown file:
- Location: `analysis/transcript-analysis-{YYYY-MM-DD}/04-decision-drivers-buying-criteria.md`
- Create the folder if it doesn't exist
- Include ALL sections below in ONE file
- Do NOT create multiple files or intermediate outputs

**TIP**: Invoke `@transcript-analysis-output` to enforce these rules automatically

## Objective
Surface how buyers evaluate solutions. Extract explicit/implicit decision criteria, weightings, must-have vs nice-to-have, and score vendors by persona/segment with evidence.

## Inputs
- transcripts_dir: directory of transcripts
- vendors (optional)
- personas (optional)
- time_window (optional)

## Method
1) Extract criteria (price, coverage, accuracy, integrations, security, workflow fit, support, analytics, time-to-value).
2) Derive relative weightings from emphasis/frequency and explicit signals.
3) Build vendor-by-criteria score snapshots; annotate with quotes.
4) Separate must-have vs nice-to-have; call out dealbreakers.

## Deliverables
1) Criteria list with weights
2) Vendor scoring table
3) Must-have/nice-to-have matrix
4) Evidence quotes

## Output Format (Markdown)
### Weighted Criteria
| Criterion | Weight (0–1) | Notes |
|---|---:|---|
| Data Accuracy | 0.25 | Exec emphasis on risk and trust |

### Vendor Scoring Snapshot
| Vendor | Accuracy | Coverage | Integrations | Security | Price | Fit | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| Ours | 4.2 | 4.0 | 3.8 | 4.5 | 3.6 | 4.1 | 4.1 |
| Competitor A | 3.8 | 4.5 | 4.3 | 4.2 | 3.2 | 3.9 | 4.0 |

### Must-have vs Nice-to-have
- Must-have: …
- Nice-to-have: …

### Evidence Appendix
- [Q-07] "…" (criterion: Security)
- [Q-18] "…" (criterion: Coverage)

## Notes
- If numeric scores are inferred, label them as directional and relative, not absolute.


