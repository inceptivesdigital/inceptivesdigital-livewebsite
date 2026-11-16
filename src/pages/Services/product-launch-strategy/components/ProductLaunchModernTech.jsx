import { Link } from 'react-router-dom'

export default function ProductLaunchModernTech() {
  const techItems = [
    {
      title: 'Artificial Intelligence',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: (
        <>
          <Link
            to="/ai-development"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            AI development
          </Link>{' '}
          removes the guesswork from launch strategy by guiding audience targeting, campaign optimization, and messaging decisions through real-time signals, making the path from product to market sharper and significantly more efficient.
        </>
      ),
    },
    {
      title: 'Machine Learning',
      icon: '/assets/mobile-app/Generative-AI.svg',
      desc: (
        <>
          <Link
            to="/machine-learning-development-services"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            Machine learning development services
          </Link>{' '}
          surface patterns that would take months to identify manually in days. They process competitor behavior, user trends, and market shifts, turning complex data into a clear strategic direction before the launch window closes.
        </>
      ),
    },
    {
      title: 'Big Data Analytics',
      icon: '/assets/mobile-app/Real-Time-sync.svg',
      desc: (
        <>
          The challenge is never the volume of information but making sense of it. Big data analytics cuts through the noise to reveal where the audience is, what they respond to, and when to reach them.
        </>
      ),
    },
    {
      title: 'Marketing Automation',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: (
        <>
          Timing and consistency are two things no team can scale alone. Automation handles campaign sequencing, audience segmentation, and communication workflows so the launch runs with precision regardless of the volume or complexity involved.
        </>
      ),
    },
    {
      title: 'Predictive Analytics',
      icon: '/assets/mobile-app/monitor.svg',
      desc: (
        <>
          The best time to refine a launch strategy is before it goes live. Predictive models forecast acquisition costs, retention rates, and market response, giving the team the clarity needed to act before it is too late.
        </>
      ),
    },
    {
      title: 'Dynamic Personalization Engines',
      icon: '/assets/mobile-app/ai-experiences.svg',
      desc: (
        <>
          A single launch message rarely fits every user. Dynamic personalization engines adapt creative, offers, and onboarding flows to individual behavior the moment a user lands, turning a generic launch into one that feels built for each person.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#1f1f1f] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Leveraging Modern Technology for a{' '}
            <span className="text-[#00CE44]">Stronger Product Launch</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Modern technology transforms how launch strategies are developed, executed, and measured, giving every product a sharper, more precise path to market.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
