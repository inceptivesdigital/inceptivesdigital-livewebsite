import { useState, useRef } from 'react'

function CheckCircleFill({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

export default function TorontoComplianceSecurity() {
  const [activeTab, setActiveTab] = useState(0)
  const tabsRef = useRef(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const hasMovedRef = useRef(false)

  const handleMouseDown = (e) => {
    isDraggingRef.current = true
    hasMovedRef.current = false
    startXRef.current = e.pageX - (tabsRef.current ? tabsRef.current.offsetLeft : 0)
    scrollLeftRef.current = tabsRef.current ? tabsRef.current.scrollLeft : 0
  }

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !tabsRef.current) return
    const x = e.pageX - tabsRef.current.offsetLeft
    const walk = (x - startXRef.current) * 1.5
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true
    }
    tabsRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const handleWheel = (e) => {
    if (tabsRef.current && tabsRef.current.scrollWidth > tabsRef.current.clientWidth) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        tabsRef.current.scrollLeft += e.deltaY * 0.8
      }
    }
  }

  const handleTabClick = (idx, e) => {
    if (hasMovedRef.current) {
      return
    }
    setActiveTab(idx)
    if (tabsRef.current && e?.currentTarget) {
      const container = tabsRef.current
      const target = e.currentTarget
      const targetLeft = target.offsetLeft
      const targetWidth = target.offsetWidth
      const containerWidth = container.offsetWidth
      container.scrollTo({
        left: targetLeft - containerWidth / 2 + targetWidth / 2,
        behavior: 'smooth',
      })
    }
  }

  const tabs = [
    {
      title: 'Data Privacy & Sovereignty',
      desc: "Privacy requirements shape how applications collect, store, and process personal information. For Toronto businesses, this can involve PIPEDA, consent management, data retention, and breach-response procedures. Applications handling personal health information may also require safeguards under Ontario's PHIPA.",
      image: '/assets/locations/new-york/ny-compliance-privacy.jpg',
      items: [
        'PIPEDA (Personal Information Protection and Electronic Documents Act)',
        'PHIPA (Personal Health Information Protection Act, Ontario)',
        'OPC Guidelines for Obtaining Meaningful Consent',
        'Data residency planning for regulated Canadian sectors',
      ],
    },
    {
      title: 'Digital Accessibility (AODA)',
      desc: "Accessibility starts with navigation, readable interfaces, and interactions that accommodate different users. Toronto businesses may face obligations under Ontario's AODA, depending on their organization and digital services. Design and testing can address applicable accessibility requirements before release.",
      image: '/assets/locations/new-york/ny-compliance-ai.jpg',
      items: [
        'Accessibility for Ontarians with Disabilities Act (AODA)',
        'Integrated Accessibility Standards Regulation (IASR)',
        'WCAG 2.0 Level AA conformance',
        'Ontario Human Rights Code, duty to accommodate',
      ],
    },
    {
      title: 'Anti-Spam & Communication',
      desc: "Commercial messaging features require careful handling of consent, sender identification, and unsubscribe mechanisms. Canada's Anti-Spam Legislation (CASL) may apply to promotional emails, SMS, and certain app communications. Message content, delivery methods, and applicable exemptions determine the requirements.",
      image: '/assets/locations/new-york/ny-compliance-healthcare.jpg',
      items: [
        "Canada's Anti-Spam Legislation (CASL)",
        'CRTC enforcement guidelines for electronic messaging',
        'Express and implied consent tracking',
      ],
    },
    {
      title: 'Payment & Fintech Security',
      desc: 'Payment applications must account for transaction security, sensitive financial data, and third-party integrations. For Toronto fintech businesses, requirements may include PCI DSS, the Retail Payment Activities Act, or FINTRAC obligations, depending on the services provided and regulatory classification.',
      image: '/assets/locations/new-york/ny-compliance-fintech.jpg',
      items: [
        'PCI DSS (Payment Card Industry Data Security Standard)',
        'Retail Payment Activities Act (RPAA), Bank of Canada',
        'FINTRAC reporting obligations for regulated payment activities',
      ],
    },
    {
      title: 'App Store & Federal Identity',
      desc: "Toronto apps must satisfy platform-level review standards beyond privacy and payment rules. We align builds with Apple and Google's Canadian data handling policies, and we account for identity verification needs in regulated industries.",
      image: '/assets/locations/new-york/ny-compliance-gov.jpg',
      items: [
        'Apple App Store and Google Play regional compliance policies',
        'Know Your Customer (KYC) identity verification standards',
        'Government of Canada digital identity guidelines (where applicable)',
      ],
    },
  ]

  const current = tabs[activeTab]

  return (
    <section className="py-20 lg:py-28 bg-[#050608] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            The Legal Standards Our Toronto{' '}
            <span className="text-[#00CE44]">Development Team Builds Around</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Mobile applications serving Toronto businesses may fall under Canadian federal laws and Ontario-specific requirements, depending on their industry and functionality. Our mobile app development company considers applicable privacy, accessibility, payment, and data-security obligations during architecture and development, allowing teams to address regulatory requirements before launch.
          </p>
        </div>

        {/* 5 Horizontal Tabs: Single line full width on desktop (5-col grid), draggable hidden-scrollbar horizontal scroll on smaller devices */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-5 items-center gap-2.5 sm:gap-3 lg:gap-3 overflow-x-auto no-scrollbar py-2 mb-12 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={tab.title}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`rounded-none shrink-0 lg:shrink min-w-[210px] sm:min-w-[230px] lg:min-w-0 lg:w-full py-3.5 px-4 sm:px-5 text-xs sm:text-sm text-center transition-all duration-200 cursor-pointer border-0 whitespace-nowrap font-medium ${
                  isActive
                    ? 'bg-[#00CE44] text-black font-semibold shadow-none'
                    : 'bg-[#14151a] hover:bg-[#1e2028] text-white/90 font-medium'
                }`}
              >
                {tab.title}
              </button>
            )
          })}
        </div>

        {/* Active Tab 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#101218] rounded-[24px] p-7 sm:p-10 lg:p-12 border-0 shadow-none">
          {/* Left Column: Title, Description, Bullet Items */}
          <div className="lg:col-span-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
              {current.title}
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-7 font-normal">
              {current.desc}
            </p>

            <ul className="space-y-3.5">
              {current.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-white/90">
                  <CheckCircleFill className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Visual Image */}
          <div className="lg:col-span-6">
            <div className="w-full h-64 sm:h-80 lg:h-[360px] rounded-[20px] overflow-hidden border-0 shadow-none">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
