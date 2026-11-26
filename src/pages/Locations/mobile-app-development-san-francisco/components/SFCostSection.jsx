import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SFCostSection() {
  const tiers = [
    {
      name: 'Foundation App',
      tagline: 'Ideal for MVPs and early-stage startups validating product-market fit.',
      cost: '$25,000 – $60,000',
      timeline: '8 to 14 weeks',
      features: [
        'Secure user authentication and onboarding',
        'Core product workflows and user dashboard',
        'Push notifications and event tracking',
        'Admin dashboard for operational management',
        'Cloud infrastructure and API development',
        'Analytics and reporting foundation',
        'Basic third-party integrations',
        'Production deployment and launch support',
      ],
      popular: false,
    },
    {
      name: 'Advanced App',
      tagline: 'Designed for scaling businesses ready to expand functionality and user reach.',
      cost: '$60,000 – $150,000',
      timeline: '14 to 24 weeks',
      features: [
        'Cross-platform or native mobile development',
        'Multi-role user architecture and permissions',
        'Payment gateways and third-party integrations',
        'Real-time synchronization and notifications',
        'AI-powered functionality where applicable',
        'Offline capabilities and background processing',
        'Advanced analytics and reporting',
        'Compliance-ready architecture (HIPAA, GDPR, CCPA, SOC 2)',
        'Scalable cloud infrastructure',
      ],
      popular: true,
    },
    {
      name: 'Enterprise App',
      tagline: 'Built for large-scale enterprises demanding high-end performance and innovation.',
      cost: '$150,000 – $250,000+',
      timeline: '20 to 32 weeks',
      features: [
        'Enterprise-grade iOS and Android app development',
        'Complex multi-role workflows and access controls',
        'ERP, CRM, and legacy system integrations',
        'Single sign-on (SSO) and enterprise authentication',
        'AI-powered automation and advanced data processing',
        'Multi-region cloud infrastructure and scalability',
        'Advanced security, audit logs, and compliance controls',
        'Custom analytics and executive reporting dashboards',
        'Phased deployment, monitoring, and ongoing maintenance',
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Mobile App Development Cost in{' '}
            <span className="text-[#00CE44]">San Francisco</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            The{' '}
            <Link
              to="/blog/mobile-app-development-cost"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
              cost of mobile app development
            </Link>{' '}
            depends on product complexity, platform selection, integrations, compliance requirements, and engineering effort. As a mobile app development company in San Francisco, Inceptives Digital provides fixed-cost estimates tailored to your product requirements before development begins.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 sm:p-8 rounded-[24px] bg-[#14151a] border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative text-left ${
                tier.popular
                  ? 'border-[#00CE44] shadow-2xl shadow-[#00CE44]/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 right-8 px-3.5 py-1 rounded-full bg-[#00CE44] text-black text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-[#00CE44] mb-2">
                  {tier.name}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mb-6 min-h-[38px] font-normal">
                  {tier.tagline}
                </p>

                {/* Price Box with single-line cost */}
                <div className="p-3.5 sm:p-4 rounded-[14px] bg-[#0c0d10] border border-white/5 mb-6">
                  <div className="text-[11px] sm:text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">
                    Estimated Cost
                  </div>
                  <div className="text-lg sm:text-[19px] xl:text-xl font-bold text-white mb-1 tracking-tight whitespace-nowrap">
                    {tier.cost}
                  </div>
                  <div className="text-xs text-[#00CE44] font-medium">
                    Timeline: {tier.timeline}
                  </div>
                </div>

                <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Includes:
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 leading-relaxed">
                      <Check className="w-4 h-4 text-[#00CE44] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-3.5 text-center text-sm font-semibold rounded-none transition-colors ${
                  tier.popular
                    ? 'bg-[#00CE44] hover:bg-[#00b83d] text-black'
                    : 'bg-transparent hover:bg-white/5 border border-white text-white'
                }`}
              >
                Discuss {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
