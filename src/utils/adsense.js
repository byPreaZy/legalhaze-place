// Initialisation d'AdSense au niveau de l'application
export const initializeAdsense = () => {
  if (typeof window === 'undefined') return;

  // Ajouter le script AdSense s'il n'est pas déjà présent
  if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9636110648577560`;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }

  // Initialiser AdSense une seule fois
  window.adsbygoogle = window.adsbygoogle || [];
}; 