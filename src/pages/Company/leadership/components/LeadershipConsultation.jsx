import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Shield, Clock } from 'lucide-react'
import { submitFormToSeo } from '../../../../utils/submitFormToSeo'
import TurnstileWidget from '../../../../components/TurnstileWidget'

export default function LeadershipConsultation() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileReset, setTurnstileReset] = useState(0)
  const [turnstileError, setTurnstileError] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setTurnstileError('')
    const res = await submitFormToSeo({
      formId: 'lead-form-inceptives-digital-leadership',
      formName: 'Lead Form Inceptives Digital',
      subject: `Leadership Consultation - ${formData.fullName}`,
      replyTo: formData.email,
      turnstileToken,
      fields: {
        'Full Name': formData.fullName,
        Email: formData.email,
        Phone: formData.phone,
        'Contact Number': formData.phone,
        'Budget Range': formData.budget || 'Not specified',
        'Project Description': formData.message,
      },
    })
    setSending(false)
    if (!res?.ok) {
      setTurnstileError(res?.error || 'Security verification failed. Please try again.')
      setTurnstileToken('')
      setTurnstileReset((n) => n + 1)
      return
    }
    setSubmitted(true)
    navigate('/thank-you')
  }

  return (
    <section id="consultation" className="py-20 sm:py-28 bg-[#050608] relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#00CE44]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[#0055ff]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      {/* Top Section Intro */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 bg-[#00CE44]/10 border border-[#00CE44]/30 text-[#00CE44] text-xs font-bold tracking-wider uppercase">
          <span>Get In Touch With Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Put the Right Minds on Your Idea
        </h2>
        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Talk with our team about what you’re building and the decisions that will shape it.
        </p>
      </div>

      {/* Main Consultation Card (Matching Attachment 8) */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#383838] p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading + Value Proposition */}
            <div className="lg:col-span-5 text-left">
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.15] mb-4">
                Our Technology Experts are <span className="text-[#00CE44]">Change Catalysts</span>
              </h3>
              <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
                Book a Free Consultation Call with Our Experts Today.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                <div className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                  <Clock className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
                  <span>In just 2 mins you will get a response</span>
                </div>
                <div className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                  <Shield className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
                  <span>Your idea is 100% protected by our Non Disclosure Agreement</span>
                </div>
                <div className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
                  <span>Direct consultation with senior engineering leaders</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form (Attachment 8) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-6 sm:p-10 text-black shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#00CE44]/20 text-[#00CE44] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#00CE44]" />
                    </div>
                    <h4 className="text-2xl font-bold text-black mb-2">Thank You!</h4>
                    <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                      Our leadership team has received your brief and will connect with you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    id="lead-form-inceptives-digital"
                    name="Lead Form Inceptives Digital"
                    data-form-name="Lead Form Inceptives Digital"
                    aria-label="Lead Form Inceptives Digital"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <input
                        type="text"
                        name="full_name"
                        autoComplete="name"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pb-3 pt-1 bg-transparent border-b border-gray-300 text-black placeholder-gray-500 text-sm focus:outline-none focus:border-[#00CE44] transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        placeholder="Email*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pb-3 pt-1 bg-transparent border-b border-gray-300 text-black placeholder-gray-500 text-sm focus:outline-none focus:border-[#00CE44] transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        placeholder="Contact Number*"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pb-3 pt-1 bg-transparent border-b border-gray-300 text-black placeholder-gray-500 text-sm focus:outline-none focus:border-[#00CE44] transition-colors"
                      />
                    </div>

                    <div>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full pb-3 pt-1 bg-transparent border-b border-gray-300 text-black text-sm focus:outline-none focus:border-[#00CE44] transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="text-gray-400">Select a Budget Range</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pb-3 pt-1 bg-transparent border-b border-gray-300 text-black placeholder-gray-500 text-sm focus:outline-none focus:border-[#00CE44] transition-colors resize-none"
                      />
                    </div>

                    {/* Turnstile & Submit Row */}
                    <div className="flex flex-col gap-4 pt-4">
                      <TurnstileWidget
                        theme="light"
                        resetKey={turnstileReset}
                        onVerify={(token) => {
                          setTurnstileToken(token)
                          setTurnstileError('')
                        }}
                        onExpire={() => setTurnstileToken('')}
                        onError={() => setTurnstileError('Security check failed to load. Please refresh.')}
                      />
                      {turnstileError && (
                        <p className="text-red-600 text-xs" role="alert">{turnstileError}</p>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        className="px-6 sm:px-8 py-3.5 bg-[#0055ff] hover:bg-[#0044cc] text-white font-bold text-sm rounded-none transition-all cursor-pointer border-0 shadow-lg active:scale-95 whitespace-nowrap disabled:opacity-60"
                      >
                        {sending ? 'Submitting...' : 'Schedule Free Consultation'}
                      </button>
                    </div>

                    {/* Trust Footnotes */}
                    <div className="pt-4 border-t border-gray-100 text-[11px] text-gray-500 space-y-1">
                      <p>• In just 2 mins you will get a response</p>
                      <p>• Your idea is 100% protected by our Non Disclosure Agreement.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
