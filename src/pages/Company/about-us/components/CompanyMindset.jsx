export default function CompanyMindset() {
  const cards = [
    {
      tag: 'OUR MISSION',
      title: 'What We’re Here to Do',
      mainIdea: 'To make digital products worth building.',
      desc: 'That means understanding the real problem, making the difficult decisions early, and carrying the work through with enough care that the final product has a clear reason to exist. We are not here to add more software to the world. We are here to build the right things, for the right reasons, and make them hold up in practice.',
    },
    {
      tag: 'OUR VISION',
      title: 'Where We’re Going',
      mainIdea: 'To become the company people trust when the technology matters too much to get casually wrong.',
      desc: 'Not because we claim to know everything, but because we ask better questions, take ownership of the decisions we make, and keep raising the standard of the people and products around us. As we grow, that standard should become more visible, not less.',
    },
    {
      tag: 'OUR PHILOSOPHY',
      title: 'How We Think',
      mainIdea: 'The quality of the outcome is usually decided before the build begins.',
      desc: 'Clear thinking, sound judgment, responsibility, and honest communication do more for a product than speed alone ever will. We give people room to think, expect them to own the result, and treat leadership as a way to create stronger decision-makers rather than dependency.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Inceptives Digital Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            Our Mission, Vision, and <span className="text-[#00CE44]">Philosophy</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base text-center leading-relaxed font-normal max-w-2xl mx-auto">
            Guiding principles that define what we build, how we partner with founders, and why our standard never wavers.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {cards.map((c, i) => (
            <div
              key={i}
              className="p-8 sm:p-10 rounded-[24px] bg-[#141414] hover:bg-[#191919] border border-white/5 hover:border-[#00CE44]/30 transition-all duration-300 flex flex-col text-left group shadow-lg"
            >
              {/* Clean First Heading: No bg color, no padding */}
              <div className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 p-0 bg-transparent border-0">
                {c.tag}
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-white mb-4 tracking-tight leading-snug group-hover:text-[#00CE44] transition-colors">
                {c.title}
              </h3>

              <p className="text-white font-semibold text-base sm:text-[17px] leading-snug mb-4">
                {c.mainIdea}
              </p>

              <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed font-normal">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
