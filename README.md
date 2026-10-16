# Portfolio — Maxime Fleury

Portfolio professionnel : https://maxime-fleury.github.io/

Site statique en français, adapté aux ordinateurs et mobiles. Aucun outil de compilation requis.

- `index.html` : présentation, réalisations, compétences, parcours et contact.
- `style.css` : styles et mise en page responsive.
- `script.js` : année et copie de l’adresse e-mail.
- `assets/Maxime-Fleury-CV.pdf` : CV téléchargeable.
- `budget/` : ancien outil de budget, conservé à https://maxime-fleury.github.io/budget/.

GitHub Pages publie la racine de la branche `main`. Le fichier `.nojekyll` désactive le traitement Jekyll.

PACIFIC-PRESERVED est une réalisation chez CASIS pour le consortium PACIFIC. L’étude de cas décrit le travail à deux avec un alternant supervisé, l’amélioration du design à partir de slides, les échanges avec un interlocuteur Sanofi et le backend de publication, d’après les précisions de Maxime. Le cas infrastructure reprend les missions documentées dans son CV.

Les trois projets web sont illustrés par des captures réelles de leurs interfaces publiques. Le visuel random-list montre une répartition de quatre joueurs de démonstration. ArXivSearch est présenté comme une version alpha.

`effects.css` contient les animations avec respect de la préférence de réduction des mouvements. `refinements.css` contient l’identité visuelle, les études de cas et les améliorations mobiles. Le favicon SVG utilise un monogramme MF vectoriel.

## Sous-domaine is-a.dev

Pour demander `maxime-fleury.is-a.dev`, créer `domains/maxime-fleury.json` dans le dépôt `is-a-dev/register` :

```json
{
  "owner": {
    "username": "maxime-fleury",
    "email": "maxfdev@gmail.com"
  },
  "records": {
    "CNAME": "maxime-fleury.github.io"
  }
}
```

Après acceptation de la demande is-a.dev, renseigner `maxime-fleury.is-a.dev` dans **Settings → Pages → Custom domain**, puis activer HTTPS lorsque le certificat est prêt. Ne pas configurer ce domaine sur Pages avant l’acceptation de la demande.
