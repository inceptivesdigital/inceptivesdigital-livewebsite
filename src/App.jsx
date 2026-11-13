import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import CaseStudyDetail from './pages/CaseStudyDetail'
import StaffAugmentation from './pages/StaffAugmentation'
import MobileAppDevelopment from './pages/Services/mobile-app-development'
import CustomSoftwareDevelopment from './pages/CustomSoftwareDevelopment'
import BlockchainDevelopment from './pages/BlockchainDevelopment'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

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
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
            <Route path="/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/custom-software-development" element={<CustomSoftwareDevelopment />} />
            <Route path="/blockchain-development" element={<BlockchainDevelopment />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-condition" element={<TermsAndConditions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Universal Pre-Footer Contact Section (Shows above Footer on all pages) */}
        <BookingCTA />

        {/* Universal Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}
