import React from 'react';

const Accessibilite = () => {
  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-light mb-8">
            Accessibilité
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Notre engagement pour l'accessibilité
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Chez LegalHaze, nous nous engageons à rendre notre site web accessible à tous les utilisateurs, 
                y compris les personnes en situation de handicap. Nous suivons les directives WCAG 2.1 (Web Content 
                Accessibility Guidelines) niveau AA pour assurer une expérience utilisateur optimale pour tous.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Fonctionnalités d'accessibilité
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light mb-3">
                    Navigation au clavier
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Notre site est entièrement navigable au clavier. Utilisez la touche Tab pour naviguer entre 
                    les éléments et Entrée pour activer les liens et boutons.
                  </p>
                </div>

                <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light mb-3">
                    Mode sombre
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Un mode sombre est disponible pour réduire la fatigue oculaire et améliorer la lisibilité 
                    dans les environnements à faible luminosité.
                  </p>
                </div>

                <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light mb-3">
                    Textes alternatifs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Toutes les images importantes sont accompagnées de descriptions textuelles pour les utilisateurs 
                    de lecteurs d'écran.
                  </p>
                </div>

                <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light mb-3">
                    Structure sémantique
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Notre site utilise une structure HTML sémantique pour une meilleure compréhension par les 
                    technologies d'assistance.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Compatibilité avec les technologies d'assistance
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre site est compatible avec les technologies d'assistance suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Lecteurs d'écran (NVDA, VoiceOver, JAWS)</li>
                <li>Loupes d'écran</li>
                <li>Navigation au clavier</li>
                <li>Technologies de reconnaissance vocale</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Signaler un problème d'accessibilité
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si vous rencontrez des difficultés d'accès à notre site, n'hésitez pas à nous contacter :
              </p>
              <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Email : <a href="mailto:accessibilite@legalhaze.fr" className="text-brand-accent hover:underline">accessibilite@legalhaze.fr</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Nous nous engageons à répondre dans les plus brefs délais et à apporter les corrections nécessaires.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Ressources supplémentaires
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Pour en savoir plus sur l'accessibilité web :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <a 
                      href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-accent hover:underline"
                    >
                      Introduction à l'accessibilité web (W3C)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.w3.org/WAI/WCAG21/quickref/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-accent hover:underline"
                    >
                      Guide rapide WCAG 2.1
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibilite; 