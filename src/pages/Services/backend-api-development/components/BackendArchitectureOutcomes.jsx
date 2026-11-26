import { Link } from 'react-router-dom'
export default function BackendArchitectureOutcomes() {
  return (
    <section className="py-16 sm:py-24 bg-[#191919] border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column Heading (40px) */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Backend Architecture{' '}
              <span className="text-[#00CE44]">Decides Business Outcomes</span>
            </h2>
          </div>

          {/* Right Column Description (16px) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              An API boundary defined incorrectly in week one becomes a limit every feature built afterward must inherit, since nothing built on top of a boundary can exceed it. With API calls now accounting for over 80% of internet traffic, that boundary is the infrastructure a business actually runs on. Inceptives Digital maps it before the first endpoint is written, which is what separates scalable{' '}
              <Link
                to="/custom-software-development"
                className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                custom software development
              </Link>{' '}
              from a system that has to be rebuilt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
