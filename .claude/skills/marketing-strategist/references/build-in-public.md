# Build-in-public — turning the Jurnal into a "follow the build" engine

This directly answers the founder's second goal: *let an audience follow the creation, refinement, and improvement of the product in real time.* The existing `Jurnal.dc.html` is the seed; this turns it into a growth + trust engine.

## Why build-in-public is the right motion here

- **Trust category + tiny market:** watching a credible practitioner build in the open manufactures the trust that legal buyers require, at a scale paid ads never could here.
- **Content flywheel:** the founder already produces the ideas (workshop). Build-in-public repurposes work he's doing anyway into marketing.
- **Co-creation → retention:** subscribers who watch (and influence) the build feel ownership. They become design partners, referrers, and launch-day buyers.
- **Compounding owned asset:** every post is durable, searchable, shareable — unlike a rented feed.

## The content system

**Cadence beats volume.** One reliable post every 1–2 weeks outperforms sporadic bursts. Pick a cadence the founder can sustain given his hours (from discovery) and *never miss it*.

**Four content pillars** (rotate; don't be all-product):
1. **Progress** — what we built/decided this week, and the tradeoffs. The literal "build" log.
2. **Education** — the founder's authority material: Crawl·Walk·Run, contract-as-code, DRY, deterministic vs. generative. This is what earns the audience.
3. **Proof** — design-partner stories, small wins, real problems solved. As they exist.
4. **Point of view** — opinionated takes that define the category ("AI ≠ automation"). This is how you become *the* voice, not a vendor.

Each post = one idea, one takeaway, one soft CTA (subscribe / follow / become a design partner).

## What to add to the site (Phase 2 build items)

Upgrade the Jurnal from static placeholders into a real engine:

1. **Subscribe** — an explicit "follow the build" opt-in (email), separate from the product waitlist but feeding the same list with a tag. Add **RSS** so power users and aggregators can follow without email.
2. **Real posts on a cadence** — replace the 5 drafts with published, dated entries; keep a visible publish rhythm.
3. **Public roadmap / "what we're building now"** — a lightweight, honest status board (Now / Next / Later). This is the single strongest "real-time following" feature: people return to watch it move.
4. **Changelog** — short "shipped this week" entries. Momentum is visible and motivating.
5. **"You shape it" loops** — explicit calls for input ("which of these two should we build next? reply / vote"). Converts passive readers into participants and surfaces demand.
6. **Shareability** — clean per-post URLs (note: the current runtime toggles state, not URLs — real deep-links need addressing so posts can be shared/indexed), OG/meta tags for link previews, obvious share-to-LinkedIn.
7. **SEO basics** — titles, meta descriptions, OG tags, a sitemap; the education pillar can pull organic search over time.

> Implementation must respect the repo's `.dc.html` runtime — read the README before editing. Deep-linkable posts and RSS may be the trigger to consider migrating the journal to plain static HTML or a static-site generator; flag that trade-off rather than hacking the runtime.

## Distribution — don't just publish, propagate

A post nobody sees isn't build-in-public, it's a diary. Every entry gets:
- **Cross-posted to the founder's LinkedIn** (native text + link), where the B2B audience actually is.
- **Emailed to the list** as the journal digest (the nurture engine from `funnel-and-leads.md`).
- **Seeded into relevant communities** where appropriate (no spam — contribute, then link).

The loop: *build → post → cross-post + email → replies/engagement → new subscribers + design-partner leads → more to build about.*

## Guardrails
- **Honesty:** build-in-public only works if it's real. Show the messy parts, the changed decisions, the things that didn't work. Curated perfection reads as marketing and kills trust.
- **Fit the sober brand:** no hype, no emoji-laden growth-bro tone. Restrained, credible, practitioner voice — consistent with the visual system.
- **Sustainable:** tie cadence to the founder's real capacity. A broken streak damages trust more than a slower-but-kept one.
