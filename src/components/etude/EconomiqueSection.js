import React from 'react';
import { FaChartLine, FaExternalLinkAlt } from 'react-icons/fa';

const EconomiqueSection = ({ trackInteraction }) => {
  return (
    <section id="economique" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <FaChartLine className="text-2xl text-brand-primary" />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Impacts Économiques
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Canada
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Contribution au PIB : 8,26 milliards CAD (2021)</li>
            <li>• Création d'emplois : 151 000 postes</li>
            <li>• Recettes fiscales : 1,2 milliard CAD</li>
            <li>• Croissance du marché : +25% par an</li>
          </ul>
          <div className="mt-4 space-y-2">
            <a 
              href="https://www.statcan.gc.ca/fr/sujet-debut/cannabis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-statcan')}
            >
              Source: Statistique Canada
              <FaExternalLinkAlt className="ml-2" />
            </a>
            <a 
              href="https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2021079-fra.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-statcan-detail')}
            >
              Rapport détaillé sur l'industrie du cannabis
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            États-Unis
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Marché total : 13,2 milliards USD (2021)</li>
            <li>• Emplois : 428 059 postes</li>
            <li>• Croissance : +30% par an</li>
            <li>• Recettes fiscales : 2,7 milliards USD</li>
          </ul>
          <div className="mt-4 space-y-2">
            <a 
              href="https://www.bloomberg.com/news/articles/2022-02-08/cannabis-industry-employees-reached-428-059-in-2021" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-bloomberg')}
            >
              Source: Bloomberg
              <FaExternalLinkAlt className="ml-2" />
            </a>
            <a 
              href="https://www.statista.com/statistics/259858/recreational-cannabis-market-size-in-the-us/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-statista')}
            >
              Statistiques du marché du cannabis aux États-Unis
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Comparaison avec la France
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Situation actuelle</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Marché illégal estimé : 1,2 milliard EUR</li>
              <li>• Coûts de répression : 568 millions EUR/an</li>
              <li>• Perte de recettes fiscales potentielles</li>
            </ul>
            <a 
              href="https://www.ofdt.fr/publications/collections/rapports/rapports-d-etudes/le-cout-social-des-drogues-en-france/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-ofdt')}
            >
              Source: Observatoire Français des Drogues et des Toxicomanies
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Potentiel de légalisation</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Création d'emplois estimée : 60 000-100 000</li>
              <li>• Recettes fiscales potentielles : 1,8-2,8 milliards EUR/an</li>
              <li>• Économies sur la répression : 568 millions EUR/an</li>
            </ul>
            <a 
              href="https://www.lemonde.fr/idees/article/2021/03/15/legalisation-du-cannabis-les-benefices-economiques-seront-considerables_6073443_3232.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-lemonde')}
            >
              Source: Le Monde - Analyse économique
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomiqueSection; 