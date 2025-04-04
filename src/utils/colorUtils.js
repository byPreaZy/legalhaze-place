/**
 * Calcule la luminance relative d'une couleur RGB
 * @param {number} r - Composante rouge (0-255)
 * @param {number} g - Composante verte (0-255)
 * @param {number} b - Composante bleue (0-255)
 * @returns {number} - Luminance relative (0-1)
 */
export const calculateRelativeLuminance = (r, g, b) => {
  // Conversion en valeurs relatives (0-1)
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  
  // Calcul de la luminance selon la formule WCAG
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

/**
 * Convertit une couleur hexadécimale en composantes RGB
 * @param {string} hex - Couleur au format hexadécimal (#RRGGBB)
 * @returns {Array<number>} - Tableau [r, g, b] avec valeurs 0-255
 */
export const hexToRgb = (hex) => {
  // Supprimer le # si présent
  hex = hex.replace(/^#/, '');
  
  // Convertir en RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  
  return [r, g, b];
};

/**
 * Convertit des composantes RGB en couleur hexadécimale
 * @param {number} r - Composante rouge (0-255)
 * @param {number} g - Composante verte (0-255)
 * @param {number} b - Composante bleue (0-255)
 * @returns {string} - Couleur au format hexadécimal (#RRGGBB)
 */
export const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

/**
 * Calcule le ratio de contraste entre deux couleurs
 * @param {string} color1 - Première couleur au format hexadécimal (#RRGGBB)
 * @param {string} color2 - Deuxième couleur au format hexadécimal (#RRGGBB)
 * @returns {number} - Ratio de contraste
 */
export const calculateContrastRatio = (color1, color2) => {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);
  
  const l1 = calculateRelativeLuminance(r1, g1, b1);
  const l2 = calculateRelativeLuminance(r2, g2, b2);
  
  // Déterminer la luminance la plus claire et la plus foncée
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  // Calculer le ratio de contraste selon la formule WCAG
  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Détermine la couleur de texte recommandée en fonction de la couleur de fond
 * @param {string} backgroundColor - Couleur de fond au format hexadécimal (#RRGGBB)
 * @returns {string} - Couleur de texte recommandée (#RRGGBB)
 */
export const getContrastTextColor = (backgroundColor) => {
  const [r, g, b] = hexToRgb(backgroundColor);
  const luminance = calculateRelativeLuminance(r, g, b);
  
  // Si la luminance est supérieure à 0.5, utiliser du texte noir, sinon blanc
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

/**
 * Vérifie si un ratio de contraste est conforme aux normes WCAG
 * @param {number} ratio - Ratio de contraste
 * @param {string} level - Niveau de conformité ('AA' ou 'AAA')
 * @param {boolean} isLargeText - Si le texte est grand (18pt ou 14pt gras)
 * @returns {boolean} - Si le ratio est conforme
 */
export const isContrastRatioCompliant = (ratio, level = 'AA', isLargeText = false) => {
  const thresholds = {
    AA: {
      normal: 4.5,
      large: 3
    },
    AAA: {
      normal: 7,
      large: 4.5
    }
  };
  
  const threshold = isLargeText 
    ? thresholds[level].large 
    : thresholds[level].normal;
  
  return ratio >= threshold;
};

/**
 * Ajuste une couleur pour atteindre un ratio de contraste minimum avec une couleur de fond
 * @param {string} color - Couleur à ajuster au format hexadécimal (#RRGGBB)
 * @param {string} backgroundColor - Couleur de fond au format hexadécimal (#RRGGBB)
 * @param {number} targetRatio - Ratio de contraste cible
 * @returns {string} - Couleur ajustée (#RRGGBB)
 */
export const adjustColorForContrast = (color, backgroundColor, targetRatio = 4.5) => {
  // Si le contraste est déjà suffisant, retourner la couleur d'origine
  const currentRatio = calculateContrastRatio(color, backgroundColor);
  if (currentRatio >= targetRatio) {
    return color;
  }
  
  // Déterminer si nous devons assombrir ou éclaircir la couleur
  const [r, g, b] = hexToRgb(color);
  const [bgR, bgG, bgB] = hexToRgb(backgroundColor);
  
  const colorLuminance = calculateRelativeLuminance(r, g, b);
  const bgLuminance = calculateRelativeLuminance(bgR, bgG, bgB);
  
  // Si la couleur est plus claire que le fond, l'assombrir
  // Sinon, l'éclaircir
  const shouldDarken = colorLuminance > bgLuminance;
  
  // Ajuster progressivement la couleur jusqu'à atteindre le ratio cible
  let adjustedR = r;
  let adjustedG = g;
  let adjustedB = b;
  
  // Facteur d'ajustement (plus petit = ajustement plus fin)
  const adjustmentFactor = 5;
  
  // Nombre maximum d'itérations pour éviter une boucle infinie
  const maxIterations = 50;
  let iterations = 0;
  
  while (calculateContrastRatio(rgbToHex(adjustedR, adjustedG, adjustedB), backgroundColor) < targetRatio && iterations < maxIterations) {
    if (shouldDarken) {
      // Assombrir la couleur
      adjustedR = Math.max(0, adjustedR - adjustmentFactor);
      adjustedG = Math.max(0, adjustedG - adjustmentFactor);
      adjustedB = Math.max(0, adjustedB - adjustmentFactor);
    } else {
      // Éclaircir la couleur
      adjustedR = Math.min(255, adjustedR + adjustmentFactor);
      adjustedG = Math.min(255, adjustedG + adjustmentFactor);
      adjustedB = Math.min(255, adjustedB + adjustmentFactor);
    }
    
    iterations++;
  }
  
  return rgbToHex(adjustedR, adjustedG, adjustedB);
};

/**
 * Génère une palette de couleurs adaptative
 * @param {string} baseColor - Couleur de base au format hexadécimal
 * @returns {Object} - Palette de couleurs
 */
export const generateAdaptivePalette = (baseColor) => {
  const [r, g, b] = hexToRgb(baseColor);
  const luminance = calculateRelativeLuminance(r, g, b);
  
  return {
    base: baseColor,
    text: luminance > 0.5 ? '#1B1B1B' : '#FFFFFF',
    background: luminance > 0.5 ? '#FFFFFF' : '#121212',
    muted: luminance > 0.5 ? '#666666' : '#A0A0A0',
    border: luminance > 0.5 ? '#E0E0E0' : '#424242'
  };
}; 