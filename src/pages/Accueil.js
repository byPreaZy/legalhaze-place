import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaLeaf, FaChartLine, FaUserShield, FaHandshake, FaGlobeAmericas, FaExternalLinkAlt, FaHistory, FaFlask, FaBalanceScale } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import InternalNavigation from '../components/InternalNavigation';
import PdfExport from '../components/PdfExport';

const Accueil = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  // Définition des sections pour la navigation
  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'guide', label: 'Guide Historique' },
    { id: 'etudes', label: 'Études Comparatives' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'ressources', label: 'Ressources' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    setCookieConsent(consent === 'true');
  }, []);

  const trackInteraction = (action, label) => {
    if (cookieConsent && window.gtag) {
      window.gtag('event', action, {
        'event_category': 'Accueil',
        'event_label': label
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>LegalHaze - Plateforme d'Information sur la Légalisation du Cannabis</title>
        <meta name="description" content="Découvrez l'histoire du cannabis, les études comparatives, les actualités et ressources sur la légalisation du cannabis en France et dans le monde." />
        <meta name="keywords" content="légalisation cannabis, histoire cannabis, études cannabis, actualités cannabis, ressources cannabis" />
        <link rel="canonical" href="https://legalhaze.fr" />
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
              Bienvenue sur LegalHaze
            </h1>
            <PdfExport 
              contentId="accueil-content" 
              fileName="legalhaze-accueil" 
              buttonText="Exporter la page"
            />
          </div>

          <div id="accueil-content" className="space-y-12">
            <InternalNavigation sections={sections} />
            
            <section id="introduction" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                LegalHaze est votre source d'information fiable sur la légalisation du cannabis,
                son histoire, ses impacts et ses perspectives d'évolution. Notre plateforme vous offre
                un accès à des ressources documentées, des études comparatives et des actualités
                sur ce sujet d'importance croissante.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Que vous soyez un professionnel de santé, un décideur politique, un chercheur ou
                simplement curieux, LegalHaze vous accompagne dans votre compréhension des enjeux
                liés à la légalisation du cannabis.
              </p>
            </section>

            <section id="guide" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <FaHistory className="mr-2" />
                Guide Historique du Cannabis
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Découvrez l'histoire fascinante du cannabis, de ses origines il y a plus de 12 000 ans
                jusqu'à nos jours. Notre guide chronologique retrace son utilisation à travers les civilisations,
                les découvertes scientifiques majeures et l'évolution de sa régulation.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Points clés :</strong> Origines en Asie centrale, utilisation médicinale dans l'Antiquité,
                  prohibition au XXe siècle, découverte du système endocannabinoïde, mouvement vers la légalisation.
                </p>
              </div>
              <Link 
                to="/guide" 
                className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark transition-colors"
                onClick={() => trackInteraction('click', 'lien-guide')}
              >
                Consulter le guide complet
                <FaExternalLinkAlt className="ml-1" />
              </Link>
            </section>

            <section id="etudes" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <FaChartLine className="mr-2" />
                Études Comparatives
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Notre étude comparative analyse les impacts de la légalisation du cannabis dans différents pays,
                en se basant sur des données officielles et des recherches académiques récentes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Impacts Économiques</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Création d'emplois, recettes fiscales, développement économique local.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Impacts Sociaux</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Réduction de la criminalité, justice sociale, accès aux soins.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Impacts Sanitaires</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Qualité contrôlée, réduction des risques, applications thérapeutiques.
                  </p>
                </div>
              </div>
              <Link 
                to="/etude" 
                className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark transition-colors"
                onClick={() => trackInteraction('click', 'lien-etude')}
              >
                Consulter l'étude complète
                <FaExternalLinkAlt className="ml-1" />
              </Link>
            </section>

            <section id="actualites" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <FaLeaf className="mr-2" />
                Actualités
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Restez informé des dernières actualités sur la légalisation du cannabis en France et dans le monde.
                Nous suivons l'évolution des législations, les avancées scientifiques et les débats sociétaux.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>À la une :</strong> Évolution des réglementations en Europe, nouvelles études sur les applications
                  thérapeutiques, débats parlementaires sur la légalisation.
                </p>
              </div>
            </section>

            <section id="ressources" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <FaUserShield className="mr-2" />
                Ressources
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Accédez à notre bibliothèque de ressources documentées sur la légalisation du cannabis :
                guides pratiques, rapports officiels, études scientifiques et documents de référence.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
                <li className="mb-2">Guides de bonnes pratiques pour la régulation</li>
                <li className="mb-2">Rapports parlementaires et gouvernementaux</li>
                <li className="mb-2">Études scientifiques publiées dans des revues à comité de lecture</li>
                <li className="mb-2">Témoignages et retours d'expérience de pays ayant légalisé</li>
              </ul>
            </section>

            <section id="conclusion" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Conclusion
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                La légalisation du cannabis représente un changement majeur dans les politiques publiques,
                avec des implications économiques, sociales et sanitaires significatives. Les données
                internationales montrent des impacts positifs lorsqu'elle est accompagnée d'une régulation
                stricte et d'un suivi continu.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                LegalHaze s'engage à vous fournir des informations fiables et documentées pour vous aider
                à comprendre ces enjeux complexes et à prendre des décisions éclairées.
              </p>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Perspective :</strong> Plus de 40 pays ont légalisé le cannabis à des fins médicales,
                  et plus de 10 pays ont légalisé ou dépénalisé son usage récréatif. Cette tendance
                  mondiale souligne l'importance d'une approche basée sur des preuves plutôt que sur des préjugés.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Accueil; 