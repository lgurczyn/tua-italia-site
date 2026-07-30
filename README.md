# Tua Italia — strona wizytówka

Jednostronicowa strona (single page) dla Tua Italia — prywatnych rejsów
i wydarzeń na jachcie w Marina Porto San Rocco (Muggia / Trieste).

## Struktura projektu

```
tua-italia-site/
├── index.html          # cała zawartość strony (jeden plik HTML)
├── css/
│   └── style.css       # style — paleta kolorów, typografia, layout
├── js/
│   └── main.js         # navbar przy scrollu, animacje wejścia, aktywne linki menu
└── img/
    ├── hero-yacht.jpg        # zdjęcie jachtu w marinie (tło hero)
    ├── porto-yacht-side.jpg  # jacht przy nabrzeżu, w tle wzgórza Muggia
    ├── logo-detail.jpg       # logo Tua Italia na wysięgniku żagla
    └── gallery-helm.jpg      # kokpit / ster jachtu
```

## Stack technologiczny

- **Bootstrap 5.3** (CDN) — siatka, responsywność, komponenty
- **Bootstrap Icons** (CDN) — ikony (kompas, muszla, WhatsApp itd.)
- **Google Fonts** — Playfair Display (nagłówki) + Montserrat (tekst)
- Czysty HTML/CSS/JS — bez buildu, bez npm, bez frameworków JS

## Jak uruchomić lokalnie

Wystarczy otworzyć `index.html` w przeglądarce — nie jest wymagany żaden
serwer ani instalacja zależności.

Jeśli wolisz uruchomić przez lokalny serwer (np. żeby uniknąć problemów
z niektórymi przeglądarkami przy plikach lokalnych), w VS Code:

1. Zainstaluj rozszerzenie **Live Server**
2. Kliknij prawym przyciskiem na `index.html` → **Open with Live Server**

## Co trzeba jeszcze podmienić przed publikacją

- [ ] Numer WhatsApp — obecnie placeholder `390000000000`, występuje
      w 3 miejscach w `index.html` (szukaj frazy `wa.me/390000000000`)
- [ ] Adres e-mail i telefon w sekcji kontaktowej (obecnie przykładowe)
- [ ] Zdjęcia oznaczone jako placeholder w Galerii (kawa, nakryty stół,
      kwiaty, zachód słońca) — obecnie tymczasowe obrazy z picsum.photos
- [ ] Docelowa domena / hosting

## Paleta kolorów

| Nazwa       | Hex       |
|-------------|-----------|
| Biel        | `#FFFFFF` |
| Mgła        | `#F2F4F5` |
| Atrament    | `#1F2933` |
| Granat      | `#0E2A47` |
| Złoto       | `#C9A86A` |

## Typografia

- **Playfair Display** — nagłówki, elementy ozdobne
- **Montserrat** — treść, przyciski, nawigacja
