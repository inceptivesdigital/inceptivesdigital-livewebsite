import { Link } from 'react-router-dom'

export default function EducationHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#000000] text-white pt-28 sm:pt-32 lg:pt-36 pb-16 bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/education/education-banner.png')`,
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Centered Green Eyebrow H1 */}
          <h1 className="text-base sm:text-lg lg:text-[20px] font-bold text-[#00CE44] tracking-normal mb-3">
            Education App Development Company
          </h1>

          {/* Centered 2-Line Bold White Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.14] mb-4 max-w-4xl">
            AI-Powered EdTech Apps Engineered Around Learner Behaviour and Real Outcomes
          </h2>

          {/* Centered Subtitle */}
          <p className="text-white/90 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal mb-7 max-w-4xl">
            Custom education applications for schools, EdTech startups, and corporate training organizations. AI-powered adaptive learning, LMS platforms, gamified experiences, and AR/VR simulations built to COPPA and FERPA compliance standards from the architecture stage.
          </p>

          {/* Single Centered Solid Green Button */}
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00CE44] text-black font-medium text-sm sm:text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
          >
            Let&apos;s Schedule A Call
          </Link>
        </div>
      </div>
    </section>
  )
}
