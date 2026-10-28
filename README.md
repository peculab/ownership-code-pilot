# Ownership Code Pilot

**An open-source, human-reviewed AI workflow for turning real customer questions into useful, traceable responses.**

[繁體中文](README.zh-TW.md) · [Challenge brief](docs/CHALLENGE.md) · [Good first issues](https://github.com/peculab/ownership-code-pilot/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22) · [Contributing](CONTRIBUTING.md)

## The question

Can AI help a human team identify recurring customer pain points, prepare useful responses grounded in approved sources, and recognize when a person should take over—without pretending AI is human or sending unapproved outreach?

This repository develops the reusable workflow, evaluation methods, and reference implementation. **Ownership Code contributed the first business scenario; it does not exclusively own the open-source project or contributors' work.** Other communities and organizations may adapt the same core with their own approved data, accounts, and model providers.

## First public use case

Ownership Code works with business owners, buyers, operators, and investors. Its current relationship-building process depends on experienced people researching questions, understanding context, offering useful information, and deciding when a direct conversation is appropriate.

The first pilot tests a narrower workflow:

```text
approved or synthetic input
        ↓
identify the question and evidence-backed pain point
        ↓
retrieve approved source material
        ↓
draft a useful response with citations and uncertainty
        ↓
human review: approve, revise, reject, or take over
        ↓
record feedback for evaluation
```

It does **not** automate private-community scraping, impersonation, psychological manipulation, or unapproved messaging. See [Safety](docs/SAFETY.md).

## What we are building

- A provider-neutral workflow that does not require one model vendor.
- A small reference dataset made only from synthetic or approved, de-identified scenarios.
- Pain-point classification and retrieval baselines.
- Human-review and handoff rules.
- An evaluation harness for relevance, factual support, safety, and usefulness.
- A documented Ownership Code example under `examples/ownership-code/`.

The initial milestone is a reviewable prototype—not an autonomous sales agent and not a promise of business results.

## Ways to contribute

You do not need to build the whole system. Start with one small outcome:

| Area | Example contribution |
| --- | --- |
| Research | Turn synthetic questions into a clear pain-point taxonomy |
| Knowledge | Convert an approved source into a traceable case card |
| UX | Design approve / revise / reject / human-handoff states |
| AI | Build a classification or retrieval baseline |
| Evaluation | Score response usefulness, support, uncertainty, and safety |
| Engineering | Connect input → retrieval → draft → review in a minimal flow |
| Documentation | Improve setup, examples, diagrams, or contributor onboarding |

Look for [`good first issue`](https://github.com/peculab/ownership-code-pilot/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22), `help wanted`, and effort labels. Comment with your proposed approach before starting larger work.

## Bring your own model and Token budget

This project follows **Bring Your Own Key (BYOK)**:

- Never commit an API key or access token.
- Contributors choose their own supported model provider.
- Each deployer pays for its own model, hosting, and third-party usage.
- Tests should run on small fixtures and provide a no-network or mock path when practical.
- Provider-specific connectors belong at the edge; the core data contracts stay portable.

Copy `.env.example` when local configuration becomes necessary. A real `.env` must remain ignored.

## Public and private boundaries

Safe for this public repository:

- Source code, architecture, prompts, schemas, and evaluation rubrics.
- Synthetic or explicitly approved, de-identified examples.
- Public-source links with access dates and short attributed summaries.
- Issues, design discussions, and reproducible test results.

Never commit:

- Customer, prospect, or member lists and contact details.
- Private Facebook-group content or restricted community material.
- Meeting transcripts or partner files that were not approved for publication.
- Credentials, tokens, private prompts, or account configuration.
- Messages sent to real people without authorization and documented consent.

Read [Data handling](docs/DATA_HANDLING.md) before contributing any examples.

## Participation and credit

Contributions are recorded through Issues, commits, and Pull Requests. Accepted contributors may be credited in release notes and public demos with their consent.

Participation does not guarantee adoption, payment, an internship, employment, equity, company formation, or a commercial relationship with PecuLab or Ownership Code. Any such arrangement requires a separate written agreement. Contributors grant rights only under the repository license and retain the credit shown in the project history.

## Project status

**Exploration / pre-alpha.** The challenge has been framed; public baselines, interfaces, and success thresholds are being developed. No production deployment or automated external outreach is approved.

See [Getting started](docs/GETTING_STARTED.md), [Architecture](docs/ARCHITECTURE.md), [Evaluation](docs/EVALUATION.md), and [Roadmap](docs/ROADMAP.md).

## License

Licensed under the [Apache License 2.0](LICENSE). Organization names and trademarks remain the property of their respective owners; the license does not grant trademark rights.
