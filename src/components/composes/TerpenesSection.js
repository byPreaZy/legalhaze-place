import React from 'react';

const TerpenesSection = () => {
  return (
    <section 
      id="terpenes" 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Terpènes</h2>
      <div className="prose max-w-none mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          Les terpènes sont des composés aromatiques présents dans de nombreuses plantes, y compris le cannabis. 
          Ils sont responsables des odeurs distinctives du cannabis et contribuent à ses effets thérapeutiques. 
          Plus de 200 terpènes différents ont été identifiés dans le cannabis, chacun avec ses propres propriétés 
          et effets potentiels.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Contrairement aux cannabinoïdes, les terpènes ne sont pas spécifiques au cannabis et sont présents 
          dans de nombreuses plantes et fruits. Ils jouent un rôle crucial dans l'effet d'entourage, modulant 
          et potentialisant les effets des cannabinoïdes. Les terpènes peuvent également avoir des effets 
          thérapeutiques directs, indépendamment des cannabinoïdes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: 'Limonène',
            description: 'Connu pour ses propriétés anti-dépressives et anti-anxiété. Il est souvent trouvé dans les agrumes et est utilisé pour améliorer l\'humeur. Le limonène peut également avoir des effets anticancéreux et antibactériens. Des études ont montré qu\'il peut aider à traiter le reflux gastro-œsophagien et les brûlures d\'estomac.'
          },
          {
            name: 'Myrcène',
            description: 'A des effets sédatifs et relaxants. Il est également présent dans le houblon et peut potentialiser les effets du THC en augmentant la perméabilité de la barrière hémato-encéphalique. Le myrcène possède également des propriétés anti-inflammatoires, analgésiques et antibactériennes. Des recherches suggèrent qu\'il pourrait être efficace contre l\'inflammation chronique et la douleur neuropathique.'
          },
          {
            name: 'Pinène',
            description: 'Améliore la mémoire et a des propriétés anti-inflammatoires. Il est également présent dans les aiguilles de pin et le romarin. Le pinène peut également agir comme un bronchodilatateur, facilitant la respiration. Des études ont montré qu\'il peut aider à contrer certains effets négatifs du THC sur la mémoire à court terme et possède des propriétés antibactériennes.'
          },
          {
            name: 'Linalool',
            description: 'Utilisé pour ses effets calmants et sédatifs. Il est également présent dans la lavande et est souvent utilisé en aromathérapie. Le linalool peut aider à réduire l\'anxiété et possède des propriétés anticonvulsivantes. Des recherches suggèrent qu\'il pourrait être efficace dans le traitement de l\'épilepsie et des troubles du sommeil.'
          },
          {
            name: 'Bêta-Caryophyllène',
            description: 'Connu pour ses propriétés anti-inflammatoires et analgésiques. Il peut interagir avec les récepteurs CB2, contribuant à l\'effet d\'entourage. Le bêta-caryophyllène est le seul terpène connu pour activer directement les récepteurs cannabinoïdes. Des études ont montré qu\'il pourrait être efficace contre l\'arthrite, la douleur chronique et certaines maladies inflammatoires de l\'intestin.'
          },
          {
            name: 'Terpinolène',
            description: 'A des propriétés sédatives et est souvent utilisé pour ses effets calmants. Il peut également avoir des effets antioxydants et anticancéreux. Des recherches récentes suggèrent que le terpinolène pourrait être efficace contre certains types de cancer, notamment le cancer du sein.'
          }
        ].map((terpene, index) => (
          <div key={index} className="bg-brand-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-secondary">{terpene.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{terpene.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TerpenesSection; 