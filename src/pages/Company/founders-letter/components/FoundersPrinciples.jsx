export default function FoundersPrinciples() {
  const principles = [
    {
      title: 'The Problem Precedes the Product',
      desc: 'We never jump into writing code until user friction, business goals, and architecture viability are rigorously clarified.',
    },
    {
      title: 'Value Over Vanity Metrics',
      desc: 'Software must drive measurable business velocity, user retention, or operational efficiency — not just look pretty in a pitch deck.',
    },
    {
      title: 'Freedom With Responsibility',
      desc: 'Autonomy is earned through high craft and accountability. We give our engineers deep freedom alongside unwavering standards.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-[16px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all text-left"
            >
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
