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

  useEffect(() => {
    // Vérifier si le script AdSense est déjà chargé
    if (!window.adsbygoogle) {
      console.warn('Google AdSense script not loaded');
      return;
    }

    // Ne charger la publicité qu'une seule fois
    if (!isLoaded.current && adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      } catch (error) {
        console.error('Error loading AdSense ad:', error);
      }
    }

    // Nettoyage lors du démontage du composant
    return () => {
      isLoaded.current = false;
    };
  }, []);

  // Styles par défaut pour une intégration discrète
  const defaultStyle = {
    display: 'block',
    textAlign: 'center',
    margin: '1rem auto',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
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
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: '100%',
          maxWidth: '100%'
        }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdBanner; 