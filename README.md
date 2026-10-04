# Elteam Malmö – React

React-version av Elteams webbplats med samma åtta sidor, innehåll och bilder som den publicerade designen.

## Kom igång

Kräver Node.js 20.19+ eller 22.12+.

```bash
npm install
npm run dev
```

Öppna adressen som visas i terminalen. Bygg för publicering med `npm run build`; resultatet finns då i `dist/`.

Bygget skapar en egen HTML-fil per sida (exempelvis `dist/laddbox/index.html`) med rätt titel och beskrivning, så undersidorna fungerar på vilken statisk webbserver som helst. För Netlify finns `netlify.toml` och `public/_redirects` redan på plats. Bilderna ligger i `public/assets/`. Kontaktformuläret öppnar ett e-postutkast i besökarens e-postprogram, precis som på den nuvarande sajten.
# elteam
