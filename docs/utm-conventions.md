# UTM Conventions for aiso-group.com

Use UTM parameters on every outbound link that points back to
`aiso-group.com`. Without UTMs, GA4 falls back to "Direct" on Consent Mode
denial, which collapses channel attribution.

## Format

```
https://aiso-group.com/<path>/?utm_source=<source>&utm_medium=<medium>&utm_campaign=<campaign>
```

All three of `utm_source`, `utm_medium`, `utm_campaign` are required for
every outbound link. `utm_term` and `utm_content` are optional.

## Standard values

| Channel              | utm_source     | utm_medium | Example utm_campaign            |
|----------------------|----------------|------------|--------------------------------|
| LinkedIn personal    | linkedin       | social     | launch-2026-04                  |
| LinkedIn company     | linkedin-co    | social     | brands-page-2026-05             |
| X / Twitter          | twitter        | social     | thread-specialist-vs-generalist |
| Email newsletter     | newsletter     | email      | monthly-2026-05                 |
| Cold outreach        | outreach       | email      | q2-cold-2026                    |
| Referral partners    | partner-<slug> | referral   | partner-launch-2026-04          |
| Paid search          | google         | cpc        | brand-2026-05                   |
| Paid social          | linkedin       | cpc        | retargeting-2026-05             |
| AI search experiment | <engine-slug>  | ai-search  | gpt-source-2026-05              |

## Canonical URLs

`Base.astro` strips `utm_*` from `<link rel="canonical">` so UTM-tagged
links never pollute canonical URLs in search results. Safe to use freely.

## Attribution check

After running an outbound campaign, confirm GA4 picks up the source:

1. Open GA4 → Reports → Acquisition → Traffic acquisition
2. Filter `Session source` for the campaign source
3. Cross-check session count against expected click volume from the
   distribution platform (LinkedIn analytics, email-tool clicks, etc.)
