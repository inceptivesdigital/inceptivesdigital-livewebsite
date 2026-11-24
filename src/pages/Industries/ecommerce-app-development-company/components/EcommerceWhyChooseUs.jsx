import React from 'react'
import { Link } from 'react-router-dom'

const reasons = [
  {
    title: '8+ Years of Development Experience',
    description:
      'Our experience across native and cross-platform development helps businesses select technologies suited to their product requirements and long-term plans.',
  },
  {
    title: 'Proven Commerce Application Experience',
    description:
      'Projects like StakBread demonstrate our experience with marketplace transactions, customer-facing applications, and complex vendor operations.',
  },
  {
    title: 'Cost-Conscious Technical Planning',
    description: (
      <>
        We assess existing commerce platforms before recommending custom development, helping you{' '}
        <Link
          to="/blog/how-to-reduce-mobile-app-development-cost"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          reduce mobile app development costs
        </Link>{' '}
        and avoid unnecessary infrastructure changes.
      </>
    ),
  },
  {
    title: 'Native and Cross-Platform Expertise',
    description: (
      <>
        Our developers build with Swift and Kotlin, and deliver{' '}
        <Link
          to="/flutter-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Flutter app development
        </Link>{' '}
        and{' '}
        <Link
          to="/react-native-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          React Native app development
        </Link>{' '}
        to support different platform requirements and mobile application architectures.
      </>
    ),
  },
  {
    title: 'Transparent Project Delivery Process',
    description:
      'Defined milestones and regular development reviews give clients visibility into project progress, requirements, and decisions affecting delivery.',
  },
  {
    title: 'Ongoing Technical Support Services',
    description:
      'Our support teams maintain platform compatibility, address technical issues, and implement agreed enhancements as your commerce application evolves.',
  },
]

export default function EcommerceWhyChooseUs() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Why Choose Inceptives Digital as Your{' '}
            <span className="text-[#00CE44]">eCommerce App Development Company?</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            With 8+ years of experience and 70+ projects delivered across industries, Inceptives Digital brings established mobile engineering expertise to eCommerce development. Our teams align technical decisions with your business requirements and existing infrastructure.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 text-left transition-colors duration-200"
            >
              <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/80 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.68] font-normal transition-colors duration-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
