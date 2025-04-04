import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ConclusionSection = ({ trackInteraction }) => {
  return (
    <section id="conclusion" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Conclusion
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        L'histoire du cannabis est aussi ancienne que celle de l'humanité. Depuis ses 
        premières utilisations il y a plus de 12 000 ans jusqu'à nos jours, cette plante 
        a joué un rôle important dans le développement des civilisations humaines.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Les découvertes scientifiques du XXe siècle ont révélé l'existence d'un système 
        endocannabinoïde dans le corps humain, ouvrant la voie à de nouvelles applications 
        thérapeutiques. La prohibition du cannabis au XXe siècle a été motivée par des 
        préjugés raciaux, des intérêts économiques et de la désinformation, plutôt que 
        par des preuves scientifiques.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Aujourd'hui, le mouvement vers la légalisation du cannabis s'accélère à travers 
        le monde, motivé par les découvertes scientifiques, l'échec de la guerre contre 
        la drogue, les arguments économiques et l'évolution de l'opinion publique.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        L'avenir du cannabis semble prometteur, avec un potentiel croissant pour des 
        applications médicales, industrielles et récréatives, dans un cadre réglementaire 
        approprié.
      </p>
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Source :</strong> 
          <a 
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7605027/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            onClick={() => trackInteraction('click', 'source-pmc-conclusion')}
          >
            PMC - Histoire du cannabis et du système endocannabinoïde
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default ConclusionSection; 