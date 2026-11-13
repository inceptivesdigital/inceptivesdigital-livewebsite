import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, Shield, Cpu } from 'lucide-react'
import BookingCTA from '../components/BookingCTA'

export default function CaseStudyDetail() {
  const { slug } = useParams()

  const studies = {
    'halwar-connect': {
      title: 'Halwar Connect',
      category: 'On-Demand Services Platform',
      h1: 'Powering the Future of On-Demand Services with Speed, Trust, and Transparency',
      desc: 'Halwar Connect is a high-speed on-demand platform designed to connect verified service specialists with consumers through real-time GPS tracking, automated escrow settlements, and in-app communications.',
      metrics: [
        { label: 'Booking Volume', val: '+480%' },
        { label: 'Dispatch Latency', val: '< 3.2s' },
        { label: 'App Store Rating', val: '4.9 ★' },
        { label: 'Verified Pros', val: '12,500+' }
      ],
      challenge: 'The client faced severe latency issues with legacy GPS geolocation tracking, erratic driver dispatching, and checkout drop-offs caused by friction in multi-party payout processing.',
      solution: 'We re-architected the mobile apps from the ground up using React Native with custom native background location bridges, Go-powered WebSockets for concurrent telemetry streaming, and automated Stripe Connect split escrow.',
      results: [
        'Over 480% increase in weekly completed jobs within the first six months.',
        'Sub-second real-time map updates with 99.98% WebSocket uptime.',
        'Zero payment processing discrepancies across 500,000+ customer transactions.'
      ],
      stack: ['React Native', 'Node.js / Go', 'PostgreSQL', 'WebSockets', 'Stripe Connect', 'AWS ECS']
    },
    'family-entertainment-group': {
      title: 'Family Entertainment Group',
      category: 'Attraction Media Automation',
      h1: 'Turning Real-World Adventures Into Shareable Digital Memories',
      desc: 'An automated, edge-computed video pipeline for world-class theme parks and family entertainment centers that records, splices, edits, and sends personalized 4K highlight reels to visitors.',
      metrics: [
        { label: 'Videos Generated', val: '1.2M+' },
        { label: 'Render Time', val: '< 45s' },
        { label: 'Guest Engagement', val: '86%' },
        { label: 'Social Shares', val: '340k+' }
      ],
      challenge: 'Capturing guest ride moments and manually editing video packages resulted in hours of delay, causing over 75% of visitors to abandon purchase queues before leaving the park.',
      solution: 'Inceptives built an automated computer vision edge computing workflow that syncs camera feeds with RFID wristbands, processes 4K footage in under 45 seconds, and notifies guests on their phones.',
      results: [
        'Automated 1,200,000+ guest highlight reels without human editor intervention.',
        'Boosted park secondary media revenue by 320% in the pilot season.',
        'App performance maintained 99.99% uptime during peak holiday crowd surges.'
      ],
      stack: ['Edge Computing', 'AWS MediaConvert', 'Next.js', 'Computer Vision', 'FFmpeg', 'Docker']
    },
    'dps-airem': {
      title: 'DPS Airem',
      category: 'Workforce & Security Intelligence',
      h1: 'Transforming Security Management with Real-Time Intelligence',
      desc: 'DPS Airem is an enterprise operations suite providing field guard monitoring, automated shift scheduling, geofenced perimeter alerts, and instant incident escalation for industrial clients.',
      metrics: [
        { label: 'Field Response', val: '-42%' },
        { label: 'Active Units', val: '1,400+' },
        { label: 'Uptime SLA', val: '99.99%' },
        { label: 'Incident Reports', val: '45,000+' }
      ],
      challenge: 'Paper-based logbooks and fragmented radio calls led to unaccounted guard rotations, delayed responses to perimeter breaches, and compliance audit penalties.',
      solution: 'We engineered an offline-first mobile field suite in Flutter paired with geofenced BLE beacons, automatic biometric sign-ins, and a command center web dashboard.',
      results: [
        'Field response latency reduced by 42% across 80+ secure facilities.',
        'Automated 100% of shift payroll audits and incident compliance filing.',
        'Seamless offline queuing enables zero data loss in remote signal dead-zones.'
      ],
      stack: ['Flutter Native', 'PostgreSQL', 'Mapbox GPS', 'Go Backend', 'Redis', 'AWS GovCloud']
    }
  }

  const study = studies[slug] || studies['halwar-connect']

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4 text-[#00CE44]" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111419] border border-white/10 text-[#00CE44] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
            {study.category}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {study.h1}
          </h1>

          <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            {study.desc}
          </p>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 p-6 rounded-2xl bg-[#0c0e12] border border-white/10">
            {study.metrics.map((m) => (
              <div key={m.label} className="text-center p-2">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono text-[#00CE44]">{m.val}</div>
                <div className="text-xs text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] space-y-10">
          <div className="p-8 rounded-3xl bg-[#0e1118] border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-slate-300 text-base leading-relaxed">{study.challenge}</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0e1118] border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Our Engineering Solution</h2>
            <p className="text-slate-300 text-base leading-relaxed">{study.solution}</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0e1118] border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Measurable Business Impact</h2>
            <ul className="space-y-3">
              {study.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-slate-200 text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#0c0e12] border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">Production Technology Stack</h2>
            <div className="flex flex-wrap gap-2.5">
              {study.stack.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-200 font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
