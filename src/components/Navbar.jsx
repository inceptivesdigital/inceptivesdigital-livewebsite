import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X, ChevronDown, Phone } from 'lucide-react'

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  // Close mega menu on route change
  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
    setMobileAccordion(null)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const scrollY = window.scrollY
    const html = document.documentElement
    const body = document.body

    html.style.overflow = 'hidden'
    html.style.overscrollBehavior = 'none'
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    return () => {
      html.style.overflow = ''
      html.style.overscrollBehavior = ''
      body.style.overflow = ''
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [mobileOpen])

  const toggleMobileAccordion = (section) => {
    setMobileAccordion((prev) => (prev === section ? null : section))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[99999] pt-3 sm:pt-4">
      <div
        ref={navRef}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Main Navbar Bar */}
        <div
          className={`flex items-center justify-between px-5 sm:px-8 py-3.5 bg-[#25272a] border border-[#37393d] shadow-2xl transition-all duration-200 ${
            activeMenu || mobileOpen ? 'rounded-t-2xl border-b-0' : 'rounded-2xl'
          }`}
        >
          {/* Left Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5" aria-label="Inceptives Digital Home">
            <img
              src="/assets/update-logo.png"
              alt="Inceptives Digital"
              width={160}
              height={32}
              decoding="sync"
              className="h-7 sm:h-8 w-auto object-contain brightness-110"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            <Link
              to="/services"
              onMouseEnter={() => setActiveMenu('services')}
              className={`text-[15px] font-medium transition-colors cursor-pointer py-1 ${
                activeMenu === 'services' || location.pathname.startsWith('/services')
                  ? 'text-[#00CE44]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Services
            </Link>

            <Link
              to="/industries"
              onMouseEnter={() => setActiveMenu('industries')}
              className={`text-[15px] font-medium transition-colors cursor-pointer py-1 ${
                activeMenu === 'industries' || location.pathname === '/industries'
                  ? 'text-[#00CE44]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Industries
            </Link>

            <button
              onMouseEnter={() => setActiveMenu('locations')}
              onClick={() => setActiveMenu(activeMenu === 'locations' ? null : 'locations')}
              className={`text-[15px] font-medium transition-colors cursor-pointer py-1 ${
                activeMenu === 'locations' ? 'text-[#00CE44]' : 'text-slate-200 hover:text-white'
              }`}
            >
              Locations
            </button>

            <Link
              to="/portfolio"
              className={`text-[15px] font-medium transition-colors py-1 ${
                location.pathname.startsWith('/portfolio')
                  ? 'text-[#00CE44]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Case Studies
            </Link>

            <button
              onMouseEnter={() => setActiveMenu('company')}
              onClick={() => setActiveMenu(activeMenu === 'company' ? null : 'company')}
              className={`text-[15px] font-medium transition-colors cursor-pointer py-1 ${
                activeMenu === 'company' || location.pathname === '/about-us'
                  ? 'text-[#00CE44]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Company
            </button>
          </nav>

          {/* Right Action: Phone Number, Button & Hamburger Icon */}
          <div className="flex items-center gap-3.5 xl:gap-6">
            <a
              href="tel:+14697888527"
              className="hidden lg:inline-flex items-center gap-2 text-white hover:text-[#00CE44] text-[14px] xl:text-[15px] font-medium tracking-tight transition-colors whitespace-nowrap shrink-0"
            >
              <svg
                className="w-[18px] h-[18px] text-white shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                <path
                  d="M14.5 4.5a5 5 0 0 1 5 5M14.5 7.5a2 2 0 0 1 2 2M14.5 1.5a8 8 0 0 1 8 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              <span>(469) 788-8527</span>
            </a>

            <Link
              to="/contact-us"
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-xs sm:text-sm tracking-tight transition-all duration-150 active:scale-95 cursor-pointer shadow-none whitespace-nowrap"
            >
              Get In Touch
            </Link>

            {/* Mobile Hamburger / Close Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* MEGA MENU: SERVICES (Desktop) */}
        {activeMenu === 'services' && (
          <div className="hidden lg:grid grid-cols-12 w-full bg-[#27292c] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl shadow-black/90 mega-menu-dropdown max-h-[calc(100vh-90px)] 2xl:max-h-none overflow-y-auto 2xl:overflow-visible megamenu-scroll">
            {/* Column 1: Leftmost Sidebar Title with Arrow */}
            <div className="col-span-2 p-5 2xl:p-7 border-r border-[#37393d] bg-[#232528] rounded-bl-2xl">
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 text-[16px] 2xl:text-[20px] font-bold text-[#00CE44] hover:brightness-110 transition group"
              >
                <span>Services</span>
                <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Column 2: Application Development */}
            <div className="col-span-3 p-5 2xl:p-7 border-r border-[#37393d]">
              <h3 className="text-[16px] 2xl:text-[20px] font-bold text-white mb-2 2xl:mb-3">
                Application Development
              </h3>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/mobile-app-development" className="hover:text-white transition">Mobile App Development</Link></li>
                <li><Link to="/blockchain-development" className="hover:text-white transition">Blockchain Development</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                By Platform
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/ios-app-development" className="hover:text-white transition">iOS App</Link></li>
                <li><Link to="/android-app-development" className="hover:text-white transition">Android App</Link></li>
                <li><Link to="/react-native-app-development" className="hover:text-white transition">React Native App</Link></li>
                <li><Link to="/flutter-app-development" className="hover:text-white transition">Flutter</Link></li>
                <li><Link to="/kotlin-multiplatform-app-development" className="hover:text-white transition">Kotlin Multiplatform</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                By Type
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/web-app-development-company" className="hover:text-white transition">Web App Development</Link></li>
                <li><Link to="/backend-api-development" className="hover:text-white transition">Backend and API</Link></li>
                <li><Link to="/cross-platform-app-development" className="hover:text-white transition">Cross-Platform Development</Link></li>
                <li><Link to="/ar-app-development" className="hover:text-white transition">AR App Development</Link></li>
                <li><Link to="/virtual-reality-development" className="hover:text-white transition">VR App Development</Link></li>
                <li><Link to="/iot-development" className="hover:text-white transition">IoT App Development</Link></li>
                <li><Link to="/mobile-game-development" className="hover:text-white transition">Mobile Game Development</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                Launch &amp; Growth
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/app-store-optimization" className="hover:text-white transition">App Store Optimization</Link></li>
                <li><Link to="/product-launch-strategy" className="hover:text-white transition">Product Launch Strategy</Link></li>
                <li><Link to="/post-launch-analytics-iteration" className="hover:text-white transition">Post Launch Analytics and Iteration</Link></li>
              </ul>
            </div>

            {/* Column 3: Artificial Intelligence */}
            <div className="col-span-3 p-5 2xl:p-7 border-r border-[#37393d]">
              <h3 className="text-[16px] 2xl:text-[20px] font-bold text-white mb-2 2xl:mb-3">
                Artificial Intelligence
              </h3>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                AI Servicess
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/ai-development" className="hover:text-white transition">AI Development</Link></li>
                <li><Link to="/ai-app-development-services" className="hover:text-white transition">AI App Development</Link></li>
                <li><Link to="/ai-chatbot-development-services" className="hover:text-white transition">AI Chatbot Development</Link></li>
                <li><Link to="/ai-agent-development" className="hover:text-white transition">AI Agent Development</Link></li>
                <li><Link to="/generative-ai-development-company" className="hover:text-white transition">Generative AI Development</Link></li>
                <li><Link to="/machine-learning-development-services" className="hover:text-white transition">Machine Learning Development</Link></li>
                <li><Link to="/nlp-development-services" className="hover:text-white transition">NLP Development</Link></li>
                <li><Link to="/computer-vision-development-services" className="hover:text-white transition">Computer Vision Development</Link></li>
                <li><Link to="/ai-mvp-development" className="hover:text-white transition">AI MVP Development</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                Automation
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/ai-automation-services" className="hover:text-white transition">AI Automation</Link></li>
                <li><Link to="/system-integration-api-automation" className="hover:text-white transition">System Integration &amp; API Automation Services</Link></li>
                <li><Link to="/business-process-automation" className="hover:text-white transition">Business Process Automation Services</Link></li>
                <li><Link to="/rpa-development-services" className="hover:text-white transition">RPA Development</Link></li>
              </ul>
            </div>

            {/* Column 4: Digital Product Development */}
            <div className="col-span-4 p-5 2xl:p-7">
              <h3 className="text-[16px] 2xl:text-[20px] font-bold text-white mb-2 2xl:mb-3">
                Digital Product Development
              </h3>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                By Engagement
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/digital-product-development" className="hover:text-white transition">Digital Product Development</Link></li>
                <li><Link to="/discovery-sprint" className="hover:text-white transition">Discovery Sprint</Link></li>
                <li><Link to="/mvp-development" className="hover:text-white transition">MVP Development</Link></li>
                <li><Link to="/product-rescue-scaling" className="hover:text-white transition">Product Rescue &amp; Scaling</Link></li>
                <li><Link to="/product-strategy-consulting" className="hover:text-white transition">Product Strategy &amp; Consulting</Link></li>
                <li><Link to="/custom-software-development" className="hover:text-white transition">Custom Software Development</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                By Craft
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/ui-ux-design" className="hover:text-white transition">UI/UX Design</Link></li>
                <li><Link to="/interactive-prototyping" className="hover:text-white transition">Interactive Prototyping</Link></li>
              </ul>
            </div>
          </div>
        )}

        {/* MEGA MENU: INDUSTRIES (Desktop) */}
        {activeMenu === 'industries' && (
          <div className="hidden lg:flex w-full bg-[#27292c] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl shadow-black/90 mega-menu-dropdown overflow-hidden max-h-[calc(100vh-90px)] 2xl:max-h-none overflow-y-auto 2xl:overflow-visible megamenu-scroll">
            <div className="w-56 shrink-0 p-6 2xl:p-8 border-r border-white/10 flex items-start bg-[#232528]/80">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2.5 text-[16px] 2xl:text-[20px] font-bold text-[#00CE44] hover:brightness-110 transition group"
              >
                <span>Industries</span>
                <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#00CE44] stroke-[2] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-[340px] shrink-0 p-6 2xl:p-8 border-r border-white/10">
              <ul className="space-y-3">
                {[
                  { label: 'Healthcare', to: '/healthcare-app-development' },
                  { label: 'Fitness', to: '/fitness-app-development' },
                  { label: 'FinTech', to: '/fintech-app-development' },
                  { label: 'Dating', to: '/dating-app-development-company' },
                  { label: 'Education', to: '/education-app-development-company' },
                  { label: 'Real Estate', to: '/real-estate-app-development-company' },
                  { label: 'Travel', to: '/travel-app-development-company' },
                  { label: 'Food Delivery', to: '/food-delivery-app-development' },
                  { label: 'eCommerce', to: '/ecommerce-app-development-company' },
                  { label: 'Startup', to: '/startup-app-development-company' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-white hover:text-[#00CE44] text-[14px] 2xl:text-[15px] font-medium leading-normal transition-colors duration-150 block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 p-8 bg-[#25272a]/40" />
          </div>
        )}

        {/* MEGA MENU: LOCATIONS (Desktop) */}
        {activeMenu === 'locations' && (
          <div className="hidden lg:flex w-full bg-[#27292c] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl shadow-black/90 mega-menu-dropdown overflow-hidden max-h-[calc(100vh-90px)] 2xl:max-h-none overflow-y-auto 2xl:overflow-visible megamenu-scroll">
            <div className="w-56 shrink-0 p-6 2xl:p-8 border-r border-white/10 flex items-start bg-[#232528]/80">
              <div className="inline-flex items-center gap-2.5 text-[16px] 2xl:text-[20px] font-bold text-[#00CE44]">
                <span>Locations</span>
                <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#00CE44] stroke-[2]" />
              </div>
            </div>

            <div className="w-[340px] shrink-0 p-6 2xl:p-8 border-r border-white/10">
              <ul className="space-y-3">
                {[
                  { label: 'San Francisco', to: '/mobile-app-development-san-francisco' },
                  { label: 'New York', to: '/mobile-app-development-new-york' },
                  { label: 'Austin', to: '/mobile-app-development-austin' },
                  { label: 'Toronto', to: '/mobile-app-development-company-in-toronto-canada' },
                  { label: 'London', to: '/mobile-app-development-company-london-uk' },
                  { label: 'Dubai', to: '/mobile-app-development-company-dubai-uae' },
                  { label: 'Singapore', to: '/mobile-app-development-company-singapore' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-white hover:text-[#00CE44] text-[14px] 2xl:text-[15px] font-medium leading-normal transition-colors duration-150 block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 p-8 bg-[#25272a]/40" />
          </div>
        )}

        {/* MEGA MENU: COMPANY (Desktop) */}
        {activeMenu === 'company' && (
          <div className="hidden lg:flex w-full bg-[#27292c] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl shadow-black/90 mega-menu-dropdown overflow-hidden max-h-[calc(100vh-90px)] 2xl:max-h-none overflow-y-auto 2xl:overflow-visible megamenu-scroll">
            <div className="w-56 shrink-0 p-6 2xl:p-8 border-r border-white/10 flex items-start bg-[#232528]/80">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2.5 text-[16px] 2xl:text-[20px] font-bold text-[#00CE44] hover:brightness-110 transition group"
              >
                <span>Company</span>
                <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#00CE44] stroke-[2] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-[340px] shrink-0 p-6 2xl:p-8 border-r border-white/10">
              <ul className="space-y-3">
                {[
                  { label: 'About', to: '/about-us' },
                  { label: 'Blogs', to: '/blog' },
                  { label: 'Press & Media', to: '/press-release' },
                  { label: 'Partnership', to: '/partnership' },
                  { label: 'Life At Inceptives Digital', to: '/life-at-inceptives-digital' },
                  { label: 'Leadership', to: '/leadership' },
                  { label: "Founder's Letter", to: '/founders-letter' },
                  { label: 'Contact Us', to: '/contact-us' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-white hover:text-[#00CE44] text-[14px] 2xl:text-[15px] font-medium leading-normal transition-colors duration-150 block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 p-8 bg-[#25272a]/40" />
          </div>
        )}

        {/* =========================================================================
            MOBILE MEGA MENU DRAWER (< lg)
            Features:
            1. Smooth expandable accordion dropdowns for Services, Industries, Locations, Company
            2. Smooth scrolling (overflow-y-auto max-h-[82vh])
            3. Butter-smooth open/close animation
            ========================================================================= */}
        {mobileOpen && (
          <div
            onClick={() => setMobileOpen(false)}
            onTouchMove={(e) => e.preventDefault()}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-[2px] -z-10"
            aria-hidden="true"
          />
        )}

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileOpen ? 'max-h-[85vh] opacity-100 mt-0' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="p-4 sm:p-5 bg-[#25272a] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl overflow-y-auto overscroll-contain max-h-[80vh] flex flex-col gap-1.5 no-scrollbar">
            
            {/* 1. Services Accordion with FULL Categories, Headings & Sub-links matching Desktop Mega Menu */}
            <div className="border-b border-white/[0.06] pb-1.5">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('services')}
                className="w-full flex items-center justify-between py-2.5 px-3 text-left text-[15px] font-medium text-white hover:text-[#00CE44] rounded-none transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#00CE44] transition-transform duration-300 ${
                    mobileAccordion === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  mobileAccordion === 'services' ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="max-h-[55vh] overflow-y-auto pr-2 py-2 pl-3 space-y-4 megamenu-scroll text-[13px]">
                    {/* All Services Overview Link */}
                    <div>
                      <Link
                        to="/services"
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex items-center gap-1.5 font-bold text-[#00CE44] hover:underline text-[14px]"
                      >
                        <span>Services</span>
                        <ArrowRight className="w-4 h-4 text-[#00CE44]" />
                      </Link>
                    </div>

                    {/* Group 1: Application Development */}
                    <div className="space-y-2 border-t border-white/[0.06] pt-3">
                      <div className="font-bold text-white text-[15px]">
                        Application Development
                      </div>
                      <div className="space-y-1.5 pl-2 text-slate-300">
                        <Link
                          to="/mobile-app-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Mobile App Development
                        </Link>
                        <Link
                          to="/blockchain-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Blockchain Development
                        </Link>
                      </div>

                      {/* By Platform */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        By Platform
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        <Link
                          to="/ios-app-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          iOS App
                        </Link>
                        <Link
                          to="/android-app-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Android App
                        </Link>
                        <Link
                          to="/react-native-app-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          React Native App
                        </Link>
                        <Link
                          to="/flutter-app-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Flutter
                        </Link>
                        <Link
                          to="/kotlin-multiplatform-app-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Kotlin Multiplatform
                        </Link>
                      </div>

                      {/* By Type */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        By Type
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        <Link
                          to="/web-app-development-company"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Web App Development
                        </Link>
                        <Link
                          to="/backend-api-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Backend and API
                        </Link>
                        <Link
                          to="/cross-platform-app-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Cross-Platform Development
                        </Link>
                        <Link
                          to="/ar-app-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          AR App Development
                        </Link>
                        <Link
                          to="/virtual-reality-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          VR App Development
                        </Link>
                        <Link
                          to="/iot-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          IoT App Development
                        </Link>
                        <Link
                          to="/mobile-game-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Mobile Game Development
                        </Link>
                      </div>

                      {/* Launch & Growth */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        Launch &amp; Growth
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        <Link
                          to="/app-store-optimization"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          App Store Optimization
                        </Link>
                        <Link
                          to="/product-launch-strategy"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Product Launch Strategy
                        </Link>
                        <Link
                          to="/post-launch-analytics-iteration"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Post Launch Analytics and Iteration
                        </Link>
                      </div>
                    </div>

                    {/* Group 2: Artificial Intelligence */}
                    <div className="space-y-2 border-t border-white/[0.06] pt-3">
                      <div className="font-bold text-white text-[15px]">
                        Artificial Intelligence
                      </div>

                      {/* AI Servicess */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        AI Servicess
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        {[
                          { name: 'AI Development', to: '/ai-development' },
                          { name: 'AI App Development', to: '/ai-app-development-services' },
                          { name: 'AI Chatbot Development', to: '/ai-chatbot-development-services' },
                          { name: 'AI Agent Development', to: '/ai-agent-development' },
                          { name: 'Generative AI Development', to: '/generative-ai-development-company' },
                          { name: 'Machine Learning Development', to: '/machine-learning-development-services' },
                          { name: 'NLP Development', to: '/nlp-development-services' },
                          { name: 'Computer Vision Development', to: '/computer-vision-development-services' },
                          { name: 'AI MVP Development', to: '/ai-mvp-development' },
                        ].map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* Automation */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        Automation
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        {[
                          { name: 'AI Automation', to: '/ai-automation-services' },
                          { name: 'System Integration & API Automation Services', to: '/system-integration-api-automation' },
                          { name: 'Business Process Automation Services', to: '/business-process-automation' },
                          { name: 'RPA Development', to: '/rpa-development-services' },
                        ].map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Group 3: Digital Product Development */}
                    <div className="space-y-2 border-t border-white/[0.06] pt-3">
                      <div className="font-bold text-white text-[15px]">
                        Digital Product Development
                      </div>

                      {/* By Engagement */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        By Engagement
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        {[
                          { name: 'Digital Product Development', to: '/digital-product-development' },
                          { name: 'Discovery Sprint', to: '/discovery-sprint' },
                          { name: 'MVP Development', to: '/mvp-development' },
                          { name: 'Product Rescue & Scaling', to: '/product-rescue-scaling' },
                          { name: 'Product Strategy & Consulting', to: '/product-strategy-consulting' },
                          { name: 'Custom Software Development', to: '/custom-software-development' },
                        ].map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* By Craft */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        By Craft
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        {[
                          { name: 'UI/UX Design', to: '/ui-ux-design' },
                          { name: 'Interactive Prototyping', to: '/interactive-prototyping' },
                        ].map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Industries Accordion */}
            <div className="border-b border-white/[0.06] pb-1.5">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('industries')}
                className="w-full flex items-center justify-between py-2.5 px-3 text-left text-[15px] font-medium text-white hover:text-[#00CE44] rounded-none transition-colors cursor-pointer"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#00CE44] transition-transform duration-300 ${
                    mobileAccordion === 'industries' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  mobileAccordion === 'industries' ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-0 pr-2 py-2 space-y-2 border-l-0 border-[#00CE44]/40 ml-3 text-[13px]">
                    {[
                      { label: 'All Industries', to: '/industries' },
                      { label: 'Healthcare', to: '/healthcare-app-development' },
                      { label: 'Fitness', to: '/fitness-app-development' },
                      { label: 'FinTech', to: '/fintech-app-development' },
                      { label: 'Dating', to: '/dating-app-development-company' },
                      { label: 'Education', to: '/education-app-development-company' },
                      { label: 'Real Estate', to: '/real-estate-app-development-company' },
                      { label: 'Travel', to: '/travel-app-development-company' },
                      { label: 'Food Delivery', to: '/food-delivery-app-development' },
                      { label: 'eCommerce', to: '/ecommerce-app-development-company' },
                  { label: 'Startup', to: '/startup-app-development-company' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block text-slate-200 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Locations Accordion */}
            <div className="border-b border-white/[0.06] pb-1.5">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('locations')}
                className="w-full flex items-center justify-between py-2.5 px-3 text-left text-[15px] font-medium text-white hover:text-[#00CE44] rounded-none transition-colors cursor-pointer"
              >
                <span>Locations</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#00CE44] transition-transform duration-300 ${
                    mobileAccordion === 'locations' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  mobileAccordion === 'locations' ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-0 pr-2 py-2 space-y-2 border-l-0 border-[#00CE44]/40 ml-3 text-[13px]">
                    {[
                      { label: 'San Francisco', to: '/mobile-app-development-san-francisco' },
                      { label: 'New York', to: '/mobile-app-development-new-york' },
                      { label: 'Austin', to: '/mobile-app-development-austin' },
                      { label: 'Toronto', to: '/mobile-app-development-company-in-toronto-canada' },
                      { label: 'London', to: '/mobile-app-development-company-london-uk' },
                      { label: 'Dubai', to: '/mobile-app-development-company-dubai-uae' },
                      { label: 'Singapore', to: '/mobile-app-development-company-singapore' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block text-slate-200 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Case Studies (Direct Link) */}
            <div className="border-b border-white/[0.06] pb-1.5">
              <Link
                to="/portfolio"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-between py-2.5 px-3 text-left text-[15px] font-medium text-white hover:text-[#00CE44] rounded-none transition-colors"
              >
                <span>Case Studies</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* 5. Company Accordion */}
            <div className="border-b border-white/[0.06] pb-1.5">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('company')}
                className="w-full flex items-center justify-between py-2.5 px-3 text-left text-[15px] font-medium text-white hover:text-[#00CE44] rounded-none transition-colors cursor-pointer"
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#00CE44] transition-transform duration-300 ${
                    mobileAccordion === 'company' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  mobileAccordion === 'company' ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-0 pr-2 py-2 space-y-2 border-l-0 border-[#00CE44]/40 ml-3 text-[13px]">
                    {[
                      { label: 'About', to: '/about-us' },
                      { label: 'Blogs', to: '/blog' },
                      { label: 'Press & Media', to: '/press-release' },
                      { label: 'Partnership', to: '/partnership' },
                      { label: 'Life At Inceptives Digital', to: '/life-at-inceptives-digital' },
                      { label: 'Leadership', to: '/leadership' },
                      { label: "Founder's Letter", to: '/founders-letter' },
                      { label: 'Contact Us', to: '/contact-us' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block text-slate-200 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Row: Phone Number & Get In Touch button in ONE row side-by-side */}
            <div className="border-t border-white/[0.08] pt-3.5 mt-2 flex items-center justify-between gap-2 sm:gap-4 shrink-0">
              <a
                href="tel:+14697888527"
                className="inline-flex items-center gap-2 text-white hover:text-[#00CE44] text-[13px] sm:text-[15px] font-medium transition-colors shrink-0 whitespace-nowrap py-1"
              >
                <svg
                  className="w-4 h-4 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                  <path
                    d="M14.5 4.5a5 5 0 0 1 5 5M14.5 7.5a2 2 0 0 1 2 2M14.5 1.5a8 8 0 0 1 8 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
                <span>(469) 788-8527</span>
              </a>

              <Link
                to="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-[13px] sm:text-sm whitespace-nowrap transition-colors active:scale-95 shadow-none shrink-0"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
