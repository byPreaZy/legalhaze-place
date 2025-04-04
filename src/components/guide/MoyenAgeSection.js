import React from 'react';
import { FaHistory } from 'react-icons/fa';

const MoyenAgeSection = () => {
  return (
    <section id="moyen-age" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaHistory className="mr-2" />
        Le Moyen Âge
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Au Moyen Âge, le cannabis continuait d'être utilisé principalement pour ses fibres 
        et ses propriétés médicinales. Dans le monde arabe, des médecins comme Avicenne 
        (980-1037) mentionnent le cannabis dans leurs traités médicaux.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En Europe, le cannabis était cultivé pour la production de chanvre, utilisé dans 
        la fabrication de textiles, de cordages pour la marine et de papier. Les Vikings 
        utilisaient le chanvre pour leurs voiles et leurs cordages.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En Inde, le cannabis était intégré dans la médecine ayurvédique et utilisé dans 
        des contextes rituels, notamment sous forme de bhang (boisson) et de charas (résine).
      </p>
    </section>
  );
};

export default MoyenAgeSection; 