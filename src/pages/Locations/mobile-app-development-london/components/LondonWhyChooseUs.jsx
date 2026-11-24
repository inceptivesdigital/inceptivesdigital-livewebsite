import { Link } from 'react-router-dom'

// 100% Solid Full-Fill Vector Icons (#00CE44)
function RocketFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5zm2 8.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6.31 9.52c-.48-1.23-1.52-4.17-1.67-6.87l-1.13.75c-.56.38-.89 1-.89 1.67v3.28c0 .93 1.07 1.44 1.79.85l1.9-1.68zm10.62 0l1.9 1.68c.72.59 1.79.08 1.79-.85v-3.28c0-.67-.33-1.29-.89-1.67l-1.13-.75c-.15 2.7-1.19 5.64-1.67 6.87z" />
    </svg>
  )
}

function StrategyFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
    </svg>
  )
}

function ArchitectureFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
    </svg>
  )
}

function PartnerFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

export default function LondonWhyChooseUs() {
  const pillars = [
    {
      title: 'Built for London’s Ambitious Businesses',
      desc: (
        <>
          London’s market moves quickly, and businesses need products that can adapt as they grow. We help startups, scale-ups, and established companies across industries such as fintech, healthcare, SaaS, and consumer technology invest in{' '}
          <Link
            to="/blog/why-invest-in-custom-mobile-app-development"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            custom mobile app development
          </Link>{' '}
          that supports real business goals.
        </>
      ),
      icon: RocketFullFill,
    },
    {
      title: 'Product Strategy Before Engineering',
      desc: 'Before development starts, we focus on understanding the problem, users, and technical requirements behind the product. Through discovery, planning, and validation, we create a clear direction that reduces uncertainty and keeps the build focused.',
      icon: StrategyFullFill,
    },
    {
      title: 'Engineering Designed for Long-Term Growth',
      desc: 'Mobile applications are built with scalable architecture, secure development practices, and maintainable code foundations. Whether launching an MVP or improving an existing platform, we create solutions that are prepared for future users, features, and market demands.',
      icon: ArchitectureFullFill,
    },
    {
      title: 'A Partner Throughout the Product Journey',
      desc: 'From the first product discussion to launch and ongoing improvements, our team stays involved at every stage. We combine strategic thinking with technical execution to help businesses build products that deliver lasting value.',
      icon: PartnerFullFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Why Build Mobile Apps With Inceptives Digital{' '}
            <span className="text-[#00CE44]">in London</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            London businesses work with Inceptives Digital on new applications, complex integrations, and existing products that need attention. Technical ownership and delivery decisions remain clear throughout each engagement, from planning onwards.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="rounded-[22px] bg-[#14151a] border-0 p-8 sm:p-9 text-left transition-all duration-300 shadow-none"
              >
                <div className="mb-6 flex items-center justify-start">
                  <Icon className="w-10 h-10 shrink-0" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
