# e-shop-tech

Landing page e-commerce responsive, construite avec React, TypeScript et Tailwind CSS.

**Démo en ligne** : _à venir_

---

## Aperçu

<!-- Ajoute une capture d'écran ici :
     1. Place l'image dans un dossier `screenshots/` à la racine
     2. Remplace la ligne ci-dessous par : ![Aperçu](screenshots/apercu.png)  -->

_Capture d'écran à ajouter._

---

## Stack technique

| Outil | Rôle |
|---|---|
| **React 19** | Bibliothèque d'interface |
| **TypeScript** | Typage statique des données et des props |
| **Vite** | Serveur de développement et build de production |
| **Tailwind CSS 4** | Styles utilitaires |
| **React Router 7** | Routage |
| **lucide-react** / **react-icons** | Icônes |

Aucune bibliothèque de composants (pas de Material UI, pas de shadcn) : toute l'interface est construite à la main.

---

## Fonctionnalités

- **Responsive complet** — trois paliers (mobile, tablette, desktop), grilles passant de 1 à 2 puis 4 colonnes
- **Menu mobile** — ouverture au hamburger, fermeture automatique au clic sur un lien, état géré avec `useState`
- **Navigation par ancres** — les boutons d'appel à l'action font défiler vers les sections concernées
- **Cartes produits** — le bouton « Add to Cart » est affiché en permanence sur mobile et révélé au survol sur desktop, sans provoquer de décalage de mise en page
- **Contenu piloté par les données** — chaque section lit un tableau typé depuis `src/constants/`, aucune donnée n'est écrite en dur dans le JSX

---

## Architecture

```
src/
├── assets/       Images du site (importées, jamais référencées par chemin)
├── components/   Composants d'interface (Navbar, HeroSection, ProductCard…)
├── constants/    Données de chaque section, séparées du rendu
├── layout/       Structure commune : Navbar + contenu + Footer
├── pages/        Pages assemblant les composants
└── types/        Interfaces TypeScript décrivant les données
```

Le principe directeur : **une section = un composant + un fichier de données + un type**. Modifier le contenu du site ne demande jamais de toucher au JSX.

---

## Installation

```bash
git clone https://github.com/<ton-compte>/e-shop-tech.git
cd e-shop-tech
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

### Autres commandes

```bash
npm run build     # Build de production dans dist/
npm run preview   # Sert le build de production en local
npm run lint      # Vérification ESLint
npm run format    # Formatage Prettier
```

---

## Limites assumées

Ce projet est une **vitrine front-end**, sans serveur ni base de données :

- le panier et la connexion ne sont pas implémentés
- les produits, articles de blog, prix et coordonnées sont fictifs
- les textes de remplissage sont du Lorem ipsum
- le site ne comporte qu'une seule page

---

## Contexte

Projet académique réalisé dans le cadre de ma formation en développement web, rendu et validé.
Il a ensuite été repris pour corriger plusieurs points avant publication : chemins d'images
incompatibles avec le build de production, accessibilité du bouton d'ajout au panier sur mobile,
positionnement du menu mobile, et bornage de la largeur du contenu sur grands écrans.

## Auteur

**Muslim Drame** — étudiant développeur web, Dakar.
