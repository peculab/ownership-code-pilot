# Data handling

This is a public repository. Assume every commit, deleted file, Issue, log, and Pull Request can remain publicly recoverable.

## Allowed

- Synthetic fixtures clearly labeled `synthetic`.
- Public sources with URL, access date, short attributed summary, and applicable license or terms.
- Partner material explicitly approved for public repository use.
- De-identified examples that cannot reasonably be linked back to a person.

## Not allowed

- Names, emails, phone numbers, addresses, account IDs, or customer/prospect lists.
- Private Facebook-group posts, direct messages, meeting transcripts, or screenshots without explicit publication permission.
- API keys, access tokens, cookies, credentials, private endpoints, or account exports.
- Sensitive traits, inferred vulnerabilities, private financial details, or hidden profiling labels.
- Material copied in excess of its license or platform terms.

## Provenance record

Each fixture or source card should state:

```yaml
id: stable-non-personal-id
provenance: synthetic | public | partner-approved
source_url: null
accessed_on: YYYY-MM-DD
allowed_use: evaluation-only | documentation | public-example
contains_personal_data: false
notes: why this can be shared
```

## Before using an AI service

Confirm the material is allowed to leave the local environment, minimize the input, review the provider's retention settings, and record the model/version. If permission is unclear, do not upload it.

## If something sensitive is committed

Stop sharing the link, notify maintainers privately using [SECURITY.md](../SECURITY.md), revoke exposed credentials immediately, and assess history cleanup. Deleting the latest file is not enough to remove it from Git history.
