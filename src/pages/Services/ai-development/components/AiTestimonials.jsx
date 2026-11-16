export default function AiTestimonials() {
  const testimonials = [
    {
      quote:
        'Inceptives Digital excels at translating complex, abstract product requirements into high-performance, production-ready software. Their execution is seamless.',
      name: 'Collis Maddox',
      role: 'Owner/Designer, MaddTech',
    },
    {
      quote:
        'From initial product strategy to deployment, Inceptives Digital demonstrated exceptional technical discipline. They delivered a highly scalable mobile product ahead of schedule without compromising architectural integrity.',
      name: 'Kirk Flaming',
      role: 'Owner, Pulse Check Timer',
    },
    {
      quote:
        'Inceptives Digital did not just execute a brief; they aligned perfectly with our operational goals. They engineered a reliable digital ecosystem that completely modernized our workflow.',
      name: 'Dorrin Rosenfeld',
      role: 'DC & Owner, State of the Art Chiropractic',
    },
    {
      quote:
        'We needed an engineering partner capable of architecting a highly scalable, complex system. Inceptives Digital delivered beyond expectations, demonstrating deep technical competence and strategic vision throughout our build.',
      name: 'Marcus Vance',
      role: 'CTO, CoreFlow Systems',
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-6">
              What Our Clients Say About Building With Us
            </h2>
            <p className="text-white/75 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-10">
              Every successful product starts with alignment between the people building it and the people who need it. These stories reflect the collaboration, trust, and product decisions behind our work.
            </p>

            {/* Platform Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/10">
              <img src="/assets/clutch.png" alt="Clutch 5.0 Rating" className="h-9 sm:h-11 w-auto object-contain select-none" />
              <img src="/assets/bark.png" alt="Bark 5.0 Rating" className="h-9 sm:h-11 w-auto object-contain select-none" />
              <img src="/assets/trustpilot.png" alt="Trustpilot 4.7 Rating" className="h-9 sm:h-11 w-auto object-contain select-none" />
            </div>
          </div>

          {/* Right Column: Scrollable cards container with green scrollbar */}
          <div className="lg:col-span-7">
            <div className="relative max-h-[500px] overflow-y-auto pr-3 sm:pr-4 space-y-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#181818] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#00CE44] [&::-webkit-scrollbar-thumb]:rounded-full">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-2xl p-6 sm:p-7 transition-all duration-200"
                >
                  <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[#00CE44] font-bold text-sm sm:text-base">
                      {item.name}
                    </span>
                    <span className="text-white/40 text-xs sm:text-sm">
                      {item.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
