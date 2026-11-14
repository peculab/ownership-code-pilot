# Pain-point taxonomy v1 (draft)

Refs #8

- **Version:** v1.1 (2026-11-11), revised after blind-label round 1; **v1.1 is not yet tested**
- **Status:** draft for review, not validated
- **Inputs:** `examples/ownership-code/synthetic-scenarios.json` (v0.1.0, synthetic), `docs/CHALLENGE.md`
- **Data:** no personal data, real people, private groups, or prospect data were used
- **Authorship:** proposed by the contributor with AI drafting assistance (see PR "Cost and model details"); every label below is a contributor judgment, not model output accepted as-is
- **Experiments:** [`research/experiments/`](experiments/)

## Changelog

| Version | Date | Change | Reason |
|---|---|---|---|
| v1.0 | 2026-11-08 | First draft: 9 categories, one primary label per scenario | — |
| v1.1 | 2026-11-11 | Added a fixed decision order (section 3); added an `asker_perspective` field; narrowed `exit-readiness` to a residual category; stated that `buyer-assessment` requires a buyer perspective; renamed short display names | Round 1: 8/12 agreement, 3 of 4 disagreements involved `exit-readiness`, 2 seller questions mentioning buyers were labeled `buyer-assessment` ([record](experiments/2026-11-11-taxonomy-blind-label-r1/README.md)) |

Categories and scenario labels did not change between v1.0 and v1.1; only definitions and the decision procedure did.

## 1. Purpose and scope

The taxonomy labels **the underlying need behind a question**, so that retrieval and evaluation can be grouped by need. It does **not** label the person asking. Labels must never encode age, health, financial distress, family situation, or any other sensitive trait, even when a question hints at one (e.g. "retire" is not an age label).

One primary label per scenario, as the Issue requires. Secondary candidates are recorded only in the ambiguity section.

## 2. Categories

| ID | Short name | Definition | Include when | Exclude when |
|---|---|---|---|---|
| `exit-readiness` | Where to start | Residual owner-side category: the owner wants to prepare for a possible transition but names **no specific aspect** (dependency, records, or options to compare) | Asks what to do first, or what to improve in general | Names owner dependency → `owner-dependency`; asks for records → `value-evidence`; names options → `transition-path` |
| `owner-dependency` | Owner dependency | The business relies on the owner personally; the need is to make it run without them | Mentions decisions, relationships, or knowledge held by the owner; asks what to document | Asks how to prove revenue quality to outsiders → `value-evidence` |
| `value-evidence` | Revenue evidence | The need is to show, with records, what drives revenue and how durable it is (any perspective) | Asks which records explain revenue, customer concentration, or repeat business | Asks how to prepare in general → `exit-readiness` |
| `transition-path` | Compare transition options | Choosing between named transition options, timing, or structure | The question **names** options to compare (gradual vs. immediate, internal vs. external, timing) | Asks how to pay for a deal → `buyer-assessment` |
| `buyer-assessment` | Buyer assessment | The asker **is, or speaks for, a prospective buyer** judging a deal: affordability, risks, fixable vs. unsuitable problems | Buyer perspective on capital, diligence, or risk | An owner's question that only mentions buyers → owner-side categories; asks who is qualified to advise → `professional-boundary` |
| `professional-boundary` | Professional boundary | The need is to know what requires a licensed professional, or how to inform without giving personalized legal/financial advice | Mentions lawyer, accountant, lender, or "without giving advice" | General financing education with no boundary concern → `buyer-assessment` |
| `engagement-conduct` | Approach and conversation | How a team should approach an owner respectfully and without pressure | Asks how to start or conduct a conversation, especially unsolicited | Asks what content to share → use the content's category |
| `unclear-need` | Need unclear | The question lacks goals, timeline, or context needed to identify a need | Key facts are missing; the right next step is to ask for context | A need is identifiable even if details are missing |
| `workflow-governance` | Workflow governance (meta) | A question about how the AI-assisted workflow itself should behave | Asks about rejecting, escalating, or reviewing AI drafts | A business question → domain categories |

`unclear-need` and `workflow-governance` are not business pain points. They are kept as explicit labels so that the workflow can route them (`ask_for_context`, internal review) instead of forcing a wrong domain label.

### Asker perspective (separate field)

Each scenario also gets an `asker_perspective`, recorded separately from the label: `owner`, `buyer`, `team`, or `unspecified`. It describes **whose decision the question serves**, not who the person is, and it is never a sensitive trait. A question that mentions buyers is not automatically `buyer`.

## 3. Decision order

Apply the steps in order and stop at the first match.

1. Is it about how the AI workflow itself should behave? → `workflow-governance`
2. Is the need impossible to identify without more context? → `unclear-need`
3. Is it about how to approach or talk with an owner? → `engagement-conduct`
4. Is it about what needs a licensed professional, or the limits of advice? → `professional-boundary`
5. Is the perspective a prospective buyer judging a deal? → `buyer-assessment`
6. Does it ask which records show what drives revenue? → `value-evidence`
7. Owner side: names options to compare → `transition-path`; focuses on the owner's personal dependency → `owner-dependency`; otherwise → `exit-readiness`

## 4. Scenario labels

| ID | Perspective | Primary label | Rationale (decision step) |
|---|---|---|---|
| syn-001 | owner | `exit-readiness` | Owner asks where to begin; mentions buyers but is not one; names no specific aspect (step 7) |
| syn-002 | owner | `owner-dependency` | "Most daily decisions still depend on me" + what to document (step 7) |
| syn-003 | buyer | `buyer-assessment` | Buyer with limited capital asks what to check before financing (step 5) |
| syn-004 | owner | `transition-path` | Names two options: gradual transition vs. immediate sale (step 7) |
| syn-005 | unspecified | `value-evidence` | Asks which records explain revenue dependence (step 6) |
| syn-006 | owner | `exit-readiness` | Undecided owner asks what to improve in general (step 7) |
| syn-007 | buyer | `buyer-assessment` | Buyer distinguishing fixable problems from deal-breakers (step 5) |
| syn-008 | team | `engagement-conduct` | How to hold a respectful first conversation (step 3) |
| syn-009 | unspecified | `professional-boundary` | Which parts need a lawyer, accountant, lender, or other professional (step 4) |
| syn-010 | team | `professional-boundary` | Explaining financing **without** personalized advice (step 4) |
| syn-011 | team | `unclear-need` | No timeline, goals, or financial context (step 2) |
| syn-012 | team | `workflow-governance` | When an AI draft should be rejected and handed to a human (step 1) |

Coverage: 9 categories, 12 scenarios. 3 categories hold 2 scenarios each; 6 hold one.

## 5. Ambiguous cases

| ID | Chosen | Competing label | Why it is ambiguous | Rule that decides it |
|---|---|---|---|---|
| syn-001 | `exit-readiness` | `buyer-assessment`, `value-evidence` | Mentions what buyers need; could read as a records question | Perspective is the owner (step 5 fails); asks where to begin, not which records (step 6 fails) |
| syn-006 | `exit-readiness` | `owner-dependency`, `value-evidence` | "What can I improve" could target any of them | No specific aspect is named → residual category |
| syn-010 | `professional-boundary` | `buyer-assessment` | Topic is financing, but the constraint is advice limits | Step 4 comes before step 5 |
| syn-003 | `buyer-assessment` | `professional-boundary` | Financing options may need a lender | The asker needs judgment questions first, not a referral |
| syn-005 | `value-evidence` | `owner-dependency` | One listed dependency is the current owner | The question asks for records (step 6 before step 7) |

## 6. Reviewer disagreement

**Round 1 (2026-11-11, tested v1.0):** one second labeler labeled all 12 scenarios blind, using only the definitions (self-reported: had not seen other answers; 15 minutes). Raw agreement **8/12 (67%)**. With 12 items, no kappa statistic is reported. Full record: [`experiments/2026-11-11-taxonomy-blind-label-r1/`](experiments/2026-11-11-taxonomy-blind-label-r1/README.md).

| ID | Labeler 1 | Labeler 2 | Labeler 2 confidence |
|---|---|---|---|
| syn-001 | `exit-readiness` | `buyer-assessment` | high |
| syn-002 | `owner-dependency` | `transition-path` | medium |
| syn-004 | `transition-path` | `exit-readiness` | high |
| syn-006 | `exit-readiness` | `buyer-assessment` | medium |

**Round 2 (2026-11-12, tested v1.1):** a new labeler (labeler 3) labeled blind. Label agreement **4/12 (33%)**, perspective agreement **5/12 (42%)**; labeler 3 named perspective as the hardest part. syn-001, 002, and 004 disagreed in both rounds. Because the labelers and versions differ, the drop from 67% is not evidence that v1.1 is worse. **Debrief (2026-11-14): confirmed labeler 3 did not follow the decision order** — judged holistically rather than checking steps 1–7. Round 2's low agreement therefore cannot be read as evidence against the v1.1 definitions. Full record: [`experiments/2026-11-12-taxonomy-blind-label-r2/`](experiments/2026-11-12-taxonomy-blind-label-r2/README.md).

**Round 3 (2026-11-13, v1.1, same sheet as round 2):** labeler 4 agreed on **9/12** labels and **7/12** perspectives, versus 4/12 for labeler 3 on the same sheet, so individual variation outweighs version effects. All three humans labeled syn-002 `transition-path`. Proposed v1.2 changes (not applied) are in the [round 3 record](experiments/2026-11-13-taxonomy-blind-label-r3/README.md).

**LLM labeler (2026-11-13, v1.1):** a fresh Claude subagent given only the v1.1 sheet agreed on **12/12** labels and **11/12** perspectives. Because labeler 1's key was AI-assisted, this is not independent evidence that the definitions are clear; it suggests the decision order is consistent when followed step by step. Record: [`experiments/2026-11-13-taxonomy-llm-label/`](experiments/2026-11-13-taxonomy-llm-label/README.md).

## 7. Limitations

- 12 synthetic questions are too few to test whether categories are complete or balanced; most categories have one example.
- Categories were derived from these scenarios (bottom-up), not from public literature; no external source has been cited yet.
- v1.1 was revised by labeler 1 after seeing round-1 disagreements, and labeler 1's own labels did not change. The revision may favor labeler 1's reading; only round 2 can show whether it helps.
- Single primary label loses information for multi-need questions (section 5). Multi-label may be needed later.
- Labels are not validated against real owner questions, and must not be until approved, de-identified material exists.

## 8. Suggested next steps

1. Round 2 blind labeling (section 6).
2. Add 2–3 synthetic questions per single-example category to test the boundaries.
3. Use these labels and perspectives as the expected values in the #10 fixture schema and the #11 mock classifier.
