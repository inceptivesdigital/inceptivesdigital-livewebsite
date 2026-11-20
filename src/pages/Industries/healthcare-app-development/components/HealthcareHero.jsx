import { Link } from 'react-router-dom'

export default function HealthcareHero() {
  const reviewBadges = [
    {
      name: 'Clutch',
      src: '/assets/locations/toronto/clutch.png',
      alt: 'Clutch 5.0 Rating',
      href: 'https://clutch.co/profile/inceptives-digital',
    },
    {
      name: 'Bark',
      src: '/assets/locations/toronto/bark.png',
      alt: 'Bark 5.0 Rating',
      href: 'https://www.bark.com/en/us/company/inceptives-digital/Pww4ae/',
    },
    {
      name: 'Trustpilot',
      src: '/assets/locations/toronto/trustpilot.png',
      alt: 'Trustpilot 4.7 Rating',
      href: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#000000] text-white pt-28 pb-0 lg:pt-32">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          {/* Left Column */}
          <div className="lg:col-span-7 text-left pb-12 lg:pb-24 xl:pb-28">
            {/* Green Eyebrow H1 */}
            <h1 className="text-base sm:text-lg lg:text-[20px] font-bold text-[#00CE44] tracking-normal mb-3">
              Healthcare App Development Company
            </h1>

            {/* Main Bold White Headline (Clean 3-line display matching screenshot) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold text-white tracking-tight leading-[1.14] mb-5 max-w-[720px]">
              Custom Healthcare Applications Clinical Accuracy and Compliance From the Ground Up
            </h2>

            {/* Subtitle */}
            <p className="text-white/85 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal mb-8 max-w-xl">
              Custom healthcare applications for hospitals, clinics, and health startups. Telemedicine platforms, EHR systems, remote monitoring, and AI-powered healthcare tools are built to HIPAA, GDPR, and PHIPA compliance standards from the architecture stage.
            </p>

            {/* Dual CTA Buttons: Sharp corners, clean medium text, no icons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00CE44] text-black font-medium text-sm sm:text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
              >
                Get a Custom Quote
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#00CE44] text-[#00CE44] font-medium text-sm sm:text-base rounded-none hover:bg-[#00CE44] hover:text-black transition-all duration-200 cursor-pointer shadow-none"
              >
                Schedule A Call
              </Link>
            </div>

            {/* Review Badges Row */}
            <div className="flex items-center gap-5 sm:gap-7 flex-wrap">
              {reviewBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-105"
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="h-10 sm:h-13 w-auto object-contain select-none"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Doctor + Phone Mockup flush to very bottom edge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
            <img
              src="/assets/healthcare/healthcare-bg.webp"
              alt="Custom Healthcare Mobile Application"
              className="w-full max-w-[560px] xl:max-w-[620px] h-auto object-contain object-bottom block select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
