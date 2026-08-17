<div align="right">

[Srpski](README.md) · **English**

</div>

# Nikola Design

Portfolio site for industrial designer **Nikola Đurašković**. A client project — a static site with five case studies, hosted on GitHub Pages.

**Live:** [cvoki.github.io/nikoladesing](https://cvoki.github.io/nikoladesing) · **Client:** [Behance](https://www.behance.net/nikoladjure266) · [Instagram](https://www.instagram.com/nik_ola_design/)

---

## About the project

Nikola is an industrial designer who needed a place to show his work — without a CMS, without monthly hosting fees, and without depending on someone to keep a system running. The solution is deliberately simple: static HTML pages on GitHub Pages, where hosting is free and an update means a single `git push`.

The focus is on the product photography. Everything else — navigation, typography, layout — steps back so the work can carry the page.

## Pages

| Page | Content |
|---|---|
| `index.html` | Home, with a Bootstrap carousel of works |
| `about.html` | About the designer |
| `contact.html` | Contact form, social links and a Google Maps location |
| `toraxe.html` | Case study — Toraxe |
| `modul.html` | Case study — Modul |
| `toyota.html` | Case study — Toyota |
| `poleflake.html` | Case study — Poleflake |
| `isopod.html` | Case study — Isopod |
| `mask.html` | Case study — Mask |

## Built with

`HTML5` · `CSS3` · `JavaScript` · `Bootstrap 4.5` · `Font Awesome` · `jQuery`

All libraries load from a CDN, so the repository holds only what was actually written for this project.

## Structure

```
.
├── index.html          # home with carousel
├── about.html          # about the designer
├── contact.html        # contact form and map
├── toraxe.html         # case studies
├── modul.html
├── toyota.html
├── poleflake.html
├── isopod.html
├── style.css           # all styles
├── meni.js             # dropdown menu and mobile navigation
└── slike/              # work photos, logo, icons
```

## How the navigation works

`meni.js` handles the two things Bootstrap didn't cover well enough here:

- **Hamburger menu** — on narrow screens the navigation opens and closes on click, swapping the icon and offering an `X` to exit.
- **Projects dropdown** — toggled through a state counter, so the same click both opens and closes the list.

Plain JavaScript, no extra libraries.

## Running locally

```bash
git clone https://github.com/Cvoki/nikoladesing.git
cd nikoladesing
```

Open `index.html` in a browser.

For a local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

The site is hosted on **GitHub Pages** from the `main` branch. Anything pushed to `main` goes live automatically, usually within a minute or two.

The setting lives under *Settings → Pages → Source: main branch*.

## Editing content

- **New project** — copy one of the existing case study pages, swap the text and images, then add a link to the dropdown menu. The menu is repeated in every page's header, so it needs updating in all of them.
- **New photos** — go into `slike/`, referenced by relative path.
- **Styling** — all in `style.css`; Bootstrap classes handle the grid and carousel.

## Note

The contact form sends messages via [FormSubmit](https://formsubmit.co/) to the email address set in `contact.html` — no backend required. The first submission requires confirming that email address.

## License

The code is free to use and learn from. **The works, photographs and content belong to Nikola Đurašković** and are not for reuse without his permission.

---

<sub>Built by <a href="https://github.com/Cvoki">Luka Cvoro</a> — <a href="mailto:lukac95@gmail.com">lukac95@gmail.com</a></sub>
