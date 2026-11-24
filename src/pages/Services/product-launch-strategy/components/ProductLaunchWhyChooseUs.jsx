import { Link } from 'react-router-dom'

export default function ProductLaunchWhyChooseUs() {
  const pillars = [
    {
      title: 'A Team of Experts',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'The studio brings together product strategists, designers, and engineers who have run real launches at scale. The engagement is led by people who have done it before and know what it takes.',
    },
    {
      title: 'Speed Without Cutting Corners',
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          The average{' '}
          <Link
            to="/blog/app-development-timeline"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            app development timeline
          </Link>{' '}
          runs under 12 weeks. That speed comes from a process built around focus and decision-making discipline, not from skipping the steps that matter most.
        </>
      ),
    },
    {
      title: 'Honest Launch Counsel',
      icon: '/assets/ios-app/serivces3.svg',
      desc: 'The goal is a successful launch, not a comfortable conversation. If the strategy needs to change, the timeline needs adjusting, or the positioning is off, that gets said early.',
    },
    {
      title: 'Proven Methodology',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Our launch process is built on what has worked in different markets, audiences, and product types. It adapts to the industry without ever compromising the standards that drive results.',
    },
    {
      title: 'Results That Outlast the Launch',
      icon: '/assets/ios-app/serivces5.svg',
      desc: 'The measure of a successful launch is not the go-live date. It is the retention, the growth, and the market position the product holds six months after shipping.',
    },
    {
      title: 'Full Transparency',
      icon: '/assets/ios-app/serivces6.svg',
      desc: 'Decisions, updates, and shifts in direction are communicated clearly and promptly. The process stays visible from the first strategy session to the final deployment, with no room for guesswork.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#161616] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            The Reasons High-Performing Teams Launch With{' '}
            <span className="text-[#00CE44]">Inceptives Digital</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Speed, discipline, and honest counsel. Here is why founders and product leaders trust us with their most critical launch moments.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-[16px] bg-[#222222] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={p.icon}
                alt={p.title}
                className="w-10 h-10 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mid Banner CTA */}
        <div className="p-8 sm:p-10 rounded-[20px] bg-[#222222] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Take the First Step Toward a Successful Launch
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-normal max-w-2xl">
              Talk to our product strategists about your product, your timeline, and your goals.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
          >
            Book a Launch Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
