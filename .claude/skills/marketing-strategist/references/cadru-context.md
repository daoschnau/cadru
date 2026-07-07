# Cadru — grounded context

Read this before advising. It keeps recommendations tied to *this* company, not a generic SaaS. If any fact here is stale, update it (and the repo README) rather than working from memory.

## The product

**Cadru** — a simple CLM (Contract Lifecycle Management) for small teams in Moldova. Four modules: a **database**, **intake forms**, **contract templates**, and **automations** that pour data from the database into a template. Positioning line already live on the site: *"Contracte sub control — fără un departament juridic întreg."* (Contracts under control — without a whole legal department.)

Signing is via **QES** (qualified electronic signature) — locally relevant, a real differentiator vs. generic foreign tools.

**Philosophy** (this is the marketing wedge, not just the product): contract discipline as an engineering practice — **Crawl · Walk · Run** maturity, **contract-as-code**, **DRY** (framework contract + special conditions), and **deterministic > generative** ("AI ≠ automation; the 50-cent script"). This intellectual spine is the founder's authority content.

**Status:** early. The product itself is not built beyond the concept. There is **no real backend, admin, auth, or database** yet. The repo is the *marketing site only*. This means the near-term GTM job is **audience + waitlist + design partners**, not "drive signups to a live product."

## The market

- **Geography:** Moldova. Small country, small B2B market. The total addressable set of relevant orgs is likely hundreds to low thousands, not millions.
- **Implication:** precision over volume. Founder-led, high-touch. Every qualified lead matters. Referrals and reputation compound fast in a small market. Paid acquisition is a minor lever at best.
- **Language:** Romanian. All customer-facing copy ships in Romanian.
- **Category maturity:** "CLM" is jargon to most buyers here. Lead with the outcome and the pain, not the acronym.

## The buyers (working ICP — refine in Phase 1)

Likely segments, to be validated:
- **In-house jurist / jurisconsult** at an SME — drowning in scattered contracts, copy-paste, missed deadlines. The founder *is* this persona, which is a huge advantage.
- **Small-business owner / director** — no legal staff, handles contracts themselves, wants order without hiring a lawyer or buying enterprise software.
- **Office manager / administrator** — operationally responsible for contracts and renewals.

Pain triad already on the site: contracts scattered, copy-paste errors, missed deadlines.

## The founder — the single biggest asset

**Chiril Știrbu**, practicing jurisconsult. Runs practical workshops (e.g. ABSL Business Workshops, 26 June 2026: *"Contracte sub control — CLM practic, ce poate face un singur jurist, la biroul lui"*). 

Why this matters for GTM:
- **Authority + trust** in a trust-driven category (legal).
- **Warm offline audience** (workshop attendees = high-intent, pre-qualified leads).
- **Content muscle** — he already teaches this material; repurpose it into the journal, LinkedIn, launch webinar.
- The whole product story is credibly "built by a practitioner for practitioners." Lean into founder-led everything.

### The master document (canonical source material)
The founder maintains a **master document on CLM** (Romanian) — his whole body of knowledge and voice: philosophy (Crawl·Walk·Run, DRY, contract-as-code, engineering debt, deterministic vs. AI) plus dozens of concrete techniques. Parts of it already become workshop scripts, talks, and posts. **It is the raw material for every content deliverable** (journal, LinkedIn, lead magnets) and the source to ground/validate positioning claims — draft in his voice, from his substance, not generic marketing prose.

- **Location:** the **private** `daoschnau/cadru-internal` repo, at `source/CONTRACT_LIFECYCLE_MANAGEMENT.md` (kept private, not in this public repo). Both repos are normally in the working session, so read it from there when producing content.
- **How to use it:** it's long (~770 lines) — **grep for the relevant section** and pull the specific idea, rather than loading the whole file. Always write customer-facing output in Romanian.

## The current site (what exists today)

Static site on GitHub Pages: `https://daoschnau.github.io/cadru/`. No build step. Custom `.dc.html` runtime — **read the repo README before editing any file.**

- `Cadru.dc.html` — landing (hero + problem + product + how-it-works + approach + maturity + journal teaser + CTA + footer). Waitlist form appears 3× → posts to **Formspree** (`legaltechtalkmd@gmail.com`) + `localStorage`.
- `Jurnal.dc.html` — "product journal" blog, 5 **draft** articles, no real routing (state toggles, not URLs).

### Known gaps to exploit
- Waitlist captures **email only** — no segmentation, no qualification.
- Only one conversion offer ("join the list") — no lead magnet to raise opt-in.
- Journal is static placeholders — not yet a real "follow the build" engine (no subscribe, no RSS, no roadmap, no cadence).
- No analytics / event tracking / UTM discipline.
- Formspree is fine for capture but can't run nurture — ESP migration needed as the list grows.
- Social proof is placeholder/fictional (e.g. "Vega Trans S.R.L." mockup) — needs real authority + design-partner proof.
- Contact `legaltechtalkmd@gmail.com` and the name "Cadru" are both **provisional**.

## Constraints to respect
- Sober, legal-tech visual system (no emoji in UI, no gradients, no colored border-left cards). Marketing must fit this restraint — no hype-y growth-hacker aesthetics.
- Static site, no backend — solutions must work as front-end + external services (Formspree, an ESP, analytics) until a real backend exists.
- Founder time is the scarcest resource — plans must be executable by one busy practitioner, not a growth team.
