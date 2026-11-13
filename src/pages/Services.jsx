import { Smartphone, Code, Cpu, Database, Cloud, Palette, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import BookingCTA from '../components/BookingCTA'

export default function Services() {
  const serviceList = [
    {
      title: 'Mobile App Development',
      slug: '/mobile-app-development',
      icon: Smartphone,
      desc: 'Expert iOS and Android native and cross-platform app engineering using Swift, Kotlin, React Native, and Flutter.',
      points: ['iOS & Android Native Engineering', 'Cross-Platform (Flutter / React Native)', 'Real-time WebSocket & BLE Sync', 'App Store / Play Store Approval Guarantee']
    },
    {
      title: 'Custom Software Development',
      slug: '/custom-software-development',
      icon: Code,
      desc: 'High-throughput enterprise web applications, microservices, and specialized internal tools engineered for millions of operations.',
      points: ['Next.js / React Modern Frontends', 'Node.js, Go, Python Scalable Backends', 'High-speed PostgreSQL / Redis Data Stores', 'Enterprise SLA Architecture']
    },
    {
      title: 'Blockchain & Web3 Engineering',
      slug: '/blockchain-development',
      icon: Database,
      desc: 'Decentralized applications, audited smart contracts, tokenomics systems, and private consortium chain integration.',
      points: ['Solidity Smart Contracts & Auditing', 'Zero-Knowledge & Layer-2 Scaling', 'DeFi / Web3 Token Ecosystems', 'Enterprise Hyperledger / Private Chains']
    },
    {
      title: 'AI Systems & Autonomous Agents',
      slug: '/services',
      icon: Cpu,
      desc: 'Custom generative models, fine-tuned LLMs, automated reasoning agents, and computer vision pipelines.',
      points: ['Fine-Tuned LLMs & RAG Architectures', 'Autonomous Multi-Agent Systems', 'Vector Database Pipelines', 'Sub-150ms Streaming Latency']
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      slug: '/services',
      icon: Cloud,
      desc: 'Kubernetes orchestration, automated CI/CD deployment pipelines, zero-trust security, and cloud cost optimization.',
      points: ['AWS / GCP Multi-Region Architecture', 'Terraform Infrastructure as Code', 'Automated Penetration & Security Scans', '24/7 Datadog Telemetry Monitoring']
    },
    {
      title: 'Product Strategy & UI/UX Design',
      slug: '/services',
      icon: Palette,
      desc: 'Data-driven UX research, design systems, interactive prototypes, and usability testing that maximize retention.',
      points: ['Figma Design System Tokens', 'Clickable Micro-Interaction Prototypes', 'User Psychology & Friction Audits', 'Conversion Rate Optimization (CRO)']
    }
  ]

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      {/* Services Hero Header */}
      <section className="px-4 sm:px-8 mb-20">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111419] border border-white/10 text-[#00CE44] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
            Full Spectrum Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Custom Software Development &amp;{' '}
            <span className="text-[#00CE44]">Consulting Services</span>
          </h1>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Proven software engineering with 8+ years of technical leadership, 70+ launched systems, and 20+ specialized industries served across North America and Europe.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-8 mb-24">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className="p-8 rounded-3xl bg-[#0c0e12] border border-white/[0.08] hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 w-fit rounded-2xl bg-[#14171f] text-[#00CE44] border border-white/5 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    {svc.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00CE44] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-white/[0.06]">
                  <Link
                    to={svc.slug}
                    className="inline-flex items-center gap-2 text-sm text-slate-300 group-hover:text-white font-medium transition"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-4 h-4 text-[#00CE44] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Booking CTA section */}
      <BookingCTA />
    </div>
  )
}
