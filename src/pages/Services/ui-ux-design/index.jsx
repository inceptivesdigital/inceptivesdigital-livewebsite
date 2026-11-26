import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import CaseStudies from '../../../components/CaseStudies'
import ClientGridSection from '../../../components/ClientGridSection'
import Testimonials from '../../../components/Testimonials'
import IndustriesSection from '../../../components/IndustriesSection'
import FAQSection from '../../../components/FAQSection'
import TechStackTabs from '../mobile-app-development/components/TechStackTabs'

const STATS = [
  {
    value: '70+',
    label: 'Products Designed',
    icon: '/assets/ui-ux-design/apps-launch.svg',
  },
  {
    value: '8+',
    label: 'Years Experience',
    icon: '/assets/ui-ux-design/active-developer.svg',
  },
  {
    value: '100%',
    label: 'Client Success Rate',
    icon: '/assets/ui-ux-design/app-downloads.svg',
  },
  {
    value: 'WCAG',
    label: 'Accessibility Compliant',
    icon: '/assets/ui-ux-design/rating.svg',
  },
]

const DESIGN_SERVICES = [
  {
    title: 'UX Research',
    desc: 'Interviews, usability tests, and behavioral analysis that surface what users actually do inside a product rather than what they say they would do in a survey.',
  },
  {
    title: 'Product Strategy',
    desc: 'The commercial and user goals aligned into a single product direction before wireframes began. The decisions made here determine whether the design solves the right problem.',
  },
  {
    title: 'Information Architecture & User Flow Design',
    desc: 'The structural foundation of every product. Navigation, content hierarchy, and user journeys are planned before interface design begins, so users always know where to go, what to do next, and how to complete tasks without confusion.',
  },
  {
    title: 'Wireframing',
    desc: 'Low-fidelity layouts that validate structure, hierarchy, and interaction logic before visual design begins. The fastest and least expensive place to catch a bad decision.',
  },
  {
    title: 'UI Design',
    desc: 'High-fidelity interfaces designed for web applications, mobile apps, SaaS platforms, and enterprise software. Every visual element is built around platform conventions, accessibility standards, and brand consistency to create experiences that feel intuitive on every screen.',
  },
  {
    title: 'Dashboard & Data Visualization Design',
    desc: 'Complex data made scannable. Dashboards designed around the decisions the user needs to make, not around the data the system can surface.',
  },
  {
    title: 'Design Systems',
    desc: 'A single source of truth for every component, pattern, and visual decision across the product. The infrastructure that prevents a product from diverging visually every time a new screen is added.',
  },
  {
    title: 'UX Audit and Optimization',
    desc: 'A structured evaluation of an existing product against usability, accessibility, and conversion standards. Every friction point is identified, prioritized, and mapped to a specific fix.',
  },
  {
    title: 'Accessibility Design',
    desc: 'WCAG-compliant interfaces are designed so every user can navigate, understand, and complete actions regardless of ability or assistive technology. Built in from the start, not retrofitted before launch.',
  },
]

const DESIGN_PROBLEMS = [
  {
    title: 'Low User Adoption',
    desc: 'Users who do not understand what a product does for them in the first two minutes do not come back to find out. Adoption is an onboarding design problem before it is a marketing one.',
  },
  {
    title: 'Complex Workflows',
    desc: 'Operational products often inherit their internal process complexity in their interface. Complexity in the workflow does not have to mean complexity in the experience.',
  },
  {
    title: 'Poor Onboarding Experiences',
    desc: 'The gap between signing up and reaching a first meaningful outcome is where most products lose the majority of users they will ever lose.',
  },
  {
    title: 'High Drop-Off Rates',
    desc: 'Drop-off at a specific point in a user flow almost always traces back to a single design decision that created friction the user chose not to overcome.',
  },
  {
    title: 'Inconsistent Product Experience',
    desc: 'Products that grow without a design system accumulate visual and interaction inconsistency that erodes user trust over time without anyone noticing until it is expensive to fix.',
  },
  {
    title: 'Legacy Product Redesign',
    desc: 'Incremental improvements eventually stop closing the gap between what a product does and what users now expect. Some products need a redesign, not another iteration.',
  },
]

const PROCESS_STAGES = [
  {
    stage: 'STAGE 01',
    title: 'Discovery and Product Alignment',
    desc: 'Business objectives, user expectations, and technical constraints are mapped before any design work begins. The output is a shared understanding of what the product needs to do and what success looks like before the first wireframe is drawn.',
  },
  {
    stage: 'STAGE 02',
    title: 'UX Research and Information Architecture',
    desc: 'User interviews, behavioral analysis, and structural mapping are used to determine how the product should be organised before it is designed. The decisions made here determine whether users find what they need or abandon the product, looking for it.',
  },
  {
    stage: 'STAGE 03',
    title: 'User Flows and Wireframes',
    desc: 'Every path a user takes through the product is mapped and validated in low fidelity before visual design begins. Structural and interaction problems caught here cost a fraction of what they cost to fix after high-fidelity screens are complete.',
  },
  {
    stage: 'STAGE 04',
    title: 'Visual Interface Design',
    desc: 'High-fidelity screens designed against the validated flows, research findings, and technical constraints established in the previous stages. Every visual decision is made with the user, the developer, and the device in mind simultaneously.',
  },
  {
    stage: 'STAGE 05',
    title: 'Design System Development',
    desc: 'A component library and visual language built to keep the product consistent as it grows. The difference between a product that stays coherent across fifty screens and one that diverges visually every time a new feature is added.',
  },
  {
    stage: 'STAGE 06',
    title: 'Developer Handoff and Design QA',
    desc: 'Annotated files, component specifications, and interaction documentation are delivered to the development team. Design QA is completed alongside development to confirm the built product matches the designed one before it reaches users.',
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
    q: 'What are UI UX design services?',
    a: 'The end-to-end process of designing how a digital product looks, behaves, and feels for the people using it. UX design covers the structure, flows, and logic that make a product usable. UI design covers the visual layer that makes it clear, consistent, and trustworthy. Together, they determine whether a product earns the attention of its users or loses it.',
  },
  {
    q: 'What is the difference between UI and UX design?',
    a: 'UX design is concerned with how a product works. It covers research, information architecture, user flows, and interaction logic. UI design is concerned with how a product looks. It covers visual hierarchy, typography, colour, and component design. In practice, the two disciplines are inseparable because a product that works logically but looks untrustworthy fails for the same reason as one that looks polished but cannot be navigated.',
  },
  {
    q: 'How much do UI UX design services cost?',
    a: 'A focused UX audit or single-feature design engagement starts from $8,000. A full product design engagement covering research, information architecture, high-fidelity screens, and a design system typically ranges from $25,000 to $80,000, depending on product complexity, number of user types, and platform targets. The precise scope and cost are defined in the Discovery Sprint before design work begins.',
  },
  {
    q: 'How long does a UI UX design project take?',
    a: 'A focused audit or single-screen design engagement takes two to four weeks. A full product design engagement from discovery through developer handoff typically takes eight to sixteen weeks, depending on the number of screens, user types, and iteration cycles required. The timeline is confirmed in Discovery before design begins.',
  },
  {
    q: 'What deliverables do I receive from a UI UX design engagement?',
    a: 'Depending on the scope: user research findings, information architecture documentation, user flow maps, low-fidelity wireframes, high-fidelity screen designs, a design system with a component library, an interactive prototype, and annotated developer handoff files. Every engagement ends with documentation that the development team can build from without requiring ongoing design interpretation.',
  },
  {
    q: 'Do I need UX research before design begins?',
    a: 'For a new product or a significant redesign, yes. Research is what prevents the design from being built around assumptions about users that the users themselves do not share. For a focused UI improvement or single-feature addition to an existing product with established user data, research may already exist in usable form. The Discovery Sprint determines which situation applies.',
  },
  {
    q: 'What is a design system, and do I need one?',
    a: 'A design system is a shared library of components, patterns, and visual rules that keeps a product consistent as it grows. Without one, every new screen introduces small visual and interaction variations that accumulate into an experience that feels inconsistent and unpolished over time. Any product expecting to add features, onboard new designers, or scale its interface across multiple platforms needs a design system before it needs more screens.',
  },
  {
    q: 'How do you hand off designs to a development team?',
    a: 'Annotated Figma files with component specifications, spacing documentation, interaction notes, and asset exports delivered through Figma Dev Mode or Zeplin. Design QA is completed alongside development to confirm the built product matches the designed one before it reaches users. The handoff is not the end of the design engagement. It is the beginning of the validation stage.',
  },
]

export default function UiUxDesign() {
  useEffect(() => {
    const title = 'UI/UX Design Services for Web & Mobile Products'
    const desc =
      'Inceptives Digital builds clickable, high-fidelity prototypes for investor demos, usability testing, and development validation. Test the product before a line of code is written.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/ui-ux-design')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-clip">
      {/* 1. HERO SECTION (100vh, banner image cover positioned right-bottom) */}
      <section className="relative w-full min-h-screen flex items-center bg-[#0D0D0D] pt-28 sm:pt-32 pb-12 lg:pb-16 overflow-hidden">
        {/* Subtle ambient green glow behind right-bottom artwork */}
        <div
          className="hidden lg:block absolute right-0 bottom-0 w-[50%] h-[85%] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 75% 68%, rgba(0, 206, 68, 0.14) 0%, rgba(13, 13, 13, 0) 65%)',
          }}
        />

        {/* Desktop Right-Bottom Contain Banner Image */}
        <div
          className="hidden lg:block absolute right-0 bottom-0 lg:w-[44%] xl:w-[43%] max-w-[640px] lg:h-[82%] xl:h-[88%] max-h-[840px] bg-contain bg-right-bottom bg-no-repeat pointer-events-none select-none z-[1]"
          style={{ backgroundImage: 'url("/assets/ui-ux-design/ui-banner.png")' }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:pr-6 text-left space-y-5 max-w-[580px]">
              <span className="inline-block text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px]">
                UI UX Design Services
              </span>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-white leading-[1.13] tracking-tight">
                Design Products People Understand, Trust, and{' '}
                <span className="text-[#00CE44]">Keep Using</span>
              </h1>

              <p className="text-white/85 text-[15px] sm:text-[16.5px] leading-[1.68] max-w-[600px]">
                Product design for startups and growth-stage businesses. From discovery and information architecture through high-fidelity interfaces and design systems, built for the development teams who will turn what we design into what users actually experience.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
                >
                  <span>Start a Design Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
              </div>
              <p className="text-white/60 text-[13px] font-medium tracking-wide">
                Show us the product. We will tell you what it needs to work.
              </p>

              {/* Trust / Review Badges Below CTA */}
              <div className="flex flex-wrap items-center gap-7 sm:gap-9 pt-4">
                <img
                  src="/assets/ui-ux-design/clutch.png"
                  alt="Clutch Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
                <img
                  src="/assets/ui-ux-design/bark.png"
                  alt="Bark Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
                <img
                  src="/assets/ui-ux-design/trustpilot.png"
                  alt="Trustpilot Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Mobile Banner Image (Contain, Right-Bottom) */}
            <div className="lg:hidden w-full flex justify-end pt-4 -mb-12">
              <div
                className="w-full max-w-[380px] aspect-[642/905] bg-contain bg-right-bottom bg-no-repeat select-none"
                style={{ backgroundImage: 'url("/assets/ui-ux-design/ui-banner.png")' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED CLIENT LOGOS GRID (Homepage Component) */}
      <ClientGridSection heading="Trusted UI/UX Design Company for Modern Digital Products" />

      {/* 3. STATS COUNTER BAR */}
      <section className="w-full bg-[#1D1D1D] py-10 sm:py-12 border-b border-white/5">
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

      {/* 3. UI/UX DESIGN SERVICES BUILT AROUND BETTER PRODUCT DECISIONS */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              UI/UX Design Services Built Around{' '}
              <span className="text-[#00CE44]">Better Product Decisions</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-relaxed">
              Every service below exists because a product decision made without it costs more to fix after launch than it did to get right before development began.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {DESIGN_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#252525] rounded-[16px] p-6 sm:p-7 border border-white/[0.06] hover:border-[#00CE44]/40 transition-colors flex flex-col gap-3"
              >
                <h3 className="text-[19px] sm:text-[21px] font-bold text-[#00CE44] leading-snug">
                  {svc.title}
                </h3>
                <p className="text-white/80 text-[14.5px] leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES (Homepage Component) */}
      <CaseStudies
        heading="Custom UI/UX Design for Modern Digital Products"
        subtitle="Every product below started as a design problem before it became a development project. These are the decisions that made the difference."
        ctaText="See all our work"
      />

      {/* 5. TESTIMONIALS (Homepage Component) */}
      <Testimonials />

      {/* 6. INDUSTRIES (Homepage Component) */}
      <IndustriesSection
        heading="OUR WORK ACROSS INDUSTRIES"
        showDesc={false}
      />

      {/* 7. UI/UX DESIGN PROBLEMS WE HELP BUSINESSES SOLVE */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              UI/UX Design Problems We Help{' '}
              <span className="text-[#00CE44]">Businesses Solve</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-relaxed">
              Most products do not fail because the technology is wrong. They fail because the experience between the user and the technology was never properly designed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {DESIGN_PROBLEMS.map((prob) => (
              <div
                key={prob.title}
                className="bg-[#252525] rounded-[16px] p-6 sm:p-7 border border-white/[0.06] hover:border-[#00CE44]/40 transition-colors flex flex-col gap-3"
              >
                <h3 className="text-[19px] sm:text-[21px] font-bold text-[#00CE44] leading-snug">
                  {prob.title}
                </h3>
                <p className="text-white/80 text-[14.5px] leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mid-Page Callout Box */}
          <div className="bg-[#00CE44] rounded-[20px] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="text-left space-y-1.5">
              <h2 className="cta-heading text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-black leading-[1.18]">
                Recognise one of these in your product?
              </h2>
              <p className="text-black/85 text-[15.5px] sm:text-[17px] font-medium">
                We have probably solved it before.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#151515] text-[#00CE44] font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-black transition-colors shrink-0"
            >
              <span>Start a Design Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. PROCESS: HOW WE TURN COMPLEX IDEAS INTO INTUITIVE PRODUCTS (6 STAGES) */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-4xl mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              How We Turn Complex Ideas Into{' '}
              <span className="text-[#00CE44]">Intuitive Products</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
              Every stage produces a decision, not just a deliverable. The design that reaches development is the design that has already survived the questions development would have asked.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {PROCESS_STAGES.map((st) => (
              <div
                key={st.stage}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center"
              >
                {/* Left: Green Dot + Vertical Line + Stage Label & Title */}
                <div className="md:col-span-4 lg:col-span-4 flex items-stretch gap-4">
                  <div className="flex flex-col items-center pt-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span className="w-[2px] flex-1 min-h-[38px] bg-[#00CE44]/75 mt-0.5" />
                  </div>
                  <div className="flex flex-col justify-center pb-1">
                    <span className="text-[#00CE44] text-[11px] font-semibold uppercase tracking-[0.12em] leading-none mb-1.5">
                      {st.stage}
                    </span>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-white leading-snug">
                      {st.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Stage Description */}
                <div className="md:col-span-8 lg:col-span-8 pl-6 md:pl-0">
                  <p className="text-white/75 text-[15px] sm:text-[16px] leading-[1.7] max-w-3xl">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TECH STACK (Homepage Component) */}
      <TechStackTabs
        heading="The Design Stack Behind Every Great Experience"
        description="Every tool is selected because it closes the gap between a design decision and a development reality rather than widening it."
      />

      {/* 10. EMERGING TECHNOLOGIES INFLUENCING MODERN PRODUCT DESIGN (Sticky Left + Stacking Right) */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Sticky Left Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 text-left space-y-4">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
                Emerging Technologies Influencing{' '}
                <span className="text-[#00CE44]">Modern Product Design</span>
              </h2>
              <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-[1.68]">
                These are not trends to follow. There are shifts in how users interact with products that every design decision made today needs to be aware of.
              </p>
            </div>

            {/* Stacking Right Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6 pb-8">
              {EMERGING_TECH.map((item, idx) => (
                <div
                  key={item.title}
                  className="sticky bg-[#1F1F1F] rounded-[16px] p-6 sm:p-8 border border-white/[0.08] hover:border-[#00CE44]/40 transition-colors shadow-[0_-12px_32px_rgba(0,0,0,0.65)] flex flex-col gap-3 text-left"
                  style={{
                    top: `${108 + idx * 24}px`,
                    zIndex: idx + 1,
                  }}
                >
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#00CE44] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/85 text-[15px] leading-[1.68]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/ui-ux-design/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Stop Explaining the Product.{' '}
            <span className="text-[#00CE44]">Let the Design Do It</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            A strong UI/UX system removes back-and-forth between teams and replaces it with something everyone can see, understand, and build from.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Get Your Design Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 12. FAQS (Homepage Component with UI/UX Design 8 FAQs) */}
      <FAQSection
        faqs={FAQS}
        heading="Questions About UI UX Design Worth Asking Before You Start"
      />
    </div>
  )
}
