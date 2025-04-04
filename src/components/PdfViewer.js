import React, { useState } from 'react';

const PdfViewer = ({ pdfPath, title }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setError("Impossible de charger le PDF. Veuillez réessayer ou télécharger le document.");
    setLoading(false);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="bg-white p-4 rounded-lg shadow">
        {loading && (
          <div className="flex justify-center items-center h-[600px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
          </div>
        )}
        {error && (
          <div className="flex flex-col items-center justify-center h-[600px] text-red-600">
            <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        />
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <p>Conseil : Utilisez le bouton de téléchargement pour une meilleure expérience de lecture.</p>
          </div>
          <a
            href={`${process.env.PUBLIC_URL}${pdfPath}`}
            className="text-brand-primary hover:text-brand-accent flex items-center gap-2 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span>Télécharger le PDF</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer; 