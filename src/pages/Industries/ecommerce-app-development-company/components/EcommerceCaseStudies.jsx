import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'

export default function EcommerceCaseStudies() {

  return (
    <>
      {/* eCommerce and Marketplace Applications We've Developed */}
      <section id="case-studies" className="w-full bg-[#000000] text-white py-16 md:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
              eCommerce and Marketplace Applications{' '}
              <span className="text-[#00CE44]">We&apos;ve Developed</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
              Explore how our engineering teams have translated complex commerce requirements into mobile applications that support real customer transactions and business operations.
            </p>
          </div>

          {/* Featured Case Study Card: StakBread */}
          <div className="bg-[#16181d] border border-white/10 rounded-[24px] overflow-hidden pt-8 px-6 sm:pt-10 sm:px-10 lg:pt-14 lg:px-14 pb-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-6 text-left flex flex-col items-start pb-2 lg:pb-14">
              <div className="mb-6">
                <img
                  src="/assets/case-studies/stakbread-logo.png"
                  alt="StakBread Logo"
                  className="max-h-14 sm:max-h-16 w-auto object-contain select-none"
                  loading="lazy"
                />
              </div>

              <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
                StakBread
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight mb-4">
                Turning Creator Content Into Shoppable Experiences
              </h3>

              <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-[1.7] font-normal mb-8 max-w-xl">
                StakBread brings content discovery and purchasing into one mobile experience, allowing creators to monetize their audiences through integrated storefronts and product-linked videos.
              </p>

              <Link
                to="/portfolio/stakbread"
                className="inline-flex items-center gap-2.5 bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-[15px] sm:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-6 self-end flex justify-center lg:justify-end items-end">
              <img
                src="/assets/case-studies/stakbread-mockup.png"
                alt="StakBread Mobile App Screens"
                className="block w-full max-w-[520px] h-auto object-contain object-bottom select-none drop-shadow-[0_24px_60px_rgba(0,206,68,0.16)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hear From Founders Who've Worked With Inceptives Digital */}
      <section className="w-full bg-[#111111] text-white py-16 md:py-24 border-y border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
              Hear From Founders Who&apos;ve Worked With{' '}
              <span className="text-[#00CE44]">Inceptives Digital</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
              Hear directly from founders about their experience working with our development teams, from early product decisions through development and launch.
            </p>
          </div>

          <div className="max-w-[860px] mx-auto bg-[#1b1c21] border border-white/10 rounded-[24px] p-8 sm:p-10 text-center flex flex-col items-center">
            <Quote className="w-10 h-10 text-[#00CE44] mb-4" />
            <p className="text-white/90 text-[16px] sm:text-[18px] leading-[1.7] font-normal mb-6">
              &ldquo;We needed an engineering partner capable of architecting a highly scalable, complex social commerce platform. Inceptives Digital mapped out a precise technical strategy demonstrating deep understanding of data architecture, system performance, and user-centric design.&rdquo;
            </p>
            <div className="text-white font-bold text-[18px]">Gary Dixon</div>
            <div className="text-[#00CE44] text-[14px] sm:text-[15px] font-medium">
              Founder, StakBread
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
