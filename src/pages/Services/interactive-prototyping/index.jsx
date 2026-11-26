import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import IndustriesSection from '../../../components/IndustriesSection'
import FAQSection from '../../../components/FAQSection'
import TechStackTabs from '../mobile-app-development/components/TechStackTabs'

const STATS = [
  {
    value: '70+',
    label: 'Products Designed',
    icon: '/assets/interactive-prototyping/apps-launch.svg',
  },
  {
    value: '8+',
    label: 'Years Experience',
    icon: '/assets/interactive-prototyping/active-developer.svg',
  },
  {
    value: '100%',
    label: 'Client Success Rate',
    icon: '/assets/interactive-prototyping/app-downloads.svg',
  },
  {
    value: 'WCAG',
    label: 'Accessibility Compliant',
    icon: '/assets/interactive-prototyping/rating.svg',
  },
]

const SITUATIONS = [
  {
    num: '01',
    pill: 'Validate before you build',
    title: 'You have an idea and need to know if it works before committing to development',
    desc: 'A prototype surfaces broken flows and incorrect assumptions in hours, not after months of development budget has been spent building around them.',
  },
  {
    num: '02',
    pill: 'Test before you ship',
    title: 'You have a product and need to validate a new feature before it touches what already works',
    desc: 'Isolating a new feature in a prototype lets you test it with real users under real conditions without risking the experience your existing users depend on.',
  },
  {
    num: '03',
    pill: 'Present before you launch',
    title: 'You need investors, stakeholders, or clients to evaluate something that does not exist yet',
    desc: 'A high-fidelity prototype that behaves like the real product gives every audience something to interact with and commit to rather than something to imagine from a description.',
  },
]

const PROTOTYPING_SERVICES = [
  {
    title: 'Low-Fidelity Wireframe Prototypes',
    desc: 'Clickable wireframes that validate structure, navigation logic, and user flows before any visual design begins. The fastest and least expensive way to find a broken assumption before it becomes a built screen.',
  },
  {
    title: 'Mid-Fidelity Interactive Prototypes',
    desc: 'More detail than a wireframe, less investment than a high-fidelity build. The right level for testing core interactions, validating information architecture decisions, and aligning a team on how something should work before visual design begins.',
  },
  {
    title: 'High-Fidelity Clickable Prototypes',
    desc: 'Pixel-accurate, fully interactive prototypes that look, feel, and behave like the real product. Built for situations where the audience needs to experience the product rather than imagine it from a description.',
  },
  {
    title: 'Animated and Micro-Interaction Prototypes',
    desc: 'Transitions, hover states, loading behaviors, and interaction responses are prototyped in motion before development begins. The decisions made here determine whether the shipped product feels considered or feels generic.',
  },
  {
    title: 'Investor and Stakeholder Demo Prototypes',
    desc: 'High-fidelity interactive prototypes built specifically for presentations. Every flow is scripted around the decisions the audience needs to make, every interaction is designed to demonstrate product thinking rather than just product appearance.',
  },
  {
    title: 'Usability Testing Prototypes',
    desc: 'Prototypes built to be tested with real users under real conditions. Instrumented for task completion tracking, designed to surface friction rather than hide it, and structured to produce findings the design can act on immediately.',
  },
  {
    title: 'Development Validation Prototypes',
    desc: 'Prototypes that answer the questions that development will ask before development asks them. Interaction states, edge cases, error handling, and responsive behavior are documented and validated before engineering begins.',
  },
  {
    title: 'Concept Validation Prototypes',
    desc: 'Early-stage prototypes built to test whether a product concept resonates with its intended audience before any design or development investment is committed. The prototype that saves the most money is the one that proves the concept is wrong before the build proves it is wrong.',
  },
]

const PROCESS_STAGES = [
  {
    stage: 'STAGE 01',
    title: 'Brief and Scope',
    desc: 'The question the prototype needs to answer is defined before design begins. Who interacts with it, what decisions it informs, and what fidelity level the audience and purpose require.',
  },
  {
    stage: 'STAGE 02',
    title: 'Flow Mapping',
    desc: 'Every user journey that the prototype needs to cover is mapped before the first screen is designed. What is in scope is confirmed. What is out of scope is documented so it does not create confusion during testing.',
  },
  {
    stage: 'STAGE 03',
    title: 'Prototype Build',
    desc: 'Built to the fidelity established in the brief. Tool selected based on what the prototype needs to do. Low-fidelity for structure. Mid-fidelity for interaction. High-fidelity for demos and handoff.',
  },
  {
    stage: 'STAGE 04',
    title: 'Testing and Iteration',
    desc: 'Tested against the question it was built to answer. Real users, stakeholders, or developers, depending on the purpose. Findings documented. Prototype iterated until the question has a clear answer.',
  },
  {
    stage: 'STAGE 05',
    title: 'Handoff or Development Transition',
    desc: 'Every interaction state, edge case, and animation is documented and handed off so development builds what was tested, not what was assumed.',
  },
]

const FAQS = [
  {
    q: 'What is interactive prototyping?',
    a: 'The process of building a clickable, navigable representation of a digital product before development begins. An interactive prototype simulates how a product looks, behaves, and responds to user input without requiring production code to be written. It is the tool that answers product questions at the stage when answers are cheapest to act on.',
  },
  {
    q: 'What is the difference between a wireframe and a prototype?',
    a: 'A wireframe is a static layout that shows structure and hierarchy without interaction. A prototype is a clickable, navigable artefact that simulates real user flows. A wireframe shows what a product looks like. A prototype shows how it behaves. Both have a place in the design process — the question is which one the current decision requires.',
  },
  {
    q: 'What is the difference between a low-fidelity and a high-fidelity prototype?',
    a: 'A low-fidelity prototype uses rough, unpolished layouts to validate structure and flows. It is fast to build and fast to change. A high-fidelity prototype uses pixel-accurate screens and detailed interactions to simulate the real product experience. Low-fidelity is right for early structural decisions. High-fidelity is right when the audience needs to evaluate the product rather than the concept.',
  },
  {
    q: 'How much does a prototype cost?',
    a: 'A focused low-fidelity prototype for early concept validation starts from $3,000. A high-fidelity interactive prototype for investor demos or development handoff typically ranges from $8,000 to $25,000, depending on the number of screens, interaction complexity, and animation requirements. The precise scope and cost are defined in the Brief and Scope stage before build begins.',
  },
  {
    q: 'How long does it take to build a prototype?',
    a: 'A low-fidelity wireframe prototype takes one to two weeks. A high-fidelity clickable prototype with full interaction states and animation typically takes two to four weeks. The timeline depends on the number of user flows, the fidelity level required, and how many iteration cycles are needed to validate the question the prototype was built to answer.',
  },
  {
    q: 'Can a prototype be used for investor presentations?',
    a: 'Yes. A high-fidelity prototype that behaves like the real product is one of the most effective tools in an investor presentation because it gives the audience something to interact with and evaluate rather than something to imagine from a slide. Every flow in an investor demo prototype is scripted around the decisions the audience needs to make, not around a complete product walkthrough.',
  },
  {
    q: 'Do I need a prototype before development begins?',
    a: 'Not always. A prototype is the right investment when there is a specific question about user behavior, interaction logic, or product concept that development cannot answer without building first. If the design is validated, the flows are confirmed, and the development team has a clear specification, a prototype may not be necessary. The Brief and Scope stage determines whether prototyping is the right next step for your specific situation.',
  },
  {
    q: 'How does a prototype transition into a development handoff?',
    a: 'A validated prototype transitions into a development handoff through annotated Figma files, component specifications, interaction documentation, and animation exports. Every interaction state, edge case, and responsive behavior is documented so the development team builds what was tested rather than what was assumed. For prototypes built in Framer, the React component structure can transition directly into the development codebase.',
  },
]

export default function InteractivePrototyping() {
  useEffect(() => {
    const title = 'Interactive Prototyping Services for Digital Products'
    const desc =
      'Build interactive prototypes that simulate real user flows. Validate ideas faster, reduce risk, and improve product decisions before development starts.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/interactive-prototyping')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-clip">
      {/* 1. HERO SECTION (100vh, banner image vertically centered on right) */}
      <section className="relative w-full min-h-screen flex items-center bg-[#141414] pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 text-left space-y-5">
              <span className="inline-block text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px]">
                Interactive Prototyping Services
              </span>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white leading-[1.14] tracking-tight">
                Validate Every Product Decision Before Development Begins
              </h1>

              <p className="text-white/85 text-[15px] sm:text-[16.5px] leading-[1.68]">
                Clickable, high-fidelity prototypes for investor demos, usability testing, stakeholder alignment, and development validation. Built to look, feel, and behave like the real product before development investment is committed.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
                >
                  <span>Start Your Prototype</span>
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
                Test first. Build once.
              </p>

              {/* Trust / Review Badges Below CTA */}
              <div className="flex flex-wrap items-center gap-7 sm:gap-9 pt-4">
                <img
                  src="/assets/interactive-prototyping/clutch.png"
                  alt="Clutch Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
                <img
                  src="/assets/interactive-prototyping/bark.png"
                  alt="Bark Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
                <img
                  src="/assets/interactive-prototyping/trustpilot.png"
                  alt="Trustpilot Reviews"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Right Banner Image — Aligned Center Vertically */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <img
                src="/assets/interactive-prototyping/product-interactive.webp"
                alt="Interactive Prototyping Laptop Wireframe Mockup"
                loading="eager"
                className="w-full max-w-[600px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS COUNTER BAR */}
      <section className="w-full bg-[#1D1D1D] py-10 sm:py-12 border-y border-white/5">
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

      {/* 3. THREE SITUATIONS WHERE A PROTOTYPE IS THE RIGHT NEXT STEP */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-2.5">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-[1.2]">
              Three situations where a prototype is the right next step
            </h2>
            <p className="text-white/75 text-[14.5px] sm:text-[16px] leading-relaxed">
              A prototype is not always the right starting point. These are the three situations where it almost always is.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {SITUATIONS.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 sm:py-10 items-start"
              >
                {/* Left Big Green Number */}
                <div className="md:col-span-2 lg:col-span-2">
                  <span className="text-[40px] sm:text-[48px] font-extrabold text-[#00CE44] leading-none tracking-tight">
                    {item.num}
                  </span>
                </div>

                {/* Right Pill + Green Heading + Description */}
                <div className="md:col-span-10 lg:col-span-10 space-y-3">
                  <span className="inline-block rounded-full border border-[#00CE44]/70 px-4 py-1 text-[12px] sm:text-[13px] font-medium text-[#00CE44]">
                    {item.pill}
                  </span>
                  <h3 className="text-[19px] sm:text-[22px] lg:text-[24px] font-bold text-[#00CE44] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-[14.5px] sm:text-[15.5px] leading-[1.68] max-w-4xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY PRODUCTS FAIL BEFORE THEY'RE EVEN BUILT */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24 border-b border-white/5">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
                Why Products Fail Before{' '}
                <span className="text-[#00CE44]">They&apos;re Even Built</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="text-white/90 text-[16px] sm:text-[17.5px] leading-[1.68]">
                CB Insights found that 42% of startups fail because they build something the market never needed. The Standish Group&apos;s long-running CHAOS research shows that about three in ten software projects succeed outright, with the rest running over budget or missing scope.
              </p>
              <p className="text-white/80 text-[15.5px] sm:text-[17px] leading-[1.68]">
                A joint study by McKinsey and Oxford found that large IT projects run 45% over budget and deliver 56% less actual value than promised. Those numbers trace back to decisions skipped before development, exactly the gap a Discovery Sprint closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PROTOTYPING SERVICES BUILT FOR EVERY STAGE */}
      <section className="w-full bg-[#0F0F0F] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              <span className="text-[#00CE44]">Interactive Prototyping Services</span> Built for Every Stage of the Product Decision
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
              From a rough concept that needs validating to a polished demo that needs to close an investment round. Every prototype is scoped around what it needs to prove, not what it needs to look like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROTOTYPING_SERVICES.map((svc) => (
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

      {/* 6. CASE STUDIES (Homepage Component) */}
      <CaseStudies
        heading="Real Prototype Work From Products Now Live in Production"
        subtitle="Every product below involved a prototype that answered a specific question before the build answered it expensively."
      />

      {/* 7. TESTIMONIALS (Homepage Component) */}
      <Testimonials />

      {/* 8. INDUSTRIES (Homepage Component) */}
      <IndustriesSection
        heading="OUR WORK ACROSS INDUSTRIES"
        showDesc={false}
      />

      {/* 9. PROCESS: HOW WE BUILD PROTOTYPES THAT ANSWER THE RIGHT QUESTIONS (5 STAGES) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-4xl mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              How We Build Prototypes That Answer the{' '}
              <span className="text-[#00CE44]">Right Questions</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
              A prototype built without a clear question to answer is just a mockup with clickable buttons.
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

      {/* 10. TECH STACK (Homepage Component) */}
      <TechStackTabs
        heading="The Tools Behind Every Prototype We Build"
        description="Every tool is selected for a specific reason. The prototype type, the audience, and the fidelity level required determine which one gets used, not habit or preference."
      />

      {/* 11. BOTTOM CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/interactive-prototyping/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-4xl mx-auto">
            The Product Your Investors See Should Feel Like the{' '}
            <span className="text-[#00CE44]">Product Your Users Will Use</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            A prototype built at the right fidelity for the right audience is the difference between a presentation and a proof.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Build Your Prototype</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 12. FAQS (Homepage Component with Interactive Prototyping 8 FAQs) */}
      <FAQSection
        faqs={FAQS}
        heading="Questions About Interactive Prototyping Worth Asking Before You Start"
      />
    </div>
  )
}
