import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

// Core Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import CaseStudyDetail from './pages/CaseStudyDetail'
import StaffAugmentation from './pages/StaffAugmentation'
import CustomSoftwareDevelopment from './pages/CustomSoftwareDevelopment'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

// Services Pages (services/ me sirf services ke pages)
import MobileAppDevelopment from './pages/Services/mobile-app-development'
import IosAppDevelopment from './pages/Services/ios-app-development'
import AndroidAppDevelopment from './pages/Services/android-app-development'
import ReactNativeAppDevelopment from './pages/Services/react-native-app-development'
import FlutterAppDevelopment from './pages/Services/flutter-app-development'
import KotlinMultiplatformAppDevelopment from './pages/Services/kotlin-multiplatform-app-development'
import BackendApiDevelopment from './pages/Services/backend-api-development'
import WebAppDevelopmentCompany from './pages/Services/web-app-development-company'
import CrossPlatformAppDevelopment from './pages/Services/cross-platform-app-development'
import ProductLaunchStrategy from './pages/Services/product-launch-strategy'
import AppStoreOptimization from './pages/Services/app-store-optimization'
import PostLaunchAnalyticsIteration from './pages/Services/post-launch-analytics-iteration'
import BlockchainDevelopment from './pages/Services/blockchain-development'
import AiDevelopment from './pages/Services/ai-development'
import AiAppDevelopmentServices from './pages/Services/ai-app-development-services'
import AiChatbotDevelopmentServices from './pages/Services/ai-chatbot-development-services'
import AiAgentDevelopment from './pages/Services/ai-agent-development'
import GenerativeAiDevelopment from './pages/Services/generative-ai-development-company'
import MachineLearningDevelopment from './pages/Services/machine-learning-development-services'
import NlpDevelopment from './pages/Services/nlp-development-services'
import AiMvpDevelopment from './pages/Services/ai-mvp-development'
import AiAutomationServices from './pages/Services/ai-automation-services'
import SystemIntegrationApiAutomation from './pages/Services/system-integration-api-automation'
import BusinessProcessAutomation from './pages/Services/business-process-automation'
import RpaDevelopmentServices from './pages/Services/rpa-development-services'

// Industries Pages
import HealthcareAppDevelopment from './pages/Industries/healthcare-app-development'
import FitnessAppDevelopment from './pages/Industries/fitness-app-development'
import FintechAppDevelopment from './pages/Industries/fintech-app-development'
import EducationAppDevelopment from './pages/Industries/education-app-development-company'
import RealEstateAppDevelopment from './pages/Industries/real-estate-app-development-company'
import DatingAppDevelopment from './pages/Industries/dating-app-development-company'
import TravelAppDevelopment from './pages/Industries/travel-app-development-company'
import FoodDeliveryAppDevelopment from './pages/Industries/food-delivery-app-development'
import EcommerceAppDevelopment from './pages/Industries/ecommerce-app-development-company'
import StartupAppDevelopment from './pages/Industries/startup-app-development-company'

// Location Pages
import MobileAppSanFrancisco from './pages/Locations/mobile-app-development-san-francisco'
import MobileAppAustin from './pages/Locations/mobile-app-development-austin'
import MobileAppNewYork from './pages/Locations/mobile-app-development-new-york'
import MobileAppToronto from './pages/Locations/mobile-app-development-toronto'
import MobileAppLondon from './pages/Locations/mobile-app-development-london'
import MobileAppDubai from './pages/Locations/mobile-app-development-dubai'
import MobileAppSingapore from './pages/Locations/mobile-app-development-singapore'

// Company Pages (company/ ke 8 dedicated pages apne apne components ke saath)
import AboutUs from './pages/Company/about-us'
import Blogs from './pages/Company/blogs'
import PressMedia from './pages/Company/press-media'
import Partnership from './pages/Company/partnership'
import LifeAtInceptives from './pages/Company/life-at-inceptives-digital'
import Leadership from './pages/Company/leadership'
import FoundersLetter from './pages/Company/founders-letter'
import ContactUs from './pages/Company/contact-us'

// Contact pages already carry the full contact form, so skip the universal pre-footer form there.
function PreFooterCTA() {
  const { pathname } = useLocation()
  if (
    pathname === '/contact-us' ||
    pathname === '/company/contact-us' ||
    pathname === '/leadership' ||
    pathname === '/company/leadership' ||
    pathname === '/founders-letter' ||
    pathname === '/company/founders-letter' ||
    pathname === '/ai-development' ||
    pathname === '/services/ai-development'
  ) return null
  return <BookingCTA />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#07080b] text-slate-100 selection:bg-[#00CE44] selection:text-black flex flex-col justify-between">
        {/* Universal Top Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
            <Route path="/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/custom-software-development" element={<CustomSoftwareDevelopment />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-condition" element={<TermsAndConditions />} />

            {/* Services Routes */}
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/ios-app-development" element={<IosAppDevelopment />} />
            <Route path="/services/ios-app-development" element={<IosAppDevelopment />} />
            <Route path="/android-app-development" element={<AndroidAppDevelopment />} />
            <Route path="/services/android-app-development" element={<AndroidAppDevelopment />} />
            <Route path="/anroid-app-development" element={<AndroidAppDevelopment />} />
            <Route path="/react-native-app-development" element={<ReactNativeAppDevelopment />} />
            <Route path="/services/react-native-app-development" element={<ReactNativeAppDevelopment />} />
            <Route path="/flutter-app-development" element={<FlutterAppDevelopment />} />
            <Route path="/services/flutter-app-development" element={<FlutterAppDevelopment />} />
            <Route path="/kotlin-multiplatform-app-development" element={<KotlinMultiplatformAppDevelopment />} />
            <Route path="/services/kotlin-multiplatform-app-development" element={<KotlinMultiplatformAppDevelopment />} />
            <Route path="/backend-api-development" element={<BackendApiDevelopment />} />
            <Route path="/services/backend-api-development" element={<BackendApiDevelopment />} />
            <Route path="/web-app-development-company" element={<WebAppDevelopmentCompany />} />
            <Route path="/services/web-app-development-company" element={<WebAppDevelopmentCompany />} />
            <Route path="/cross-platform-app-development" element={<CrossPlatformAppDevelopment />} />
            <Route path="/services/cross-platform-app-development" element={<CrossPlatformAppDevelopment />} />
            <Route path="/product-launch-strategy" element={<ProductLaunchStrategy />} />
            <Route path="/services/product-launch-strategy" element={<ProductLaunchStrategy />} />
            <Route path="/app-store-optimization" element={<AppStoreOptimization />} />
            <Route path="/services/app-store-optimization" element={<AppStoreOptimization />} />
            <Route path="/post-launch-analytics-iteration" element={<PostLaunchAnalyticsIteration />} />
            <Route path="/services/post-launch-analytics-iteration" element={<PostLaunchAnalyticsIteration />} />
            <Route path="/blockchain-development" element={<BlockchainDevelopment />} />
            <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
            <Route path="/ai-development" element={<AiDevelopment />} />
            <Route path="/services/ai-development" element={<AiDevelopment />} />
            <Route path="/ai-app-development-services" element={<AiAppDevelopmentServices />} />
            <Route path="/services/ai-app-development-services" element={<AiAppDevelopmentServices />} />
            <Route path="/ai-chatbot-development-services" element={<AiChatbotDevelopmentServices />} />
            <Route path="/services/ai-chatbot-development-services" element={<AiChatbotDevelopmentServices />} />
            <Route path="/ai-agent-development" element={<AiAgentDevelopment />} />
            <Route path="/services/ai-agent-development" element={<AiAgentDevelopment />} />
            <Route path="/generative-ai-development-company" element={<GenerativeAiDevelopment />} />
            <Route path="/services/generative-ai-development-company" element={<GenerativeAiDevelopment />} />
            <Route path="/machine-learning-development-services" element={<MachineLearningDevelopment />} />
            <Route path="/services/machine-learning-development-services" element={<MachineLearningDevelopment />} />
            <Route path="/nlp-development-services" element={<NlpDevelopment />} />
            <Route path="/services/nlp-development-services" element={<NlpDevelopment />} />
            <Route path="/ai-mvp-development" element={<AiMvpDevelopment />} />
            <Route path="/services/ai-mvp-development" element={<AiMvpDevelopment />} />
            <Route path="/ai-automation-services" element={<AiAutomationServices />} />
            <Route path="/services/ai-automation-services" element={<AiAutomationServices />} />
            <Route path="/system-integration-api-automation" element={<SystemIntegrationApiAutomation />} />
            <Route path="/services/system-integration-api-automation" element={<SystemIntegrationApiAutomation />} />
            <Route path="/business-process-automation" element={<BusinessProcessAutomation />} />
            <Route path="/services/business-process-automation" element={<BusinessProcessAutomation />} />
            <Route path="/rpa-development-services" element={<RpaDevelopmentServices />} />
            <Route path="/services/rpa-development-services" element={<RpaDevelopmentServices />} />

            {/* Industries Routes */}
            <Route path="/healthcare-app-development" element={<HealthcareAppDevelopment />} />
            <Route path="/industries/healthcare-app-development" element={<HealthcareAppDevelopment />} />
            <Route path="/fitness-app-development" element={<FitnessAppDevelopment />} />
            <Route path="/industries/fitness-app-development" element={<FitnessAppDevelopment />} />
            <Route path="/fintech-app-development" element={<FintechAppDevelopment />} />
            <Route path="/industries/fintech-app-development" element={<FintechAppDevelopment />} />
            <Route path="/education-app-development-company" element={<EducationAppDevelopment />} />
            <Route path="/industries/education-app-development-company" element={<EducationAppDevelopment />} />
            <Route path="/real-estate-app-development-company" element={<RealEstateAppDevelopment />} />
            <Route path="/industries/real-estate-app-development-company" element={<RealEstateAppDevelopment />} />
            <Route path="/dating-app-development-company" element={<DatingAppDevelopment />} />
            <Route path="/industries/dating-app-development-company" element={<DatingAppDevelopment />} />
            <Route path="/travel-app-development-company" element={<TravelAppDevelopment />} />
            <Route path="/industries/travel-app-development-company" element={<TravelAppDevelopment />} />
            <Route path="/food-delivery-app-development" element={<FoodDeliveryAppDevelopment />} />
            <Route path="/industries/food-delivery-app-development" element={<FoodDeliveryAppDevelopment />} />
            <Route path="/ecommerce-app-development-company" element={<EcommerceAppDevelopment />} />
            <Route path="/ecommerce-app-development" element={<EcommerceAppDevelopment />} />
            <Route path="/industries/ecommerce-app-development-company" element={<EcommerceAppDevelopment />} />
            <Route path="/industries/ecommerce-app-development" element={<EcommerceAppDevelopment />} />
            <Route path="/startup-app-development-company" element={<StartupAppDevelopment />} />
            <Route path="/startup-app-development" element={<StartupAppDevelopment />} />
            <Route path="/industries/startup-app-development-company" element={<StartupAppDevelopment />} />
            <Route path="/industries/startup-app-development" element={<StartupAppDevelopment />} />

            {/* Location Routes */}
            <Route path="/mobile-app-development-san-francisco" element={<MobileAppSanFrancisco />} />
            <Route path="/locations/mobile-app-development-san-francisco" element={<MobileAppSanFrancisco />} />
            <Route path="/mobile-app-development-austin" element={<MobileAppAustin />} />
            <Route path="/locations/mobile-app-development-austin" element={<MobileAppAustin />} />
            <Route path="/mobile-app-development-newyork" element={<MobileAppNewYork />} />
            <Route path="/mobile-app-development-new-york" element={<MobileAppNewYork />} />
            <Route path="/locations/mobile-app-development-newyork" element={<MobileAppNewYork />} />
            <Route path="/locations/mobile-app-development-new-york" element={<MobileAppNewYork />} />
            <Route path="/mobile-apps-development-company-in-toronto-canada" element={<MobileAppToronto />} />
            <Route path="/mobile-app-development-company-in-toronto-canada" element={<MobileAppToronto />} />
            <Route path="/mobile-app-development-toronto" element={<MobileAppToronto />} />
            <Route path="/locations/mobile-apps-development-company-in-toronto-canada" element={<MobileAppToronto />} />
            <Route path="/locations/mobile-app-development-company-in-toronto-canada" element={<MobileAppToronto />} />
            <Route path="/locations/mobile-app-development-toronto" element={<MobileAppToronto />} />
            <Route path="/mobile-app-development-company-london-uk" element={<MobileAppLondon />} />
            <Route path="/mobile-app-development-london" element={<MobileAppLondon />} />
            <Route path="/locations/mobile-app-development-company-london-uk" element={<MobileAppLondon />} />
            <Route path="/locations/mobile-app-development-london" element={<MobileAppLondon />} />
            <Route path="/mobile-app-development-company-dubai-uae" element={<MobileAppDubai />} />
            <Route path="/mobile-app-development-dubai" element={<MobileAppDubai />} />
            <Route path="/locations/mobile-app-development-company-dubai-uae" element={<MobileAppDubai />} />
            <Route path="/locations/mobile-app-development-dubai" element={<MobileAppDubai />} />
            <Route path="/mobile-app-development-company-singapore" element={<MobileAppSingapore />} />
            <Route path="/mobile-app-development-singapore" element={<MobileAppSingapore />} />
            <Route path="/locations/mobile-app-development-company-singapore" element={<MobileAppSingapore />} />
            <Route path="/locations/mobile-app-development-singapore" element={<MobileAppSingapore />} />

            {/* Company Routes (8 Dedicated Company Pages) */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/company" element={<AboutUs />} />
            <Route path="/company/about-us" element={<AboutUs />} />

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/company/blogs" element={<Blogs />} />

            <Route path="/press-media" element={<PressMedia />} />
            <Route path="/press-release" element={<PressMedia />} />
            <Route path="/company/press-media" element={<PressMedia />} />

            <Route path="/partnership" element={<Partnership />} />
            <Route path="/company/partnership" element={<Partnership />} />

            <Route path="/life-at-inceptives-digital" element={<LifeAtInceptives />} />
            <Route path="/company/life-at-inceptives-digital" element={<LifeAtInceptives />} />

            <Route path="/leadership" element={<Leadership />} />
            <Route path="/company/leadership" element={<Leadership />} />

            <Route path="/founders-letter" element={<FoundersLetter />} />
            <Route path="/company/founders-letter" element={<FoundersLetter />} />

            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/company/contact-us" element={<ContactUs />} />

            {/* Catch-all */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Universal Pre-Footer Contact Section */}
        <PreFooterCTA />

        {/* Universal Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}
