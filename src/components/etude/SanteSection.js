import React from 'react';
import { FaUserShield, FaExternalLinkAlt } from 'react-icons/fa';

const SanteSection = ({ trackInteraction }) => {
  return (
    <section id="sante" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <FaUserShield className="text-2xl text-brand-primary" />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Impacts Sanitaires
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Qualité et Sécurité
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Contrôle strict des pesticides et contaminants</li>
            <li>• Standardisation des dosages</li>
            <li>• Meilleure traçabilité des produits</li>
            <li>• Réduction des risques liés aux produits illégaux</li>
          </ul>
          <div className="mt-4 space-y-2">
            <a 
              href="https://www.who.int/fr/news-room/fact-sheets/detail/cannabis-(marijuana)" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-who')}
            >
              Source: Organisation Mondiale de la Santé
              <FaExternalLinkAlt className="ml-2" />
            </a>
            <a 
              href="https://www.canada.ca/fr/sante-canada/services/drogues-medicaments/cannabis/lois-reglements/reglementation-produits-cannabis.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-canada')}
            >
              Réglementation canadienne sur la qualité
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Accès aux Soins
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Meilleur suivi médical</li>
            <li>• Accès facilité aux traitements</li>
            <li>• Recherche médicale accélérée</li>
            <li>• Éducation et prévention améliorées</li>
          </ul>
          <div className="mt-4 space-y-2">
            <a 
              href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(19)31741-3/fulltext" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-lancet')}
            >
              Source: The Lancet - Étude sur l'accès aux soins
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
              <li>• Accès limité aux traitements médicaux</li>
              <li>• Risques liés aux produits non contrôlés</li>
              <li>• Difficultés pour la recherche médicale</li>
            </ul>
            <a 
              href="https://www.ofdt.fr/publications/collections/rapports/rapports-d-etudes/le-cannabis-medical-en-france/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-ofdt-medical')}
            >
              Source: OFDT - Rapport sur le cannabis médical
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Potentiel de légalisation</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Accès élargi aux traitements</li>
              <li>• Meilleur contrôle qualité</li>
              <li>• Développement de la recherche</li>
            </ul>
            <a 
              href="https://www.inserm.fr/information-en-sante/dossiers-information/cannabis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => trackInteraction('click', 'source-inserm')}
            >
              Source: INSERM - Dossier sur le cannabis
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SanteSection; 