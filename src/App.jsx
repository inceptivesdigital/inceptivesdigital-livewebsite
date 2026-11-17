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
