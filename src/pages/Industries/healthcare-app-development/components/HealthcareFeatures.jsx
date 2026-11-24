import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function HealthcareFeatures() {
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

  const featureTabs = [
    {
      id: 'patient',
      tabTitle: 'Patient-Focused Features',
      subtitle:
        'Patients will be able to experience healthcare in a way that is very easy and accessible.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img1-502x1024.avif',
      leftFeatures: [
        {
          name: 'Appointment Scheduling',
          desc: 'Easily book your consultations, whether in-person or through telemedicine.',
        },
        {
          name: 'Patient Portal',
          desc: 'Get secure access to medical records, lab results, and visit summaries.',
        },
        {
          name: 'Reminders & Push Notifications',
          desc: 'Automatic alerts for medications, follow-up appointments, and others.',
        },
      ],
      rightFeatures: [
        {
          name: 'Telemedicine & Video Consultations',
          desc: 'Always be able to connect with the healthcare provider of your choice, wherever you are.',
        },
        {
          name: 'Health Tracking & Wearable Integration',
          desc: 'Watch vitals, activities, and medication adherence.',
        },
        {
          name: 'Feedback & Surveys',
          desc: 'Share your opinions to improve healthcare services and patient satisfaction.',
        },
      ],
    },
    {
      id: 'doctor',
      tabTitle: 'Doctor & Clinician-Focused Features',
      subtitle:
        'Optimizing clinical processes and facilitating patient care based on data.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img2-502x1024.avif',
      leftFeatures: [
        {
          name: 'EHR / EMR Integration',
          desc: 'Effortlessly view and edit patient records.',
        },
        {
          name: 'Patient Management Dashboard',
          desc: 'Handle appointments, treatment plans, and medical history very easily.',
        },
        {
          name: 'Digital Prescriptions & Orders',
          desc: 'Make writing prescriptions, taking lab requests, and doing follow-ups simpler.',
        },
      ],
      rightFeatures: [
        {
          name: 'Analytics & Insights',
          desc: 'Up-to-date and actionable clinical data for less guesswork in making decisions.',
        },
        {
          name: 'Secure Messaging',
          desc: 'Conduct conversations with both patients and healthcare teams in a confidential manner.',
        },
        {
          name: 'AI-Powered Recommendations',
          desc: 'Tailored medical insights for improved patient outcomes.',
        },
      ],
    },
    {
      id: 'admin',
      tabTitle: 'Admin & Healthcare Organization Features',
      subtitle:
        'Enhancing the healthcare industry’s operations, security, and regulatory compliance.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img3-502x1024.avif',
      leftFeatures: [
        {
          name: 'Role-Based Access Control',
          desc: 'Distribute user permissions among staff, medical practitioners, and managers.',
        },
        {
          name: 'Audit Trails & Compliance Monitoring',
          desc: 'Monitor actions to ensure compliance with HIPAA and GDPR requirements.',
        },
        {
          name: 'Data Security & Encryption',
          desc: 'Secure confidential medical data on every platform.',
        },
      ],
      rightFeatures: [
        {
          name: 'Reporting & Analytics Dashboards',
          desc: 'Monitor operational performance, efficiency, and results closely.',
        },
        {
          name: 'Workflow Automation',
          desc: 'Make non-clinical processes more efficient and cut down on hand-operated work.',
        },
        {
          name: 'Customizable Interfaces',
          desc: 'Tailor dashboards and workflows for organizational needs.',
        },
      ],
    },
    {
      id: 'advanced',
      tabTitle: 'Advanced Features',
      subtitle:
        'Better patient interaction, deeper healthcare insights, and informed decisions.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img4-502x1024.avif',
      leftFeatures: [
        {
          name: 'Analyzing Patient Feedback by AI',
          desc: 'Transform patient reactions into useful knowledge.',
        },
        {
          name: 'Predictive Health Analytics',
          desc: 'Foresee risks and suggest early interventions.',
        },
      ],
      rightFeatures: [
        {
          name: 'Third-Party Devices & Services Integration',
          desc: 'Link wearables, lab, and pharmacy systems.',
        },
        {
          name: 'Multi-Language & Accessibility Support',
          desc: 'Help with different patient groups without difficulty.',
        },
      ],
    },
  ]

  const current = featureTabs[activeTab]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            <Link
              to="/blog/must-have-features-healthcare-app"
              className="text-[#00CE44] underline underline-offset-4"
            >
              Healthcare App Features
            </Link>{' '}
            Built Around Real Clinical Workflows and Real User Needs
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Features built for patients, clinicians, and healthcare organisations. Each module is designed around real clinical workflows, not generic app templates.
          </p>
        </div>

        {/* Single-Line 4-Column Horizontal Tab Bar */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-4 items-center gap-2.5 sm:gap-3 lg:gap-4 overflow-x-auto no-scrollbar py-2 mb-8 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {featureTabs.map((tab, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={tab.id}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`rounded-none shrink-0 lg:shrink min-w-[230px] sm:min-w-[250px] lg:min-w-0 lg:w-full py-3.5 px-4 text-xs sm:text-sm text-center transition-all duration-200 cursor-pointer border-0 whitespace-nowrap font-medium ${
                  isActive
                    ? 'bg-[#00CE44] text-black font-semibold shadow-none'
                    : 'bg-[#202020] hover:bg-[#2a2a2a] text-white/90 font-medium'
                }`}
              >
                {tab.tabTitle}
              </button>
            )
          })}
        </div>

        {/* Active Category Subtitle */}
        <p className="text-center text-white/80 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          {current.subtitle}
        </p>

        {/* WordPress 3-Column Layout: Left Feature Cards | Centered Phone Mockup | Right Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column Feature Cards */}
          <div className="lg:col-span-4 space-y-5">
            {current.leftFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#202020] rounded-[20px] p-6 sm:p-7 border border-[#2B2B2B] hover:border-[#00CE44]/60 transition-colors text-left"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2">
                  {feat.name}
                </h3>
                <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column: Exact WordPress Phone Mockup */}
          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <img
              src={current.centerImg}
              alt={current.tabTitle}
              className="w-auto max-h-[540px] sm:max-h-[600px] object-contain select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              loading="lazy"
            />
          </div>

          {/* Right Column Feature Cards */}
          <div className="lg:col-span-4 space-y-5">
            {current.rightFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#202020] rounded-[20px] p-6 sm:p-7 border border-[#2B2B2B] hover:border-[#00CE44]/60 transition-colors text-left"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2">
                  {feat.name}
                </h3>
                <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
