# LLM labeler: taxonomy v1.1

Refs #8

## Question

How does an LLM label the same v1.1 sheet that labeler 3 used?

## Materials and procedure

- Date: 2026-11-13
- Model: Claude, run as a fresh subagent with no prior context (configured model `claude-opus-5-5`; the serving model may differ). One run; no temperature or seed control.
- Input: the [v1.1 test sheet](../2026-11-12-taxonomy-blind-label-r2/test-sheet-v1.1.zh-TW.md) pasted verbatim with the 12 questions, plus one line asking for CSV output. Tools and files were disabled so it could not see the key. No other instructions were given.

## Results

Raw data with full rationales: [`labels.csv`](labels.csv).

- Label agreement with labeler 1: **12/12**
- Perspective agreement: **11/12** (syn-011: `unspecified` instead of `team`)
- Every rationale names the decision step, as the sheet asked.

| Labeler | Version | Labels | Perspectives |
|---|---|---|---|
| Labeler 2 (human) | v1.0 | 8/12 | — |
| Labeler 3 (human) | v1.1 | 4/12 | 5/12 |
| LLM | v1.1 | 12/12 | 11/12 |

## Feedback from the LLM (model output, quoted in substance)

- `unclear-need` (step 2) does not distinguish "the question itself is unclear" from "the question asks how to handle an unclear request" (syn-011).
- Third-person questions ("How should an owner…", or no subject; syn-004, 005, 009) leave the perspective unclear.

## Interpretation (unverified)

- **12/12 is not evidence that the definitions are clear.** Labeler 1's key was drafted with AI assistance from the same model family, so this mainly measures agreement between two runs of similar models, not whether people can use the taxonomy.
- The gap between the LLM (12/12) and humans (4–8/12) suggests the definitions are logically consistent when the decision order is followed step by step, but humans did not follow it (labeler 3's rationales name no steps). The procedure, not only the definitions, may be too demanding for people.
- The LLM's two points match labeler 3's report that perspective was hardest, and they are concrete enough to act on.

## Limitations

- One run of one model; no repeat runs to measure model consistency.
- The model is not independent of labeler 1.
- An LLM matching the key is what #11's classifier needs, but it says nothing about human reviewers.
