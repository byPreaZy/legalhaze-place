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
  const { pathname } = useLocation();

  useEffect(() => {
    let mounted = true;

    const checkAdBlock = async () => {
      try {
        const testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        testAd.style.cssText = 'position: absolute; left: -9999px; top: -9999px;';
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
          // Vérifier si le document est en mode Quirks
          if (document.compatMode === 'BackCompat') {
            console.warn('Le document est en mode Quirks, ce qui peut affecter le rendu des publicités');
          }

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
  }, [showAds, pathname]);

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
    }
  };

  if (!showAds || isAdBlocked || !isAdSenseReady || isLoading) {
    return null;
  }

  return (
    <AdErrorBoundary>
      <div className={`ad-container ad-${location}`} data-path={pathname}>
        <AdBanner
          slot={adConfig[location]?.slot}
          format={adConfig[location]?.format}
          responsive={adConfig[location]?.responsive}
          style={adConfig[location]?.style}
        />
      </div>
    </AdErrorBoundary>
  );
};

export default AdManager; 