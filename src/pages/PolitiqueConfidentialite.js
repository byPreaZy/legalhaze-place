import React from 'react';
import { Helmet } from 'react-helmet-async';

const PolitiqueConfidentialite = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Politique de confidentialité | LegalHaze</title>
        <meta name="description" content="Politique de confidentialité du site LegalHaze, développé par Clere Kévin (PreaZy) - Clere'ly design" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Politique de confidentialité</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          Cette politique de confidentialité explique comment LegalHaze, développé par Clere Kévin (PreaZy) - Clere'ly design, collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site web.
        </p>
        <p>
          Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles de manière transparente et sécurisée, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Collecte des données</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Données collectées automatiquement</h3>
        <p>
          Lors de votre visite sur notre site, nous collectons automatiquement certaines informations :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Adresse IP</li>
          <li>Type de navigateur</li>
          <li>Système d'exploitation</li>
          <li>Pages visitées</li>
          <li>Date et heure de visite</li>
          <li>Temps passé sur le site</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.2 Données que vous nous fournissez</h3>
        <p>
          Nous collectons les informations que vous nous fournissez volontairement lorsque vous :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Créez un compte</li>
          <li>Vous abonnez à notre newsletter</li>
          <li>Nous contactez via notre formulaire de contact</li>
          <li>Partagez du contenu sur notre site</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Utilisation des données</h2>
        <p>
          Nous utilisons vos données personnelles pour :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Améliorer votre expérience utilisateur</li>
          <li>Personnaliser le contenu que nous vous présentons</li>
          <li>Vous envoyer des communications importantes concernant notre service</li>
          <li>Analyser l'utilisation de notre site pour l'améliorer</li>
          <li>Assurer la sécurité de notre site</li>
          <li>Respecter nos obligations légales</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Protection des données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Droit d'accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit d'opposition</li>
        </ul>
        <p>
          Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : clerelydesign@gmail.com
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre page <a href="/cookies" className="text-green-600 dark:text-green-400 hover:underline">Gestion des cookies</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications de la politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur notre site. Nous vous encourageons à consulter régulièrement cette page pour rester informé des changements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité ou vos données personnelles, vous pouvez nous contacter à :
        </p>
        <p>
          Clere Kévin (PreaZy)<br />
          Clere'ly design<br />
          Email : clerelydesign@gmail.com<br />
          Site web : www.clerely-design.fr
        </p>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite; 