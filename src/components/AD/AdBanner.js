import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useAdCache } from '../../hooks/useAdCache';
import PropTypes from 'prop-types';

/**
 * Composant pour afficher une bannière publicitaire AdSense
 * @param {Object} props - Propriétés du composant
 * @param {string} props.slot - ID du slot publicitaire
 * @param {string} props.format - Format de la publicité (auto, vertical, horizontal)
 * @param {boolean} props.responsive - Si la publicité doit être responsive
 * @param {Object} props.style - Styles CSS additionnels
 * @param {string} props.path - Chemin actuel pour forcer le rechargement lors du changement de page
 */
const AdBanner = React.memo(({ 
  slot, 
  format = 'auto', 
  responsive = true, 
  style = {}, 
  path = window.location.pathname 
}) => {
  const adRef = useRef(null);
  const { isLoading, error } = useAdCache(slot);
  const [adStatus, setAdStatus] = useState('loading');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-ad-status') {
          const status = adRef.current?.getAttribute('data-ad-status');
          if (status) {
            setAdStatus(status);
          }
        }
      });
    });

    if (adRef.current) {
      observer.observe(adRef.current, {
        attributes: true,
        attributeFilter: ['data-ad-status']
      });
    }

    return () => observer.disconnect();
  }, []);

  // Styles par défaut selon le format
  const defaultStyle = useMemo(() => ({
    display: 'block',
    textAlign: 'center',
    margin: '1rem auto',
    overflow: 'hidden',
    ...(format === 'vertical' && {
      width: '300px',
      height: '600px'
    }),
    ...(format === 'horizontal' && {
      width: '728px',
      height: '90px'
    }),
    ...style
  }), [format, style]);

  if (error) {
    return (
      <div 
        className="ad-error" 
        role="alert" 
        aria-live="polite"
        data-testid="ad-error"
      >
        <p>Impossible de charger la publicité</p>
      </div>
    );
  }

  return (
    <div 
      key={path}
      className={`ad-container ${format} ${responsive ? 'responsive' : ''}`}
      role="complementary"
      aria-label="Publicité"
      aria-busy={isLoading || adStatus === 'loading'}
      data-testid="ad-container"
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={defaultStyle}
        data-ad-client="ca-pub-9636110648577560"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
        data-ad-status={adStatus}
      />
      {(isLoading || adStatus === 'loading') && (
        <div 
          className="ad-loading" 
          aria-hidden="true"
          data-testid="ad-loading"
        >
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
});

AdBanner.propTypes = {
  slot: PropTypes.string.isRequired,
  format: PropTypes.oneOf(['auto', 'vertical', 'horizontal']),
  responsive: PropTypes.bool,
  style: PropTypes.object,
  path: PropTypes.string
};

AdBanner.displayName = 'AdBanner';

export default AdBanner; 