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
      if (window.adsbygoogle?.loaded) {
        setIsAdSenseReady(true);
        return true;
      }
      return false;
    };

    // Vérifier si AdBlock est actif
    const checkAdBlock = async () => {
      try {
        const testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        document.body.appendChild(testAd);
        
        // Attendre un court instant pour que AdBlock agisse
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const isBlocked = testAd.offsetHeight === 0;
        document.body.removeChild(testAd);
        
        setIsAdBlocked(isBlocked);
        if (!isBlocked && !checkAdSense()) {
          const checkInterval = setInterval(() => {
            if (checkAdSense()) {
              clearInterval(checkInterval);
            }
          }, 200);

          // Arrêter la vérification après 5 secondes
          setTimeout(() => {
            clearInterval(checkInterval);
          }, 5000);
        }
      } catch (error) {
        console.warn('Erreur lors de la vérification AdBlock:', error);
        setIsAdBlocked(true);
      }
    };
    
    // Ne vérifier que si les publicités sont activées
    if (showAds) {
      checkAdBlock();
    }

    return () => {
      // Nettoyage si nécessaire
    };
  }, [showAds]);

  // Si les publicités sont désactivées ou si AdBlock est actif, ne rien afficher
  if (!showAds || isAdBlocked || !isAdSenseReady) {
    return null;
  }

  // Configuration des publicités en fonction de l'emplacement
  const adConfig = {
    header: {
      slot: '1234567890', // Remplacez par votre vrai slot ID
      format: 'auto',
      responsive: true,
      style: { minHeight: '90px' }
    },
    sidebar: {
      slot: '0987654321', // Remplacez par votre vrai slot ID
      format: 'vertical',
      responsive: false,
      style: { minHeight: '600px' }
    },
    content: {
      slot: '1357924680', // Remplacez par votre vrai slot ID
      format: 'auto',
      responsive: true,
      style: { minHeight: '250px' }
    },
    footer: {
      slot: '2468013579', // Remplacez par votre vrai slot ID
      format: 'auto',
      responsive: true,
      style: { minHeight: '90px' }
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