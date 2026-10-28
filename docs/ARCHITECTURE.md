# Reference architecture

The design keeps domain examples and model providers outside the reusable core.

```text
synthetic / approved input
          │
          ▼
   input validation ── reject restricted or sensitive data
          │
          ▼
  pain-point classifier
          │
          ▼
 approved-source retrieval
          │
          ▼
 draft + citations + uncertainty
          │
          ▼
 human review ── approve / revise / reject / take over
          │
          ▼
 evaluation log (no personal data)
```

## Proposed boundaries

- `core/`: provider-neutral contracts and workflow logic.
- `connectors/`: optional model or storage adapters; keys stay in local environment variables.
- `evaluation/`: fixtures, rubrics, runners, and reproducible results.
- `examples/ownership-code/`: the first public use case, using only approved or synthetic material.
- `docs/`: decisions, safety rules, setup, and contributor guidance.

## Minimum data contract

An input needs an opaque ID, question text, provenance, permission status, and allowed use. A draft needs selected evidence, response text, uncertainty, review status, and version metadata. Do not add names, emails, phone numbers, account identifiers, or hidden sensitive traits.

## Portability

Core tests must not require a paid API. Model connectors should implement the same interface and document cost assumptions. A mock connector should support onboarding and continuous integration.

This architecture is a proposal. Changes should be discussed in an Issue and recorded through a Pull Request.
