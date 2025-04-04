import React from 'react';
import { FaBalanceScale } from 'react-icons/fa';

const ProhibitionSection = () => {
  return (
    <section id="prohibition" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <FaBalanceScale className="mr-2" />
        La Prohibition
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        La prohibition du cannabis au XXe siècle a été motivée par plusieurs facteurs :
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
        <li className="mb-2">
          <strong>Préjugés raciaux :</strong> Aux États-Unis, la campagne contre le cannabis 
          était étroitement liée à l'immigration mexicaine et aux communautés afro-américaines. 
          Harry Anslinger, le premier commissaire du Federal Bureau of Narcotics, a utilisé 
          des stéréotypes raciaux pour justifier la prohibition.
        </li>
        <li className="mb-2">
          <strong>Intérêts économiques :</strong> L'industrie du papier, du textile et des 
          produits pharmaceutiques voyait le cannabis comme un concurrent potentiel et a 
          soutenu sa prohibition.
        </li>
        <li className="mb-2">
          <strong>Désinformation :</strong> Des campagnes de désinformation ont présenté le 
          cannabis comme une drogue dangereuse causant la folie, la violence et la dégradation 
          morale.
        </li>
        <li className="mb-2">
          <strong>Politique internationale :</strong> Les conventions internationales sur les 
          drogues, notamment la Convention unique sur les stupéfiants de 1961, ont classé le 
          cannabis comme une drogue dangereuse sans valeur médicale.
        </li>
      </ul>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Les conséquences de la prohibition ont été dévastatrices : criminalisation de millions 
        de personnes, création de marchés noirs, financement du crime organisé, et entrave à 
        la recherche scientifique sur les propriétés médicinales du cannabis.
      </p>
      <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
        <p className="text-sm text-red-800 dark:text-red-200">
          <strong>Impact de la prohibition :</strong> Aux États-Unis, entre 2001 et 2010, 
          plus de 8 millions d'arrestations liées au cannabis ont été effectuées, avec un 
          impact disproportionné sur les communautés de couleur.
        </p>
      </div>
    </section>
  );
};

export default ProhibitionSection; 