import { Users, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import BookingCTA from '../components/BookingCTA'

export default function StaffAugmentation() {
  const benefits = [
    {
      title: 'Top 3% Senior Talent Only',
      desc: 'Skip months of recruiting. Every engineer undergoes rigorous algorithmic, architectural, and communication vetting.'
    },
    {
      title: '48-Hour Rapid Onboarding',
      desc: 'Seamless integration into your Slack, Jira, GitHub, and daily standups within 48 to 72 hours.'
    },
    {
      title: 'Zero Overhead & Risk',
      desc: 'Flexible month-to-month contracts. Scale engineering capacity up or down with 14-day notice.'
    },
    {
      title: 'Direct Timezone Overlap',
      desc: 'Our distributed squads work synchronized with US Eastern, Central, and Pacific timezones.'
    }
  ]

  const roles = [
    'Senior React / Next.js Engineers',
    'Senior iOS & Swift Developers',
    'Senior Android & Kotlin Engineers',
    'Flutter & Cross-Platform Specialists',
    'Go & Node.js Backend Architects',
    'Python & AI/ML Data Engineers',
    'DevOps & Cloud Infrastructure Leads',
    'QA Automation Engineers'
  ]

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <section className="px-4 sm:px-8 mb-20">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111419] border border-white/10 text-[#00CE44] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
            Elite Engineering Capacity
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            IT Staff Augmentation <span className="text-[#00CE44]">Services</span>
          </h1>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Access senior software engineers, mobile developers, and AI architects quickly to scale your sprint velocity and hit critical production deadlines.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-8 mb-24">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-7 rounded-2xl bg-[#0c0e12] border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Roles Matrix */}
      <section className="px-4 sm:px-8 mb-24">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] p-8 sm:p-12 rounded-3xl bg-[#0e1118] border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Specialized Engineering Roles Available for Immediate Deployment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((r) => (
              <div key={r} className="p-4 rounded-xl bg-[#141721] border border-white/5 flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00CE44] shrink-0" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
