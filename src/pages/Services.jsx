import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroTrustBadges from '../components/HeroTrustBadges'

const stats = [
  {
    icon: '/assets/services-page/apps-launch.svg',
    value: '70+',
    label: 'Apps Delivered',
  },
  {
    icon: '/assets/services-page/active-developer.svg',
    value: '100%',
    label: 'Client Satisfaction Rate',
  },
  {
    icon: '/assets/services-page/developer-resize.png',
    value: '8+',
    label: 'Years Of Development Experience',
  },
  {
    icon: '/assets/services-page/rating.svg',
    value: '4.7',
    label: 'Rating On Clutch',
  },
]

const coreServices = [
  {
    title: 'Mobile App Development',
    to: '/mobile-app-development',
    description:
      'Native and cross-platform apps made for real users, real operating conditions, and long-term use.',
    img: '/assets/services-page/about-img1.png',
    alt: 'App Development',
  },
  {
    title: 'Digital Product Development',
    to: '/custom-software-development',
    description:
      'Product strategy, design, development, rescue, scaling, and continued improvement under one team.',
    img: '/assets/services-page/about-img2.png',
    alt: 'Digital Product Development',
  },
  {
    title: 'AI-Powered Systems',
    to: '/ai-development',
    description:
      'AI products and automated workflows designed around a real operational need, not added for appearance.',
    img: '/assets/services-page/about-img3.png',
    alt: 'AI-Powered Systems',
  },
]

export default function Services() {
  useEffect(() => {
    const title = 'Our Services - Inceptives Digital'
    const description =
      'Strategy, design, app development, AI systems, and product engineering under one studio built for responsible product delivery.'

    document.title = title

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el && selector.startsWith('meta[name=')) {
        el = document.createElement('meta')
        el.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
        document.head.appendChild(el)
      }
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', 'https://nextincep.wpenginepowered.com/services')

    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full bg-[#000000] text-white overflow-x-hidden">
      {/* Section 1: Hero Section */}
      <section className="relative w-full bg-[#000000] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 min-h-[85vh] flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[58px] font-bold leading-[1.1] tracking-tight text-white mb-6">
                Strategy Design Engineering And AI Under One Studio
              </h1>

              <p className="text-white/85 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.68] font-normal max-w-[600px] mb-9">
                Inceptives Digital helps businesses turn product ideas, operational problems, and AI opportunities into useful digital products through strategy, design, engineering, and post-launch support under one studio.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-white text-[#202020] hover:text-[#00CE44] border border-[#00CE44] font-medium text-[15px] sm:text-[16px] px-9 py-4 rounded-none transition-colors duration-200"
              >
                Book a Session
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
              </a>
            </div>

              {/* 3 Review Badges Row */}
              <HeroTrustBadges />
            </div>

            {/* Right Column: Multi-Device Mockup */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/assets/services-page/service-banner.png"
                alt="Strategy Design Engineering And AI Studio Showcase"
                className="w-full max-w-[660px] h-auto object-contain select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 4-Column Stats / Metrics Strip */}
      <section className="w-full bg-[#202020] py-12 md:py-14 border-y border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-11 h-11 object-contain mb-3 select-none"
                  loading="lazy"
                />
                <div className="text-[#00CE44] text-[30px] sm:text-[36px] md:text-[40px] font-bold leading-none mb-2">
                  {item.value}
                </div>
                <div className="text-white text-[14px] sm:text-[15px] md:text-[16px] font-medium capitalize">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Core Digital Product Services */}
      <section className="w-full bg-[#000000] py-16 md:py-24">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="text-center max-w-[900px] mx-auto mb-12 md:mb-16">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.18] text-white">
              Our Core Digital Product Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {coreServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#202020] rounded-[20px] p-7 sm:p-8 flex flex-col justify-between text-left shadow-[0_0_16px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-[#00CE44] text-[22px] sm:text-[25px] font-bold leading-snug mb-3">
                    <Link
                      to={svc.to}
                      className="hover:underline transition-colors"
                    >
                      {svc.title}
                    </Link>
                  </h3>
                  <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.68] font-normal mb-8">
                    {svc.description}
                  </p>
                </div>

                <Link to={svc.to} className="block w-full mt-auto">
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    className="w-full h-auto rounded-[14px] object-contain select-none"
                    loading="lazy"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Work With A Digital Product Studio? */}
      <section className="w-full bg-[#151515] py-16 md:py-24">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Shaped Dark Card */}
            <div className="lg:col-span-7">
              <div
                className="rounded-[24px] bg-[#1f1f1f] lg:bg-transparent p-8 sm:p-10 lg:p-14 text-left bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('/assets/services-page/blockchaincontainer-shap.png')",
                  backgroundSize: '100% 100%',
                }}
              >
                <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.18] text-white mb-5">
                  Why Work With A Digital Product Studio?
                </h2>
                <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.75] font-normal max-w-[680px]">
                  A digital product studio keeps product strategy, design, engineering, AI, and delivery decisions connected under one team. Inceptives Digital helps clients define the right scope, question weak assumptions early, design around real user workflows, and build mobile apps, web platforms, backend systems, and AI-powered products that remain useful after launch. This studio model reduces disconnected handoffs and keeps business goals, product decisions, and technical execution aligned from discovery to delivery.
                </p>
              </div>
            </div>

            {/* Right UI Collage Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/services-page/service-lastsect.png"
                alt="Why Work With A Digital Product Studio"
                className="w-full max-w-[540px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
