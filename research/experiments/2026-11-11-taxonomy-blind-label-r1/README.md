# Blind-label round 1: taxonomy v1.0

Refs #8

## Question

Can a second person, using only the written definitions, assign the same pain-point labels as labeler 1?

## Materials

- Taxonomy **v1.0** definitions, translated to Traditional Chinese, as shown to the labeler: [`test-sheet-v1.0.zh-TW.md`](test-sheet-v1.0.zh-TW.md)
- 12 synthetic scenarios from `examples/ownership-code/synthetic-scenarios.json` v0.1.0, translated to Traditional Chinese
- Labeler 1 labels: taxonomy v1.0 section 3 (contributor judgment, AI-assisted drafting)

## Procedure

- Date: 2026-11-11
- Labeler 2 read the definitions and chose one label per scenario, plus confidence (high / medium / low) and an optional rationale.
- Labeler 2 did not see labeler 1's labels (self-reported: had not seen other answers).
- Time taken: 15 minutes.

## Results

Raw data: [`labels.csv`](labels.csv). Raw agreement **8/12 (67%)**. No kappa statistic is reported because 12 items are too few.

| ID | Labeler 1 | Labeler 2 | Confidence |
|---|---|---|---|
| syn-001 | `exit-readiness` | `buyer-assessment` | high |
| syn-002 | `owner-dependency` | `transition-path` | medium |
| syn-004 | `transition-path` | `exit-readiness` | high |
| syn-006 | `exit-readiness` | `buyer-assessment` | medium |

The other 8 scenarios agreed. Labeler 2 named `exit-readiness` (A) as the hardest definition. The rationale column was left blank.

## Observations (facts)

- 3 of 4 disagreements involve `exit-readiness`.
- syn-001 and syn-006 come from owners but were labeled `buyer-assessment`; syn-001 mentions buyers.
- syn-001 and syn-004 were high-confidence disagreements.
- `professional-boundary`, `engagement-conduct`, `unclear-need`, and `workflow-governance` agreed fully.

## Interpretation (unverified)

- `buyer-assessment` did not state that the asker must be the buyer, so labeling may have followed keywords.
- The boundary between `exit-readiness` and `transition-path` was unclear; short display names such as "交接路徑" may invite keyword matching.
- High-confidence disagreement points to unclear definitions rather than labeler uncertainty.
- Disagreement does not mean labeler 2 was wrong.

## Changes made as a result

Taxonomy v1.1 (see the taxonomy changelog): fixed decision order, `asker_perspective` field, narrower `exit-readiness`, buyer perspective required for `buyer-assessment`, renamed short names. Categories and labeler 1's labels were not changed.

## Limitations

- One second labeler and 12 items.
- Rationales were not collected, so causes of disagreement are inferred.
- Labeler 1's labels were drafted with AI assistance.
- Labeler 2 has now seen the scenarios and must not take part in round 2.
