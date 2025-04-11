# 🌿 LegalHaze (v1.1.3)

Une plateforme web moderne dédiée à l'information et l'éducation sur le cannabis, développée avec React et TailwindCSS.

## 📋 Description

LegalHaze est une application web qui fournit des informations détaillées et scientifiquement validées sur le cannabis, incluant :
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
- 📈 Analytics respectueux de la vie privée
- 💰 Intégration publicitaire optimisée

## 🚨 Nouveautés v1.1.3

- ✅ Optimisation des cookies tiers avec configuration SameSite améliorée 
- ✅ Mise à jour des en-têtes de sécurité CSP
- ✅ Amélioration de la politique de confidentialité concernant les cookies
- ✅ Optimisation des performances de chargement des publicités
- ✅ Correction de bugs mineurs
- ✅ Mise à jour des informations de contact pour la gestion des données personnelles

## 🛠️ Technologies Utilisées

- **Frontend:**
  - React 18
  - TailwindCSS
  - Framer Motion
  - React Router DOM v6+
  - React Helmet Async (SEO)
  - Chart.js
  - Google Analytics (configuré avec respect de la vie privée)

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
- `npm run deploy` : Déploie l'application

## 🌐 Normes et Conformité

- **Accessibilité:** WCAG 2.1 niveau AA
- **Performance:** Core Web Vitals optimisés
- **SEO:** Meta tags dynamiques et structure sémantique
- **RGPD:** Gestion des cookies et données personnelles (panneau de consentement amélioré)
- **Sécurité:** En-têtes CSP, HSTS et autres pratiques recommandées
- **Compatibilité:** Support des navigateurs modernes

## 🔒 Cookies et Confidentialité

L'application utilise plusieurs types de cookies :
- **Essentiels :** Nécessaires au fonctionnement du site (toujours activés)
- **Analytiques :** Pour comprendre l'utilisation du site (configurables par l'utilisateur)
- **Préférences :** Pour mémoriser les choix de l'utilisateur (configurables)
- **Marketing :** Pour les publicités personnalisées (désactivés par défaut)

Les paramètres de cookies sont configurés avec des attributs de sécurité optimisés :
- `SameSite=Lax` pour les cookies internes
- Configuration sécurisée pour les services tiers

## 🎨 Thèmes et Personnalisation

L'application utilise un système de thèmes personnalisable via TailwindCSS avec :
- Thème clair/sombre automatique basé sur les préférences système
- Mode contraste élevé pour l'accessibilité
- Variables CSS personnalisées
- Animations fluides et réduites si préféré par l'utilisateur

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

Le projet utilise un système de versioning sémantique :
- **MAJEUR.MINEUR.PATCH** (exemple : 1.1.3)
- Version de l'application définie dans `src/config/version.js`
- Historique des modifications documenté dans le CHANGELOG

### Versions :
- **1.0.0** : Version initiale
- **1.1.0** : Ajout des fonctionnalités d'accessibilité avancées
- **1.1.1** : Correctifs de bugs et améliorations mineures
- **1.1.2** : Optimisation des performances
- **1.1.3** : Amélioration de la gestion des cookies et de la sécurité

## 💰 Gestion des Publicités

Le projet intègre la publicité avec :
- Système de cache pour optimiser les performances
- Gestion des erreurs et rechargement intelligent
- Support du mode sombre/clair
- Respect des normes d'accessibilité
- Intégration responsive sur tous les appareils
- Configuration avancée des cookies pour respecter la vie privée

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
  - Contact : clerely-design@gmail.com

## 🙏 Remerciements

- Toutes les sources citées dans les études
- La communauté open source
- Les contributeurs et testeurs
