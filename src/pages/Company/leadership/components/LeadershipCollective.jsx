import { useState } from 'react'
import { Users, Code, Award, CheckCircle2 } from 'lucide-react'

export default function LeadershipCollective() {
  const [activeTab, setActiveTab] = useState('all')

  const teamMembers = [
    { name: 'Nitin Soni', role: 'SVP - Sales', dept: 'sales' },
    { name: 'Lee Ranchod', role: 'Non Executive Director', dept: 'advisory' },
    { name: 'Amardeep Rawat', role: 'VP - Technology', dept: 'technology' },
    { name: 'Suyash Saxena', role: 'VP - Delivery', dept: 'delivery' },
    { name: 'Avinash Sharma', role: 'VP - Delivery', dept: 'delivery' },
    { name: 'Rajat Singh', role: 'VP - Delivery', dept: 'delivery' },
    { name: 'Apeksha Mehta', role: 'VP - Technology', dept: 'technology' },
    { name: 'Chirag Bharadwaj', role: 'VP - Technology', dept: 'technology' },
    { name: 'Kamaldeep Thakur', role: 'VP - Chandigarh Operations', dept: 'operations' },
    { name: 'Nayan Sharma', role: 'VP - Digital Transformation & Technology', dept: 'technology' },
    { name: 'Aparna Kaushik', role: 'Head of Marketing', dept: 'marketing' },
  ]

  const filteredTeam = activeTab === 'all'
    ? teamMembers
    : teamMembers.filter((m) => m.dept === activeTab)

  return (
    <section id="collective-strength" className="py-20 sm:py-28 bg-black relative overflow-hidden border-b border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[#00CE44]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-12 sm:mb-16">
          
          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.15] mb-4">
            The Collective Strength of Inceptives Digital
          </h2>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed font-normal">
            Strategists, designers, developers, and delivery specialists work together on the decisions that shape each product. These are the people who take a brief, question it, refine it, and carry the work through to launch.
          </p>
        </div>

        {/* Authentic Composite Team Grid Image (Attachment 4) */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-white/10 bg-[#121316] shadow-2xl p-2 sm:p-4">
          <img
            src="/assets/leadership/collective-strength.png"
            alt="The Collective Strength of Inceptives Digital - Leadership Team"
            className="w-full h-auto object-contain rounded-xl select-none"
            loading="lazy"
          />
        </div>

        {/* Interactive Leadership Directory Grid */}
        <div className="text-left">
          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {[
              { id: 'all', label: 'All Leaders (11)' },
              { id: 'technology', label: 'Technology' },
              { id: 'delivery', label: 'Delivery' },
              { id: 'operations', label: 'Operations' },
              { id: 'sales', label: 'Sales & Growth' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-none transition-all cursor-pointer border ${
                  activeTab === tab.id
                    ? 'bg-[#00CE44] text-black border-[#00CE44] font-bold shadow-[0_0_15px_rgba(0,206,68,0.3)]'
                    : 'bg-[#18191d] text-white/70 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredTeam.map((m) => (
              <div
                key={m.name}
                className="p-5 sm:p-6 bg-[#131417] border border-white/10 hover:border-[#00CE44]/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#00CE44]" />
                    <span className="text-[10px] text-white/40 uppercase font-mono tracking-wider">
                      Leadership
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors tracking-tight">
                    {m.name}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <p className="text-xs sm:text-sm text-white/70 font-medium">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
