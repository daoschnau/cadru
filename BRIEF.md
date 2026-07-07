# Brief: Cadru — sait de produs (landing + jurnal)

## 1. Ce este acest proiect

**Cadru** este un produs în dezvoltare: un CLM (Contract Lifecycle Management) simplu pentru echipe mici din Moldova — bază de date + formulare de completare + șabloane de contracte + automatizări care toarnă datele din bază în șablon.

Acest repo conține **site-ul de prezentare al produsului**, live pe GitHub Pages:
`https://daoschnau.github.io/cadru/`

Scopul site-ului: informa despre produs (nu doar vindere agresivă — și conținut educativ despre disciplina contractuală), colecta email-uri de acces anticipat (waitlist), și servi ca bază pentru un jurnal de produs (blog) unde se documentează dezvoltarea produsului.

Conținutul e derivat dintr-un workshop practic ținut de fondator (Chiril Știrbu, jurisconsult) la ABSL Business Workshops, 26 iunie 2026: „Contracte sub control — CLM practic, ce poate face un singur jurist, la biroul lui". Ideile centrale (Crawl-Walk-Run, contractul ca și cod, DRY, AI vs. determinist) vin de acolo.

**Numele „Cadru" este provizoriu** — ușor de schimbat (apare ca text, nu ca imagine/logo).

## 2. IMPORTANT — cum sunt scrise fișierele (citește înainte de a edita)

Fișierele `Cadru.dc.html` și `Jurnal.dc.html` **nu sunt HTML/React standard**. Au fost generate într-un mediu de design propriu care folosește un runtime custom (`support.js`, ~58KB, minificat) capabil să interpreteze:

- `{{ path.to.value }}` — hole-uri de tip template (doar dotted-path lookups, nu expresii JS)
- `<sc-if value="{{ cond }}">...</sc-if>` — condiționale
- `style-hover="..."`, `style-focus="..."` — pseudo-stări scrise ca atribute
- Un `<script data-dc-script>` cu o clasă `class Component extends DCLogic { renderVals() {...} }` — logica componentei (state, handlere) e injectată de `support.js` la runtime

**`support.js` e inclus în repo și e complet self-contained** — site-ul funcționează normal într-un browser obișnuit, fără build step, fără npm, fără server. Deschis local sau pe GitHub Pages, merge exact ca orice pagină statică.

**Ce înseamnă asta pentru editare directă în repo:**
- Poți edita text, culori inline (`style="..."`), structura HTML din interiorul `<div ref="{{ rootRef }}" ...>...</div>` liber — e markup obișnuit în cea mai mare parte.
- **Nu rupe** sintaxa `{{ }}`, tag-urile `<sc-if>`, sau blocul `<script data-dc-script>` de la finalul fișierului — acestea sunt interpretate de `support.js`; dacă le ștergi sau le editezi greșit, pagina nu se mai randează.
- Dacă vrei să **elimini dependența de acest runtime** (de ex. pentru a integra site-ul într-un framework standard — Next.js, Astro, plain HTML), cea mai sigură abordare e să rescrii fișierele de la zero ca HTML/CSS/JS obișnuit, folosind conținutul și stilul vizual de aici ca referință — nu să încerci să „decodezi" mecanic sintaxa `{{ }}`.
- Nu adăuga framework-uri (React, Vue etc.) peste — nu sunt necesare, tot ce vezi e vanilla, cu excepția acestui runtime.

## 3. Structura fișierelor

```
index.html        — redirect simplu către Cadru.dc.html (pagina de start la deschiderea domeniului)
Cadru.dc.html      — landing page-ul principal (o singură pagină, scroll cu ancore)
Jurnal.dc.html     — pagina de blog ("Jurnal de produs") cu 5 articole placeholder
support.js         — runtime-ul (nu edita, doar copiază-l dacă rescrii)
README.md          — instrucțiuni scurte de deploy
BRIEF.md           — acest document
```

## 4. Structura conținutului — Cadru.dc.html (landing)

Secțiuni, în ordine (fiecare `<section>`, cu `id` pentru ancore de navigare):

1. **Header sticky** — logo „Cadru", navigare (`#produs`, `#cum`, `#abordare`, `#jurnal`), buton „Acces anticipat" → `#acces`.
2. **Hero** (`#acces`) — titlu + subtitlu + formă waitlist (email) + mockup vizual al unui „dashboard" fictiv (listă de clienți/contracte, doar decorativ).
3. **01 — Problema** — de ce dezordinea contractuală costă (3 carduri: contracte împrăștiate, copy-paste, termene scăpate).
4. **02 — Produsul** (`#produs`) — cele 4 module: Bază de date, Formulare, Șabloane, Automatizări (4 carduri).
5. **03 — Cum funcționează** (`#cum`) — timeline vertical, 5 pași: completezi formularul → date în bază → alegi șablonul → codul compune contractul → semnezi electronic (QES).
6. **04 — Abordarea** (`#abordare`, secțiune cu fundal închis) — conținutul „intelectual" al workshop-ului: citat din art. 992 Cod civil, 3 principii (contract ca și cod, determinist vs. generativ, DRY), comparație AI Generativ vs. Clasic/Script.
7. **05 — Maturitate** — modelul Crawl · Walk · Run, cu Cadru poziționat ca ajutând în toate cele 3 etape (Crawl = adunare/normalizare date, fără angajament mare; Walk = standardizare; Run = automatizare reală).
8. **06 — Jurnal** (`#jurnal`, `sc-if` condiționat de prop `showJournal`) — teasere spre 3 articole din blog + formă de abonare separată.
9. **CTA final** (fundal închis) — repetă formă de acces anticipat + „etichete" cu principii cheie.
10. **Footer** — logo, navigare, contact (`legaltechtalkmd@gmail.com`), atribuire workshop.

## 5. Jurnal.dc.html (blog)

Pagină cu listă de articole (5 carduri) + view de articol individual (state local `selected`, fără routing real — click pe card schimbă state-ul, nu URL-ul). Articole (toate schițe/draft, bazate pe workshop):

1. Crawl, Walk, Run: nu sări etapele
2. Datoria tehnică, dar în contracte
3. DRY: contract-cadru + condiții speciale
4. Ce este, de fapt, un contract? (art. 992, cazul emoji-ului 👍 de 82.000$)
5. AI ≠ automatizare: scriptul de 50 de cenți

## 6. Funcționalitate live

- **Formă waitlist** (apare de 3 ori: hero, secțiunea Jurnal, CTA final) — trimite POST silențios către **Formspree** (`https://formspree.io/f/mykqppvj`, configurat să trimită pe `legaltechtalkmd@gmail.com`), plus salvează local (`localStorage['cadru_waitlist']`) ca fallback/persistență vizuală („ești pe listă" rămâne afișat la refresh).
- Fără backend propriu, fără bază de date reală — totul e front-end static + Formspree ca serviciu extern.

## 7. Sistem vizual

- **Fonturi**: IBM Plex Serif (titluri), IBM Plex Sans (corp text), IBM Plex Mono (etichete/meta), via Google Fonts.
- **Culori**: fundal principal `#f7f5f0` (hârtie caldă), text `#1c1b18`, accent verde `#2f6b4f` (variabilă CSS `--accent`, editabilă), secțiuni închise `#1c1b18` cu text `#efe9dc` și accent deschis `#7cc59c` (`--accent-soft`).
- Fără emoji, fără gradient-uri, fără carduri cu border-left colorat — stil sobru, legal-tech.

## 8. De rezolvat / decizii deschise

- **Numele produsului „Cadru"** e provizoriu — de confirmat sau schimbat.
- **Adresa de contact** `legaltechtalkmd@gmail.com` e temporară.
- **Articolele din jurnal sunt schițe** generate din textul workshop-ului, nu texte finale aprobate de fondator — de revizuit înainte de a le considera publicate oficial.
- **Mockup-ul din hero** (nume clienți gen „Vega Trans S.R.L.") e complet fictiv/decorativ.
- Nu există momentan **panou de admin, autentificare sau bază de date reală** — orice funcționalitate de produs (dincolo de landing) nu există încă.

## 9. Deploy

Site static, GitHub Pages, `Deploy from a branch → main → / (root)`. Fără build step. Orice modificare la fișierele din root necesită doar un commit — Pages se rebuild-uiește automat.
