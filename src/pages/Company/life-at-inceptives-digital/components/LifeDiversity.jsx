export default function LifeDiversity() {
  const pillars = [
    {
      title: 'Cultural Diversity',
      desc: 'Different backgrounds and perspectives are welcomed and celebrated across our global product teams.',
    },
    {
      title: 'Gender Equality',
      desc: 'Opportunities, promotions, and leadership roles are decided strictly on capability, craft, and contribution.',
    },
    {
      title: 'Equal Opportunity',
      desc: 'Everyone gets a fair, transparent chance to grow, lead architectures, and contribute to flagship systems.',
    },
    {
      title: 'Inclusive Collaboration',
      desc: 'Different voices are actively respected and encouraged in everyday whiteboard sessions and design critiques.',
    },
  ]

  const stats = [
    { value: '150+', label: 'Diverse tech professionals across global regions' },
    { value: '5+', label: 'Nationalities represented across our teams' },
    { value: '40%+', label: 'Women representation in engineering & design' },
    { value: '100%', label: 'Pay equity across genders and departments' },
  ]

  return (
    <section className="py-20 sm:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-20">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Diversity of Our Workforce
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            We Believe in Diversity <br />
            <span className="text-white/70 text-2xl sm:text-3xl lg:text-[36px] font-medium">
              The People Who Keep It Moving
            </span>
          </h2>
          <p className="text-white/75 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-3xl">
            Inceptives Digital believes in creating opportunities for talent to grow and contribute. We value people for their skills, ideas, character, and potential, and we aim to provide a workplace where everyone is treated with fairness, respect, and equal consideration.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[18px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <span className="text-[#00CE44] font-mono text-xs font-bold block mb-4">
                  PILLAR 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Diversity Workforce Numbers Bar */}
        <div className="p-8 sm:p-10 rounded-[20px] bg-[#111111] border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            {stats.map((s, idx) => (
              <div key={idx} className="border-l-0 sm:border-l sm:border-white/10 sm:pl-6 first:border-l-0 first:pl-0">
                <div className="text-3xl sm:text-4xl font-black text-[#00CE44] tracking-tight leading-none mb-2">
                  {s.value}
                </div>
                <div className="text-white/75 text-xs sm:text-sm font-medium leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
