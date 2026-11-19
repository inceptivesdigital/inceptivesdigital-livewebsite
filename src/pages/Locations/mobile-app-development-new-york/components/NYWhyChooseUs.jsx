import { Link } from 'react-router-dom'

// Solid Full-Fill Vector Icons (#00CE44)
function LightbulbFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
    </svg>
  )
}

function EngineersFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
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

function OutcomesFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
  )
}

export default function NYWhyChooseUs() {
  const pillars = [
    {
      title: 'Product Thinking Behind Every Build',
      desc: 'A strong mobile app starts with the right product decisions. Inceptives Digital works through user needs, business objectives, technical requirements, and product priorities before development gets underway.',
      icon: LightbulbFullFill,
    },
    {
      title: 'Senior Engineering Without the Layers',
      desc: 'Experienced engineers stay close to the product throughout development. This creates clearer technical decisions, faster communication, and greater accountability across the project.',
      icon: EngineersFullFill,
    },
    {
      title: 'Architecture Ready for What Comes Next',
      desc: (
        <>
          A mobile app should not become a technical constraint as the business grows. Inceptives Digital builds with maintainable architecture, scalable backends, and a sound{' '}
          <Link
            to="/blog/mobile-app-tech-stack"
            className="text-[#00CE44] hover:underline font-medium"
          >
            mobile app tech stack
          </Link>{' '}
          that supports new features, higher usage, and future integrations.
        </>
      ),
      icon: ArchitectureFullFill,
    },
    {
      title: 'Built Around Business Outcomes',
      desc: 'Development stays connected to the reason the product exists. From MVPs to established digital products, engineering priorities align with adoption, performance, reliability, and the commercial goals behind the application.',
      icon: OutcomesFullFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Why New York Businesses Choose Inceptives Digital for{' '}
            <span className="text-[#00CE44]">Mobile App Development</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            New York’s technology market moves quickly, but speed alone does not make a mobile product successful. Inceptives Digital helps businesses invest in{' '}
            <Link
              to="/blog/why-invest-in-custom-mobile-app-development"
              className="text-[#00CE44] hover:underline font-medium"
            >
              custom mobile app development
            </Link>{' '}
            that turns product ideas into well-engineered applications, with strategy, architecture, and scalability considered from the start.
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
                {/* Clean Solid Full-Fill Icon (Zero bg, zero border, zero padding) */}
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
