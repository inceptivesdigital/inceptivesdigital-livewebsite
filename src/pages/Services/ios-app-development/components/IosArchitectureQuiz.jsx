import { useState } from 'react'

export default function IosArchitectureQuiz() {
  const [step, setStep] = useState(0) // 0..3 = questions, 4 = lead form, 5 = result
  const [answers, setAnswers] = useState({})
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
  })

  const questions = [
    {
      num: 1,
      question: '1. What platforms are you launching first?',
      options: [
        { key: 'A', label: 'A) iPhone only' },
        { key: 'B', label: 'B) iOS and Android simultaneously' },
        { key: 'C', label: 'C) iOS + Web' },
      ],
    },
    {
      num: 2,
      question: '2. Does your app require Apple-specific hardware?',
      options: [
        { key: 'A', label: 'A) Yes (ARKit, LiDAR, HealthKit, Apple Intelligence)' },
        { key: 'B', label: 'B) Maybe one or two standard device features' },
        { key: 'C', label: 'C) No, standard cloud features only' },
      ],
    },
    {
      num: 3,
      question: '3. What are your core performance demands?',
      options: [
        { key: 'A', label: 'A) Critical: performance is core to the app' },
        { key: 'B', label: 'B) Moderate: Smooth consumer UX with smooth scrolling' },
        { key: 'C', label: 'C) Standard: forms, dashboards, or bookings' },
      ],
    },
    {
      num: 4,
      question: '4. What is your target market launch timeline?',
      options: [
        { key: 'A', label: 'A) 6+ months' },
        { key: 'B', label: 'B) 3 to 6 months' },
        { key: 'C', label: 'C) Within 3 months' },
      ],
    },
  ]

  const handleSelectOption = (qIdx, key) => {
    const updated = { ...answers, [qIdx]: key }
    setAnswers(updated)
    if (qIdx < 3) {
      setStep(qIdx + 1)
    } else {
      setStep(4)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setStep(5)
  }

  const getRecommendation = () => {
    const vals = Object.values(answers)
    const countA = vals.filter((v) => v === 'A').length
    const countB = vals.filter((v) => v === 'B').length
    const countC = vals.filter((v) => v === 'C').length

    if (countA >= 2 && countA > countB && countA > countC) {
      return {
        badge: 'Mostly A',
        title: 'Native iOS app development in Swift and SwiftUI fits best.',
      }
    }
    if (countB >= 2 && countB > countA && countB > countC) {
      return {
        badge: 'Mostly B',
        title: 'Start native on iOS, then add Android with Flutter or React Native.',
      }
    }
    if (countC >= 2 && countC > countA && countC > countB) {
      return {
        badge: 'Mostly C',
        title: 'Cross-platform development on Flutter or React Native fits best.',
      }
    }
    return {
      badge: 'Mixed answers',
      title: 'A short discovery sprint with an iOS engineer settles it.',
    }
  }

  const rec = getRecommendation()

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Internal Links */}
          <div className="lg:col-span-6 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2.5">
              Make a 60-Second Architecture Decision
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
              Native iOS App Development or Cross-Platform?{' '}
              <span className="text-[#00CE44]">4 Questions to Get Your iPhone App Architecture Right</span>
            </h2>

            <div className="space-y-4 text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              <p>
                When planning a new product, choosing the right foundational framework dictates your long-term success. While many mobile app development companies push whichever tech stack is easiest to sell, our architects at Inceptives Digital evaluate your exact roadmap first.
              </p>
              <p>
                Native iOS development is essential when your product requires maximum processing speed, tight hardware integrations (ARKit, LiDAR, HealthKit, Apple Intelligence), or deep integration across the Apple ecosystem (watchOS, visionOS).
              </p>
              <p>
                <a
                  href="https://inceptivesdigital.com/cross-platform-app-development"
                  className="underline text-[#00CE44] hover:text-white transition-colors"
                >
                  Cross-platform app development
                </a>{' '}
                is best reserved for lightweight MVPs, where launching on both iOS and Android simultaneously with a single team outweighs native performance needs.
              </p>
              <p>
                Not sure whether{' '}
                <a
                  href="https://inceptivesdigital.com/blog/native-vs-hybrid-vs-cross-platform-app-development"
                  className="underline text-[#00CE44] hover:text-white transition-colors"
                >
                  native iOS app development or cross-platform
                </a>{' '}
                tools best align with your commercial targets? Answer four quick questions to identify the optimal path for your software.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive 4-Question + Form + Result Card */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-[20px] bg-[#202020] border border-white/10 text-left">
              
              {/* Progress Indicator */}
              {step <= 4 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-2 font-medium">
                    <span>
                      {step < 4 ? `Question ${step + 1} of 4` : 'Final Step'}
                    </span>
                    <span>{Math.round(((step + 1) / 5) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00CE44] transition-all duration-300"
                      style={{ width: `${((step + 1) / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Steps 0..3: The 4 Questions */}
              {step < 4 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-5 leading-snug">
                    {questions[step].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[step].options.map((opt) => {
                      const isSelected = answers[step] === opt.key
                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleSelectOption(step, opt.key)}
                          className={`w-full text-left px-5 py-4 rounded-none text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between border ${
                            isSelected
                              ? 'bg-[#00CE44] text-black border-[#00CE44] font-bold'
                              : 'bg-[#2a2a2a] text-white border-white/10 hover:border-[#00CE44]'
                          }`}
                        >
                          <span>{opt.label}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-black bg-black text-[#00CE44]' : 'border-white/40'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />}
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  {step > 0 && (
                    <div className="mt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="text-xs sm:text-sm text-white/80 hover:text-[#00CE44] font-medium cursor-pointer"
                      >
                        ← Back
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Lead Capture Form */}
              {step === 4 && (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    Where should we send your iOS recommendation?
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4">
                    Get a personalized PDF with the recommended development approach for your iOS app.
                  </p>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-[10px] bg-[#141414] border border-white/15 text-white text-sm focus:outline-none focus:border-[#00CE44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Work email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-[10px] bg-[#141414] border border-white/15 text-white text-sm focus:outline-none focus:border-[#00CE44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Company (optional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-[10px] bg-[#141414] border border-white/15 text-white text-sm focus:outline-none focus:border-[#00CE44]"
                    />
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-3 rounded-none bg-transparent border border-white/25 text-white text-xs sm:text-sm font-medium hover:border-white cursor-pointer"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Show my recommendation
                    </button>
                  </div>
                </form>
              )}

              {/* Step 5: Recommendation Result */}
              {step === 5 && (
                <div className="space-y-5">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#00CE44]/15 text-[#00CE44] text-xs font-bold">
                    Your result — {rec.badge}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {rec.title}
                  </h3>

                  <div className="p-4 rounded-[12px] bg-[#161616] border border-white/10 space-y-2 text-xs sm:text-sm text-white/80">
                    <div>
                      <strong className="text-[#00CE44]">Mostly A:</strong> Native iOS app development in Swift and SwiftUI fits best.
                    </div>
                    <div>
                      <strong className="text-[#00CE44]">Mostly B:</strong> Start native on iOS, then add Android with Flutter or React Native.
                    </div>
                    <div>
                      <strong className="text-[#00CE44]">Mostly C:</strong> Cross-platform development on Flutter or React Native fits best.
                    </div>
                    <div>
                      <strong className="text-[#00CE44]">Mixed answers:</strong> A short discovery sprint with an iOS engineer settles it.
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setAnswers({})
                        setStep(0)
                      }}
                      className="text-xs sm:text-sm text-white/70 hover:text-white underline cursor-pointer"
                    >
                      Retake Quiz
                    </button>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-xs sm:text-sm transition-colors"
                    >
                      Discuss With an iOS Architect
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
