# Erwin Blaauw Installatietechniek — website (concept)

Nieuwe website voor Erwin Blaauw Installatietechniek (Gorredijk), ter vervanging van de
verouderde site op www.erwinblaauw.nl. **Dit is een concept ter goedkeuring.**

## Techniek
Next.js 15 (App Router) · TypeScript · Tailwind CSS · volledig statisch · host: Vercel.
Geen CMS, geen database, geen backend-secrets.

## Pagina's
Home · Diensten · Referenties · Over ons · Contact · Route · 404.

## Nog in te vullen door Erwin
1. **Eigen foto's** — alle beeldvlakken zijn plaatshouders met het gewenste formaat erbij.
2. **Ontvanger contactformulier** — zie de TODO in `src/components/contact-form.tsx`.
   Nu staat het formulier op `mailto:`; vul een Formspree-endpoint in voor directe verzending.
3. **Openingstijden** — zie de TODO in `src/app/contact/page.tsx`.
4. **Projectreferenties** — de kaarten op `/referenties` staan klaar voor echte projecten.
5. **Definitief domein** — `site.url` in `src/data/site.ts` bijwerken zodra dat bekend is
   (sitemap, robots, Open Graph en JSON-LD gebruiken deze waarde).

## Lokaal draaien
```
npm install
npm run dev     # http://localhost:3000
npm run build   # productiebuild
npm run lint
```

## Controles
`scripts-shot.mjs` maakt screenshots van alle pagina's (desktop 1440 + mobiel 390),
`a11y.mjs` draait een axe-core WCAG 2.1 A/AA-audit. Beide verwachten een draaiende
server op poort 3477 (`npx next start -p 3477`).
