import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import { submitFormToSeo } from '../../utils/submitFormToSeo'
import TurnstileWidget from '../../components/TurnstileWidget'

const DURATION_OPTIONS = [
  { value: '1-2', label: '1 - 2 months' },
  { value: '3-6', label: '3 - 6 months' },
  { value: '6+', label: '6+ months' },
]

const SPECIALIST_OPTIONS = [
  { value: '1', label: '1' },
  { value: '2-5', label: '2 - 5' },
  { value: '5-10', label: '5 - 10' },
  { value: '10+', label: '10+' },
]

const SENIORITY_OPTIONS = [
  { value: 'junior', label: 'Junior' },
  { value: 'mid', label: 'Mid-Level' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Tech Lead' },
]

const ROLE_EXTRA_FIELDS = {
  developer: [
    { label: 'Seniority', options: SENIORITY_OPTIONS },
    {
      label: 'Language',
      options: [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'typescript', label: 'TypeScript' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
      ],
    },
  ],
  consultant: [
    { label: 'Seniority', options: SENIORITY_OPTIONS },
    {
      label: 'Skill',
      options: [
        { value: 'strategy', label: 'Strategy' },
        { value: 'it', label: 'IT Consulting' },
        { value: 'finance', label: 'Finance' },
      ],
    },
  ],
  tester: [
    {
      label: 'Testing Type',
      options: [
        { value: 'manual', label: 'Manual' },
        { value: 'automation', label: 'Automation' },
      ],
    },
    {
      label: 'Automation Level',
      options: [
        { value: 'basic', label: 'Basic' },
        { value: 'advanced', label: 'Advanced' },
        { value: 'expert', label: 'Expert' },
      ],
    },
  ],
  'test automation engineer': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
  'system administrator': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
  'project manager': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
  'scrum master': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
  'DevOps engineer': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
  'business analyst': [
    { label: 'Seniority', options: SENIORITY_OPTIONS },
    {
      label: 'Domain',
      options: [
        { value: 'Finance', label: 'Finance' },
        { value: 'Healthcare', label: 'Healthcare' },
        { value: 'Retail', label: 'Retail' },
      ],
    },
  ],
  'data scientist': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
  'UX Analyst': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
  'security engineer': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
  'UI Designer': [{ label: 'Seniority', options: SENIORITY_OPTIONS }],
}

const ALL_ROLES = [...Object.keys(ROLE_EXTRA_FIELDS), 'others']

export default function StaffTeamBuilder() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileReset, setTurnstileReset] = useState(0)
  const [selectedRoles, setSelectedRoles] = useState([
    { role: 'developer', duration: '3-6', count: '2-5', extra: {}, othersText: '' },
  ])
  const [contact, setContact] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
  })

  const toggleRole = (role) => {
    if (step === 2) return
    setSelectedRoles((prev) =>
      prev.find((r) => r.role === role)
        ? prev.filter((r) => r.role !== role)
        : [...prev, { role, duration: '3-6', count: '1', extra: {}, othersText: '' }]
    )
  }

  const updateRoleField = (role, key, value) => {
    setSelectedRoles((prev) =>
      prev.map((item) => (item.role === role ? { ...item, [key]: value } : item))
    )
  }

  const updateRoleExtra = (role, label, value) => {
    setSelectedRoles((prev) =>
      prev.map((item) =>
        item.role === role ? { ...item, extra: { ...item.extra, [label]: value } } : item
      )
    )
  }

  const handleNext = () => {
    if (!selectedRoles.length) {
      setError('Please select at least one role to continue.')
      return
    }
    setError('')
    setStep(2)
  }

  const formatRolesSummary = () =>
    selectedRoles
      .map((r) => {
        const extraStr = Object.entries(r.extra)
          .filter(([, v]) => v)
          .map(([k, v]) => `${k}: ${v}`)
          .join(', ')
        const custom = r.role === 'others' && r.othersText ? ` (${r.othersText})` : ''
        return `${r.role}${custom} | Duration: ${r.duration} | Specialists: ${r.count}${extraStr ? ` | ${extraStr}` : ''}`
      })
      .join('\n')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setError('')

    const rolesSummary = formatRolesSummary()

    const res = await submitFormToSeo({
      formId: 'lead-form-inceptives-digital-team-builder',
      formName: 'Lead Form Inceptives Digital',
      subject: `Staff Augmentation Team Request - ${contact.fullName}`,
      replyTo: contact.email,
      turnstileToken,
      fields: {
        'Full Name': contact.fullName,
        Company: contact.company,
        Email: contact.email,
        Phone: contact.phone,
        'Selected Roles': rolesSummary,
        Notes: contact.notes,
      },
    })

    setSending(false)
    if (!res?.ok) {
      setError(res?.error || 'Security verification failed. Please try again.')
      setTurnstileToken('')
      setTurnstileReset((n) => n + 1)
      return
    }
    navigate('/thank-you')
  }

  return (
    <section data-no-contact-popup="true" className="py-16 sm:py-24 bg-[#0c0d10] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
            Design Your Ultimate{' '}
            <span className="text-[#00CE44]">Tech Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Panel: Role Selector */}
          <div className="lg:col-span-7 bg-[#383838] rounded-[20px] p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/75">
                  Select Required Roles
                </span>
                <span className="text-xs font-medium text-[#00CE44]">
                  {selectedRoles.length} Selected
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {ALL_ROLES.map((role) => {
                  const isSelected = Boolean(selectedRoles.find((r) => r.role === role))
                  return (
                    <button
                      key={role}
                      type="button"
                      disabled={step === 2}
                      onClick={() => toggleRole(role)}
                      className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all border ${
                        step === 2 ? 'opacity-65 cursor-not-allowed' : 'cursor-pointer'
                      } ${
                        isSelected
                          ? 'bg-[#00CE44] border-[#00CE44] text-black'
                          : 'bg-[#171717] border-white/15 text-white hover:border-white/40 hover:bg-[#1f1f1f]'
                      }`}
                    >
                      {role}
                    </button>
                  )
                })}
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-white/10 text-xs text-white/65">
              Click any role above to add or remove specialists from your custom team configuration.
            </p>
          </div>

          {/* Right Panel: Selected Roles Config (Step 1) or Contact Details (Step 2) */}
          <div className="lg:col-span-5 bg-[#383838] rounded-[20px] p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
            {step === 1 ? (
              <>
                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2.5 megamenu-scroll">
                  {selectedRoles.length === 0 ? (
                    <div className="py-16 text-center text-white/70 text-sm">
                      Select one or more roles on the left to configure your team.
                    </div>
                  ) : (
                    selectedRoles.map((item) => {
                      const extras = ROLE_EXTRA_FIELDS[item.role] || []
                      return (
                        <div
                          key={item.role}
                          className="rounded-2xl border border-white/10 p-4 sm:p-5 space-y-3.5"
                          style={{ backgroundColor: '#171717' }}
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <span className="text-white font-bold text-sm sm:text-base capitalize">
                              {item.role === 'others' ? 'Custom Role' : `Hire a ${item.role}`}
                            </span>
                            <button
                              type="button"
                              aria-label={`Remove ${item.role}`}
                              onClick={() => toggleRole(item.role)}
                              className="w-6 h-6 rounded-full bg-[#00CE44] hover:bg-[#00b83d] text-black flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                            </button>
                          </div>

                          {item.role === 'others' && (
                            <input
                              type="text"
                              placeholder="Specify required role"
                              value={item.othersText}
                              onChange={(e) => updateRoleField(item.role, 'othersText', e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#242424] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-white/30"
                            />
                          )}

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-medium text-white/80 mb-1.5">Duration</label>
                              <select
                                value={item.duration}
                                onChange={(e) => updateRoleField(item.role, 'duration', e.target.value)}
                                className="w-full h-10 px-3 rounded-lg bg-[#242424] border border-white/10 text-white text-xs focus:outline-none focus:border-white/30 cursor-pointer"
                              >
                                {DURATION_OPTIONS.map((opt) => (
                                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-medium text-white/80 mb-1.5">Number of Specialists</label>
                              <select
                                value={item.count}
                                onChange={(e) => updateRoleField(item.role, 'count', e.target.value)}
                                className="w-full h-10 px-3 rounded-lg bg-[#242424] border border-white/10 text-white text-xs focus:outline-none focus:border-white/30 cursor-pointer"
                              >
                                {SPECIALIST_OPTIONS.map((opt) => (
                                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                              </select>
                            </div>
                            {extras.map((ex) => (
                              <div key={ex.label}>
                                <label className="block text-[11px] font-medium text-white/80 mb-1.5">{ex.label}</label>
                                <select
                                  value={item.extra[ex.label] || ''}
                                  onChange={(e) => updateRoleExtra(item.role, ex.label, e.target.value)}
                                  className="w-full h-10 px-3 rounded-lg bg-[#242424] border border-white/10 text-white text-xs focus:outline-none focus:border-white/30 cursor-pointer"
                                >
                                  <option value="">Select {ex.label}</option>
                                  {ex.options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                  ))}
                                </select>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>

                {error && <p className="text-red-400 text-xs mt-3">{error}</p>}

                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-5 w-full py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors cursor-pointer"
                >
                  Next
                </button>
              </>
            ) : (
              <form
                id="lead-form-inceptives-digital-team-builder"
                name="Lead Form Inceptives Digital"
                data-form-name="Lead Form Inceptives Digital"
                aria-label="Lead Form Inceptives Digital"
                onSubmit={handleSubmit}
                className="flex flex-col justify-between h-full text-left"
              >
                <input type="hidden" name="selected_roles" value={formatRolesSummary()} />
                <div
                  className="rounded-2xl border border-white/10 p-4 sm:p-5 space-y-3.5"
                  style={{ backgroundColor: '#171717' }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-white mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        autoComplete="name"
                        required
                        placeholder="Full Name"
                        value={contact.fullName}
                        onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg bg-[#242424] border border-white/10 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-white mb-1.5">Company</label>
                      <input
                        type="text"
                        name="company"
                        autoComplete="organization"
                        required
                        placeholder="Company"
                        value={contact.company}
                        onChange={(e) => setContact({ ...contact, company: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg bg-[#242424] border border-white/10 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-white mb-1.5">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        placeholder="Work Email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg bg-[#242424] border border-white/10 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-white mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        placeholder="Phone"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg bg-[#242424] border border-white/10 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-white mb-1.5">Notes</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Notes"
                      value={contact.notes}
                      onChange={(e) => setContact({ ...contact, notes: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#242424] border border-white/10 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-white/30 resize-none"
                    />
                  </div>
                </div>

                <TurnstileWidget
                  theme="dark"
                  className="mt-4"
                  resetKey={turnstileReset}
                  onVerify={(token) => {
                    setTurnstileToken(token)
                    setError('')
                  }}
                  onExpire={() => setTurnstileToken('')}
                  onError={() => setError('Security check failed to load. Please refresh.')}
                />
                {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold text-sm sm:text-base transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors cursor-pointer disabled:opacity-60"
                  >
                    {sending ? 'Submitting...' : 'Submit Now'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
