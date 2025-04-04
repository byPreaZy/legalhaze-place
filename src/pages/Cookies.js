import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  const [activeTab, setActiveTab] = useState('essential');

  const cookieTypes = {
    essential: {
      title: 'Cookies Essentiels',
      description: 'Ces cookies sont nécessaires au fonctionnement du site. Ils permettent d\'utiliser les fonctionnalités de base comme la navigation et l\'accès aux zones sécurisées.',
      examples: [
        'Cookies de session',
        'Cookies d\'authentification',
        'Cookies de sécurité'
      ]
    },
    analytics: {
      title: 'Cookies Analytiques',
      description: 'Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec notre site. Toutes les données sont anonymisées.',
      examples: [
        'Statistiques de visite',
        'Taux de rebond',
        'Temps moyen de visite'
      ]
    },
    preferences: {
      title: 'Cookies de Préférences',
      description: 'Ces cookies permettent au site de se souvenir de vos choix (comme le mode sombre/clair) pour améliorer votre expérience.',
      examples: [
        'Préférences de langue',
        'Thème choisi',
        'Paramètres d\'accessibilité'
      ]
    },
    marketing: {
      title: 'Cookies Marketing',
      description: 'Ces cookies sont utilisés pour vous montrer des publicités pertinentes. Ils peuvent être désactivés sans affecter le fonctionnement du site.',
      examples: [
        'Publicités personnalisées',
        'Suivi des campagnes',
        'Réseaux sociaux'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-light mb-8">
            Politique des Cookies
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Qu'est-ce qu'un cookie ?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) 
                lors de la visite d'un site web. Il permet au site de mémoriser vos actions et préférences 
                (identifiant de connexion, langue, paramètres d'affichage) pendant une durée déterminée.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Types de cookies utilisés
              </h2>
              
              {/* Navigation des types de cookies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(cookieTypes).map(([key, { title }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === key
                        ? 'bg-brand-accent text-white'
                        : 'bg-white dark:bg-brand-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-brand-gray-700'
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </div>

              {/* Contenu détaillé du type de cookie sélectionné */}
              <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light mb-3">
                  {cookieTypes[activeTab].title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cookieTypes[activeTab].description}
                </p>
                <h4 className="font-semibold text-brand-dark dark:text-brand-light mb-2">
                  Exemples :
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {cookieTypes[activeTab].examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Gérer vos préférences
              </h2>
              <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Vous pouvez à tout moment modifier vos préférences concernant les cookies :
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-brand-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-brand-dark dark:text-brand-light">Cookies Essentiels</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Toujours activés</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Requis</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-brand-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-brand-dark dark:text-brand-light">Cookies Analytiques</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Optionnels</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-accent/20 dark:peer-focus:ring-brand-accent/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-accent"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-brand-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-brand-dark dark:text-brand-light">Cookies de Préférences</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Optionnels</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-accent/20 dark:peer-focus:ring-brand-accent/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-accent"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-brand-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-brand-dark dark:text-brand-light">Cookies Marketing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Optionnels</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-accent/20 dark:peer-focus:ring-brand-accent/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-accent"></div>
                    </label>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-brand-accent text-white px-6 py-2 rounded-lg hover:bg-brand-accent/90 transition-colors">
                    Enregistrer les préférences
                  </button>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Durée de conservation
              </h2>
              <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Les cookies sont conservés pour une durée maximale de 13 mois. Passé ce délai, votre consentement 
                  sera à nouveau demandé.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Vos droits
              </h2>
              <div className="bg-white dark:bg-brand-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Pour exercer ces droits, contactez-nous à :{' '}
                  <a href="mailto:privacy@legalhaze.fr" className="text-brand-accent hover:underline">
                    privacy@legalhaze.fr
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-dark dark:text-brand-light mb-4">
                Plus d'informations
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Pour plus d'informations sur la gestion des cookies :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <a 
                      href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-accent hover:underline"
                    >
                      Cookies et traceurs : que dit la loi ? (CNIL)
                    </a>
                  </li>
                  <li>
                    <Link to="/politique-confidentialite" className="text-brand-accent hover:underline">
                      Notre politique de confidentialité
                    </Link>
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

export default Cookies; 