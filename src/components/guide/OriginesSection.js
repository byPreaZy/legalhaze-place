import React from 'react';
import { FaHistory } from 'react-icons/fa';

const OriginesSection = () => {
  return (
    <section id="origines" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaHistory className="mr-2" />
        Origines et premières utilisations
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Les traces les plus anciennes du cannabis remontent à environ 12 000 ans, près des 
        montagnes de l'Altaï en Asie centrale. Les graines de cannabis ont suivi les migrations 
        des peuples nomades à travers l'Eurasie. Les premières utilisations documentées concernent 
        la fabrication de fibres pour les vêtements, les cordages et le papier.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        En Chine, des vestiges archéologiques datant de 8 000 ans avant notre ère montrent 
        l'utilisation du cannabis pour la fabrication de textiles et de poteries. Des traces 
        de cannabis ont également été retrouvées dans des tombes chinoises datant de 2 500 ans 
        avant notre ère, suggérant des utilisations rituelles ou médicinales.
      </p>
      <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>Découverte majeure :</strong> En 2008, des chercheurs ont identifié des 
          restes de cannabis dans une tombe chinoise vieille de 2 700 ans, confirmant son 
          utilisation rituelle dans l'Antiquité.
        </p>
      </div>
    </section>
  );
};

export default OriginesSection; 