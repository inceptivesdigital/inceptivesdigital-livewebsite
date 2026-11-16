import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function LeadershipFounders() {
  const founders = [
    {
      name: 'Hannan Shahnoor',
      role: 'Chief Executive Officer',
      image: '/assets/leadership/hannan.png',
      bio: 'Hannan leads the long-term direction of Inceptives Digital. He is responsible for the standards that guide the company’s work, the development of its leaders, and the value it aims to create for clients. His focus is on building an organization where expertise is shared, decisions are owned, and the quality of the work does not depend on any one person.',
      linkText: 'Read the Founder’s Letter',
      linkTo: '/founders-letter',
    },
    {
      name: 'Areeb Rehman',
      role: 'Chief Operating Officer',
      image: '/assets/leadership/areeb.png',
      bio: 'Areeb oversees the operational and commercial foundations of client engagements. He works to connect a client’s goals with a practical plan, bring the right expertise into early conversations, and establish clear expectations before delivery begins. His responsibility is to help make each engagement sound from the outset.',
      linkText: 'View Profile',
      linkTo: '#the-founders',
    },
  ]

  return (
    <section id="the-founders" className="py-20 sm:py-28 bg-[#090a0d] relative overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00CE44]/[0.05] rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00CE44]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-20">
          <div className="text-[12px] sm:text-[13px] font-bold text-[#00CE44] tracking-[0.2em] uppercase mb-3">
            Inceptives Digital / The Founders
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-black text-white tracking-tight leading-[1.15] mb-5">
            The Leaders Shaping Our Standards
          </h2>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed font-normal">
            Meet the leaders who initiated Inceptives Digital in 2018. Their vision established the company’s direction, and their standards continue to guide the work we deliver today.
          </p>
        </div>

        {/* 2 Founders Cards Grid (Matching Attachment 3 design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((f) => (
            <div
              key={f.name}
              className="group flex flex-col bg-[#121316] border border-white/10 overflow-hidden hover:border-[#00CE44]/50 transition-all duration-300"
            >
              {/* Photo Area with Grayscale Tone and subtle hover focus */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#18191d]">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-90" />
                
                {/* Overlay Name & Role (as in WordPress / Attachment 3) */}
                <div className="absolute bottom-4 left-6 right-6 text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {f.name}
                  </h3>
                  <p className="text-[#00CE44] text-xs sm:text-sm font-semibold tracking-wide uppercase mt-1">
                    {f.role}
                  </p>
                </div>
              </div>

              {/* Bio & Links Area */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left bg-[#121316]">
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {f.bio}
                </p>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    to={f.linkTo}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-[#00CE44] uppercase tracking-wider transition-colors group/btn"
                  >
                    <span>{f.linkText}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#00CE44] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-white/40 uppercase font-mono tracking-widest">
                    Since 2018
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
