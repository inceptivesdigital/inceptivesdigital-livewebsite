import React from 'react'
import { SolidIcon } from './StartupSolidIcons'

const services = [
  {
    icon: 'rocket',
    title: 'MVP App Development',
    description:
      'A working, investor-ready application stripped to its highest-impact core. Architecture designed to scale without a full rebuild. Delivered in 6 to 10 weeks from signed specification to deployment.',
  },
  {
    icon: 'smartphone',
    title: 'Custom Mobile App Development',
    description:
      'Native iOS, native Android, and cross-platform mobile applications built with React Native and Flutter. Optimised for performance, device-specific UX, and App Store approval from the first submission.',
  },
  {
    icon: 'cart',
    title: 'eCommerce App Development',
    description:
      'High-converting ecommerce applications with advanced product discovery, frictionless checkout, multi-currency payment gateways, and AI-driven personalisation. Built for the specific commerce model your startup is building around.',
  },
  {
    icon: 'cloud',
    title: 'SaaS Application Development',
    description:
      'Multi-tenant SaaS platforms with subscription billing engines, role-based access control, and API-first backends. Engineered to grow from your first 100 users to your first 100,000 without re-platforming.',
  },
  {
    icon: 'globe',
    title: 'Web App Development',
    description:
      "Fast-loading, SEO-friendly, and device-agnostic web applications built across React, Next.js, Vue, and Node.js. Framework selected based on your product's specific performance and scalability requirements.",
  },
  {
    icon: 'design',
    title: 'UI/UX Design and Prototyping',
    description:
      'Data-informed interface architecture from clickable Figma prototypes to full design systems. Built to reduce user drop-off, increase session depth, and make investor demos land with conviction.',
  },
  {
    icon: 'server',
    title: 'Backend and API Development',
    description:
      'RESTful and GraphQL APIs, microservices architectures, and real-time event-driven systems built on Node.js, Python, and Go. The invisible engine that keeps your product reliable under any load.',
  },
  {
    icon: 'refresh',
    title: 'App Modernisation and Re-engineering',
    description:
      'Legacy applications migrated to cloud-native, modular platforms. Business logic preserved. Technical debt eliminated. Features unlocked that your current stack cannot support without a ground-up rebuild.',
  },
  {
    icon: 'trending',
    title: 'Post-Launch Support and Growth Engineering',
    description:
      'Performance monitoring, feature iteration, security patching, A/B testing, and analytics-driven optimisation are delivered as a continuous engagement. The product that launches is the starting point, not the finished state.',
  },
]

export default function StartupServicesGrid() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Startup App Development Services{' '}
            <span className="text-[#00CE44]">Built for Every Stage of Growth</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            From first hypothesis to funded, deployed product. Every service below is built around the specific engineering and strategic requirements of startups moving fast in competitive markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1b1c21] rounded-[16px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 hover:bg-[#22242a]"
            >
              <SolidIcon
                name={service.icon}
                className="w-9 h-9 text-[#00CE44] mb-5"
              />
              <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-3">
                {service.title}
              </h3>
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-[1.68] font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
