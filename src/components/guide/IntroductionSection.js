import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const IntroductionSection = ({ trackInteraction }) => {
  return (
    <section id="introduction" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Introduction
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Le cannabis est l'une des plantes les plus anciennement cultivées par l'humanité. 
        Son histoire s'étend sur plusieurs millénaires et traverse toutes les civilisations. 
        Ce guide retrace son parcours, de ses origines à nos jours, en passant par les découvertes 
        scientifiques majeures et l'évolution de sa régulation.
      </p>
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          Sources principales : 
          <a 
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7605027/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            onClick={() => trackInteraction('click', 'source-pmc')}
          >
            PMC - Histoire du cannabis et du système endocannabinoïde
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection; 