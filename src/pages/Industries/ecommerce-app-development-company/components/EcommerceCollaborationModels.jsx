import React from 'react'
import { UserPlus, Users, SlidersHorizontal } from 'lucide-react'

const models = [
  {
    icon: UserPlus,
    title: '1. Staff Augmentation',
    description:
      'Specialised ecommerce developers integrated directly into your existing team. Mobile, web, and backend expertise added on demand to fill skill gaps, accelerate delivery, and meet deadlines without permanent hiring overhead.',
  },
  {
    icon: Users,
    title: '2. Dedicated Developers',
    description:
      'A development team working exclusively on your ecommerce project. Complete control over priorities, direct communication, and full accountability from discovery through deployment. Built for projects that need consistent focus and deep product context over time.',
  },
  {
    icon: SlidersHorizontal,
    title: '3. Flex Team',
    description:
      'A multi-disciplinary team that scales with your project requirements. Frontend, backend, UI/UX, and QA resources are adjusted as scope evolves. Built for ecommerce businesses whose feature roadmap changes faster than a fixed team can accommodate.',
  },
]

export default function EcommerceCollaborationModels() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Collaboration Models Our{' '}
            <span className="text-[#00CE44]">Ecommerce App Development Company</span> Offers
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The right engagement model depends on whether you need to extend an existing team, dedicate resources exclusively to your project, or maintain flexibility as requirements evolve.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {models.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[18px] p-8 flex flex-col items-start text-left transition-colors duration-200 cursor-pointer"
              >
                <Icon
                  className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[20px] sm:text-[22px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/80 group-hover:text-black/90 text-[15px] leading-[1.7] font-normal transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
