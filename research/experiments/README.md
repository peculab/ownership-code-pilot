# Experiments

Records of small, reproducible experiments behind research artifacts. Each experiment has its own folder named `YYYY-MM-DD-<topic>-<round>/` and contains:

- `README.md` (and optionally `README.zh-TW.md`): question, materials, procedure, results, observations, interpretation, limitations
- the materials exactly as participants saw them
- raw results as CSV

Rules: synthetic or approved data only; participants are anonymous (`labeler-1`, `labeler-2`, …), and no names, contact details, or personal information are recorded. Facts, interpretation, and model output are kept in separate sections.

| Folder | Date | Question | Status | Result |
|---|---|---|---|---|
| [`2026-11-11-taxonomy-blind-label-r1`](2026-11-11-taxonomy-blind-label-r1/README.md) | 2026-11-11 | Can a second person apply pain-point taxonomy v1.0 consistently? | Done | 8/12 agreement |
| [`2026-11-12-taxonomy-blind-label-r2`](2026-11-12-taxonomy-blind-label-r2/README.md) | 2026-11-12 | Can a new labeler apply v1.1 (decision order + perspective) consistently? | Done; debrief pending | 4/12 labels, 5/12 perspectives |
| [`2026-11-13-taxonomy-blind-label-r3`](2026-11-13-taxonomy-blind-label-r3/README.md) | 2026-11-13 | Does a second new labeler reproduce round 2 on the same v1.1 sheet? | Done | 9/12 labels, 7/12 perspectives |
| [`2026-11-13-taxonomy-llm-label`](2026-11-13-taxonomy-llm-label/README.md) | 2026-11-13 | How does an LLM label the same v1.1 sheet? | Done | 12/12 labels, 11/12 perspectives (not independent of labeler 1) |
