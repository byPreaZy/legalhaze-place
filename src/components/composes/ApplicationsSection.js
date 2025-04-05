import React from 'react';

const ApplicationsSection = () => {
  return (
    <section 
      id="applications" 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Applications Thérapeutiques</h2>
      <div className="prose max-w-none mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          Les composés du cannabis ont démontré un potentiel thérapeutique pour de nombreuses pathologies. 
          L'effet d'entourage suggère que l'utilisation de composés multiples pourrait être plus efficace 
          que l'utilisation de composés isolés pour de nombreuses applications médicales.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Douleur chronique',
            description: 'Le THC et le CBD sont souvent utilisés pour gérer la douleur chronique. Leur combinaison peut offrir un soulagement plus efficace que les analgésiques traditionnels. Des études ont montré que l\'ajout de terpènes comme le bêta-caryophyllène et le myrcène peut potentialiser les effets analgésiques. Cette approche pourrait réduire la dépendance aux opioïdes et leurs effets secondaires.'
          },
          {
            title: 'Troubles de l\'humeur',
            description: 'Les terpènes comme le limonène et le linalool peuvent aider à traiter la dépression et l\'anxiété. Leur interaction avec les cannabinoïdes peut améliorer l\'efficacité des traitements. Des recherches récentes suggèrent que cette combinaison pourrait être particulièrement efficace pour les troubles anxieux résistants aux traitements conventionnels.'
          },
          {
            title: 'Épilepsie',
            description: 'Le CBD est efficace dans le traitement de certaines formes d\'épilepsie. L\'ajout de terpènes peut améliorer l\'efficacité du CBD dans la réduction des crises. Des études cliniques ont montré que l\'Epidiolex, un médicament à base de CBD pur, est efficace pour traiter les syndromes de Dravet et de Lennox-Gastaut, mais des recherches suggèrent que l\'ajout de terpènes pourrait améliorer davantage son efficacité.'
          },
          {
            title: 'Inflammation',
            description: 'Les propriétés anti-inflammatoires des cannabinoïdes et des terpènes peuvent être bénéfiques pour les maladies inflammatoires. L\'effet d\'entourage peut potentialiser ces effets. Cette approche pourrait être particulièrement utile pour les maladies inflammatoires chroniques comme la polyarthrite rhumatoïde, la maladie de Crohn et la colite ulcéreuse.'
          },
          {
            title: 'Troubles du sommeil',
            description: 'La combinaison de CBN, THC et terpènes sédatifs comme le linalool et le myrcène peut améliorer la qualité du sommeil. Des études ont montré que cette approche pourrait être plus efficace que les somnifères traditionnels, avec moins d\'effets secondaires et un risque réduit de dépendance.'
          },
          {
            title: 'Troubles neurologiques',
            description: 'Les cannabinoïdes et terpènes neuroprotecteurs comme le CBD, le CBG et le pinène peuvent aider à protéger les cellules nerveuses et à réduire l\'inflammation cérébrale. Cette approche pourrait être bénéfique pour des conditions comme la maladie de Parkinson, la sclérose en plaques et les lésions cérébrales traumatiques.'
          }
        ].map((application, index) => (
          <div key={index} className="bg-brand-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-secondary">{application.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{application.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationsSection; 