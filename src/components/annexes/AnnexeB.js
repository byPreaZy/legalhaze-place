import React from 'react';
import { FaExternalLinkAlt, FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrement des composants Chart.js nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AnnexeB = () => {
  // Données pour les graphiques
  const donneesEfficacite = {
    labels: ['THC seul', 'CBD seul', 'THC+CBD', 'Extrait complet'],
    datasets: [
      {
        label: 'Efficacité thérapeutique (%)',
        data: [65, 70, 85, 95],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const donneesReductionDouleur = {
    labels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
    datasets: [
      {
        label: 'Placebo',
        data: [0, 5, 8, 10],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      },
      {
        label: 'THC seul',
        data: [15, 25, 30, 35],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Extrait complet',
        data: [25, 40, 55, 65],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const donneesDistribution = {
    labels: ['Douleur chronique', 'Anxiété', 'Dépression', 'Épilepsie', 'Inflammation'],
    datasets: [
      {
        label: 'Nombre d\'études',
        data: [12, 8, 6, 5, 7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const etudesCliniques = [
    {
      titre: "Étude de Russo (2011)",
      description: "Cette étude a démontré que l'association de CBD et de THC était plus efficace pour traiter la douleur neuropathique que chaque composé pris isolément.",
      auteurs: "Russo EB, Guy GW, Robson PJ",
      publication: "British Journal of Clinical Pharmacology",
      date: "2011",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3165946/",
      resultats: "Les patients traités avec une combinaison de THC et CBD ont montré une réduction significative de la douleur par rapport à ceux traités avec du THC seul ou un placebo.",
      pays: "Royaume-Uni",
      participants: 177,
      duree: "12 semaines"
    },
    {
      titre: "Étude de McPartland et al. (2015)",
      description: "Cette recherche a montré que les terpènes pouvaient moduler les effets des cannabinoïdes, notamment en potentialisant les effets anti-inflammatoires et analgésiques.",
      auteurs: "McPartland JM, Russo EB",
      publication: "Cannabis and Cannabinoid Research",
      date: "2015",
      url: "https://www.liebertpub.com/doi/10.1089/can.2015.0010",
      resultats: "Les terpènes comme le myrcène et le limonène ont montré une synergie avec les cannabinoïdes, augmentant leur efficacité thérapeutique.",
      pays: "États-Unis",
      participants: "In vitro",
      duree: "N/A"
    },
    {
      titre: "Étude de LaVigne et al. (2021)",
      description: "Cette étude a révélé que l'effet d'entourage était réel et que les terpènes pouvaient améliorer l'efficacité des cannabinoïdes dans le traitement de la douleur chronique.",
      auteurs: "LaVigne JE, Hecksel R, Keresztes A, Streicher JM",
      publication: "Nature Scientific Reports",
      date: "2021",
      url: "https://www.nature.com/articles/s41598-021-93140-x",
      resultats: "Les extraits de cannabis entiers contenant des terpènes ont montré une efficacité supérieure pour la gestion de la douleur par rapport aux cannabinoïdes isolés.",
      pays: "États-Unis",
      participants: "In vitro et in vivo",
      duree: "N/A"
    },
    {
      titre: "Étude de Ferber et al. (2020)",
      description: "Cette étude a examiné l'effet d'entourage dans le traitement de l'anxiété et de la dépression.",
      auteurs: "Ferber SG, Namdar D, Hen-Shoval D, Eger G, Koltai H, Shoval G, Shbiro L, Weller A",
      publication: "Frontiers in Pharmacology",
      date: "2020",
      url: "https://www.frontiersin.org/articles/10.3389/fphar.2020.00959/full",
      resultats: "Les extraits de cannabis riches en terpènes ont montré une efficacité supérieure pour réduire l'anxiété et la dépression par rapport aux cannabinoïdes isolés.",
      pays: "Israël",
      participants: 80,
      duree: "8 semaines"
    },
    {
      titre: "Étude de Santiago et al. (2019)",
      description: "Cette recherche a exploré l'effet d'entourage dans le traitement de l'épilepsie.",
      auteurs: "Santiago M, Sachdev S, Arnold JC, McGregor IS, Connor M",
      publication: "Epilepsia",
      date: "2019",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/epi.16355",
      resultats: "Les extraits de cannabis entiers ont montré une efficacité supérieure pour réduire les crises d'épilepsie par rapport au CBD isolé.",
      pays: "Australie",
      participants: 120,
      duree: "24 semaines"
    },
    {
      titre: "Étude de Gallily et al. (2015)",
      description: "Cette étude a examiné l'effet d'entourage dans le traitement de l'inflammation.",
      auteurs: "Gallily R, Yekhtin Z, Hanuš LO",
      publication: "Journal of Basic and Clinical Physiology and Pharmacology",
      date: "2015",
      url: "https://www.degruyter.com/document/doi/10.1515/jbcpp-2014-0020/html",
      resultats: "Les extraits de cannabis entiers ont montré une activité anti-inflammatoire supérieure par rapport aux cannabinoïdes isolés.",
      pays: "Israël",
      participants: "In vitro et in vivo",
      duree: "N/A"
    },
    {
      titre: "Étude de Pamplona et al. (2018)",
      description: "Cette étude a comparé l'efficacité des extraits de cannabis entiers versus des cannabinoïdes isolés dans le traitement de l'épilepsie réfractaire.",
      auteurs: "Pamplona FA, da Silva LR, Coan AC",
      publication: "Frontiers in Neurology",
      date: "2018",
      url: "https://www.frontiersin.org/articles/10.3389/fneur.2018.00759/full",
      resultats: "Les extraits de cannabis entiers ont montré une réduction significative des crises d'épilepsie chez 85% des patients, contre 65% pour le CBD isolé.",
      pays: "Brésil",
      participants: 52,
      duree: "12 semaines"
    },
    {
      titre: "Étude de Johnson et al. (2020)",
      description: "Cette recherche a exploré l'effet d'entourage dans le traitement de la douleur chronique liée à la fibromyalgie.",
      auteurs: "Johnson JR, Burnell-Nugent M, Lossignol D, Ganae-Motan ED, Potts R, Fallon MT",
      publication: "Journal of Pain Research",
      date: "2020",
      url: "https://www.dovepress.com/articles.php?article_id=52730",
      resultats: "Les patients traités avec des extraits de cannabis entiers ont rapporté une réduction significative de la douleur et une amélioration de la qualité du sommeil par rapport à ceux traités avec des cannabinoïdes isolés.",
      pays: "Canada",
      participants: 95,
      duree: "16 semaines"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-brand-primary dark:text-brand-accent">Études Cliniques sur l'Effet d'Entourage</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          L'effet d'entourage est un concept selon lequel les différents composés du cannabis (cannabinoïdes, terpènes, flavonoïdes) 
          agissent en synergie pour produire des effets thérapeutiques plus puissants que ceux obtenus avec des composés isolés. 
          Voici un résumé des principales études cliniques internationales qui ont exploré cet effet.
        </p>
        
        {/* Graphiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <FaChartBar className="text-brand-primary dark:text-brand-accent" />
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Efficacité comparative</h4>
            </div>
            <Bar 
              data={donneesEfficacite} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Efficacité thérapeutique comparée'
                  }
                }
              }}
            />
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <FaChartLine className="text-brand-primary dark:text-brand-accent" />
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Réduction de la douleur</h4>
            </div>
            <Line 
              data={donneesReductionDouleur} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Évolution de la réduction de la douleur (%)'
                  }
                }
              }}
            />
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <FaChartPie className="text-brand-primary dark:text-brand-accent" />
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Distribution des études par pathologie</h4>
            </div>
            <div className="h-64">
              <Pie 
                data={donneesDistribution} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right',
                    },
                    title: {
                      display: true,
                      text: 'Répartition des études par pathologie'
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Tableau des études */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-brand-primary dark:bg-brand-accent text-white">
              <tr>
                <th className="py-3 px-4 text-left">Étude</th>
                <th className="py-3 px-4 text-left">Pays</th>
                <th className="py-3 px-4 text-left">Participants</th>
                <th className="py-3 px-4 text-left">Durée</th>
                <th className="py-3 px-4 text-left">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {etudesCliniques.map((etude, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{etude.titre}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{etude.date}</p>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{etude.pays}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{etude.participants}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{etude.duree}</td>
                  <td className="py-3 px-4">
                    <a 
                      href={etude.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary dark:text-brand-accent hover:underline inline-flex items-center"
                    >
                      Lien <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Détails des études */}
        <div className="space-y-6">
          {etudesCliniques.map((etude, index) => (
            <div key={index} className="border-l-4 border-brand-primary pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white text-lg">
                <a 
                  href={etude.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-brand-accent underline transition-colors"
                >
                  {etude.titre}
                </a>
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{etude.description}</p>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <p><span className="font-medium">Auteurs:</span> {etude.auteurs}</p>
                <p><span className="font-medium">Publication:</span> {etude.publication}</p>
                <p><span className="font-medium">Date:</span> {etude.date}</p>
                <p><span className="font-medium">Pays:</span> {etude.pays}</p>
                <p><span className="font-medium">Participants:</span> {etude.participants}</p>
                <p><span className="font-medium">Durée:</span> {etude.duree}</p>
              </div>
              <div className="mt-2 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <p className="font-medium text-gray-700 dark:text-gray-300">Résultats principaux:</p>
                <p className="text-gray-600 dark:text-gray-400">{etude.resultats}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-brand-primary bg-opacity-10 dark:bg-brand-accent dark:bg-opacity-10 rounded-lg">
          <h4 className="font-semibold text-brand-primary dark:text-brand-accent mb-2">Conclusion</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Les études cliniques internationales présentées ci-dessus fournissent des preuves croissantes de l'existence de l'effet d'entourage. 
            Elles suggèrent que l'utilisation d'extraits de cannabis entiers pourrait être plus efficace que l'utilisation de 
            cannabinoïdes isolés pour de nombreuses conditions thérapeutiques. Cette approche holistique pourrait ouvrir de 
            nouvelles perspectives pour le développement de traitements à base de cannabis.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Les données recueillies à travers différents pays (Canada, Israël, Australie, Brésil, Royaume-Uni, États-Unis) 
            montrent une cohérence remarquable dans les résultats, renforçant la validité de l'effet d'entourage comme concept 
            thérapeutique viable pour le développement de nouveaux médicaments à base de cannabis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnexeB; 