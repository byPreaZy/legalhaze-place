import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import InternalNavigation from '../components/InternalNavigation';
import PdfExport from '../components/PdfExport';
import {
  IntroductionSection,
  OriginesSection,
  AntiquiteSection,
  MoyenAgeSection,
  RenaissanceSection,
  XIXSiecleSection,
  XXSiecleSection,
  ProhibitionSection,
  DecouvertesSection,
  LegalisationSection,
  ConclusionSection
} from '../components/guide';

const Guide = () => {
  const [cookieConsent, setCookieConsent] = useState(false);
  const contentRef = useRef(null);

  // Définition des sections pour la navigation
  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'origines', label: 'Origines' },
    { id: 'antiquite', label: 'Antiquité' },
    { id: 'moyen-age', label: 'Moyen Âge' },
    { id: 'renaissance', label: 'Renaissance' },
    { id: 'xix-siecle', label: 'XIXe siècle' },
    { id: 'xx-siecle', label: 'XXe siècle' },
    { id: 'prohibition', label: 'Prohibition' },
    { id: 'decouvertes', label: 'Découvertes scientifiques' },
    { id: 'legalisation', label: 'Légalisation' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    setCookieConsent(consent === 'true');

    // Gérer le hash dans l'URL au chargement initial
    const hash = window.location.hash.replace('#', '');
    if (hash && contentRef.current) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  const trackInteraction = (action, label) => {
    if (cookieConsent && window.gtag) {
      window.gtag('event', action, {
        'event_category': 'Guide',
        'event_label': label
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Guide Historique du Cannabis | LegalHaze</title>
        <meta name="description" content="Guide complet sur l'histoire du cannabis, de ses origines à nos jours, incluant les découvertes scientifiques majeures et l'évolution de sa régulation." />
        <meta name="keywords" content="histoire cannabis, origines cannabis, prohibition cannabis, découvertes scientifiques cannabis, légalisation cannabis" />
        <link rel="canonical" href="https://legalhaze.fr/guide" />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Guide Historique du Cannabis
            </h1>
            <PdfExport 
              contentId="guide-content" 
              fileName="guide-historique-cannabis" 
              buttonText="Exporter le guide"
            />
          </div>

          <div id="guide-content" ref={contentRef} className="space-y-12">
            <InternalNavigation sections={sections} />
            
            <div className="space-y-16">
              <IntroductionSection trackInteraction={trackInteraction} />
              <OriginesSection />
              <AntiquiteSection trackInteraction={trackInteraction} />
              <MoyenAgeSection />
              <RenaissanceSection />
              <XIXSiecleSection trackInteraction={trackInteraction} />
              <XXSiecleSection />
              <ProhibitionSection />
              <DecouvertesSection trackInteraction={trackInteraction} />
              <LegalisationSection />
              <ConclusionSection trackInteraction={trackInteraction} />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Guide; 