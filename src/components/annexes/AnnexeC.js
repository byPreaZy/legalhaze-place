import React from 'react';
import { FaExternalLinkAlt, FaGlobe, FaChartBar, FaChartPie, FaChartLine, FaMapMarkedAlt } from 'react-icons/fa';
import { Bar, Pie, Line } from 'react-chartjs-2';
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

const AnnexeC = () => {
  // Données pour les graphiques
  const donneesStatutLegal = {
    labels: ['Légalisé', 'Médical légalisé', 'Dépénalisé', 'Médical expérimental', 'Illégal'],
    datasets: [
      {
        label: 'Nombre de pays',
        data: [3, 5, 2, 1, 1],
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const donneesEvolution = {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
    datasets: [
      {
        label: 'Pays avec cannabis médical légal',
        data: [5, 7, 10, 15, 25, 35, 45],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Pays avec cannabis récréatif légal',
        data: [0, 0, 2, 3, 5, 8, 12],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const donneesUtilisation = {
    labels: ['Douleur chronique', 'Épilepsie', 'Sclérose en plaques', 'Nausées (chimiothérapie)', 'Anxiété', 'Troubles du sommeil', 'Autres'],
    datasets: [
      {
        label: 'Pourcentage de patients',
        data: [35, 15, 12, 10, 8, 12, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(201, 203, 207, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(201, 203, 207, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const paysReglementations = [
    {
      pays: "Canada",
      statut: "Légalisé",
      details: "Le cannabis est légalisé à des fins récréatives et médicales depuis 2018. Les produits sont réglementés par Santé Canada.",
      conditions: "Les adultes peuvent acheter du cannabis à des fins récréatives. Pour l'usage médical, une prescription est nécessaire.",
      restrictions: "Limite d'âge: 18-19 ans selon la province. Limite de possession: 30g en public. Interdiction de conduire sous l'influence.",
      sources: "https://www.canada.ca/fr/sante-canada/services/drogues-medicaments/cannabis.html",
      dateLegalisation: "2018",
      nombrePatients: "350 000+",
      chiffreAffaires: "4 milliards CAD (2021)",
      references: [
        {
          titre: "Statistiques sur le cannabis au Canada",
          url: "https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2021079-fra.htm"
        },
        {
          titre: "Rapport sur l'industrie du cannabis",
          url: "https://www.canada.ca/fr/sante-canada/services/drogues-medicaments/cannabis/industrie/rapport-industrie.html"
        }
      ]
    },
    {
      pays: "Pays-Bas",
      statut: "Dépénalisé",
      details: "Le cannabis est dépénalisé depuis 1976. La vente est tolérée dans les coffee shops, mais la production reste illégale.",
      conditions: "Les coffee shops peuvent vendre jusqu'à 5g par personne. L'usage personnel est toléré.",
      restrictions: "Interdiction de fumer dans les lieux publics. Limite d'âge: 18 ans. Interdiction de publicité.",
      sources: "https://www.government.nl/topics/drugs/contents/soft-drugs",
      dateLegalisation: "1976",
      nombrePatients: "N/A",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Politique des drogues aux Pays-Bas",
          url: "https://www.emcdda.europa.eu/countries/drug-reports/2021/netherlands_fr"
        }
      ]
    },
    {
      pays: "États-Unis",
      statut: "Variable selon les États",
      details: "Le statut légal varie selon les États. Certains ont légalisé l'usage récréatif et médical, d'autres uniquement médical, et certains maintiennent la prohibition.",
      conditions: "Dans les États où c'est légal, les conditions varient. Généralement, une carte médicale est requise pour l'usage médical.",
      restrictions: "Interdiction fédérale maintenue malgré la légalisation dans certains États. Restrictions sur le transport entre États.",
      sources: "https://www.ncsl.org/research/civil-and-criminal-justice/marijuana-overview.aspx",
      dateLegalisation: "Variable (1996-2022)",
      nombrePatients: "3.5 millions+",
      chiffreAffaires: "25 milliards USD (2021)",
      references: [
        {
          titre: "Statut légal du cannabis par État",
          url: "https://disa.com/map-of-marijuana-legality-by-state"
        },
        {
          titre: "Marché du cannabis aux États-Unis",
          url: "https://www.statista.com/statistics/259858/us-cannabis-market-size/"
        }
      ]
    },
    {
      pays: "Allemagne",
      statut: "Médical légalisé",
      details: "Le cannabis médical est légalisé depuis 2017. L'usage récréatif reste illégal mais est généralement dépénalisé.",
      conditions: "Prescription médicale nécessaire. Remboursement possible par l'assurance maladie dans certains cas.",
      restrictions: "Interdiction de l'usage récréatif. Limite de possession: 6-15g selon les Länder.",
      sources: "https://www.bundesgesundheitsministerium.de/cannabis-als-medizin.html",
      dateLegalisation: "2017",
      nombrePatients: "100 000+",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Rapport sur le cannabis médical en Allemagne",
          url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/C/Cannabis/Cannabis_als_Medizin_Bericht_2021.pdf"
        }
      ]
    },
    {
      pays: "Royaume-Uni",
      statut: "Médical légalisé",
      details: "Le cannabis médical est légalisé depuis 2018, mais l'accès reste très restreint. L'usage récréatif est illégal.",
      conditions: "Prescription médicale nécessaire, mais très peu de prescriptions sont délivrées.",
      restrictions: "Interdiction de l'usage récréatif. Classé comme drogue de classe B.",
      sources: "https://www.gov.uk/government/publications/cannabis-based-products-for-medicinal-use-in-humans",
      dateLegalisation: "2018",
      nombrePatients: "~3 000",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Guide sur les produits à base de cannabis pour usage médical",
          url: "https://www.gov.uk/government/publications/cannabis-based-products-for-medicinal-use-in-humans"
        }
      ]
    },
    {
      pays: "France",
      statut: "Médical expérimental",
      details: "Le cannabis médical est en phase d'expérimentation depuis 2021. L'usage récréatif reste illégal.",
      conditions: "Accès très restreint dans le cadre d'une expérimentation nationale.",
      restrictions: "Interdiction de l'usage récréatif. Possession illégale passible de sanctions pénales.",
      sources: "https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/experimentation-du-cannabis-therapeutique",
      dateLegalisation: "2021 (expérimentation)",
      nombrePatients: "~3 000 (expérimentation)",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Décret relatif à l'expérimentation du cannabis thérapeutique",
          url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043478617"
        }
      ]
    },
    {
      pays: "Australie",
      statut: "Médical légalisé",
      details: "Le cannabis médical est légalisé depuis 2016. L'usage récréatif reste illégal mais est dépénalisé dans certains territoires.",
      conditions: "Prescription médicale nécessaire. Approbation spéciale requise pour certains produits.",
      restrictions: "Interdiction de l'usage récréatif. Restrictions sur l'importation et l'exportation.",
      sources: "https://www.tga.gov.au/medicinal-cannabis",
      dateLegalisation: "2016",
      nombrePatients: "~100 000",
      chiffreAffaires: "150 millions AUD (2021)",
      references: [
        {
          titre: "Rapport sur l'accès au cannabis médical en Australie",
          url: "https://www.tga.gov.au/sites/default/files/medicinal-cannabis-access-report.pdf"
        }
      ]
    },
    {
      pays: "Israël",
      statut: "Médical légalisé",
      details: "Le cannabis médical est légalisé depuis les années 1990. L'usage récréatif est en cours de légalisation progressive.",
      conditions: "Prescription médicale nécessaire. Système de licence pour les patients.",
      restrictions: "Interdiction de l'usage récréatif (en cours de changement). Restrictions sur l'exportation.",
      sources: "https://www.health.gov.il/Services/Pages/medical-cannabis.aspx",
      dateLegalisation: "1990s",
      nombrePatients: "~100 000",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Réglementation du cannabis médical en Israël",
          url: "https://www.health.gov.il/Services/Pages/medical-cannabis.aspx"
        }
      ]
    },
    {
      pays: "Uruguay",
      statut: "Légalisé",
      details: "Premier pays au monde à avoir légalisé le cannabis à des fins récréatives en 2013.",
      conditions: "Les résidents peuvent acheter du cannabis dans les pharmacies ou cultiver jusqu'à 6 plants.",
      restrictions: "Limité aux résidents. Interdiction de publicité. Vente uniquement dans les pharmacies agréées.",
      sources: "https://www.gub.uy/ministerio-salud-publica/comunicacion/noticias/cannabis-uso-medicinal",
      dateLegalisation: "2013",
      nombrePatients: "N/A",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Loi sur la régulation et le contrôle du cannabis",
          url: "https://www.impo.com.uy/bases/leyes/19172-2013"
        }
      ]
    },
    {
      pays: "Portugal",
      statut: "Dépénalisé",
      details: "Toutes les drogues sont dépénalisées depuis 2001. Le cannabis médical est légalisé depuis 2018.",
      conditions: "L'usage personnel est dépénalisé. Le cannabis médical nécessite une prescription.",
      restrictions: "La vente reste illégale. Possession limitée à 25g de cannabis ou 5g de haschisch.",
      sources: "https://www.sicad.pt/PT/Publicacoes/Paginas/default.aspx",
      dateLegalisation: "2001 (dépénalisation), 2018 (médical)",
      nombrePatients: "N/A",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Décriminalisation des drogues au Portugal",
          url: "https://www.emcdda.europa.eu/countries/drug-reports/2021/portugal_fr"
        }
      ]
    },
    {
      pays: "Thaïlande",
      statut: "Médical légalisé",
      details: "Le cannabis médical est légalisé depuis 2018. L'usage récréatif est partiellement dépénalisé depuis 2022.",
      conditions: "Prescription médicale nécessaire pour l'usage médical. Possession et culture à des fins personnelles autorisées.",
      restrictions: "Interdiction de fumer en public. Limite d'âge: 20 ans.",
      sources: "https://www.fda.moph.go.th/sites/drug/SitePages/Medical_Cannabis.aspx",
      dateLegalisation: "2018 (médical), 2022 (dépénalisation partielle)",
      nombrePatients: "N/A",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Réglementation du cannabis en Thaïlande",
          url: "https://www.fda.moph.go.th/sites/drug/SitePages/Medical_Cannabis.aspx"
        }
      ]
    },
    {
      pays: "Mexique",
      statut: "Médical légalisé",
      details: "Le cannabis médical est légalisé depuis 2017. L'usage récréatif est en cours de légalisation.",
      conditions: "Prescription médicale nécessaire. Accès limité aux produits contenant moins de 1% de THC.",
      restrictions: "Interdiction de l'usage récréatif (en cours de changement).",
      sources: "https://www.gob.mx/salud/documentos/reglamento-de-la-ley-general-de-salud-en-materia-de-control-sanitario-de-productos-y-servicios",
      dateLegalisation: "2017 (médical)",
      nombrePatients: "N/A",
      chiffreAffaires: "N/A",
      references: [
        {
          titre: "Loi générale de santé sur le cannabis",
          url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGS_130521.pdf"
        }
      ]
    }
  ];

  const aspectsReglementaires = [
    {
      titre: "Production et Distribution",
      description: "La production et la distribution de cannabis sont généralement soumises à des licences strictes. Les producteurs doivent respecter des normes de qualité et de sécurité.",
      exemples: [
        "Canada: Système de licences pour les producteurs autorisés",
        "Pays-Bas: Système de tolérance pour les coffee shops mais production illégale",
        "États-Unis: Système de licences étatiques avec réglementation stricte"
      ],
      sources: [
        {
          titre: "Réglementation de la production au Canada",
          url: "https://www.canada.ca/fr/sante-canada/services/drogues-medicaments/cannabis/industrie/licences-autorisations.html"
        }
      ]
    },
    {
      titre: "Contrôle Qualité",
      description: "Les produits de cannabis sont soumis à des tests de qualité pour garantir leur innocuité et leur efficacité.",
      exemples: [
        "Tests de pesticides et de contaminants",
        "Analyse des teneurs en cannabinoïdes et terpènes",
        "Étiquetage précis des produits"
      ],
      sources: [
        {
          titre: "Normes de qualité pour le cannabis au Canada",
          url: "https://www.canada.ca/fr/sante-canada/services/drogues-medicaments/cannabis/industrie/reglementation-produits-cannabis/normes-qualite.html"
        }
      ]
    },
    {
      titre: "Prescription et Accès",
      description: "L'accès au cannabis médical est généralement contrôlé par le système de santé.",
      exemples: [
        "Prescription médicale obligatoire",
        "Registre des patients",
        "Limitations sur les quantités prescrites"
      ],
      sources: [
        {
          titre: "Accès au cannabis médical en France",
          url: "https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/experimentation-du-cannabis-therapeutique"
        }
      ]
    },
    {
      titre: "Recherche et Développement",
      description: "La recherche sur le cannabis est soumise à des réglementations spécifiques.",
      exemples: [
        "Autorisations spéciales pour la recherche",
        "Contrôle des substances contrôlées",
        "Protocoles de recherche approuvés"
      ],
      sources: [
        {
          titre: "Recherche sur le cannabis en Israël",
          url: "https://www.health.gov.il/Services/Pages/medical-cannabis-research.aspx"
        }
      ]
    },
    {
      titre: "Commerce International",
      description: "Le commerce international de cannabis est soumis à des restrictions strictes.",
      exemples: [
        "Convention unique sur les stupéfiants de 1961",
        "Accords bilatéraux entre pays",
        "Contrôles aux frontières"
      ],
      sources: [
        {
          titre: "Convention unique sur les stupéfiants",
          url: "https://www.unodc.org/pdf/convention_1961_fr.pdf"
        }
      ]
    }
  ];

  const tendancesReglementaires = [
    {
      titre: "Légalisation progressive",
      description: "De plus en plus de pays légalisent le cannabis à des fins médicales et, dans certains cas, récréatives.",
      exemples: [
        "L'Allemagne prévoit de légaliser le cannabis récréatif d'ici 2024",
        "Le Luxembourg a annoncé des plans de légalisation",
        "Plusieurs États américains ont légalisé le cannabis lors des élections de 2022"
      ],
      sources: [
        {
          titre: "Projet de loi allemand sur la légalisation",
          url: "https://www.bundesgesundheitsministerium.de/cannabis-legalisierung.html"
        }
      ]
    },
    {
      titre: "Harmonisation des normes",
      description: "Les pays qui ont légalisé le cannabis travaillent à harmoniser leurs normes de qualité et de sécurité.",
      exemples: [
        "Développement de normes ISO pour les produits de cannabis",
        "Collaboration internationale sur les méthodes d'analyse",
        "Échange d'informations sur les bonnes pratiques"
      ],
      sources: [
        {
          titre: "Normes ISO pour le cannabis",
          url: "https://www.iso.org/committee/629102.html"
        }
      ]
    },
    {
      titre: "Focus sur les applications thérapeutiques",
      description: "La recherche sur les applications thérapeutiques du cannabis continue de se développer.",
      exemples: [
        "Études cliniques sur l'efficacité du cannabis pour diverses conditions",
        "Développement de nouveaux produits pharmaceutiques à base de cannabis",
        "Intégration du cannabis dans les protocoles de traitement standard"
      ],
      sources: [
        {
          titre: "Recherche clinique sur le cannabis",
          url: "https://clinicaltrials.gov/search?cond=cannabis"
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <FaGlobe className="text-brand-primary dark:text-brand-accent text-2xl" />
          <h3 className="text-xl font-semibold text-brand-primary dark:text-brand-accent">Réglementations et Usage Médical du Cannabis à l'International</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Les réglementations concernant le cannabis varient considérablement d'un pays à l'autre. 
          Cette section présente un aperçu des différentes approches réglementaires à travers le monde, 
          en mettant l'accent sur l'usage médical et les conditions d'accès. Les données sont basées sur 
          des sources officielles et des rapports gouvernementaux récents.
        </p>
        
        {/* Graphiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <FaChartPie className="text-brand-primary dark:text-brand-accent" />
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Statut légal du cannabis par pays</h4>
            </div>
            <Pie 
              data={donneesStatutLegal} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'right',
                  },
                  title: {
                    display: true,
                    text: 'Distribution des statuts légaux'
                  }
                }
              }}
            />
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <FaChartLine className="text-brand-primary dark:text-brand-accent" />
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Évolution de la légalisation</h4>
            </div>
            <Line 
              data={donneesEvolution} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Nombre de pays ayant légalisé le cannabis'
                  }
                }
              }}
            />
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <FaChartBar className="text-brand-primary dark:text-brand-accent" />
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Utilisation médicale du cannabis</h4>
            </div>
            <div className="h-64">
              <Bar 
                data={donneesUtilisation} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: 'Répartition des indications thérapeutiques'
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Tableau des pays */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-brand-primary dark:bg-brand-accent text-white">
              <tr>
                <th className="py-3 px-4 text-left">Pays</th>
                <th className="py-3 px-4 text-left">Statut</th>
                <th className="py-3 px-4 text-left">Date de légalisation</th>
                <th className="py-3 px-4 text-left">Patients</th>
                <th className="py-3 px-4 text-left">Sources</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {paysReglementations.map((pays, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{pays.pays}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{pays.statut}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{pays.dateLegalisation}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{pays.nombrePatients}</td>
                  <td className="py-3 px-4">
                    <a 
                      href={pays.sources} 
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
        
        {/* Détails des pays */}
        <div className="space-y-6">
          {paysReglementations.map((pays, index) => (
            <div key={index} className="border-l-4 border-brand-primary pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white text-lg">{pays.pays}</h4>
              <div className="mt-2">
                <p className="text-sm font-medium text-brand-primary dark:text-brand-accent">Statut: {pays.statut}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{pays.details}</p>
                <div className="mt-2 text-sm">
                  <p><span className="font-medium">Conditions:</span> {pays.conditions}</p>
                  <p><span className="font-medium">Restrictions:</span> {pays.restrictions}</p>
                  <p><span className="font-medium">Date de légalisation:</span> {pays.dateLegalisation}</p>
                  <p><span className="font-medium">Nombre de patients:</span> {pays.nombrePatients}</p>
                  {pays.chiffreAffaires !== "N/A" && (
                    <p><span className="font-medium">Chiffre d'affaires:</span> {pays.chiffreAffaires}</p>
                  )}
                </div>
                <div className="mt-2">
                  <p className="font-medium text-sm">Sources:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>
                      <a 
                        href={pays.sources} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-primary hover:text-brand-accent underline transition-colors"
                      >
                        Source officielle <FaExternalLinkAlt className="inline ml-1 text-xs" />
                      </a>
                    </li>
                    {pays.references && pays.references.map((ref, idx) => (
                      <li key={idx}>
                        <a 
                          href={ref.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-primary hover:text-brand-accent underline transition-colors"
                        >
                          {ref.titre} <FaExternalLinkAlt className="inline ml-1 text-xs" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <FaChartBar className="text-brand-primary dark:text-brand-accent text-2xl" />
          <h3 className="text-xl font-semibold text-brand-primary dark:text-brand-accent">Aspects Réglementaires Clés</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Au-delà des différences entre pays, plusieurs aspects réglementaires sont communs à la plupart des juridictions 
          qui ont légalisé ou dépénalisé le cannabis. Voici les principaux aspects à considérer.
        </p>
        
        <div className="space-y-6">
          {aspectsReglementaires.map((aspect, index) => (
            <div key={index} className="border-l-4 border-brand-primary pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white text-lg">{aspect.titre}</h4>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{aspect.description}</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                {aspect.exemples.map((exemple, idx) => (
                  <li key={idx}>{exemple}</li>
                ))}
              </ul>
              {aspect.sources && (
                <div className="mt-2">
                  <p className="font-medium text-sm">Sources:</p>
                  <ul className="list-disc list-inside text-sm">
                    {aspect.sources.map((source, idx) => (
                      <li key={idx}>
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-primary hover:text-brand-accent underline transition-colors"
                        >
                          {source.titre} <FaExternalLinkAlt className="inline ml-1 text-xs" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <FaMapMarkedAlt className="text-brand-primary dark:text-brand-accent text-2xl" />
          <h3 className="text-xl font-semibold text-brand-primary dark:text-brand-accent">Évolution des Réglementations</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Les réglementations concernant le cannabis évoluent rapidement dans de nombreux pays. 
          Voici les principales tendances observées:
        </p>
        
        <div className="space-y-6">
          {tendancesReglementaires.map((tendance, index) => (
            <div key={index} className="border-l-4 border-brand-primary pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white text-lg">{tendance.titre}</h4>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{tendance.description}</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                {tendance.exemples.map((exemple, idx) => (
                  <li key={idx}>{exemple}</li>
                ))}
              </ul>
              {tendance.sources && (
                <div className="mt-2">
                  <p className="font-medium text-sm">Sources:</p>
                  <ul className="list-disc list-inside text-sm">
                    {tendance.sources.map((source, idx) => (
                      <li key={idx}>
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-primary hover:text-brand-accent underline transition-colors"
                        >
                          {source.titre} <FaExternalLinkAlt className="inline ml-1 text-xs" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-brand-primary bg-opacity-10 dark:bg-brand-accent dark:bg-opacity-10 rounded-lg">
          <h4 className="font-semibold text-brand-primary dark:text-brand-accent mb-2">Perspectives d'Avenir</h4>
          <p className="text-gray-700 dark:text-gray-300">
            L'évolution des réglementations devrait se poursuivre, avec une tendance générale vers une approche plus 
            pragmatique basée sur des preuves scientifiques. La recherche continue sur les applications thérapeutiques 
            du cannabis pourrait conduire à une acceptation plus large et à des réglementations plus cohérentes à l'échelle internationale.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Les organisations internationales comme l'Organisation mondiale de la santé (OMS) et l'Office des Nations unies contre la drogue et le crime (ONUDC) 
            jouent un rôle croissant dans l'harmonisation des approches réglementaires, tout en respectant les spécificités nationales.
          </p>
          <div className="mt-4">
            <p className="font-medium text-sm">Sources additionnelles:</p>
            <ul className="list-disc list-inside text-sm">
              <li>
                <a 
                  href="https://www.who.int/fr/news-room/fact-sheets/detail/cannabis-(marijuana)" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-brand-accent underline transition-colors"
                >
                  OMS - Fiche d'information sur le cannabis <FaExternalLinkAlt className="inline ml-1 text-xs" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.unodc.org/unodc/fr/data-and-analysis/bulletin/bulletin_2021_1.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-brand-accent underline transition-colors"
                >
                  ONUDC - Rapport mondial sur les drogues 2021 <FaExternalLinkAlt className="inline ml-1 text-xs" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnexeC; 