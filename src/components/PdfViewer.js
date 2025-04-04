import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PdfViewer = ({ pdfPath, title }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    // Vérifier si l'utilisateur a accepté les cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setError("Veuillez accepter les cookies pour accéder à ce document.");
      setLoading(false);
      return;
    }
  }, []);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setError("Impossible de charger le PDF. Veuillez réessayer ou télécharger le document.");
    setLoading(false);
  };

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    // Enregistrer l'événement de téléchargement pour les statistiques
    if (window.gtag) {
      window.gtag('event', 'download', {
        'event_category': 'PDF',
        'event_label': title,
        'value': downloadCount + 1
      });
    }
  };

  return (
    <div className="mb-8" role="region" aria-label={`Document PDF : ${title}`}>
      <Helmet>
        <title>{title} | LegalHaze</title>
        <meta name="description" content={`Consultez ${title} sur LegalHaze. Document PDF accessible et conforme aux normes RGPD.`} />
      </Helmet>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        {loading && (
          <div className="flex justify-center items-center h-[600px]" role="status" aria-label="Chargement du document">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
          </div>
        )}
        {error && (
          <div className="flex flex-col items-center justify-center h-[600px] text-red-600 dark:text-red-400" role="alert">
            <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-center">{error}</p>
          </div>
        )}
        <iframe
          src={`${process.env.PUBLIC_URL}${pdfPath}#toolbar=0&navpanes=0`}
          title={title}
          className={`w-full h-[600px] border-0 ${loading ? 'hidden' : ''}`}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          aria-label={`Contenu du document ${title}`}
        />
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>Conseil : Utilisez le bouton de téléchargement pour une meilleure expérience de lecture.</p>
            <p className="mt-1">Format : PDF - Taille : {pdfPath.includes('Annexe A') ? '4.2 KB' : pdfPath.includes('Annexe B') ? '89 KB' : '75 KB'}</p>
          </div>
          <a
            href={`${process.env.PUBLIC_URL}${pdfPath}`}
            className="text-brand-primary hover:text-brand-accent flex items-center gap-2 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={handleDownload}
            aria-label={`Télécharger ${title}`}
          >
            <span>Télécharger le PDF</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer; 