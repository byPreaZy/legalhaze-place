import React from 'react';
import { FaHistory } from 'react-icons/fa';

const XXSiecleSection = () => {
  return (
    <section id="xx-siecle" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaHistory className="mr-2" />
        Le XXe siècle
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Le début du XXe siècle a vu l'émergence d'une opposition croissante au cannabis, 
        notamment aux États-Unis. Cette opposition était motivée par des préjugés raciaux 
        et des intérêts économiques concurrents.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1937, le Congrès américain adopta le Marijuana Tax Act, qui imposait une taxe 
        élevée sur la vente de cannabis, effectivement le rendant illégal. Cette loi fut 
        largement influencée par Harry Anslinger, le premier commissaire du Federal Bureau 
        of Narcotics, qui mena une campagne de désinformation contre le cannabis.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1961, les Nations Unies adoptèrent la Convention unique sur les stupéfiants, 
        qui classait le cannabis comme une drogue dangereuse sans valeur médicale. Cette 
        convention a influencé les politiques de nombreux pays à travers le monde.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Malgré cette opposition croissante, les années 1960 et 1970 ont vu l'émergence 
        d'un mouvement de contre-culture qui a popularisé l'usage récréatif du cannabis 
        et remis en question sa prohibition.
      </p>
    </section>
  );
};

export default XXSiecleSection; 