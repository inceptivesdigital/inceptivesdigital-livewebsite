import { Link } from 'react-router-dom'

export default function DubaiWhyChooseUs() {
  const points = [
    {
      title: 'Direct Engineering Access From First Call',
      desc: 'Every client speaks directly with the engineers writing the code, not an account manager relaying updates secondhand. A question about an architecture decision goes straight to the person who made it, not through a chain that adds a day before an answer arrives.',
    },
    {
      title: 'Built for Regulatory Reality',
      desc: 'Regulatory requirements influence architecture from the earliest planning stages. UAE PDPL considerations, data residency, and governance requirements are addressed before development begins, reducing technical compromise later in the product lifecycle.',
    },
    {
      title: 'Multilingual and Multicultural by Default',
      desc: 'Dubai\'s digital products are expected to operate across multiple languages from day one. Arabic right-to-left support sits alongside English, Hindi, and Urdu within the design system, creating experiences that reflect how people interact with products across the region.',
    },
    {
      title: 'A Proven Delivery Record',
      desc: (
        <>
          Our portfolio of more than 70 delivered products across 20 industries provides practical engineering experience rather than isolated case studies. That consistency is reflected in independently verified client reviews and products that continue to evolve beyond launch, which helps you{' '}
          <Link
            to="/blog/how-to-choose-the-right-mobile-app-development-company"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            choose the right company
          </Link>
          .
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading matching Screenshot 18 */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-5">
            Why Dubai Companies Work With{' '}
            <span className="text-[#00CE44]">Inceptives Digital</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            The approach behind a product often matters as much as the technology behind it. Here&apos;s how Inceptives Digital approaches mobile app development across every engagement in Dubai.
          </p>
        </div>

        {/* Cards Grid matching Screenshot 18 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {points.map((p, i) => (
            <div
              key={i}
              className="bg-[#12141a] rounded-[22px] p-7 sm:p-9 border border-white/5 hover:border-[#00CE44]/30 transition-all duration-300 flex flex-col justify-start text-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#00CE44] mb-4 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
