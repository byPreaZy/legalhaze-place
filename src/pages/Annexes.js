import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PdfViewer from '../components/PdfViewer';

const Annexes = () => {
  const [activeTab, setActiveTab] = useState('annexe-a');
  const [showPdf, setShowPdf] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);
  const [pdfContent, setPdfContent] = useState({
    'annexe-a': null,
    'annexe-b': null,
    'annexe-c': null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    setCookieConsent(consent === 'true');
  }, []);

  useEffect(() => {
    // Simuler le chargement du contenu des PDFs
    // Dans une implémentation réelle, vous utiliseriez une bibliothèque comme pdf.js pour extraire le contenu
    const loadPdfContent = async () => {
      setLoading(true);
      try {
        // Simulation de chargement du contenu
        // Dans une vraie implémentation, vous chargeriez le contenu réel des PDFs
        const content = {
          'annexe-a': {
            title: 'Glossaire et définitions',
            sections: [
              {
                title: 'Termes généraux',
                items: [
                  { term: 'Cannabis', definition: 'Plante de la famille des Cannabacées, utilisée pour ses propriétés médicinales et récréatives.' },
                  { term: 'THC', definition: 'Tétrahydrocannabinol, principal composé psychoactif du cannabis.' },
                  { term: 'CBD', definition: 'Cannabidiol, composé non psychoactif du cannabis aux propriétés thérapeutiques.' },
                  { term: 'Terpènes', definition: 'Composés aromatiques présents dans le cannabis et de nombreuses autres plantes.' }
                ]
              },
              {
                title: 'Méthodes de consommation',
                items: [
                  { term: 'Inhalation', definition: 'Méthode de consommation par voie respiratoire, incluant le tabagisme et la vaporisation.' },
                  { term: 'Ingestion', definition: 'Consommation par voie orale, généralement sous forme d\'huiles, de teintures ou d\'aliments.' },
                  { term: 'Application topique', definition: 'Utilisation externe sur la peau, généralement sous forme de crèmes ou de pommades.' }
                ]
              }
            ]
          },
          'annexe-b': {
            title: 'Tableaux de conversion',
            sections: [
              {
                title: 'Équivalences de poids',
                items: [
                  { term: '1 gramme', definition: '1000 milligrammes (mg)' },
                  { term: '1 once', definition: '28,35 grammes' },
                  { term: '1 livre', definition: '453,59 grammes' }
                ]
              },
              {
                title: 'Dosages recommandés',
                items: [
                  { term: 'Dose faible', definition: '2,5-5 mg de THC' },
                  { term: 'Dose moyenne', definition: '5-10 mg de THC' },
                  { term: 'Dose forte', definition: '10-20 mg de THC' }
                ]
              }
            ]
          },
          'annexe-c': {
            title: 'Références légales',
            sections: [
              {
                title: 'Législation française',
                items: [
                  { term: 'Loi du 31 décembre 1970', definition: 'Loi relative aux mesures sanitaires de lutte contre la toxicomanie et la répression du trafic et de l\'usage illicite de substances vénéneuses.' },
                  { term: 'Décret du 22 février 1990', definition: 'Décret relatif aux conditions de prescription, de délivrance et d\'utilisation des médicaments contenant des substances classées comme stupéfiants.' }
                ]
              },
              {
                title: 'Réglementation européenne',
                items: [
                  { term: 'Règlement (CE) n° 178/2002', definition: 'Règlement établissant les principes généraux et les prescriptions générales de la législation alimentaire.' },
                  { term: 'Directive 2001/83/CE', definition: 'Directive instituant un code communautaire relatif aux médicaments à usage humain.' }
                ]
              }
            ]
          }
        };
        
        setPdfContent(content);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement du contenu des PDFs:', error);
        setLoading(false);
      }
    };

    loadPdfContent();
  }, []);

  const tabs = [
    { 
      id: 'annexe-a', 
      label: 'Annexe A', 
      pdfPath: '/docs/Annexe A.pdf',
      description: 'Glossaire et définitions des termes techniques liés au cannabis.',
      keywords: 'cannabis, glossaire, définitions, termes techniques, lexique'
    },
    { 
      id: 'annexe-b', 
      label: 'Annexe B', 
      pdfPath: '/docs/Annexe B.pdf',
      description: 'Tableaux de conversion et données techniques sur les dosages.',
      keywords: 'cannabis, conversion, dosage, tableaux, données techniques'
    },
    { 
      id: 'annexe-c', 
      label: 'Annexe C', 
      pdfPath: '/docs/Annexe C.pdf',
      description: 'Références légales et réglementations concernant le cannabis.',
      keywords: 'cannabis, législation, réglementation, références légales, droit'
    },
  ];

  const getPdfTitle = () => {
    const tab = tabs.find(tab => tab.id === activeTab);
    return tab ? tab.label : 'Annexe';
  };

  const getPdfPath = () => {
    const tab = tabs.find(tab => tab.id === activeTab);
    return tab ? tab.pdfPath : '';
  };

  const getPdfDescription = () => {
    const tab = tabs.find(tab => tab.id === activeTab);
    return tab ? tab.description : '';
  };

  const getPdfKeywords = () => {
    const tab = tabs.find(tab => tab.id === activeTab);
    return tab ? tab.keywords : '';
  };

  const getPdfContent = () => {
    return pdfContent[activeTab] || null;
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Enregistrer l'événement de changement d'onglet pour les statistiques
    if (window.gtag) {
      window.gtag('event', 'tab_change', {
        'event_category': 'Annexes',
        'event_label': tabId
      });
    }
  };

  const handlePdfToggle = () => {
    setShowPdf(!showPdf);
    // Enregistrer l'événement de visualisation PDF pour les statistiques
    if (window.gtag) {
      window.gtag('event', 'pdf_view', {
        'event_category': 'Annexes',
        'event_label': getPdfTitle(),
        'value': !showPdf ? 1 : 0
      });
    }
  };

  const renderPdfContent = () => {
    const content = getPdfContent();
    
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64" role="status" aria-label="Chargement du contenu">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
        </div>
      );
    }
    
    if (!content) {
      return (
        <div className="text-center p-8 text-gray-600 dark:text-gray-400" role="alert">
          <p>Le contenu n'est pas disponible pour le moment.</p>
        </div>
      );
    }
    
    return (
      <div className="space-y-8">
        {content.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-brand-primary dark:text-brand-accent">{section.title}</h3>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                  <dt className="font-medium text-gray-900 dark:text-gray-100">{item.term}</dt>
                  <dd className="mt-1 text-gray-600 dark:text-gray-400">{item.definition}</dd>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>Annexes | LegalHaze</title>
        <meta name="description" content="Consultez nos annexes techniques sur le cannabis : glossaire, tableaux de conversion et références légales. Documents PDF accessibles et conformes aux normes RGPD." />
        <meta name="keywords" content={getPdfKeywords()} />
      </Helmet>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark dark:text-brand-light">
            <span className="text-brand-primary">Annexes</span>
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Ressources complémentaires et informations techniques</p>
        </div>
        <button 
          onClick={handlePdfToggle}
          className="w-full sm:w-auto bg-brand-primary hover:bg-brand-accent text-brand-light px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          aria-label={showPdf ? "Revenir au résumé" : "Voir le document complet"}
          aria-expanded={showPdf}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {showPdf ? "Voir le résumé" : "Voir le PDF complet"}
        </button>
      </div>

      {!cookieConsent && (
        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mb-8" role="alert">
          <p className="text-yellow-800 dark:text-yellow-200">
            Pour accéder aux documents PDF, veuillez accepter les cookies dans nos paramètres de confidentialité.
          </p>
        </div>
      )}

      {showPdf ? (
        <div className="animate-fade-in">
          <PdfViewer 
            pdfPath={getPdfPath()} 
            title={getPdfTitle()} 
          />
        </div>
      ) : (
        <div className="space-y-12 animate-fade-in">
          {/* Onglets de navigation */}
          <div className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-md" role="tablist" aria-label="Sélection des annexes">
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`${tab.id}-panel`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Description de l'onglet actif */}
          <div 
            id={`${activeTab}-panel`}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            role="tabpanel"
            aria-labelledby={activeTab}
          >
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary dark:text-brand-accent">{getPdfTitle()}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{getPdfDescription()}</p>
            
            {/* Contenu du PDF */}
            <div className="mb-8">
              {renderPdfContent()}
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handlePdfToggle}
                className="bg-brand-primary hover:bg-brand-accent text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                aria-label={`Consulter le document complet de ${getPdfTitle()}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Consulter le document complet
              </button>
            </div>
          </div>

          {/* Lien vers la page des composés */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary dark:text-brand-accent">Étude des Composés du Cannabis</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Pour une étude détaillée des composés actifs du cannabis, leurs propriétés et effets, consultez notre page dédiée.
            </p>
            <div className="flex justify-end">
              <a
                href="/composes-cannabis"
                className="bg-brand-primary hover:bg-brand-accent text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                aria-label="Accéder à l'étude des composés du cannabis"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Voir l'étude des composés
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Annexes; 