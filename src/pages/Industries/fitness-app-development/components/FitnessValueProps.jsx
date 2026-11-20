import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function FitnessValueProps() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      category: 'Domain Expertise & Connected Intelligence',
      desc: 'Building custom fitness products grounded in real training workflows, AI personalisation, and seamless wearable connectivity.',
      items: [
        {
          num: '01',
          title: 'Fitness Domain Knowledge',
          detail:
            'Developers and consultants with real experience building for gyms, personal trainers, and health startups. Training workflows, user motivation patterns, and retention mechanics should be understood before making architectural decisions.',
        },
        {
          num: '02',
          title: 'AI-Powered Personalisation',
          detail:
            'Intelligent coaching systems that adapt to individual user behaviour, fitness levels, and goals. Personalised workout recommendations, performance forecasts, and adaptive training plans built on machine learning models that improve with every session.',
        },
        {
          num: '03',
          title: 'Wearable and IoT Integration',
          detail:
            'Apple Watch, Fitbit, Garmin, and IoT gym equipment connected through Google Fit and Apple HealthKit APIs. Real-time health metrics are delivered to users and trainers without manual data handling at every step.',
        },
      ],
    },
    {
      category: 'Retention, Security & Full-Cycle Delivery',
      desc: 'Engineered for long-term habit formation, high-concurrency cloud performance, and single-team accountability.',
      items: [
        {
          num: '04',
          title: 'Engagement and Retention Architecture',
          detail:
            'Gamification, social communities, challenges, and push notification systems are built into the product architecture from the start. Retention is not a feature added after launch. It is a design decision made before development begins.',
        },
        {
          num: '05',
          title: 'Scalable and Secure Infrastructure',
          detail:
            'Cloud-based architecture built to handle real-time data, growing user bases, and peak usage without performance degradation. HIPAA and GDPR compliance are built in for applications handling personal health data.',
        },
        {
          num: '06',
          title: 'End-to-End Development',
          detail:
            'Strategy, design, development, testing, deployment, and post-launch support delivered as a single engagement. Every stage is covered without handoffs to external teams or gaps in accountability.',
        },
      ],
    },
  ]

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const current = slides[activeSlide]

  return (
    <section
      className="py-20 lg:py-28 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/healthcare/health-banner.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-black/35 pointer-events-none" aria-hidden="true" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        {/* Top Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            What Inceptives Digital Brings to
            <span className="block text-[#00CE44]">Fitness App Development</span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            Fitness applications fail when studios build generic tracking tools and call them personalised experiences. We build differently.
          </p>
        </div>

        {/* Slide Sub-Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="text-left">
            <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight mb-1.5">
              {current.category}
            </h3>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Pillar"
              className="w-11 h-11 rounded-full bg-[#1c221e] border border-white/15 hover:border-white text-[#00CE44] flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Pillar"
              className="w-11 h-11 rounded-full bg-[#1c221e] border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black text-[#00CE44] flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Equal Cards Grid with Hollow Outlined Green Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.items.map((item) => (
            <div
              key={item.num}
              className="bg-[#1b1d1c]/95 rounded-[16px] p-7 sm:p-8 border border-[#00CE44]/75 hover:border-white transition-colors duration-200 flex flex-col justify-between min-h-[260px] text-left"
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <h4 className="text-xl sm:text-[24px] font-extrabold text-[#00CE44] tracking-tight leading-snug">
                  {item.title}
                </h4>
                <span
                  className="text-4xl sm:text-[46px] font-extrabold leading-none select-none shrink-0"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1.2px #00CE44',
                  }}
                >
                  {item.num}
                </span>
              </div>

              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
