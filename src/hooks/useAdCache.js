import { useState, useEffect } from 'react';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const STALE_DURATION = 60 * 60 * 1000; // 1 heure (pour stale-while-revalidate)
const LOAD_TIMEOUT = 10000; // 10 secondes

export const useAdCache = (slotId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAd = async () => {
      try {
        // Vérifier le cache
        const cachedAd = localStorage.getItem(`ad_${slotId}`);
        const cacheTimestamp = localStorage.getItem(`ad_${slotId}_timestamp`);
        
        if (cachedAd && cacheTimestamp) {
          const timestamp = parseInt(cacheTimestamp, 10);
          const age = Date.now() - timestamp;
          
          // Si le cache est frais, l'utiliser directement
          if (age < CACHE_DURATION) {
            setIsLoading(false);
            return;
          }
          
          // Si le cache est périmé mais pas trop vieux, utiliser stale-while-revalidate
          if (age < STALE_DURATION) {
            // Utiliser le cache périmé immédiatement
            setIsLoading(false);
            
            // Revalider en arrière-plan
            revalidateAd(slotId);
            return;
          }
        }

        // Pas de cache valide, charger l'annonce
        await loadFreshAd(slotId);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadAd();
  }, [slotId]);

  return { isLoading, error };
};

// Fonction pour charger une annonce fraîche
const loadFreshAd = async (slotId) => {
  // Timeout pour le chargement
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout de chargement de l\'annonce')), LOAD_TIMEOUT);
  });

  // Chargement de l'annonce
  const loadPromise = new Promise((resolve) => {
    // Vérifier si l'annonce est déjà chargée
    const adElement = document.querySelector(`ins[data-ad-slot="${slotId}"]`);
    if (adElement && adElement.getAttribute('data-ad-status') === 'done') {
      resolve();
      return;
    }

    // Vérifier si adsbygoogle est disponible et non chargé
    if (window.adsbygoogle && !window.adsbygoogle.loaded) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    resolve();
  });

  await Promise.race([loadPromise, timeoutPromise]);

  // Mise en cache
  localStorage.setItem(`ad_${slotId}`, 'loaded');
  localStorage.setItem(`ad_${slotId}_timestamp`, Date.now().toString());
};

// Fonction pour revalider une annonce en arrière-plan
const revalidateAd = async (slotId) => {
  try {
    await loadFreshAd(slotId);
  } catch (err) {
    console.warn('Échec de la revalidation de l\'annonce:', err);
  }
}; 