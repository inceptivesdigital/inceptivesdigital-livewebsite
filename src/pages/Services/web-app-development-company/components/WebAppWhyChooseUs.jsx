import { Link } from 'react-router-dom'

export default function WebAppWhyChooseUs() {
  const pillars = [
    {
      title: 'Scalable Architecture',
      desc: (
        <>
          Your web application is architected for where the business is headed, not just the MVP, spanning everything from{' '}
          <Link
            to="/blog/software-development-for-startups"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            software development for startups
          </Link>{' '}
          to enterprise web app development. Multi-user platforms, growing databases, new modules, and increasing traffic are planned into the architecture from the beginning, reducing expensive redevelopment as the product grows.
        </>
      ),
    },
    {
      title: 'Built-In Security',
      desc: 'Authentication, role-based permissions, encrypted data handling, API security, and compliance considerations are incorporated during development, not patched in after launch. Every release follows secure engineering practices that reduce business risk.',
    },
    {
      title: 'End-to-End Ownership',
      desc: (
        <>
          The team that plans the product is the same team that builds it. Strategy, design, and engineering move as one, so the product that ships reflects exactly what was planned from the first conversation. It is also the approach we recommend when weighing{' '}
          <Link
            to="/blog/in-house-development-vs-app-development-partner"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            in-house development vs. an app development partner
          </Link>{' '}
          for a new build.
        </>
      ),
    },
    {
      title: 'Seamless Integrations',
      desc: 'Modern businesses rely on CRMs, ERPs, payment gateways, accounting software, communication platforms, and third-party APIs. We build web applications that connect seamlessly with your existing technology stack through system integration and API automation, eliminating manual work and fragmented data.',
    },
    {
      title: 'Post-Launch Support',
      desc: 'Most studios exit at deployment. We treat launch as the start of the engagement. Performance monitoring, updates, and new feature development continue as the product and business evolve.',
    },
    {
      title: 'Full Transparency From Day One',
      desc: 'Every architectural decision is documented. Every milestone has a checkpoint. The product team always knows where things stand and why specific calls were made, without chasing updates between sprints.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] text-center">
            Why Businesses Choose{' '}
            <span className="text-[#00CE44]">Inceptives for Web App Development</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src="/assets/mobile-app/icon01.png"
                alt={p.title}
                className="w-9 h-9 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
