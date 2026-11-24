import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => {
    const title = 'Privacy Policy | Inceptives Digital'
    const desc =
      'Privacy Policy for IT Core Solutions LLC DBA Inceptives Digital covering personal data collection, usage, cookies, billing, security, and SMS consent.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/privacy-policy')
  }, [])

  return (
    <div id="privacy-policy-page" className="w-full bg-[#151515] text-white">
      <style>{`
        #privacy-policy-page .pp-hero-title {
          font-size: 110px !important;
          line-height: 1.08 !important;
          font-weight: 700 !important;
        }
        #privacy-policy-page .pp-section-title {
          font-size: 35px !important;
          line-height: 41px !important;
          font-weight: 700 !important;
          color: #00CE44 !important;
        }
        #privacy-policy-page .pp-body-text {
          font-size: 20px !important;
          line-height: 32px !important;
        }
        #privacy-policy-page .pp-list-text {
          font-size: 18px !important;
          line-height: 30px !important;
        }
        @media (max-width: 1600px) {
          #privacy-policy-page .pp-hero-title {
            font-size: 80px !important;
          }
          #privacy-policy-page .pp-body-text {
            font-size: 16px !important;
            line-height: 28px !important;
          }
          #privacy-policy-page .pp-list-text {
            font-size: 14px !important;
            line-height: 24px !important;
          }
        }
        @media (max-width: 1024px) {
          #privacy-policy-page .pp-hero-title {
            font-size: 56px !important;
          }
          #privacy-policy-page .pp-section-title {
            font-size: 30px !important;
            line-height: 36px !important;
          }
          #privacy-policy-page .pp-body-text {
            font-size: 14px !important;
            line-height: 22px !important;
          }
          #privacy-policy-page .pp-list-text {
            font-size: 15px !important;
            line-height: 24px !important;
          }
        }
        @media (max-width: 640px) {
          #privacy-policy-page .pp-hero-title {
            font-size: 42px !important;
          }
          #privacy-policy-page .pp-section-title {
            font-size: 24px !important;
            line-height: 30px !important;
          }
        }
      `}</style>

      {/* 1. HERO BANNER (Matches Elementor da9633c with image-153.png) */}
      <section
        className="relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[550px] flex items-center justify-center pt-24 pb-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/privacy-policy/image-153.png")' }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <h1 className="pp-hero-title text-white tracking-tight">
            Privacy <span className="text-[#00CE44]">Policy</span>
          </h1>
        </div>
      </section>

      {/* 2. COMPLETE PRIVACY POLICY CONTENT (Matches Elementor 9c82916) */}
      <section className="w-full py-16 lg:py-20 bg-[#151515]">
        <div className="w-full mx-auto px-6 sm:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] text-left">
          {/* Intro Paragraph */}
          <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
            This Privacy Policy is for IT Core Solutions LLC DBA
          </p>

          {/* 1. Personal Data */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Personal Data
            </h2>
            <p className="pp-body-text text-white/90">
              If you, the user, voluntarily choose to register with Inceptives Digital, we may use your personal data to improve our services, as outlined in this Privacy Policy or in any applicable service-specific agreement. We may collect personal data such as:
            </p>
            <ul className="space-y-2 pt-1">
              {[
                'First name and last name',
                'Address',
                'Email address',
                'Telephone number',
                'Birth date',
                'Billing and credit card details',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm sm:text-base">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Use of Personal Data */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Use of Personal Data
            </h2>
            <p className="pp-body-text text-white/90">
              Inceptives Digital will use personal data provided by you only for the reason it was collected, and in line with this Privacy Policy or any specific service agreement. For example, data collected during registration or when you access our Site may be used to:
            </p>
            <ul className="space-y-2 pt-1">
              {[
                'Improve our content, functionality, and services',
                'Enhance your overall user experience',
                'Communicate with you regarding updates, offers, or service-related information',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm sm:text-base">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Personally Non-identifiable Information */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Personally Non-identifiable Information
            </h2>
            <p className="pp-body-text text-white/90">
              We may collect information such as demographics, education level, profession, and gender. While this information alone cannot identify you, it may be stored in databases maintained by Inceptives Digital’s affiliates, agents, or service providers. Such data may be used for research, analytics, or reporting purposes.
            </p>
          </div>

          {/* 4. Passively Collected Information */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Passively Collected Information
            </h2>
            <p className="pp-body-text text-white/90">
              Our systems may automatically collect non-identifiable data, including:
            </p>
            <ul className="space-y-2 pt-1">
              {[
                'IP addresses',
                'Browser type',
                'Device and operating system information',
                'Usage statistics related to your interaction with our Site',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm sm:text-base">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#00CE44] text-sm sm:text-base leading-[1.7] pt-1">
              This information helps us optimize performance and improve user experience.
            </p>
          </div>

          {/* 5. Aggregated Personal Data */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Aggregated Personal Data
            </h2>
            <p className="pp-body-text text-white/90">
              Inceptives Digital may aggregate personal data to better understand user behavior. Aggregated data does not identify individuals and may be shared with affiliates, business partners, or third parties for lawful purposes such as analytics, business insights, or marketing.
            </p>
          </div>

          {/* 6. Cookies */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Cookies
            </h2>
            <p className="pp-body-text text-white/90">
              We may use “cookies” to enhance user experience and analyze Site usage. Cookies help us personalize content and improve performance.
            </p>
          </div>

          {/* 7. Sharing Information */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Sharing Information
            </h2>
            <p className="pp-body-text text-white/90">
              In some cases, we may share personal data with third parties, including:
            </p>
            <ul className="space-y-2 pt-1">
              {[
                'Service Providers & Agents: Companies engaged for tasks like database management, email delivery, or payment processing.',
                'Business Partners: Aggregated, non-personally identifiable data may be shared for marketing or research purposes.',
                'Legal Obligations: Personal data may be disclosed if required by law, or to protect rights, safety, and property.',
                'Business Transfers: In case of a merger, acquisition, or reorganization, personal data may be transferred as part of business assets.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90 text-sm sm:text-base">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 8. Billing & Payment Processing */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Billing &amp; Payment Processing
            </h2>
            <p className="pp-body-text text-white/90">
              Inceptives Digital may utilize affiliated entities, including IT Core Solutions, to facilitate certain financial operations such as invoicing, payment processing, and billing administration. This arrangement is part of our internal operational structure to ensure efficient and secure financial management. All services, deliverables, and client engagements remain under the responsibility and supervision of Inceptives Digital, and such involvement does not affect the quality, ownership, or integrity of the services provided.
            </p>
          </div>

          {/* 9. Minors */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Minors
            </h2>
            <p className="pp-body-text text-white/90">
              Inceptives Digital does not knowingly collect personal data from individuals under 18 years of age. If you are under 18, please do not provide any personal data.
            </p>
          </div>

          {/* 10. Links to Other Websites */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Links to Other Websites
            </h2>
            <p className="pp-body-text text-white/90">
              This Privacy Policy applies only to Inceptives Digital’s Site and not to third-party websites that may be linked from it
            </p>
          </div>

          {/* 11. Security */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Security
            </h2>
            <p className="pp-body-text text-white/90">
              We implement appropriate security measures to protect personal data against unauthorized access, loss, or misuse. However, as the Internet is not entirely secure, users should exercise caution when sharing information online.
            </p>
          </div>

          {/* 12. Updates to Privacy Policy */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Updates to Privacy Policy
            </h2>
            <p className="pp-body-text text-white/90">
              Inceptives Digital may update or revise this Privacy Policy at any time without prior notice. Continued use of our Site after such changes will constitute acceptance of the revised policy.
            </p>
          </div>

          {/* 13. Opt-out Policy */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Opt-out Policy
            </h2>
            <p className="pp-body-text text-white/90">
              If you no longer wish to receive communications from us after registering, or have questions regarding your personal data, you may opt out by contacting us.
            </p>
          </div>

          {/* 14. Update Your Information */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              Update Your Information
            </h2>
            <p className="pp-body-text text-white/90">
              If you wish to update or modify your personal data, please contact us. We will respond within thirty (30) days of receiving your request.
            </p>
          </div>

          {/* 15. How to Contact Us */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              How to Contact Us
            </h2>
            <p className="pp-body-text text-white/90">
              For any questions regarding this Privacy Policy or our handling of your personal data, please contact us through our official contact page:{' '}
              <Link
                to="/contact-us"
                className="text-inherit underline underline-offset-4 hover:opacity-80 transition-colors"
              >
                https://inceptivesdigital.com/contact-us
              </Link>
            </p>
          </div>

          {/* 16. SMS & Messaging Consent */}
          <div className="flex flex-col gap-2.5 pt-5 pb-10 border-b border-[#FFFFFFA3]">
            <h2 className="pp-section-title">
              SMS &amp; Messaging Consent
            </h2>
            <ul className="space-y-3 pt-1">
              {[
                'I consent to receive transactional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message & data rates may apply. Reply HELP for help or STOP to opt out.',
                'I consent to receive marketing and promotional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message & data rates may apply. Reply HELP for help or STOP to opt out.',
                'No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services (e.g., customer service) is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90 text-sm sm:text-base leading-[1.7]">
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
