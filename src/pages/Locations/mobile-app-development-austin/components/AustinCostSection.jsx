import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

export default function AustinCostSection() {
  const tiers = [
    {
      title: 'Foundation App',
      tag: 'Starter / MVP',
      price: '$18,000 – $50,000',
      timeline: '8 to 14 weeks',
      desc: 'For Austin startups validating a product idea or launching a focused single-purpose application.',
      includes: [
        'Secure user authentication',
        'Core feature set and user dashboard',
        'Push notifications and basic analytics',
        'TDPSA-compliant data storage',
        'Admin dashboard',
      ],
      subtext:
        'The right starting point for Austin founders who need a production-ready product without the overhead of a full-scale platform.',
    },
    {
      title: 'Advanced App',
      tag: 'Growth / Scaling',
      price: '$45,000 – $120,000',
      timeline: '14 to 24 weeks',
      featured: true,
      desc: 'For Austin businesses delivering multi-feature functionality across multiple user types and compliance frameworks.',
      includes: [
        'Cross-platform or native iOS and Android build',
        'Third-party API and payment integration',
        'Multi-role dashboards and user management',
        'AI-assisted features and real-time data sync',
        'TDPSA, HIPAA, or SOC 2 compliance architecture',
      ],
      subtext:
        'Where real user volume, integration complexity, and compliance requirements meet in one production-ready platform.',
    },
    {
      title: 'Enterprise App',
      tag: 'Large Scale / Multi-Site',
      price: '$120,000 – $350,000+',
      timeline: '20 to 32 weeks',
      desc: 'For Austin enterprises investing in mobile application development across departments, locations, or customer groups.',
      includes: [
        'Full-scale native or cross-platform architecture',
        'Multi-system integrations and enterprise APIs',
        'Advanced AI, ML, and IoT capabilities',
        'Multi-site architecture and role-based access control',
        'Full compliance stack across TDPSA, HIPAA, SOC 2, and PCI-DSS',
        <>
          Staged rollouts, live performance monitoring, and{' '}
          <Link
            to="/blog/mobile-app-maintenance-cost"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            ongoing maintenance
          </Link>
        </>,
      ],
      subtext:
        'Built for Austin organisations where compliance depth, transaction security, and operational scale are baseline requirements.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            How Much Does It Cost to Build a{' '}
            <span className="text-[#00CE44]">Mobile App in Austin?</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Every engagement has different compliance requirements, platform targets, and integration complexity. These{' '}
            <Link
              to="/blog/mobile-app-development-cost"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
            >
              mobile app development cost
            </Link>{' '}
            reflect typical project scope and are defined precisely in the discovery sprint.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {tiers.map((t) => (
            <div
              key={t.title}
              className={`p-7 sm:p-9 rounded-2xl bg-[#12141a] border text-left flex flex-col justify-between transition-colors ${
                t.featured ? 'border-[#00CE44]/60' : 'border-white/10 hover:border-[#00CE44]/40'
              }`}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {t.title}
                </h3>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                  {t.desc}
                </p>

                {/* Price Box */}
                <div className="bg-[#181a20] border border-white/5 p-5 rounded-xl mb-6">
                  <div className="text-xs uppercase tracking-wider text-white/50 font-bold mb-1">
                    ESTIMATED COST
                  </div>
                  <div className="whitespace-nowrap font-bold text-lg sm:text-xl lg:text-[19px] xl:text-2xl tracking-tight text-white mb-1.5 shrink-0">
                    {t.price}
                  </div>
                  <div className="text-xs sm:text-sm text-[#00CE44] font-medium">
                    Timeline: {t.timeline}
                  </div>
                </div>

                {/* Includes List */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                    INCLUDES:
                  </div>
                  <ul className="space-y-2.5">
                    {t.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                        <Check className="w-4 h-4 text-[#00CE44] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 text-xs sm:text-sm text-white/60 italic leading-relaxed">
                {t.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
