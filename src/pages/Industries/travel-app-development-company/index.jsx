import React, { useEffect } from 'react';
import TravelHero from './components/TravelHero';
import TravelStatsBar from './components/TravelStatsBar';
import TravelIntroCta from './components/TravelIntroCta';
import TravelServicesGrid from './components/TravelServicesGrid';
import TravelClientLogos from './components/TravelClientLogos';
import TravelFeaturesTabs from './components/TravelFeaturesTabs';
import TravelCaseStudies from './components/TravelCaseStudies';
import TravelTestimonials from './components/TravelTestimonials';
import TravelCta2 from './components/TravelCta2';
import TravelProcess from './components/TravelProcess';
import TravelTechStack from './components/TravelTechStack';
import TravelEmergingTech from './components/TravelEmergingTech';
import TravelCostSection from './components/TravelCostSection';
import TravelWhyChooseUs from './components/TravelWhyChooseUs';
import TravelAwards from './components/TravelAwards';
import TravelCta3 from './components/TravelCta3';
import TravelFaqs from './components/TravelFaqs';

export default function TravelAppDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Travel App Development Company | Inceptives Digital';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'We are a top travel app development company, crafting innovative travel mobile app development solutions for seamless and personalized journeys.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href =
      'https://inceptivesdigital.com/travel-app-development-company';
  }, []);

  return (
    <div className="w-full bg-[#151515] text-white min-h-screen overflow-x-hidden selection:bg-[#00CE44] selection:text-black">
      <TravelHero />
      <TravelStatsBar />
      <TravelIntroCta />
      <TravelServicesGrid />
      <TravelClientLogos />
      <TravelFeaturesTabs />
      <TravelCaseStudies />
      <TravelTestimonials />
      <TravelCta2 />
      <TravelProcess />
      <TravelTechStack />
      <TravelEmergingTech />
      <TravelCostSection />
      <TravelWhyChooseUs />
      <TravelAwards />
      <TravelCta3 />
      <TravelFaqs />
    </div>
  );
}
