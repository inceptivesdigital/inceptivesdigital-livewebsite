import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

export default function DubaiCostSection() {
  const tiers = [
    {
      name: 'Foundation App',
      tagline: 'For Dubai startups validating a new product through MVP development with focused functionality and a defined launch scope.',
      cost: 'AED 110,000 – 220,000',
      timeline: '8–14 weeks',
      features: [
        'User authentication and account management',
        'Essential application features',
        'Core dashboard and navigation',
        'Push notifications and basic analytics',
        'Cloud backend setup',
      ],
      bottomNote: 'A focused starting point for founders testing market demand before committing to a larger product roadmap.',
      popular: false,
    },
    {
      name: 'Growth App',
      tagline: 'For UAE businesses expanding mobile products with additional user roles, connected services, and more complex operational requirements.',
      cost: 'AED 220,000 – 550,000',
      timeline: '14–24 weeks',
      features: [
        'Native or cross-platform development',
        'Payment gateway and API integrations',
        'Arabic and English interface support',
        'Multi-role dashboards and user management',
        'Analytics and real-time data capabilities',
      ],
      bottomNote: 'Built for established products that need deeper integrations and greater operational capacity.',
      popular: true,
    },
    {
      name: 'Enterprise App',
      tagline: 'For Dubai enterprises developing mobile platforms that connect multiple business systems and support regulated operations.',
      cost: 'AED 550,000+',
      timeline: '20–32+ weeks',
      features: [
        'Enterprise application architecture',
        'ERP, CRM, and custom API integrations',
        'AI capabilities and workflow automation',
        'UAE PASS integration where authorised',
        'Advanced security and access controls',
        'Applicable compliance and governance controls',
      ],
      bottomNote: 'The complete digital enterprise ecosystem built for regional scalability, resilience, and excellence.',
      popular: false,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading matching Screenshot 16 */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-5">
            How Much Does Mobile App Development{' '}
            <span className="text-[#00CE44]">Cost in Dubai?</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            No two mobile products demand the same level of investment, which the{' '}
            <Link
              to="/blog/mobile-app-development-cost-dubai"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              mobile app development cost in Dubai
            </Link>{' '}
            guide breaks down. The benchmark ranges below reflect the engineering effort, product scope, and technical complexity typically involved across different types of mobile applications.
          </p>
        </div>

        {/* 3 Pricing Cards Grid matching Screenshot 16 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-7 sm:p-9 rounded-[24px] bg-[#14151a] border flex flex-col justify-between transition-all duration-300 relative text-left ${
                tier.popular
                  ? 'border-[#00CE44] shadow-2xl shadow-[#00CE44]/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-none bg-[#00CE44] text-black text-xs font-black uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00CE44] mb-3">
                  {tier.name}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mb-6 min-h-[44px] font-normal leading-relaxed">
                  {tier.tagline}
                </p>

                {/* Price Box with single-line cost */}
                <div className="p-4 rounded-[14px] bg-[#0c0d10] border border-white/5 mb-6">
                  <div className="text-[11px] sm:text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">
                    Estimated Cost:
                  </div>
                  <div className="text-lg sm:text-[20px] xl:text-[22px] font-extrabold text-white mb-1 tracking-tight">
                    {tier.cost}
                  </div>
                  <div className="text-xs text-[#00CE44] font-semibold">
                    Timeline: {tier.timeline}
                  </div>
                </div>

                <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Includes:
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 leading-relaxed">
                      <Check className="w-4 h-4 text-[#00CE44] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-400 italic pt-4 border-t border-white/5 mb-6">
                  {tier.bottomNote}
                </p>
              </div>

              <Link
                to="/contact-us"
                className={`w-full py-4 text-center text-sm font-medium uppercase tracking-wider rounded-none transition-colors cursor-pointer ${
                  tier.popular
                    ? 'bg-[#00CE44] hover:bg-[#00b83d] text-black'
                    : 'bg-transparent hover:bg-white/10 border border-white text-white'
                }`}
              >
                Discuss {tier.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-black bg-[#00CE44] hover:bg-[#00b53c] transition-all duration-200 rounded-none shadow-none uppercase tracking-wide cursor-pointer"
          >
            Get the Estimate for Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
