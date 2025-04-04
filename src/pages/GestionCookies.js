import React from 'react';
import { Helmet } from 'react-helmet-async';

const GestionCookies = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Gestion des cookies | LegalHaze</title>
        <meta name="description" content="Politique de gestion des cookies du site LegalHaze, développé par Clere Kévin (PreaZy) - Clere'ly design" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Gestion des cookies</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site web. Il permet au site de mémoriser vos actions et préférences (identifiant de connexion, langue, taille des caractères et autres paramètres d'affichage) pendant une durée déterminée.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Les cookies que nous utilisons</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Cookies essentiels</h3>
        <p>
          Ces cookies sont nécessaires au fonctionnement du site. Ils permettent d'utiliser les principales fonctionnalités du site (par exemple, l'accès à votre compte). Sans ces cookies, vous ne pourriez pas utiliser le site normalement.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.2 Cookies de performance</h3>
        <p>
          Ces cookies nous permettent de connaître l'utilisation et les performances du site et d'en améliorer le fonctionnement (par exemple, les pages les plus visitées, les erreurs éventuelles...).
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.3 Cookies de fonctionnalité</h3>
        <p>
          Ces cookies permettent d'améliorer et de personnaliser les fonctionnalités du site. Ils peuvent être définis par nous ou par des tiers dont nous avons ajouté les services à nos pages.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.4 Cookies de ciblage</h3>
        <p>
          Ces cookies sont utilisés pour vous proposer des publicités plus pertinentes. Ils permettent aussi de limiter le nombre d'affichages d'une publicité et d'aider à mesurer l'efficacité des campagnes publicitaires.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Durée de conservation des cookies</h2>
        <p>
          Les cookies que nous utilisons ont une durée de vie limitée :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cookies de session : ils expirent à la fermeture du navigateur</li>
          <li>Cookies persistants : ils restent sur votre terminal pendant une durée déterminée</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Comment gérer les cookies ?</h2>
        <p>
          Vous pouvez à tout moment choisir de désactiver ces cookies. Vous pouvez accepter ou refuser les cookies au cas par cas ou bien les refuser systématiquement.
        </p>
        <p>
          Pour gérer les cookies et vos choix : 
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chrome : Menu → Paramètres → Confidentialité et sécurité → Cookies et autres données des sites</li>
          <li>Firefox : Menu → Options → Vie privée & Sécurité → Cookies et données des sites</li>
          <li>Safari : Préférences → Confidentialité → Cookies et données de sites web</li>
          <li>Edge : Menu → Paramètres → Cookies et autorisations des sites</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Que se passe-t-il si vous refusez les cookies ?</h2>
        <p>
          Si vous refusez les cookies, certaines fonctionnalités du site pourraient être limitées ou indisponibles. Par exemple :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Impossibilité de vous connecter à votre compte</li>
          <li>Impossibilité de personnaliser votre expérience</li>
          <li>Certaines fonctionnalités du site pourraient ne pas fonctionner correctement</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modifications de la politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de gestion des cookies à tout moment. Les modifications prendront effet dès leur publication sur notre site. Nous vous encourageons à consulter régulièrement cette page pour rester informé des changements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
        <p>
          Pour toute question concernant notre politique de gestion des cookies, vous pouvez nous contacter à :
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

export default GestionCookies; 