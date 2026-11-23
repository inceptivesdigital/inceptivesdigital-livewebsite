import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Plus,
  Minus,
  TrendingDown,
  Bug,
  ShieldAlert,
  Headphones,
  Gauge,
  Wrench,
  BarChart3,
} from 'lucide-react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import IndustriesSection from '../../../components/IndustriesSection'
import FAQSection from '../../../components/FAQSection'
import TechStackTabs from '../mobile-app-development/components/TechStackTabs'

const STATS = [
  {
    value: '150+',
    label: 'Senior-Led Product Rescue',
    icon: '/assets/product-rescue-scaling/apps-launch.svg',
  },
  {
    value: '8+',
    label: 'Years of Experience',
    icon: '/assets/product-rescue-scaling/active-developer.svg',
  },
  {
    value: '10M+',
    label: 'Downloads',
    icon: '/assets/product-rescue-scaling/app-downloads.svg',
  },
  {
    value: '4.7',
    label: 'Clutch Rating',
    icon: '/assets/product-rescue-scaling/rating.svg',
  },
]

const RESCUE_SIGNS = [
  {
    text: 'Retention drops within the first week and never recovers.',
    Icon: TrendingDown,
  },
  {
    text: 'Every new feature seems to break something that used to work.',
    Icon: Bug,
  },
  {
    text: 'The development team hesitates before touching core parts of the codebase.',
    Icon: ShieldAlert,
  },
  {
    text: 'Support tickets are rising faster than the user base.',
    Icon: Headphones,
  },
  {
    text: 'Load times have crept up, and nobody can point to why.',
    Icon: Gauge,
  },
  {
    text: 'The roadmap has turned into a list of fixes instead of a plan.',
    Icon: Wrench,
  },
  {
    text: 'Investors or stakeholders are asking questions that the team cannot answer with data.',
    Icon: BarChart3,
  },
]

const WHO_BENEFITS = [
  {
    title: 'Startup Founders',
    desc: "Your product launched, but users aren't staying, and the team can't tell you why. Every sprint fixes something that was working last month. A rescue starts with an honest audit of what's actually broken, not a guess about what the next feature should be.",
  },
  {
    title: 'Product Teams',
    desc: 'When every sprint fills up with fixes before a single new feature ships, the roadmap has already lost. The codebase is setting the agenda, not the product plan. A structured audit surfaces the technical issues that are consuming your capacity before they consume the next quarter, too.',
  },
  {
    title: 'CTOs and Engineering Leaders',
    desc: 'The codebase works. It just costs more to change with every release. Decisions made in the first build have calcified into constraints nobody remembers agreeing to. A codebase audit maps the actual state of the architecture and produces a roadmap that the engineering team can execute against, not around.',
  },
  {
    title: 'Growth-Stage Companies',
    desc: 'The architecture that carried you to your first thousand users starts to crack at ten thousand. The symptoms are predictable: slower releases, rising infrastructure costs, more incidents. A rescue engagement catches those structural issues before they become the story your next funding round has to explain.',
  },
  {
    title: 'Private Equity and Investment Firms',
    desc: 'Technology due diligence rarely surfaces the issues that actually determine integration costs and post-acquisition velocity. An independent product audit produces a written assessment of codebase quality, technical debt, scalability constraints, and the engineering investment required, in language the deal team can act on.',
  },
  {
    title: 'Enterprises Modernizing Legacy Systems',
    desc: 'The system still works. That is the problem. Nobody wants to touch it; every change takes weeks of regression testing, and the engineers who understood it originally have moved on. Legacy application modernization maps what can be updated in phases and what needs replacing, without requiring a full shutdown to find out.',
  },
]

const RESCUE_SERVICES = [
  {
    title: 'Technical Debt Management',
    desc: 'Shortcuts taken during the first build often become the ceiling on growth. This phase addresses the architecture issues, security gaps, and performance bottlenecks that block scale, without a full rewrite unless one is genuinely required.',
  },
  {
    title: 'UX and Retention Overhaul',
    desc: 'If users are dropping off, the flow is usually the reason. This phase rebuilds onboarding, simplifies navigation, and removes the friction points that are costing the product active users.',
  },
  {
    title: 'Growth Roadmap',
    desc: 'A rescued product still needs direction. The team translates audit findings into a prioritized roadmap that ties every fix to a measurable outcome, so the next phase of work has a clear purpose.',
  },
  {
    title: 'Ongoing Scaling Partnership',
    desc: 'Once the product is stable, the work shifts toward growth. This includes feature expansion, infrastructure scaling, and continuous monitoring so the same structural issues do not resurface as usage increases.',
  },
]

const WHY_FOUNDERS = [
  {
    title: 'Root Cause First',
    desc: 'The team never patches symptoms. Every fix traces back to a diagnosed cause, so the same problem does not reappear three months after relaunch.',
  },
  {
    title: 'Proven Turnaround Experience',
    desc: 'Across nine industries, the team has rescued products at every stage of decline, from early stalls to products that had nearly lost their user base entirely.',
  },
  {
    title: 'Led by Senior Talent',
    desc: 'Every audit, every rebuild decision, and every roadmap call is made by senior engineers and strategists, not handed off to whoever is available.',
  },
  {
    title: 'Growth Metrics That Matter',
    desc: 'Success is defined before the rebuild starts. Retention, activation, and performance benchmarks are agreed upon early, so progress is measured against outcomes the founder actually cares about.',
  },
]

const RESCUE_VS_REBUILD = [
  {
    factor: 'Timeline',
    rescue: 'Weeks to a few months, depending on scope',
    over: 'Six to twelve months for a comparable product',
  },
  {
    factor: 'Existing Users',
    rescue: 'Retained throughout, with minimal disruption',
    over: 'Lost or forced to migrate to a new product',
  },
  {
    factor: 'Cost',
    rescue: 'Scoped to the parts that are actually broken',
    over: 'Full build cost, regardless of what already works',
  },
  {
    factor: 'Data and History',
    rescue: 'Preserved, including analytics and user behavior',
    over: 'Often lost or expensive to migrate',
  },
  {
    factor: 'Risk',
    rescue: 'Lower, since the working parts of the product stay untouched',
    over: 'Higher, since the market has to be re-validated from zero',
  },
  {
    factor: 'Best Fit For',
    rescue: 'Products with real traction but structural problems',
    over: 'Products with a fundamentally flawed core concept',
  },
]

const BEFORE_AFTER = [
  {
    before: 'Sprints that never seem to finish',
    after: 'Predictable delivery cycles',
  },
  {
    before: 'Technical debt is growing with every release',
    after: 'Debt paid down in a structured order',
  },
  {
    before: 'Features shipped with no clear impact',
    after: 'Releases tied to measurable outcomes',
  },
  {
    before: 'Support tickets are piling up faster than fixes',
    after: 'Retention, recovery, and stabilising',
  },
  {
    before: 'No clear roadmap, just a list of patches',
    after: 'A prioritized roadmap the team can act on',
  },
]

const PROCESS_STAGES = [
  {
    stage: 'STAGE 01',
    title: 'Product Audit',
    desc: 'Every rescue starts with a full diagnostic across code quality, user experience, analytics, and support history, so nothing gets fixed on a guess.',
  },
  {
    stage: 'STAGE 02',
    title: 'Root Cause Diagnosis',
    desc: 'Audit findings get traced back to their actual source. A slow app is rarely just slow. It usually points to a deeper architecture or query problem worth solving properly.',
  },
  {
    stage: 'STAGE 03',
    title: 'Rebuild Roadmap',
    desc: 'Findings are translated into a prioritized plan that sequences fixes by impact, so the highest-risk issues get resolved before anything else.',
  },
  {
    stage: 'STAGE 04',
    title: 'Structured Rebuild and Optimization',
    desc: 'The team rebuilds the weak points identified in the audit, from backend architecture to frontend flow, while keeping the product live and usable throughout.',
  },
  {
    stage: 'STAGE 05',
    title: 'Relaunch and Continuous Growth',
    desc: 'The rebuilt product relaunches with a monitoring plan in place. User behavior, performance, and retention are tracked closely, and the roadmap keeps evolving as the product grows.',
  },
]

const FAQS = [
  {
    q: 'What counts as a product rescue engagement?',
    a: 'A product rescue engagement applies when a digital product has already launched but has stalled on growth, lost users, or become too unstable to maintain safely. The work starts with an audit rather than a rebuild request taken at face value.',
  },
  {
    q: 'How do you know if a product needs a rescue or just new features?',
    a: 'If retention is dropping, the codebase is fragile, or every new feature seems to break something else, the product likely needs structural work first. A short audit usually makes the distinction clear within days.',
  },
  {
    q: 'Are product rescue services the same as software rescue services?',
    a: 'Yes, the terms describe the same work. Product rescue, software rescue, and application rescue all refer to auditing a struggling digital product, diagnosing the root cause, and rebuilding the parts that block growth.',
  },
  {
    q: 'How long does a rescue engagement take?',
    a: 'Timelines depend on how deep the issues run. A focused audit typically takes one to two weeks, while a full rebuild can run two to six months depending on scope.',
  },
  {
    q: 'Will the product stay live during the rebuild?',
    a: 'In most cases, yes. Fixes are sequenced so the product remains usable throughout, with major structural changes rolled out in stages rather than all at once.',
  },
  {
    q: 'Does a rescue always mean rewriting the entire codebase?',
    a: 'No. A full rewrite is only recommended when the existing codebase cannot support the fixes needed. Most engagements repair and restructure the parts that are actually broken.',
  },
  {
    q: 'What is the difference between rescue and scaling within this engagement?',
    a: 'Rescue addresses what is broken or unstable. Scaling addresses what is working and needs to grow further, including infrastructure, feature expansion, and performance under higher load.',
  },
  {
    q: 'How much does a product rescue cost?',
    a: 'A product audit typically runs between $2,000 and $5,000, depending on codebase size and complexity. A full rescue engagement ranges from $15,000 for focused structural fixes to $80,000 or above for a comprehensive rebuild with scaling work included. Every engagement is quoted after the audit. The audit cost is credited against the rebuild if the work proceeds.',
  },
  {
    q: 'Can a product be rescued if it has lost most of its users?',
    a: 'Yes. A shrinking user base makes the audit more urgent, not less useful. The roadmap in these cases usually prioritizes retention fixes before any growth work begins.',
  },
  {
    q: 'Do you work with the existing development team or replace them?',
    a: 'Both models work. Some founders want the rescue handled entirely by the Inceptives Digital team, while others prefer a collaborative approach alongside their existing developers.',
  },
  {
    q: 'What happens after the product is stabilized?',
    a: 'Once the product is stable, the engagement shifts into the Ongoing Scaling Partnership, covering feature growth, infrastructure scaling, and continuous performance monitoring.',
  },
  {
    q: 'How is success measured in a rescue engagement?',
    a: "Success metrics are agreed upon before the audit begins and typically include retention recovery, performance benchmarks, and user growth measured against the product's state before the rescue started.",
  },
]

export default function ProductRescueScaling() {
  const [openBenefit, setOpenBenefit] = useState(null)

  useEffect(() => {
    const title = 'Product Rescue & Scaling Services | Inceptives Digital'
    const desc =
      "Fix What's Holding Your Product Back Before It Gets Worse. Senior-led codebase audits, UX & retention overhauls, and structured scaling roadmaps."
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/product-rescue-scaling')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-clip">
      {/* 1. HERO SECTION (100vh, Text Vertically Centered, Right-Bottom Edge-Touched Image) */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row lg:items-center bg-[#0F0F0F] pt-28 sm:pt-32 lg:pt-24 pb-0 overflow-hidden">
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="w-full lg:w-[52%] xl:w-[48%] text-left space-y-5 py-8 lg:py-16">
            <span className="inline-block text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              Product Rescue &amp; Scaling Services
            </span>

            <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white leading-[1.14] tracking-tight">
              Fix What&apos;s Holding Your Product Back{' '}
              <span className="text-[#00CE44]">Before It Gets Worse</span>
            </h1>

            <p className="text-white/85 text-[15px] sm:text-[16.5px] leading-[1.68]">
              A product that stalls after launch rarely fails because the idea was wrong. It fails because something underneath it, the architecture, the onboarding flow, the retention loop, was never built to hold weight. Inceptives Digital provides product rescue services that find that weak point, fix it properly, and put the product back on a growth path with a plan that holds up past the next quarter.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
              >
                <span>Request a Product Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/30 bg-transparent text-white font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:border-[#00CE44] hover:text-[#00CE44] transition-colors"
              >
                <span>Talk to a Strategist</span>
              </a>
            </div>

            {/* Trust Logos (Below CTAs, Larger Size) */}
            <div className="flex flex-wrap items-center gap-7 sm:gap-9 pt-4">
              <img
                src="/assets/product-rescue-scaling/clutch.png"
                alt="Clutch Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
              <img
                src="/assets/product-rescue-scaling/bark.png"
                alt="Bark Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
              <img
                src="/assets/product-rescue-scaling/trustpilot.png"
                alt="Trustpilot Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
            </div>
          </div>
        </div>

        {/* Right-Bottom Edge-Touched Larger Banner Image */}
        <img
          src="/assets/product-rescue-scaling/products-rescure-banner.webp"
          alt="Product Rescue and Scaling Dashboard"
          loading="eager"
          className="relative z-0 ml-auto mt-4 w-full max-w-[680px] h-auto block object-contain object-right-bottom select-none pointer-events-none lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[50%] xl:w-[52%] lg:max-w-[880px]"
        />
      </section>

      {/* 2. STATS COUNTER BAR */}
      <section className="w-full bg-[#1D1D1D] py-14 sm:py-16 border-y border-white/5">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-full h-full object-contain select-none"
                  />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#00CE44] tracking-tight leading-none mb-1.5">
                  {s.value}
                </div>
                <div className="text-white text-xs sm:text-sm font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY SUCCESSFUL PRODUCTS LOSE MOMENTUM */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
            <div className="lg:col-span-5">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-white leading-[1.2]">
                Why Successful Products Lose Momentum After Their Initial Launch
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-[1.68]">
                More than half of digital products fail to meet their business goals or gain significant market traction after launch. Most of this attrition is immediate and brutal, with the majority occurring within the first 90 days of release. Retention drops quietly, support tickets rise, and the roadmap turns into a list of patches instead of a plan.
              </p>
              <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-[1.68]">
                None of this means the product deserves to be shelved. It means the product needs an honest audit, a clear fix, and a team willing to rebuild the parts that were never solid to begin with. That is the gap that product rescue services close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNS YOUR DIGITAL PRODUCT NEEDS A RESCUE (7 Full-Width Green-Tinted Rows) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Signs Your Digital Product Needs a Rescue
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
              Some of these, on their own, are normal. Several of them together usually mean the product needs a real audit, not another feature sprint.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3.5 text-left">
            {RESCUE_SIGNS.map(({ text, Icon }) => (
              <div
                key={text}
                className="bg-[#112417] border-l-2 border-[#00CE44] px-5 sm:px-6 py-4 flex items-center gap-4 sm:gap-5"
              >
                <Icon className="w-7 h-7 text-[#00CE44] shrink-0" strokeWidth={2} />
                <p className="text-white/95 text-[15px] sm:text-[16px] font-medium leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO BENEFITS MOST (Green Accordion Bars over Team Photo) */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/product-rescue-scaling/dropdown-pro-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              Who Benefits Most From Product Rescue Services
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px]">
              Software rescue work looks different depending on who owns the problem. The audit stays the same. What changes are what the findings need to unlock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto items-start text-left">
            {WHO_BENEFITS.map((item, idx) => {
              const isOpen = openBenefit === idx
              return (
                <div
                  key={item.title}
                  className="bg-[#00CE44] rounded-[10px] overflow-hidden transition-all"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpenBenefit(isOpen ? null : idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setOpenBenefit(isOpen ? null : idx)
                      }
                    }}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 cursor-pointer select-none"
                  >
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-black leading-snug">
                      {item.title}
                    </h3>
                    <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-black/90 text-[14.5px] sm:text-[15px] leading-relaxed border-t border-black/15">
                      {item.desc}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. COMPREHENSIVE PRODUCT AUDIT CALLOUT */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="bg-[#1A1A1A] rounded-[20px] p-8 sm:p-12 border border-white/[0.08] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-[26px] sm:text-[34px] font-bold text-white leading-[1.2]">
                Every Product Rescue Starts With a{' '}
                <span className="text-[#00CE44]">Comprehensive Product Audit</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="text-white/85 text-[15.5px] sm:text-[17px] leading-[1.68]">
                Every engagement starts with a full review of the product as it stands today. The team examines the codebase, user flow, analytics, and support history to distinguish what is genuinely broken from what only appears broken.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-6 py-3 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
              >
                <span>Request Your Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SERVICES THAT RESTORE STABILITY (Sticky Left + Stacking Scroll Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-28">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-4">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
                <span className="text-[#00CE44]">Services That Restore Stability</span>{' '}
                and Prepare Products for Growth
              </h2>
              <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.68] max-w-md">
                Structured rescue tracks address architecture, retention, and long-term scaling in the right sequence.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 pb-8">
              {RESCUE_SERVICES.map((svc, idx) => (
                <div
                  key={svc.title}
                  style={{
                    top: `${112 + idx * 24}px`,
                    zIndex: idx + 1,
                  }}
                  className="lg:sticky bg-[#222222] rounded-[16px] p-7 sm:p-8 border border-white/[0.08] shadow-[0_14px_36px_rgba(0,0,0,0.45)] flex flex-col gap-3"
                >
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#00CE44] leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-white/90 text-[15px] leading-[1.68]">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY FOUNDERS CHOOSE INCEPTIVES DIGITAL (4 Cards) */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Why Founders Choose <span className="text-[#00CE44]">Inceptives Digital</span> for Product Rescue Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {WHY_FOUNDERS.map((item) => (
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

      {/* 9. RESCUE AND REBUILD VS STARTING OVER TABLE */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              <span className="text-[#00CE44]">Rescue and Rebuild</span> vs. Starting Over
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px]">
              The instinct to scrap a struggling product and start fresh is common, but it is rarely the faster or cheaper path. Here is how the two approaches actually compare.
            </p>
          </div>

          <div className="rounded-[16px] overflow-x-auto border border-white/10 bg-[#18191d] text-left">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="bg-[#00CE44] text-black font-bold text-sm sm:text-base uppercase tracking-wide">
                  <th className="px-6 py-4 text-left w-[22%]">Factor</th>
                  <th className="px-6 py-4 text-left w-[39%]">Rescue and Rebuild</th>
                  <th className="px-6 py-4 text-left w-[39%]">Starting Over</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {RESCUE_VS_REBUILD.map((row) => (
                  <tr key={row.factor} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-semibold text-white text-[15px] align-top">
                      {row.factor}
                    </td>
                    <td className="px-6 py-4 text-white/90 text-[14.5px] leading-relaxed align-top">
                      {row.rescue}
                    </td>
                    <td className="px-6 py-4 text-white/75 text-[14.5px] leading-relaxed align-top">
                      {row.over}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. BEFORE VS AFTER THE RESCUE TABLE */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              How Product Rescue Changes{' '}
              <span className="text-[#00CE44]">Performance, Stability, and Long-Term Growth</span>
            </h2>
          </div>

          <div className="rounded-[16px] overflow-x-auto border border-white/10 bg-[#18191d] text-left">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="bg-[#00CE44] text-black font-bold text-sm sm:text-base uppercase tracking-wide">
                  <th className="px-6 py-4 text-left w-1/2">Before the Rescue</th>
                  <th className="px-6 py-4 text-left w-1/2">After the Rescue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {BEFORE_AFTER.map((row) => (
                  <tr key={row.before} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-white/75 text-[15px] leading-relaxed">
                      {row.before}
                    </td>
                    <td className="px-6 py-4 text-white font-medium text-[15px] leading-relaxed">
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11. CASE STUDIES (Homepage Component) */}
      <CaseStudies />

      {/* 12. TESTIMONIALS (Homepage Component) */}
      <Testimonials />

      {/* 13. INDUSTRIES (Homepage Grid Design, Icon + White Title / Black Hover, No Extra Description) */}
      <IndustriesSection
        heading="OUR WORK ACROSS INDUSTRIES"
        showDesc={false}
      />

      {/* 14. TECHNOLOGY STACK */}
      <TechStackTabs />

      {/* 15. OUR PROVEN PROCESS (5-Stage Green-Dot Timeline) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-5xl mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.16]">
              Our Proven Process for Rescuing and Scaling Digital Products
            </h2>
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

      {/* 16. BOTTOM CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/product-rescue-scaling/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Turn Your Stalled Product Into a{' '}
            <span className="text-[#00CE44]">Scalable Growth Platform</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            The next step is simple. Share what has stalled, get an honest audit, and find out exactly what it will take to fix it.
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

      {/* 17. FAQS (Homepage Component with 12 Product Rescue FAQs) */}
      <FAQSection faqs={FAQS} heading="FAQs About Product Rescue and Scaling" />
    </div>
  )
}
