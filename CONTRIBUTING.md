# Contributing

Thank you for helping build a reusable, safe, human-reviewed AI workflow. Research, design, evaluation, documentation, and code contributions are all welcome.

## Start here

1. Read the [challenge](docs/CHALLENGE.md), [safety policy](docs/SAFETY.md), and [data rules](docs/DATA_HANDLING.md).
2. Choose an open Issue labeled `good first issue` or `help wanted`.
3. Comment with your intended approach, expected outcome, time zone, and help needed.
4. Wait for scope confirmation before a large change. Small typo or documentation fixes may go directly to a Pull Request.
5. Fork the repository or create a branch such as `issue-12-evaluation-fixtures`.
6. Submit one focused Pull Request and link the Issue with `Closes #12` or `Refs #12`.

## Definition of done

- The promised artifact is easy to find and review.
- Claims have sources or reproducible test evidence.
- Facts, contributor interpretation, and model output are distinguishable.
- Synthetic or approved data is labeled with provenance and allowed use.
- Tests or review steps are documented, including failures and limitations.
- No credential, personal data, restricted content, or unapproved outreach is included.
- Documentation is updated when an interface or workflow changes.

## Small-task rule

Prefer work that one person can review within a week. Split broad ideas into an Issue for the interface or decision, one for a fixture or baseline, and one for implementation. A design discussion is not a commitment to merge every proposed feature.

## Provider neutrality and cost

Do not make a paid provider necessary for the core test suite. Put provider integrations behind a connector, document model/version and Token or cost assumptions, and include a mock path when practical. Never commit `.env` or real keys.

## Rights and credit

By submitting a contribution, you certify that you have the right to provide it and agree that accepted work is licensed under Apache License 2.0. Commit and Pull Request history provides attribution. Do not contribute employer, school, client, or third-party material without permission.

Participation does not create a promise of adoption, payment, internship, employment, equity, or company formation. Any separate commercial relationship needs a written agreement.

## Conduct and safety

Follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Maintainers may close or reject work that enables impersonation, spam, restricted-community scraping, covert manipulation, or unapproved external contact.
