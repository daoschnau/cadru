# Phase 2 — Site conversion (CRO) applied to Cadru

Turn the strategy into concrete changes to the landing + journal. This is a checklist and a set of specs, not a redesign essay. Every change maps to a funnel stage and the message hierarchy from `positioning-messaging.md`.

> **Before editing any file, read the repo README.** `Cadru.dc.html` / `Jurnal.dc.html` use a custom `.dc.html` runtime — you may edit text/inline styles/HTML structure freely, but must not break `{{ }}`, `<sc-if>`, or the `<script data-dc-script>` block. Respect the sober visual system (no emoji in UI, no gradients).

## Landing page audit (in visitor order)

**Hero**
- One promise, above the fold, in the buyer's words (outcome + relief of the JTBD). Keep "Contracte sub control."
- **One primary CTA.** Today the same waitlist appears 3×; that's fine for repetition, but the *primary* action must be unmistakable and identical everywhere. No competing buttons.
- Sub-headline names the mechanism in one line (4 modules) so the promise feels concrete, not vague.
- Replace the fictional dashboard mockup ("Vega Trans S.R.L.") with something honest — a real screenshot when one exists, or an explicitly-illustrative diagram. Fake specifics erode trust in a trust category.

**Lead capture (the biggest lever)**
- Add a **lead magnet** offer alongside/above "join the waitlist" (see `funnel-and-leads.md`). Give value now, not just "later."
- Add **segmentation fields** (role; company size or contract volume) — 1–2 fields max.
- Rewrite the form's microcopy to reduce risk ("no spam, ~2×/month, unsubscribe anytime") and to state what they get.
- Make the success state do more than "you're on the list" — point them to the journal/roadmap ("while you wait, follow the build →"). Convert a dead-end into the next funnel step.

**Problem / Product / How-it-works / Approach / Maturity**
- Keep the education (it's the authority asset) but ensure each section ends by laddering back to the CTA or the journal.
- The **Approach** and **Maturity** sections are differentiation gold (deterministic, Crawl·Walk·Run) — make sure they're framed as *why Cadru is different*, not just abstract philosophy.

**Proof (currently the weakest layer)**
- Add a **founder/authority block**: who Chiril is, the workshop, why "built by a practitioner." This is the highest-trust element available pre-launch.
- Reserve **design-partner proof slots** (logos/quotes/case-study links) to fill as they materialize.
- Remove or clearly label anything fictional.

**Journal teaser / CTA / Footer**
- Journal teaser should sell "follow the build in real time," not just "read our blog."
- Final CTA repeats the single primary action.
- Fix provisional contact/name only when the founder decides — flag, don't silently change.

## Instrumentation (do this early — you can't optimize blind)

- Install privacy-friendly **analytics** (pageviews + events).
- Track **events**: CTA clicks, form submits, magnet downloads, journal subscribes — by source.
- Enforce **UTM discipline** on every link the founder shares (LinkedIn, email, communities) so you can see what actually drives qualified signups.
- Add **OG/meta tags** so shared links preview well (matters a lot for LinkedIn/build-in-public).

## Journal build items
See `build-in-public.md` — subscribe + RSS, real dated posts, public roadmap, changelog, "you shape it" loops, deep-linkable/shareable posts, SEO basics.

## Prioritization

Rank every item on **impact × effort**. Typical order for Cadru:
1. **Instrumentation** (analytics + events + UTM) — cheap, unlocks everything else. Do first.
2. **Lead capture upgrade** (magnet + segmentation + success-state next step) — highest funnel impact.
3. **Proof / founder authority block** — cheap trust win.
4. **Journal → build-in-public engine** — the retention + audience engine; bigger effort.
5. **ESP migration** — when the list justifies it.
6. **Deep-linkable posts / SEO / structural runtime decisions** — larger, do when the above are paying off.

## Output
A **Site & Assets Plan** in `marketing/strategy.md`: a prioritized table (item · funnel stage · impact · effort · notes), ready to hand to implementation. Implementation produces edits to the HTML files following the README's runtime rules — verify the page still renders after each change.
