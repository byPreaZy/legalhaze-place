import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    preferences: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true
    });
    saveConsent(true);
  };

  const handleSavePreferences = () => {
    saveConsent(false);
  };

  const saveConsent = (acceptAll) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      accepted: true,
      acceptAll,
      preferences
    }));
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-brand-dark p-4 shadow-lg z-50"
      role="dialog"
      aria-labelledby="cookie-consent-title"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="text-lg font-semibold mb-2">
              Paramètres des cookies
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              Vous pouvez choisir quels types de cookies vous acceptez.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-accent transition-colors"
            >
              Tout accepter
            </button>
            <Link
              to="/cookies"
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-center"
            >
              Personnaliser
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 