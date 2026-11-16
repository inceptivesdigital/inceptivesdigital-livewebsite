export default function BlogsGrid() {
  const blogs = [
    {
      title: 'Mobile App Development: Complete 2027 Engineering Guide',
      category: 'Mobile Engineering',
      readTime: '8 min read',
      desc: 'An end-to-end breakdown of mobile architecture, native vs cross-platform decisions, backend scalability, and continuous store deployment.',
      date: 'Nov 2026',
    },
    {
      title: 'No-Code MVP vs Custom MVP: Cost, Speed, and When to Switch',
      category: 'Product Strategy',
      readTime: '6 min read',
      desc: 'Comparing the true total cost of ownership between no-code prototypes and custom-engineered software foundations for seed-stage startups.',
      date: 'Nov 2026',
    },
    {
      title: 'Mobile App Development Cost in Canada: Complete 2027 Pricing Guide',
      category: 'Cost & Budgeting',
      readTime: '7 min read',
      desc: 'Detailed regional cost benchmarks across Toronto, Vancouver, and Montreal with typical team compositions and hourly rate breakdowns.',
      date: 'Oct 2026',
    },
    {
      title: 'How Much Does It Cost to Build a Real Estate App Like Dubai REST in 2027',
      category: 'Industry Blueprints',
      readTime: '9 min read',
      desc: 'Deconstructing technical requirements for proptech ecosystems: MLS integrations, real-time escrow APIs, 3D virtual tours, and regulatory compliance.',
      date: 'Oct 2026',
    },
    {
      title: 'SwiftUI vs UIKit: Which Should You Choose for Your iOS App?',
      category: 'iOS Architecture',
      readTime: '5 min read',
      desc: 'A pragmatic technical comparison examining memory usage, state management paradigms, backwards compatibility, and developer throughput.',
      date: 'Oct 2026',
    },
    {
      title: 'Texas Business Growth in 2027: Why Digital Product Development Is Becoming a Competitive Advantage',
      category: 'Market Insights',
      readTime: '6 min read',
      desc: 'How Dallas, Austin, and Fort Worth enterprises are modernizing legacy operations with high-efficiency mobile and web platforms.',
      date: 'Sep 2026',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((b, i) => (
            <article
              key={i}
              className="p-8 rounded-[16px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#00CE44] text-xs font-mono font-bold uppercase tracking-wider">
                    {b.category}
                  </span>
                  <span className="text-white/40 text-xs font-mono">
                    {b.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors leading-snug mb-3">
                  {b.title}
                </h2>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
                <span>{b.date}</span>
                <span className="text-[#00CE44] group-hover:translate-x-1 transition-transform inline-block font-bold">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
