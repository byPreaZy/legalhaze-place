import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdBanner from './AdBanner';
import AdErrorBoundary from './AdErrorBoundary';
import { initializeAdsense } from '../../utils/adsense';

/**
 * Composant pour gérer les publicités de manière globale
 * @param {Object} props - Propriétés du composant
 * @param {string} props.location - Emplacement de la publicité (header, sidebar, content, footer)
 * @param {boolean} props.showAds - Si les publicités doivent être affichées
 */
const AdManager = ({ location = 'content', showAds = true }) => {
  const [isAdBlocked, setIsAdBlocked] = useState(false);
  const [isAdSenseReady, setIsAdSenseReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const currentPath = useLocation().pathname;

  useEffect(() => {
    let mounted = true;

    const checkAdBlock = async () => {
      try {
        const testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        document.body.appendChild(testAd);
        
        // Attendre que le DOM soit mis à jour
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const isBlocked = testAd.offsetHeight === 0;
        document.body.removeChild(testAd);
        
        if (mounted) {
          setIsAdBlocked(isBlocked);
        }

        return isBlocked;
      } catch (error) {
        console.warn('Erreur lors de la vérification du bloqueur de publicités:', error);
        if (mounted) {
          setIsAdBlocked(true);
        }
        return true;
      }
    };

    const initAds = async () => {
      if (!showAds) {
        setIsLoading(false);
        return;
      }

      try {
        const blocked = await checkAdBlock();
        
        if (!blocked) {
          await initializeAdsense();
          if (mounted) {
            setIsAdSenseReady(true);
          }
        }
      } catch (error) {
        console.warn('Erreur lors de l\'initialisation des publicités:', error);
        if (mounted) {
          setIsAdBlocked(true);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initAds();

    return () => {
      mounted = false;
    };
  }, [showAds]);

  // Configuration des publicités en fonction de l'emplacement
  const adConfig = {
    header: {
      slot: '7037669726',
      format: 'horizontal',
      responsive: true,
      style: { minHeight: '90px' }
    },
    sidebar: {
      slot: '6801031859',
      format: 'vertical',
      responsive: true,
      style: { minHeight: '600px' }
    },
    content: {
      slot: '1425777637',
      format: 'autorelaxed',
      responsive: true,
      style: { minHeight: '250px' }
    },
    footer: {
      slot: '1078766035',
      format: 'horizontal',
      responsive: true,
      style: { minHeight: '90px' }
    }
  };

  // Si les publicités sont désactivées ou si AdBlock est actif
  if (!showAds || isAdBlocked) {
    return null;
  }

  // Si AdSense n'est pas prêt ou si le chargement est en cours
  if (!isAdSenseReady || isLoading) {
    return (
      <div className="ad-loading-container" role="status" aria-label="Chargement de la publicité">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const config = adConfig[location] || adConfig.content;

  return (
    <AdErrorBoundary>
      <div className={`ad-wrapper ${location}-ad`} role="complementary" aria-label="Publicité">
        <AdBanner {...config} path={currentPath} />
      </div>
    </AdErrorBoundary>
  );
};

export default AdManager; 