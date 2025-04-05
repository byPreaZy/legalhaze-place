import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ReferencesSection = ({ trackInteraction }) => {
  const references = [
    {
      title: "Cannabis sativa terpenes are cannabimimetic and selectively enhance cannabinoid activity",
      url: "https://www.nature.com/articles/s41598-018-22749-2"
    },
    {
      title: "The \"Entourage Effect\": Terpenes Coupled with Cannabinoids for the Treatment of Mood Disorders and Anxiety Disorders",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6334253/"
    },
    {
      title: "Cannabis Terpenes & The Entourage Effect",
      url: "https://www.leafly.com/learn/cannabis-glossary/entourage-effect"
    },
    {
      title: "The Entourage Effect: Potential Synergy Between Cannabinoids & Terpenes",
      url: "https://www.projectcbd.org/science/cannabis-pharmacology/entourage-effect"
    },
    {
      title: "Cannabinoids and Terpenes: How Do They Work?",
      url: "https://www.projectcbd.org/science/cannabis-pharmacology/cannabinoids-terpenes-and-the-effects-of-cannabis"
    },
    {
      title: "The Therapeutic Potential of Cannabis and Cannabinoids",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3358713/"
    },
    {
      title: "Cannabinoids and Terpenes: An Overview of Their Interactions and Effects",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3165946/"
    },
    {
      title: "Cannabinoid and Terpene Profiles of Cannabis",
      url: "https://jcannabisresearch.biomedcentral.com/articles/10.1186/s42238-020-00070-w"
    },
    {
      title: "The Role of Terpenes in Cannabis",
      url: "https://www.liebertpub.com/doi/10.1089/can.2019.0010"
    },
    {
      title: "Cannabinoids and Terpenes: How They Work Together",
      url: "https://steephill.com/cannabinoids-and-terpenes-how-they-work-together/"
    }
  ];

  return (
    <section 
      id="references" 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Références</h2>
      <div className="prose max-w-none">
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {references.map((ref, index) => (
            <li key={index} className="flex items-start">
              <span className="text-brand-primary mr-2">•</span>
              <a 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-accent underline transition-colors"
                onClick={() => trackInteraction && trackInteraction('click', 'reference-' + index)}
              >
                {ref.title}
                <FaExternalLinkAlt className="ml-1 inline" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReferencesSection; 