# Pain-point taxonomy blind-label test (v1.1, the version used in rounds 2 and 3)

> English translation of the sheet the round-2 and round-3 labelers saw (originally shown in Traditional Chinese). Answer columns are left blank. Recorded results: [round 2 `labels.csv`](../2026-11-12-taxonomy-blind-label-r2/labels.csv), [round 3 `labels.csv`](../2026-11-13-taxonomy-blind-label-r3/labels.csv).

## Instructions

Choose one **asker perspective** and one **label** for each of the 12 questions below; it should take about 20 minutes. This test checks whether the definitions are clear. There is no answer key.

1. Read "Decision order" and "Label definitions" before answering.
2. For each question, pick the perspective first, then **check the decision order from top to bottom**, stopping at the first condition that matches.
3. Judge what the asker is actually stuck on, not keywords in the question.
4. **The rationale column is required**: write which step you stopped at, and whether there was another candidate label.
5. Answer independently: do not discuss with anyone else or look at anyone else's answers. If you took round 1, please do not take this one.

## Decision order

Check from top to bottom, stopping at the first match.

1. Is it about how the AI workflow itself should behave? → **I**
2. Is the need impossible to identify without more context? → **H**
3. Is it about how to approach or talk with an owner? → **G**
4. Is it about what needs a licensed professional, or the limits of advice? → **F**
5. Is the perspective a prospective buyer judging a deal? → **E**
6. Does it ask which records show what drives revenue? → **C**
7. Owner side: the question names options to compare → **D**; focuses on the owner's personal dependency → **B**; otherwise → **A**

## Label definitions

**Asker perspective** is "whose decision this question serves," not who the question mentions. An owner asking "what does a buyer need" still has an owner perspective.

| Perspective | Meaning |
| --- | --- |
| Owner | The question serves the owner's own decision |
| Buyer | The question serves a prospective buyer's judgment of a deal |
| Team | The question serves the team's decision on how to act |
| Unspecified | Cannot tell which side it is |

| Code | Label | Definition | Include when | Exclude when |
| --- | --- | --- | --- | --- |
| A | Where to start | Owner-side residual category: the owner wants to prepare for a possible transition but names **no specific aspect** | Asks what to do first, or what to improve in general | Names owner dependency → B; asks for records → C; names options → D |
| B | Owner dependency | The business relies on the owner personally; the need is to make it run without them | Mentions decisions, relationships, or knowledge held by the owner; asks what to document | Asks how to prove revenue quality to outsiders → C |
| C | Revenue evidence | The need is to show, with records, what drives revenue and how durable it is (any perspective) | Asks which records explain revenue, customer concentration, or repeat business | Asks about general preparation → A |
| D | Compare transition options | Choosing between **named** transition options, timing, or structure | The question **names** options to compare | Asks how to pay for a deal → E |
| E | Buyer assessment | The asker **is, or speaks for, a prospective buyer** judging a deal | Buyer perspective on capital, diligence, or risk | An owner's question that only mentions buyers → A–D; asks who is qualified to advise → F |
| F | Professional boundary | The need is to know what requires a licensed professional, or how to inform without giving personalized legal/financial advice | Mentions lawyer, accountant, lender, or "without giving advice" | General financing education with no boundary concern → E |
| G | Approach and conversation | How a team should approach an owner respectfully and without pressure | Asks how to start or conduct a conversation | Asks what content to share → categorize by the content |
| H | Need unclear | The question lacks goals, timeline, or context needed to identify a need | Key facts are missing; the right next step is to ask for context | A need is identifiable even if details are missing → A–G |
| I | Workflow governance | A question about how the AI-assisted workflow itself should behave | Asks about rejecting, escalating, or reviewing AI drafts | A business question → A–G |

## Questions

Same questions as round 1; see [`../2026-11-11-taxonomy-blind-label-r1/test-sheet-v1.0.md`](../2026-11-11-taxonomy-blind-label-r1/test-sheet-v1.0.md). Answer fields: perspective, label, confidence (high/medium/low), rationale (step stopped at, other candidate).
