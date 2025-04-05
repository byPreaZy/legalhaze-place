import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnnexeA, AnnexeB, AnnexeC } from '../components/annexes';

const Annexes = () => {
  const location = useLocation();
  const [activeAnnexe, setActiveAnnexe] = useState('A');

  useEffect(() => {
    // Récupérer le paramètre d'URL
    const params = new URLSearchParams(location.search);
    const annexeParam = params.get('annexe');
    
    // Si un paramètre d'annexe est présent, l'utiliser
    if (annexeParam && ['A', 'B', 'C'].includes(annexeParam.toUpperCase())) {
      setActiveAnnexe(annexeParam.toUpperCase());
    }
  }, [location]);

  const annexes = [
    { id: 'A', title: 'Annexe A - Cannabinoïdes et Terpènes', component: <AnnexeA /> },
    { id: 'B', title: 'Annexe B - Études Cliniques', component: <AnnexeB /> },
    { id: 'C', title: 'Annexe C - Réglementations', component: <AnnexeC /> }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brand-primary dark:text-brand-accent mb-8">
        Annexes Complémentaires
      </h1>

      <div className="flex flex-wrap gap-4 mb-8">
        {annexes.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => setActiveAnnexe(id)}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeAnnexe === id
                ? 'bg-brand-primary text-white dark:bg-brand-accent'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        {annexes.find(annexe => annexe.id === activeAnnexe)?.component}
      </div>
    </div>
  );
};

export default Annexes; 