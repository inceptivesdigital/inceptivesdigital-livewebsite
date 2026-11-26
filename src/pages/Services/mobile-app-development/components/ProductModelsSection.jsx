import { Link } from 'react-router-dom'
export default function ProductModelsSection() {
  const topLeftCard = {
    title: 'MVP Mobile App Development',
    icon: '/assets/mobile-app/1.png',
    desc: (
      <>
        Start with focused{' '}
        <Link
          to="/mvp-development"
          className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
          MVP development
        </Link>{' '}
        and essential functionality. Our custom mobile app development for startups prioritizes market readiness without unnecessary engineering overhead.
      </>
    ),
  }

  const topRightCard = {
    title: 'Marketplace Mobile Apps',
    icon: '/assets/mobile-app/2.png',
    desc: 'Launch two-sided mobile marketplaces with customer and provider workflows, Stripe Connect payments, and centralized booking management across both applications.',
  }

  const bottomCards = [
    {
      title: 'Enterprise Mobile Applications',
      icon: '/assets/mobile-app/3.png',
      desc: 'Enterprise mobile apps with role-based access, ERP/CRM integrations, and secure data workflows. Extend critical business operations to iOS and Android devices.',
    },
    {
      title: 'SaaS Mobile Applications',
      icon: '/assets/mobile-app/4.png',
      desc: 'Custom SaaS mobile apps extend subscription platforms with multi-tenant architecture, secure account access, and cloud API integrations.',
    },
    {
      title: 'Consumer Mobile Applications',
      icon: '/assets/mobile-app/5.png',
      desc: 'Consumer-facing iOS and Android apps with personalized experiences and integrated product analytics. Designed around everyday interactions and long-term user retention.',
    },
    {
      title: 'AI-Powered Mobile Products',
      icon: '/assets/mobile-app/6.png',
      desc: 'AI-powered mobile applications with LLM assistants, contextual recommendations, and model API integrations. Bring intelligent functionality into customer-facing products and enterprise workflows.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            Pick Your Model.{' '}
            <span className="text-[#00CE44]">We Build the Custom Mobile App Around It.</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Different business models demand different mobile architectures. Our custom mobile app development expertise covers early-stage products and enterprise platforms, with engineering decisions reflecting how each product operates.
          </p>
        </div>

        {/* Row 1: Left Card + Center Phone Mockup + Right Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-6">
          {/* Left Card */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-[14px] bg-[#1e1e1e] text-left border-0 shadow-none h-full flex flex-col justify-start">
            <img
              src={topLeftCard.icon}
              alt={topLeftCard.title}
              className="w-9 h-9 object-contain mb-4 select-none"
            />
            <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
              {topLeftCard.title}
            </h3>
            <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              {topLeftCard.desc}
            </p>
          </div>

          {/* Center Phone Graphic */}
          <div className="lg:col-span-4 flex justify-center items-end pt-4">
            <img
              src="/assets/mobile-app/FX-SCREEN-REFLECT-1.png"
              alt="Custom Mobile App Model Preview"
              className="w-full max-w-[330px] h-auto object-contain object-bottom select-none"
              loading="lazy"
            />
          </div>

          {/* Right Card */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-[14px] bg-[#1e1e1e] text-left border-0 shadow-none h-full flex flex-col justify-start">
            <img
              src={topRightCard.icon}
              alt={topRightCard.title}
              className="w-9 h-9 object-contain mb-4 select-none"
            />
            <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
              {topRightCard.title}
            </h3>
            <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              {topRightCard.desc}
            </p>
          </div>
        </div>

        {/* Row 2: 4 Equal Cards Across */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomCards.map((card) => (
            <div
              key={card.title}
              className="p-6 sm:p-7 rounded-[14px] bg-[#1e1e1e] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-9 h-9 object-contain mb-4 select-none"
              />
              <h3 className="text-lg font-bold text-[#00CE44] mb-2.5 leading-snug">
                {card.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
