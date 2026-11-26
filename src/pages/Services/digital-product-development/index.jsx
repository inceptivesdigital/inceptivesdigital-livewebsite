import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import IndustriesSection from '../../../components/IndustriesSection'
import FAQSection from '../../../components/FAQSection'
import TechStackTabs from '../mobile-app-development/components/TechStackTabs'

const STATS = [
  {
    value: '150+',
    label: 'Apps Launched',
    icon: '/assets/digital-product-development/apps-launch.svg',
  },
  {
    value: '60+',
    label: 'Active Developers',
    icon: '/assets/digital-product-development/active-developer.svg',
  },
  {
    value: '10M+',
    label: 'App Downloads',
    icon: '/assets/digital-product-development/app-downloads.svg',
  },
  {
    value: '4.7',
    label: 'Rating on Clutch',
    icon: '/assets/digital-product-development/rating.svg',
  },
]

const ENGAGEMENT_SERVICES = [
  {
    title: 'Discovery Sprint',
    icon: '/assets/digital-product-development/discovery-print.png',
    desc: 'A structured 2-week engagement that produces a validated product roadmap, technical architecture, UX wireframes, and a phased cost estimate. The work that prevents the rebuild.',
  },
  {
    title: 'MVP Development',
    icon: '/assets/digital-product-development/MVP-Development.png',
    desc: 'From validated idea to working product in 8–14 weeks. Scope is locked, architecture is proven, and the build is designed to survive the user behaviour you will discover after launch.',
  },
  {
    title: 'Product Rescue & Scaling',
    icon: '/assets/digital-product-development/Product-Rescue.png',
    desc: 'We step in where others left off. Codebase audit, architecture assessment, and a structured path forward — without starting over unless starting over is genuinely the right answer.',
  },
  {
    title: 'Product Strategy & Consulting',
    icon: '/assets/digital-product-development/Product-Strategy-Consulting.png',
    desc: 'Market positioning, feature prioritisation, go-to-market sequencing, and roadmap architecture. For products that need a clear strategic direction before engineering resources are committed.',
  },
  {
    title: 'Custom Software Development',
    icon: '/assets/digital-product-development/Custom-Software-Development.png',
    desc: 'Complex products that do not fit a template. Custom architecture, purpose-built integrations, and engineering standards that hold up when the product scales beyond its first release.',
  },
]

const CRAFT_SERVICES = [
  {
    title: 'UI/UX Design',
    icon: '/assets/digital-product-development/UI-UX.png',
    desc: 'Interfaces designed against real user behaviour, not design trends. High-fidelity prototypes in Figma, tested before development starts. The design work that removes doubt from the build.',
  },
  {
    title: 'Interactive Prototyping',
    icon: '/assets/digital-product-development/Interactive-Prototyping.png',
    desc: 'Working prototypes in Figma or Framer that show exactly how the product will behave — before the engineering budget is committed. The step that turns a concept into a decision.',
  },
]

const WHY_FOUNDERS = [
  {
    num: '01',
    title: 'Strategy First',
    desc: "Every strong product begins with a stronger brief. Each engagement begins with rigorous strategic work, so the product built is the right one for the market it's entering.",
  },
  {
    num: '02',
    title: 'Proven Market Experience',
    desc: 'Across 20+ industries and multiple product launches, the team has built the kind of pattern recognition that only comes from doing the work at scale, across markets, and under real product pressure.',
  },
  {
    num: '03',
    title: 'Senior-Led Engagements',
    desc: 'From discovery through deployment, every engagement is led by senior talent. Founders get direct access to the strategic, design, and engineering depth their product deserves at every stage.',
  },
  {
    num: '04',
    title: 'Measurable Outcomes',
    desc: 'Success metrics are defined before development begins, not after launch. Every stage is measured against outcomes that matter, keeping the entire team aligned and the product on course.',
  },
]

const PROCESS_STAGES = [
  {
    stage: 'STAGE 01',
    title: 'Product Discovery',
    desc: 'Every product starts with a question worth answering honestly: is this the right thing to build? Structured research, competitive analysis, and direct user insight inform everything that follows.',
  },
  {
    stage: 'STAGE 02',
    title: 'Strategic Roadmap',
    desc: 'A product without a roadmap is a build without direction. Research findings are translated into a clear, prioritized plan that aligns product goals, technical requirements, and business outcomes into one coherent path forward.',
  },
  {
    stage: 'STAGE 03',
    title: 'UI/UX and Prototyping',
    desc: 'Create user journeys, wireframes, and interface designs that make every interaction simple and intuitive. Test layouts, refine navigation, improve accessibility, and prepare development-ready design assets.',
  },
  {
    stage: 'STAGE 04',
    title: 'Product Development',
    desc: 'Build core features through structured development sprints with scalable architecture and clean code. Integrate required services, review implementation quality, and complete functionality according to project requirements.',
  },
  {
    stage: 'STAGE 05',
    title: 'Launch & Continuous Partnership',
    desc: 'Deploy the product with a structured release plan. Track user behavior, collect customer feedback, measure business outcomes, improve existing features, and introduce updates that support long-term growth.',
  },
]

const FAQS = [
  {
    q: 'What is digital product development?',
    a: 'Digital product development is the end-to-end process of turning a product idea into a fully functional, market-ready digital solution, spanning strategy, design, and engineering. It differs from general software development in that user needs, market fit, and business outcomes are baked into every stage, not added on afterwards.',
  },
  {
    q: 'How long does digital product development take?',
    a: 'Timelines vary by complexity and scope. A discovery sprint typically takes two weeks, while a full product build runs between three and nine months.',
  },
  {
    q: 'What is the digital product development lifecycle?',
    a: 'The digital product development lifecycle covers every stage from initial research and strategy through design, engineering, testing, launch, and the ongoing iteration that follows once the product is live. Each phase informs the next, and skipping stages is where most products lose time and money.',
  },
  {
    q: 'What are the core digital product development stages?',
    a: 'The core digital product development stages include product discovery, strategic roadmap, UI/UX design, engineering, quality assurance, product launch, and continuous post-launch improvement based on real usage data.',
  },
  {
    q: 'What is the difference between a digital product and a software application?',
    a: 'A software application solves a technical problem. A digital product is built around a user need, a market opportunity, and a business outcome that extends beyond pure functionality.',
  },
  {
    q: 'How much does digital product development cost?',
    a: 'Digital product development typically starts from USD 15,000–25,000 for an MVP, while more complex products range from USD 50,000 to 250,000+, depending on scope, features, integrations, and technical complexity. Discovery engagements generally start from USD 5,000–10,000, with detailed estimates provided after defining the product scope and roadmap.',
  },
  {
    q: 'What makes a good digital product development company?',
    a: 'A strong digital product design and development company leads with strategy, aligns design and engineering around defined outcomes, and holds every stage of the process accountable to results that matter. Among top digital product development companies, the differentiator is almost always process discipline, not just technical capability.',
  },
  {
    q: 'When should a founder consider working with a digital product development company?',
    a: 'When the product vision is clear but the internal team lacks the strategic, design, or engineering depth to execute it properly without introducing avoidable risk or delay.',
  },
  {
    q: 'Can a launched product be rescued?',
    a: 'Yes. The Product Rescue and Scaling engagement is specifically built for products that launched but lost momentum, stalled on growth, or need structural rebuilding to perform at the next level.',
  },
  {
    q: 'What is the difference between an MVP and a full product build?',
    a: 'An MVP is a lean, validated version of a product built to test core assumptions in the market. A full product build expands on that foundation once the right signals have been confirmed.',
  },
  {
    q: 'Does the studio work with early-stage startups or established companies?',
    a: 'Both. The engagement model is structured around the product stage, not the company size. Early-stage founders and established product teams receive the same standard of strategic and technical rigour.',
  },
  {
    q: 'How is success measured in digital product development?',
    a: 'Success metrics are defined at the start of every engagement. These typically include user adoption rates, performance benchmarks, retention signals, and business outcomes agreed upon before the first development stage begins.',
  },
]

export default function DigitalProductDevelopment() {
  useEffect(() => {
    const title = 'Digital Product Development Services | Inceptives Digital'
    const desc =
      'Products built on thinking. Not just requirements. End-to-end digital product discovery, strategy, UI/UX design, and full-scale engineering under one roof.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/digital-product-development')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION (Full 100vh) */}
      <section className="relative w-full min-h-screen flex items-center bg-[#0F0F0F] pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 text-left space-y-5">
              <span className="inline-block text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px]">
                Digital Product Development
              </span>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white leading-[1.14] tracking-tight">
                Products built on thinking.{' '}
                <span className="text-[#00CE44]">Not just requirements.</span>
              </h1>

              <p className="text-white/85 text-[15px] sm:text-[16.5px] leading-[1.68]">
                From initial discovery and product strategy to UX/UI design and full-scale engineering, we bring every stage of product development together under one roof. Our cross-functional team collaborates from day one to eliminate silos, reduce risk, and accelerate delivery. By aligning business goals with technical execution, we build reliable, scalable digital products that launch with confidence and perform as expected the very first time.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
                >
                  <span>Start My Product Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/30 bg-transparent text-white font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:border-[#00CE44] hover:text-[#00CE44] transition-colors"
                >
                  <span>Schedule A Call</span>
                </a>
              </div>

              {/* Trust / Review Badges (Below CTAs, Larger Size) */}
              <div className="flex flex-wrap items-center gap-7 sm:gap-9 pt-4">
                <img
                  src="/assets/digital-product-development/clutch.png"
                  alt="Clutch Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
                <img
                  src="/assets/digital-product-development/bark.png"
                  alt="Bark Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
                <img
                  src="/assets/digital-product-development/trustpilot.png"
                  alt="Trustpilot Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/assets/digital-product-development/digital-product.webp"
                alt="Digital Product Development Dashboard and Mobile App"
                loading="eager"
                className="w-full max-w-[600px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS COUNTER BAR */}
      <section className="w-full bg-[#1D1D1D] py-14 sm:py-16 border-y border-white/5">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center">
                <div className="w-11 h-11 mb-3 flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-full h-full object-contain select-none"
                  />
                </div>
                <div className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                  {s.value}
                </div>
                <div className="text-white text-[14px] sm:text-[15px] font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY GO FOR DIGITAL PRODUCT DEVELOPMENT */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
                Why Go For <span className="text-[#00CE44]">Digital Product Development</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.68]">
                Most digital products fail not because of poor code, but because of a missing discovery phase. Building for requirements alone creates bloat. Building for outcomes creates value.
              </p>
              <p className="text-white/85 text-[15.5px] sm:text-[17px] leading-[1.68]">
                Inceptives Digital starts with thinking. We interrogate your assumptions, validate your market fit, and engineer systems that are architected for growth from the first line of code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PROVIDED BY INCEPTIVES DIGITAL */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              Services provided by Inceptives Digital for{' '}
              <span className="text-[#00CE44]">Digital Product Development</span>
            </h2>
          </div>

          {/* By Engagement */}
          <div className="space-y-6">
            <div className="text-left border-l-4 border-[#00CE44] pl-4">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#00CE44]">
                By Engagement
              </h3>
              <p className="text-white/80 text-[15px] sm:text-[16px] mt-1">
                What you are trying to accomplish and where you are in the product journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {ENGAGEMENT_SERVICES.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-[#1A1A1A] rounded-[16px] p-6 sm:p-7 border border-white/[0.06] hover:border-[#00CE44]/40 transition-colors flex flex-col gap-4"
                >
                  <div className="w-12 h-12 p-0 bg-transparent border-0 flex items-center justify-center">
                    <img
                      src={svc.icon}
                      alt={svc.title}
                      loading="lazy"
                      className="w-full h-full object-contain block select-none"
                    />
                  </div>
                  <h4 className="text-[19px] sm:text-[21px] font-semibold text-white">
                    {svc.title}
                  </h4>
                  <p className="text-white/80 text-[14.5px] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* By Craft */}
          <div className="space-y-6">
            <div className="text-left border-l-4 border-[#00CE44] pl-4">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#00CE44]">
                By Craft
              </h3>
              <p className="text-white/80 text-[15px] sm:text-[16px] mt-1">
                The discipline that shapes how the product is experienced.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {CRAFT_SERVICES.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-[#1A1A1A] rounded-[16px] p-6 sm:p-7 border border-white/[0.06] hover:border-[#00CE44]/40 transition-colors flex flex-col gap-4"
                >
                  <div className="w-12 h-12 p-0 bg-transparent border-0 flex items-center justify-center">
                    <img
                      src={svc.icon}
                      alt={svc.title}
                      loading="lazy"
                      className="w-full h-full object-contain block select-none"
                    />
                  </div>
                  <h4 className="text-[19px] sm:text-[21px] font-semibold text-white">
                    {svc.title}
                  </h4>
                  <p className="text-white/80 text-[14.5px] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY FOUNDERS CHOOSE OUR STUDIO */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              Why Founders Choose Our Studio for Their{' '}
              <span className="text-[#00CE44]">Digital Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {WHY_FOUNDERS.map((item) => (
              <div
                key={item.title}
                className="bg-[#202020] rounded-[16px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-3"
              >
                <span className="text-[#00CE44] text-sm font-bold tracking-widest">
                  {item.num}
                </span>
                <h3 className="text-[19px] sm:text-[21px] font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[14.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES (Homepage Component) */}
      <CaseStudies />

      {/* 7. CLIENT TESTIMONIALS (Homepage Component) */}
      <Testimonials />

      {/* 8. MID-PAGE CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/digital-product-development/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
            A Better Product Starts With an{' '}
            <span className="text-[#00CE44]">Exceptional Team</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            Bring a product idea and find out what disciplined development looks like.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES (Homepage Design, Icon + Title only — No Extra Description) */}
      <IndustriesSection
        heading="Sectors We Have Built Experience Through Product Engineering"
        subtitle="The same standard of digital product development applies across all sectors, with the process adapted to fit the market."
        showDesc={false}
      />

      {/* 10. TECHNOLOGY STACK */}
      <TechStackTabs />

      {/* 11. THE DIGITAL PRODUCT DEVELOPMENT PROCESS (5 STAGES TIMELINE) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-4xl mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              The Digital Product Development Process Behind Every Build
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
              Understanding digital product development means understanding what separates successful products from those that stall. Here is how each stage works:
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {PROCESS_STAGES.map((st) => (
              <div
                key={st.stage}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                {/* Left: Green Dot + Vertical Line + Stage Label & Title */}
                <div className="md:col-span-4 lg:col-span-3 flex items-stretch gap-4">
                  <div className="flex flex-col items-center pt-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span className="w-[2px] flex-1 min-h-[38px] bg-[#00CE44]/75 mt-0.5" />
                  </div>
                  <div className="flex flex-col justify-start pb-1">
                    <span className="text-[#00CE44] text-[11px] font-semibold uppercase tracking-[0.12em] leading-none mb-1.5">
                      {st.stage}
                    </span>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-white leading-snug">
                      {st.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Stage Description */}
                <div className="md:col-span-8 lg:col-span-9 pl-6 md:pl-0">
                  <p className="text-white/75 text-[15px] sm:text-[16px] leading-[1.7] max-w-3xl">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/digital-product-development/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Develop the Next-Gen Digital Product with{' '}
            <span className="text-[#00CE44]">Confidence and Excellence</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            The next step is straightforward. Share a brief, get a clear assessment, and find out exactly what can be built.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Start With a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 13. FAQS (Homepage Component with DPD 12 FAQs) */}
      <FAQSection faqs={FAQS} heading="Frequently Asked Questions" />
    </div>
  )
}
