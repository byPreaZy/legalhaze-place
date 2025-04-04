import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { FaFilePdf } from 'react-icons/fa';

const PdfExport = ({ contentId, fileName, buttonText = "Exporter en PDF" }) => {
  const exportToPdf = async () => {
    try {
      const element = document.getElementById(contentId);
      if (!element) {
        console.error(`Élément avec l'ID ${contentId} non trouvé`);
        return;
      }

      // Configuration de html2canvas pour une meilleure qualité
      const canvas = await html2canvas(element, {
        scale: 2, // Meilleure qualité
        useCORS: true, // Pour les images externes
        logging: false, // Désactive les logs
        backgroundColor: '#ffffff', // Fond blanc
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      // Création du PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Calcul des dimensions pour s'adapter à la page A4
      const imgWidth = 210; // Largeur A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Ajout de l'image au PDF
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

      // Si le contenu dépasse une page, ajouter des pages supplémentaires
      let heightLeft = imgHeight;
      let position = 0;
      const pageHeight = 297; // Hauteur A4 en mm

      while (heightLeft > pageHeight) {
        position = heightLeft - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, -position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Sauvegarde du PDF
      pdf.save(`${fileName || 'document'}.pdf`);
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
    }
  };

  return (
    <button
      onClick={exportToPdf}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
      aria-label="Exporter en PDF"
    >
      <FaFilePdf className="text-lg" />
      <span>{buttonText}</span>
    </button>
  );
};

export default PdfExport; 