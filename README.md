# Cadru — site de produs (landing + jurnal)

Site static de prezentare pentru **Cadru**, un CLM (Contract Lifecycle Management)
simplu pentru echipe mici din Moldova. Repo-ul conține **doar site-ul de
prezentare** — nu produsul în sine. Live pe GitHub Pages:
<https://daoschnau.github.io/cadru/>

> Numele „Cadru" este **provizoriu** (apare doar ca text, nu ca logo/imagine — ușor de schimbat).

Pentru contextul complet (originea conținutului, deciziile de produs, workshop-ul
sursă), vezi [`BRIEF.md`](./BRIEF.md). README-ul de față e rezumatul operațional:
ce e în repo, cum funcționează, ce **nu** trebuie stricat la editare.

---

## TL;DR pentru cine editează (citește înainte de a atinge fișierele)

1. **`Cadru.dc.html` și `Jurnal.dc.html` NU sunt HTML standard.** Sunt generate
   într-un mediu de design propriu și interpretate la runtime de `support.js`
   (~58 KB, minificat, self-contained). Vezi [Runtime custom](#runtime-custom-dc-format).
2. **Site static, zero build.** Fără npm, fără server, fără bundler. Se deschide
   direct în browser sau pe GitHub Pages ca orice pagină statică.
3. **Text și stiluri inline se pot edita liber.** `{{ }}`, `<sc-if>` și blocul
   `<script data-dc-script>` de la final — **nu**. Dacă le rupi, pagina nu se mai randează.
4. **Nu adăuga framework-uri** (React/Vue/Next/Astro) peste. Tot ce e aici e
   vanilla + acest runtime.

---

## Structura repo-ului

```
index.html        Redirect simplu (meta refresh) către Cadru.dc.html — pagina de start
Cadru.dc.html     Landing page principal (single-page, scroll cu ancore)
Jurnal.dc.html    „Jurnal de produs" (blog) — 5 articole draft
support.js        Runtime-ul care interpretează formatul .dc.html — NU edita (excepție: căile din vendor/)
vendor/           React, React-DOM și Babel, găzduite local (vendored) — vezi mai jos
README.md         Acest fișier
BRIEF.md          Brief complet: context, conținut, decizii deschise
```

> **`vendor/` — de ce există:** `support.js` are nevoie de React (și, la nevoie, Babel)
> pentru a rula. Inițial le încărca de pe CDN-ul `unpkg.com` la runtime — ceea ce
> însemna că site-ul **nu se randa deloc** dacă acel CDN era indisponibil. Acum
> aceste librării sunt găzduite local în `vendor/`, iar `support.js` le încarcă de
> acolo (`./vendor/...`). Site-ul e astfel complet independent de CDN-uri externe
> (singura excepție rămasă: fonturile Google Fonts, care degradează grațios la
> fonturi de sistem). Nu șterge `vendor/`.

## Rulare locală

Nu e nevoie de nimic instalat. Fie deschizi `index.html` direct în browser, fie
pentru testare fidelă (rute relative, fetch etc.) pornești un server static simplu:

```bash
python3 -m http.server 8000
# apoi deschide http://localhost:8000/
```

## Deploy

GitHub Pages, **Deploy from a branch → `main` → `/ (root)`**. Fără build step.
Orice commit în root pe `main` declanșează automat rebuild-ul Pages.

---

## Runtime custom (`.dc.html` format)

Fișierele `.dc.html` folosesc un runtime propriu (`support.js`) care aduce un
mic strat de tip React (`DCLogic`, `React.createRef`, `state`/`setState`).
Sintaxa specială pe care o interpretează:

| Construcție | Ce face |
|---|---|
| `{{ path.to.value }}` | Hole de template — **doar** dotted-path lookup, nu expresii JS |
| `<sc-if value="{{ cond }}">…</sc-if>` | Randare condiționată |
| `style-hover="…"`, `style-focus="…"` | Pseudo-stări scrise ca atribute |
| `<script data-dc-script>` cu `class Component extends DCLogic { renderVals() {…} }` | Logica componentei (state, handlere) injectată la runtime |
| `data-props="{…}"` (pe tag-ul de script) | Props editabile din mediul de design (ex. `accent`, `showJournal`, `showMockup`) |

**Reguli de editare fără a strica pagina:**

- ✅ Editează liber: text, culori inline (`style="…"`), structura HTML din
  interiorul `<div ref="{{ rootRef }}" …>…</div>`.
- ❌ Nu șterge / nu deforma: `{{ }}`, `<sc-if>`, blocul `<script data-dc-script>`
  final, tag-urile `<x-dc>` / `<helmet>`.
- Vrei să **scapi de runtime** (ex. pentru a muta site-ul pe Next.js/Astro/HTML
  curat)? Cea mai sigură cale e **rescrierea de la zero** ca HTML/CSS/JS obișnuit,
  folosind conținutul și stilul de aici ca referință — **nu** încerca să
  „decodezi" mecanic sintaxa `{{ }}`.

---

## Conținut — `Cadru.dc.html` (landing)

Secțiuni în ordine (fiecare `<section>` cu `id` pentru ancore):

1. **Header sticky** — logo, nav (`#produs`, `#cum`, `#abordare`, `#jurnal`), buton „Acces anticipat" → `#acces`.
2. **Hero** (`#acces`) — titlu + subtitlu + formă waitlist + mockup decorativ de dashboard (fictiv).
3. **01 — Problema** — 3 carduri (contracte împrăștiate, copy-paste, termene scăpate).
4. **02 — Produsul** (`#produs`) — 4 module: Bază de date, Formulare, Șabloane, Automatizări.
5. **03 — Cum funcționează** (`#cum`) — timeline vertical, 5 pași (formular → bază → șablon → cod compune → semnătură QES).
6. **04 — Abordarea** (`#abordare`, fundal închis) — art. 992 Cod civil, 3 principii (contract-ca-cod, determinist vs. generativ, DRY), AI Generativ vs. Clasic/Script.
7. **05 — Maturitate** — model Crawl · Walk · Run.
8. **06 — Jurnal** (`#jurnal`) — teasere spre articole + formă de abonare. Condiționat de prop `showJournal`.
9. **CTA final** (fundal închis) — repetă forma de acces anticipat.
10. **Footer** — logo, nav, contact, atribuire workshop.

## Conținut — `Jurnal.dc.html` (blog)

Listă de 5 carduri + view de articol individual. Fără routing real: `state.selected`
comută între listă și articol pe click (schimbă state-ul, **nu** URL-ul). Articolele
sunt **draft**-uri derivate din workshop, nerevizuite ca texte finale:

1. Crawl, Walk, Run: nu sări etapele
2. Datoria tehnică, dar în contracte
3. DRY: contract-cadru + condiții speciale
4. Ce este, de fapt, un contract? (art. 992, cazul emoji-ului 👍 de 82.000 $)
5. AI ≠ automatizare: scriptul de 50 de cenți

---

## Funcționalitate live

- **Forma de waitlist** apare de 3 ori (hero, secțiunea Jurnal, CTA final). La submit:
  1. salvează local în `localStorage['cadru_waitlist']` (array de `{email, ts}`) și setează `localStorage['cadru_joined'] = '1'`;
  2. trimite un POST silențios (fără a părăsi pagina) către **Formspree**: `https://formspree.io/f/mykqppvj` (configurat să livreze pe `legaltechtalkmd@gmail.com`);
  3. comută UI-ul pe starea „ești pe listă", care persistă la refresh datorită `cadru_joined`.
- **Fără backend, fără bază de date reală.** Totul e front-end static + Formspree ca serviciu extern.

Logica de mai sus e în blocul `class Component extends DCLogic` din
`Cadru.dc.html` (metoda `renderVals`, handler-ul `join`).

---

## Sistem vizual

- **Fonturi** (Google Fonts): IBM Plex Serif (titluri), IBM Plex Sans (corp), IBM Plex Mono (etichete/meta).
- **Culori** (variabile CSS pe `<div ref>`):
  - fundal `#f7f5f0`, text `#1c1b18`;
  - accent `--accent: #2f6b4f` (editabil și prin prop `accent`);
  - secțiuni închise: fundal `#1c1b18`, text `#efe9dc`, accent deschis `--accent-soft: #7cc59c`.
- Stil sobru, legal-tech: **fără** emoji în UI, **fără** gradient-uri, **fără** carduri cu border-left colorat.

---

## Decizii deschise / de reținut înainte de a propune modificări

- **Numele „Cadru"** — provizoriu, de confirmat sau schimbat (e doar text).
- **Contact** `legaltechtalkmd@gmail.com` — temporar.
- **Articolele din Jurnal** — schițe, nerevizuite de fondator; nu sunt „publicate oficial".
- **Mockup-ul din hero** (ex. „Vega Trans S.R.L.") — complet fictiv/decorativ.
- **Nu există** panou de admin, autentificare sau bază de date reală — produsul propriu-zis (dincolo de landing) nu e implementat aici.
