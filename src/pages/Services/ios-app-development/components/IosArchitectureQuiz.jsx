import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { submitFormToSeo, SEO_RECIPIENT_EMAIL } from '../../../../utils/submitFormToSeo'
import TurnstileWidget from '../../../../components/TurnstileWidget'

const QUIZ_QUESTIONS = [
  {
    key: 'platform',
    question: 'What platforms are you launching first?',
    options: [
      'iPhone only',
      'iPhone first, Android later',
      'iOS and Android simultaneously',
    ],
  },
  {
    key: 'hardware',
    question: 'Does your app require Apple-specific hardware?',
    options: [
      'Yes (ARKit, LiDAR, HealthKit, Apple Intelligence)',
      'Maybe one or two standard device features',
      'No, standard cloud features only',
    ],
  },
  {
    key: 'performance',
    question: 'What are your core performance demands?',
    options: [
      'High performance',
      'Standard consumer UX with smooth scrolling',
      'Content-driven forms or business dashboards',
    ],
  },
  {
    key: 'timeline',
    question: 'What is your target market launch timeline?',
    options: ['6+ months', '3 to 6 months', 'Under 3 months'],
  },
]

function calculateIosScore(a) {
  const p = a.platform || ''
  const h = a.hardware || ''
  const f = a.performance || ''
  const t = a.timeline || ''

  let n = 35
  let c = 35

  if (p === 'iPhone only') {
    n += 25
    c -= 5
  } else if (p === 'iPhone first, Android later') {
    n += 12
    c += 13
  } else {
    c += 25
  }

  if (h.startsWith('Yes (')) {
    n += 25
    c -= 8
  } else if (h.startsWith('Maybe')) {
    n += 8
    c += 4
  } else {
    c += 18
  }

  if (f === 'High performance') {
    n += 18
    c -= 7
  } else if (f.includes('smooth scrolling')) {
    n += 7
    c += 9
  } else {
    c += 17
  }

  if (t === '6+ months') {
    n += 5
  } else if (t === '3 to 6 months') {
    n += 2
    c += 3
  } else {
    c += 7
  }

  n = Math.max(5, Math.min(99, n))
  c = Math.max(5, Math.min(99, c))

  const isNative =
    (p === 'iPhone only' && (h.startsWith('Yes (') || f === 'High performance')) ||
    (p === 'iPhone only' &&
      h.startsWith('Maybe') &&
      f.includes('smooth scrolling') &&
      t !== 'Under 3 months')

  const isCross =
    p === 'iOS and Android simultaneously' &&
    h === 'No, standard cloud features only' &&
    f !== 'High performance'

  const kind = isNative ? 'native' : isCross ? 'cross' : 'review'

  const texts = {
    native: [
      'Native iOS Development Is Your Stronger Starting Point',
      'Your Apple integration and performance priorities make native iOS worth assessing first. Swift and SwiftUI provide direct access to the capabilities your product may require.',
    ],
    cross: [
      'Cross-Platform Development Is Worth Prioritizing',
      'Your platform plans and feature requirements suggest Flutter or React Native could support shared development. Platform-specific integrations still require review.',
    ],
    review: [
      'Your App Needs a Closer Architecture Review',
      'Your answers contain competing requirements. A short questionnaire cannot settle the choice between native iOS and cross-platform development.',
    ],
  }

  const reasons = [
    `Launch: ${p}`,
    `Apple capabilities: ${h}`,
    `Performance: ${f}`,
    `Timeline: ${t}`,
  ]

  return {
    kind,
    title: texts[kind][0],
    body: texts[kind][1],
    native: n,
    cross: c,
    reasons,
  }
}

const QUIZ_CSS = `
#id-ios-quiz-root {
  --g: #00ce44;
  --bg: #151c17;
  --panel: #222c25;
  --bd: #3a493e;
  --text: #f6fff7;
  --muted: #b7c8bb;
  color: var(--text);
  font: inherit;
  width: 100%;
}
#id-ios-quiz-root * {
  box-sizing: border-box;
}
#id-ios-quiz-root .id-ios-card {
  border-radius: 18px;
  padding: clamp(18px, 4vw, 34px);
  background: radial-gradient(circle at 100% 0%, #174126, transparent 46%), var(--bg);
  border: 1px solid var(--bd);
}
#id-ios-quiz-root .id-ios-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  color: var(--muted);
}
#id-ios-quiz-root .id-ios-top strong {
  color: var(--g);
  white-space: nowrap;
}
#id-ios-quiz-root .id-ios-track {
  height: 7px;
  background: #35443a;
  border-radius: 30px;
  overflow: hidden;
  margin: 14px 0 26px;
}
#id-ios-quiz-root .id-ios-progress {
  width: 20%;
  height: 100%;
  background: var(--g);
  border-radius: 30px;
  transition: width 0.4s ease;
}
#id-ios-quiz-root fieldset {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
}
#id-ios-quiz-root legend {
  font-size: clamp(18px, 2.5vw, 23px) !important;
  font-weight: 700 !important;
  line-height: 1.4 !important;
  color: #ffffff !important;
  margin-bottom: 19px;
  padding: 0;
  display: block;
}
#id-ios-quiz-root .id-ios-options {
  display: grid;
  gap: 11px;
}
#id-ios-quiz-root .id-ios-option {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 15px 17px;
  min-height: 57px;
  background: var(--panel);
  border: 1.5px solid var(--bd);
  border-radius: 11px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
#id-ios-quiz-root .id-ios-option.is-checked,
#id-ios-quiz-root .id-ios-option:has(input:checked) {
  background: #193d27;
  border-color: var(--g);
}
#id-ios-quiz-root .id-ios-option:hover {
  border-color: var(--g);
}
#id-ios-quiz-root .id-ios-option input {
  accent-color: var(--g);
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  margin: 0;
}
#id-ios-quiz-root .id-ios-option span {
  font-size: 15px;
  color: var(--text);
  line-height: 1.5;
}
#id-ios-quiz-root .id-ios-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
#id-ios-quiz-root .id-ios-contact label {
  display: grid;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
}
#id-ios-quiz-root .id-ios-contact label:last-child {
  grid-column: 1 / -1;
}
#id-ios-quiz-root .id-ios-contact input {
  width: 100%;
  min-width: 0;
  height: 48px;
  border: 1px solid var(--bd);
  border-radius: 9px;
  padding: 0 13px;
  background: var(--panel);
  color: white;
  font-size: 15px;
  font-weight: 400;
}
#id-ios-quiz-root .id-ios-contact input::placeholder {
  color: #9eada2;
  font-weight: 400;
}
#id-ios-quiz-root input:focus-visible,
#id-ios-quiz-root button:focus-visible {
  outline: 2px solid var(--g);
  outline-offset: 3px;
}
#id-ios-quiz-root .id-ios-privacy {
  color: var(--muted) !important;
  font-size: 12px !important;
  line-height: 1.6 !important;
  margin: 17px 0 0;
}
#id-ios-quiz-root .id-ios-buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin-top: 22px;
}
#id-ios-quiz-root .id-ios-buttons button,
#id-ios-quiz-root .id-ios-result button,
#id-ios-quiz-root .id-ios-result a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 43px;
  padding: 10px 20px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  width: auto;
  border: 1px solid #526658;
  background: #29382e;
  color: white;
}
#id-ios-quiz-root .id-ios-buttons .id-ios-next,
#id-ios-quiz-root .id-ios-buttons .id-ios-send,
#id-ios-quiz-root .id-ios-result .id-ios-download {
  background: var(--g);
  border-color: var(--g);
  color: #061b0b;
}
#id-ios-quiz-root button:disabled {
  opacity: 0.55;
  cursor: wait;
}
#id-ios-quiz-root .id-ios-error {
  color: #ffb5b5;
  font-size: 13px;
  margin-top: 13px;
  min-height: 18px;
}
#id-ios-quiz-root .id-ios-result h2 {
  font-size: clamp(23px, 3vw, 35px) !important;
  line-height: 1.15 !important;
  color: white !important;
  margin: 10px 0 !important;
}
#id-ios-quiz-root .id-ios-result p {
  font-size: 14px !important;
  line-height: 1.7 !important;
  color: var(--muted) !important;
}
#id-ios-quiz-root .id-ios-result .id-ios-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--g);
  text-transform: uppercase;
}
#id-ios-quiz-root .id-ios-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 22px 0;
}
#id-ios-quiz-root .id-ios-metric {
  padding: 15px;
  border: 1px solid var(--bd);
  border-radius: 11px;
  background: var(--panel);
}
#id-ios-quiz-root .id-ios-metric strong {
  display: block;
  color: var(--g);
  font-size: 24px;
  margin: 6px 0;
}
#id-ios-quiz-root .id-ios-metric .id-ios-track {
  margin: 0;
}
#id-ios-quiz-root .id-ios-summary {
  background: #1c2b21;
  border: 1px solid #35523c;
  border-radius: 11px;
  padding: 17px;
  margin: 17px 0;
}
#id-ios-quiz-root .id-ios-summary h3 {
  font-size: 16px !important;
  color: white !important;
  margin: 0 0 12px !important;
}
#id-ios-quiz-root .id-ios-summary ul {
  margin: 0;
  padding-left: 20px;
  color: #c9ddce;
  font-size: 13px;
  line-height: 1.8;
  list-style: disc;
}
#id-ios-quiz-root .id-ios-result-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
#id-ios-quiz-root .id-ios-footnote {
  font-size: 11px !important;
  color: #9aafa0 !important;
  margin-top: 18px !important;
}
@media (max-width: 900px) {
  #id-ios-quiz-root .id-ios-card {
    padding: 24px;
  }
}
@media (max-width: 600px) {
  #id-ios-quiz-root .id-ios-option {
    padding: 13px;
    min-height: 50px;
  }
  #id-ios-quiz-root .id-ios-option span {
    font-size: 14px;
    overflow-wrap: anywhere;
  }
  #id-ios-quiz-root .id-ios-top {
    flex-wrap: wrap;
  }
  #id-ios-quiz-root .id-ios-contact {
    grid-template-columns: 1fr;
  }
  #id-ios-quiz-root .id-ios-contact label:last-child {
    grid-column: auto;
  }
  #id-ios-quiz-root .id-ios-metrics {
    grid-template-columns: 1fr;
  }
  #id-ios-quiz-root .id-ios-buttons button {
    flex: 1;
    padding: 10px 8px;
    font-size: 13px;
  }
  #id-ios-quiz-root .id-ios-result-actions {
    flex-direction: column;
  }
  #id-ios-quiz-root .id-ios-result-actions > * {
    width: 100% !important;
  }
}
@media (max-width: 380px) {
  #id-ios-quiz-root .id-ios-card {
    padding: 14px;
  }
  #id-ios-quiz-root legend {
    font-size: 17px !important;
  }
  #id-ios-quiz-root .id-ios-buttons {
    gap: 8px;
  }
}
`

export default function IosArchitectureQuiz() {
  const [step, setStep] = useState(0) // 0..3 = questions, 4 = contact form
  const [answers, setAnswers] = useState({
    platform: '',
    hardware: '',
    performance: '',
    timeline: '',
  })
  const [contact, setContact] = useState({
    full_name: '',
    email: '',
    company: '',
  })
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileReset, setTurnstileReset] = useState(0)
  const [submittedData, setSubmittedData] = useState(null)
  const [pdfDownloading, setPdfDownloading] = useState(false)
  const [pdfError, setPdfError] = useState('')
  const resultRef = useRef(null)

  const handleSelectOption = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
    setError('')
  }

  const handleNext = () => {
    const currentKey = QUIZ_QUESTIONS[step]?.key
    if (!currentKey || !answers[currentKey]) {
      setError('Please select an answer to continue.')
      return
    }
    setError('')
    setStep((s) => s + 1)
  }

  const handlePrev = () => {
    if (step > 0) {
      setError('')
      setStep((s) => s - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    for (const q of QUIZ_QUESTIONS) {
      if (!answers[q.key]) {
        setError('Please complete all four questions.')
        return
      }
    }
    const trimmedName = contact.full_name.trim()
    const trimmedEmail = contact.email.trim()
    const trimmedCompany = contact.company.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (
      !trimmedName ||
      trimmedName.length > 120 ||
      !emailRegex.test(trimmedEmail) ||
      trimmedCompany.length > 120
    ) {
      setError('Enter a valid name and email address.')
      return
    }

    const resolvedTurnstileToken =
      turnstileToken ||
      e.currentTarget?.querySelector?.('[name="cf-turnstile-response"]')?.value ||
      ''
    setSending(true)
    setError('')

    const fit = calculateIosScore(answers)

    try {
      const res = await submitFormToSeo({
        formId: 'id-ios-quiz-form',
        formName: 'iOS APP DEVELOPMENT Architecture Quiz',
        subject: `iOS APP DEVELOPMENT Page - ${trimmedName}`,
        replyTo: trimmedEmail,
        wpAction: 'id_ios_quiz_submit',
        turnstileToken: resolvedTurnstileToken,
        fields: {
          'Full Name': trimmedName,
          Email: trimmedEmail,
          Company: trimmedCompany || 'Not provided',
          '1. What platforms are you launching first?': answers.platform,
          '2. Does your app require Apple-specific hardware?': answers.hardware,
          '3. What are your core performance demands?': answers.performance,
          '4. What is your target market launch timeline?': answers.timeline,
          Recommendation: fit.title,
          Explanation: fit.body,
          'Native iOS fit': `${fit.native} / 99`,
          'Cross-platform fit': `${fit.cross} / 99`,
          full_name: trimmedName,
          email: trimmedEmail,
          company: trimmedCompany,
          platform: answers.platform,
          hardware: answers.hardware,
          performance: answers.performance,
          timeline: answers.timeline,
        },
      })

      if (!res?.ok) {
        setError(res?.error || 'Security verification failed. Please try again.')
        setTurnstileToken('')
        setTurnstileReset((n) => n + 1)
        return
      }

      const outData = {
        result: fit,
        answers: { ...answers },
        contact: {
          name: trimmedName,
          email: trimmedEmail,
          company: trimmedCompany,
        },
      }
      setSubmittedData(outData)
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 60)
    } catch (err) {
      setError(err?.message || 'Submission failed. Please retry.')
    } finally {
      setSending(false)
    }
  }

  const handleDownloadPDF = async () => {
    if (!submittedData) return
    setPdfDownloading(true)
    setPdfError('')

    try {
      const r = submittedData.result
      const a = submittedData.answers
      const c = submittedData.contact
      const logoURL = '/assets/ID-logo.jpg'

      const clean = (v) =>
        String(v == null ? '' : v)
          .normalize('NFKD')
          .replace(/[\u2018\u2019]/g, "'")
          .replace(/[\u2013\u2014]/g, '-')
          .replace(/[^\x20-\x7e]/g, '')
      const pdfEsc = (v) =>
        clean(v).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
      const date = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date())

      let jpg = null
      try {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = logoURL
        await new Promise((ok, fail) => {
          img.onload = ok
          img.onerror = fail
          if (img.complete && img.naturalWidth) ok()
        })
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const scale = Math.min(1, 500 / img.naturalWidth, 500 / img.naturalHeight)
        const width = Math.max(1, Math.round(img.naturalWidth * scale))
        const height = Math.max(1, Math.round(img.naturalHeight * scale))
        canvas.width = width
        canvas.height = height
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, width, height)
        ctx.drawImage(img, 0, 0, width, height)
        const encoded = canvas.toDataURL('image/jpeg', 0.87).split(',')[1]
        const binary = atob(encoded)
        const bytes = new Uint8Array(binary.length)
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
        jpg = { bytes, width, height }
      } catch (err) {
        console.warn('Site logo not available for PDF; using wordmark', err)
      }

      const enc = new TextEncoder()
      const parts = []
      const offsets = [0]
      let byteLength = 0
      const push = (x) => {
        const bytes = typeof x === 'string' ? enc.encode(x) : x
        parts.push(bytes)
        byteLength += bytes.length
      }
      let objNum = 0
      const entries = []
      const alloc = () => {
        entries.push(null)
        return ++objNum
      }
      const put = (id, content) => {
        entries[id - 1] = content
      }
      const rootId = alloc()
      const pagesId = alloc()
      const regular = alloc()
      const bold = alloc()
      let imageId = null
      if (jpg) {
        imageId = alloc()
        put(imageId, [
          '<< /Type /XObject /Subtype /Image /Width ' +
            jpg.width +
            ' /Height ' +
            jpg.height +
            ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' +
            jpg.bytes.length +
            ' >>\nstream\n',
          jpg.bytes,
          '\nendstream',
        ])
      }
      put(regular, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
      put(bold, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')

      const W = 595
      const H = 842
      const LM = 42
      const RIGHT = 553
      const TABLE = 511
      const pages = []
      let page

      const rgb = (hex) => {
        const h = hex.replace('#', '')
        return [0, 2, 4].map((i) => (parseInt(h.slice(i, i + 2), 16) / 255).toFixed(3))
      }
      const addText = (str, x, y, size = 10, boldFlag = false, color = '#222222') => {
        const col = rgb(color)
        page.ops.push(
          col.join(' ') +
            ' rg BT /' +
            (boldFlag ? 'F2' : 'F1') +
            ' ' +
            size +
            ' Tf ' +
            x +
            ' ' +
            y +
            ' Td (' +
            pdfEsc(str) +
            ') Tj ET'
        )
      }
      const rect = (x, y, w, h, fill, stroke) => {
        page.ops.push(rgb(fill).join(' ') + ' rg ' + x + ' ' + y + ' ' + w + ' ' + h + ' re f')
        if (stroke)
          page.ops.push(
            rgb(stroke).join(' ') + ' RG 0.6 w ' + x + ' ' + y + ' ' + w + ' ' + h + ' re S'
          )
      }
      const line = (x1, y1, x2, y2, color = '#dddddd') =>
        page.ops.push(rgb(color).join(' ') + ' RG 0.7 w ' + x1 + ' ' + y1 + ' m ' + x2 + ' ' + y2 + ' l S')

      const startPage = () => {
        page = { ops: [], annotations: [] }
        pages.push(page)
        rect(0, 0, W, H, '#ffffff')

        if (imageId) {
          const maxLogoW = 150
          const maxLogoH = 48
          const scale = Math.min(maxLogoW / jpg.width, maxLogoH / jpg.height)
          const logoW = jpg.width * scale
          const logoH = jpg.height * scale
          const logoX = 43
          const logoTop = H - 30
          const logoY = logoTop - logoH
          page.ops.push(
            'q ' + logoW + ' 0 0 ' + logoH + ' ' + logoX + ' ' + logoY + ' cm /Logo Do Q'
          )
        } else {
          addText('INCEPTIVES DIGITAL', LM, 782, 17, true, '#202020')
        }

        addText('iOS APP DEVELOPMENT', LM, 735, 12, true, '#202020')
        addText('Generated: ' + date, RIGHT - 175, 742, 9, false, '#555555')
        line(LM, 733, RIGHT, 733, '#d8d8d8')
        line(LM, 52, RIGHT, 52, '#d6d6d6')
        addText(
          '(c) ' + new Date().getFullYear() + ' Inceptives Digital. All rights reserved.',
          LM,
          37,
          8,
          false,
          '#606060'
        )
        const priv = 'Privacy Policy: inceptivesdigital.com/privacy-policy'
        addText(priv, LM, 23, 8, false, '#333333')
        const ann = alloc()
        page.annotations.push(ann)
        put(
          ann,
          '<< /Type /Annot /Subtype /Link /Rect [42 18 300 35] /Border [0 0 0] /A << /S /URI /URI (https://inceptivesdigital.com/privacy-policy) >> >>'
        )
        addText('Page ' + pages.length, 515, 37, 8, false, '#606060')
        page.y = 700
      }

      const ensure = (height) => {
        if (page.y - height < 75) startPage()
      }
      const wrap = (value, limit = 60) => {
        const words = clean(value).split(/\s+/)
        const lines = []
        let ln = ''
        for (const word of words) {
          if (!word) continue
          if ((ln + ' ' + word).trim().length > limit && ln) {
            lines.push(ln)
            ln = word
          } else {
            ln = (ln + ' ' + word).trim()
          }
        }
        lines.push(ln)
        return lines
      }
      const section = (title) => {
        ensure(49)
        addText(title.toUpperCase(), LM, page.y, 12, true, '#252525')
        page.y -= 12
        line(LM, page.y, RIGHT, page.y)
        page.y -= 16
      }
      const row = (key, value) => {
        const left = wrap(key, 24)
        const right = wrap(value, 61)
        const count = Math.max(left.length, right.length)
        const height = Math.max(34, 14 + count * 13)
        ensure(height + 5)
        rect(LM, page.y - height, 155, height, '#f3f3f3', '#dadada')
        rect(LM + 155, page.y - height, TABLE - 155, height, '#ffffff', '#dadada')
        left.forEach((v, i) => addText(v, LM + 10, page.y - 17 - i * 13, 9, true))
        right.forEach((v, i) => addText(v, LM + 165, page.y - 17 - i * 13, 9, false))
        page.y -= height
      }

      startPage()
      section('Contact Details')
      row('Full Name', c.name)
      row('Email', c.email)
      row('Company', c.company || 'Not provided')
      page.y -= 18

      section('Assessment Questions & Answers')
      QUIZ_QUESTIONS.forEach((q, i) => row(`${i + 1}. ${q.question}`, a[q.key] || ''))
      page.y -= 18

      section('Architecture Recommendation')
      row('Recommended approach', r.title)
      row('Explanation', r.body)
      row('Native iOS fit', `${r.native} / 99 (indicative)`)
      row('Cross-platform fit', `${r.cross} / 99 (indicative)`)
      page.y -= 18

      section('Assessment Summary')
      ;(r.reasons || []).forEach((reason, i) => row(`Factor ${i + 1}`, reason))
      ensure(45)
      page.y -= 15
      wrap(
        'Scores are rule-based indicators, not probabilities. Confirm final architecture during technical discovery.',
        95
      ).forEach((lineText) => {
        addText(lineText, LM, page.y, 9, false, '#666666')
        page.y -= 13
      })

      const kids = []
      pages.forEach((p) => {
        const stream = p.ops.join('\n') + '\n'
        const contentsId = alloc()
        const pageId = alloc()
        put(
          contentsId,
          '<< /Length ' + enc.encode(stream).length + ' >>\nstream\n' + stream + 'endstream'
        )
        const resources =
          '<< /Font << /F1 ' +
          regular +
          ' 0 R /F2 ' +
          bold +
          ' 0 R >>' +
          (imageId ? ' /XObject << /Logo ' + imageId + ' 0 R >>' : '') +
          ' >>'
        put(
          pageId,
          '<< /Type /Page /Parent ' +
            pagesId +
            ' 0 R /MediaBox [0 0 595 842] /Resources ' +
            resources +
            ' /Annots [' +
            p.annotations.map((id) => id + ' 0 R').join(' ') +
            '] /Contents ' +
            contentsId +
            ' 0 R >>'
        )
        kids.push(pageId + ' 0 R')
      })

      put(pagesId, '<< /Type /Pages /Count ' + kids.length + ' /Kids [' + kids.join(' ') + '] >>')
      put(rootId, '<< /Type /Catalog /Pages ' + pagesId + ' 0 R >>')
      push('%PDF-1.4\n%INCEPTIVES\n')
      entries.forEach((value, i) => {
        offsets.push(byteLength)
        push(i + 1 + ' 0 obj\n')
        if (Array.isArray(value)) value.forEach(push)
        else push(value)
        push('\nendobj\n')
      })
      const xref = byteLength
      push('xref\n0 ' + (entries.length + 1) + '\n0000000000 65535 f \n')
      offsets.slice(1).forEach((n) => push(String(n).padStart(10, '0') + ' 00000 n \n'))
      push(
        'trailer\n<< /Size ' +
          (entries.length + 1) +
          ' /Root ' +
          rootId +
          ' 0 R >>\nstartxref\n' +
          xref +
          '\n%%EOF'
      )

      const blob = new Blob(parts, { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Inceptives-iOS-Architecture-Assessment.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      setTimeout(() => URL.revokeObjectURL(url), 60000)
    } catch (err) {
      console.error('PDF generation failed', err)
      setPdfError('PDF download failed: ' + (err?.message || 'Please retry.'))
    } finally {
      setPdfDownloading(false)
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <style>{QUIZ_CSS}</style>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Internal Links */}
          <div className="lg:col-span-6 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2.5">
              Make a 60-Second Architecture Decision
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
              Native iOS App Development or Cross-Platform?{' '}
              <span className="text-[#00CE44]">
                4 Questions to Get Your iPhone App Architecture Right
              </span>
            </h2>

            <div className="space-y-4 text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              <p>
                When planning a new product, choosing the right foundational framework dictates your
                long-term success. While many mobile app development companies push whichever tech
                stack is easiest to sell, our architects at Inceptives Digital evaluate your exact
                roadmap first.
              </p>
              <p>
                Native iOS development is essential when your product requires maximum processing
                speed, tight hardware integrations (ARKit, LiDAR, HealthKit, Apple Intelligence), or
                deep integration across the Apple ecosystem (watchOS, visionOS).
              </p>
              <p>
                <Link
                  to="/cross-platform-app-development"
                  className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
                >
                  Cross-platform app development
                </Link>{' '}
                is best reserved for lightweight MVPs, where launching on both iOS and Android
                simultaneously with a single team outweighs native performance needs.
              </p>
              <p>
                Not sure whether{' '}
                <Link
                  to="/blog/native-vs-hybrid-vs-cross-platform-app-development"
                  className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
                >
                  native iOS app development or cross-platform
                </Link>{' '}
                tools best align with your commercial targets? Answer four quick questions to
                identify the optimal path for your software.
              </p>
            </div>
          </div>

          {/* Right Column: Converted PHP Shortcode [ios_architecture_form] */}
          <div className="lg:col-span-6">
            <div
              id="id-ios-quiz-root"
              className="id-ios-quiz"
              aria-label="iOS APP DEVELOPMENT"
              ref={resultRef}
            >
              <div className="id-ios-card">
                <div className="id-ios-top">
                  <span>
                    {submittedData ? 'YOUR RECOMMENDATION' : 'IOS APP DEVELOPMENT'}
                  </span>
                  <strong className="id-ios-count">
                    {submittedData ? 'COMPLETE' : `STEP ${step + 1} OF 5`}
                  </strong>
                </div>

                <div className="id-ios-track">
                  <div
                    className="id-ios-progress"
                    style={{
                      width: submittedData ? '100%' : `${(step + 1) * 20}%`,
                    }}
                  />
                </div>

                {!submittedData ? (
                  <form noValidate className="id-ios-form" onSubmit={handleSubmit}>
                    {step < 4 && (
                      <fieldset className="id-ios-step" data-step={step}>
                        <legend>
                          {step + 1}. {QUIZ_QUESTIONS[step].question}
                        </legend>
                        <div className="id-ios-options">
                          {QUIZ_QUESTIONS[step].options.map((option) => {
                            const key = QUIZ_QUESTIONS[step].key
                            const isChecked = answers[key] === option
                            return (
                              <label
                                key={option}
                                className={`id-ios-option${isChecked ? ' is-checked' : ''}`}
                              >
                                <input
                                  type="radio"
                                  name={key}
                                  value={option}
                                  checked={isChecked}
                                  onChange={() => handleSelectOption(key, option)}
                                  required
                                />
                                <span>{option}</span>
                              </label>
                            )
                          })}
                        </div>
                      </fieldset>
                    )}

                    {step === 4 && (
                      <fieldset className="id-ios-step" data-step={4}>
                        <legend>5. Where should we send your assessment?</legend>
                        {/* Preserve all Step 1-4 radio selections in the DOM for GHL external-tracking form capture */}
                        <input type="hidden" name="platform" value={answers.platform || ''} />
                        <input type="hidden" name="hardware" value={answers.hardware || ''} />
                        <input type="hidden" name="performance" value={answers.performance || ''} />
                        <input type="hidden" name="timeline" value={answers.timeline || ''} />
                        <input
                          type="hidden"
                          name="recommendation"
                          value={calculateIosScore(answers).title}
                        />
                        <input
                          type="hidden"
                          name="message"
                          value={[
                            `1. Platform: ${answers.platform || 'N/A'}`,
                            `2. Hardware: ${answers.hardware || 'N/A'}`,
                            `3. Performance: ${answers.performance || 'N/A'}`,
                            `4. Timeline: ${answers.timeline || 'N/A'}`,
                            `Recommendation: ${calculateIosScore(answers).title}`,
                          ].join(' | ')}
                        />
                        <div className="id-ios-contact">
                          <label>
                            Full Name
                            <input
                              name="full_name"
                              type="text"
                              autoComplete="name"
                              maxLength={120}
                              placeholder="Full name"
                              value={contact.full_name}
                              onChange={(e) =>
                                setContact((prev) => ({ ...prev, full_name: e.target.value }))
                              }
                              required
                            />
                          </label>
                          <label>
                            Email
                            <input
                              name="email"
                              type="email"
                              autoComplete="email"
                              maxLength={254}
                              placeholder="Email address"
                              value={contact.email}
                              onChange={(e) =>
                                setContact((prev) => ({ ...prev, email: e.target.value }))
                              }
                              required
                            />
                          </label>
                          <label>
                            Company Name
                            <input
                              name="company"
                              type="text"
                              autoComplete="organization"
                              maxLength={120}
                              placeholder="Company (optional)"
                              value={contact.company}
                              onChange={(e) =>
                                setContact((prev) => ({ ...prev, company: e.target.value }))
                              }
                            />
                          </label>
                        </div>
                        <p className="id-ios-privacy">
                          Your answers and contact information will be emailed to our team (
                          {SEO_RECIPIENT_EMAIL}). After submission, you can download your complete
                          assessment as a PDF.
                        </p>
                        <TurnstileWidget
                          theme="dark"
                          className="mt-3"
                          resetKey={turnstileReset}
                          onVerify={(token) => {
                            setTurnstileToken(token)
                            setError('')
                          }}
                          onExpire={() => setTurnstileToken('')}
                          onError={() => setError('Security check failed to load. Please refresh.')}
                        />
                      </fieldset>
                    )}

                    <div className="id-ios-buttons">
                      {step > 0 && (
                        <button
                          className="id-ios-back"
                          type="button"
                          onClick={handlePrev}
                          disabled={sending}
                        >
                          Previous
                        </button>
                      )}

                      {step < 4 && (
                        <button
                          className="id-ios-next"
                          type="button"
                          onClick={handleNext}
                        >
                          Next
                        </button>
                      )}

                      {step === 4 && (
                        <button
                          className="id-ios-send"
                          type="submit"
                          disabled={sending}
                        >
                          {sending ? 'Sending...' : 'Send & View Result'}
                        </button>
                      )}
                    </div>

                    <div className="id-ios-error" role="alert" aria-live="polite">
                      {error}
                    </div>
                  </form>
                ) : (
                  <div className="id-ios-result" aria-live="polite">
                    <div className="id-ios-eyebrow">Assessment submitted successfully</div>
                    <h2>{submittedData.result.title}</h2>
                    <p>{submittedData.result.body}</p>

                    <div className="id-ios-metrics">
                      {[
                        ['Native iOS', submittedData.result.native],
                        ['Cross-platform', submittedData.result.cross],
                      ].map(([label, score]) => (
                        <div key={label} className="id-ios-metric">
                          <span>{label}</span>
                          <strong>{score}</strong>
                          <div className="id-ios-track">
                            <div
                              className="id-ios-progress"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="id-ios-summary">
                      <h3>Your submitted answers</h3>
                      <ul>
                        {submittedData.result.reasons.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="id-ios-result-actions">
                      <button
                        type="button"
                        className="id-ios-download"
                        onClick={handleDownloadPDF}
                        disabled={pdfDownloading}
                      >
                        {pdfDownloading ? 'Preparing branded PDF...' : 'Download Complete PDF'}
                      </button>
                      <Link to="/thank-you">
                        Talk to an iOS architect
                      </Link>
                    </div>

                    {pdfError && (
                      <p className="id-ios-error" role="alert">
                        {pdfError}
                      </p>
                    )}

                    <p className="id-ios-footnote">
                      Scores are indicative rule-based fit values, not probabilities. Confirm the
                      technical approach during discovery.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
