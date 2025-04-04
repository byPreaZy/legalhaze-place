import React from 'react';
import { FaHistory, FaExternalLinkAlt } from 'react-icons/fa';

const XIXSiecleSection = ({ trackInteraction }) => {
  return (
    <section id="xix-siecle" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaHistory className="mr-2" />
        Le XIXe siècle
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Le XIXe siècle marque un tournant dans l'histoire du cannabis avec l'introduction 
        de son usage médical en Europe occidentale. Des orientalistes comme Silvestre de Sacy 
        et des médecins occidentaux en contact avec les cultures musulmanes et indiennes, 
        comme O'Shaughnessy et Moreau de Tours, ont introduit son recours à des fins médicales.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1839, William Brooke O'Shaughnessy, médecin irlandais travaillant en Inde, 
        publia un article sur les effets thérapeutiques du cannabis dans le traitement 
        des convulsions. Ses travaux ont influencé l'utilisation médicale du cannabis en 
        Europe et en Amérique.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1843, le médecin français Jacques-Joseph Moreau de Tours publia "Du hachisch et 
        de l'aliénation mentale", dans lequel il décrivait ses expériences avec le cannabis 
        et ses effets sur la conscience.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        À la fin du XIXe siècle, le cannabis était disponible dans les pharmacies européennes 
        et américaines sous forme de teintures et d'extraits. Il était prescrit pour traiter 
        divers maux, notamment les migraines, l'asthme, les douleurs et les troubles du sommeil.
      </p>
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Source :</strong> 
          <a 
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7605027/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            onClick={() => trackInteraction('click', 'source-pmc-xix')}
          >
            PMC - Histoire du cannabis et du système endocannabinoïde
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default XIXSiecleSection; 