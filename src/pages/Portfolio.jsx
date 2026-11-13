import { Link } from 'react-router-dom'
import { ArrowUpRight, TrendingUp, ShieldCheck } from 'lucide-react'
import BookingCTA from '../components/BookingCTA'

export default function Portfolio() {
  const caseStudies = [
    {
      title: 'Halwar Connect',
      slug: '/portfolio/halwar-connect',
      category: 'On-Demand Services Platform',
      h1: 'Powering the Future of On-Demand Services with Speed, Trust, and Transparency',
      metric: '+480% Booking Volume',
      submetric: 'Sub-second real-time map tracking',
      desc: 'Real-time booking and logistics platform connecting verified home and automotive technicians with localized instant dispatch and in-app escrow payments.',
      tags: ['React Native', 'Node.js', 'WebSockets', 'Stripe Connect']
    },
    {
      title: 'Family Entertainment Group',
      slug: '/portfolio/family-entertainment-group',
      category: 'Attraction Media Automation',
      h1: 'Turning Real-World Adventures Into Shareable Digital Memories',
      metric: '1.2M+ Videos Generated',
      submetric: 'Automated video compilation in < 45s',
      desc: 'An edge-computed video platform installed across top theme parks and attractions, automatically capturing, editing, and delivering 4K highlight reels to guest smartphones.',
      tags: ['Edge Computing', 'AWS MediaConvert', 'Next.js', 'Computer Vision']
    },
    {
      title: 'DPS Airem',
      slug: '/portfolio/dps-airem',
      category: 'Workforce & Security Intelligence',
      h1: 'Transforming Security Management with Real-Time Intelligence',
      metric: '-42% Dispatch Latency',
      submetric: '1,400+ active field units',
      desc: 'High-availability workforce dispatch, incident reporting, and telematics suite engineered for national industrial infrastructure with offline sync.',
      tags: ['Flutter Native', 'PostgreSQL', 'Mapbox GPS', 'Go Backend']
    },
    {
      title: 'WordSmith Pro',
      slug: '/portfolio',
      category: 'Generative AI Platform',
      h1: 'Next-Generation Generative AI Auditing Suite',
      metric: '2.8M Daily Prompts',
      submetric: 'Sub-150ms streaming throughput',
      desc: 'Fine-tuned LLM writing assistant, automated corporate policy compliance auditor, and collaborative document workspace.',
      tags: ['Python / FastAPI', 'LLM Fine-Tuning', 'React', 'Redis']
    }
  ]

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <section className="px-4 sm:px-8 mb-20">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111419] border border-white/10 text-[#00CE44] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
            Case Studies &amp; Impact
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Software Built For Today <br />
            <span className="text-[#00CE44]">And Ready For Tomorrow</span>
          </h1>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore real-world software and mobile applications built by Inceptives Digital. Examine how strategic engineering translated directly into enterprise value.
          </p>
        </div>
      </section>

      {/* Case Studies Cards */}
      <section className="px-4 sm:px-8 mb-24">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12] border border-white/[0.08] hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#00CE44] uppercase tracking-wider">
                    {cs.category}
                  </span>
                  <Link
                    to={cs.slug}
                    className="p-2 rounded-full bg-white/[0.04] group-hover:bg-[#00CE44] text-slate-400 group-hover:text-black transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3">
                  {cs.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {cs.desc}
                </p>
                <div className="p-4 rounded-2xl bg-[#12151c] border border-white/5 flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xl font-bold text-white font-mono">{cs.metric}</div>
                    <div className="text-xs text-slate-400">{cs.submetric}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#00CE44]/10 text-[#00CE44]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-white/[0.06]">
                <Link
                  to={cs.slug}
                  className="inline-flex items-center gap-2 text-sm text-[#00CE44] font-medium hover:underline"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
