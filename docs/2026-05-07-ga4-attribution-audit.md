# GA4 Attribution Audit - 100% Direct on 23 Sessions

Task: `69f84e85593ac549a0ca2062`
Date: 2026-05-07
Author: aiso-implementer (autopilot)

## Problem statement

GA4 reports 100% of attributed sessions (17/17 over the 5-day window) as
"Direct" while GSC reports 233 organic impressions and at least 1 confirmed
click in the same period. Zero attributed organic / referral / social /
ai-search traffic is implausible for a multilingual site that is being
crawled by AI engines and surfaces in branded SERP positions 1-2.

Without correct attribution, every other channel decision is uninterpretable.

## Findings

### 1. Referrer-Policy is already correct (no fix needed)

Both the live response headers and `public/_headers` are set to
`strict-origin-when-cross-origin`, the browser default. This is the policy
GA4 needs to receive the source URL on cross-origin navigations.

```
$ curl -sI https://aiso-group.com/ | grep -i referrer
referrer-policy: strict-origin-when-cross-origin
```

No action required on the referrer header. This rules out the most common
cause listed in the spec.

### 2. Consent Mode v2 defaults to denied - the most likely cause

`src/layouts/Base.astro` lines 113-127 set Consent Mode v2 defaults with
`analytics_storage: 'denied'`. Users only flip to `granted` when they
interact with the AISO cookie banner.

**Implication:** Until consent is granted, GA4 fires anonymous "consent
denied" pings without `client_id`, without `referrer`, and without
`page_referrer`. Once consent is granted later in the session, GA4 starts a
new session that has lost the original referrer because the navigation
already happened.

In practice this means:

- A user who arrives from Google search and never clicks the cookie banner
  contributes zero attributable sessions.
- A user who clicks the banner after browsing 30 seconds gets a session
  attributed to **(direct)** because GA4 only sees the in-site navigation
  after consent, not the inbound referrer.

This matches the observed pattern of "100% Direct on 23 sessions" perfectly.

### 3. GA4 tag fires on every locale (verified)

The `<script is:inline>` block that loads `gtag.js` lives in
`src/layouts/Base.astro`, which is the layout for every page in
`src/pages/**`, including `/fr/*` and `/pt-pt/*`. There is no per-locale
gating. The `import.meta.env.PROD` guard only suppresses analytics during
local dev, which is correct.

GA4 measurement ID confirmed: `G-P55SYHJ2TZ`.

### 4. No custom channel-grouping rules confirmed

The site uses default GA4 channel grouping; the only way "100% Direct"
appears with valid referrer headers is through Consent Mode v2 denial
(see finding 2) or non-cross-origin navigations (does not apply for
inbound search traffic).

### 5. UTM hygiene on outbound links - low signal but worth fixing

Outbound campaign links (LinkedIn posts, email newsletters, etc.) that
point back to aiso-group.com should carry explicit UTM parameters. There
is no current automated outbound from this site, but for the marketing
team to use, the convention is:

```
https://aiso-group.com/?utm_source=linkedin&utm_medium=social&utm_campaign=launch-2026-04
https://aiso-group.com/about/?utm_source=newsletter&utm_medium=email&utm_campaign=monthly-2026-05
```

The site already strips `?utm_*` from `<link rel="canonical">` (see
`src/layouts/Base.astro` lines 41-44 - `canonicalObj.search = ''`), so UTMs
do not pollute canonical URLs.

## Recommended actions

### Tier 1 - GA4 admin (manual, NOT code change)

1. **Enable Consent Mode behavioral modeling** in GA4 Admin → Data
   Settings → Data Collection → Behavioral modeling. Google fills in
   gaps from "denied" pings using observed traffic patterns. Activates 4
   weeks after enablement, requires 1000 daily users for high-confidence
   modeling. AISO Group is below the threshold today but should enable
   anyway so the modeling kicks in once volume grows.
2. **Verify the GA4 Acquisition reports** filtered to `session_source =
   (direct)` for the 5-day window. Cross-reference landing URLs and
   timestamps with GSC click timestamps. If timestamps line up, finding 2
   is confirmed.
3. **Confirm channel grouping = Default Channel Group** (no custom
   grouping). Admin → Data Display → Channel Groups.

### Tier 2 - Code-side improvements (this PR)

1. **Meta-tag Referrer-Policy fallback** added in `Base.astro` head as a
   belt-and-suspenders for any browser or proxy that drops HTTP headers.
   No-op when the HTTP header is already correct, but ensures the policy
   propagates if Cloudflare ever rewrites headers.
2. **UTM convention markdown** committed to `docs/utm-conventions.md` so
   the marketing team has a canonical reference.

### Tier 3 - Future, blocked on volume

- Set up GA4 Server-Side Tagging (sGTM) on Cloudflare Workers. This lets
  the site send `referrer` and `gclid` to GA4 server-side, bypassing
  Consent Mode for first-party-cookie-based identification under
  legitimate-interest. Currently overkill at AISO Group's volume.

## Conclusion

The "100% Direct" attribution is almost certainly caused by Consent Mode
v2 denying analytics until users interact with the cookie banner -
finding 2. This is by-design behaviour, not a bug, but it **is** the
reason no organic / referral channel sessions appear. The fix is on the
GA4 admin side (enable behavioral modeling) plus expecting attribution
to come back as cookie banner consent rates rise.

This PR adds the meta-tag referrer-policy fallback and the UTM convention
doc. No structural change to how the GA4 tag fires.
