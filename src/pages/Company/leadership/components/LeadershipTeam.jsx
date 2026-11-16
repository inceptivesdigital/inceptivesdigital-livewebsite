export default function LeadershipTeam() {
  const leaders = [
    {
      name: 'Hannan Shahnoor',
      role: 'Chief Executive Officer',
      focus: 'Product Strategy & Architecture Direction',
      belief: 'Companies shouldn’t create dependencies on single individuals. Strong systems empower autonomous teams to deliver reliable software.',
      image: '/assets/team/hannan.jpg',
    },
    {
      name: 'Areeb Rehman',
      role: 'Chief Operating Officer',
      focus: 'Engineering Operations & Delivery Quality',
      belief: 'Execution rigor and operational consistency are what turn great technical architecture into long-lasting business value.',
      image: '/assets/team/areeb.jpg',
    },
    {
      name: 'Aaron Francis',
      role: 'Vice President RevOps | DevOps',
      focus: 'Infrastructure, Scalability & Automation',
      belief: 'Developer velocity and deployment confidence stem from disciplined CI/CD automation and zero-downtime infrastructure.',
      image: '/assets/team/aaron.jpg',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Executive Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            Clear Ownership Starts at the Top
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="p-8 rounded-[20px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-[#1e1e1e] border border-[#00CE44]/30 flex items-center justify-center text-[#00CE44] font-black text-2xl mb-6">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-1">
                  {leader.name}
                </h3>
                <div className="text-[#00CE44] text-sm font-semibold mb-4">
                  {leader.role}
                </div>
                <div className="border-t border-white/5 pt-4 mb-4">
                  <span className="text-white/40 text-[11px] font-mono uppercase tracking-wider block mb-1">
                    Primary Focus
                  </span>
                  <p className="text-white/90 text-sm font-medium">
                    {leader.focus}
                  </p>
                </div>
                <div>
                  <span className="text-white/40 text-[11px] font-mono uppercase tracking-wider block mb-1">
                    Operating Belief
                  </span>
                  <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed">
                    “{leader.belief}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
