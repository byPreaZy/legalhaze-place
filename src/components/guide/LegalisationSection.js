import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

const LegalisationSection = () => {
  return (
    <section id="legalisation" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaGlobeAmericas className="mr-2" />
        Vers la légalisation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        À partir des années 1990, un mouvement croissant en faveur de la légalisation du 
        cannabis a émergé, motivé par plusieurs facteurs :
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
        <li className="mb-2">
          <strong>Découvertes scientifiques :</strong> Les avancées dans la compréhension 
          du système endocannabinoïde ont révélé le potentiel thérapeutique du cannabis.
        </li>
        <li className="mb-2">
          <strong>Échec de la guerre contre la drogue :</strong> La prohibition n'a pas 
          réussi à éliminer l'usage du cannabis et a créé de nombreux problèmes sociaux 
          et économiques.
        </li>
        <li className="mb-2">
          <strong>Arguments économiques :</strong> La légalisation offre des opportunités 
          économiques importantes, notamment en termes de recettes fiscales et de création 
          d'emplois.
        </li>
        <li className="mb-2">
          <strong>Changement d'attitude :</strong> L'opinion publique a évolué, avec une 
          acceptation croissante du cannabis, notamment pour ses usages médicaux.
        </li>
      </ul>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1996, la Californie est devenue le premier État américain à légaliser le cannabis 
        à des fins médicales. Depuis lors, de nombreux États américains et pays à travers le 
        monde ont suivi cette voie.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 2012, le Colorado et l'État de Washington sont devenus les premiers à légaliser 
        le cannabis à des fins récréatives. En 2018, le Canada est devenu le premier pays 
        du G7 à légaliser le cannabis à des fins récréatives au niveau national.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En Europe, plusieurs pays ont dépénalisé ou légalisé le cannabis à des fins médicales, 
        et certains, comme les Pays-Bas, ont mis en place des systèmes de tolérance pour 
        l'usage récréatif.
      </p>
      <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
        <p className="text-sm text-green-800 dark:text-green-200">
          <strong>État actuel :</strong> En 2023, plus de 40 pays ont légalisé le cannabis 
          à des fins médicales, et plus de 10 pays ont légalisé ou dépénalisé son usage 
          récréatif.
        </p>
      </div>
    </section>
  );
};

export default LegalisationSection; 