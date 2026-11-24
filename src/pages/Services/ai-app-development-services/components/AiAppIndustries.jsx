import React from 'react'
import { Link } from 'react-router-dom'
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building2,
  Plane,
  Dumbbell,
} from 'lucide-react'

const industries = [
  {
    icon: HeartPulse,
    title: '1. Healthcare',
    to: '/healthcare-app-development',
    bullets: [
      'Clinical workflow apps',
      'Patient engagement platforms',
      'Medical data intelligence systems',
    ],
  },
  {
    icon: Landmark,
    title: '2. Fintech',
    to: '/fintech-app-development',
    bullets: [
      'Fraud detection apps',
      'Real-time transaction monitoring',
      'Credit scoring engines',
    ],
  },
  {
    icon: ShoppingCart,
    title: '3. Ecommerce',
    to: '/ecommerce-app-development-company',
    bullets: [
      'Personalisation engines',
      'Recommendation systems',
      'Dynamic pricing models',
    ],
  },
  {
    icon: GraduationCap,
    title: '4. Education',
    to: '/education-app-development-company',
    bullets: [
      'Intelligent tutoring platforms',
      'Automated assessment pipelines',
      'Adaptive learning engines',
    ],
  },
  {
    icon: Building2,
    title: '5. Real Estate',
    to: '/real-estate-app-development-company',
    bullets: [
      'AI-based property valuation',
      'Recommendation engines',
      'Lead qualification chatbots',
    ],
  },
  {
    icon: Plane,
    title: '6. Travel',
    to: '/travel-app-development-company',
    bullets: [
      'Booking and itinerary apps',
      'Personalised recommendation engines',
      'AI-powered planning assistants',
    ],
  },
  {
    icon: Dumbbell,
    title: '7. Fitness',
    to: '/fitness-app-development',
    bullets: [
      'Workout recommendation engines',
      'Progress tracking with predictive analytics',
      'Virtual coaching powered by AI',
    ],
  },
]

export default function AiAppIndustries() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            AI App Development Services Across{' '}
            <span className="text-[#00CE44]">Industries We Understand</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every industry has different data structures, workflows, and user requirements. We build for the specific context, not a generic template.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch auto-rows-fr">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <Link
                key={ind.title}
                to={ind.to}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 flex flex-col items-start text-left transition-colors duration-200 h-full"
              >
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[20px] font-bold leading-snug mb-3 transition-colors duration-200">
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
              </Link>
            )
          })}

          {/* 8th Card: Inline CTA Card completing the 4x2 grid */}
          <div className="bg-[#0b3519] rounded-[16px] p-7 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-white text-[20px] sm:text-[22px] font-bold leading-snug mb-3">
                Your industry may not be listed.
              </h3>
              <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed mb-6">
                Your problem almost certainly is. Let&apos;s find out.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[14px] sm:text-[15px] px-6 py-3.5 rounded-none transition-colors duration-200"
            >
              Tell Us About Your Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
