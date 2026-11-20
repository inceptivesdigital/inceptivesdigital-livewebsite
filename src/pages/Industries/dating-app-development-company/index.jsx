import React, { useEffect } from 'react';
import DatingHero from './components/DatingHero';
import DatingStatsBar from './components/DatingStatsBar';
import DatingSmartInvestment from './components/DatingSmartInvestment';
import DatingClientLogos from './components/DatingClientLogos';
import DatingCta1 from './components/DatingCta1';
import DatingServicesGrid from './components/DatingServicesGrid';
import DatingInnovativeFeatures from './components/DatingInnovativeFeatures';
import DatingCaseStudies from './components/DatingCaseStudies';
import DatingTestimonials from './components/DatingTestimonials';
import DatingCta2 from './components/DatingCta2';
import DatingProcess from './components/DatingProcess';
import DatingRelationshipTypes from './components/DatingRelationshipTypes';
import DatingTechStack from './components/DatingTechStack';
import DatingWhyChooseUs from './components/DatingWhyChooseUs';
import DatingCta3 from './components/DatingCta3';
import DatingCostSection from './components/DatingCostSection';
import DatingAwards from './components/DatingAwards';
import DatingFaqs from './components/DatingFaqs';

export default function DatingAppDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Dating App Development Company | Inceptives Digital';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Trusted dating app development company delivering advanced dating app development services to build secure and interactive platforms for meaningful connections.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href =
      'https://inceptivesdigital.com/dating-app-development-company';
  }, []);

  return (
    <div className="w-full bg-[#151515] text-white min-h-screen overflow-x-hidden selection:bg-[#00CE44] selection:text-black">
      <DatingHero />
      <DatingStatsBar />
      <DatingSmartInvestment />
      <DatingClientLogos />
      <DatingCta1 />
      <DatingServicesGrid />
      <DatingInnovativeFeatures />
      <DatingCaseStudies />
      <DatingTestimonials />
      <DatingCta2 />
      <DatingProcess />
      <DatingRelationshipTypes />
      <DatingTechStack />
      <DatingWhyChooseUs />
      <DatingCta3 />
      <DatingCostSection />
      <DatingAwards />
      <DatingFaqs />
    </div>
  );
}
