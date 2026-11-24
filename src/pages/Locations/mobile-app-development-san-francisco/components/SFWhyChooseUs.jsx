import { ShieldCheck, TrendingUp, Lightbulb, Code2 } from 'lucide-react'

export default function SFWhyChooseUs() {
  const reasons = [
    {
      title: 'Built for San Francisco Startups & Scale-Ups',
      icon: TrendingUp,
      renderDesc: () => (
        <span>
          From AI startups and SaaS companies to enterprise innovators, we help businesses in San Francisco validate ideas, reduce development risk, and launch products designed to scale confidently.
        </span>
      ),
    },
    {
      title: 'California-Ready Security & Compliance',
      icon: ShieldCheck,
      renderDesc: () => (
        <span>
          California apps require a privacy assessment.{' '}
          <a
            href="https://inceptivesdigital.com/blog/app-development-timeline"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            Development planning
          </a>{' '}
          addresses CCPA, HIPAA, or PCI DSS obligations according to product data and applicable regulatory scope.
        </span>
      ),
    },
    {
      title: 'Product Decisions Before Engineering',
      icon: Lightbulb,
      renderDesc: () => (
        <span>
          Every engagement starts with discovery, technical planning, and roadmap validation, helping avoid costly rework and ensuring engineering supports business goals.
        </span>
      ),
    },
    {
      title: 'Production-Ready Engineering',
      icon: Code2,
      renderDesc: () => (
        <span>
          Experienced engineers build production-ready mobile applications using modern architecture, code reviews, CI/CD pipelines, and quality standards that support long-term reliability.
        </span>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Why Build Mobile Apps With{' '}
            <span className="text-[#00CE44]">Inceptives Digital</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Choosing a mobile app development company in San Francisco means looking beyond technical capabilities. Inceptives Digital establishes project scope, reviews architectural decisions, and defines milestone ownership before development begins.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="p-8 sm:p-9 rounded-[22px] bg-[#14151a] border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 text-left flex flex-col justify-start hover:-translate-y-1"
              >
                {/* Clean Icon */}
                <div className="mb-6 flex items-center justify-start">
                  <Icon className="w-9 h-9 text-[#00CE44] shrink-0" strokeWidth={2.2} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#00CE44] mb-3 leading-snug">
                  {r.title}
                </h3>

                <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {r.renderDesc()}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
