import { Link } from 'react-router-dom'

// 100% Solid Full-Fill Vector Icons (#00CE44)
function RiskShieldFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  )
}

function RoadmapFullFill({ className = 'w-10 h-10' }) {
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

function TeamVisionFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

export default function TorontoWhyChooseUs() {
  const pillars = [
    {
      title: 'Reduce Risk Before Development',
      desc: 'The strongest products start with better decisions. We validate assumptions, understand user needs, and prioritize the problems worth solving before features enter development. This helps teams invest in the right product direction from the beginning.',
      icon: RiskShieldFullFill,
    },
    {
      title: 'Decisions Built Around a Roadmap',
      desc: (
        <>
          We do not start with a framework. As a custom mobile app development company in Toronto, we start every engagement with the product goal rather than the technology stack. Whether the right approach is native development,{' '}
          <Link
            to="/blog/native-vs-hybrid-vs-cross-platform-app-development"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            Flutter, React Native, or a custom architecture
          </Link>
          , every technology decision supports your timeline and users.
        </>
      ),
      icon: RoadmapFullFill,
    },
    {
      title: 'Architecture That Does Not Need Rebuilding',
      desc: 'The team creates scalable foundations, flexible APIs, and maintainable systems that allow products to evolve without costly rewrites as users, features, and business needs expand. For regulated industries, the apps are mapped with compliance in mind, factoring in standards like SOC 2, HIPAA, and PIPEDA.',
      icon: ArchitectureFullFill,
    },
    {
      title: 'One Team Aligned Around One Product Vision',
      desc: 'Strategy, UX design, engineering, and quality assurance work together throughout the product journey. A unified team reduces communication gaps, speeds decision-making, and keeps every development choice connected to the original business objective.',
      icon: TeamVisionFullFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Why Businesses in Toronto Choose{' '}
            <span className="text-[#00CE44]">Inceptives Digital</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Building a successful mobile product requires more than strong engineering. Companies across Toronto, the GTA, and Ontario choose Inceptives Digital because we combine product strategy, design, and technology to create applications built around real business outcomes.
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
                {/* Clean Solid Full-Fill Icon */}
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
