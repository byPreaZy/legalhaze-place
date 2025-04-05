import React, { useEffect, useRef } from 'react';

/**
 * Composant pour afficher une bannière publicitaire Google AdSense
 * @param {Object} props - Propriétés du composant
 * @param {string} props.slot - Identifiant de l'emplacement publicitaire
 * @param {string} props.format - Format de la publicité (auto, fluid, rectangle, etc.)
 * @param {string} props.style - Styles CSS supplémentaires
 * @param {boolean} props.responsive - Si la publicité doit être responsive
 * @param {string} props.className - Classes CSS supplémentaires
 */
const AdBanner = ({ 
  slot, 
  format = 'auto', 
  style = {}, 
  responsive = true,
  className = ''
}) => {
  const adRef = useRef(null);
  const isLoaded = useRef(false);
  const retryCount = useRef(0);
  const maxRetries = 3;

  useEffect(() => {
    let isMounted = true;
    let currentAdElement = adRef.current;

    const loadAd = async () => {
      if (!isLoaded.current && currentAdElement && isMounted) {
        try {
          // Vérifier si AdSense est disponible
          if (typeof window.adsbygoogle === 'undefined') {
            throw new Error('AdSense not initialized');
          }

          // Réinitialiser l'élément avant de charger une nouvelle annonce
          if (currentAdElement) {
            currentAdElement.innerHTML = '';
          }
          
          // Attendre que le DOM soit complètement chargé
          await new Promise(resolve => setTimeout(resolve, 100));
          
          // Vérifier si le composant est toujours monté
          if (!isMounted || !currentAdElement) return;
          
          // Ajouter la classe après le délai
          currentAdElement.className = 'adsbygoogle';

          // Charger l'annonce
          try {
            await (window.adsbygoogle = window.adsbygoogle || []).push({});
            if (isMounted) {
              isLoaded.current = true;
              retryCount.current = 0;
            }
          } catch (pushError) {
            console.warn('Error pushing ad:', pushError);
            if (isMounted && retryCount.current < maxRetries) {
              retryCount.current++;
              setTimeout(loadAd, 1000);
            }
          }
        } catch (error) {
          console.error('Error loading AdSense ad:', error);
          if (isMounted && retryCount.current < maxRetries) {
            retryCount.current++;
            setTimeout(loadAd, 1000);
          }
        }
      }
    };

    loadAd();

    return () => {
      isMounted = false;
      isLoaded.current = false;
      retryCount.current = 0;
      
      // Utiliser la référence capturée pour le nettoyage
      if (currentAdElement) {
        currentAdElement.innerHTML = '';
        currentAdElement.className = '';
      }
    };
  }, [slot]); // slot est la seule dépendance nécessaire

  // Styles par défaut pour une intégration discrète
  const defaultStyle = {
    display: 'block',
    textAlign: 'center',
    margin: '1rem auto',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    minHeight: '100px',
    backgroundColor: 'transparent',
    ...style
  };

  return (
    <div 
      className={`ad-container ${className}`}
      style={defaultStyle}
      aria-label="Publicité"
      role="complementary"
    >
      <ins
        ref={adRef}
        style={{ 
          display: 'block',
          width: '100%',
          maxWidth: '100%',
          minHeight: style.minHeight || '100px'
        }}
        data-ad-client="ca-pub-9636110648577560"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdBanner; 