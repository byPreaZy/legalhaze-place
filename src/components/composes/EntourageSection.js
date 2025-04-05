import React from 'react';

const EntourageSection = () => {
  return (
    <section 
      id="entourage" 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Effet d'Entourage</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          L'effet d'entourage est une théorie selon laquelle les composés du cannabis, y compris les
          cannabinoïdes et les terpènes, agissent en synergie pour produire des effets thérapeutiques
          supérieurs à ceux de chaque composé pris isolément.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Cette théorie a été popularisée par le Dr Ethan Russo, qui a suggéré que l'utilisation de 
          composés isolés du cannabis pourrait être moins efficace que l'utilisation de l'extrait complet 
          de la plante. Des recherches récentes ont fourni des preuves scientifiques de cet effet, 
          montrant comment les différents composés interagissent pour moduler et potentialiser leurs 
          effets respectifs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-secondary">Exemples d'Effet d'Entourage</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>THC et CBD : Le CBD peut atténuer les effets psychoactifs du THC tout en potentialisant ses effets analgésiques</li>
              <li>THC et Myrcène : Potentialisation des effets du THC et augmentation de sa biodisponibilité</li>
              <li>CBD et Limonène : Amélioration des effets anxiolytiques et antidépresseurs</li>
              <li>THC et Pinène : Le pinène peut contrer certains effets négatifs du THC sur la mémoire</li>
              <li>CBD et Bêta-Caryophyllène : Synergie anti-inflammatoire et analgésique</li>
            </ul>
          </div>
          <div className="bg-brand-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-secondary">Mécanismes</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Interaction avec les récepteurs cannabinoïdes et autres récepteurs cellulaires</li>
              <li>Modulation des voies de signalisation intracellulaires</li>
              <li>Influence sur la biodisponibilité et la pharmacocinétique des composés</li>
              <li>Effets synergiques sur les systèmes enzymatiques</li>
              <li>Modulation de l'expression génique et de la production de protéines</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 bg-brand-primary/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-brand-secondary">Preuves Scientifiques</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Des études récentes ont démontré l'existence de l'effet d'entourage. Par exemple, une étude 
            publiée dans Nature en 2018 a montré que les terpènes peuvent moduler l'activité des cannabinoïdes 
            en interagissant avec les récepteurs cannabinoïdes. Une autre étude a révélé que l'extrait complet 
            de cannabis était plus efficace que le THC isolé pour réduire la douleur et l'inflammation.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Ces découvertes ont des implications importantes pour l'utilisation thérapeutique du cannabis, 
            suggérant que les produits à spectre complet ou à large spectre pourraient être plus efficaces 
            que les isolats de cannabinoïdes pour de nombreuses applications médicales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntourageSection; 