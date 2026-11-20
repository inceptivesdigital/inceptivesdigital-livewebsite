import React, { useEffect } from 'react';
import RealEstateHero from './components/RealEstateHero';
import RealEstateStatsBar from './components/RealEstateStatsBar';
import RealEstateSegments from './components/RealEstateSegments';
import RealEstateCta1 from './components/RealEstateCta1';
import RealEstateServicesGrid from './components/RealEstateServicesGrid';
import RealEstateKeyFeatures from './components/RealEstateKeyFeatures';
import RealEstateCuttingEdgeFeatures from './components/RealEstateCuttingEdgeFeatures';
import RealEstateCaseStudies from './components/RealEstateCaseStudies';
import RealEstateTestimonials from './components/RealEstateTestimonials';
import RealEstateCta2 from './components/RealEstateCta2';
import RealEstateProcess from './components/RealEstateProcess';
import RealEstateTechStack from './components/RealEstateTechStack';
import RealEstateEmergingTech from './components/RealEstateEmergingTech';
import RealEstateCostSection from './components/RealEstateCostSection';
import RealEstateWhyChooseUs from './components/RealEstateWhyChooseUs';
import RealEstateCta3 from './components/RealEstateCta3';
import RealEstateAwards from './components/RealEstateAwards';
import RealEstateFaqs from './components/RealEstateFaqs';

export default function RealEstateAppDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Real Estate App Development Company | Inceptives Digital';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Inceptives Digital is a real estate app development company that provides custom real estate app development to simplify property management and listings.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href =
      'https://inceptivesdigital.com/real-estate-app-development-company';
  }, []);

  return (
    <div className="w-full bg-[#151515] text-white min-h-screen overflow-x-hidden selection:bg-[#00CE44] selection:text-black">
      <RealEstateHero />
      <RealEstateStatsBar />
      <RealEstateSegments />
      <RealEstateCta1 />
      <RealEstateServicesGrid />
      <RealEstateKeyFeatures />
      <RealEstateCuttingEdgeFeatures />
      <RealEstateCaseStudies />
      <RealEstateTestimonials />
      <RealEstateCta2 />
      <RealEstateProcess />
      <RealEstateTechStack />
      <RealEstateEmergingTech />
      <RealEstateCostSection />
      <RealEstateWhyChooseUs />
      <RealEstateCta3 />
      <RealEstateAwards />
      <RealEstateFaqs />
    </div>
  );
}
