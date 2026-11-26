import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import ThirdPartyRouteTracker from './components/ThirdPartyRouteTracker'

// Lazy-load below-the-fold chrome & interactive modals to shrink initial JS payload
const BookingCTA = lazy(() => import('./components/BookingCTA'))
const Footer = lazy(() => import('./components/Footer'))
const ScheduleCallModal = lazy(() => import('./components/ScheduleCallModal'))
const ContactPopupModal = lazy(() => import('./components/ContactPopupModal'))

// Eager Homepage for 0ms initial load; lazy-load all other 75+ routes for 90%+ smaller initial bundle
import Home from './pages/Home'

// Core Pages
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'))
const StateOfTheArtChiropractic = lazy(() => import('./pages/Portfolio/StateOfTheArtChiropractic'))
const DpsAirem = lazy(() => import('./pages/Portfolio/DpsAirem'))
const HalwarConnect = lazy(() => import('./pages/Portfolio/HalwarConnect'))
const FamilyEntertainmentGroup = lazy(() => import('./pages/Portfolio/FamilyEntertainmentGroup'))
const ZoomRead = lazy(() => import('./pages/Portfolio/ZoomRead'))
const PulseCheckTimer = lazy(() => import('./pages/Portfolio/PulseCheckTimer'))
const MyTangoEvent = lazy(() => import('./pages/Portfolio/MyTangoEvent'))
const WordSmithPro = lazy(() => import('./pages/Portfolio/WordSmithPro'))
const PetsB4Profit = lazy(() => import('./pages/Portfolio/PetsB4Profit'))
const StakBread = lazy(() => import('./pages/Portfolio/StakBread'))
const StaffAugmentation = lazy(() => import('./pages/StaffAugmentation'))
const CustomSoftwareDevelopment = lazy(() => import('./pages/CustomSoftwareDevelopment'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))

// Services Pages
const MobileAppDevelopment = lazy(() => import('./pages/Services/mobile-app-development'))
const MobileGameDevelopment = lazy(() => import('./pages/Services/mobile-game-development'))
const ArAppDevelopment = lazy(() => import('./pages/Services/ar-app-development'))
const VirtualRealityDevelopment = lazy(() => import('./pages/Services/virtual-reality-development'))
const IotDevelopment = lazy(() => import('./pages/Services/iot-development'))
const DigitalProductDevelopment = lazy(() => import('./pages/Services/digital-product-development'))
const DiscoverySprint = lazy(() => import('./pages/Services/discovery-sprint'))
const MvpDevelopment = lazy(() => import('./pages/Services/mvp-development'))
const ProductRescueScaling = lazy(() => import('./pages/Services/product-rescue-scaling'))
const ProductStrategyConsulting = lazy(() => import('./pages/Services/product-strategy-consulting'))
const UiUxDesign = lazy(() => import('./pages/Services/ui-ux-design'))
const InteractivePrototyping = lazy(() => import('./pages/Services/interactive-prototyping'))
const IosAppDevelopment = lazy(() => import('./pages/Services/ios-app-development'))
const AndroidAppDevelopment = lazy(() => import('./pages/Services/android-app-development'))
const ReactNativeAppDevelopment = lazy(() => import('./pages/Services/react-native-app-development'))
const FlutterAppDevelopment = lazy(() => import('./pages/Services/flutter-app-development'))
const KotlinMultiplatformAppDevelopment = lazy(() => import('./pages/Services/kotlin-multiplatform-app-development'))
const BackendApiDevelopment = lazy(() => import('./pages/Services/backend-api-development'))
const WebAppDevelopmentCompany = lazy(() => import('./pages/Services/web-app-development-company'))
const CrossPlatformAppDevelopment = lazy(() => import('./pages/Services/cross-platform-app-development'))
const ProductLaunchStrategy = lazy(() => import('./pages/Services/product-launch-strategy'))
const AppStoreOptimization = lazy(() => import('./pages/Services/app-store-optimization'))
const PostLaunchAnalyticsIteration = lazy(() => import('./pages/Services/post-launch-analytics-iteration'))
const BlockchainDevelopment = lazy(() => import('./pages/Services/blockchain-development'))
const AiDevelopment = lazy(() => import('./pages/Services/ai-development'))
const AiCostEstimator = lazy(() => import('./pages/Services/ai-development/ai-cost-estimator'))
const AiAppDevelopmentServices = lazy(() => import('./pages/Services/ai-app-development-services'))
const AiChatbotDevelopmentServices = lazy(() => import('./pages/Services/ai-chatbot-development-services'))
const AiAgentDevelopment = lazy(() => import('./pages/Services/ai-agent-development'))
const GenerativeAiDevelopment = lazy(() => import('./pages/Services/generative-ai-development-company'))
const MachineLearningDevelopment = lazy(() => import('./pages/Services/machine-learning-development-services'))
const NlpDevelopment = lazy(() => import('./pages/Services/nlp-development-services'))
const ComputerVisionDevelopment = lazy(() => import('./pages/Services/computer-vision-development-services'))
const AiMvpDevelopment = lazy(() => import('./pages/Services/ai-mvp-development'))
const AiAutomationServices = lazy(() => import('./pages/Services/ai-automation-services'))
const SystemIntegrationApiAutomation = lazy(() => import('./pages/Services/system-integration-api-automation'))
const BusinessProcessAutomation = lazy(() => import('./pages/Services/business-process-automation'))
const RpaDevelopmentServices = lazy(() => import('./pages/Services/rpa-development-services'))

// Industries Pages
const IndustriesHub = lazy(() => import('./pages/Industries'))
const HealthcareAppDevelopment = lazy(() => import('./pages/Industries/healthcare-app-development'))
const FitnessAppDevelopment = lazy(() => import('./pages/Industries/fitness-app-development'))
const FintechAppDevelopment = lazy(() => import('./pages/Industries/fintech-app-development'))
const EducationAppDevelopment = lazy(() => import('./pages/Industries/education-app-development-company'))
const RealEstateAppDevelopment = lazy(() => import('./pages/Industries/real-estate-app-development-company'))
const DatingAppDevelopment = lazy(() => import('./pages/Industries/dating-app-development-company'))
const TravelAppDevelopment = lazy(() => import('./pages/Industries/travel-app-development-company'))
const FoodDeliveryAppDevelopment = lazy(() => import('./pages/Industries/food-delivery-app-development'))
const EcommerceAppDevelopment = lazy(() => import('./pages/Industries/ecommerce-app-development-company'))
const StartupAppDevelopment = lazy(() => import('./pages/Industries/startup-app-development-company'))

// Location Pages
const MobileAppSanFrancisco = lazy(() => import('./pages/Locations/mobile-app-development-san-francisco'))
const MobileAppAustin = lazy(() => import('./pages/Locations/mobile-app-development-austin'))
const MobileAppNewYork = lazy(() => import('./pages/Locations/mobile-app-development-new-york'))
const MobileAppToronto = lazy(() => import('./pages/Locations/mobile-app-development-toronto'))
const MobileAppLondon = lazy(() => import('./pages/Locations/mobile-app-development-london'))
const MobileAppDubai = lazy(() => import('./pages/Locations/mobile-app-development-dubai'))
const MobileAppSingapore = lazy(() => import('./pages/Locations/mobile-app-development-singapore'))

// Company Pages
const AboutUs = lazy(() => import('./pages/Company/about-us'))
const Blogs = lazy(() => import('./pages/Company/blogs'))
const BlogDetail = lazy(() => import('./pages/Company/blogs/BlogDetail'))
const CategoryPage = lazy(() => import('./pages/Company/blogs/CategoryPage'))
const AuthorPage = lazy(() => import('./pages/Company/blogs/AuthorPage'))
const PressMedia = lazy(() => import('./pages/Company/press-media'))
const PressReleaseDetail = lazy(() => import('./pages/Company/press-media/PressReleaseDetail'))
const Partnership = lazy(() => import('./pages/Company/partnership'))
const LifeAtInceptives = lazy(() => import('./pages/Company/life-at-inceptives-digital'))
const Leadership = lazy(() => import('./pages/Company/leadership'))
const FoundersLetter = lazy(() => import('./pages/Company/founders-letter'))
const ContactUs = lazy(() => import('./pages/Company/contact-us'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const NotFound = lazy(() => import('./pages/NotFound'))

function StaticPublicFolder({ dir }) {
  useEffect(() => {
    window.location.replace(`/${dir}/index.html${window.location.search}${window.location.hash}`)
  }, [dir])
  return null
}

// Contact pages and 404 skip the universal pre-footer form.
function PreFooterCTA({ isNotFound }) {
  const { pathname } = useLocation()
  if (
    isNotFound ||
    pathname === '/404' ||
    pathname === '/contact-us' ||
    pathname === '/company/contact-us' ||
    pathname === '/leadership' ||
    pathname === '/company/leadership' ||
    pathname === '/founders-letter' ||
    pathname === '/company/founders-letter' ||
    pathname === '/ai-development' ||
    pathname === '/services/ai-development' ||
    pathname === '/thank-you'
  ) return null
  return <BookingCTA />
}

export default function App() {
  const [isNotFound, setIsNotFound] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThirdPartyRouteTracker />
      <div className="min-h-screen bg-[#07080b] text-slate-100 selection:bg-[#00CE44] selection:text-black flex flex-col justify-between">
        {/* Universal Top Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-[#07080b]" />}>
            <Routes>
            <Route path="/startup-product-development" element={<StartupAppDevelopment />} />
            {/* General Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/state-of-the-art-chiropractic" element={<StateOfTheArtChiropractic />} />
            <Route path="/portfolio/dps-airem" element={<DpsAirem />} />
            <Route path="/portfolio/halwar-connect" element={<HalwarConnect />} />
            <Route path="/portfolio/family-entertainment-group" element={<FamilyEntertainmentGroup />} />
            <Route path="/portfolio/zoom-read" element={<ZoomRead />} />
            <Route path="/portfolio/pulse-check-timer" element={<PulseCheckTimer />} />
            <Route path="/portfolio/my-tango-event" element={<MyTangoEvent />} />
            <Route path="/portfolio/wordsmith-pro" element={<WordSmithPro />} />
            <Route path="/portfolio/pets-b4-profit" element={<PetsB4Profit />} />
            <Route path="/portfolio/stakbread" element={<StakBread />} />
            <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
            <Route path="/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/custom-software-development" element={<CustomSoftwareDevelopment />} />
            <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-condition" element={<TermsAndConditions />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            {/* Services Routes */}
            <Route path="/digital-product-development" element={<DigitalProductDevelopment />} />
            <Route path="/services/digital-product-development" element={<DigitalProductDevelopment />} />
            <Route path="/discovery-sprint" element={<DiscoverySprint />} />
            <Route path="/services/discovery-sprint" element={<DiscoverySprint />} />
            <Route path="/mvp-development" element={<MvpDevelopment />} />
            <Route path="/services/mvp-development" element={<MvpDevelopment />} />
            <Route path="/product-rescue-scaling" element={<ProductRescueScaling />} />
            <Route path="/services/product-rescue-scaling" element={<ProductRescueScaling />} />
            <Route path="/product-strategy-consulting" element={<ProductStrategyConsulting />} />
            <Route path="/services/product-strategy-consulting" element={<ProductStrategyConsulting />} />
            <Route path="/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/interactive-prototyping" element={<InteractivePrototyping />} />
            <Route path="/services/interactive-prototyping" element={<InteractivePrototyping />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/mobile-game-development" element={<MobileGameDevelopment />} />
            <Route path="/services/mobile-game-development" element={<MobileGameDevelopment />} />
            <Route path="/ar-app-development" element={<ArAppDevelopment />} />
            <Route path="/services/ar-app-development" element={<ArAppDevelopment />} />
            <Route path="/virtual-reality-development" element={<VirtualRealityDevelopment />} />
            <Route path="/services/virtual-reality-development" element={<VirtualRealityDevelopment />} />
            <Route path="/iot-development" element={<IotDevelopment />} />
            <Route path="/services/iot-development" element={<IotDevelopment />} />
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
            <Route path="/kotlin-multiplatform-development" element={<KotlinMultiplatformAppDevelopment />} />
            <Route path="/services/kotlin-multiplatform-development" element={<KotlinMultiplatformAppDevelopment />} />
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
            <Route path="/ai-development/ai-cost-estimator" element={<AiCostEstimator />} />
            <Route path="/services/ai-development/ai-cost-estimator" element={<AiCostEstimator />} />
            <Route path="/ai-cost-estimator" element={<AiCostEstimator />} />
            <Route path="/services/ai-cost-estimator" element={<AiCostEstimator />} />
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
            <Route path="/computer-vision-development-services" element={<ComputerVisionDevelopment />} />
            <Route path="/services/computer-vision-development-services" element={<ComputerVisionDevelopment />} />
            <Route path="/ai-development/computer-vision" element={<ComputerVisionDevelopment />} />
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
            <Route path="/industries" element={<IndustriesHub />} />
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
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/author/:slug" element={<AuthorPage />} />
            <Route path="/authors/:slug" element={<AuthorPage />} />
            <Route path="/company/blogs" element={<Blogs />} />

            <Route path="/press-media" element={<PressMedia />} />
            <Route path="/press-release" element={<PressMedia />} />
            <Route path="/press-release/:slug" element={<PressReleaseDetail />} />
            <Route path="/press-media/:slug" element={<PressReleaseDetail />} />
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
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Static Public Folder Routes (/custom-mobile-application-development, /reviews, /email-signature) */}
            <Route
              path="/custom-mobile-application-development/*"
              element={<StaticPublicFolder dir="custom-mobile-application-development" />}
            />
            <Route
              path="/reviews/*"
              element={<StaticPublicFolder dir="reviews" />}
            />
            <Route
              path="/testimonial"
              element={<StaticPublicFolder dir="reviews" />}
            />
            <Route
              path="/email-signature/*"
              element={<StaticPublicFolder dir="email-signature" />}
            />

            {/* 404 & Catch-all */}
            <Route path="/404" element={<NotFound onMountChange={setIsNotFound} />} />
            <Route path="*" element={<NotFound onMountChange={setIsNotFound} />} />
          </Routes>
          </Suspense>
        </main>

        {/* Universal Pre-Footer Contact Section, Footer & Modals */}
        <Suspense fallback={null}>
          <PreFooterCTA isNotFound={isNotFound} />
          <Footer />
          <ScheduleCallModal />
          <ContactPopupModal />
        </Suspense>
      </div>
    </BrowserRouter>
  )
}
