# Add 14 untracked competitor brands to LLM Monitor brand-ranking config

Task ID: `69f84e84593ac549a0ca205a`
Date applied: 2026-05-05
Surface: AISO Monitor backend, `clients.trackedCompetitors` array
Client: AISO Group (`69ea9636a2e710099ba2fda9`)

## Why

Citation-gap analysis surfaced a stable set of competitor brands consistently appearing in AI responses where AISO Group does not. lusoai.com appeared in 14 of the top 25 gap URLs; the Big Four (accenture, deloitte, kpmg, ey) plus jelly.pt and bdo.pt round out the consistent set. Without these tracked, every "low visibility" alert was a one-sided measurement with no head-to-head competitive benchmark.

## What changed

Tracked-competitor list grew from 20 to 23 entries by adding 3 brands that were not yet present. The other 11 from the spec's 14-brand list were already tracked.

### Added (3)

- `brightai.pt` (Bright AI)
- `codeforall.com` (Code for All_)
- `brandabilityagency.com` (Brandability)

### Already tracked (11 of 14 from the spec)

- lusoai.com, jelly.pt, accenture.com, deloitte.com, bdo.pt, kpmg.com, ey.com, 3hash.pt, aisuperior.com, alter-solutions.pt, iaportugal.pt

`inteligenciaartificialhoje.pt` was also already tracked (the spec listed 14, including this one as a fallback).

## How

API: `POST /api/competitors/<clientId>/track` with `{ "domain": "<root-domain>" }`. The endpoint is idempotent and auto-populates display name and brand aliases from the homepage.

## Verification

`GET /api/clients/<clientId>` returns `trackedCompetitors` length 23. After the next LLM Monitor run, the three new brands should appear in the brand-rankings table with non-null visibility, sentiment, and SOV scores.
