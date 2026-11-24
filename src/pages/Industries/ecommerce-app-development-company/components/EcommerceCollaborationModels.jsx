import React from 'react'
import { Link } from 'react-router-dom'
import { UserPlus, Users, SlidersHorizontal } from 'lucide-react'

const models = [
  {
    icon: UserPlus,
    title: 'Staff Augmentation',
    description: (
      <>
        Extend your{' '}
        <Link
          to="/blog/in-house-development-vs-app-development-partner"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          in-house development team
        </Link>{' '}
        with experienced eCommerce app developers who work within your existing workflows. Access specialized engineering expertise without the overhead of permanent recruitment.
      </>
    ),
  },
  {
    icon: Users,
    title: 'Dedicated Development Team',
    description:
      'For projects requiring continuous development, our dedicated team works exclusively on your application. You set priorities and maintain direct communication with engineers throughout the engagement.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Flexible Team Engagement',
    description:
      'Development needs can change as your commerce platform evolves. Our flexible team model lets you adjust engineering capacity according to upcoming releases, integration requirements, and project workload.',
  },
]

export default function EcommerceCollaborationModels() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Choose How You Work with Our{' '}
            <span className="text-[#00CE44]">eCommerce App Developers</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Inceptives Digital offers flexible engagement models based on your project scope and internal development capacity. Choose the arrangement that gives your business the right engineering expertise and control over delivery.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {models.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[18px] p-8 flex flex-col items-start text-left transition-colors duration-200"
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
