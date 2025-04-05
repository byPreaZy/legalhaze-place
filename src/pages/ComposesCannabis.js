import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PdfExport from '../components/PdfExport';
import InternalNavigation from '../components/InternalNavigation';
import {
  CompositionSection,
  CannabinoidesSection,
  TerpenesSection,
  EntourageSection,
  ApplicationsSection,
  ReferencesSection
} from '../components/composes';

const ComposesCannabis = () => {
  const [cookieConsent, setCookieConsent] = useState(false);
  const contentRef = useRef(null);

  // Définition des sections pour la navigation
  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'composition', label: 'Composition' },
    { id: 'cannabinoides', label: 'Cannabinoïdes' },
    { id: 'terpenes', label: 'Terpènes' },
    { id: 'entourage', label: 'Effet d\'Entourage' },
    { id: 'applications', label: 'Applications' },
    { id: 'references', label: 'Références' },
    { id: 'annexes', label: 'Annexes' }
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
        'event_category': 'Composes',
        'event_label': label
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Composés du Cannabis | LegalHaze</title>
        <meta name="description" content="Étude détaillée des composés actifs du cannabis, leurs effets et applications thérapeutiques. Analyse des cannabinoïdes, terpènes et de l'effet d'entourage." />
        <meta name="keywords" content="cannabinoïdes, terpènes, effet d'entourage, THC, CBD, cannabis, composés actifs" />
        <link rel="canonical" href="https://legalhaze.fr/composes" />
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
              Composés du Cannabis
            </h1>
            <PdfExport 
              contentId="composes-content" 
              fileName="composes-cannabis" 
              buttonText="Exporter l'étude"
            />
          </div>

          <div id="composes-content" ref={contentRef} className="space-y-12">
            <InternalNavigation sections={sections} />

            {/* Introduction */}
            <section 
              id="introduction" 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Introduction</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  Le cannabis, également connu sous le nom de marijuana, est une plante complexe contenant
                  plus de 500 composés chimiques. Parmi ceux-ci, les cannabinoïdes et les terpènes sont les
                  plus étudiés en raison de leurs effets thérapeutiques potentiels. Ce document explore la
                  composition du cannabis, les différents cannabinoïdes et terpènes, leurs effets, et l'importance
                  de l'effet d'entourage.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  La recherche scientifique sur le cannabis a considérablement évolué au cours des dernières décennies, 
                  révélant un système endocannabinoïde sophistiqué dans le corps humain qui interagit avec ces composés. 
                  Cette découverte a ouvert de nouvelles perspectives thérapeutiques pour de nombreuses pathologies, 
                  de la douleur chronique aux troubles neurologiques.
                </p>
              </div>
            </section>

            <CompositionSection />
            <CannabinoidesSection />
            <TerpenesSection />
            <EntourageSection />
            <ApplicationsSection />
            <ReferencesSection trackInteraction={trackInteraction} />

            {/* Annexes */}
            <section id="annexes" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Annexes Complémentaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/annexes?annexe=A" className="group">
                  <div className="bg-brand-primary/5 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-2 text-brand-secondary group-hover:text-brand-accent">Annexe A</h3>
                    <p className="text-gray-600 dark:text-gray-300">Liste détaillée des cannabinoïdes et terpènes, leurs sources et effets.</p>
                  </div>
                </Link>
                <Link to="/annexes?annexe=B" className="group">
                  <div className="bg-brand-primary/5 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-2 text-brand-secondary group-hover:text-brand-accent">Annexe B</h3>
                    <p className="text-gray-600 dark:text-gray-300">Études cliniques sur l'effet d'entourage et leurs résultats à l'international.</p>
                  </div>
                </Link>
                <Link to="/annexes?annexe=C" className="group">
                  <div className="bg-brand-primary/5 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-2 text-brand-secondary group-hover:text-brand-accent">Annexe C</h3>
                    <p className="text-gray-600 dark:text-gray-300">Réglementations et usage médical du cannabis à l'international.</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ComposesCannabis; 