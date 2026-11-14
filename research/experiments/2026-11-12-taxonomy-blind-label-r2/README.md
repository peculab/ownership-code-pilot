# Blind-label round 2: taxonomy v1.1

Refs #8

## Question

With the v1.1 decision order and the new `asker_perspective` field, can a new labeler assign the same perspective and label as labeler 1?

## Materials

- Taxonomy **v1.1**, translated to Traditional Chinese, as shown to the labeler: [`test-sheet-v1.1.zh-TW.md`](test-sheet-v1.1.zh-TW.md)
- The same 12 synthetic scenarios as round 1
- Labeler 1 key: taxonomy v1.1 section 4

## Procedure

- Date: 2026-11-12
- Labeler 3 (new; self-reported: had not seen other answers and had not taken round 1) chose a perspective, a label, and a confidence for each scenario. The rationale column was marked required.
- Time taken: 30 minutes.

## Results

Raw data: [`labels.csv`](labels.csv).

- Label agreement: **4/12 (33%)**
- Perspective agreement: **5/12 (42%)**
- Labeler 3 named **perspective** as the hardest part.

| ID | Perspective L1 → L3 | Label L1 → L3 | L3 confidence |
|---|---|---|---|
| syn-001 | owner → **buyer** | `exit-readiness` → **`buyer-assessment`** | medium |
| syn-002 | owner → owner | `owner-dependency` → **`transition-path`** | low |
| syn-003 | buyer → **owner** | `buyer-assessment` → **`unclear-need`** | medium |
| syn-004 | owner → owner | `transition-path` → **`exit-readiness`** | high |
| syn-005 | unspecified → **buyer** | `value-evidence` → `value-evidence` | medium |
| syn-006 | owner → owner | `exit-readiness` → **`professional-boundary`** | medium |
| syn-007 | buyer → **unspecified** | `buyer-assessment` → **`unclear-need`** | high |
| syn-008 | team → team | `engagement-conduct` → **`exit-readiness`** | medium |
| syn-009 | unspecified → **team** | `professional-boundary` → `professional-boundary` | high |
| syn-010 | team → team | `professional-boundary` → **`value-evidence`** | low |
| syn-011 | team → **unspecified** | `unclear-need` → `unclear-need` | medium |
| syn-012 | team → **unspecified** | `workflow-governance` → `workflow-governance` | high |

## Observations (facts)

- syn-001, 002, and 004 disagree again, the same way as in round 1.
- syn-003 ("I am interested in buying") was given perspective owner; syn-007 ("How should a buyer…") was given unspecified and `unclear-need` with high confidence.
- syn-008 was given perspective team but label `exit-readiness`, which v1.1 reserves for owners.
- 4 of 7 perspective disagreements are between `unspecified` and a named role (syn-005, 009, 011, 012).
- The rationale column holds column names ("觀點", "標籤", "標籤、A") in 5 rows and is blank in 7, not the decision step that was asked for.

## Interpretation (unverified)

- Round 1 and round 2 used different labelers and different versions, so 67% vs. 33% is **not** evidence that v1.1 is worse.
- `unspecified` is poorly defined: labeler 1's own choice between `unspecified` and `team` (syn-009, 011, 012) is debatable.
- syn-003, 007, and 008 conflict with explicit wording or with the decision order. Either the instructions were misunderstood (the rationale column suggests this), or the added perspective step overloaded the task. The data cannot separate these.
- syn-001, 002, and 004 disagreeing in both rounds suggests a real boundary problem in the owner-side categories, independent of version.

## Debrief (2026-11-14)

Confirmed with labeler 3 directly: **the decision order was not followed.** Labeler 3 judged each scenario holistically rather than checking steps 1–7 in sequence. This explains the blank/column-name rationale entries (section above) and is consistent with round 3 (labeler 4, same sheet), where a second new labeler also left rationales blank and scored differently (9/12) — individual variation, not a shared reading of the procedure.

This resolves the round-2 "Interpretation" question in favor of: **the procedure was not used, so round 2's low agreement cannot be read as evidence against the v1.1 definitions themselves.** It also means the round-1 vs. round-2 comparison (67% → 33%) measures compliance with a multi-step procedure, not definition quality, in both rounds.

## Next steps

1. ~~Debrief labeler 3~~ — done above.
2. Make rationale a required "stopped at step" field (not free text) so later rounds can verify the procedure was followed, not just collect labels.
3. Consider reducing perspective to a single question used only at step 5 ("Is the asker a prospective buyer?") and removing `unspecified`.
4. Run the same sheet with an LLM as an additional labeler. (Done separately: [`2026-11-13-taxonomy-llm-label`](../2026-11-13-taxonomy-llm-label/README.md).)

## Limitations

- One labeler, 12 items; no kappa statistic.
- Rationales are unusable, so causes are inferred.
- Labeler 1's key was drafted with AI assistance and its perspective values are themselves uncertain.
