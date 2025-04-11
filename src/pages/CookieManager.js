import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Cookies from 'js-cookie';
import { useTheme } from '../components/layout/ThemeProvider';
import { initGA } from '../utils/analytics';

// Détection de l'environnement
const isDevelopment = process.env.NODE_ENV === 'development';

// Options de base pour les cookies utilisées dans toute l'application
const getCookieOptions = () => ({
  expires: 365, // 1 an
  path: '/',
  sameSite: isDevelopment ? 'lax' : 'strict',
  secure: !isDevelopment
});

/**
 * Composant CookieManager unifié qui combine les fonctionnalités de:
 * 1. Cookies.js (informations sur les cookies)
 * 2. GestionCookies.js (gestion des préférences)
 */
const CookieManager = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('essential');
  const [activeSection, setActiveSection] = useState('informations');
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    preferences: false,
    marketing: false
  });

  // Charger les préférences existantes au chargement de la page
  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (consent) {
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences.preferences);
      } catch (error) {
        console.error("Erreur lors du parsing des préférences de cookies:", error);
      }
    } else {
      // Si aucun consentement n'existe, vérifier les cookies individuels
      const analytics = Cookies.get('cookie_analytics') === 'true';
      const preferencesEnabled = Cookies.get('cookie_preferences') === 'true';
      const marketing = Cookies.get('cookie_marketing') === 'true';
      const themeExists = Cookies.get('theme') !== undefined;
      
      if (analytics || preferencesEnabled || marketing || themeExists) {
        setPreferences({
          essential: true,
          analytics: analytics || false,
          preferences: preferencesEnabled || themeExists || false,
          marketing: marketing || false
        });
      }
    }
  }, []);

  const handleTogglePreference = (type) => {
    if (type === 'essential') return; // Les cookies essentiels ne peuvent pas être désactivés

    const newPreferences = {
      ...preferences,
      [type]: !preferences[type]
    };
    setPreferences(newPreferences);
  };

  const saveCookiePreferences = (newPreferences, acceptAll = false) => {
    const cookieOptions = getCookieOptions();

    // Sauvegarder les préférences complètes
    Cookies.set('cookieConsent', JSON.stringify({
      accepted: true,
      acceptAll,
      preferences: newPreferences,
      timestamp: new Date().toISOString()
    }), cookieOptions);

    // Sauvegarder les préférences individuelles
    Object.entries(newPreferences).forEach(([key, value]) => {
      Cookies.set(`cookie_${key}`, value, cookieOptions);
    });

    // Gérer le cookie de thème
    if (newPreferences.preferences) {
      Cookies.set('theme', theme, cookieOptions);
    } else {
      // Si les préférences sont désactivées, supprimer le cookie de thème
      Cookies.remove('theme', { path: '/' });
    }

    // Gérer Google Analytics
    if (newPreferences.analytics) {
      initGA();
    } else {
      // Désactiver Google Analytics
      window['ga-disable-G-XXXXXXXXXX'] = true;
    }
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences, false);
    // Afficher un message de confirmation
    alert('Vos préférences de cookies ont été enregistrées.');
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true
    };
    setPreferences(newPreferences);
    saveCookiePreferences(newPreferences, true);
  };

  // Définitions des types de cookies pour l'affichage
  const cookieTypes = {
    essential: {
      title: 'Cookies Essentiels',
      description: 'Ces cookies sont nécessaires au fonctionnement du site. Ils permettent d\'utiliser les fonctionnalités de base comme la navigation et l\'accès aux zones sécurisées.',
      examples: [
        'Cookies de session',
        'Cookies d\'authentification',
        'Cookies de sécurité'
      ]
    },
    analytics: {
      title: 'Cookies Analytiques',
      description: 'Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec notre site. Toutes les données sont anonymisées.',
      examples: [
        'Statistiques de visite',
        'Taux de rebond',
        'Temps moyen de visite'
      ]
    },
    preferences: {
      title: 'Cookies de Préférences',
      description: 'Ces cookies permettent au site de se souvenir de vos choix (comme le mode sombre/clair) pour améliorer votre expérience.',
      examples: [
        'Préférences de langue',
        'Thème choisi (clair/sombre)',
        'Paramètres d\'accessibilité'
      ]
    },
    marketing: {
      title: 'Cookies Marketing',
      description: 'Ces cookies sont utilisés pour vous montrer des publicités pertinentes. Ils peuvent être désactivés sans affecter le fonctionnement du site.',
      examples: [
        'Publicités personnalisées',
        'Suivi des campagnes',
        'Réseaux sociaux'
      ]
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Gestion des cookies | LegalHaze</title>
        <meta name="description" content="Politique et gestion des cookies du site LegalHaze, développé par Clere Kévin (PreaZy)" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Cookies et Confidentialité</h1>

      {/* Navigation entre les sections */}
      <div className="flex mb-8 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveSection('informations')}
          className={`px-4 py-2 font-medium text-sm ${
            activeSection === 'informations'
              ? 'text-green-600 border-b-2 border-green-600 dark:text-green-400 dark:border-green-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          Informations
        </button>
        <button
          onClick={() => setActiveSection('gestion')}
          className={`px-4 py-2 font-medium text-sm ${
            activeSection === 'gestion'
              ? 'text-green-600 border-b-2 border-green-600 dark:text-green-400 dark:border-green-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          Gérer les préférences
        </button>
      </div>

      {activeSection === 'informations' ? (
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Qu'est-ce qu'un cookie ?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) 
              lors de la visite d'un site web. Il permet au site de mémoriser vos actions et préférences 
              (identifiant de connexion, langue, paramètres d'affichage) pendant une durée déterminée.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Types de cookies utilisés
            </h2>
            
            {/* Navigation des types de cookies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(cookieTypes).map(([key, { title }]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === key
                      ? 'bg-green-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>

            {/* Contenu détaillé du type de cookie sélectionné */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {cookieTypes[activeTab].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {cookieTypes[activeTab].description}
              </p>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Exemples :
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {cookieTypes[activeTab].examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Durée de conservation</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Les cookies sont conservés pour une durée maximale de 13 mois. Passé ce délai, votre consentement 
                sera à nouveau demandé.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Comment gérer les cookies ?
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous pouvez à tout moment choisir de désactiver ces cookies. Vous pouvez accepter ou refuser les cookies au cas par cas ou bien les refuser systématiquement.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour gérer les cookies et vos choix, vous pouvez : 
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Utiliser notre <button onClick={() => setActiveSection('gestion')} className="text-green-600 dark:text-green-400 underline focus:outline-none">panneau de gestion des cookies</button></li>
                <li>Chrome : Menu → Paramètres → Confidentialité et sécurité → Cookies et autres données des sites</li>
                <li>Firefox : Menu → Options → Vie privée & Sécurité → Cookies et données des sites</li>
                <li>Safari : Préférences → Confidentialité → Cookies et données de sites web</li>
                <li>Edge : Menu → Paramètres → Cookies et autorisations des sites</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Que se passe-t-il si vous refusez les cookies ?</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si vous refusez les cookies, certaines fonctionnalités du site pourraient être limitées ou indisponibles. Par exemple :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Impossibilité de vous connecter à votre compte</li>
                <li>Impossibilité de personnaliser votre expérience</li>
                <li><strong>Impossibilité de mémoriser vos préférences de thème</strong> (clair/sombre) entre vos visites</li>
                <li>Certaines fonctionnalités du site pourraient ne pas fonctionner correctement</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Pour exercer ces droits, contactez-nous à :{' '}
                <a href="mailto:privacy@legalhaze.fr" className="text-green-600 dark:text-green-400 hover:underline">
                  clerely-design@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Plus d'informations</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour plus d'informations sur la gestion des cookies :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>
                  <a 
                    href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Cookies et traceurs : que dit la loi ? (CNIL)
                  </a>
                </li>
                <li>
                  <Link to="/politique-confidentialite" className="text-green-600 dark:text-green-400 hover:underline">
                    Notre politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setActiveSection('gestion')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Gérer mes préférences
            </button>
          </div>
        </div>
      ) : (
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-6">Gérer vos préférences de cookies</h2>
          <p className="mb-6">
            Vous pouvez choisir les types de cookies que vous souhaitez autoriser sur notre site. Les cookies essentiels ne peuvent pas être désactivés car ils sont nécessaires au fonctionnement du site.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={preferences.analytics}
                      onChange={() => handleTogglePreference('analytics')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-500/20 dark:peer-focus:ring-green-500/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-semibold">Cookies de Préférences</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Thème clair/sombre, langue, etc.</p>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={preferences.preferences}
                      onChange={() => handleTogglePreference('preferences')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-500/20 dark:peer-focus:ring-green-500/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-semibold">Cookies Marketing</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Publicités personnalisées</p>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={preferences.marketing}
                      onChange={() => handleTogglePreference('marketing')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-500/20 dark:peer-focus:ring-green-500/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>

              {/* Afficher le réglage actuel du thème et la possibilité de basculer */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-semibold">Thème actuel</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {theme === 'dark' ? 'Mode sombre' : 'Mode clair'}
                  </p>
                </div>
                <div>
                  <button
                    onClick={toggleTheme}
                    className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    disabled={!preferences.preferences}
                    title={!preferences.preferences ? "Activez les cookies de préférences pour sauvegarder ce réglage" : ""}
                  >
                    Basculer le thème
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={handleSavePreferences}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Enregistrer les préférences
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieManager; 