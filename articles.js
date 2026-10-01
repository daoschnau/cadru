// Lista articolelor din Jurnal: singura sursă pentru cardurile din Jurnal.dc.html
// și pentru anunțurile de pe pagina principală (Cadru.dc.html arată primele 4).
//
// Fiecare articol are pagina lui: jurnal/<slug>.html, cu titlul, descrierea și
// previzualizarea (og:*) proprii, ca linkul să poată fi trimis mai departe.
//
// Articol nou:
//   1. Copiați o pagină din jurnal/ sub un slug nou (litere latine fără diacritice,
//      cratime) și înlocuiți textul articolului și cele 7 rânduri din <head>
//      (title, description, canonical, og:url, og:title, og:description).
//   2. Adăugați o intrare SUS în lista de mai jos, cu un id nou (p8, p9, ...) și același slug.
// Cardurile din Jurnal și anunțurile de pe pagina principală se construiesc de aici.
//
// Câmpuri: id, slug, date (scurt, ca pe card), category, minutes, title, summary.
// Opționale, doar pentru pagina principală: teaserTitle (titlu mai scurt) și
// teaser (descriere mai scurtă); fără ele se folosesc title și summary.
window.CADRU_JURNAL = [
  {"id": "p7", "slug": "datele-voastre-raman-ale-voastre", "date": "1 oct 2026", "category": "Date personale", "minutes": 9, "title": "Datele voastre rămân ale voastre: cum lucrează Cadru cu datele personale", "summary": "Cadru păstrează date despre oameni care nu au ales Cadru: beneficiarii efectivi, administratorii și reprezentanții partenerilor voștri. Ce am decis deja ca să le protejăm, ce funcționează astăzi și ce nu e încă gata.", "teaserTitle": "Datele voastre rămân ale voastre", "teaser": "Ce date nu cerem, cine le vede și cum le luați înapoi cu un singur buton."},
  {"id": "p6", "slug": "primul-pas-formularul", "date": "28 sept 2026", "category": "Construcție", "minutes": 9, "title": "Primul pas: formularul prin care partenerul își trimite singur datele", "summary": "Prima piesă din Cadru funcționează. Ce am construit, ce am refuzat să construiesc și de ce protecția datelor personale a fost punctul de plecare.", "teaserTitle": "Primul pas: formularul pentru datele partenerilor", "teaser": "Prima piesă din Cadru funcționează, cu protecția datelor gândită de la început."},
  {"id": "p1", "slug": "crawl-walk-run", "date": "28 iun 2026", "category": "Metodă", "minutes": 4, "title": "Crawl, Walk, Run: nu sări etapele", "summary": "Tehnologia pusă peste haos doar accelerează haosul. De ce maturizarea CLM se face fazat — și de ce începi de la ce e aproape gratuit.", "teaser": "Tehnologia peste haos doar accelerează haosul."},
  {"id": "p2", "slug": "datoria-tehnica-in-contracte", "date": "25 iun 2026", "category": "Principii", "minutes": 5, "title": "Datoria tehnică, dar în contracte", "summary": "Un contract scris în grabă nu te costă azi. Dobânda o plătești peste un an — exact când deschizi documentul în mijlocul unei crize.", "teaser": "Dobânda o plătești peste un an, în mijlocul unei crize."},
  {"id": "p3", "slug": "dry-contract-cadru", "date": "22 iun 2026", "category": "Structură", "minutes": 5, "title": "DRY: contract-cadru + condiții speciale", "summary": "Douăzeci de șabloane înseamnă trei sute de pagini duplicate — și douăzeci de ocazii de a greși la fiecare modificare. Soluția se asamblează ca un Lego."},
  {"id": "p4", "slug": "ce-este-un-contract", "date": "18 iun 2026", "category": "Fundamente", "minutes": 6, "title": "Ce este, de fapt, un contract?", "summary": "Articolul 992 nu spune niciun cuvânt despre «document». Iar un emoji 👍 a costat un fermier 82.000 $. Contractul e acordul de voință — documentul e doar o probă.", "teaser": "Un emoji 👍 a costat un fermier 82.000 $."},
  {"id": "p5", "slug": "ai-nu-inseamna-automatizare", "date": "15 iun 2026", "category": "Tehnologie", "minutes": 3, "title": "AI ≠ automatizare: scriptul de 50 de cenți", "summary": "O sută de contracte sortate în câteva minute, pe jumătate de dolar. Când un script banal bate modelul generativ — și de ce «unde bagi AI» e o decizie de risc, nu una tehnică."}
];
