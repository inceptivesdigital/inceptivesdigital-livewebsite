import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import computerVisionBanner from '../assets/computer-vision-banner.jpg'

export default function ComputerVisionHero() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex items-center pt-28 sm:pt-32 lg:pt-28 pb-14 sm:pb-16 bg-[#1b1b1b] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-8 items-center">
        <div className="w-full flex flex-col items-start text-left">
          <h1 className="text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px] block mb-3">
            Computer Vision Development Company
          </h1>
          <h2 className="text-[36px] sm:text-[44px] md:text-[50px] xl:text-[54px] font-bold leading-[1.08] tracking-tight text-white mb-5 max-w-[640px]">
            Build Systems That See, Analyze, and Respond in Real Time
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] max-w-[650px] mb-7">
            We develop computer vision solutions that detect objects, inspect products, classify images, and analyze video streams in real time to automate processes and support faster operational decisions.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[15px] md:text-[16px] px-7 py-3.5 transition-colors duration-200"
            >
              Discuss Your Computer Vision Project
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
            >
              Schedule A Call
            </a>
          </div>
          <p className="text-white/70 text-sm mb-8">
            See more. Detect faster. Act sooner.
          </p>
          <HeroTrustBadges />
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <img
            src={computerVisionBanner}
            alt="Real-time computer vision object detection and visual analysis interface"
            width={1200}
            height={896}
            className="w-full max-w-[740px] h-auto max-h-[72vh] object-contain rounded-2xl mix-blend-lighten select-none"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
      </div>
    </section>
  )
}
