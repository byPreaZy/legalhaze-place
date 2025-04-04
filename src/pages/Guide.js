import React, { useState } from 'react';
import PdfViewer from '../components/PdfViewer';

const Guide = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-brand-primary">Guide Complet du Cannabis</h1>
        <button 
          onClick={() => setShowPdf(!showPdf)}
          className="bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded-md transition-colors"
        >
          {showPdf ? "Voir le résumé" : "Voir le PDF complet"}
        </button>
      </div>
      
      {showPdf ? (
        <PdfViewer 
          pdfPath="/docs/cannabis_guide_complet.pdf" 
          title="Guide Complet du Cannabis" 
        />
      ) : (
        <>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Introduction</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Le cannabis est une plante complexe dont l'utilisation remonte à des millénaires.
                Ce guide vous propose une exploration approfondie de ses différents aspects,
                de son histoire à ses applications modernes.
              </p>
              <p className="text-gray-700 mb-4">
                Le cannabis, également connu sous le nom de marijuana, chanvre ou haschich selon
                sa forme et son utilisation, est une plante qui a accompagné l'humanité depuis
                des millénaires. Ses propriétés médicinales, industrielles et récréatives en
                font une plante unique dans l'histoire humaine.
              </p>
              <div className="bg-brand-light p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold mb-2">Sources</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li><a href="https://www.who.int/publications/i/item/9789240015797" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">World Health Organization (WHO) - "Cannabis: a health perspective and research agenda" (2019)</a></li>
                  <li><a href="https://nida.nih.gov/publications/research-reports/marijuana/overview" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">National Institute on Drug Abuse (NIDA) - "Marijuana Research Report" (2020)</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Histoire et Culture</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Le cannabis a une riche histoire culturelle et médicinale à travers le monde.
                Son utilisation remonte à l'Antiquité, où il était déjà apprécié pour ses propriétés
                thérapeutiques et ses applications industrielles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Chine Ancienne</h3>
                  <p className="text-gray-700">
                    Les premières traces d'utilisation remontent à 5000 ans avant notre ère.
                    Utilisé pour ses fibres textiles et ses propriétés médicinales dans la
                    médecine traditionnelle chinoise.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Inde</h3>
                  <p className="text-gray-700">
                    Mentionné dans les textes védiques sous le nom de "bhang".
                    Utilisé dans les rituels religieux et la médecine ayurvédique.
                  </p>
                </div>
              </div>
              <div className="bg-brand-light p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold mb-2">Sources</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0378874118307294" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Journal of Ethnopharmacology - "Cannabis in Ancient China" (2018)</a></li>
                  <li><a href="https://insa.nic.in/writereaddata/UpLoadedFiles/IJHS/Vol57_3_2022_Art05.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Indian Journal of History of Science - "Cannabis in Ancient Indian Texts" (2017)</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Botanique et Variétés</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Le cannabis appartient à la famille des Cannabacées et au genre Cannabis.
                Il existe trois espèces principales : Cannabis sativa, Cannabis indica et
                Cannabis ruderalis, chacune avec des caractéristiques distinctes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Sativa</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Plantes hautes et fines</li>
                    <li>Effets stimulants</li>
                    <li>Récolte plus longue</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Indica</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Plantes compactes</li>
                    <li>Effets relaxants</li>
                    <li>Récolte plus rapide</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Ruderalis</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Plantes petites</li>
                    <li>Autofloraison</li>
                    <li>Résistant au froid</li>
                  </ul>
                </div>
              </div>
              <div className="bg-brand-light p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold mb-2">Sources</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li><a href="https://academic.oup.com/botlinnean/article/195/2/189/5861338" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Botanical Journal of the Linnean Society - "Cannabis Taxonomy" (2021)</a></li>
                  <li><a href="https://jcannabisresearch.biomedcentral.com/articles/10.1186/s42238-020-00078-2" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Journal of Cannabis Research - "Cannabis Species and Varieties" (2020)</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Composés Principaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">THC</h3>
                <p className="text-gray-700 mb-4">
                  Le tétrahydrocannabinol (THC) est le composé psychoactif principal du cannabis,
                  responsable de ses effets psychotropes. Il se lie aux récepteurs CB1 du
                  système endocannabinoïde, principalement présents dans le cerveau.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Effets psychoactifs</li>
                  <li>Stimulation de l'appétit</li>
                  <li>Réduction de la douleur</li>
                  <li>Modification de la perception</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">CBD</h3>
                <p className="text-gray-700 mb-4">
                  Le cannabidiol (CBD) est un composé non psychoactif aux propriétés thérapeutiques
                  prometteuses. Contrairement au THC, il ne se lie pas directement aux récepteurs
                  CB1, mais interagit avec d'autres récepteurs et systèmes.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Anti-inflammatoire</li>
                  <li>Anxiolytique</li>
                  <li>Anticonvulsivant</li>
                  <li>Neuroprotecteur</li>
                </ul>
              </div>
            </div>
            <div className="bg-brand-light p-4 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-2">Sources</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li><a href="https://www.nature.com/articles/s41583-020-0314-5" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Nature Reviews Neuroscience - "The Endocannabinoid System" (2020)</a></li>
                <li><a href="https://www.frontiersin.org/articles/10.3389/fphar.2021.626387/full" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Frontiers in Pharmacology - "CBD Clinical Applications" (2021)</a></li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Méthodes de Consommation</h2>
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Inhalation</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Fumée : 2-10 minutes pour les effets</li>
                    <li>Vapeur : 5-15 minutes pour les effets</li>
                    <li>Durée : 2-4 heures</li>
                    <li>Biodisponibilité : 10-35%</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Ingestion</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Comestibles : 30-90 minutes</li>
                    <li>Teintures : 15-45 minutes</li>
                    <li>Durée : 4-8 heures</li>
                    <li>Biodisponibilité : 10-20%</li>
                  </ul>
                </div>
              </div>
              <div className="bg-brand-light p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold mb-2">Sources</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li><a href="https://ascpt.onlinelibrary.wiley.com/doi/abs/10.1002/cpt.2256" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Clinical Pharmacology & Therapeutics - "Cannabis Administration Methods" (2021)</a></li>
                  <li><a href="https://www.mdpi.com/2077-0383/9/4/941" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Journal of Clinical Medicine - "Cannabis Delivery Systems" (2020)</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Aspects Légaux</h2>
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">France</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Usage récréatif : Illégal</li>
                    <li>Usage médical : Expérimentation en cours</li>
                    <li>CBD : Légal si &lt; 0.2% THC</li>
                    <li>Chanvre industriel : Légal avec licence</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">Europe</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Pays-Bas : Décriminalisé</li>
                    <li>Portugal : Décriminalisé</li>
                    <li>Allemagne : Usage médical légal</li>
                    <li>Espagne : Usage privé légal</li>
                  </ul>
                </div>
              </div>
              <div className="bg-brand-light p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold mb-2">Sources</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li><a href="https://www.emcdda.europa.eu/publications/edr/trends-developments/2023/cannabis-legislation-europe" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">European Monitoring Centre for Drugs and Drug Addiction (EMCDDA) - "Cannabis Legislation in Europe" (2023)</a></li>
                  <li><a href="https://www.degruyter.com/document/doi/10.1515/jdpa-2022-0001/html" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Journal of Drug Policy Analysis - "Cannabis Legalization Trends" (2022)</a></li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Guide; 