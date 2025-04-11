import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Cookies from 'js-cookie';
import { initGA } from '../utils/analytics';

// Détecter si nous sommes en environnement de développement
const isDevelopment = process.env.NODE_ENV === 'development';

const GestionCookies = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    preferences: false,
    marketing: false
  });

  useEffect(() => {
    // Charger les préférences existantes
    const consent = Cookies.get('cookieConsent');
    if (consent) {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences.preferences);
    }
  }, []);

  const handleTogglePreference = (type) => {
    if (type === 'essential') return; // Les cookies essentiels ne peuvent pas être désactivés

    const newPreferences = {
      ...preferences,
      [type]: !preferences[type]
    };
    setPreferences(newPreferences);

    // Options de base pour les cookies
    const cookieOptions = {
      expires: 365,
      path: '/',
    };

    // Ajouter des options de sécurité en production uniquement
    if (!isDevelopment) {
      cookieOptions.secure = true;
      cookieOptions.sameSite = 'strict';
    }

    // En développement, utiliser une approche plus permissive
    if (isDevelopment) {
      cookieOptions.sameSite = 'lax';
    }

    // Mettre à jour les cookies
    Cookies.set('cookieConsent', JSON.stringify({
      accepted: true,
      acceptAll: false,
      preferences: newPreferences,
      timestamp: new Date().toISOString()
    }), cookieOptions);

    // Mettre à jour le cookie individuel
    Cookies.set(`cookie_${type}`, newPreferences[type], cookieOptions);

    // Gérer Google Analytics
    if (type === 'analytics') {
      if (newPreferences.analytics) {
        initGA();
      } else {
        // Désactiver Google Analytics
        window['ga-disable-G-XXXXXXXXXX'] = true;
      }
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true
    };
    setPreferences(newPreferences);

    // Options de base pour les cookies
    const cookieOptions = {
      expires: 365,
      path: '/',
    };

    // Ajouter des options de sécurité en production uniquement
    if (!isDevelopment) {
      cookieOptions.secure = true;
      cookieOptions.sameSite = 'strict';
    }

    // En développement, utiliser une approche plus permissive
    if (isDevelopment) {
      cookieOptions.sameSite = 'lax';
    }

    Cookies.set('cookieConsent', JSON.stringify({
      accepted: true,
      acceptAll: true,
      preferences: newPreferences,
      timestamp: new Date().toISOString()
    }), cookieOptions);

    // Mettre à jour tous les cookies individuels
    Object.entries(newPreferences).forEach(([key, value]) => {
      Cookies.set(`cookie_${key}`, value, cookieOptions);
    });

    initGA();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Gestion des cookies | LegalHaze</title>
        <meta name="description" content="Politique de gestion des cookies du site LegalHaze, développé par Clere Kévin (PreaZy) - Clere'ly design" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Gestion des cookies</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site web. Il permet au site de mémoriser vos actions et préférences (identifiant de connexion, langue, taille des caractères et autres paramètres d'affichage) pendant une durée déterminée.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Les cookies que nous utilisons</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Cookies essentiels</h3>
        <p>
          Ces cookies sont nécessaires au fonctionnement du site. Ils permettent d'utiliser les principales fonctionnalités du site (par exemple, l'accès à votre compte). Sans ces cookies, vous ne pourriez pas utiliser le site normalement.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.2 Cookies de performance</h3>
        <p>
          Ces cookies nous permettent de connaître l'utilisation et les performances du site et d'en améliorer le fonctionnement (par exemple, les pages les plus visitées, les erreurs éventuelles...).
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.3 Cookies de fonctionnalité</h3>
        <p>
          Ces cookies permettent d'améliorer et de personnaliser les fonctionnalités du site. Ils peuvent être définis par nous ou par des tiers dont nous avons ajouté les services à nos pages.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.4 Cookies de ciblage</h3>
        <p>
          Ces cookies sont utilisés pour vous proposer des publicités plus pertinentes. Ils permettent aussi de limiter le nombre d'affichages d'une publicité et d'aider à mesurer l'efficacité des campagnes publicitaires.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Durée de conservation des cookies</h2>
        <p>
          Les cookies que nous utilisons ont une durée de vie limitée :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cookies de session : ils expirent à la fermeture du navigateur</li>
          <li>Cookies persistants : ils restent sur votre terminal pendant une durée déterminée</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Comment gérer les cookies ?</h2>
        <p>
          Vous pouvez à tout moment choisir de désactiver ces cookies. Vous pouvez accepter ou refuser les cookies au cas par cas ou bien les refuser systématiquement.
        </p>
        <p>
          Pour gérer les cookies et vos choix : 
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chrome : Menu → Paramètres → Confidentialité et sécurité → Cookies et autres données des sites</li>
          <li>Firefox : Menu → Options → Vie privée & Sécurité → Cookies et données des sites</li>
          <li>Safari : Préférences → Confidentialité → Cookies et données de sites web</li>
          <li>Edge : Menu → Paramètres → Cookies et autorisations des sites</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Que se passe-t-il si vous refusez les cookies ?</h2>
        <p>
          Si vous refusez les cookies, certaines fonctionnalités du site pourraient être limitées ou indisponibles. Par exemple :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Impossibilité de vous connecter à votre compte</li>
          <li>Impossibilité de personnaliser votre expérience</li>
          <li>Certaines fonctionnalités du site pourraient ne pas fonctionner correctement</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modifications de la politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de gestion des cookies à tout moment. Les modifications prendront effet dès leur publication sur notre site. Nous vous encourageons à consulter régulièrement cette page pour rester informé des changements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
        <p>
          Pour toute question concernant notre politique de gestion des cookies, vous pouvez nous contacter à :
        </p>
        <p>
          Clere Kévin (PreaZy)<br />
          Clere'ly design<br />
          Email : clerelydesign@gmail.com<br />
          Site web : www.clerely-design.fr
        </p>

        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Gérer vos préférences</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold">Cookies Essentiels</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Toujours activés</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold">Cookies Analytiques</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Google Analytics</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleTogglePreference('analytics')}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold">Cookies de Préférences</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Thème, langue, etc.</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.preferences}
                  onChange={() => handleTogglePreference('preferences')}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold">Cookies Marketing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Publicités personnalisées</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => handleTogglePreference('marketing')}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAcceptAll}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionCookies; 