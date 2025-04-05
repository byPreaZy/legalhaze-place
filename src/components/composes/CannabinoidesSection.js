import React from 'react';

const CannabinoidesSection = () => {
  return (
    <section 
      id="cannabinoides" 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Cannabinoïdes</h2>
      <div className="prose max-w-none mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          Les cannabinoïdes sont des composés chimiques uniques au cannabis qui interagissent avec le système 
          endocannabinoïde du corps humain. Ce système, découvert dans les années 1990, joue un rôle crucial 
          dans la régulation de nombreux processus physiologiques, notamment l'humeur, l'appétit, la douleur, 
          la mémoire et la réponse immunitaire.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-brand-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-secondary">THC</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Principal composé psychoactif du cannabis, connu pour ses effets euphorisants et analgésiques. 
              Le THC agit principalement sur les récepteurs CB1 dans le cerveau, influençant la perception, 
              l'humeur et la cognition. Il est souvent utilisé pour ses propriétés analgésiques et pour 
              stimuler l'appétit.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Des recherches récentes ont montré que le THC peut également avoir des propriétés anti-inflammatoires, 
              neuroprotectrices et anti-tumorales. Il existe sous deux formes principales : le THC acide (THCA) 
              dans la plante fraîche, qui se transforme en THC actif lors de la décarboxylation (chauffage).
            </p>
          </div>
          <div className="bg-brand-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-secondary">CBD</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Non psychoactif, le CBD est reconnu pour ses propriétés anti-inflammatoires, anxiolytiques 
              et anticonvulsivantes. Il interagit avec divers récepteurs, y compris les récepteurs de 
              sérotonine et les récepteurs vanilloïdes. Le CBD est souvent utilisé pour traiter l'épilepsie, 
              l'anxiété et les douleurs chroniques.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Contrairement au THC, le CBD n'a pas d'affinité directe pour les récepteurs CB1 et CB2, mais 
              module leur activité. Il peut atténuer les effets psychoactifs du THC et possède des propriétés 
              antipsychotiques. Des études récentes suggèrent que le CBD pourrait être efficace dans le 
              traitement de la schizophrénie, de la dépendance aux opioïdes et de certaines maladies 
              auto-immunes.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-brand-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-secondary">CBG</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Connu comme le précurseur d'autres cannabinoïdes comme le THC et le CBD. Le CBG a montré 
              des effets neuroprotecteurs et peut aider à réguler l'appétit et la douleur. Il est étudié 
              pour ses potentiels effets anti-inflammatoires et antibactériens.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Le CBG est présent en faibles concentrations dans la plupart des variétés de cannabis, mais 
              certaines souches ont été sélectionnées pour produire des niveaux plus élevés. Des études 
              préliminaires suggèrent que le CBG pourrait être efficace contre le glaucome, la maladie 
              inflammatoire de l'intestin et certains cancers, notamment le cancer colorectal.
            </p>
          </div>
          <div className="bg-brand-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-secondary">CBN</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Souvent associé à des propriétés sédatives, le CBN peut aider à améliorer le sommeil et a 
              des effets anti-inflammatoires. Il est produit par la dégradation du THC et peut être 
              bénéfique pour les troubles du sommeil.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Le CBN est généralement présent en faibles concentrations dans le cannabis frais, mais sa 
              teneur augmente avec l'âge et l'exposition à l'air. Des recherches récentes ont montré que 
              le CBN pourrait avoir des propriétés antibactériennes puissantes, notamment contre les 
              souches de Staphylococcus aureus résistantes à la méthicilline (SARM).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CannabinoidesSection; 