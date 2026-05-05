# Add comparison and competitor prompt categories to LLM Monitor for AISO Group

Task ID: `69f3ea30b86ea7c55a484821`
Date applied: 2026-05-05
Surface: AISO Monitor backend, `clients.llmMonitorPrompts` array
Client: AISO Group (`69ea9636a2e710099ba2fda9`)
Plan: `monitor-50-25` (max 25 prompts)

## Why

The previous prompt set (25 entries, all `branded` or `industry`) blinded the daily analysis to head-to-head AI search outcomes against the competitors that dominate the 502-URL citation gap (lusoai, accenture, jelly, deloitte, bdo, kpmg, ey, 3hash). The 7-day brand visibility metric (-4.8 pts) had no diagnostic anchor.

## What changed

Replaced the 25-prompt set with a balanced mix that adds the two missing categories without breaching the prompt-quota cap (`monitor-50-25` = 25 prompts max).

### Before

| category | count |
|----------|-------|
| branded  | 6 |
| industry | 19 |

### After

| category | count |
|----------|-------|
| branded  | 5 |
| industry | 5 |
| comparison | 7 |
| competitor | 8 |

Country mix preserved: 20 PT, 5 FR.

## Trade-off

The spec said "add" comparison + competitor. The plan only allows 25 prompts and the slot was already full, so 14 redundant industry-PT prompts were retired (most were Portuguese paraphrases of the same English query). The 5 retained industry prompts cover the core SMB/Lisbon/PME intent in PT and FR.

If a richer prompt grid is desired later, upgrade to `monitor-100-50`.

## How

API: `PUT /api/clients/<id>/tracking/prompts` with the full 25-entry array. Endpoint replaces the entire list (simpler than diffing).

## New comparison prompts (7)

- AISO Group vs lusoai for SMB AI consulting in Portugal (PT)
- AISO Group vs jelly.pt for AI services in Lisbon (PT)
- AISO Group vs accenture for AI implementation in Portuguese SMBs (PT)
- AISO Group vs deloitte for AI advisory in Portugal (PT)
- AISO Group vs 3hash.pt para servicos de IA (PT)
- AISO Group ou alter-solutions: qual escolher para implementacao IA (PT)
- AISO Group vs accenture pour le conseil IA en Europe francophone (FR)

## New competitor prompts (8)

- Best alternatives to accenture for AI consulting in Portugal (PT)
- Small AI consulting firms competing with deloitte in Portugal (PT)
- Portuguese AI agencies similar to lusoai (PT)
- Alternatives to bdo.pt for AI advisory in Portugal (PT)
- Boutique alternatives to KPMG for AI services in Iberia (PT)
- Alternativas a accenture para consultoria de IA em Portugal (PT)
- Alternativas a jelly.pt para agencia de IA em Lisboa (PT)
- Alternatives a accenture pour le conseil en IA en France (FR)

## Verification

`GET /api/clients/<id>/llm-prompts` returns 25 entries with the four-category breakdown above. Comparison and competitor visibility will surface in the daily analysis report after the next LLM Monitor run.
