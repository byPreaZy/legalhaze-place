import React, { useState } from 'react';
import PdfViewer from '../components/PdfViewer';
import { Link } from 'react-router-dom';
import InternalNavigation from '../components/InternalNavigation';

const ComposesCannabis = () => {
  const [showPdf, setShowPdf] = useState(false);

  // Mémorisation du tableau sections avec useMemo
  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'composition', label: 'Composition' },
    { id: 'cannabinoides', label: 'Cannabinoïdes' },
    { id: 'terpenes', label: 'Terpènes' },
    { id: 'entourage', label: 'Effet d\'Entourage' },
    { id: 'applications', label: 'Applications' },
    { id: 'references', label: 'Références' }
  ];

  // Références pour les sources
  const references = [
    {
      title: "Cannabis sativa terpenes are cannabimimetic and selectively enhance cannabinoid activity",
      url: "https://www.nature.com/articles/s41598-018-22749-2"
    },
    {
      title: "The \"Entourage Effect\": Terpenes Coupled with Cannabinoids for the Treatment of Mood Disorders and Anxiety Disorders",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6334253/"
    },
    {
      title: "Cannabis Terpenes & The Entourage Effect",
      url: "https://www.leafly.com/learn/cannabis-glossary/entourage-effect"
    },
    {
      title: "The Entourage Effect: Potential Synergy Between Cannabinoids & Terpenes",
      url: "https://www.projectcbd.org/science/cannabis-pharmacology/entourage-effect"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
            <span className="text-brand-primary">Composés du Cannabis</span>
          </h1>
          <p className="mt-2 text-gray-600">Étude détaillée des composés actifs et leurs effets</p>
        </div>
        <button 
          onClick={() => setShowPdf(!showPdf)}
          className="w-full sm:w-auto bg-brand-primary hover:bg-brand-accent text-brand-light px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          aria-label={showPdf ? "Voir le résumé" : "Voir l'étude complète"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {showPdf ? "Voir le résumé" : "Voir l'étude complète"}
        </button>
      </div>

      {showPdf ? (
        <div className="animate-fade-in">
          <PdfViewer 
            pdfPath="/docs/Etude des composés du cannabis.pdf"
            title="Étude des Composés du Cannabis"
          />
        </div>
      ) : (
        <div className="space-y-12 animate-fade-in">
          {/* Navigation des sections */}
          <InternalNavigation sections={sections} />

          {/* Introduction */}
          <section 
            id="introduction" 
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Introduction</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700">
                Le cannabis, également connu sous le nom de marijuana, est une plante complexe contenant
                plus de 500 composés chimiques. Parmi ceux-ci, les cannabinoïdes et les terpènes sont les
                plus étudiés en raison de leurs effets thérapeutiques potentiels. Ce document explore la
                composition du cannabis, les différents cannabinoïdes et terpènes, leurs effets, et l'importance
                de l'effet d'entourage.
              </p>
            </div>
          </section>

          {/* Composition */}
          <section 
            id="composition" 
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Composition du Cannabis</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700">
                Le cannabis est composé de divers cannabinoïdes, terpènes, flavonoïdes et autres composés.
                Les cannabinoïdes les plus connus sont le tétrahydrocannabinol (THC) et le cannabidiol (CBD).
                Les terpènes, responsables des arômes et saveurs distinctifs du cannabis, jouent également un
                rôle crucial dans ses effets thérapeutiques.
              </p>
            </div>
          </section>

          {/* Cannabinoïdes */}
          <section 
            id="cannabinoides" 
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Cannabinoïdes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-brand-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-brand-secondary">THC</h3>
                  <p className="text-gray-700">
                    Principal composé psychoactif du cannabis, connu pour ses effets euphorisants et analgésiques. 
                    Le THC agit principalement sur les récepteurs CB1 dans le cerveau, influençant la perception, 
                    l'humeur et la cognition. Il est souvent utilisé pour ses propriétés analgésiques et pour 
                    stimuler l'appétit.
                  </p>
                </div>
                <div className="bg-brand-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-brand-secondary">CBD</h3>
                  <p className="text-gray-700">
                    Non psychoactif, le CBD est reconnu pour ses propriétés anti-inflammatoires, anxiolytiques 
                    et anticonvulsivantes. Il interagit avec divers récepteurs, y compris les récepteurs de 
                    sérotonine et les récepteurs vanilloïdes. Le CBD est souvent utilisé pour traiter l'épilepsie, 
                    l'anxiété et les douleurs chroniques.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-brand-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-brand-secondary">CBG</h3>
                  <p className="text-gray-700">
                    Connu comme le précurseur d'autres cannabinoïdes comme le THC et le CBD. Le CBG a montré 
                    des effets neuroprotecteurs et peut aider à réguler l'appétit et la douleur. Il est étudié 
                    pour ses potentiels effets anti-inflammatoires et antibactériens.
                  </p>
                </div>
                <div className="bg-brand-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-brand-secondary">CBN</h3>
                  <p className="text-gray-700">
                    Souvent associé à des propriétés sédatives, le CBN peut aider à améliorer le sommeil et a 
                    des effets anti-inflammatoires. Il est produit par la dégradation du THC et peut être 
                    bénéfique pour les troubles du sommeil.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Terpènes */}
          <section 
            id="terpenes" 
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Terpènes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Limonène',
                  description: 'Connu pour ses propriétés anti-dépressives et anti-anxiété. Il est souvent trouvé dans les agrumes et est utilisé pour améliorer l\'humeur. Le limonène peut également avoir des effets anticancéreux.'
                },
                {
                  name: 'Myrcène',
                  description: 'A des effets sédatifs et relaxants. Il est également présent dans le houblon et peut potentialiser les effets du THC en augmentant la perméabilité de la barrière hémato-encéphalique.'
                },
                {
                  name: 'Pinène',
                  description: 'Améliore la mémoire et a des propriétés anti-inflammatoires. Il est également présent dans les aiguilles de pin et le romarin. Le pinène peut également agir comme un bronchodilatateur.'
                },
                {
                  name: 'Linalool',
                  description: 'Utilisé pour ses effets calmants et sédatifs. Il est également présent dans la lavande et est souvent utilisé en aromathérapie. Le linalool peut aider à réduire l\'anxiété.'
                },
                {
                  name: 'Bêta-Caryophyllène',
                  description: 'Connu pour ses propriétés anti-inflammatoires et analgésiques. Il peut interagir avec les récepteurs CB2, contribuant à l\'effet d\'entourage.'
                },
                {
                  name: 'Terpinolène',
                  description: 'A des propriétés sédatives et est souvent utilisé pour ses effets calmants. Il peut également avoir des effets antioxydants.'
                }
              ].map((terpene, index) => (
                <div key={index} className="bg-brand-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-brand-secondary">{terpene.name}</h3>
                  <p className="text-gray-700">{terpene.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Effet d'Entourage */}
          <section 
            id="entourage" 
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Effet d'Entourage</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                L'effet d'entourage est une théorie selon laquelle les composés du cannabis, y compris les
                cannabinoïdes et les terpènes, agissent en synergie pour produire des effets thérapeutiques
                supérieurs à ceux de chaque composé pris isolément.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-brand-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-brand-secondary">Exemples d'Effet d'Entourage</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>THC et CBD : Le CBD peut atténuer les effets psychoactifs du THC</li>
                    <li>THC et Myrcène : Potentialisation des effets du THC</li>
                    <li>CBD et Limonène : Amélioration des effets anxiolytiques</li>
                  </ul>
                </div>
                <div className="bg-brand-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-brand-secondary">Mécanismes</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Interaction avec les récepteurs cannabinoïdes</li>
                    <li>Voies de signalisation multiples</li>
                    <li>Effets synergiques entre composés</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Applications Thérapeutiques */}
          <section 
            id="applications" 
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Applications Thérapeutiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Douleur chronique',
                  description: 'Le THC et le CBD sont souvent utilisés pour gérer la douleur chronique. Leur combinaison peut offrir un soulagement plus efficace que les analgésiques traditionnels.'
                },
                {
                  title: 'Troubles de l\'humeur',
                  description: 'Les terpènes comme le limonène peuvent aider à traiter la dépression et l\'anxiété. Leur interaction avec les cannabinoïdes peut améliorer l\'efficacité des traitements.'
                },
                {
                  title: 'Épilepsie',
                  description: 'Le CBD est efficace dans le traitement de certaines formes d\'épilepsie. L\'ajout de terpènes peut améliorer l\'efficacité du CBD dans la réduction des crises.'
                },
                {
                  title: 'Inflammation',
                  description: 'Les propriétés anti-inflammatoires des cannabinoïdes et des terpènes peuvent être bénéfiques pour les maladies inflammatoires.'
                }
              ].map((application, index) => (
                <div key={index} className="bg-brand-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-brand-secondary">{application.title}</h3>
                  <p className="text-gray-700">{application.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Références */}
          <section 
            id="references" 
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Références</h2>
            <div className="prose max-w-none">
              <ul className="space-y-3 text-gray-700">
                {references.map((ref, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:text-brand-accent underline transition-colors"
                    >
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Annexes */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Annexes Complémentaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/annexes#annexe-a" className="group">
                <div className="bg-brand-primary/5 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-2 text-brand-secondary group-hover:text-brand-accent">Annexe A</h3>
                  <p className="text-gray-600">Liste détaillée des cannabinoïdes et terpènes, leurs sources et effets.</p>
                </div>
              </Link>
              <Link to="/annexes#annexe-b" className="group">
                <div className="bg-brand-primary/5 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-2 text-brand-secondary group-hover:text-brand-accent">Annexe B</h3>
                  <p className="text-gray-600">Études cliniques sur l'effet d'entourage et leurs résultats.</p>
                </div>
              </Link>
              <Link to="/annexes#annexe-c" className="group">
                <div className="bg-brand-primary/5 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-2 text-brand-secondary group-hover:text-brand-accent">Annexe C</h3>
                  <p className="text-gray-600">Réglementations et usage médical du cannabis.</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ComposesCannabis; 