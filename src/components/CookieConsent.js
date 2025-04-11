import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initGA } from '../utils/analytics';
import Cookies from 'js-cookie';
import { useTheme } from '../components/layout/ThemeProvider';

// Détecter si nous sommes en environnement de développement
const isDevelopment = process.env.NODE_ENV === 'development';

const CookieConsent = () => {
  const { theme } = useTheme();
  const [showConsent, setShowConsent] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    preferences: false,
    marketing: false
  });

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    } else {
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences.preferences);
        if (savedPreferences.preferences.analytics) {
          initGA();
        }
      } catch (error) {
        console.error("Erreur lors du parsing des préférences de cookies:", error);
        setShowConsent(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true
    };
    setPreferences(newPreferences);
    saveConsent(true, newPreferences);
    initGA();
  };

  const handleSavePreferences = () => {
    saveConsent(false, preferences);
    if (preferences.analytics) {
      initGA();
    }
  };

  const handleTogglePreference = (type) => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveConsent = (acceptAll, preferences) => {
    // Options de base pour les cookies
    const cookieOptions = {
      expires: 365, // 1 an
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
      acceptAll,
      preferences,
      timestamp: new Date().toISOString()
    }), cookieOptions);

    // Sauvegarder les préférences individuelles
    Object.entries(preferences).forEach(([key, value]) => {
      Cookies.set(`cookie_${key}`, value, cookieOptions);
    });

    // Si les préférences sont acceptées, sauvegarder le thème actuel
    if (preferences.preferences) {
      Cookies.set('theme', theme, cookieOptions);
    } else {
      // Si les préférences sont refusées, supprimer le cookie de thème
      Cookies.remove('theme', { path: '/' });
    }

    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 shadow-lg z-50"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Paramètres des cookies
            </h2>
            <p id="cookie-consent-description" className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              Vous pouvez choisir quels types de cookies vous acceptez.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="essential"
                  checked={preferences.essential}
                  disabled
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="essential" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Cookies essentiels (obligatoires)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={preferences.analytics}
                  onChange={() => handleTogglePreference('analytics')}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="analytics" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Cookies analytiques (Google Analytics)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="preferences"
                  checked={preferences.preferences}
                  onChange={() => handleTogglePreference('preferences')}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="preferences" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Cookies de préférences (thème clair/sombre, etc.)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={preferences.marketing}
                  onChange={() => handleTogglePreference('marketing')}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="marketing" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Cookies marketing
                </label>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Tout accepter
            </button>
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Enregistrer les préférences
            </button>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p>
            Pour plus d'informations sur notre utilisation des cookies, consultez notre{' '}
            <Link 
              to="/politique-confidentialite" 
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              politique de confidentialité
            </Link>
            {' '}et notre{' '}
            <Link 
              to="/cookies" 
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              politique de gestion des cookies
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 