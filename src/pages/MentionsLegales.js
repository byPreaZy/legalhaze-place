import React from 'react';
import { Helmet } from 'react-helmet-async';

const MentionsLegales = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Mentions légales | LegalHaze</title>
        <meta name="description" content="Mentions légales du site LegalHaze, développé par Clere Kévin (PreaZy) - Clere'ly design" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Mentions légales</h1>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informations légales</h2>
        <p>
          Le site LegalHaze est édité par :
        </p>
        <p>
          <strong>Clere Kévin (PreaZy)</strong><br />
          Auto-entrepreneur<br />
          Société : Clere'ly design<br />
          Adresse : [Votre adresse]<br />
          Email : clerelydesign@gmail.com<br />
          Site web : www.clerely-design.fr<br />
          SIRET : [Votre numéro SIRET]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hébergement</h2>
        <p>
          Ce site est hébergé par :<br />
          [Nom de l'hébergeur]<br />
          [Adresse de l'hébergeur]<br />
          [Téléphone de l'hébergeur]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Propriété intellectuelle</h2>
        <p>
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
        <p>
          La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de Clere Kévin (PreaZy).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Protection des données personnelles</h2>
        <p>
          Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
        </p>
        <p>
          Pour exercer ce droit, veuillez nous contacter par email à contact@clere-ly-design.fr.
        </p>
        <p>
          Aucune information personnelle n'est collectée à votre insu. Aucune information personnelle n'est cédée à des tiers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
        <p>
          Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
        </p>
        <p>
          Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre page <a href="/cookies" className="text-green-600 dark:text-green-400 hover:underline">Gestion des cookies</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Liens externes</h2>
        <p>
          Le site LegalHaze peut contenir des liens vers d'autres sites. Clere Kévin (PreaZy) n'est pas responsable du contenu des sites vers lesquels des liens sont établis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Crédits</h2>
        <p>
          Site développé par Clere Kévin (PreaZy) - Clere'ly design<br />
          © {new Date().getFullYear()} LegalHaze - Tous droits réservés
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales; 