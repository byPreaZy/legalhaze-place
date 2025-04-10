/**
 * Initialise AdSense de manière sécurisée
 * @returns {Promise<void>}
 */
export const initializeAdsense = () => {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('AdSense ne peut être initialisé que côté client'));
  }

  return new Promise((resolve, reject) => {
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

      setTimeout(() => {
        clearInterval(checkLoaded);
        reject(new Error('Timeout lors du chargement d\'AdSense'));
      }, 10000);
      return;
    }

    // Créer et ajouter le script AdSense avec les attributs de sécurité appropriés
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9636110648577560';
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-ad-status', 'loading');
    script.setAttribute('referrerpolicy', 'origin');
    
    // Ajouter des attributs de sécurité supplémentaires
    script.setAttribute('nonce', generateNonce());
    script.setAttribute('integrity', 'sha384-[hash]'); // À remplacer par le hash réel
    
    script.onload = () => {
      window.adsbygoogle = window.adsbygoogle || [];
      localStorage.setItem('adsense_initialized', 'true');
      localStorage.setItem('adsense_init_timestamp', Date.now().toString());
      resolve();
    };
    
    script.onerror = () => {
      reject(new Error('Échec du chargement du script AdSense'));
    };

    document.head.appendChild(script);

    setTimeout(() => {
      if (!window.adsbygoogle?.loaded) {
        reject(new Error('Timeout lors du chargement d\'AdSense'));
      }
    }, 10000);
  });
};

/**
 * Génère un nonce aléatoire pour la sécurité CSP
 * @returns {string}
 */
const generateNonce = () => {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
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