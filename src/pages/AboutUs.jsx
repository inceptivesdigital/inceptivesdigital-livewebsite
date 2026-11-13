import { ShieldCheck, Award, Users, Compass } from 'lucide-react'
import BookingCTA from '../components/BookingCTA'

export default function AboutUs() {
  const values = [
    { title: 'Engineering Over Slogans', desc: 'We are builders, architects, and designers. We believe in measurable code performance, clean architecture, and product velocity.' },
    { title: 'Transparency & Code Ownership', desc: '100% of repository commits, Figma files, and documentation belong to you. We operate with open communication and mutual NDAs.' },
    { title: 'Senior Minds On Every Decision', desc: 'No bait-and-switch. Your product is directed, architected, and built by senior staff with proven enterprise track records.' },
    { title: 'Zero-Tolerance For Technical Debt', desc: 'We build systems designed to scale to millions of users without requiring painful architectural rewrites.' }
  ]

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <section className="px-4 sm:px-8 mb-20">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111419] border border-white/10 text-[#00CE44] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
            About Inceptives Digital
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Engineering Digital Products That <br />
            <span className="text-[#00CE44]">Cannot Afford To Fail</span>
          </h1>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Inceptives Digital is an elite software engineering studio. We partner with ambitious technical founders and enterprise leaders across the USA, UK, and worldwide to build digital products that scale.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 mb-24">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12] border border-white/[0.08]">
              <h3 className="text-2xl font-bold text-white mb-3">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
