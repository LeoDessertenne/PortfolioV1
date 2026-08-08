# Portfolio : Léo Dessertenne

Portfolio personnel présentant mon parcours, mes projets et mes compétences de développeur fullstack.

🔗 **[leodessertenne.com](https://leodessertenne.com)**, hébergé via GitHub Pages.

## Aperçu

Site d'une seule page, en français, structuré en sections accessibles depuis la navigation :

| Section      | Contenu                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| Présentation | Introduction et liens de contact rapides                                                                             |
| Mon parcours | Timeline : alternance IDM Group, ESIEE Paris, BUT Informatique, BAC STI2D                                            |
| Projets      | Missions en entreprise et projets académiques, détaillés dans des modales (résumé, compétences, technologies, vidéos) |
| Compétences  | Compétences techniques et transverses                                                                                |
| Objectifs    | Objectifs professionnels                                                                                             |
| Me contacter | Email, CV PDF, LinkedIn                                                                                              |

Une page annexe `/credits` regroupe les crédits des ressources utilisées.

## Technologies

- **Next.js 15** (App Router) en export statique : le site est prérendu au build en HTML, sans serveur à l'exécution
- **React 19** et **TypeScript** en mode strict
- **Tailwind CSS 4** pour les tokens de la charte graphique et les utilitaires
- **CSS applicatif** découpé par composant, chargé par bundle de page
- Polices auto-hébergées : _Manrope_ (variable, via `next/font`) et _Gallery Modern_ (webfont locale)
- Déploiement automatisé par **GitHub Actions** vers GitHub Pages

Le site ne charge aucune ressource tierce à l'exécution : ni CDN, ni Google Fonts, ni script externe.

## Design

Interface « verre dépoli » : un socle crème parcouru d'une nappe de dégradés
fixe, sur lequel se détachent des panneaux navy translucides. Les surfaces qui
passent au-dessus du contenu (navigation, modales, boutons) sont floutées au
`backdrop-filter`, ce qui laisse deviner ce qui défile derrière.

Les couleurs de marque sont centralisées dans `src/styles/theme.css` :

| Variable       | Valeur    |
| -------------- | --------- |
| `--darkblue`   | `#02003a` |
| `--lightbeige` | `#fffaea` |
| `--midbeige`   | `#ccc8bb` |
| `--darkbeige`  | `#727069` |

Le reste du système (échelles navy et crème, verre, ombres, rayons, espacements,
typographie fluide, courbes d'animation) vit dans `src/styles/tokens.css`.

## Contact

- Email : [pro.leo.dessertenne@gmail.com](mailto:pro.leo.dessertenne@gmail.com)
- LinkedIn : [léo-dessertenne](https://www.linkedin.com/in/l%C3%A9o-dessertenne/)
- GitHub : [LeoDessertenne](https://github.com/LeoDessertenne)

---

© Léo Dessertenne, tous droits réservés.
