import React, { useState, useEffect } from 'react';

const AccessibilityControls = ({ className = '', isFloating = false }) => {
  const [fontSize, setFontSize] = useState(100); // 100% = taille normale
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Appliquer les changements de taille de police
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    // Appliquer le mode contraste élevé
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 200)); // Max 200%
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 50)); // Min 50%
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  const buttonClasses = isFloating
    ? "hover:bg-green-600 dark:hover:bg-green-400 transition-colors flex items-center gap-2 p-2 rounded-lg"
    : "hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-2";

  return (
    <div className={`space-y-2 ${className}`}>
      <button 
        onClick={increaseFontSize}
        className={buttonClasses}
        aria-label="Augmenter la taille du texte"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        {!isFloating && "Augmenter le texte"}
      </button>
      <button 
        onClick={decreaseFontSize}
        className={buttonClasses}
        aria-label="Réduire la taille du texte"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
        {!isFloating && "Réduire le texte"}
      </button>
      <button 
        onClick={toggleHighContrast}
        className={buttonClasses}
        aria-label="Activer le mode contraste élevé"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        {!isFloating && (highContrast ? 'Désactiver' : 'Activer') + ' le contraste élevé'}
      </button>
    </div>
  );
};

export default AccessibilityControls; 