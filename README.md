# 🌿 LegalHaze

Une plateforme web moderne dédiée à l'information et l'éducation sur le cannabis, développée avec React et TailwindCSS.

## 📋 Description

LegalHaze est une application web qui fournit des informations détaillées et scientifiques sur le cannabis, incluant :
- Études comparatives internationales sur la légalisation
- Analyses des composés chimiques du cannabis
- Guide historique et législatif
- Ressources éducatives et annexes
- Suivi des mises à jour et versions

## 🚀 Fonctionnalités

- ♿ Accessibilité WCAG AA complète
- 🌓 Mode sombre/clair automatique
- 📱 Design responsive et mobile-first
- 🔍 SEO optimisé
- 🔒 Conformité RGPD et gestion des cookies
- 📊 Visualisations de données interactives
- 📄 Export PDF des études
- 🎨 Interface utilisateur moderne et intuitive
- 🔄 Gestion des versions et mises à jour
- 📈 Analytics et suivi des erreurs
- 💰 Intégration Google AdSense optimisée

## 🛠️ Technologies Utilisées

- **Frontend:**
  - React 18
  - TailwindCSS
  - Framer Motion
  - React Router DOM
  - React Helmet (SEO)
  - Chart.js
  - Google Analytics
  - Google AdSense

- **Outils de Développement:**
  - ESLint
  - Prettier
  - PostCSS
  - Jest

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/byPreaZy/legalhaze-place.git
cd legalhaze-place
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez l'application en mode développement :
```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 🔧 Scripts Disponibles

- `npm start` : Lance l'application en mode développement
- `npm build` : Crée une version de production
- `npm test` : Lance les tests
- `npm run lint` : Vérifie le code avec ESLint
- `npm run format` : Formate le code avec Prettier
- `npm run deploy` : Déploie l'application sur GitHub Pages

## 🌐 Normes et Conformité

- **Accessibilité:** WCAG 2.1 niveau AA
- **Performance:** Core Web Vitals optimisés
- **SEO:** Meta tags dynamiques et structure sémantique
- **RGPD:** Gestion des cookies et données personnelles
- **Compatibilité:** Support des navigateurs modernes

## 🎨 Thèmes et Personnalisation

L'application utilise un système de thèmes personnalisable via TailwindCSS avec :
- Thème clair/sombre automatique
- Contraste élevé pour l'accessibilité
- Variables CSS personnalisées
- Animations fluides et réduites si préféré

## 📚 Structure du Projet

```
legalhaze-place/
├── src/
│   ├── components/     # Composants réutilisables
│   │   ├── AD/        # Composants de gestion des publicités
│   │   ├── layout/    # Composants de mise en page
│   │   ├── guide/     # Composants du guide
│   │   ├── etude/     # Composants des études
│   │   ├── annexes/   # Composants des annexes
│   │   └── composes/  # Composants des composés
│   ├── pages/         # Pages principales
│   │   ├── Home.js    # Page d'accueil
│   │   ├── Guide.js   # Guide sur le cannabis
│   │   ├── Etude.js   # Études comparatives
│   │   ├── ComposesCannabis.js # Composés du cannabis
│   │   ├── Annexes.js # Annexes et ressources
│   │   └── ...        # Autres pages
│   ├── hooks/         # Hooks personnalisés
│   │   └── useAdCache.js # Gestion du cache des publicités
│   ├── utils/         # Utilitaires et helpers
│   ├── styles/        # Styles globaux
│   └── config/        # Configuration (version, thèmes, etc.)
├── public/            # Assets statiques
└── ...
```

## 🔄 Gestion des Versions

Le projet utilise un système de versioning simple :
- Version de l'application dans `src/config/version.js`
- Date de mise à jour des études configurable
- Historique des modifications documenté

## 💰 Gestion des Publicités

Le projet intègre Google AdSense avec :
- Système de cache pour optimiser les performances
- Gestion des erreurs et rechargement intelligent
- Support du mode sombre/clair
- Respect des normes d'accessibilité
- Intégration responsive sur tous les appareils

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- **Clere Kévin (PreaZy)** - *Développement initial* - [Clere'ly design](https://clerely-design.fr)

## 🙏 Remerciements

- Toutes les sources citées dans les études
- La communauté open source
- Les contributeurs et testeurs
