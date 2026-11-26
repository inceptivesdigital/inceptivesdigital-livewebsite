import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { submitFormToSeo } from '../../../../utils/submitFormToSeo'

const inputClass =
  'w-full pb-3 bg-transparent border-b border-white/40 text-white placeholder-white/75 text-xs sm:text-sm focus:outline-none focus:border-[#00CE44]'

// Same form (fields, consent copy, submit state) as the site-wide Contact Us form.
export default function ContactForm() {
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

  const update = (key) => (e) => setFormData({ ...formData, [key]: e.target.value })
  const toggle = (key) => (e) => setFormData({ ...formData, [key]: e.target.checked })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    await submitFormToSeo({
      formName: 'Lead Form Inceptives Digital',
      subject: `Contact Us Page - ${formData.firstName} ${formData.lastName}`.trim(),
      replyTo: formData.email,
      fields: {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        Email: formData.email,
        Phone: formData.phone,
        Subject: formData.subject || 'General Inquiry',
        Message: formData.message,
        'Transactional SMS Consent': formData.transactionalConsent ? 'Yes' : 'No',
        'Marketing SMS Consent': formData.marketingConsent ? 'Yes' : 'No',
      },
    })
    setSending(false)
    setSubmitted(true)
    navigate('/thank-you')
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-[#181818] text-center">
        <h3 className="text-2xl font-bold text-[#00CE44] mb-2">Thank You!</h3>
        <p className="text-white/85 text-sm">
          We have received your inquiry. Our engineering team will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      id="lead-form-inceptives-digital"
      name="Lead Form Inceptives Digital"
      data-form-name="Lead Form Inceptives Digital"
      aria-label="Lead Form Inceptives Digital"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input type="text" name="first_name" autoComplete="given-name" required placeholder="First Name" value={formData.firstName} onChange={update('firstName')} className={inputClass} />
        <input type="text" name="last_name" autoComplete="family-name" required placeholder="Last Name" value={formData.lastName} onChange={update('lastName')} className={inputClass} />
      </div>

      <input type="email" name="email" autoComplete="email" required placeholder="Email" value={formData.email} onChange={update('email')} className={inputClass} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input type="tel" name="phone" autoComplete="tel" required placeholder="+1 (000) 000-0000" value={formData.phone} onChange={update('phone')} className={inputClass} />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={update('subject')} className={inputClass} />
      </div>

      <textarea name="message" rows={3} required placeholder="Message" value={formData.message} onChange={update('message')} className={inputClass} />

      <div className="space-y-3 pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer text-white/85 text-[11px] sm:text-xs leading-relaxed">
          <input type="checkbox" name="transactional_sms_consent" value="Yes" checked={formData.transactionalConsent} onChange={toggle('transactionalConsent')} className="mt-0.5 accent-[#00CE44] shrink-0" />
          <span>
            I consent to receive transactional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
          </span>
        </label>
        <label className="flex items-start gap-2.5 cursor-pointer text-white/85 text-[11px] sm:text-xs leading-relaxed">
          <input type="checkbox" name="marketing_sms_consent" value="Yes" checked={formData.marketingConsent} onChange={toggle('marketingConsent')} className="mt-0.5 accent-[#00CE44] shrink-0" />
          <span>
            I consent to receive marketing and promotional messages from Inceptives Digital at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none cursor-pointer"
      >
        Submit
      </button>

      <div className="text-center pt-1 text-white text-xs font-medium space-x-2">
        <Link to="/privacy-policy" className="hover:text-[#00CE44] transition-colors">Privacy Policy</Link>
        <span>|</span>
        <Link to="/terms-and-condition" className="hover:text-[#00CE44] transition-colors">Terms of Services</Link>
      </div>
    </form>
  )
}
