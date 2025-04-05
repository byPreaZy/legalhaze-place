import React from 'react';

const CompositionSection = () => {
  return (
    <section 
      id="composition" 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Composition du Cannabis</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 dark:text-gray-300">
          Le cannabis est composé de divers cannabinoïdes, terpènes, flavonoïdes et autres composés.
          Les cannabinoïdes les plus connus sont le tétrahydrocannabinol (THC) et le cannabidiol (CBD).
          Les terpènes, responsables des arômes et saveurs distinctifs du cannabis, jouent également un
          rôle crucial dans ses effets thérapeutiques.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          La composition exacte du cannabis varie considérablement selon la variété, les conditions de culture, 
          et les méthodes de récolte. Les plantes de cannabis produisent plus de 100 cannabinoïdes différents, 
          dont la plupart sont présents à des concentrations très faibles. Les flavonoïdes, qui donnent au cannabis 
          ses pigments et contribuent à ses propriétés antioxydantes, sont également présents en abondance.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          La concentration relative des différents composés peut avoir un impact significatif sur les effets 
          thérapeutiques et récréatifs du cannabis. Par exemple, une variété à forte teneur en THC et faible 
          en CBD produira des effets psychoactifs plus intenses, tandis qu'une variété équilibrée en THC et CBD 
          pourrait offrir des effets plus modérés avec un potentiel thérapeutique accru.
        </p>
      </div>
    </section>
  );
};

export default CompositionSection; 