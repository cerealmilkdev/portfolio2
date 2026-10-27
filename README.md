# portfolio2 — webfolio

Portfolio personnel : **une seule page**, thème sombre, en grille de cartes (bento).

**En ligne :** https://websitefolio.vercel.app

---

## Contenu de la page

| Bloc | Détail |
|---|---|
| **Tech Stack** | Frontend : JavaScript — TypeScript, Next.js · TailwindCSS. Backend : Node.js (Express) · Python, PostgreSQL · Prisma |
| **Profil** | Photo, localisation (Montréal, Canada), années d'expérience, badge « Disponible » |
| **Formation** | Microsoft Azure AZ-900 (2022), CISCO CCNA+ (2024), AWS Cloud Practitioner (2024) |
| **Projets** | makesocial.me, GBU Inc., Telegram OpenAI Bot |
| **Contact** | E-mail, site, X — plus un lien CV PDF en pied de page |

---

## Stack technique

- **Next.js** (App Router) · **React** · **TypeScript**
- **TailwindCSS v4** (via `@tailwindcss/postcss`)
- **ESLint** (`eslint-config-next`)
- Typographie : **Inter** via `next/font`, police mono **JetBrains Mono** (auto-hébergée dans `public/fonts`)

Aucune base de données, aucune route serveur : la page est **entièrement statique** et son contenu vit dans `app/page.tsx`.

---

## Lancer en local

```bash
npm install
npm run dev     # http://localhost:3000
```

Autres scripts :

```bash
npm run build   # build de production
npm start       # sert le build
npm run lint    # ESLint
```

---

## Déploiement

Hébergé sur **Vercel**, déploiement automatique depuis la branche `main`.

---

## Notes d'architecture

- Le thème sombre est forcé : `className="dark"` sur la balise `<html>` (`app/layout.tsx`).
- La texture de points en arrière-plan est un `radial-gradient` fixe, pas une image.
- Les logos de technos sont en niveaux de gris (`grayscale`) et remontent en opacité au survol du bloc.
- Le contenu est en français (`<html lang="fr">`) : les blocs sont des constantes JSX dans `app/page.tsx`, il n'y a pas de CMS.
