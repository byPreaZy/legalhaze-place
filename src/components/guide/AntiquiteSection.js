import React from 'react';
import { FaHistory, FaExternalLinkAlt } from 'react-icons/fa';

const AntiquiteSection = ({ trackInteraction }) => {
  return (
    <section id="antiquite" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaHistory className="mr-2" />
        L'Antiquité
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Dans l'Antiquité, le cannabis était largement utilisé à des fins médicinales et 
        rituelles. En Chine, le premier traité de pharmacopée, le <em>Shennong Bencao Jing</em> 
        (vers 100 avant notre ère), mentionne le cannabis pour traiter divers maux.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En Égypte ancienne, des traces de cannabis ont été retrouvées dans des momies datant 
        de 950 avant notre ère. Le papyrus Ebers (vers 1550 avant notre ère) mentionne 
        l'utilisation du cannabis pour traiter les inflammations et les douleurs.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En Grèce, l'historien Hérodote (Ve siècle avant notre ère) décrit l'utilisation 
        rituelle du cannabis par les Scythes. Plus tard, dans l'Empire romain, Pline l'Ancien, 
        Dioscoride et Galien mentionnent les propriétés médicinales du cannabis.
      </p>
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Source :</strong> 
          <a 
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7605027/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            onClick={() => trackInteraction('click', 'source-pmc-antiquite')}
          >
            PMC - Histoire du cannabis et du système endocannabinoïde
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default AntiquiteSection; 