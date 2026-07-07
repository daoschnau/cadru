# Funnel, lead gen, nurture & metrics

Used in Phase 1 (architecture), Phase 3 (nurture), and Phase 5 (metrics). This is the demand engine.

## 1. Funnel architecture for *this* business

Don't copy a generic SaaS funnel. For niche, founder-led B2B legal-tech in a small market, the funnel is narrow and high-touch:

| Stage | Job | For Cadru | Conversion action |
|---|---|---|---|
| **Attract (TOFU)** | Earn attention from the right people | Workshops (offline), founder's LinkedIn, journal/build-in-public posts, professional communities (legal/HR/SME associations, chambers, ABSL), the occasional talk/podcast | Visit site / read a post |
| **Capture (TOFU→MOFU)** | Turn attention into a known, segmented lead | Waitlist **with segmentation** + a lead magnet with real standalone value | Give email + role/company |
| **Nurture (MOFU)** | Build trust, teach, stay top-of-mind | Journal digest + educational drip; invite to build-in-public | Open/click, reply, self-identify as high-intent |
| **Convert (BOFU)** | Turn interest into commitment | **Design-partner program**, founder demo calls, proof/case studies, founding-customer offer | Book a call / join design partners / pay |
| **Expand (post)** | Retain & multiply | Onboarding, referrals (huge in small markets), community | Refer, renew, advocate |

The scarce conversion is **Capture → Nurture → Convert**, not top-of-funnel volume. Optimize the middle.

## 2. Lead magnets (raise opt-in above "join the list")

"Join the waitlist" is a weak offer — it asks the visitor to give now for value later. Add a magnet that delivers value *immediately* and pre-qualifies:

Candidates (pick 1–2, all reuse the founder's existing material):
- **Contract discipline checklist** — "Are your contracts under control? A 15-point self-audit." High relevance, low effort to make.
- **The scattered-contracts audit** — a short interactive/printable "score your contract chaos" that ends with a tailored tip + soft CTA.
- **Template starter pack** — 1–2 real framework contracts with special-conditions structure (DRY in action).
- **The workshop, distilled** — the ABSL workshop as a short guide/recording. Warmest possible magnet: it's why they trust the founder.

Rules: the magnet must be genuinely useful *even if they never buy*, must map to the JTBD, and must capture segmentation at download.

## 3. Segmentation at capture

Capture more than email — but keep it to 1–2 extra fields so you don't tank conversion:
- **Role** (jurist / owner-director / office-manager / other) — drives nurture track and sales priority.
- **Company size** or **contract volume** — drives qualification.

Optional progressive profiling: ask more later, in the nurture emails, once trust exists. Don't front-load a long form.

Store the segment so nurture and sales can act on it. (Formspree can capture these fields today; a real ESP is needed to *act* on them — see §6.)

## 4. Nurture / lifecycle (Phase 3)

Once someone opts in, silence kills the relationship. Design sequences (all copy in Romanian):

**Welcome sequence (3–5 emails, on opt-in):**
1. Deliver the magnet + set expectations ("here's what you'll get, how often").
2. The founder's story / why Cadru exists — authority + empathy for the pain.
3. Teach one high-value idea (e.g. contract-as-code or DRY) — pure value, no ask.
4. Invite to follow the build (link the journal / roadmap) — turn subscriber into participant.
5. Soft qualification — "want early access / to shape it? reply and tell me your biggest contract headache." Replies = hottest leads.

**Ongoing nurture (steady cadence):**
- The **journal digest** — every new build-in-public post, emailed. This is the retention engine (see `build-in-public.md`).
- Educational drip from the founder's material (the workshop ideas).
- Periodic proof drops (design-partner wins) and, as launch nears, warm-up (see `launch-runway.md`).

Segment the tracks: a cold owner (Crawl) gets more education; a sophisticated jurist (Run) gets deeper product + design-partner invites sooner.

## 5. Design-partner program (the BOFU engine before a product exists)

In a pre-product, small market, **design partners are the growth engine.** They give you: real usage, feedback, testimonials/case studies (=proof), and the first paying cohort.

- **The offer:** early/free or discounted access in exchange for feedback + a public testimonial/logo + a case study. Frame it as *co-creation*, not charity — "help shape the tool built for people like you."
- **Who to recruit:** the warmest, best-fit segment (often jurists who resemble the founder), ideally from workshop attendees and the most-engaged nurture replies.
- **How many:** a handful (3–10). Enough for signal and proof, few enough to serve well by hand.
- **How it feeds marketing:** every design partner becomes journal content, a quote, a logo, a referral source. The build-in-public loop and the design-partner loop reinforce each other.

## 6. Tooling path

- **Now (small list):** Formspree for capture is fine. `localStorage` for UI persistence is fine.
- **When nurture starts / list grows:** migrate to a real **ESP** (e.g. an email/newsletter tool) so you can automate sequences, segment, and see opens/clicks. This is the single most important tooling upgrade for the funnel.
- **Analytics:** privacy-friendly analytics (page views + events) so you can see the funnel. Track CTA clicks and opt-ins as events, not just pageviews.

## 7. Metrics that matter (Phase 5)

Ignore vanity (impressions, raw traffic). For niche B2B, track:

| Stage | Metric | Rough orientation (validate with your data) |
|---|---|---|
| Capture | Opt-in rate (visitor → email), **by source** | Warm/authority traffic to a good offer can hit 5–15%+; cold is far lower. Track the trend, not the absolute. |
| Capture | Qualified signups **by segment** | The number that actually matters — quality over count. |
| Nurture | Email open / click / **reply** rate | Small warm B2B lists often see 30–50% opens. Replies are the real intent signal. |
| Convert | Signup → call/design-partner rate | This is where founder-led selling lives. |
| Convert | Design partners signed → activated | Proof + first revenue. |
| Expand | Referral rate | Compounds fast in a small market. |

Set the current baseline (much of it will be "0 / not instrumented" at first — that's the point). Review on a fixed cadence, keep a ranked backlog of experiments, ship the highest expected-impact one each cycle.
