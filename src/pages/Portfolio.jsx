import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PORTFOLIO_CARDS = [
  {
    cardId: 'e-e35b5c2',
    mediaId: 'e-c5a17a1',
    imgWrapId: 'e-36e15ac',
    textWrapId: 'e-f3d2262',
    title: 'State of the Art Chiropractic',
    slug: '/portfolio/state-of-the-art-chiropractic',
    bgImage: '/assets/portfolio/case-bnr1.png',
    mockupImage: '/assets/portfolio/case-card1.png',
    description:
      'State of the Art Chiropractic needed a secure way to keep patients connected with their care beyond in-clinic visits. We designed and developed a HIPAA-compliant digital health platform that supports appointment management, encrypted video consultations, and ongoing patient progress tracking within one connected product experience.',
  },
  {
    cardId: 'e-b3bcd1b',
    mediaId: 'e-6dee2e3',
    imgWrapId: 'e-deebc68',
    textWrapId: 'e-58db7fd',
    title: 'DPS Airem',
    slug: '/portfolio/dps-airem',
    bgImage: '/assets/portfolio/casebnr2.png',
    mockupImage: '/assets/portfolio/cas-card2.png',
    description:
      'DPS Airem relied on paper-based processes that limited visibility across its distributed security workforce. We transformed those workflows into a cloud-based workforce management platform with geofenced attendance, employee scheduling, incident reporting, and real-time operational oversight across multiple locations.',
  },
  {
    cardId: 'e-c88fd8d',
    mediaId: 'e-58e29db',
    imgWrapId: 'e-d4ae437',
    textWrapId: 'e-5201ae0',
    title: 'Halwar Connect',
    slug: '/portfolio/halwar-connect',
    bgImage: '/assets/portfolio/case-banr-3.png',
    mockupImage: '/assets/portfolio/case-card3.png',
    description:
      'Halwar Connect needed to transform an outdated service marketplace into a modern platform built around trust, accessibility, and local connections. We developed a bilingual digital marketplace with service discovery, real-time messaging, voice calls, live location tracking, and Stripe Connect payments for secure transactions between customers and service providers.',
  },
  {
    cardId: 'e-df19883',
    mediaId: 'e-560ae46',
    imgWrapId: 'e-522ec70',
    textWrapId: 'e-ede3e62',
    title: 'Family Entertainment Group',
    slug: '/portfolio/family-entertainment-group',
    bgImage: '/assets/portfolio/card-banr-4.png',
    mockupImage: '/assets/portfolio/Mockup-3-2.png',
    description:
      'Family Entertainment Group needed a faster way to turn guest experiences into branded video souvenirs. We developed a cloud-connected media platform that captures footage from on-site cameras, processes and combines videos automatically, and delivers the finished content directly to guests with minimal staff involvement.',
  },
  {
    cardId: 'e-dd21c61',
    mediaId: 'e-26d3435',
    imgWrapId: 'e-4c0bf5b',
    textWrapId: 'e-9545307',
    title: 'Zoom Read',
    slug: '/portfolio/zoom-read',
    bgImage: '/assets/portfolio/case-bnr5.png',
    mockupImage: '/assets/portfolio/case-card5.png',
    description:
      'Zoom Read was created to help users read digital content without the distractions of conventional reading applications. We developed a cross-platform reading product with guided line-by-line reading, extensive personalization, content management, subscriptions, in-app purchases, and advertising-based monetization through Stripe and Google AdMob.',
  },
  {
    cardId: 'e-9d1f052',
    mediaId: 'e-478694b',
    imgWrapId: 'e-855acbf',
    textWrapId: 'e-d8ac155',
    title: 'Pulse Check Timer',
    slug: '/portfolio/pulse-check-timer',
    bgImage: '/assets/portfolio/case-bnr6.png',
    mockupImage: '/assets/portfolio/case-card6.png',
    description:
      'Emergency responders need to maintain accurate timing and documentation during high-pressure CPR procedures. We developed Pulse Check Timer as a cross-platform clinical support app that provides synchronized voice and visual prompts, records cardiac rhythm entries, and generates timestamped PDF and DOCX reports for review, training, and documentation.',
  },
  {
    cardId: 'e-e86e275',
    mediaId: 'e-b5bf2c1',
    imgWrapId: 'e-7bf0208',
    textWrapId: 'e-d7d8667',
    title: 'My Tango Event',
    slug: '/portfolio/my-tango-event',
    bgImage: '/assets/portfolio/case-8.png',
    mockupImage: '/assets/portfolio/case-card9.png',
    description:
      'MyTangoEvent needed to replace fragmented event discovery and manual organizer workflows with trusted infrastructure for the global tango community. We developed a three-part digital ecosystem with location-based event discovery, bookings, verified attendee reviews, organizer subscriptions, promotional tools, and centralized platform administration across mobile and web.',
  },
  {
    cardId: 'e-090ca87',
    mediaId: 'e-cc1d7fc',
    imgWrapId: 'e-70bed5c',
    textWrapId: 'e-c3ce413',
    title: 'WordSmith Pro',
    slug: '/portfolio/wordsmith-pro',
    bgImage: '/assets/portfolio/case-card9-2.png',
    mockupImage: '/assets/portfolio/WordSmithcard.png',
    description:
      'WordSmith Pro needed to move beyond one-time grammar correction and help users improve their writing over time. We developed an AI-powered writing platform with real-time grammar, clarity, tone, and structural feedback, OCR document scanning, progress analytics, subscription management, and enterprise administration across a cross-platform mobile app and web dashboard.',
  },
  {
    cardId: 'e-ab52c69',
    mediaId: 'e-708c540',
    imgWrapId: 'e-5060587',
    textWrapId: 'e-d887b67',
    title: 'StakBread',
    slug: '/portfolio/stakbread',
    bgImage: '/assets/portfolio/banner-case.png',
    mockupImage: '/assets/portfolio/StakBread-icon.png',
    description:
      'StakBread needed to remove the friction between discovering creator content and purchasing the products featured within it. We developed a social commerce ecosystem that combines short-form video, product tagging, creator storefronts, marketplace payments, real-time messaging, and AI-assisted professional profiles across a React Native mobile app and web-based operations dashboard.',
  },
  {
    cardId: 'e-1d7af04',
    mediaId: 'e-b248e41',
    imgWrapId: 'e-f8fedfc',
    textWrapId: 'e-2a5c3fd',
    title: 'Pets B4 Profit',
    slug: '/portfolio/pets-b4-profit',
    bgImage: '/assets/portfolio/pets-bnr.png',
    mockupImage: '/assets/portfolio/Pets-B4-Profit.png',
    extraImgClass: 'case-stadie-last',
    description:
      'Pets B4 Profit needed to give pet owners clearer, independent insight into complex veterinary costs without replacing professional medical advice. We developed an AI-powered pet healthcare platform with OCR invoice scanning, treatment cost explanations, market price benchmarking, centralized medical records, a moderated veterinary directory, and administrative oversight of AI-generated recommendations.',
  },
]

const PORTFOLIO_CSS = `
#portfolio-page {
  background-color: #151515;
  color: #ffffff;
  width: 100%;
  overflow-x: hidden;
}

/* Section 2 Outer & Inner Grid (post-10291.css) */
#portfolio-page #e-096dca3 {
  display: flex;
  justify-content: center;
  padding: 80px 0;
  overflow: visible;
  width: 100%;
}

#portfolio-page #e-096dca3-inner {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

@media (max-width: 1600px) {
  #portfolio-page #e-096dca3-inner {
    max-width: 1280px;
  }
}

#portfolio-page #e-b9d70cd {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;
  padding: 0;
  overflow: visible;
  row-gap: 20px;
}

/* Shared Card Styling */
#portfolio-page .pf-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #1E1E1E;
  border-radius: 25px;
  padding: 0 0 40px 0;
  overflow: visible;
  width: 100%;
  position: relative;
}

@media (min-width: 768px) {
  #portfolio-page #e-b9d70cd {
    width: 90%;
  }
  #portfolio-page .pf-card {
    width: 40%;
  }
}

/* Staggered Card Top Margins (Desktop & Tablet >= 768px) */
#portfolio-page #e-e35b5c2 { margin-top: 0%; }
#portfolio-page #e-b3bcd1b { margin-top: 50%; }
#portfolio-page #e-c88fd8d { margin-top: -25%; }
#portfolio-page #e-df19883 { margin-top: 25%; }
#portfolio-page #e-dd21c61 { margin-top: -25%; }
#portfolio-page #e-9d1f052 { margin-top: 25%; }
#portfolio-page #e-e86e275 { margin-top: -25%; }
#portfolio-page #e-090ca87 { margin-top: 25%; }
#portfolio-page #e-ab52c69 { margin-top: -25%; }
#portfolio-page #e-1d7af04 { margin-top: 25%; }

/* Shared Media Box */
#portfolio-page .pf-media {
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  background-color: #1E1E1E;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  position: relative;
  overflow: visible;
  width: 100%;
  text-decoration: none !important;
}

#portfolio-page .pf-img-wrap {
  width: 100%;
  line-height: 0;
}

#portfolio-page .pf-img-wrap img {
  display: inline-block;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  user-select: none;
}

/* Per-Card Media & Transform Rules (Desktop > 1600px default) */
/* Card 1: State of the Art Chiropractic */
#portfolio-page #e-c5a17a1 {
  min-height: 700px;
  overflow: visible;
}
#portfolio-page #e-36e15ac {
  transform: translate(-183px, 342px);
  margin: 0% 0% -9% 0%;
  text-align: start;
}

/* Card 2: DPS Airem */
#portfolio-page #e-6dee2e3 {
  overflow: visible;
}
#portfolio-page #e-deebc68 {
  margin: 30% 0% 0% 0%;
  text-align: end;
}

/* Card 3: Halwar Connect */
#portfolio-page #e-58e29db {
  overflow: visible;
}
#portfolio-page #e-d4ae437 {
  transform: translateX(20px);
  margin: 30% 0% 0% 0%;
  text-align: end;
}

/* Card 4: Family Entertainment Group */
#portfolio-page #e-560ae46 {
  overflow: visible;
}
#portfolio-page #e-522ec70 {
  transform: translate(28px, 54px);
  margin: 30% 0% 0% 0%;
  text-align: end;
}

/* Card 5: Zoom Read */
#portfolio-page #e-26d3435 {
  overflow: visible;
}
#portfolio-page #e-4c0bf5b {
  transform: translate(166px, 25px);
  margin: 30% 0% 0% 0%;
  text-align: end;
}

/* Card 6: Pulse Check Timer */
#portfolio-page #e-478694b {
  min-height: 0px;
  overflow: visible;
}
#portfolio-page #e-855acbf {
  transform: translate(28px, 75px);
  margin: 0%;
  text-align: end;
}
#portfolio-page #e-d8ac155 {
  padding-top: 52px;
}

/* Card 7: My Tango Event */
#portfolio-page #e-b5bf2c1 {
  overflow: visible;
}
#portfolio-page #e-7bf0208 {
  transform: translate(68px, 32px);
  margin: 30% 0% 0% 0%;
  text-align: end;
}

/* Card 8: WordSmith Pro */
#portfolio-page #e-cc1d7fc {
  min-height: 698px;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}
#portfolio-page #e-70bed5c {
  margin: 0%;
  text-align: center;
}
#portfolio-page #e-70bed5c img {
  width: 88%;
}

/* Card 9: StakBread */
#portfolio-page #e-708c540 {
  min-height: 691px;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}
#portfolio-page #e-5060587 {
  margin: 0%;
  text-align: center;
}
#portfolio-page #e-5060587 img {
  width: 83%;
}

/* Card 10: Pets B4 Profit — overflow visible so phone pops out cleanly on right & bottom */
#portfolio-page #e-b248e41 {
  min-height: 620px;
  overflow: visible !important;
}
#portfolio-page #e-f8fedfc {
  transform: translate(58px, 130px);
  margin: 0%;
  text-align: end;
}
#portfolio-page #e-f8fedfc img {
  width: 88%;
}
#portfolio-page #e-2a5c3fd {
  padding-top: 44px;
}

/* Shared Text Body */
#portfolio-page .pf-text-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow: visible;
  text-align: start;
}

#portfolio-page .pf-title {
  font-size: 30px !important;
  font-weight: 600 !important;
  line-height: 40px !important;
  color: #00CE44 !important;
  margin: 0 !important;
  text-align: start;
}

#portfolio-page .pf-title a {
  color: #00CE44 !important;
  text-decoration: none !important;
}

#portfolio-page .pf-title a:hover {
  color: #2ef06d !important;
}

#portfolio-page .pf-desc {
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 26px !important;
  color: #FFFFFF !important;
  margin: 0 !important;
  text-align: start;
}

#portfolio-page .pf-cta {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  font-size: 18px !important;
  font-weight: 500 !important;
  color: #00CE44 !important;
  text-decoration: none !important;
  align-self: flex-start;
  padding: 0;
  background: transparent;
  transition: opacity 0.2s ease;
}

#portfolio-page .pf-cta:hover {
  opacity: 0.85;
}

#portfolio-page .pf-cta svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
  flex-shrink: 0;
}

/* Laptop / <= 1600px Breakpoint (post-10291.css) */
@media (max-width: 1600px) {
  #portfolio-page #e-c5a17a1 {
    min-height: 454px;
  }
  #portfolio-page #e-36e15ac {
    transform: translate(-110px, 200px);
  }
  #portfolio-page #e-deebc68 img {
    width: 70%;
  }
  #portfolio-page #e-d4ae437 img {
    width: 70%;
  }
  #portfolio-page #e-522ec70 img {
    width: 59%;
  }
  #portfolio-page #e-4c0bf5b {
    transform: translate(105px, 25px);
  }
  #portfolio-page #e-4c0bf5b img {
    width: 70%;
  }
  #portfolio-page #e-855acbf {
    transform: translate(28px, 59px);
  }
  #portfolio-page #e-855acbf img {
    width: 70%;
  }
  #portfolio-page #e-7bf0208 {
    transform: translate(100px, 20px);
  }
  #portfolio-page #e-cc1d7fc {
    min-height: 490px;
  }
  #portfolio-page #e-70bed5c img {
    width: 90%;
  }
  #portfolio-page #e-708c540 {
    min-height: 490px;
  }
  #portfolio-page #e-5060587 img {
    width: 90%;
  }
  #portfolio-page #e-b248e41 {
    min-height: 460px;
    overflow: visible !important;
  }
  #portfolio-page #e-f8fedfc {
    transform: translate(54px, 95px);
  }
  #portfolio-page #e-f8fedfc img {
    width: 90%;
  }
  #portfolio-page .pf-title {
    font-size: 25px !important;
    line-height: 28px !important;
  }
  #portfolio-page .pf-desc {
    font-size: 14px !important;
    line-height: 20px !important;
  }
}

@media (min-width: 1300px) and (max-width: 1344px) {
  #portfolio-page .case-stadie-last {
    transform: translate(54px, 95px) !important;
  }
}

/* <= 1200px Breakpoint */
@media (max-width: 1200px) {
  #portfolio-page #e-4c0bf5b img {
    width: 90%;
  }
  #portfolio-page #e-b5bf2c1 {
    min-height: 350px;
  }
  #portfolio-page #e-cc1d7fc {
    min-height: 0px;
  }
  #portfolio-page #e-708c540 {
    min-height: 350px;
  }
  #portfolio-page #e-b248e41 {
    min-height: 350px;
  }
  #portfolio-page #e-f8fedfc {
    transform: translate(32px, 72px);
  }
  #portfolio-page #e-f8fedfc img {
    width: 80%;
  }
}

/* <= 1024px Breakpoint */
@media (max-width: 1024px) {
  #portfolio-page #e-c5a17a1 {
    min-height: 350px;
  }
  #portfolio-page #e-36e15ac {
    transform: translate(-110px, 173px);
  }
  #portfolio-page #e-522ec70 {
    transform: translate(28px, 30px);
  }
}

/* <= 880px Breakpoint */
@media (max-width: 880px) {
  #portfolio-page #e-c5a17a1 {
    min-height: 290px;
  }
  #portfolio-page #e-36e15ac {
    transform: translate(-80px, 124px);
  }
  #portfolio-page #e-522ec70 {
    transform: translate(28px, 42px);
  }
  #portfolio-page #e-4c0bf5b {
    transform: translate(56px, 25px);
  }
  #portfolio-page #e-ab52c69 {
    margin-top: -40%;
  }
  #portfolio-page #e-f8fedfc {
    transform: translate(22px, 138px);
  }
}

/* Mobile <= 767px Breakpoint */
@media (max-width: 767px) {
  #portfolio-page #e-096dca3 {
    padding: 60px 24px;
  }
  #portfolio-page #e-b9d70cd {
    width: 100%;
    row-gap: 36px;
  }
  #portfolio-page .pf-card {
    width: 100%;
    margin-top: 0% !important;
  }
  #portfolio-page #e-deebc68 img {
    width: 50%;
  }
  #portfolio-page #e-d4ae437 {
    transform: translateX(10px);
  }
  #portfolio-page #e-d4ae437 img {
    width: 50%;
  }
  #portfolio-page #e-df19883 {
    padding-bottom: 20px;
  }
  #portfolio-page #e-522ec70 {
    transform: translate(20px, 20px);
  }
  #portfolio-page #e-522ec70 img {
    width: 50%;
  }
  #portfolio-page #e-4c0bf5b {
    transform: translate(7px, 1px);
  }
  #portfolio-page #e-4c0bf5b img {
    width: 50%;
  }
  #portfolio-page #e-855acbf {
    transform: translate(0px, 35px);
  }
  #portfolio-page #e-855acbf img {
    width: 50%;
  }
  #portfolio-page #e-7bf0208 {
    transform: translate(0px, 107px);
  }
  #portfolio-page #e-7bf0208 img {
    width: 50%;
  }
  #portfolio-page #e-cc1d7fc {
    min-height: 350px;
  }
  #portfolio-page #e-70bed5c img {
    width: 80%;
  }
  #portfolio-page #e-5060587 img {
    width: 80%;
  }
  #portfolio-page #e-f8fedfc {
    transform: translate(0px, 157px);
  }
  #portfolio-page #e-f8fedfc img {
    width: 70%;
  }
}
`

export default function Portfolio() {
  useEffect(() => {
    const title = 'Our Portfolio | Inceptives Digital'
    const desc =
      'We design and build software that helps companies run smoother, move faster, and grow with confidence. Explore our mobile app and software portfolio.'
    document.title = title
    window.scrollTo(0, 0)

    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', desc)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', desc)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', desc)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio')
  }, [])

  return (
    <div id="portfolio-page">
      <style>{PORTFOLIO_CSS}</style>

      {/* Section 1: Hero Banner */}
      <section
        className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[625px] flex items-center justify-center pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-[#151515]"
        style={{
          backgroundImage: 'url("/assets/portfolio/case-banner.png")',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <h1 className="text-[28px] sm:text-[40px] lg:text-[50px] font-bold leading-[1.18] tracking-tight text-white max-w-[760px] mb-5">
            <span className="text-[#00CE44]">Software Built</span> for Today and Ready for Tomorrow
          </h1>

          <p className="text-white/90 text-[14.5px] sm:text-[16px] lg:text-[18px] leading-[1.6] font-normal max-w-[820px] mb-8">
            We design and build software that helps companies run smoother, move faster, and grow with confidence. Every project in our portfolio shows how we solve real problems with clean code, smart architecture, and a focus on long-term value. Take a look at what our mobile app development company has built and how we approach each challenge.
          </p>

          {/* 5px Solid #00CE44 Green Divider */}
          <div className="w-[65%] sm:w-[50%] max-w-[460px] h-[5px] bg-[#00CE44]" />
        </div>
      </section>

      {/* Section 2: Exact Elementor 2-Column Staggered Portfolio Cards (post-10291.css) */}
      <div id="e-096dca3">
        <div id="e-096dca3-inner">
          <div id="e-b9d70cd">
            {PORTFOLIO_CARDS.map((item) => (
              <article key={item.cardId} id={item.cardId} className="pf-card">
                {/* Top Media Container */}
                <Link
                  to={item.slug}
                  id={item.mediaId}
                  className="pf-media"
                  style={{ backgroundImage: `url("${item.bgImage}")` }}
                >
                  <div
                    id={item.imgWrapId}
                    className={`pf-img-wrap${item.extraImgClass ? ` ${item.extraImgClass}` : ''}`}
                  >
                    <img
                      src={item.mockupImage}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                </Link>

                {/* Bottom Text Container */}
                <div id={item.textWrapId} className="pf-text-wrap">
                  <h2 className="pf-title">
                    <Link to={item.slug}>{item.title}</Link>
                  </h2>

                  <p className="pf-desc">{item.description}</p>

                  <Link to={item.slug} className="pf-cta">
                    <span>Learn More</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
