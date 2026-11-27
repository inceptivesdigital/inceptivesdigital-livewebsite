import React, { useEffect } from 'react';
import FoodDeliveryHero from './components/FoodDeliveryHero';
import FoodDeliveryStatsBar from './components/FoodDeliveryStatsBar';
import FoodDeliveryCapabilities from './components/FoodDeliveryCapabilities';
import FoodDeliveryServicesGrid from './components/FoodDeliveryServicesGrid';
import FoodDeliveryCta1 from './components/FoodDeliveryCta1';
import FoodDeliveryKeyFeatures from './components/FoodDeliveryKeyFeatures';
import FoodDeliveryEfficiency from './components/FoodDeliveryEfficiency';
import FoodDeliveryProcess from './components/FoodDeliveryProcess';
import FoodDeliveryTechStack from './components/FoodDeliveryTechStack';
import FoodDeliveryEmergingTech from './components/FoodDeliveryEmergingTech';
import FoodDeliveryCta2 from './components/FoodDeliveryCta2';
import FoodDeliverySmartMove from './components/FoodDeliverySmartMove';
import FoodDeliveryCostSection from './components/FoodDeliveryCostSection';
import FoodDeliveryWhyChooseUs from './components/FoodDeliveryWhyChooseUs';
import FoodDeliveryAwards from './components/FoodDeliveryAwards';
import FoodDeliveryCta3 from './components/FoodDeliveryCta3';
import FoodDeliveryFaqs from './components/FoodDeliveryFaqs';

export default function FoodDeliveryAppDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Food Delivery App Development Company | Inceptives Digital';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Inceptives Digital, a premier food delivery app development company, crafts apps that streamline operations, increase orders, and delight users.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href =
      'https://inceptivesdigital.com/food-delivery-app-development';
  }, []);

  return (
    <div className="w-full bg-[#151515] text-white min-h-screen overflow-x-hidden selection:bg-[#00CE44] selection:text-black">
      <FoodDeliveryHero />
      <FoodDeliveryStatsBar />
      <FoodDeliveryCapabilities />
      <FoodDeliveryServicesGrid />
      <FoodDeliveryCta1 />
      <FoodDeliveryKeyFeatures />
      <FoodDeliveryEfficiency />
      <FoodDeliveryProcess />
      <FoodDeliveryTechStack />
      <FoodDeliveryEmergingTech />
      <FoodDeliveryCta2 />
      <FoodDeliverySmartMove />
      <FoodDeliveryCostSection />
      <FoodDeliveryWhyChooseUs />
      <FoodDeliveryAwards />
      <FoodDeliveryCta3 />
      <FoodDeliveryFaqs />
    </div>
  );
}
