import React, { useState } from 'react';
import PdfViewer from '../components/PdfViewer';

const Annexes = () => {
  const [activeTab, setActiveTab] = useState('annexe-a');
  const [showPdf, setShowPdf] = useState(false);

  const tabs = [
    { 
      id: 'annexe-a', 
      label: 'Annexe A', 
      pdfPath: '/docs/Annexe A.pdf',
      description: 'Glossaire et définitions des termes techniques liés au cannabis.'
    },
    { 
      id: 'annexe-b', 
      label: 'Annexe B', 
      pdfPath: '/docs/Annexe B.pdf',
      description: 'Tableaux de conversion et données techniques sur les dosages.'
    },
    { 
      id: 'annexe-c', 
      label: 'Annexe C', 
      pdfPath: '/docs/Annexe C.pdf',
      description: 'Références légales et réglementations concernant le cannabis.'
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
            <span className="text-brand-primary">Annexes</span>
          </h1>
          <p className="mt-2 text-gray-600">Ressources complémentaires et informations techniques</p>
        </div>
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
            pdfPath={getPdfPath()} 
            title={getPdfTitle()} 
          />
        </div>
      ) : (
        <div className="space-y-12 animate-fade-in">
          {/* Onglets de navigation */}
          <div className="bg-white p-2 rounded-xl shadow-md">
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Description de l'onglet actif */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">{getPdfTitle()}</h2>
            <p className="text-gray-600 mb-6">{getPdfDescription()}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowPdf(true)}
                className="bg-brand-primary hover:bg-brand-accent text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Consulter le document complet
              </button>
            </div>
          </div>

          {/* Lien vers la page des composés */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Étude des Composés du Cannabis</h2>
            <p className="text-gray-600 mb-6">
              Pour une étude détaillée des composés actifs du cannabis, leurs propriétés et effets, consultez notre page dédiée.
            </p>
            <div className="flex justify-end">
              <a
                href="/composes-cannabis"
                className="bg-brand-primary hover:bg-brand-accent text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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