import { Code, Server, Database, ShieldCheck, ArrowRight } from 'lucide-react'
import BookingCTA from '../components/BookingCTA'

export default function CustomSoftwareDevelopment() {
  const capabilities = [
    { title: 'Enterprise Web Applications', desc: 'Custom enterprise software, internal admin portals, operational dashboards, and customer-facing web platforms.' },
    { title: 'High-Throughput API Backends', desc: 'RESTful, GraphQL, and gRPC microservice backends built in Go, Node.js, and Python engineered for millions of operations.' },
    { title: 'Database Optimization & Migration', desc: 'PostgreSQL, MongoDB, and Redis distributed architectures optimized for sub-10ms query times and zero data loss.' },
    { title: 'Legacy Modernization', desc: 'Auditing and re-architecting monolithic legacy systems into modular, scalable cloud-native microservices.' }
  ]

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <section className="px-4 sm:px-8 mb-20">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111419] border border-white/10 text-[#00CE44] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
            Enterprise Engineering
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Custom Software Development <br />
            <span className="text-[#00CE44]">Services USA</span>
          </h1>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Need Custom Software Development Services? Inceptives Digital creates efficient, reliable, and game-changing solutions to drive your business success.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 mb-24">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((c) => (
            <div key={c.title} className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12] border border-white/[0.08] hover:border-[#00CE44]/40 transition">
              <h3 className="text-2xl font-bold text-white mb-3">{c.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
