<div align="right">

**Srpski** · [English](README.en.md)

</div>

# Nikola Design

Portfolio sajt za industrijskog dizajnera **Nikolu Đurašković**. Klijentski projekat — statičan sajt sa pet studija slučaja, hostovan preko GitHub Pages.

**Uživo:** [cvoki.github.io/nikoladesing](https://cvoki.github.io/nikoladesing) · **Klijent:** [Behance](https://www.behance.net/nikoladjure266) · [Instagram](https://www.instagram.com/nik_ola_design/)

---

## O projektu

Nikola je industrijski dizajner kome je trebalo mesto da pokaže svoj rad — bez CMS-a, bez mesečnog hostinga i bez zavisnosti od nekoga ko će održavati sistem. Rešenje je namerno jednostavno: statične HTML stranice na GitHub Pages, gde je hosting besplatan, a izmena znači jedan `git push`.

Fokus je na fotografijama proizvoda. Sve ostalo — navigacija, tipografija, raspored — sklonjeno je u drugi plan da radovi dođu do izražaja.

## Stranice

| Stranica | Sadržaj |
|---|---|
| `index.html` | Početna sa Bootstrap karuselom radova |
| `about.html` | O dizajneru |
| `contact.html` | Kontakt forma, društvene mreže i Google Maps lokacija |
| `toraxe.html` | Studija slučaja — Toraxe |
| `modul.html` | Studija slučaja — Modul |
| `toyota.html` | Studija slučaja — Toyota |
| `poleflake.html` | Studija slučaja — Poleflake |
| `isopod.html` | Studija slučaja — Isopod |

## Tehnologije

`HTML5` · `CSS3` · `JavaScript` · `Bootstrap 4.5` · `Font Awesome` · `jQuery`

Sve biblioteke se učitavaju sa CDN-a, pa repozitorijum sadrži samo ono što je zaista pisano za ovaj projekat.

## Struktura

```
.
├── index.html          # početna sa karuselom
├── about.html          # o dizajneru
├── contact.html        # kontakt forma i mapa
├── toraxe.html         # studije slučaja
├── modul.html
├── toyota.html
├── poleflake.html
├── isopod.html
├── style.css           # svi stilovi
├── meni.js             # padajući meni i navigacija na mobilnom
└── slike/              # fotografije radova, logo, ikonice
```

## Kako radi navigacija

`meni.js` pokriva dve stvari koje Bootstrap ovde nije rešavao kako je trebalo:

- **Hamburger meni** — na užim ekranima navigacija se otvara i zatvara klikom, sa zamenom ikonice i `X` dugmetom za izlaz.
- **Padajući spisak projekata** — prebacivanje prikaza kroz brojač stanja, tako da isti klik i otvara i zatvara listu.

Sve u čistom JavaScript-u, bez dodatnih biblioteka.

## Pokretanje lokalno

```bash
git clone https://github.com/Cvoki/nikoladesing.git
cd nikoladesing
```

Otvori `index.html` u pregledaču.

Za lokalni server:

```bash
python3 -m http.server 8000
# pa otvori http://localhost:8000
```

## Objavljivanje

Sajt se hostuje preko **GitHub Pages** sa `main` grane. Svaka izmena koja stigne na `main` objavljuje se automatski, obično za minut ili dva.

Podešavanje se nalazi pod *Settings → Pages → Source: main branch*.

## Izmene sadržaja

- **Novi projekat** — kopiraj neku od postojećih stranica studije slučaja, zameni tekst i slike, pa dodaj link u padajući meni. Meni se ponavlja u zaglavlju svake stranice, pa ga treba dopuniti svuda.
- **Nove fotografije** — idu u `slike/`, referenciraju se relativnom putanjom.
- **Izgled** — sve je u `style.css`; Bootstrap klase se koriste za mrežu i karusel.

## Napomena

Kontakt forma je vizuelna — statični hosting ne može sam da primi slanje. Ako zatreba da radi, najlakše je preko servisa tipa Formspree ili prelaskom na Netlify Forms.

## Licenca

Kod je slobodan za korišćenje i učenje. **Radovi, fotografije i sadržaj pripadaju Nikoli Đuraškoviću** i nisu za dalju upotrebu bez njegove dozvole.

---

<sub>Izradio <a href="https://github.com/Cvoki">Luka Cvoro</a> — <a href="mailto:lukac95@gmail.com">lukac95@gmail.com</a></sub>
