import React from 'react';

const AnnexeA = () => {
  // Données complètes des cannabinoïdes et terpènes
  const cannabinoidesData = [
    { 
      nom: 'THC (Δ9-tétrahydrocannabinol)', 
      formule: 'C21H30O2', 
      concentration: '0.1-30%', 
      effets: 'Psychoactif, euphorisant, analgésique, antiémétique, stimulant de l\'appétit, relaxant musculaire', 
      applications: 'Douleur chronique, nausées, perte d\'appétit, spasmes musculaires, glaucome, insomnie', 
      sources: 'Cannabis sativa, Cannabis indica, Cannabis ruderalis' 
    },
    { 
      nom: 'CBD (Cannabidiol)', 
      formule: 'C21H30O2', 
      concentration: '0.1-20%', 
      effets: 'Non psychoactif, anti-inflammatoire, anxiolytique, anticonvulsivant, antipsychotique, antioxydant', 
      applications: 'Épilepsie, anxiété, dépression, inflammation, douleur chronique, troubles du sommeil, maladies auto-immunes', 
      sources: 'Cannabis sativa, Cannabis indica, Cannabis ruderalis' 
    },
    { 
      nom: 'CBG (Cannabigérol)', 
      formule: 'C21H32O2', 
      concentration: '0.1-3%', 
      effets: 'Non psychoactif, antibactérien, antifongique, anti-inflammatoire, neuroprotecteur, stimulant de l\'appétit', 
      applications: 'Maladies inflammatoires de l\'intestin, glaucome, infections bactériennes, neurodégénérescence', 
      sources: 'Cannabis sativa, Cannabis indica, Cannabis ruderalis' 
    },
    { 
      nom: 'CBN (Cannabinol)', 
      formule: 'C21H26O2', 
      concentration: '0.1-3%', 
      effets: 'Légèrement psychoactif, sédatif, anti-inflammatoire, antibactérien, stimulant de l\'appétit', 
      applications: 'Insomnie, douleur chronique, inflammation, infections bactériennes', 
      sources: 'Produit de dégradation du THC, présent dans le cannabis vieilli' 
    },
    { 
      nom: 'THCV (Tétrahydrocannabivarine)', 
      formule: 'C19H26O2', 
      concentration: '0.1-5%', 
      effets: 'Psychoactif à faible dose, coupe-faim à forte dose, anticonvulsivant, régulateur de la glycémie', 
      applications: 'Diabète de type 2, obésité, épilepsie, maladie de Parkinson', 
      sources: 'Cannabis sativa (souches africaines), certaines variétés de Cannabis indica' 
    },
    { 
      nom: 'CBC (Cannabichromène)', 
      formule: 'C21H30O2', 
      concentration: '0.1-3%', 
      effets: 'Non psychoactif, anti-inflammatoire, antibactérien, antifongique, antidépresseur, stimulant de la neurogenèse', 
      applications: 'Dépression, inflammation, infections, douleur chronique', 
      sources: 'Cannabis sativa, Cannabis indica, Cannabis ruderalis' 
    },
    { 
      nom: 'CBL (Cannabicyclol)', 
      formule: 'C21H30O2', 
      concentration: '0.1-1%', 
      effets: 'Non psychoactif, anti-inflammatoire', 
      applications: 'Inflammation', 
      sources: 'Produit de dégradation du CBC, présent dans le cannabis vieilli' 
    },
    { 
      nom: 'CBV (Cannabivarine)', 
      formule: 'C19H26O2', 
      concentration: '0.1-1%', 
      effets: 'Non psychoactif, anti-inflammatoire', 
      applications: 'Inflammation', 
      sources: 'Cannabis sativa (souches africaines)' 
    },
    { 
      nom: 'CBE (Cannabielsoin)', 
      formule: 'C21H30O2', 
      concentration: '0.1-1%', 
      effets: 'Non psychoactif, anti-inflammatoire', 
      applications: 'Inflammation', 
      sources: 'Produit de dégradation du CBD, présent dans le cannabis vieilli' 
    },
    { 
      nom: 'CBT (Cannabitriol)', 
      formule: 'C21H30O3', 
      concentration: '0.1-1%', 
      effets: 'Non psychoactif, anti-inflammatoire', 
      applications: 'Inflammation', 
      sources: 'Cannabis sativa, Cannabis indica' 
    },
    { 
      nom: 'CBDA (Cannabidiolique acide)', 
      formule: 'C22H30O4', 
      concentration: '0.1-5%', 
      effets: 'Non psychoactif, anti-inflammatoire, antibactérien, antioxydant', 
      applications: 'Inflammation, infections, stress oxydatif', 
      sources: 'Forme acide du CBD, présente dans le cannabis frais' 
    },
    { 
      nom: 'THCA (Tétrahydrocannabinolique acide)', 
      formule: 'C22H30O4', 
      concentration: '0.1-30%', 
      effets: 'Non psychoactif, anti-inflammatoire, antiémétique, neuroprotecteur', 
      applications: 'Inflammation, nausées, maladies neurodégénératives', 
      sources: 'Forme acide du THC, présente dans le cannabis frais' 
    },
    { 
      nom: 'CBGA (Cannabigérolique acide)', 
      formule: 'C22H32O4', 
      concentration: '0.1-5%', 
      effets: 'Non psychoactif, anti-inflammatoire, antibactérien, antioxydant', 
      applications: 'Inflammation, infections, stress oxydatif', 
      sources: 'Forme acide du CBG, présente dans le cannabis frais' 
    },
    { 
      nom: 'CBCA (Cannabichroménique acide)', 
      formule: 'C22H30O4', 
      concentration: '0.1-3%', 
      effets: 'Non psychoactif, anti-inflammatoire, antibactérien', 
      applications: 'Inflammation, infections', 
      sources: 'Forme acide du CBC, présente dans le cannabis frais' 
    }
  ];

  const terpenesData = [
    { 
      nom: 'Myrcène', 
      formule: 'C10H16', 
      concentration: '0.1-50%', 
      arôme: 'Musqué, terreux, herbacé, légèrement fruité', 
      effets: 'Sédatif, relaxant, anti-inflammatoire, analgésique, antibactérien, antispasmodique', 
      applications: 'Insomnie, douleur chronique, inflammation, anxiété, spasmes musculaires', 
      sources: 'Mangue, houblon, thym, citronnelle, basilic, laurier' 
    },
    { 
      nom: 'Limonène', 
      formule: 'C10H16', 
      concentration: '0.1-20%', 
      arôme: 'Agrumes, citron, orange, pamplemousse', 
      effets: 'Anti-dépresseur, anti-anxiété, anti-inflammatoire, immunostimulant, antifongique, antibactérien', 
      applications: 'Dépression, anxiété, inflammation, infections fongiques, infections bactériennes, reflux acide', 
      sources: 'Agrumes, menthe, romarin, genévrier, pin' 
    },
    { 
      nom: 'Pinène (α et β)', 
      formule: 'C10H16', 
      concentration: '0.1-30%', 
      arôme: 'Pin, sapin, romarin, sauge', 
      effets: 'Anti-inflammatoire, bronchodilatateur, antibactérien, antifongique, amélioration de la mémoire, vigilance', 
      applications: 'Asthme, inflammation, infections, perte de mémoire, concentration', 
      sources: 'Pin, sapin, romarin, sauge, basilic, persil, eucalyptus' 
    },
    { 
      nom: 'Linalool', 
      formule: 'C10H18O', 
      concentration: '0.1-15%', 
      arôme: 'Lavande, fleur, agrumes, épices', 
      effets: 'Sédatif, anxiolytique, anti-inflammatoire, analgésique, anticonvulsivant, antibactérien', 
      applications: 'Insomnie, anxiété, dépression, douleur chronique, épilepsie, infections', 
      sources: 'Lavande, bergamote, coriandre, basilic, menthe' 
    },
    { 
      nom: 'Bêta-Caryophyllène', 
      formule: 'C15H24', 
      concentration: '0.1-20%', 
      arôme: 'Poivre noir, clou de girofle, houblon, bois', 
      effets: 'Anti-inflammatoire, analgésique, anxiolytique, antibactérien, antifongique, gastroprotecteur', 
      applications: 'Douleur chronique, inflammation, anxiété, ulcères, infections', 
      sources: 'Poivre noir, clou de girofle, houblon, basilic, origan, cannelle' 
    },
    { 
      nom: 'Humulène', 
      formule: 'C15H24', 
      concentration: '0.1-15%', 
      arôme: 'Houblon, bois, terre, épices', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique, coupe-faim', 
      applications: 'Inflammation, infections, obésité', 
      sources: 'Houblon, basilic, sauge, ginseng, poivre noir' 
    },
    { 
      nom: 'Terpinolène', 
      formule: 'C10H16', 
      concentration: '0.1-10%', 
      arôme: 'Pin, agrumes, fleur, épices', 
      effets: 'Sédatif, anxiolytique, antibactérien, antifongique, antioxydant', 
      applications: 'Insomnie, anxiété, infections, stress oxydatif', 
      sources: 'Pin, agrumes, cardamome, cumin, romarin, sauge' 
    },
    { 
      nom: 'Ocimène', 
      formule: 'C10H16', 
      concentration: '0.1-10%', 
      arôme: 'Agrumes, herbes, épices, bois', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique, antiviral', 
      applications: 'Inflammation, infections, rhume, grippe', 
      sources: 'Basilic, menthe, origan, persil, poivre noir' 
    },
    { 
      nom: 'Géraniol', 
      formule: 'C10H18O', 
      concentration: '0.1-5%', 
      arôme: 'Rose, pêche, agrumes, fleur', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique, antioxydant, répulsif d\'insectes', 
      applications: 'Inflammation, infections, stress oxydatif, protection contre les insectes', 
      sources: 'Rose, géranium, citronnelle, citron, pamplemousse' 
    },
    { 
      nom: 'Borneol', 
      formule: 'C10H18O', 
      concentration: '0.1-5%', 
      arôme: 'Menthe, camphre, bois', 
      effets: 'Analgésique, anti-inflammatoire, antibactérien, antifongique, sédatif', 
      applications: 'Douleur chronique, inflammation, infections, insomnie', 
      sources: 'Romarin, sauge, lavande, camphre, menthe' 
    },
    { 
      nom: 'Eucalyptol (1,8-cinéole)', 
      formule: 'C10H18O', 
      concentration: '0.1-5%', 
      arôme: 'Eucalyptus, menthe, camphre', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique, antiviral, expectorant', 
      applications: 'Asthme, bronchite, sinusite, rhume, grippe, infections', 
      sources: 'Eucalyptus, romarin, sauge, laurier, menthe' 
    },
    { 
      nom: 'Valencène', 
      formule: 'C15H24', 
      concentration: '0.1-5%', 
      arôme: 'Orange, agrumes, bois', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique', 
      applications: 'Inflammation, infections', 
      sources: 'Orange, pamplemousse, mandarine, citron' 
    },
    { 
      nom: 'Farnésène', 
      formule: 'C15H24', 
      concentration: '0.1-5%', 
      arôme: 'Pomme verte, citron, bois', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique, antioxydant', 
      applications: 'Inflammation, infections, stress oxydatif', 
      sources: 'Pomme, citron, gingembre, camomille, houblon' 
    },
    { 
      nom: 'Nérolidol', 
      formule: 'C15H26O', 
      concentration: '0.1-3%', 
      arôme: 'Rose, bois, agrumes', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique, sédatif', 
      applications: 'Inflammation, infections, insomnie', 
      sources: 'Néroli, jasmin, bois de cèdre, citron, citronnelle' 
    },
    { 
      nom: 'Guaiol', 
      formule: 'C15H26O', 
      concentration: '0.1-3%', 
      arôme: 'Bois, rose, agrumes', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique, expectorant', 
      applications: 'Inflammation, infections, toux, bronchite', 
      sources: 'Guaiacum, bois de cèdre, bois de rose, citron' 
    },
    { 
      nom: 'Isopulegol', 
      formule: 'C10H18O', 
      concentration: '0.1-3%', 
      arôme: 'Menthe, citron, camphre', 
      effets: 'Anti-inflammatoire, antibactérien, antifongique, sédatif', 
      applications: 'Inflammation, infections, insomnie', 
      sources: 'Menthe, citron, eucalyptus, camphre' 
    }
  ];

  // Sources bibliographiques pour les cannabinoïdes et terpènes
  const sourcesBibliographiques = [
    {
      titre: "Cannabinoids and Terpenes: How Do They Work?",
      auteur: "Project CBD",
      url: "https://www.projectcbd.org/science/cannabis-pharmacology/cannabinoids-terpenes-and-the-effects-of-cannabis",
      description: "Guide complet sur les cannabinoïdes et terpènes, leurs mécanismes d'action et effets."
    },
    {
      titre: "The Cannabis Terpenes",
      auteur: "Leafly",
      url: "https://www.leafly.com/learn/cannabis-glossary/terpenes",
      description: "Description détaillée des principaux terpènes du cannabis et leurs effets."
    },
    {
      titre: "Cannabinoids: THC, CBD, CBG, CBN, CBC, THCV, and More",
      auteur: "Leafly",
      url: "https://www.leafly.com/learn/cannabis-glossary/cannabinoids",
      description: "Guide complet sur les différents cannabinoïdes présents dans le cannabis."
    },
    {
      titre: "The Entourage Effect: Terpenes Coupled with Cannabinoids for the Treatment of Mood Disorders and Anxiety Disorders",
      auteur: "Russo EB",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6334253/",
      description: "Étude scientifique sur l'effet d'entourage entre cannabinoïdes et terpènes."
    },
    {
      titre: "Cannabis sativa terpenes are cannabimimetic and selectively enhance cannabinoid activity",
      auteur: "LaVigne JE, et al.",
      url: "https://www.nature.com/articles/s41598-018-22749-2",
      description: "Recherche sur l'interaction entre terpènes et cannabinoïdes."
    },
    {
      titre: "Cannabinoids and Terpenes: An Overview of Their Interactions and Effects",
      auteur: "McPartland JM, et al.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3165946/",
      description: "Analyse des interactions entre cannabinoïdes et terpènes."
    },
    {
      titre: "The Therapeutic Potential of Cannabis and Cannabinoids",
      auteur: "Grotenhermen F, Müller-Vahl K",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3358713/",
      description: "Revue scientifique sur les applications thérapeutiques des cannabinoïdes."
    },
    {
      titre: "Cannabinoids and Terpenes: How They Work Together",
      auteur: "Steep Hill Labs",
      url: "https://steephill.com/cannabinoids-and-terpenes-how-they-work-together/",
      description: "Analyse de la synergie entre cannabinoïdes et terpènes."
    },
    {
      titre: "The Role of Terpenes in Cannabis",
      auteur: "Cannabis and Cannabinoid Research",
      url: "https://www.liebertpub.com/doi/10.1089/can.2019.0010",
      description: "Étude sur le rôle des terpènes dans les effets du cannabis."
    },
    {
      titre: "Cannabinoid and Terpene Profiles of Cannabis",
      auteur: "Journal of Cannabis Research",
      url: "https://jcannabisresearch.biomedcentral.com/articles/10.1186/s42238-020-00070-w",
      description: "Analyse des profils de cannabinoïdes et terpènes dans différentes variétés de cannabis."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section Cannabinoïdes */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-brand-primary dark:text-brand-accent">Cannabinoïdes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Nom</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Formule</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Concentration</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Effets</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Applications</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Sources</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {cannabinoidesData.map((cb, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white break-words">{cb.nom}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{cb.formule}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{cb.concentration}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{cb.effets}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{cb.applications}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{cb.sources}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section Terpènes */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-brand-primary dark:text-brand-accent">Terpènes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Nom</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Formule</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Concentration</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Effets</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Applications</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/6">Sources</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {terpenesData.map((terp, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white break-words">{terp.nom}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{terp.formule}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{terp.concentration}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{terp.effets}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{terp.applications}</td>
                  <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-words">{terp.sources}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section Sources Bibliographiques */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-brand-primary dark:text-brand-accent">Sources Bibliographiques</h3>
        <div className="space-y-4">
          {sourcesBibliographiques.map((source, index) => (
            <div key={index} className="border-l-4 border-brand-primary pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white">
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-brand-accent underline transition-colors"
                >
                  {source.titre}
                </a>
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">{source.auteur}</span> - {source.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnexeA; 