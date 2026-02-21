# Nowoczesne Portfolio - ShadowBlack77

Minimalistyczne portfolio. Projekt nastawiony na najwyższą jakość UI/UX, bardzo płynne animacje i ekstremalną szybkość działania.

## 🚀 Technologie

- **[Astro](https://astro.build/)** - Ekstremalnie szybki framework webowy z podejściem "Zero JS by default".
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first framework CSS do błyskawicznego ostylowania elementów.
- **[GSAP](https://gsap.com/)** - Zaawansowana biblioteka animacji (efekty wchodzenia, ScrollTrigger, animacje liczb).
- **Web3Forms** - Obsługa formularza kontaktowego bez konieczności stawiania własnego serwera backendowego.

## 📦 Uruchomienie lokalne

1. Sklonuj repozytorium
2. Zainstaluj niezbędne pakiety za pomocą menedżera pakietów:
   ```bash
   npm install
   ```
3. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```
4. Projekt będzie natychmiastowo przygotowany i podgląd pojawi się pod adresem wskazanym w konsoli (zazwyczaj `http://localhost:4321/`).

## 🛠️ Budowanie i wdrażanie (Deployment)

Aby wygenerować ekstremalnie zoptymalizowane statyczne pliki, gotowe do wrzucenia na darmowy hosting (Vercel, Netlify, Github Pages), wystarczy wywołać:

```bash
npm run build
```

Zbudowana strona znajdzie się wewnątrz wygenerowanego folderu `dist/`.

## 🎨 Główne cechy

- **Płynny Glassmorphism UI** - Nowoczesne, oszronione, półprzezroczyste karty i przyciski.
- **Rozbudowane Animacje z GSAP** - Animacje typografii witającej, przeliczanie liczników w sekcji statystyk oparte na ScrollTrigger oraz animowane stopniowe wschodzenie bloków podczas przewijania w dół.
- **Żywe tło** - Strona posiada powoli falujące pule (blobs) kolorów nakładane ze specyficznym blurem, tworząc na żywo przepiękne gradienty. Odbiorca odnosi wrażenie płynnej wibracji wewnątrz mrocznego motywu strony.
- **Fully Responsive** - Doskonały wygląd na tabletach i smartfonach, zachowane odpowiednie marginesy na krawędziach.
- **Bezpieczny kontakt** - Zautomatyzowany formularz zabezpieczony przed botami (tzw. _honeypot_), korzystający w 100% z technologii asynchronicznej we wbudowanych API żądań serwerowych (AJAX).

## 📫 Autor

Stworzone przez: **ShadowBlack77**  
[LinkedIn](https://www.linkedin.com/in/daniel-miliczek-329521279) | [GitHub](https://github.com/ShadowBlack77)
