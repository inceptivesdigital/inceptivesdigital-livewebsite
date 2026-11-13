export default function WhyChooseUs() {
  const pillars = [
    {
      title: '8+ Years of Mobile Product Experience',
      desc: 'Years of native and cross-platform development inform how our senior engineers approach application architecture. Their involvement begins during technical planning and continues through implementation, keeping critical engineering decisions consistent with the product scope.',
    },
    {
      title: '70+ Products Across Different Business Models',
      desc: 'From enterprise workforce platforms to subscription applications, our delivery portfolio covers distinct product models. This experience helps us evaluate development requirements against comparable engineering work rather than relying solely on initial assumptions.',
    },
    {
      title: 'Engineering Experience Across 20+ Industries',
      desc: 'Industry requirements influence mobile architecture long before development begins. Our experience with healthcare platforms and field operations helps teams address specialized workflows within the applications they commission.',
    },
    {
      title: 'Production Experience With AI-Integrated Applications',
      desc: "WordSmith Pro demonstrates our AI-backed mobile development capabilities through a React Native application. OpenAI APIs deliver contextual writing assistance, while OCR integration extends the product's functionality to physical documents.",
    },
    {
      title: 'Mobile Applications With Connected Backend Systems',
      desc: 'Complex applications require more than frontend engineering. Halwar Connect demonstrates this through two Flutter applications connected to marketplace payment infrastructure, with a React.js dashboard supporting platform administration.',
    },
    {
      title: 'Defined Engineering Support After Launch',
      desc: "Mobile operating systems continue evolving after deployment. Our maintenance services address compatibility updates under agreed support arrangements, with engineering responsibilities aligned to each application's production requirements.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Why Businesses Choose Inceptives Digital</span>{' '}
            as a Custom Mobile App Development Company
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            With 8+ years of product engineering experience, Inceptives Digital has delivered 70+ digital products across different business models. Our mobile development work extends across 20+ industries, including healthcare and enterprise operations. That experience gives our engineering teams practical insight into the requirements behind complex mobile applications.
          </p>
        </div>

        {/* 6 Cards Grid: Flat Dark Gray, Zero Borders, Zero Shadows */}
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
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
