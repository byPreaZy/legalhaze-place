import React, { useState, useEffect } from 'react';

const AccessibilityControls = ({ className = '', isFloating = false }) => {
  const [fontSize, setFontSize] = useState(100); // 100% = taille normale
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [lineSpacing, setLineSpacing] = useState(1.5); // 1.5 = espacement normal

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

  useEffect(() => {
    // Appliquer la réduction de mouvement
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [reducedMotion]);

  useEffect(() => {
    // Appliquer l'espacement des lignes
    document.documentElement.style.setProperty('--line-height', lineSpacing);
  }, [lineSpacing]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 200)); // Max 200%
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 50)); // Min 50%
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(prev => !prev);
  };

  const increaseLineSpacing = () => {
    setLineSpacing(prev => Math.min(prev + 0.25, 2.5)); // Max 2.5
  };

  const decreaseLineSpacing = () => {
    setLineSpacing(prev => Math.max(prev - 0.25, 1)); // Min 1
  };

  const buttonClasses = isFloating
    ? "hover:bg-green-600 dark:hover:bg-green-400 transition-colors flex items-center gap-2 p-2 rounded-lg"
    : "hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-2";

  return (
    <div className={`space-y-2 ${className}`} role="group" aria-label="Options d'accessibilité">
      <h3 className="text-lg font-semibold mb-2">Options d'accessibilité</h3>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">Taille du texte</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={decreaseFontSize}
              className={buttonClasses}
              aria-label="Réduire la taille du texte"
              title="Réduire la taille du texte"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="text-sm w-12 text-center">{fontSize}%</span>
            <button 
              onClick={increaseFontSize}
              className={buttonClasses}
              aria-label="Augmenter la taille du texte"
              title="Augmenter la taille du texte"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Espacement des lignes</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={decreaseLineSpacing}
              className={buttonClasses}
              aria-label="Réduire l'espacement des lignes"
              title="Réduire l'espacement des lignes"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="text-sm w-12 text-center">{lineSpacing.toFixed(2)}</span>
            <button 
              onClick={increaseLineSpacing}
              className={buttonClasses}
              aria-label="Augmenter l'espacement des lignes"
              title="Augmenter l'espacement des lignes"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        <button 
          onClick={toggleHighContrast}
          className={`${buttonClasses} w-full justify-between`}
          aria-label={highContrast ? "Désactiver le mode contraste élevé" : "Activer le mode contraste élevé"}
          aria-pressed={highContrast}
        >
          <span>Contraste élevé</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </button>

        <button 
          onClick={toggleReducedMotion}
          className={`${buttonClasses} w-full justify-between`}
          aria-label={reducedMotion ? "Désactiver la réduction de mouvement" : "Activer la réduction de mouvement"}
          aria-pressed={reducedMotion}
        >
          <span>Réduire les animations</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AccessibilityControls; 