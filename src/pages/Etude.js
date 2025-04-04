import React, { useState } from 'react';
import PdfViewer from '../components/PdfViewer';

const Etude = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
          Étude sur le <span className="text-brand-primary">Cannabis</span>
        </h1>
        <button 
          onClick={() => setShowPdf(!showPdf)}
          className="w-full sm:w-auto bg-brand-primary hover:bg-brand-accent text-brand-light px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {showPdf ? "Voir le résumé" : "Voir le PDF complet"}
        </button>
      </div>

      {showPdf ? (
        <div className="animate-fade-in">
          <PdfViewer 
            pdfPath="/docs/cannabis_etude.pdf" 
            title="Étude sur le Cannabis" 
          />
        </div>
      ) : (
        <div className="space-y-12 animate-fade-in">
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Méthodologie</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Cette étude a été réalisée sur une période de 12 mois, impliquant un échantillon
                représentatif de 1000 participants. Les données ont été collectées à travers
                des entretiens, des questionnaires et des analyses cliniques.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4 text-brand-secondary">Critères d'inclusion</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Âge : 18-65 ans
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Consommation régulière de cannabis (≥ 3 fois par semaine)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Absence de troubles psychiatriques majeurs
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Consentement éclairé
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Résultats Principaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-brand-secondary">Effets sur la Santé</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">78%</div>
                    <span className="text-gray-700">Amélioration significative de la qualité du sommeil</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">65%</div>
                    <span className="text-gray-700">Réduction de l'anxiété</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">72%</div>
                    <span className="text-gray-700">Diminution des douleurs chroniques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">45%</div>
                    <span className="text-gray-700">Amélioration de l'appétit</span>
                  </li>
                </ul>
              </div>
              <div className="bg-brand-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-brand-secondary">Effets Secondaires</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">35%</div>
                    <span className="text-gray-700">Sécheresse buccale</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">42%</div>
                    <span className="text-gray-700">Augmentation de l'appétit</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">28%</div>
                    <span className="text-gray-700">Somnolence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">15%</div>
                    <span className="text-gray-700">Anxiété</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Analyse des Données</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                L'analyse statistique a révélé des corrélations significatives entre la
                consommation de cannabis et plusieurs paramètres de santé. Les résultats
                ont été ajustés pour tenir compte des facteurs confondants potentiels.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4 text-brand-secondary">Points Clés</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Efficacité démontrée dans le traitement de la douleur chronique
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Impact positif sur la qualité de vie globale
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Faible taux d'effets secondaires graves
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Bonne tolérance générale
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Recommandations</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Sur la base des résultats de cette étude, plusieurs recommandations peuvent
                être formulées pour l'utilisation thérapeutique du cannabis.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Développement de protocoles de traitement personnalisés
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Surveillance régulière des effets à long terme
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Éducation des patients sur les modes de consommation
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Intégration dans les protocoles de soins existants
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Limites de l'Étude</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Bien que cette étude fournisse des données précieuses, certaines limites
                doivent être prises en compte dans l'interprétation des résultats.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Durée limitée de l'étude (12 mois)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Auto-déclaration des participants
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Absence de groupe placebo
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Difficulté à standardiser les doses
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Perspectives Futures</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Cette étude ouvre la voie à de futures recherches dans plusieurs domaines
                prometteurs.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Études à plus long terme sur les effets chroniques
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Recherche sur les interactions médicamenteuses
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Développement de nouvelles formulations
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Études sur des populations spécifiques
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Etude; 