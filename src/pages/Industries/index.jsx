import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { submitFormToSeo } from '../../utils/submitFormToSeo'
import AwardsSection from '../../components/AwardsSection'
import TurnstileWidget from '../../components/TurnstileWidget'

const INDUSTRIES = [
  {
    title: 'Healthcare App Development',
    image: '/assets/industries-hub/healthcare.jpg',
    to: '/healthcare-app-development',
    desc: 'Our team engineers HIPAA-compliant, FHIR API-integrated telehealth platforms with AI-driven diagnostics. We are competent in building clinical-grade solutions for health-tech founders to perform at scale.',
  },
  {
    title: 'Fintech App Development',
    image: '/assets/industries-hub/fintech.jpg',
    to: '/fintech-app-development',
    desc: 'Proficient in PCI-DSS-compliant payment architecture, blockchain ledgers, and AI-powered fraud detection. Our professionals ship secure Fintech products that handle real transaction volume, including Halwar Connect.',
  },
  {
    title: 'eCommerce App Development',
    image: '/assets/industries-hub/ecommerce.jpg',
    to: '/ecommerce-app-development-company',
    desc: "Our team builds Flutter-powered storefronts with AI-driven recommendations and headless commerce architecture. We've driven 3M+ downloads through conversion-focused, scalable eCommerce experiences.",
  },
  {
    title: 'Education App Solutions',
    image: '/assets/industries-hub/education.jpg',
    to: '/education-app-development-company',
    desc: 'We engineer AI-driven adaptive learning platforms with SCORM-compliant LMS integrations. Our adept team builds EdTech products that improve engagement and learning outcomes across every audience.',
  },
  {
    title: 'Real Estate App Development',
    image: '/assets/industries-hub/real-estate.jpg',
    to: '/real-estate-app-development-company',
    desc: 'Our real estate platforms are built for high-intent buyers and enterprise brokerages. Developing scalable, AI-powered MLS-connected apps processing thousands of listings in real-time, generating qualified leads at scale.',
  },
  {
    title: 'Logistics Software Development',
    image: '/assets/industries-hub/logistics.jpg',
    desc: 'We build real-time GPS-enabled dispatch systems, route optimization engines, and last-mile delivery platforms built to handle enterprise-scale fleet operations. Our logistics software has reduced delivery costs across 50+ delivery zones.',
  },
  {
    title: 'Supply Chain Software Development',
    image: '/assets/industries-hub/supply-chain.jpg',
    desc: 'We engineer end-to-end supply chain platforms with blockchain traceability, ERP integration, and demand forecasting. Procurement leaders use our solutions to eliminate blind spots across multi-vendor networks.',
  },
  {
    title: 'On-Demand App Development',
    image: '/assets/industries-hub/on-demand.jpg',
    desc: 'We built Halwar Connect, an on-demand platform with smart matching, in-app payments, and live GPS tracking. Our architecture handles surge demand from launch, which is built for thousands of daily bookings without downtime.',
  },
  {
    title: 'Food Delivery App Development',
    image: '/assets/industries-hub/food-delivery.jpg',
    to: '/food-delivery-app-development',
    desc: 'Our food delivery systems use AI order routing, real-time driver tracking, and dynamic surge pricing. We’ve shipped apps serving 100k+ monthly orders, with Flutter UX that cuts cart abandonment at every checkout step.',
  },
  {
    title: 'Travel App Development',
    image: '/assets/industries-hub/travel.jpg',
    to: '/travel-app-development-company',
    desc: 'From flight aggregation APIs to AI-driven itinerary personalization and multi-currency booking engines, we build travel platforms that compete with the best in the category. Our apps handle seasonal traffic spikes with cloud-native infrastructure that scales automatically.',
  },
  {
    title: 'Construction Software Development',
    image: '/assets/industries-hub/construction.jpg',
    desc: 'We build compliance-ready project platforms with real-time site reporting, BIM integration, and IoT-connected equipment monitoring. Our software cuts administrative overhead for contractors managing multi-site builds, from RFI tracking to safety audit trails.',
  },
  {
    title: 'Startup Product Development',
    image: '/assets/industries-hub/startup.jpg',
    to: '/startup-app-development-company',
    desc: "We serve as the technical co-founder your startup needs, from a validated MVP to an enterprise-grade product with a clear growth architecture. We've helped founders across 20+ industries to develop web and mobile apps, built on scalable stacks.",
  },
  {
    title: 'Restaurant App Development',
    image: '/assets/industries-hub/restaurant.jpg',
    desc: 'Our restaurant platforms integrate POS systems, real-time kitchen display routing, loyalty programs, and contactless payments into a single enterprise-grade ecosystem. We build for chains and independents alike, with AI-driven upsell logic that increases average order value per customer visit.',
  },
  {
    title: 'Fitness App Development',
    image: '/assets/industries-hub/fitness.jpg',
    to: '/fitness-app-development',
    desc: 'We engineer wearable-connected fitness platforms with AI workout personalization, real-time biometric tracking, and HealthKit / Google Fit API integration. Our fitness apps have hit 100k+ downloads, built with gamification loops and behavioral nudge systems that sustain long-term user engagement.',
  },
  {
    title: 'Social Networking App Development',
    image: '/assets/industries-hub/social-networking.jpg',
    desc: 'From interest-based communities to creator monetization platforms, we build social apps with real-time messaging, AI content moderation, and scalable graph databases. Our social networking solutions are engineered to handle viral growth without performance degradation, from 1,000 to 10 million users.',
  },
  {
    title: 'OTT Platform Development',
    image: '/assets/industries-hub/ott.jpg?v=2',
    desc: 'We build OTT platforms with adaptive bitrate streaming, DRM-protected content delivery, AI-powered recommendation engines, and multi-screen subscription management. Our OTT products deliver sub-3-second load times globally, built for content networks competing directly with major streaming incumbents.',
  },
  {
    title: 'Retail Software Development',
    image: '/assets/industries-hub/retail.jpg',
    desc: "Our retail software connects inventory, POS, e-commerce, and loyalty systems into one AI-driven operational platform. We've built omnichannel retail solutions for brands managing thousands of SKUs across physical and digital channels, with real-time analytics that inform replenishment, not just report it.",
  },
  {
    title: 'Telecommunications Software Development',
    image: '/assets/industries-hub/telecom.jpg',
    desc: 'We develop telecom management platforms with real-time network monitoring, AI-driven churn prediction, and self-service customer portals built for carrier-grade uptime. Our solutions integrate with BSS/OSS stacks, helping telecom operators reduce support costs while improving subscriber retention.',
  },
  {
    title: 'Automotive Software Development',
    image: '/assets/industries-hub/automotive.jpg',
    desc: 'From connected vehicle telematics to EV fleet management and in-car infotainment systems, we build automotive software compliant with ISO 26262 safety standards. Our IoT-integrated platforms give fleet operators and OEMs real-time vehicle intelligence, from diagnostics to predictive maintenance alerts.',
  },
  {
    title: 'Wearable App Development',
    image: '/assets/industries-hub/wearable.jpg',
    desc: 'We engineer wearable apps for Apple Watch, Android Wear, and custom IoT devices, with real-time health data sync, edge processing, and enterprise-grade security. Our wearable solutions are used in clinical, fitness, and industrial contexts, trusted across 20+ global deployments.',
  },
  {
    title: 'Sports App Development',
    image: '/assets/industries-hub/sports.jpg',
    desc: "Our sports platforms deliver live score streaming, AI-powered performance analytics, fantasy league engines, and in-stadium fan experience apps. We've shipped sports apps with real-time data pipelines processing thousands of events per second, built for leagues, teams, and sports media companies.",
  },
  {
    title: 'Fashion App Development',
    image: '/assets/industries-hub/fashion.jpg',
    desc: 'We build AI-powered virtual try-on tools, AR fitting rooms, and personalized style recommendation engines for fashion brands competing in digital commerce. Our fashion apps combine high-performance Flutter UIs with deep e-commerce integrations, converting discovery into revenue at every touchpoint.',
  },
  {
    title: 'Agriculture Software Development',
    image: '/assets/industries-hub/agriculture.jpg',
    desc: 'From IoT-connected crop monitoring to AI-driven yield forecasting and drone data analytics, our AgriTech platforms give farmers and agribusinesses real-time field intelligence. We build compliance-ready solutions trusted by agricultural enterprises managing thousands of acres across multiple growing seasons.',
  },
  {
    title: 'Dating App Development',
    image: '/assets/industries-hub/dating.jpg',
    to: '/dating-app-development-company',
    desc: 'We build AI-powered matching algorithms, video date features, and safety-first verification systems into dating platforms designed for long-term retention. Our dating app architecture scales to millions of active profiles with real-time match delivery, engineered to reduce churn, not just grow installs.',
  },
  {
    title: 'Oil and Gas Software Development',
    image: '/assets/industries-hub/oil-gas.jpg',
    desc: 'Our oil and gas platforms integrate IoT sensor networks, real-time pipeline monitoring, HSE compliance dashboards, and AI-driven predictive maintenance into one enterprise system. We reduce unplanned downtime and audit risk for upstream and downstream operators alike.',
  },
  {
    title: 'Entertainment App Development',
    image: '/assets/industries-hub/entertainment.jpg',
    desc: 'We build entertainment platforms with AI-driven content discovery, real-time multiplayer experiences, and creator monetization tools for streaming live events. Our entertainment apps have scaled to millions of concurrent users, engineered for peak-night traffic.',
  },
]

const AWARDS = [
  {
    title: 'Top Mobile App Development Company',
    rating: '4.9/5.0',
    image: '/assets/awards-images/award-clutch-austin.png',
    bg: 'from-[#10242c] to-[#0c181d]',
  },
  {
    title: 'Top USA App Developers',
    rating: '5.0/5.0',
    image: '/assets/awards-images/award-clutch-gaming.png',
    bg: 'from-[#0d2838] to-[#0b1822]',
  },
  {
    title: 'Top Mobile App Development Company Global',
    rating: '4.7/5.0',
    image: '/assets/awards-images/award-designrush.webp',
    bg: 'from-[#122628] to-[#0c191a]',
  },
  {
    title: 'Top Software Development Company Global',
    rating: '5.0/5.0',
    image: '/assets/awards-images/award-rightfirms.png',
    bg: 'from-[#1a1c22] to-[#111216]',
  },
]

export default function IndustriesHubPage() {
  const navigate = useNavigate()
  const [sending, setSending] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileReset, setTurnstileReset] = useState(0)
  const [turnstileError, setTurnstileError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    project: '',
    transactionalConsent: false,
    marketingConsent: false,
  })

  useEffect(() => {
    const seoTitle = 'Digital Product Development for 20+ Industries | Inceptives'
    const seoDesc =
      'Explore industry-specific mobile and web app development solutions for healthcare, fintech, ecommerce, logistics, real estate, education, and more.'

    document.title = seoTitle

    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', seoDesc)
    setMeta('meta[property="og:title"]', 'property', 'og:title', seoTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', seoDesc)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seoTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seoDesc)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://inceptivesdigital.com/industries')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setTurnstileError('')
    const res = await submitFormToSeo({
      formId: 'lead-form-inceptives-digital-industries',
      formName: 'Lead Form Inceptives Digital',
      subject: `Industries Consultation - ${formData.firstName}`.trim(),
      replyTo: formData.email,
      turnstileToken,
      fields: {
        'First Name': formData.firstName,
        Email: formData.email,
        Phone: formData.phone,
        'Project Details': formData.project,
        'Transactional SMS Consent': formData.transactionalConsent ? 'Yes' : 'No',
        'Marketing SMS Consent': formData.marketingConsent ? 'Yes' : 'No',
      },
    })
    setSending(false)
    if (!res?.ok) {
      setTurnstileError(res?.error || 'Security verification failed. Please try again.')
      setTurnstileToken('')
      setTurnstileReset((n) => n + 1)
      return
    }
    navigate('/thank-you')
  }

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section: Left Copy + Right Book a Free Consultation Form */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 bg-[#07080b] overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 18% 25%, rgba(0, 206, 68, 0.12) 0%, transparent 45%)',
          }}
        />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.14] mb-6">
                Driving Digital Evolution With{' '}
                <span className="text-[#00CE44]">Technical Excellence</span>
              </h1>
              <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.75] font-normal max-w-2xl">
                Partner with professional app developers who know your industry extensively. Inceptives Digital is a leading{' '}
                <Link
                  to="/mobile-app-development"
                  className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  app development company
                </Link>
                , specializing in engineering fully-featured mobile and web solutions across 20+ high-growth industries. We combine hands-on technical precision with deep domain knowledge to deliver solutions that lead in tomorrow.
              </p>
            </div>

            {/* Right Column: Book a Free Consultation Form */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] bg-[#14161a] border border-white/10 p-6 sm:p-8 shadow-2xl">
                <h2 className="text-2xl sm:text-[26px] font-bold text-white mb-6 text-left">
                  Book a Free <span className="text-[#00CE44]">Consultation</span>
                </h2>

                <form
                  id="lead-form-inceptives-digital"
                  name="Lead Form Inceptives Digital"
                  data-form-name="Lead Form Inceptives Digital"
                  aria-label="Lead Form Inceptives Digital"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    name="first_name"
                    autoComplete="given-name"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData((p) => ({ ...p, firstName: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1e2127] border border-white/10 text-white placeholder:text-white/50 text-sm font-normal focus:outline-none focus:border-[#00CE44] transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1e2127] border border-white/10 text-white placeholder:text-white/50 text-sm font-normal focus:outline-none focus:border-[#00CE44] transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    placeholder="+1 (000) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1e2127] border border-white/10 text-white placeholder:text-white/50 text-sm font-normal focus:outline-none focus:border-[#00CE44] transition-colors"
                  />
                  <textarea
                    name="message"
                    rows={3}
                    required
                    placeholder="Write About your project"
                    value={formData.project}
                    onChange={(e) => setFormData((p) => ({ ...p, project: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1e2127] border border-white/10 text-white placeholder:text-white/50 text-sm font-normal focus:outline-none focus:border-[#00CE44] transition-colors resize-none"
                  />

                  <div className="space-y-3 pt-1 text-left">
                    <label className="flex items-start gap-2.5 cursor-pointer text-white/80 text-[11px] sm:text-xs leading-relaxed font-normal">
                      <input
                        type="checkbox"
                        name="transactional_sms_consent"
                        value="Yes"
                        checked={formData.transactionalConsent}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, transactionalConsent: e.target.checked }))
                        }
                        className="mt-0.5 accent-[#00CE44] shrink-0"
                      />
                      <span>
                        I consent to receive transactional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
                      </span>
                    </label>
                    <label className="flex items-start gap-2.5 cursor-pointer text-white/80 text-[11px] sm:text-xs leading-relaxed font-normal">
                      <input
                        type="checkbox"
                        name="marketing_sms_consent"
                        value="Yes"
                        checked={formData.marketingConsent}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, marketingConsent: e.target.checked }))
                        }
                        className="mt-0.5 accent-[#00CE44] shrink-0"
                      />
                      <span>
                        I consent to receive marketing and promotional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
                      </span>
                    </label>
                  </div>

                  <TurnstileWidget
                    theme="dark"
                    resetKey={turnstileReset}
                    onVerify={(token) => {
                      setTurnstileToken(token)
                      setTurnstileError('')
                    }}
                    onExpire={() => setTurnstileToken('')}
                    onError={() => setTurnstileError('Security check failed to load. Please refresh.')}
                  />
                  {turnstileError && (
                    <p className="text-red-400 text-xs text-left" role="alert">{turnstileError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors cursor-pointer border-0 disabled:opacity-60"
                  >
                    {sending ? 'Submitting...' : 'Get a Proposal'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industries We Empower (26 Full-Bleed Photo Cards in 3-Column Grid) */}
      <section className="py-16 sm:py-24 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Split Header matching Reference Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 sm:mb-16">
            <div className="lg:col-span-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.15]">
                Industries We <span className="text-[#00CE44]">Empower</span>
              </h2>
            </div>
            <div className="lg:col-span-7 text-left">
              <p className="text-white/85 text-[15px] sm:text-[17px] leading-relaxed font-normal max-w-2xl lg:ml-auto">
                With a proven expertise in multiple industries, we engineer industry-specific technology that drives operational growth and directly impacts your bottom line.
              </p>
            </div>
          </div>

          {/* 26 Photo Background Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {INDUSTRIES.map((item) => {
              const cardInner = (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 select-none"
                    loading="lazy"
                  />
                  {/* Dark Bottom Gradient for Crisp Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/15 group-hover:from-black/95 group-hover:via-black/75 transition-colors duration-300" />

                  <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end h-full text-left">
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h3 className="text-xl sm:text-[22px] font-bold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      {item.to && (
                        <ArrowUpRight className="w-5 h-5 text-[#00CE44] shrink-0 mt-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </div>
                    <p className="text-white/85 text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </>
              )

              const cardClasses =
                'group relative rounded-[20px] overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-end border border-white/10 hover:border-[#00CE44]/60 transition-all duration-300 bg-[#141519]'

              return item.to ? (
                <Link key={item.title} to={item.to} className={cardClasses}>
                  {cardInner}
                </Link>
              ) : (
                <div key={item.title} className={cardClasses}>
                  {cardInner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Awards & Partnerships We've Earned (Homepage AwardsSection Design) */}
      <AwardsSection
        heading={
          <>
            Awards &amp; Partnerships{' '}
            <span className="text-[#00CE44]">We’ve Earned</span>
          </>
        }
      />

      {/* 4. Full-Width Bottom CTA Section */}
      <section className="relative py-20 sm:py-28 bg-[#14161a] border-y border-white/10 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(0, 206, 68, 0.14) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/85 text-base sm:text-lg font-medium mb-3">
              Ready to see your industry’s solution in action?
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18] mb-8">
              Let’s have a straight talk with our{' '}
              <span className="text-[#00CE44]">engineering lead.</span>
            </h2>
            <a
              href="#contact"
              className="openpop-shedule inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
            >
              Schedule a Free Consultation!
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
