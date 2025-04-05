const fs = require('fs');
const path = require('path');

// Fonction pour supprimer un dossier vide
function removeEmptyDirectory(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);
    
    if (files.length === 0) {
      fs.rmdirSync(directoryPath);
      console.log(`Dossier vide supprimé: ${directoryPath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Erreur lors de la suppression du dossier ${directoryPath}:`, error);
    return false;
  }
}

// Dossiers à vérifier
const directoriesToCheck = [
  'src/hooks',
  'src/contexts'
];

// Supprimer les dossiers vides
directoriesToCheck.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    removeEmptyDirectory(fullPath);
  }
});

console.log('Nettoyage terminé!'); 