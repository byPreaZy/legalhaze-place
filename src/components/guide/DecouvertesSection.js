import React from 'react';
import { FaFlask, FaExternalLinkAlt } from 'react-icons/fa';

const DecouvertesSection = ({ trackInteraction }) => {
  return (
    <section id="decouvertes" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaFlask className="mr-2" />
        Découvertes scientifiques majeures
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Malgré la prohibition, le XXe siècle a été marqué par des découvertes scientifiques 
        majeures concernant le cannabis et ses effets sur le corps humain.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1964, le professeur israélien Raphael Mechoulam et son équipe ont identifié et 
        isolé le delta-9-tétrahydrocannabinol (THC), le principal composé psychoactif du 
        cannabis. Cette découverte a ouvert la voie à une compréhension plus approfondie 
        des effets du cannabis sur le cerveau.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1988, les chercheurs ont découvert le premier récepteur cannabinoïde dans le 
        cerveau de rat, nommé CB1. En 1993, un second récepteur, CB2, a été identifié, 
        principalement présent dans le système immunitaire.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1992, l'équipe de Mechoulam a découvert l'anandamide, le premier endocannabinoïde 
        produit naturellement par le corps humain. Cette découverte a révélé l'existence d'un 
        système endocannabinoïde complet dans le corps humain, impliqué dans la régulation 
        de nombreuses fonctions physiologiques.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Ces découvertes ont fondamentalement changé notre compréhension du cannabis et de 
        ses effets sur le corps humain, ouvrant la voie à de nouvelles applications 
        thérapeutiques.
      </p>
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Source :</strong> 
          <a 
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7605027/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            onClick={() => trackInteraction('click', 'source-pmc-decouvertes')}
          >
            PMC - Histoire du cannabis et du système endocannabinoïde
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default DecouvertesSection; 