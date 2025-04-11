// Configuration de Google Analytics
export const GA_TRACKING_ID = 'G-21XHTTYKJ4'; // ID de suivi Google Analytics

// Initialisation de Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
      // Utilisation de SameSite=Lax pour réduire les avertissements de cookies tiers
      // Enlevez cette option pour utiliser les paramètres par défaut de Google Analytics
      // cookie_flags: 'SameSite=None;Secure'
    });
  }
};

// Suivi des pages vues
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Suivi des événements
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Suivi des erreurs JavaScript
export const trackError = (error, errorInfo = null) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message || error.toString(),
      fatal: false,
      error_details: errorInfo ? JSON.stringify(errorInfo) : null
    });
  }
  
  // Afficher l'erreur dans la console pour le débogage
  console.error('Erreur suivie par Google Analytics:', error);
  if (errorInfo) {
    console.error('Informations supplémentaires:', errorInfo);
  }
};

// Vérification du consentement des cookies
export const checkAnalyticsConsent = () => {
  const consent = localStorage.getItem('cookieConsent');
  if (consent) {
    const { preferences } = JSON.parse(consent);
    return preferences.analytics;
  }
  return false;
}; 