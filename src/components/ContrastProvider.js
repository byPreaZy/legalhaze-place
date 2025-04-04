import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  calculateContrastRatio, 
  isContrastRatioCompliant,
  adjustColorForContrast
} from '../utils/colorUtils';

const ContrastContext = createContext();

export const useContrast = () => useContext(ContrastContext);

export const ContrastProvider = ({ children }) => {
  // Couleurs de base conformes aux normes WCAG AA
  const [colors, setColors] = useState({
    primary: '#1976D2',    // Bleu principal
    secondary: '#2E7D32',  // Vert secondaire
    accent: '#689F38',     // Vert accent
    background: '#FFFFFF', // Fond clair
    text: '#1B1B1B',      // Texte sombre
    error: '#D32F2F',      // Rouge erreur
    warning: '#F57C00',    // Orange avertissement
    success: '#388E3C',    // Vert succès
    info: '#0288D1',       // Bleu info
  });

  // Couleurs ajustées pour le contraste
  const [contrastColors, setContrastColors] = useState({});

  useEffect(() => {
    // Ajuster les couleurs pour atteindre un ratio de contraste minimum de 4.5:1 (WCAG AA)
    const adjustedColors = {};
    
    Object.entries(colors).forEach(([key, color]) => {
      if (key !== 'background' && key !== 'text') {
        // Ajuster la couleur par rapport au fond
        adjustedColors[key] = adjustColorForContrast(color, colors.background, 4.5);
      } else {
        adjustedColors[key] = color;
      }
    });

    setContrastColors(adjustedColors);
  }, [colors]);

  const value = {
    colors: contrastColors,
    setColors,
    isContrastCompliant: (color1, color2, level = 'AA') => {
      const ratio = calculateContrastRatio(color1, color2);
      return isContrastRatioCompliant(ratio, level);
    },
    getContrastRatio: (color1, color2) => {
      return calculateContrastRatio(color1, color2);
    }
  };

  return (
    <ContrastContext.Provider value={value}>
      {children}
    </ContrastContext.Provider>
  );
}; 