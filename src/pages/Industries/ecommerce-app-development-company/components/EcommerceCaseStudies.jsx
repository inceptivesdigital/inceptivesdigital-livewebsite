import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, X, Quote } from 'lucide-react'

export default function EcommerceCaseStudies() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      {/* eCommerce and Marketplace Applications We've Developed */}
      <section className="w-full bg-[#000000] text-white py-16 md:py-24">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
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
          <div className="bg-[#16181d] border border-white/10 rounded-[24px] p-8 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 text-left flex flex-col items-start">
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

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/assets/case-studies/stakbread-mockup.png"
                alt="StakBread Mobile App Screens"
                className="w-full max-w-[520px] h-auto object-contain select-none drop-shadow-[0_24px_60px_rgba(0,206,68,0.16)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hear From Founders Who've Worked With Inceptives Digital (Featured Video Testimonial) */}
      <section className="w-full bg-[#111111] text-white py-16 md:py-24 border-y border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
            <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
              Featured Video Testimonial
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
              Hear From Founders Who&apos;ve Worked With{' '}
              <span className="text-[#00CE44]">Inceptives Digital</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
              Hear directly from founders about their experience working with our development teams, from early product decisions through development and launch.
            </p>
          </div>

          <div className="max-w-[1100px] mx-auto bg-[#1b1c21] border border-white/10 rounded-[24px] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group relative w-full aspect-video rounded-[16px] overflow-hidden border border-white/15 bg-gradient-to-br from-[#1d1d1d] to-[#0b2a14] cursor-pointer p-0 block"
                aria-label="Play Gary Dixon StakBread Video Testimonial"
              >
                <video
                  src="/assets/comp-bannerhero.mp4"
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <span className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#00CE44] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </span>
              </button>
            </div>

            <div className="lg:col-span-6 text-left flex flex-col items-start">
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
        </div>

        {/* Video Lightbox Modal */}
        {videoOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-[#111] rounded-[18px] overflow-hidden border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-[#00CE44] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src="/assets/comp-bannerhero.mp4"
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
              />
            </div>
          </div>
        )}
      </section>
    </>
  )
}
