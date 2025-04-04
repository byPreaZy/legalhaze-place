import React, { useState, useEffect, useRef } from 'react';
import AccessibilityControls from './AccessibilityControls';

const FloatingAccessibilityControls = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top <= window.innerHeight;
        setIsVisible(!isFooterVisible);
      }
    };

    const handleClickOutside = (event) => {
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    handleScroll(); // Vérification initiale

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={controlsRef}
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-4'
      }`}
    >
      <div className="relative">
        {/* Bouton principal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-primary hover:bg-brand-accent text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
          aria-label="Options d'accessibilité"
          aria-expanded={isOpen}
          aria-controls="accessibility-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>

        {/* Menu déroulant */}
        <div
          id="accessibility-menu"
          className={`absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 min-w-[200px] transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Options d'accessibilité
          </div>
          <AccessibilityControls isFloating={true} />
        </div>
      </div>
    </div>
  );
};

export default FloatingAccessibilityControls; 