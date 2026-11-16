export default function PressList() {
  const releases = [
    {
      source: 'RightFirms',
      year: '2026',
      title: 'RightFirms Recognizes Inceptives Digital as a Top Mobile App Development Company for 2026',
      desc: 'Inceptives Digital ranked among elite North American mobile engineering firms based on verified client feedback, multi-platform execution, and delivery speed.',
      category: 'Mobile App Engineering',
    },
    {
      source: 'RightFirms',
      year: '2026',
      title: 'RightFirms Recognizes Inceptives Digital Among Top Artificial Intelligence Companies for 2026',
      desc: 'Selected for excellence in deploying production-grade LLM integrations, predictive analytics, and automated computer vision workflows.',
      category: 'Artificial Intelligence',
    },
    {
      source: 'Clutch',
      year: '2026',
      title: 'Clutch Recognizes Inceptives Digital as a Top App Development Company in Plano for 2026',
      desc: 'Honored as the premier Texas-based digital product studio delivering high-conversion iOS and Android applications for scaling startups.',
      category: 'Regional Leadership',
    },
    {
      source: 'Clutch',
      year: '2026',
      title: 'Clutch Recognizes Inceptives Digital as a Top User Experience Company in Plano for 2026',
      desc: 'Celebrated for behavioral research-driven design systems, intuitive interaction flows, and high onboarding conversion rates.',
      category: 'UI/UX Design',
    },
    {
      source: 'Techreviewer',
      year: '2026',
      title: 'Inceptives Digital Named Among Top Machine Learning Companies for 2026 by Techreviewer.co',
      desc: 'Recognized for cutting-edge deep learning systems, real-time data modeling, and custom enterprise inference pipelines.',
      category: 'Machine Learning',
    },
    {
      source: 'Techreviewer',
      year: '2026',
      title: 'Inceptives Digital Named Among Top Software Developers in the UK for 2026 by Techreviewer.co',
      desc: 'Expanding cross-Atlantic delivery footprint, delivering robust enterprise software architecture for British fintech and logistics leaders.',
      category: 'Global Expansion',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-[16px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#00CE44] text-xs font-mono font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-white/40 text-xs font-mono">
                    {item.source} · {item.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00CE44] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
