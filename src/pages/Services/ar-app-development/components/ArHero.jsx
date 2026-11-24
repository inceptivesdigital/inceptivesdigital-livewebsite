import { Link } from 'react-router-dom'
import HeroTrustBadges from '../../../../components/HeroTrustBadges'

const TRUSTED_LOGOS = [
  { name: 'DPS AIrem', src: '/assets/ios-app/mobile-brand2.png' },
  { name: 'Family Entertainment Group', src: '/assets/ios-app/mobile-brand3.png' },
  { name: 'Pulse Check Timer', src: '/assets/ios-app/mobile-brand4.png' },
  { name: 'State of the Art Chiropractic', src: '/assets/ios-app/seo-page-sec2-icon5.png' },
  { name: 'Kaefer', src: '/assets/ios-app/kaefer-img.png' },
  { name: 'Bookwave Publishing', src: '/assets/ios-app/bookwave-img.png' },
]

export default function ArHero() {
  return (
    <>
      <section className="relative w-full bg-[#000000] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-6">
                AR App <span className="text-[#00CE44]">Development Company</span>
              </h1>

              <p className="text-white/90 text-base sm:text-lg leading-[1.68] font-normal mb-8 max-w-2xl">
                Inceptives Digital is a{' '}
                <Link
                  to="/mobile-app-development"
                  className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
                >
                  mobile app development company
                </Link>{' '}
                trusted by 70+ businesses across the globe. With the dedication and passion of our expert AR app developers, we have been delivering AR solutions that precisely merge the physical and digital worlds. Whether you&rsquo;re building immersive games, interactive brand experiences, or enterprise-grade AR tools, our AR app development company is here to help you provide a top-notch digital experience to your users.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#contact"
                  className="getintouch inline-flex items-center justify-center px-9 py-3.5 rounded-[4px] bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none"
                >
                  Get a Free Quote
                </a>
                <button
                  type="button"
                  className="openpop-shedule inline-flex items-center justify-center px-9 py-3.5 rounded-[4px] bg-transparent border border-white/30 hover:border-[#00CE44] text-white hover:text-[#00CE44] font-semibold text-sm sm:text-base transition-colors cursor-pointer"
                >
                  Schedule A Call
                </button>
              </div>

              <HeroTrustBadges />
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/ar-app/ios-banner-img.webp"
                alt="AR App Development Company"
                className="w-full max-w-[520px] h-auto object-contain select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Strip (Exact Homepage 6 Squircle Logos — Single Horizontal Row on >=768px) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1d1d1d] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight text-center">
              <span className="text-[#00CE44]">Trusted AR App Development Company</span> Delivering Augmented Reality Experiences Worldwide
            </h2>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 w-full mx-auto">
            {TRUSTED_LOGOS.map((client) => (
              <div
                key={client.name}
                className="w-24 sm:w-28 md:w-28 lg:w-32 xl:w-36 h-auto transition-all duration-300 hover:-translate-y-2.5 hover:scale-110 cursor-pointer shrink min-w-0"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="w-full h-auto object-contain select-none drop-shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
