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
    label: 'Products Delivered',
    icon: '/assets/product-strategy-consulting/apps-launch.svg',
  },
  {
    value: '8+',
    label: 'Strategy-First Approach',
    icon: '/assets/product-strategy-consulting/active-developer.svg',
  },
  {
    value: '10M+',
    label: 'Downloads',
    icon: '/assets/product-strategy-consulting/app-downloads.svg',
  },
  {
    value: '4.7',
    label: 'Clutch Rating',
    icon: '/assets/product-strategy-consulting/rating.svg',
  },
]

const WHEN_IT_MATTERS = [
  {
    title: 'Before Building an MVP',
    desc: "A promising idea isn't enough. Upfront validation confirms the opportunity, defines the MVP, prioritises features, and establishes a roadmap so development starts with fewer unknowns, reducing unnecessary cost and shortening the path to market.",
  },
  {
    title: 'When Growth Starts to Slow',
    desc: "Products often reach a point where new features no longer drive meaningful results. A structured review helps identify what's limiting adoption, retention, or expansion, allowing the roadmap to focus on measurable business outcomes instead of additional complexity.",
  },
  {
    title: 'Before Scaling the Product',
    desc: 'Growth places new demands on architecture, engineering, and product planning. Reviewing technical direction and delivery priorities early helps avoid scalability issues and costly redevelopment as the product evolves.',
  },
  {
    title: 'When Entering a New Market',
    desc: 'Expanding into a new region, customer segment, or industry requires more than localization. We evaluate market opportunities, competitive positioning, customer expectations, and feature priorities upfront, prior to committing resources.',
  },
  {
    title: 'When Internal Teams Need Strategic Direction',
    desc: "Product teams don't always need more developers. Sometimes they need product management consulting to validate priorities, challenge assumptions, and support high-impact decisions without adding a full-time executive.",
  },
  {
    title: 'When an Existing Product Needs a New Direction',
    desc: 'Customer expectations, technology, and markets change over time. Revisiting the product direction helps identify new opportunities, refine positioning, modernize the roadmap, and ensure future investment supports long-term growth.',
  },
]

const STRATEGY_SERVICES = [
  {
    title: 'Roadmap Planning',
    desc: 'A product roadmap should reflect customer value, business priorities, and measurable outcomes. Our product roadmap consulting prioritizes features through planning workshops, opportunity assessment, and market validation, creating a roadmap that supports product-market fit and sustainable growth.',
  },
  {
    title: 'Architecture Guidance',
    desc: 'Technical decisions influence scalability, delivery speed, and long-term development costs. We assess cloud architecture, platform selection, API strategy, infrastructure planning, and existing technical debt against the product vision. The goal is architecture that supports growth without locking the product into costly rework later.',
  },
  {
    title: 'Market Positioning',
    desc: 'A product succeeds when customers immediately understand why it exists and how it stands apart from competing solutions. Competitive analysis, customer expectations, and market opportunities are evaluated to strengthen positioning.',
  },
  {
    title: 'Technical & Business Advisory',
    desc: 'Product leaders regularly face decisions that extend beyond software development. Our product advisory services cover build-versus-buy evaluations, technology stack direction, vendor and platform assessments, delivery sequencing, and investment priorities, helping leadership teams make informed calls.',
  },
]

const PROCESS_STAGES = [
  {
    stage: 'STAGE 01',
    title: 'Discovery & Product Context Assessment',
    desc: 'The process begins with a thorough understanding of the product, business goals, target customers, competitive landscape, and technical environment. Existing research, stakeholder priorities, product performance, and market conditions are reviewed to identify opportunities, risks, and the next priorities.',
  },
  {
    stage: 'STAGE 02',
    title: 'Product Roadmap & Priority Planning',
    desc: 'Product initiatives are prioritized according to customer value, business impact, and development effort. The result is a focused roadmap that balances short-term delivery with long-term product growth while reducing unnecessary complexity.',
  },
  {
    stage: 'STAGE 03',
    title: 'Technical Architecture Review',
    desc: 'Existing or proposed architecture is evaluated against anticipated growth, operational requirements, and engineering constraints. We look at API design, cloud infrastructure, data architecture, and scalability planning. Early validation helps minimize redevelopment costs and supports long-term performance.',
  },
  {
    stage: 'STAGE 04',
    title: 'Market Positioning & Competitive Analysis',
    desc: 'Positioning shapes customer perception long before marketing begins. Competitive analysis, market opportunities, customer expectations, and product differentiation are assessed to build a stronger value proposition and a clearer place in the market.',
  },
  {
    stage: 'STAGE 05',
    title: 'Executive Product Advisory',
    desc: "The work doesn't end once the roadmap is complete. As products evolve, leadership teams often face new technical, commercial, and investment decisions. Ongoing advisory provides experienced guidance as priorities shift, opportunities emerge, and markets change.",
  },
]

const EMERGING_TECH = [
  {
    title: 'AI-Assisted Design',
    desc: 'AI accelerates exploration and iteration but does not replace the judgment about which direction to pursue. We use it to move faster without removing human decision-making from the moments that matter.',
  },
  {
    title: 'Generative UI',
    desc: 'Interfaces that reconfigure dynamically based on user context require component systems flexible enough to adapt without breaking and design logic clear enough to govern outputs no designer will review individually.',
  },
  {
    title: 'Adaptive Personalisation',
    desc: 'Products that serve different experiences to different users need design systems that accommodate variation without producing visual or interaction inconsistency across every version of themselves.',
  },
  {
    title: 'Voice and Conversational Interfaces',
    desc: 'Designing for voice removes every visual affordance that screen-based design relies on. The design work moves into conversation architecture, error handling, and the mental model users build of what the system can do.',
  },
  {
    title: 'Spatial Computing and AR/VR',
    desc: 'Depth, scale, and physical environment become design variables alongside colour and layout. Products built for spatial contexts require design thinking that starts from the physical world rather than the screen.',
  },
  {
    title: 'Cross-Platform Design Systems',
    desc: 'A product running across mobile, web, and emerging surfaces needs a design system built for variance rather than uniformity, maintaining coherent product identity across interaction models that share nothing except the brand behind them.',
  },
]

const FAQS = [
  {
    q: 'What is product strategy and consulting?',
    a: "Product strategy and consulting is senior advisory support that helps you decide what to build, who it's for, and what to prioritize before development starts. It combines research, roadmap planning, and architecture guidance to reduce risk.",
  },
  {
    q: 'When should a business invest in product strategy consulting?',
    a: 'The best time is before major product decisions get made. Engage a consultant ahead of building an MVP, launching a product, entering a new market, or redesigning your roadmap. Early strategy prevents costly rework and improves product-market fit.',
  },
  {
    q: 'Who benefits from product consulting?',
    a: "Startup founders, SaaS companies, product managers, CTOs, and enterprise teams all benefit. It's most valuable when you're launching or improving a digital product and need experienced guidance to make high-impact product, technology, or business decisions.",
  },
  {
    q: 'What does a product strategy consultant actually do?',
    a: 'A product consultant evaluates your business goals, customers, market opportunities, and technical constraints, then recommends a clear direction. Typical deliverables include a roadmap, feature priorities, architecture recommendations, positioning, and decision-making support for leadership teams.',
  },
  {
    q: 'What is included in a product strategy engagement?',
    a: 'Scope varies by project, but most engagements include product discovery, stakeholder workshops, market and customer research, roadmap planning, feature prioritization, technical architecture guidance, competitive analysis, positioning, risk assessment, and executive advisory sessions tailored to your goals.',
  },
  {
    q: 'How is product strategy different from a Discovery Sprint?',
    a: "A Discovery Sprint validates whether one idea is viable before you build it. Product strategy builds on that, guiding ongoing decisions about roadmap priorities, architecture, positioning, and growth. Discovery Sprints are project-based; advisory support spans your product's full lifecycle.",
  },
  {
    q: 'Does product strategy include UX design or software development?',
    a: 'No. Product strategy defines the right direction upstream of design and development. Once validated, that direction informs later work like UI/UX design, MVP development, custom software development, and ongoing engineering, so nothing gets built on unvalidated assumptions.',
  },
  {
    q: 'How long does a product strategy project take?',
    a: 'Most engagements run 2 to 8 weeks, depending on scope and how many stakeholders are involved. Smaller roadmap or architecture reviews can wrap up in two weeks, while full engagements with research and workshops usually take four to eight.',
  },
  {
    q: 'How much does product strategy consulting cost?',
    a: "Most projects run $5,000 to $25,000, depending on scope and depth of support needed. Focused roadmap or architecture reviews typically start around $2,500. After a free consultation, you'll get a proposal outlining scope, timeline, and pricing.",
  },
  {
    q: 'What deliverables will I receive?',
    a: "You'll get practical outputs, not lengthy reports. Depending on the project, that can include a validated roadmap, feature prioritization framework, architecture recommendations, positioning strategy, competitive analysis, customer insights, and a clear implementation plan you can act on.",
  },
  {
    q: 'Is product strategy consulting only for startups?',
    a: 'No. Startups often use it to validate ideas early, but established businesses rely on it too to modernize legacy platforms, improve customer experience, enter new markets, optimize product portfolios, and support broader digital transformation initiatives.',
  },
  {
    q: 'What happens after the product strategy is complete?',
    a: 'Once your strategy is validated, it becomes the foundation for execution. The roadmap, architecture recommendations, and priorities guide what comes next, including Discovery Sprints, UI/UX design, MVP development, custom software development, and ongoing product management.',
  },
  {
    q: 'How do I know if my product needs a strategy review?',
    a: "If your roadmap keeps shifting, adoption has slowed, feature requests feel impossible to prioritize, or costs keep rising, that's a signal. A strategy review pinpoints what's really holding you back and maps a clear path forward before you invest more.",
  },
]

export default function ProductStrategyConsulting() {
  useEffect(() => {
    const title = 'Product Strategy & Consulting Services | Inceptives Digital'
    const desc =
      'Validate Your Product Direction Before You Build. Senior-level digital product strategy, roadmap planning, architecture guidance, and market positioning.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/product-strategy-consulting')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-clip">
      {/* 1. HERO SECTION (100vh, Text Vertically Centered, Right-Bottom Edge-Touched Image) */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row lg:items-center bg-[#0F0F0F] pt-28 sm:pt-32 lg:pt-24 pb-0 overflow-hidden">
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="w-full lg:w-[52%] xl:w-[48%] text-left space-y-5 py-8 lg:py-16">
            <span className="inline-block text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              Product Strategy &amp; Consulting
            </span>

            <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white leading-[1.14] tracking-tight">
              Validate Your Product Direction{' '}
              <span className="text-[#00CE44]">Before You Build</span>
            </h1>

            <p className="text-white/85 text-[15px] sm:text-[16.5px] leading-[1.68]">
              Product strategy is the work of deciding what to build, why, and in what order, well ahead of the first sprint. Get it wrong, and the cost shows up later, in wasted engineering hours, a roadmap that doesn&apos;t match the market, or an architecture that can&apos;t scale. Inceptives Digital provides digital product strategy and consulting built to catch those decisions early, giving founders senior-level input on roadmap, architecture, and positioning.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
              >
                <span>Book a Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>

            {/* Trust Logos (Below CTA, Larger Size) */}
            <div className="flex flex-wrap items-center gap-7 sm:gap-9 pt-4">
              <img
                src="/assets/product-strategy-consulting/clutch.png"
                alt="Clutch Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
              <img
                src="/assets/product-strategy-consulting/bark.png"
                alt="Bark Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
              <img
                src="/assets/product-strategy-consulting/trustpilot.png"
                alt="Trustpilot Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
            </div>
          </div>
        </div>

        {/* Right-Side Vertically Centered Banner Image */}
        <img
          src="/assets/product-strategy-consulting/product-strategy.webp"
          alt="Product Strategy and Consulting Showcase"
          loading="eager"
          className="relative z-0 mx-auto mt-6 mb-10 w-full max-w-[620px] h-auto block object-contain select-none pointer-events-none lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:my-0 lg:w-[48%] xl:w-[50%] lg:max-w-[820px]"
        />
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

      {/* 3. WHY THE RIGHT STRATEGY OUTPERFORMS THE FASTER BUILD (Black Band) */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
            <div className="lg:col-span-5">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-white leading-[1.2]">
                Why the Right Strategy Outperforms the Faster Build
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-[1.68]">
                CB Insights lists no market need as one of the top reasons startups fail, ahead of running out of cash. The product wasn&apos;t broken. The direction was. Roadmaps, architecture, and positioning built on wrong assumptions are strategic failures that engineering can&apos;t fix later.
              </p>
              <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-[1.68]">
                Founders who avoid this treat roadmap, architecture, and positioning as decisions that warrant senior input, not as details to be worked out later. Slack, Notion, and Shopify each made a deliberate strategic call before the market forced one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHEN PRODUCT STRATEGY & CONSULTING MAKES THE BIGGEST DIFFERENCE (6 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-4">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              When <span className="text-[#00CE44]">Product Strategy &amp; Consulting</span> Makes the Biggest Difference
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
              Product consulting services pay off most when they happen ahead of the decisions that get expensive to undo. The right product direction reduces uncertainty and helps teams invest with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {WHEN_IT_MATTERS.map((card) => (
              <div
                key={card.title}
                className="bg-[#252525] rounded-[12px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-3"
              >
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00CE44] leading-snug">
                  {card.title}
                </h3>
                <p className="text-white/85 text-[14.5px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGY & CONSULTING SERVICES (Centered Heading + 2x2 Outlined Cards Grid) */}
      <section className="w-full bg-[#111111] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              The Strategy and Consulting Services Behind Every Strong Product Decision
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
              The strongest product decisions happen upstream of design and development. This engagement focuses on four areas that shape long-term product success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {STRATEGY_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#121212] rounded-[12px] p-7 sm:p-8 border border-white/15 flex flex-col gap-3"
              >
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#00CE44] leading-snug">
                  {svc.title}
                </h3>
                <p className="text-white/85 text-[14.5px] sm:text-[15px] leading-[1.68]">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES (Homepage Component) */}
      <CaseStudies />

      {/* 7. TESTIMONIALS (Homepage Component) */}
      <Testimonials />

      {/* 8. INDUSTRIES (Homepage Grid Design, Icon + White Title / Black Hover, No Extra Description) */}
      <IndustriesSection
        heading="Our Consulting Expertise Across Industries"
        subtitle="Different industries require different product strategies. Market dynamics, user expectations, business objectives, and operational requirements shape each consulting engagement and strategic recommendation."
        showDesc={false}
      />

      {/* 9. TECHNOLOGY STACK */}
      <TechStackTabs />

      {/* 10. OUR PRODUCT STRATEGY PROCESS (5-Stage Green-Dot Timeline) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-5xl mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.16]">
              Our Product Strategy Process Creates Clear Business Direction
            </h2>
            <p className="text-white/85 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              The process combines customer insight, technical evaluation, and commercial thinking to provide practical direction rather than theoretical advice.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-7">
            {PROCESS_STAGES.map((st) => (
              <div
                key={st.stage}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-center"
              >
                <div className="md:col-span-4 lg:col-span-3 flex items-stretch gap-3.5">
                  <div className="flex flex-col items-center pt-0.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span className="w-[1.5px] flex-1 min-h-[42px] bg-[#00CE44]/80" />
                  </div>
                  <div className="flex flex-col justify-center py-0.5 max-w-[230px]">
                    <span className="text-[#00CE44] text-[10.5px] font-semibold uppercase tracking-[0.12em] leading-none mb-1.5">
                      {st.stage}
                    </span>
                    <h3 className="text-[17px] sm:text-[18.5px] font-bold text-white leading-snug">
                      {st.title}
                    </h3>
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9 pl-5 md:pl-0">
                  <p className="text-white/75 text-[14.5px] sm:text-[15.5px] leading-[1.65] max-w-4xl">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. EMERGING TECHNOLOGIES INFLUENCING MODERN PRODUCT DESIGN (6 Cards) */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Emerging Technologies Influencing{' '}
              <span className="text-[#00CE44]">Modern Product Design</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
              These are not trends to follow. These are shifts in how users interact with products that every design decision made today needs to be aware of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {EMERGING_TECH.map((item) => (
              <div
                key={item.title}
                className="bg-[#252525] rounded-[12px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-3"
              >
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00CE44] leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[14.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/product-strategy-consulting/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Ready to Turn Your Idea Into Your{' '}
            <span className="text-[#00CE44]">Next Competitive Product?</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            Whether you&apos;re validating a new product, refining an existing roadmap, or preparing to scale, we&apos;ll help you make informed decisions before investing further.
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

      {/* 13. FAQS (Homepage Component with 13 FAQs) */}
      <FAQSection faqs={FAQS} heading="Frequently Asked Questions" />
    </div>
  )
}
