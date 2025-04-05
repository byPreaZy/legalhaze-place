import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LegalHaze - Guide Complet sur le Cannabis</title>
        <meta name="description" content="Votre ressource complète sur le cannabis : guide, études et annexes. Informations détaillées et scientifiquement validées." />
        <meta name="keywords" content="cannabis, guide, étude, légalisation, information, santé" />
        <meta property="og:title" content="LegalHaze - Guide Complet sur le Cannabis" />
        <meta property="og:description" content="Votre ressource complète sur le cannabis : guide, études et annexes." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" role="main">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in" aria-labelledby="hero-title">
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-brand-dark">
            Bienvenue sur <span className="text-brand-primary">LegalHaze</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Votre ressource complète sur le cannabis : guide, études et annexes
          </p>
          <div className="bg-brand-primary/5 p-8 rounded-xl shadow-sm">
            <p className="text-gray-700 text-lg">
              Ce site fournit des informations détaillées et scientifiquement validées sur le cannabis,
              ses composés, ses effets et ses applications. Explorez nos différentes sections pour
              approfondir votre compréhension de cette plante complexe.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" role="list">
          <Link to="/guide" className="group transform hover:-translate-y-1 transition-all duration-300" role="listitem">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow h-full" aria-labelledby="guide-title">
              <h2 id="guide-title" className="text-2xl font-semibold mb-4 text-brand-primary group-hover:text-brand-accent transition-colors">Guide Complet</h2>
              <p className="text-gray-700 mb-6">
                Une exploration approfondie du cannabis, de son histoire à ses applications modernes.
                Découvrez les différents aspects de cette plante fascinante.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Origines et histoire ancienne
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Évolution historique
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Découvertes scientifiques
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Période de prohibition
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Vers la légalisation
                </li>
              </ul>
            </div>
          </Link>

          <Link to="/etude" className="group transform hover:-translate-y-1 transition-all duration-300" role="listitem">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow h-full" aria-labelledby="etude-title">
              <h2 id="etude-title" className="text-2xl font-semibold mb-4 text-brand-primary group-hover:text-brand-accent transition-colors">Étude</h2>
              <p className="text-gray-700 mb-6">
                Résultats d'une étude approfondie sur les effets et applications du cannabis.
                Des données scientifiques rigoureuses et des analyses détaillées.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Impacts économiques
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Impacts sociaux
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Impacts sanitaires
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Comparaison internationale
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Perspectives d'avenir
                </li>
              </ul>
            </div>
          </Link>

          <Link to="/annexes" className="group transform hover:-translate-y-1 transition-all duration-300" role="listitem">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow h-full" aria-labelledby="annexes-title">
              <h2 id="annexes-title" className="text-2xl font-semibold mb-4 text-brand-primary group-hover:text-brand-accent transition-colors">Annexes</h2>
              <p className="text-gray-700 mb-6">
                Ressources complémentaires et informations techniques pour approfondir
                votre connaissance du cannabis.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Glossaire et définitions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tableaux de conversion
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Références légales
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Étude des composés
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ressources additionnelles
                </li>
              </ul>
            </div>
          </Link>

          <div className="bg-white p-8 rounded-xl shadow-md" role="complementary" aria-labelledby="about-title">
            <h2 id="about-title" className="text-2xl font-semibold mb-4 text-brand-primary">À Propos</h2>
            <p className="text-gray-700 mb-6">
              LegalHaze est une plateforme éducative dédiée à la diffusion d'informations
              précises et scientifiquement validées sur le cannabis.
            </p>
            <p className="text-gray-700">
              Notre mission est de fournir des ressources fiables et accessibles pour
              comprendre les différents aspects du cannabis, de ses composés à ses
              applications potentielles.
            </p>
          </div>
        </div>

        {/* Warning Section */}
        <section className="bg-brand-primary/5 p-8 rounded-xl shadow-sm" role="alert" aria-labelledby="warning-title">
          <h2 id="warning-title" className="text-2xl font-semibold mb-4 text-brand-primary">Avertissement</h2>
          <p className="text-gray-700">
            Les informations présentées sur ce site sont à des fins éducatives uniquement.
            La consommation de cannabis peut avoir des effets sur la santé et est soumise
            à des réglementations légales. Consultez toujours un professionnel de santé
            pour des conseils personnalisés.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home; 