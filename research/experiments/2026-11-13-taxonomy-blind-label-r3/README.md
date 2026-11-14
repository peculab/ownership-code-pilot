# Blind-label round 3: taxonomy v1.1 (second human)

Refs #8

## Question

Does a second new labeler, using the same v1.1 sheet as round 2, reproduce round 2's result?

## Materials and procedure

- Sheet: identical to round 2, [`test-sheet-v1.1.zh-TW.md`](../2026-11-12-taxonomy-blind-label-r2/test-sheet-v1.1.zh-TW.md)
- Received 2026-11-13. Labeler 4 (new; self-reported: had not seen other answers and had not taken round 1). Date, time taken, and hardest step were left blank.

## Results

Raw data: [`labels.csv`](labels.csv).

- Label agreement with labeler 1: **9/12 (75%)**
- Perspective agreement: **7/12 (58%)**
- Confidence: high on all 12. Rationale: blank on all 12.

| ID | Perspective L1 → L4 | Label L1 → L4 |
|---|---|---|
| syn-002 | owner → owner | `owner-dependency` → **`transition-path`** |
| syn-005 | unspecified → **owner** | `value-evidence` → `value-evidence` |
| syn-006 | owner → owner | `exit-readiness` → **`value-evidence`** |
| syn-008 | team → **buyer** | `engagement-conduct` → `engagement-conduct` |
| syn-009 | unspecified → **team** | `professional-boundary` → **`buyer-assessment`** |
| syn-011 | team → **unspecified** | `unclear-need` → `unclear-need` |
| syn-012 | team → **unspecified** | `workflow-governance` → `workflow-governance` |

Other rows agreed on both fields.

## Cross-round view (all labelers on the four recurring items)

| ID | Labeler 1 key | Labeler 2 (v1.0) | Labeler 3 (v1.1) | Labeler 4 (v1.1) | LLM (v1.1) |
|---|---|---|---|---|---|
| syn-001 | A | E | E | A | A |
| syn-002 | B | D | D | D | B |
| syn-004 | D | A | A | D | D |
| syn-006 | A | E | F | C | A |

Perspective on syn-011: labelers 3, 4, and the LLM all chose `unspecified`; labeler 1 chose `team`. On syn-012, labelers 3 and 4 both chose `unspecified`.

## Observations (facts)

- Labelers 3 and 4 used the same sheet and scored 4/12 and 9/12.
- All three humans labeled syn-002 `transition-path`. The question contains "交接" (transition), and so does D's short name.
- syn-009 got perspective team and label `buyer-assessment`, although step 4 (`professional-boundary`) comes before step 5.
- No labeler has yet filled the rationale column with a decision step except the LLM.

## Interpretation (unverified)

- **Individual variation is larger than any version effect.** With one human per condition, version comparisons (67% → 33% → 75%) carry no weight.
- syn-002 is a consistent human reading, not noise. Either the key (B) is wrong for how people read the question, or D's name draws people in by the shared word "交接".
- Labeler 1's perspective key for syn-011 (and possibly syn-012) is likely wrong: every other labeler chose `unspecified`.
- Free-text rationales are not being written. A required structured field (the step number, 1–7) would test whether people follow the decision order at all.

## Proposed v1.2 changes (not applied)

1. Replace the rationale column with a required "stopped at step" dropdown (1–7).
2. Rename D so that it does not share "交接" with the questions (e.g. "D 比較已列出的方案").
3. Revisit labeler 1's perspective key for syn-011 and syn-012, and document the change as a key revision.
4. Keep `unspecified`, but define it as "the question has no first-person asker and no named role".

## Limitations

- One labeler; 12 items; all-high confidence and blank rationales limit what can be inferred.
- The questions are translations; wording such as "交接" may not exist in the English originals in the same form.
