import React, { useEffect, useState } from 'react';
import AdBanner from './AdBanner';

/**
 * Composant pour gérer les publicités de manière globale
 * @param {Object} props - Propriétés du composant
 * @param {string} props.location - Emplacement de la publicité (header, sidebar, content, footer)
 * @param {boolean} props.showAds - Si les publicités doivent être affichées
 */
const AdManager = ({ location = 'content', showAds = true }) => {
  const [isAdBlocked, setIsAdBlocked] = useState(false);
  const [isAdSenseReady, setIsAdSenseReady] = useState(false);

  useEffect(() => {
    // Vérifier si AdSense est prêt
    const checkAdSense = () => {
      if (window.adsbygoogle && window.adsbygoogle.loaded) {
        setIsAdSenseReady(true);
      } else {
        // Attendre que AdSense soit chargé
        const checkInterval = setInterval(() => {
          if (window.adsbygoogle && window.adsbygoogle.loaded) {
            setIsAdSenseReady(true);
            clearInterval(checkInterval);
          }
        }, 100);

        // Arrêter la vérification après 10 secondes
        setTimeout(() => {
          clearInterval(checkInterval);
          if (!isAdSenseReady) {
            console.warn('AdSense failed to load within timeout');
          }
        }, 10000);
      }
    };

    // Vérifier si AdBlock est actif
    const checkAdBlock = async () => {
      try {
        const response = await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
        setIsAdBlocked(!response.ok);
        if (response.ok) {
          checkAdSense();
        }
      } catch (error) {
        setIsAdBlocked(true);
        console.warn('AdBlock detected or network error:', error);
      }
    };
    
    checkAdBlock();
  }, [isAdSenseReady]);

  // Si les publicités sont désactivées ou si AdBlock est actif, ne rien afficher
  if (!showAds || isAdBlocked || !isAdSenseReady) {
    return null;
  }

  // Configuration des publicités en fonction de l'emplacement
  const adConfig = {
    header: {
      slot: 'header-ad',
      format: 'auto',
      responsive: true
    },
    sidebar: {
      slot: 'sidebar-ad',
      format: 'vertical',
      responsive: false
    },
    content: {
      slot: 'content-ad',
      format: 'auto',
      responsive: true
    },
    footer: {
      slot: 'footer-ad',
      format: 'auto',
      responsive: true
    }
  };

  const config = adConfig[location] || adConfig.content;

  return (
    <div className={`ad-wrapper ${location}-ad`}>
      <AdBanner {...config} />
    </div>
  );
};

export default AdManager; 