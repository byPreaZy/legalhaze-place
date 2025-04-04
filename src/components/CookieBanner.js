import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fait son choix
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieChoice', 'accepted');
    setIsVisible(false);
    // Ici, vous pouvez ajouter le code pour activer les cookies non essentiels
  };

  const handleReject = () => {
    localStorage.setItem('cookieChoice', 'rejected');
    setIsVisible(false);
    // Ici, vous pouvez ajouter le code pour désactiver les cookies non essentiels
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-4 z-50"
      role="alert"
      aria-live="polite"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-800 dark:text-gray-200 text-sm">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre{' '}
              <Link 
                to="/politique-confidentialite" 
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                politique de confidentialité
              </Link>
              {' '}et notre{' '}
              <Link 
                to="/gestion-cookies" 
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                politique de gestion des cookies
              </Link>.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 