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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const toggleMobileAccordion = (section) => {
    setMobileAccordion((prev) => (prev === section ? null : section))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4">
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
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/assets/update-logo.png"
              alt="Inceptives Digital"
              className="h-7 sm:h-8 w-auto object-contain brightness-110"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
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

            <button
              onMouseEnter={() => setActiveMenu('industries')}
              onClick={() => setActiveMenu(activeMenu === 'industries' ? null : 'industries')}
              className={`text-[15px] font-medium transition-colors cursor-pointer py-1 ${
                activeMenu === 'industries' ? 'text-[#00CE44]' : 'text-slate-200 hover:text-white'
              }`}
            >
              Industries
            </button>

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

          {/* Right Action: Button & Hamburger Icon together with EXACT 15px gap (NO phone number) */}
          <div className="flex items-center gap-[15px]">
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
          <div className="hidden lg:grid grid-cols-12 w-full bg-[#27292c] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl shadow-black/90 animate-in fade-in duration-150 max-h-[calc(100vh-90px)] 2xl:max-h-none overflow-y-auto 2xl:overflow-visible megamenu-scroll">
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
                <li><Link to="/mobile-app-development" className="hover:text-white transition">Kotlin Multiplatform</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                By Type
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/custom-software-development" className="hover:text-white transition">Web App Development</Link></li>
                <li><Link to="/custom-software-development" className="hover:text-white transition">Backend and API</Link></li>
                <li><Link to="/custom-software-development" className="hover:text-white transition">Cross-Platform Development</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                Launch &amp; Growth
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/services" className="hover:text-white transition">App Store Optimization</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Product Launch Strategy</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Post Launch Analytics and Iteration</Link></li>
              </ul>
            </div>

            {/* Column 3: Artificial Intelligence */}
            <div className="col-span-3 p-5 2xl:p-7 border-r border-[#37393d]">
              <h3 className="text-[16px] 2xl:text-[20px] font-bold text-white mb-2 2xl:mb-3">
                Artificial Intelligence
              </h3>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/services" className="hover:text-white transition">Custom AI</Link></li>
                <li><Link to="/services" className="hover:text-white transition">LLM Integration</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Generative AI</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Agentic AI</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Agentic AI Workflow Automation</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/services" className="hover:text-white transition">AI Chatbots and Virtual Assistants</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Predictive Analytics</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Natural Language Processing</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Computer Vision</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                Integration
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/services" className="hover:text-white transition">AI Product Strategy</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Model Training &amp; Fine-Tuning</Link></li>
                <li><Link to="/services" className="hover:text-white transition">AI Infrastructure &amp; MLOps</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Ethical AI &amp; Governance</Link></li>
              </ul>
            </div>

            {/* Column 4: Digital Product & Staff */}
            <div className="col-span-4 p-5 2xl:p-7">
              <h3 className="text-[16px] 2xl:text-[20px] font-bold text-white mb-2 2xl:mb-3">
                Digital Product Development
              </h3>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/services" className="hover:text-white transition">Product Design (UI/UX)</Link></li>
                <li><Link to="/services" className="hover:text-white transition">MVP Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Discovery Sprint</Link></li>
                <li><Link to="/services" className="hover:text-white transition">User Research &amp; Prototyping</Link></li>
              </ul>

              <h4 className="text-[12px] 2xl:text-[13px] font-bold text-[#00CE44] mb-1.5 2xl:mb-2 uppercase tracking-wider">
                Tech &amp; Talent
              </h4>
              <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-5 text-[13px] 2xl:text-[14px] text-slate-300">
                <li><Link to="/staff-augmentation" className="hover:text-white transition">Dedicated Development Teams</Link></li>
                <li><Link to="/staff-augmentation" className="hover:text-white transition">Staff Augmentation</Link></li>
                <li><Link to="/staff-augmentation" className="hover:text-white transition">CTO as a Service</Link></li>
              </ul>
            </div>
          </div>
        )}

        {/* MEGA MENU: INDUSTRIES (Desktop) */}
        {activeMenu === 'industries' && (
          <div className="hidden lg:flex w-full bg-[#27292c] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl shadow-black/90 animate-in fade-in duration-150 overflow-hidden max-h-[calc(100vh-90px)] 2xl:max-h-none overflow-y-auto 2xl:overflow-visible megamenu-scroll">
            <div className="w-56 shrink-0 p-6 2xl:p-8 border-r border-white/10 flex items-start bg-[#232528]/80">
              <div className="inline-flex items-center gap-2.5 text-[16px] 2xl:text-[20px] font-bold text-[#00CE44]">
                <span>Industries</span>
                <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#00CE44] stroke-[2]" />
              </div>
            </div>

            <div className="w-[340px] shrink-0 p-6 2xl:p-8 border-r border-white/10">
              <ul className="space-y-3">
                {[
                  { label: 'Healthcare', to: '/healthcare-app-development' },
                  { label: 'Fitness', to: '/fitness-app-development' },
                  { label: 'Dating', to: '/dating-app-development-company' },
                  { label: 'Education', to: '/education-app-development-company' },
                  { label: 'Real Estate', to: '/real-estate-app-development-company' },
                  { label: 'Travel', to: '/travel-app-development-company' },
                  { label: 'Food Delivery', to: '/food-delivery-app-development' },
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
          <div className="hidden lg:flex w-full bg-[#27292c] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl shadow-black/90 animate-in fade-in duration-150 overflow-hidden max-h-[calc(100vh-90px)] 2xl:max-h-none overflow-y-auto 2xl:overflow-visible megamenu-scroll">
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
          <div className="hidden lg:flex w-full bg-[#27292c] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl shadow-black/90 animate-in fade-in duration-150 overflow-hidden max-h-[calc(100vh-90px)] 2xl:max-h-none overflow-y-auto 2xl:overflow-visible megamenu-scroll">
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
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileOpen ? 'max-h-[85vh] opacity-100 mt-0' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="p-4 sm:p-5 bg-[#25272a] border-x border-b border-[#37393d] rounded-b-2xl shadow-2xl overflow-y-auto max-h-[80vh] flex flex-col gap-1.5 no-scrollbar">
            
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
                          to="/mobile-app-development"
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
                          to="/custom-software-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Web App Development
                        </Link>
                        <Link
                          to="/custom-software-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Backend and API
                        </Link>
                        <Link
                          to="/custom-software-development"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Cross-Platform Development
                        </Link>
                      </div>

                      {/* Launch & Growth */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        Launch &amp; Growth
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        <Link
                          to="/services"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          App Store Optimization
                        </Link>
                        <Link
                          to="/services"
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-white transition-colors"
                        >
                          Product Launch Strategy
                        </Link>
                        <Link
                          to="/services"
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
                      <div className="space-y-1.5 pl-2 text-slate-300">
                        {[
                          'Custom AI',
                          'LLM Integration',
                          'Generative AI',
                          'Agentic AI',
                          'Agentic AI Workflow Automation',
                        ].map((ai) => (
                          <Link
                            key={ai}
                            to="/services"
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {ai}
                          </Link>
                        ))}
                      </div>

                      {/* Solutions */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        Solutions
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        {[
                          'AI Chatbots and Virtual Assistants',
                          'Predictive Analytics',
                          'Natural Language Processing',
                          'Computer Vision',
                        ].map((sol) => (
                          <Link
                            key={sol}
                            to="/services"
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {sol}
                          </Link>
                        ))}
                      </div>

                      {/* Integration */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        Integration
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        {[
                          'AI Product Strategy',
                          'Model Training & Fine-Tuning',
                          'AI Infrastructure & MLOps',
                          'Ethical AI & Governance',
                        ].map((intg) => (
                          <Link
                            key={intg}
                            to="/services"
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {intg}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Group 3: Digital Product Development */}
                    <div className="space-y-2 border-t border-white/[0.06] pt-3">
                      <div className="font-bold text-white text-[15px]">
                        Digital Product Development
                      </div>
                      <div className="space-y-1.5 pl-2 text-slate-300">
                        {[
                          'Product Design (UI/UX)',
                          'MVP Development',
                          'Discovery Sprint',
                          'User Research & Prototyping',
                        ].map((dp) => (
                          <Link
                            key={dp}
                            to="/services"
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {dp}
                          </Link>
                        ))}
                      </div>

                      {/* Tech & Talent */}
                      <div className="text-[#00CE44] uppercase tracking-wider text-[11px] font-bold pt-1.5 pl-2">
                        Tech &amp; Talent
                      </div>
                      <div className="space-y-1.5 pl-4 text-slate-300">
                        {[
                          'Dedicated Development Teams',
                          'Staff Augmentation',
                          'CTO as a Service',
                        ].map((tt) => (
                          <Link
                            key={tt}
                            to="/staff-augmentation"
                            onClick={() => setMobileOpen(false)}
                            className="block hover:text-white transition-colors"
                          >
                            {tt}
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
                      { label: 'Healthcare', to: '/healthcare-app-development' },
                      { label: 'Fitness', to: '/fitness-app-development' },
                      { label: 'Dating', to: '/dating-app-development-company' },
                      { label: 'Education', to: '/education-app-development-company' },
                      { label: 'Real Estate', to: '/real-estate-app-development-company' },
                      { label: 'Travel', to: '/travel-app-development-company' },
                      { label: 'Food Delivery', to: '/food-delivery-app-development' },
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
                href="tel:(469) 788-8527"
                className="inline-flex items-center gap-2 text-white hover:text-[#00CE44] text-[13px] sm:text-[15px] font-medium transition-colors shrink-0 whitespace-nowrap py-1"
              >
                <Phone className="w-4 h-4 text-white shrink-0" />
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
