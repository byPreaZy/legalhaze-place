/**
 * Initialise AdSense de manière sécurisée
 * @returns {Promise<void>}
 */
export const initializeAdsense = () => {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('AdSense ne peut être initialisé que côté client'));
  }

  return new Promise((resolve, reject) => {
    // Vérifier si le document est en mode Quirks
    if (document.compatMode === 'BackCompat') {
      console.warn('Le document est en mode Quirks, ce qui peut affecter le rendu des publicités');
    }

    // Vérifier le cache
    const cachedInit = localStorage.getItem('adsense_initialized');
    const cacheTimestamp = localStorage.getItem('adsense_init_timestamp');
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 heures
    const STALE_DURATION = 48 * 60 * 60 * 1000; // 48 heures

    if (cachedInit && cacheTimestamp) {
      const timestamp = parseInt(cacheTimestamp, 10);
      const age = Date.now() - timestamp;
      
      if (age < CACHE_DURATION && window.adsbygoogle?.loaded) {
        resolve();
        return;
      }
      
      if (age < STALE_DURATION && window.adsbygoogle?.loaded) {
        revalidateAdsense();
        resolve();
        return;
      }
    }

    if (window.adsbygoogle?.loaded) {
      localStorage.setItem('adsense_initialized', 'true');
      localStorage.setItem('adsense_init_timestamp', Date.now().toString());
      resolve();
      return;
    }

    const existingScript = document.querySelector('script[src*="adsbygoogle.js"]');
    if (existingScript) {
      const checkLoaded = setInterval(() => {
        if (window.adsbygoogle?.loaded) {
          clearInterval(checkLoaded);
          localStorage.setItem('adsense_initialized', 'true');
          localStorage.setItem('adsense_init_timestamp', Date.now().toString());
          resolve();
        }
      }, 100);

      // Timeout après 10 secondes
      setTimeout(() => {
        clearInterval(checkLoaded);
        reject(new Error('Timeout lors du chargement d\'AdSense'));
      }, 10000);
      return;
    }

    // Créer et ajouter le script AdSense
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9636110648577560`;
    script.crossOrigin = 'anonymous';
    script.onerror = () => reject(new Error('Erreur lors du chargement du script AdSense'));
    
    script.onload = () => {
      if (window.adsbygoogle?.loaded) {
        localStorage.setItem('adsense_initialized', 'true');
        localStorage.setItem('adsense_init_timestamp', Date.now().toString());
        resolve();
      } else {
        reject(new Error('AdSense n\'a pas été correctement initialisé'));
      }
    };

    document.head.appendChild(script);
  });
};

/**
 * Revalide AdSense en arrière-plan
 */
const revalidateAdsense = () => {
  localStorage.setItem('adsense_init_timestamp', Date.now().toString());
  
  const checkInterval = setInterval(() => {
    if (!window.adsbygoogle?.loaded) {
      clearInterval(checkInterval);
      initializeAdsense().catch(err => {
        console.warn('Échec de la revalidation d\'AdSense:', err);
      });
    }
  }, 5 * 60 * 1000);
}; 