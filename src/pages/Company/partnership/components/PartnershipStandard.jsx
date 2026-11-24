import { Link } from 'react-router-dom'

export default function PartnershipStandard() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#000000] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Headline */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
              Delivery Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
              The Standard Behind Every <span className="text-[#00CE44]">Partner-Led Engagement</span>
            </h2>
          </div>

          {/* Right Copy with Links */}
          <div className="lg:col-span-7 text-left space-y-6 text-white/90 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
            <p>
              The client relationship is maintained with the partner throughout. Inceptives Digital delivers the engineering work behind it, from architecture through launch.
            </p>
            <p>
              The standard applied does not shift based on how the engagement originated: the same senior involvement, scope discipline, and delivery accountability apply whether the client came in directly or through a partner introduction across our{' '}
              <Link
                to="/mobile-app-development"
                className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
              >
                mobile app development
              </Link>
              ,{' '}
              <Link
                to="/backend-api-development"
                className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
              >
                backend API development
              </Link>
              , and{' '}
              <Link
                to="/custom-software-development"
                className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
              >
                custom software development
              </Link>{' '}
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
