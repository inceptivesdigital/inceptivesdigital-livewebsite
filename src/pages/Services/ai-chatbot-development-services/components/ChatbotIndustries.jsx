import React from 'react'
import { Link } from 'react-router-dom'
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Plane,
  Briefcase,
} from 'lucide-react'

const industries = [
  {
    icon: HeartPulse,
    title: '1. Healthcare',
    to: '/healthcare-app-development',
    bullets: [
      'Patient assistance and symptom triage chatbots',
      'Clinical workflow automation and appointment management',
      'Medical data processing and summarisation',
    ],
  },
  {
    icon: Landmark,
    title: '2. Financial Services',
    to: '/fintech-app-development',
    bullets: [
      'Fraud detection alerts and risk notifications',
      'Account and transaction assistance',
      'Personalised financial guidance and credit scoring explanations',
    ],
  },
  {
    icon: ShoppingCart,
    title: '3. Ecommerce and Retail',
    to: '/ecommerce-app-development-company',
    bullets: [
      'Product recommendations and personalisation',
      'Order tracking and AI-powered support',
      'Smart search and dynamic content delivery',
    ],
  },
  {
    icon: GraduationCap,
    title: '4. Education',
    to: '/education-app-development-company',
    bullets: [
      'Virtual tutoring and personalised learning paths',
      'Automated grading and assessment assistance',
      'Content recommendations and study support',
    ],
  },
  {
    icon: Plane,
    title: '5. Travel and Hospitality',
    to: '/travel-app-development-company',
    bullets: [
      'Booking and itinerary assistance',
      'Personalised travel recommendations',
      'Flight and hotel updates and customer support automation',
    ],
  },
  {
    icon: Briefcase,
    title: '6. Enterprise Productivity',
    to: '#contact',
    bullets: [
      'Knowledge retrieval and documentation assistance',
      'Workflow automation and task management',
      'Integration with enterprise software and analytics dashboards',
    ],
  },
]

export default function ChatbotIndustries() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            AI Chatbot Development Services Across{' '}
            <span className="text-[#00CE44]">the Industries We Serve</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every industry has different conversational requirements. We build for the specific context, not a generic template.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch auto-rows-fr">
          {industries.map((ind) => {
            const Icon = ind.icon
            const inner = (
              <>
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {ind.title}
                </h3>
                <ul className="space-y-2">
                  {ind.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-white/85 group-hover:text-black text-[14px] leading-snug transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-1.5 shrink-0 transition-colors duration-200" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </>
            )
            const cls =
              'group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 h-full'

            return ind.to.startsWith('#') ? (
              <a key={ind.title} href={ind.to} className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={ind.title} to={ind.to} className={cls}>
                {inner}
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white/85 text-[16px] sm:text-[17px] leading-relaxed mb-6">
            Your industry may not be listed. Your conversational AI problem almost certainly is. Let&apos;s find out.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Discuss Your Industry Use Case →
          </a>
        </div>
      </div>
    </section>
  )
}
