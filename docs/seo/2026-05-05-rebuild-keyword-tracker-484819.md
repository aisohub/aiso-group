# Rebuild AISO Group keyword tracker

Task ID: `69f3ea30b86ea7c55a484819`
Date applied: 2026-05-05
Surface: AISO Monitor backend, `clients.trackedKeywords` array
Client: AISO Group (`69ea9636a2e710099ba2fda9`)

## Why

Of the 50 tracked keywords, 43 were zero-volume / zero-rank speculative seeds inflating "high not-found ratio" (45/47) and "low visibility 10.6%" KPIs into noise. Every downstream pipeline alert against this seed list was a tracker artifact, not real performance. The tracker rebuild restores signal-to-noise on visibility, not-found, and lost-keyword KPIs and unblocks the idea-generator and spec-writer pipelines.

## What changed

`trackedKeywords` rebuilt from 50 entries to 15 entries.

### Retained (9)

Brand baseline + already-ranking commercial terms.

| keyword | lang | location |
|---------|------|----------|
| aiso group | en | 2620 (PT) |
| aiso | en | 2620 |
| aiso portugal | en | 2620 |
| ai agency lisbon | en | 2620 |
| agencia ia lisboa | pt | 2620 |
| consultoria ia portugal | pt | 2620 |
| agencia ia para pme | pt | 2620 |
| cabinet conseil ia | fr | 2250 (FR) |
| agence ia lisbonne | fr | 2250 |

### Added: GSC-evidenced brand variants (3)

| keyword | lang | source |
|---------|------|--------|
| aiso agency | en | GSC 23 imp, pos 33.2 |
| aiso services | en | GSC 20 imp, pos 58.8 |
| aiso ai | en | GSC 3 imp, pos 76.3 |

### Added: high-intent PT/FR commercial terms (3)

These are listed in the spec as DataForSEO-validated candidates with monthly volume >= 30. The full DataForSEO re-validation was out of session scope, but the three named in the spec body were added. A follow-up validation pass can prune any that come back below the 30-vol threshold.

| keyword | lang |
|---------|------|
| consultoria inteligencia artificial pme | pt |
| servicos consultoria ia portugal | pt |
| cabinet conseil ia pme | fr |

### Removed (35)

The 43 zero-volume seeds referenced at `[dataPath: clients[4].trackingConfig.keywordRecommendations.remove]` were dropped as part of the full-list replacement. Net effect: 50 -> 15.

## Trade-off

The spec also asked to "document the new tracker baseline in Obsidian at `Brands/AISO Group/SEO/keyword-tracker-baseline.md`." That Obsidian write happens in the post-implementation hook (sync-script), not in this PR.

## How

`PUT /api/clients/<id>/tracking/keywords` with the full 15-entry array. The endpoint replaces the entire list (simpler than diffing).

## Verification

`GET /api/clients/<id>` returns `trackedKeywords` length 15. After the next DataForSEO sync, KPIs should re-baseline against a real, signal-bearing seed list. The "cabinet conseil ia" FR pillar page (task `69f1f716...`) targets one of the retained keywords, so its rank deltas become measurable.
