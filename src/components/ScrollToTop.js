import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Défilement vers le haut de la page à chaque changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Utilisation de 'instant' pour éviter l'animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop; 