import React from 'react';
import AdBanner from './AdBanner';

/**
 * Composant pour afficher une publicité dans le contenu d'une page
 * @param {Object} props - Propriétés du composant
 * @param {string} props.position - Position de la publicité (top, middle, bottom)
 * @param {string} props.className - Classes CSS supplémentaires
 */
const ContentAd = ({ position = 'middle', className = '' }) => {
  // Styles spécifiques selon la position
  const positionStyles = {
    top: {
      marginTop: '0',
      marginBottom: '2rem',
      width: '100%'
    },
    middle: {
      marginTop: '2rem',
      marginBottom: '2rem',
      width: '100%'
    },
    bottom: {
      marginTop: '2rem',
      marginBottom: '0',
      width: '100%'
    }
  };

  return (
    <div 
      className={`content-ad content-ad-${position} ${className}`}
      style={positionStyles[position]}
    >
      <div className="ad-wrapper">
        <AdBanner 
          slot={`content-${position}-ad`}
          format="auto"
          style={{
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto'
          }}
          responsive={true}
          className={`ad-content-${position}`}
        />
      </div>
    </div>
  );
};

export default ContentAd; 