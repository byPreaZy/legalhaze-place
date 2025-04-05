import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import PdfExport from '../components/PdfExport';
import { EconomiqueSection, SanteSection, SocialSection } from '../components/etude';
import InternalNavigation from '../components/InternalNavigation';

const Etude = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  // Définition des sections pour la navigation
  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'economique', label: 'Impacts Économiques' },
    { id: 'social', label: 'Impacts Sociaux' },
    { id: 'sante', label: 'Impacts Sanitaires' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    setCookieConsent(consent === 'true');
  }, []);

  const trackInteraction = (action, label) => {
    if (cookieConsent && window.gtag) {
      window.gtag('event', action, {
        'event_category': 'Etude',
        'event_label': label
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Étude Comparative - Légalisation du Cannabis | LegalHaze</title>
        <meta name="description" content="Analyse comparative internationale de la légalisation du cannabis : impacts économiques, sociaux et sanitaires. Données actualisées et sources fiables." />
        <meta name="keywords" content="légalisation cannabis, étude comparative, impacts économiques, régulation cannabis, données internationales" />
        <link rel="canonical" href="https://legalhaze.fr/etude" />
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
              Étude Comparative Internationale
            </h1>
            <PdfExport 
              contentId="etude-content" 
              fileName="etude-comparative-cannabis" 
              buttonText="Exporter l'étude"
            />
          </div>

          <div id="etude-content" className="space-y-12">
            <InternalNavigation sections={sections} />
            
            <section id="introduction" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cette étude analyse les impacts de la légalisation du cannabis dans différents pays, 
                en se basant sur des données officielles et des recherches académiques récentes.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Sources principales : 
                  <a 
                    href="https://www.unodc.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    onClick={() => trackInteraction('click', 'source-onudc')}
                  >
                    Office des Nations Unies contre la drogue et le crime (ONUDC)
                    <FaExternalLinkAlt className="ml-1" />
                  </a>
                </p>
              </div>
            </section>

            <section id="economique">
              <EconomiqueSection trackInteraction={trackInteraction} />
            </section>
            
            <section id="social">
              <SocialSection trackInteraction={trackInteraction} />
            </section>
            
            <section id="sante">
              <SanteSection trackInteraction={trackInteraction} />
            </section>

            <section id="conclusion" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Conclusion
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Les données internationales montrent des impacts positifs significatifs de la légalisation, 
                tout en soulignant l'importance d'une régulation stricte et d'un suivi continu.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Note : Cette étude est régulièrement mise à jour avec les dernières données disponibles.
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Etude; 