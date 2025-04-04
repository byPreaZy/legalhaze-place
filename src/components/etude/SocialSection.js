import React from 'react';
import { FaHandshake, FaExternalLinkAlt } from 'react-icons/fa';

const SocialSection = ({ trackInteraction }) => {
  return (
    <section id="social" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <FaHandshake className="text-2xl text-brand-primary" />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Impacts Sociaux
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Réduction de la Criminalité
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• -15% des arrestations liées au cannabis</li>
            <li>• -10% des infractions violentes</li>
            <li>• Économies de 7 milliards USD en coûts d'application de la loi</li>
            <li>• Réduction du trafic illégal</li>
          </ul>
          <div className="mt-4 space-y-2">
            <a 
              href="https://www.nature.com/articles/s41598-021-01045-4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-nature')}
            >
              Source: Journal Nature - Étude sur la criminalité
              <FaExternalLinkAlt className="ml-2" />
            </a>
            <a 
              href="https://www.rand.org/pubs/research_reports/RR3130.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-rand')}
            >
              Source: RAND Corporation - Impact sur la criminalité
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Impact sur la Jeunesse
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Meilleure éducation sur les risques</li>
            <li>• Accès plus difficile aux mineurs</li>
            <li>• Réduction de la consommation chez les jeunes</li>
            <li>• Programmes de prévention renforcés</li>
          </ul>
          <div className="mt-4 space-y-2">
            <a 
              href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6932a2.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-cdc')}
            >
              Source: CDC - Étude sur la jeunesse
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
              <li>• 45 000 interpellations pour usage en 2020</li>
              <li>• Coûts judiciaires importants</li>
              <li>• Difficultés d'accès à la prévention</li>
            </ul>
            <a 
              href="https://www.interieur.gouv.fr/actualites/communiques/statistiques-2020-de-laction-des-services-de-police-et-de-gendarmerie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-interieur')}
            >
              Source: Ministère de l'Intérieur - Statistiques 2020
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Potentiel de légalisation</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Réduction des interpellations</li>
              <li>• Économies sur les coûts judiciaires</li>
              <li>• Meilleure prévention</li>
            </ul>
            <a 
              href="https://www.lemonde.fr/societe/article/2021/03/15/legalisation-du-cannabis-les-benefices-economiques-seront-considerables_6073443_3224.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-lemonde-social')}
            >
              Source: Le Monde - Analyse sociale
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection; 