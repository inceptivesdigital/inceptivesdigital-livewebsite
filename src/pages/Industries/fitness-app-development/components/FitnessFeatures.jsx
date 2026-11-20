import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function FitnessFeatures() {
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
      id: 'user-centric',
      tabTitle: 'User-Centric Fitness',
      subtitle:
        'Capabilities that make the fitness experience simple, personalised, and worth returning to.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img1-502x1024.avif',
      leftFeatures: [
        {
          name: 'Personalised Workout Plans',
          desc: 'AI-driven workout routines that adapt to individual goals and fitness levels.',
        },
        {
          name: 'Goal Setting and Progress Tracking',
          desc: 'Performance tracking and milestone visualisation are built into an intuitive interface.',
        },
      ],
      rightFeatures: [
        {
          name: 'Nutrition and Meal Planning',
          desc: 'Calorie tracking, meal logging, and personalised nutrition plans supported by verified food databases.',
        },
        {
          name: 'Video Tutorials and Live Sessions',
          desc: 'On-demand video tutorials, workout libraries, and live one-on-one coaching sessions.',
        },
      ],
    },
    {
      id: 'smart-tracking',
      tabTitle: 'Smart Tracking & Integration',
      subtitle:
        'Accurate, uninterrupted tracking through advanced device and sensor integrations.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img2-502x1024.avif',
      leftFeatures: [
        {
          name: 'Real-Time Activity Tracking',
          desc: 'Real-time tracking of steps, distance, heart rate, and calories via device sensors.',
        },
        {
          name: 'Wearable Device Integration',
          desc: 'Wearable device integration for Apple Watch, Fitbit, Garmin, and other devices.',
        },
      ],
      rightFeatures: [
        {
          name: 'AI-Based Progress Insights',
          desc: 'Predictive analytics and machine learning are built into the coaching layer for data-driven progress insights.',
        },
        {
          name: 'GPS and Mapping Features',
          desc: 'Real-time GPS tracking for running and cycling route monitoring.',
        },
      ],
    },
    {
      id: 'engagement',
      tabTitle: 'Engagement & Retention',
      subtitle:
        'Social and gamified experiences that turn fitness into a consistent habit.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img3-502x1024.avif',
      leftFeatures: [
        {
          name: 'Social Engagement and Challenges',
          desc: 'Leaderboards, group challenges, and reward systems that build an engaged fitness community.',
        },
        {
          name: 'Push Notifications and Reminders',
          desc: 'Personalised alerts for workouts, milestones, and goals delivered at the right moment.',
        },
      ],
      rightFeatures: [
        {
          name: 'Gamification Elements',
          desc: 'Badges, achievements, and streak tracking are built to motivate consistent engagement.',
        },
      ],
    },
    {
      id: 'monetization',
      tabTitle: 'Monetization & Business',
      subtitle: 'Revenue and operations managed efficiently within the product.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img4-502x1024.avif',
      leftFeatures: [
        {
          name: 'Secure Payments and Subscriptions',
          desc: 'Secure payment processing via Stripe, PayPal, and Apple Pay with recurring subscription support.',
        },
        {
          name: 'Membership Management',
          desc: 'Subscription management, renewal handling, and access level control in one dashboard.',
        },
      ],
      rightFeatures: [
        {
          name: 'Admin Dashboard and Analytics',
          desc: 'User activity, revenue, and engagement metrics are monitored from a consolidated admin dashboard.',
        },
      ],
    },
    {
      id: 'security',
      tabTitle: 'Security & Compliance',
      subtitle:
        'User data is protected, and compliance standards are maintained across every platform.',
      centerImg: '/assets/healthcare/healthcare-sec9-center-img1-502x1024.avif',
      leftFeatures: [
        {
          name: 'Data Encryption and Secure Authentication',
          desc: 'End-to-end encryption and secure authentication protect personal and health data.',
        },
        {
          name: 'HIPAA and GDPR Compliance',
          desc: 'HIPAA and GDPR compliance are built into the architecture from the start.',
        },
      ],
      rightFeatures: [
        {
          name: 'Cloud-Based Architecture',
          desc: 'Scalable cloud infrastructure built for reliable performance under peak usage.',
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
            <span className="text-[#00CE44]">Fitness App Development Features</span>{' '}
            Built for Performance, Retention, and Engagement
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Performance, personalisation, security, and engagement are built into every fitness application we deliver.
          </p>
        </div>

        {/* Single-Line 5-Column Horizontal Tab Bar */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-5 items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar py-2 mb-8 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {featureTabs.map((tab, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={tab.id}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`rounded-none shrink-0 lg:shrink min-w-[210px] sm:min-w-[230px] lg:min-w-0 lg:w-full py-3.5 px-4 text-xs sm:text-sm text-center transition-all duration-200 cursor-pointer border-0 whitespace-nowrap font-medium ${
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

        {/* 3-Column Layout: Left Feature Cards | Centered Phone Mockup | Right Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-12">
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

          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <img
              src={current.centerImg}
              alt={current.tabTitle}
              className="w-auto max-h-[540px] sm:max-h-[580px] object-contain select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              loading="lazy"
            />
          </div>

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

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00CE44] text-black font-medium text-sm sm:text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
          >
            Book A Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
