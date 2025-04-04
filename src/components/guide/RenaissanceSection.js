import React from 'react';
import { FaHistory } from 'react-icons/fa';

const RenaissanceSection = () => {
  return (
    <section id="renaissance" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaHistory className="mr-2" />
        La Renaissance et l'époque moderne
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        À la Renaissance, le cannabis était largement utilisé en Europe pour la production 
        de textiles et de papier. Les premiers livres imprimés par Gutenberg étaient en partie 
        fabriqués avec du papier de chanvre.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En 1533, le roi Henri VIII d'Angleterre promulgua une loi obligeant les fermiers à 
        cultiver du chanvre pour la marine britannique. Cette loi fut renouvelée par la reine 
        Élisabeth I en 1563.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Les premiers colons américains cultivèrent du chanvre, et plusieurs présidents 
        américains, dont George Washington et Thomas Jefferson, en cultivèrent sur leurs 
        plantations.
      </p>
      <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>Curiosité historique :</strong> La Déclaration d'indépendance des États-Unis 
          fut rédigée sur du papier de chanvre, et les premières bibles imprimées en Amérique 
          étaient également en papier de chanvre.
        </p>
      </div>
    </section>
  );
};

export default RenaissanceSection; 