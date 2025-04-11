import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Etude from './pages/Etude';
import Annexes from './pages/Annexes';
import ComposesCannabis from './pages/ComposesCannabis';
import Accessibilite from './pages/Accessibilite';
import CookieManager from './pages/CookieManager';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { ThemeProvider } from './components/layout/ThemeProvider';
import { ContrastProvider } from './components/ContrastProvider';
import AdManager from './components/AD/AdManager';
import FloatingAccessibilityControls from './components/layout/FloatingAccessibilityControls';
import FloatingThemeToggle from './components/layout/FloatingThemeToggle';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import { initializeAdsense } from './utils/adsense';
import { initGA, pageview, checkAnalyticsConsent } from './utils/analytics';
import { setupGlobalErrorHandler } from './utils/errorHandler';
import './styles/App.css';
import './styles/ads.css';

// Configuration des flags futurs de React Router
const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

// Composant pour suivre les changements de page
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (checkAnalyticsConsent()) {
      pageview(location.pathname);
    }
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    // Initialiser AdSense une seule fois au chargement de l'application
    initializeAdsense();
    
    // Initialiser Google Analytics si le consentement est donné
    if (checkAnalyticsConsent()) {
      initGA();
    }
    
    // Configurer le gestionnaire d'erreurs global
    setupGlobalErrorHandler();
  }, []);

  return (
    <ThemeProvider>
      <ContrastProvider>
        <Router {...routerConfig}>
          <ScrollToTop />
          <PageTracker />
          <Helmet>
            <html lang="fr" />
            <title>LegalHaze - Ressources sur le Cannabis</title>
            <meta name="description" content="LegalHaze est une ressource éducative sur le cannabis et ses composés, fournissant des informations scientifiquement validées et accessibles à tous." />
            <meta name="keywords" content="cannabis, CBD, THC, terpènes, cannabinoïdes, étude, guide, annexes, légalisation, information, éducation" />
            <meta name="author" content="LegalHaze" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#2E7D32" />
            <meta name="color-scheme" content="light dark" />
            
            {/* Métadonnées pour le SEO */}
            <meta name="google-site-verification" content="votre-code-de-verification" />
            <meta name="geo.region" content="FR" />
            <meta name="geo.placename" content="France" />
            <meta name="revisit-after" content="7 days" />
            <meta name="generator" content="React" />
            <meta name="application-name" content="LegalHaze" />
            
            {/* Métadonnées pour les réseaux sociaux */}
            <meta property="og:title" content="LegalHaze - Ressources sur le Cannabis" />
            <meta property="og:description" content="Ressource éducative sur le cannabis et ses composés" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://legalhaze.fr" />
            <meta property="og:image" content="https://legalhaze.fr/images/og-image.jpg" />
            <meta property="og:site_name" content="LegalHaze" />
            <meta property="og:locale" content="fr_FR" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="LegalHaze - Ressources sur le Cannabis" />
            <meta name="twitter:description" content="Ressource éducative sur le cannabis et ses composés" />
            <meta name="twitter:image" content="https://legalhaze.fr/images/twitter-image.jpg" />
            
            <link rel="canonical" href="https://legalhaze.fr" />
            <link rel="alternate" href="https://legalhaze.fr" hreflang="fr" />
            
            {/* Métadonnées pour l'accessibilité */}
            <meta name="format-detection" content="telephone=no" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="LegalHaze" />
          </Helmet>
          <div className="flex flex-col min-h-screen bg-brand-background-light dark:bg-brand-background-dark text-brand-text-light dark:text-brand-text-dark">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl" id="main-content" tabIndex="-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/etude" element={<Etude />} />
                <Route path="/annexes" element={<Annexes />} />
                <Route path="/composes-cannabis" element={<ComposesCannabis />} />
                <Route path="/accessibilite" element={<Accessibilite />} />
                <Route path="/cookies" element={<CookieManager />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
              </Routes>
            </main>
            {/* Bannière publicitaire en bas de page, juste avant le footer */}
            <div className="w-full max-w-7xl mx-auto px-4 mb-8" role="complementary" aria-label="Publicité">
              <AdManager location="footer" />
            </div>
            <Footer />
            <FloatingAccessibilityControls />
            <FloatingThemeToggle />
            <CookieConsent />
          </div>
        </Router>
      </ContrastProvider>
    </ThemeProvider>
  );
}

export default App;
