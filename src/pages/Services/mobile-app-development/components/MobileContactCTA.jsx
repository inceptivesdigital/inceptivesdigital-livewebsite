import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { submitFormToSeo } from '../../../../utils/submitFormToSeo'

export default function MobileContactCTA() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    transactionalConsent: false,
    marketingConsent: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    await submitFormToSeo({
      formName: 'Mobile App Development Contact Form',
      subject: `Mobile App Development Inquiry - ${formData.firstName} ${formData.lastName}`.trim(),
      replyTo: formData.email,
      fields: {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        Email: formData.email,
        Phone: formData.phone,
        Subject: formData.subject || 'Mobile App Development',
        Message: formData.message,
        'Transactional SMS Consent': formData.transactionalConsent ? 'Yes' : 'No',
        'Marketing SMS Consent': formData.marketingConsent ? 'Yes' : 'No',
      },
    })
    setSending(false)
    setSubmitted(true)
    navigate('/thank-you')
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Circular Locations Wheel Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/assets/mobile-app/footer-locations.png"
              alt="Inceptives Digital Global Offices"
              className="w-full max-w-[540px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>

          {/* Right Column: Contact Us Form (Matching Screenshot 6, Cloudflare skipped for later) */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-1.5">
              Ready to Launch Your App? Let’s Build It Together!
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-medium mb-8">
              Scalable solutions from teams worldwide!
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#181818] text-center">
                <h3 className="text-2xl font-bold text-[#00CE44] mb-2">
                  Thank You!
                </h3>
                <p className="text-white/85 text-sm">
                  We have received your inquiry. Our mobile engineering team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: First Name | Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full pb-3 bg-transparent border-b border-white/40 text-white placeholder-white/75 text-xs sm:text-sm focus:outline-none focus:border-[#00CE44]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Last Name*"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full pb-3 bg-transparent border-b border-white/40 text-white placeholder-white/75 text-xs sm:text-sm focus:outline-none focus:border-[#00CE44]"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pb-3 bg-transparent border-b border-white/40 text-white placeholder-white/75 text-xs sm:text-sm focus:outline-none focus:border-[#00CE44]"
                  />
                </div>

                {/* Row 3: Phone Number | Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number* (+1 000-000-0000)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pb-3 bg-transparent border-b border-white/40 text-white placeholder-white/75 text-xs sm:text-sm focus:outline-none focus:border-[#00CE44]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full pb-3 bg-transparent border-b border-white/40 text-white placeholder-white/75 text-xs sm:text-sm focus:outline-none focus:border-[#00CE44]"
                    />
                  </div>
                </div>

                {/* Row 4: Tell Us About Your Project */}
                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell Us About Your Project*"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pb-3 bg-transparent border-b border-white/40 text-white placeholder-white/75 text-xs sm:text-sm focus:outline-none focus:border-[#00CE44]"
                  />
                </div>

                {/* SMS Consent Checkboxes */}
                <div className="space-y-3 pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-white/85 text-[11px] sm:text-xs leading-relaxed">
                    <input
                      type="checkbox"
                      checked={formData.transactionalConsent}
                      onChange={(e) =>
                        setFormData({ ...formData, transactionalConsent: e.target.checked })
                      }
                      className="mt-0.5 accent-[#00CE44] shrink-0"
                    />
                    <span>
                      I consent to receive transactional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer text-white/85 text-[11px] sm:text-xs leading-relaxed">
                    <input
                      type="checkbox"
                      checked={formData.marketingConsent}
                      onChange={(e) =>
                        setFormData({ ...formData, marketingConsent: e.target.checked })
                      }
                      className="mt-0.5 accent-[#00CE44] shrink-0"
                    />
                    <span>
                      I consent to receive marketing and promotional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
                    </span>
                  </label>
                </div>

                {/* Rectangular Full-Width Green Submit Button (No Cloudflare widget per user instruction) */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none cursor-pointer"
                >
                  Submit Now
                </button>

                {/* Privacy Policy | Terms of Services */}
                <div className="text-center pt-1 text-white text-xs font-medium space-x-2">
                  <Link to="/privacy-policy" className="hover:text-[#00CE44] transition-colors underline underline-offset-4">
                    Privacy Policy
                  </Link>
                  <span>|</span>
                  <Link to="/terms-and-condition" className="hover:text-[#00CE44] transition-colors underline underline-offset-4">
                    Terms of Services
                  </Link>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
