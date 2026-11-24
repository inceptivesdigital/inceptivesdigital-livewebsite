import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsAndConditions() {
  useEffect(() => {
    const title = 'Terms & Conditions | Inceptives Digital'
    const desc =
      'Terms and Conditions for IT Core Solutions LLC DBA Inceptives Digital covering service scope, refund eligibility, delivery policy, liability, and SMS consent.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/terms-and-conditions')
  }, [])

  return (
    <div id="terms-conditions-page" className="w-full bg-[#151515] text-white">
      <style>{`
        #terms-conditions-page .tc-hero-title {
          font-size: 110px !important;
          line-height: 1.08 !important;
          font-weight: 700 !important;
        }
        #terms-conditions-page .tc-section-title {
          font-size: 35px !important;
          line-height: 41px !important;
          font-weight: 700 !important;
          color: #00CE44 !important;
        }
        #terms-conditions-page .tc-body-text {
          font-size: 20px !important;
          line-height: 32px !important;
        }
        #terms-conditions-page .tc-list-text {
          font-size: 18px !important;
          line-height: 30px !important;
        }
        @media (max-width: 1600px) {
          #terms-conditions-page .tc-hero-title {
            font-size: 80px !important;
          }
          #terms-conditions-page .tc-body-text {
            font-size: 16px !important;
            line-height: 28px !important;
          }
          #terms-conditions-page .tc-list-text {
            font-size: 14px !important;
            line-height: 24px !important;
          }
        }
        @media (max-width: 1024px) {
          #terms-conditions-page .tc-hero-title {
            font-size: 56px !important;
          }
          #terms-conditions-page .tc-section-title {
            font-size: 30px !important;
            line-height: 36px !important;
          }
          #terms-conditions-page .tc-body-text {
            font-size: 14px !important;
            line-height: 22px !important;
          }
          #terms-conditions-page .tc-list-text {
            font-size: 15px !important;
            line-height: 24px !important;
          }
        }
        @media (max-width: 640px) {
          #terms-conditions-page .tc-hero-title {
            font-size: 40px !important;
          }
          #terms-conditions-page .tc-section-title {
            font-size: 24px !important;
            line-height: 30px !important;
          }
        }
      `}</style>

      {/* 1. HERO BANNER (Matches Elementor post-15776 with image-153.png) */}
      <section
        className="relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[550px] flex items-center justify-center pt-24 pb-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/privacy-policy/image-153.png")' }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <h1 className="tc-hero-title text-white tracking-tight">
            Terms &amp; <span className="text-[#00CE44]">Conditions</span>
          </h1>
        </div>
      </section>

      {/* 2. COMPLETE TERMS & CONDITIONS CONTENT */}
      <section className="w-full py-16 lg:py-20 bg-[#151515]">
        <div className="w-full mx-auto px-6 sm:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] text-left">
          {/* Intro Paragraph */}
          <p className="tc-body-text text-white mb-4">
            These Terms and Conditions are for IT Core Solutions LLC DBA Inceptives Digital
          </p>

          {/* 1. Coverage & Scope */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="tc-section-title">Coverage &amp; Scope</h2>
            <p className="tc-body-text text-white/90">
              These Terms of Use govern all services and products offered by Inceptives Digital and/or through websites owned and operated by us. They do not apply to companies, individuals, or third-party service providers that are not under the ownership, management, or control of Inceptives Digital, including any external websites to which our Site may link.
            </p>
          </div>

          {/* 2. Filing a Complaint */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="tc-section-title">Filing a Complaint</h2>
            <p className="tc-body-text text-white/90">
              If you are dissatisfied with any of our services, Inceptives Digital encourages you to first contact us directly so we can work towards a mutually acceptable solution. Formal complaints or claims should only be filed if no resolution can be reached.
            </p>
          </div>

          {/* 3. Eligibility for Refund */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="tc-section-title">Eligibility for Refund</h2>
            <p className="tc-body-text text-white/90">
              Inceptives Digital manages every project with professionalism to ensure delivery as per the agreed scope of work and proposal. Refund claims will only be considered after the dispute resolution process has been followed and will be assessed according to the type of service:
            </p>
            <ul className="space-y-2.5 pt-1">
              {[
                'Application Development: A full refund may be issued if, for any reason, a project has not yet been initiated.',
                'If an agreement exists: The refund will follow the terms outlined in that document.',
                'If no agreement exists: Inceptives Digital may, at its discretion, offer a partial refund based on the percentage of the project not completed, as defined in the original project scope.',
                'Dedicated Hiring: A full refund may be issued if there is a delay in starting the project by our resource (developer, designer, writer, SEO expert, etc.).',
                'If the client cancels mid-project: A proportionate refund may be issued for unworked days.',
                'No refunds are offered for days already worked.',
                'Any dissatisfaction with ongoing work must be reported immediately to the assigned Project Manager for resolution; delayed complaints will not be entertained.',
              ].map((item) => (
                <li key={item} className="tc-list-text flex items-start gap-3 text-white/90">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Applicability of the Delivery Policy */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="tc-section-title">Applicability of the Delivery Policy</h2>
            <ul className="space-y-2.5 pt-1">
              {[
                'Timely Payments: A project is considered void if agreed payments are not made on time.',
                'Timely Communication: Clients must provide feedback, instructions, and approvals promptly. Inceptives Digital is not responsible for delays or failures caused by miscommunication or lack of communication.',
                'Completeness of Information: Our obligations regarding delivery and refunds are valid only if the client provides complete project information at the beginning. Delays caused by incomplete requirements are the client’s responsibility.',
                'Delay Compensation: Inceptives Digital may compensate for delays in delivery only if a written agreement exists with a penalty clause.',
              ].map((item) => (
                <li key={item} className="tc-list-text flex items-start gap-3 text-white/90">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Limitation of Liability */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="tc-section-title">Limitation of Liability</h2>
            <p className="tc-body-text text-white/90">
              The liability of Inceptives Digital is limited to the value of the incomplete portion of a project as per the approved proposal. We are not responsible for losses arising from services delivered, undelivered, or delayed. Refunds will only be processed if a client cancels the project in writing and such cancellation is accepted by us.
            </p>
          </div>

          {/* 6. Processing of Refunds */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="tc-section-title">Processing of Refunds</h2>
            <p className="tc-body-text text-white/90">
              All approved refunds will be processed within five (5) business days from the cancellation date. Refunds will be issued via the same payment method used for the original transaction (e.g., credit card or bank transfer).
            </p>
          </div>

          {/* 7. Contact Us */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="tc-section-title">Contact Us</h2>
            <p className="tc-body-text text-white/90">
              For more details or inquiries, please contact us through our official page:{' '}
              <Link
                to="/contact-us"
                className="text-inherit underline underline-offset-4 hover:opacity-80 transition-colors"
              >
                https://inceptivesdigital.com/contact-us
              </Link>
            </p>
          </div>

          {/* 8. SMS & Messaging Consent */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="tc-section-title">SMS &amp; Messaging Consent</h2>
            <ul className="space-y-3 pt-1">
              {[
                'I consent to receive transactional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message & data rates may apply. Reply HELP for help or STOP to opt out.',
                'I consent to receive marketing and promotional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message & data rates may apply. Reply HELP for help or STOP to opt out.',
              ].map((item) => (
                <li key={item} className="tc-list-text flex items-start gap-3 text-white/90">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
