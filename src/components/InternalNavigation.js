import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const InternalNavigation = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTimeout = useRef(null);
  const location = useLocation();
  const lastScrollTime = useRef(Date.now());
  const scrollEndTimeout = useRef(null);
  const scrollContainerRef = useRef(null);
  
  // Fonction pour faire défiler jusqu'à une section
  const scrollToSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
    setIsScrolling(true);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } catch (error) {
        window.scrollTo(0, offsetPosition);
      }
      
      window.history.pushState(null, '', `${location.pathname}#${sectionId}`);
      
      // Réinitialiser l'état de défilement après l'animation
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        lastScrollTime.current = Date.now();
        
        // Ajouter un délai supplémentaire pour s'assurer que le défilement est terminé
        if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
        scrollEndTimeout.current = setTimeout(() => {
          // Forcer une mise à jour de la section active après le défilement
          window.dispatchEvent(new Event('scroll'));
        }, 100);
      }, 300);
    }
  }, [location.pathname]);

  // Vérifier le hash dans l'URL au chargement
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sections.some(section => section.id === hash)) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [sections, scrollToSection]);

  // Détection de la section active lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      // Ne pas mettre à jour si on est en train de défiler programmatiquement
      // sauf si le défilement a commencé il y a plus de 500ms
      const now = Date.now();
      if (isScrolling && now - lastScrollTime.current < 500) return;
      
      // Marquer le début du défilement
      lastScrollTime.current = Date.now();
      
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        // Calculer quelle section est la plus visible
        const viewportHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        let bestSection = null;
        let bestScore = -1;
        
        sections.forEach(section => {
          const element = document.getElementById(section.id);
          if (!element) return;
          
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollTop;
          const elementBottom = rect.bottom + scrollTop;
          
          // Calculer combien de la section est visible
          const visibleTop = Math.max(elementTop, scrollTop);
          const visibleBottom = Math.min(elementBottom, scrollTop + viewportHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // Calculer un score basé sur la visibilité et la position
          const visibilityRatio = visibleHeight / rect.height;
          const positionScore = 1 - (Math.max(0, rect.top) / viewportHeight);
          const score = visibilityRatio * (1 + positionScore * 0.5);
          
          if (score > bestScore) {
            bestScore = score;
            bestSection = section.id;
          }
        });
        
        if (bestSection && bestSection !== activeSection) {
          setActiveSection(bestSection);
          window.history.replaceState(null, '', `${location.pathname}#${bestSection}`);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    };
  }, [sections, activeSection, isScrolling, location.pathname]);

  // Gestion du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        // Déclencher un événement de défilement pour recalculer la section active
        window.dispatchEvent(new Event('scroll'));
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Nettoyage des timeouts lors du démontage du composant
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    };
  }, []);

  // Fonction pour faire défiler horizontalement jusqu'au bouton actif sur mobile
  useEffect(() => {
    if (scrollContainerRef.current && window.innerWidth < 768) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-section="${activeSection}"]`);
      if (activeButton) {
        const scrollLeft = activeButton.offsetLeft - (scrollContainerRef.current.offsetWidth / 2) + (activeButton.offsetWidth / 2);
        scrollContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection]);

  const activeLabel = sections.find(section => section.id === activeSection)?.label || sections[0].label;

  return (
    <div className="sticky top-4 z-10">
      {/* Version mobile avec menu déroulant */}
      <div className="md:hidden bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full px-4 py-3 flex items-center justify-between bg-brand-primary text-white"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <span className="font-medium">{activeLabel}</span>
          {isMenuOpen ? <FaChevronDown className="w-4 h-4" /> : <FaChevronRight className="w-4 h-4" />}
        </button>
        
        {isMenuOpen && (
          <div 
            id="mobile-nav-menu"
            className="max-h-[40vh] overflow-y-auto"
          >
            <ul className="py-2">
              {sections.map(section => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      scrollToSection(section.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-brand-primary/10 text-brand-primary dark:text-brand-accent'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    aria-current={activeSection === section.id ? 'page' : undefined}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Version desktop avec tous les boutons visibles */}
      <nav 
        className="hidden md:block bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md transition-colors duration-300"
        role="navigation" 
        aria-label="Navigation interne"
      >
        <ul className="flex flex-wrap gap-4 justify-center">
          {sections.map(section => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
                aria-label={`Aller à la section ${section.label}`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default InternalNavigation; 