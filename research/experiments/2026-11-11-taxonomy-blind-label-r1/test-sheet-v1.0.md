# Pain-point taxonomy blind-label test (v1.0, the version used in round 1)

> English translation of the sheet the round-1 labeler saw (originally shown in Traditional Chinese). Answer columns are left blank. Recorded results: [`labels.csv`](labels.csv).

## Instructions

Choose **one** best-fitting label for each of the 12 questions below; it should take about 15 minutes. This test checks whether the label definitions are clear. There is no answer key, so a "wrong" answer is not a problem.

1. Read the label definitions before answering.
2. Choose one label per question: judge what the asker is actually stuck on, not keywords in the question.
3. When two labels both seem to fit, pick the one you think is primary and note the other candidate in the rationale column.
4. Answer independently: do not discuss with anyone else or look at anyone else's answers.
5. Confidence: choose high, medium, or low.

## Label definitions

| Code | Label | Definition | Include when | Exclude when |
| --- | --- | --- | --- | --- |
| A | Exit readiness / where to start | The owner lacks a starting point or a preparation plan for a possible transition | Asks "what's the first step" or "what should I improve before deciding" | Focuses on owner dependency or a specific record type → B or C |
| B | Owner dependency and transferability | The business relies on the owner personally; the need is to make it run without them | Mentions decisions, relationships, or knowledge held by the owner; asks what to document | Asks how to prove revenue quality to outsiders → C |
| C | Value evidence and records | The need is to show, with records, what drives revenue and how durable it is | Asks which records explain revenue, customer concentration, or repeat business | Asks about general preparation → A |
| D | Transition path choice | Choosing between transition options, timing, or structure | Compares gradual vs. immediate, internal vs. external, or timing options | Asks how to pay for a deal → E |
| E | Buyer-side assessment | A prospective buyer needs to judge a deal: affordability, risks, fixable vs. unsuitable problems | Asked from the buyer's side about capital, diligence, or risk | Asks who is qualified to advise → F |
| F | Professional boundary | The need is to know what requires a licensed professional, or how to inform without giving personalized legal/financial advice | Mentions lawyer, accountant, lender, or "without giving advice" | General financing education with no boundary concern → E |
| G | Respectful engagement | How a team should approach an owner respectfully and without pressure | Asks how to start or conduct a conversation, especially unsolicited | Asks what content to share → categorize by the content |
| H | Need not yet identifiable | The question lacks goals, timeline, or context needed to identify a need | Key facts are missing; the right next step is to ask for context | A need is identifiable even if details are missing → A–G |
| I | Workflow governance | A question about how the AI-assisted workflow itself should behave | Asks about rejecting, escalating, or reviewing AI drafts | A business question from an owner or buyer → A–G |

Short display names in the dropdown: A Exit readiness, B Owner dependency, C Value evidence, D Transition path, E Buyer assessment, F Professional boundary, G Engagement conduct, H Need unclear, I Workflow governance.

## Questions

| # | Scenario ID | Question |
| --- | --- | --- |
| 1 | syn-001 | I may want to retire in a few years, but I do not know what information a potential buyer would need. Where should I begin? |
| 2 | syn-002 | My business is profitable, but most daily decisions still depend on me. What should I document before considering a transition? |
| 3 | syn-003 | I am interested in buying a small business but have limited capital. What questions should I ask before considering financing options? |
| 4 | syn-004 | How can an owner compare a gradual transition with an immediate sale without assuming either is always better? |
| 5 | syn-005 | What records help explain whether revenue depends on repeat customers, one large customer, or the current owner? |
| 6 | syn-006 | I have not decided whether to sell. What can I improve now that would still help the business if I keep it? |
| 7 | syn-007 | How should a buyer distinguish operational problems that can be improved from risks that make a deal unsuitable? |
| 8 | syn-008 | What does a respectful first conversation about succession look like when an owner has not asked for an offer? |
| 9 | syn-009 | Which parts of a business-transition discussion require a lawyer, accountant, lender, or other licensed professional? |
| 10 | syn-010 | How can a team explain financing structures without giving personalized financial or legal advice? |
| 11 | syn-011 | What information is still missing when someone says they want to sell quickly but gives no timeline, goals, or financial context? |
| 12 | syn-012 | When should an AI-generated draft be rejected and handed to a human rather than revised automatically? |

Questions are translated from the original synthetic fixtures (`examples/ownership-code/synthetic-scenarios.json`); translation may affect judgment, e.g. "a potential buyer" in syn-001.
