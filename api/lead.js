/**
 * Vercel Serverless Function: Validated, deduplicated lead submission -> Zapier Catch Hook
 * POST /api/lead
 * Env: ZAPIER_WEBHOOK_URL (required), TURNSTILE_SECRET_KEY (optional if Turnstile enabled)
 */

const MAX_BODY_BYTES = 32 * 1024 // 32 KB request-size limit
const DEDUP_TTL_MS = 10 * 60 * 1000 // 10 minutes
const MAX_DEDUP_ENTRIES = 1000
const ZAPIER_TIMEOUT_MS = 10000

const SENSITIVE_FIELD_RE =
  /^(turnstiletoken|cf-turnstile-response|captcha|password|pass|secret|token|authorization)$/i

const ALLOWED_HOST_RE =
  /^(localhost|127\.0\.0\.1|([a-z0-9-]+\.)*inceptivesdigital\.com|([a-z0-9-]+\.)*vercel\.app)$/i

// In-memory per-instance deduplication cache (completed & in-flight)
const submissionCache = new Map()

function pruneDedupCache(now) {
  for (const [key, entry] of submissionCache.entries()) {
    if (now - entry.ts > DEDUP_TTL_MS) {
      submissionCache.delete(key)
    }
  }
  while (submissionCache.size > MAX_DEDUP_ENTRIES) {
    const oldestKey = submissionCache.keys().next().value
    if (!oldestKey) break
    submissionCache.delete(oldestKey)
  }
}

function isAllowedOrigin(req) {
  const origin = req.headers?.origin || req.headers?.referer
  if (!origin) return true
  try {
    const { hostname } = new URL(String(origin))
    return ALLOWED_HOST_RE.test(hostname)
  } catch {
    return false
  }
}

function sanitizeValue(val, maxLen = 4000) {
  if (val === undefined || val === null) return ''
  return String(val).trim().slice(0, maxLen)
}

function sanitizeFields(rawFields) {
  if (!rawFields || typeof rawFields !== 'object' || Array.isArray(rawFields)) {
    return {}
  }
  const clean = {}
  for (const [k, v] of Object.entries(rawFields)) {
    if (!k || SENSITIVE_FIELD_RE.test(k.trim())) continue
    const val = sanitizeValue(v, 4000)
    if (val !== '') clean[k.slice(0, 120)] = val
  }
  return clean
}

function sanitizeAttribution(rawAttr) {
  if (!rawAttr || typeof rawAttr !== 'object' || Array.isArray(rawAttr)) {
    return {}
  }
  const allowedKeys = new Set([
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'gbraid',
    'wbraid',
    'gad_source',
    'msclkid',
    'fbclid',
    'ga_client_id',
    'landing_page',
    'landing_query',
    'referrer',
  ])
  const out = {}
  for (const [k, v] of Object.entries(rawAttr)) {
    if (!allowedKeys.has(k)) continue
    const val = sanitizeValue(v, 1000)
    if (val !== '') out[k] = val
  }
  return out
}

async function verifyTurnstile(token, remoteIp) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  if (!secretKey) return { ok: true, skipped: true }
  if (!token || typeof token !== 'string') {
    return {
      ok: false,
      status: 400,
      error: 'Please complete the security verification before submitting.',
    }
  }

  const body = new URLSearchParams({
    secret: secretKey,
    response: token,
    ...(remoteIp ? { remoteip: remoteIp } : {}),
  })

  const res = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    }
  )
  const data = await res.json().catch(() => ({}))
  if (!data.success) {
    return {
      ok: false,
      status: 403,
      error: 'Security verification failed. Please try again.',
    }
  }
  return { ok: true }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ ok: false, error: 'Origin not permitted.' })
  }

  const contentLength = Number(req.headers?.['content-length'] || 0)
  if (contentLength > MAX_BODY_BYTES) {
    return res.status(413).json({ ok: false, error: 'Request payload too large.' })
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL
  if (!webhookUrl) {
    return res.status(500).json({
      ok: false,
      error: 'Lead webhook is not configured on the server.',
    })
  }

  const rawBody = req.body
  if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
    return res.status(400).json({ ok: false, error: 'Invalid request body.' })
  }

  try {
    if (Buffer.byteLength(JSON.stringify(rawBody), 'utf8') > MAX_BODY_BYTES) {
      return res.status(413).json({ ok: false, error: 'Request payload too large.' })
    }
  } catch {
    return res.status(400).json({ ok: false, error: 'Malformed request payload.' })
  }

  const submissionId = sanitizeValue(rawBody.submissionId, 128)
  const formId = sanitizeValue(rawBody.formId, 128)
  const formName = sanitizeValue(rawBody.formName, 160) || 'Website Form'
  const sourceUrl = sanitizeValue(rawBody.sourceUrl, 1000)
  const submittedAt = sanitizeValue(rawBody.submittedAt, 64) || new Date().toISOString()

  if (!submissionId || !formId || !sourceUrl) {
    return res.status(400).json({
      ok: false,
      error: 'Missing required submission metadata.',
    })
  }

  const fields = sanitizeFields(rawBody.fields)
  const email =
    fields.Email || fields.email || fields['Work Email'] || ''
  const phone =
    fields.Phone || fields.phone || fields['Phone Number'] || fields['Contact Number'] || ''
  const fullName =
    fields['Full Name'] ||
    fields.full_name ||
    [fields['First Name'] || fields.first_name, fields['Last Name'] || fields.last_name]
      .filter(Boolean)
      .join(' ')
      .trim()

  if (!email && !phone && !fullName) {
    return res.status(400).json({
      ok: false,
      error: 'Please provide your contact details before submitting.',
    })
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      ok: false,
      error: 'Please enter a valid email address.',
    })
  }

  const now = Date.now()
  pruneDedupCache(now)

  const existing = submissionCache.get(submissionId)
  if (existing) {
    if (existing.status === 'pending') {
      return res.status(409).json({
        ok: false,
        error: 'This submission is already being processed.',
      })
    }
    if (existing.status === 'accepted') {
      return res.status(200).json({
        ok: true,
        zapierAccepted: true,
        duplicate: true,
        submissionId,
      })
    }
  }

  const forwardedFor = req.headers?.['x-forwarded-for']
  const remoteIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : typeof forwardedFor === 'string'
      ? forwardedFor.split(',')[0].trim()
      : req.socket?.remoteAddress

  if (process.env.TURNSTILE_SECRET_KEY && rawBody.turnstileRequired !== false) {
    const turnstileCheck = await verifyTurnstile(rawBody.turnstileToken, remoteIp)
    if (!turnstileCheck.ok) {
      return res.status(turnstileCheck.status || 403).json({
        ok: false,
        error: turnstileCheck.error,
      })
    }
  }

  const attribution = sanitizeAttribution(rawBody.attribution)

  const zapierPayload = {
    submission_id: submissionId,
    form_id: formId,
    form_name: formName,
    source_url: sourceUrl,
    URL: sourceUrl,
    submitted_at: submittedAt,
    ...(fullName ? { full_name: fullName } : {}),
    ...(fields['First Name'] || fields.first_name
      ? { first_name: fields['First Name'] || fields.first_name }
      : {}),
    ...(fields['Last Name'] || fields.last_name
      ? { last_name: fields['Last Name'] || fields.last_name }
      : {}),
    ...(email ? { email } : {}),
    ...(phone ? { phone } : {}),
    ...(fields.Company || fields.company
      ? { company: fields.Company || fields.company }
      : {}),
    ...(fields.Subject || fields.subject
      ? { subject: fields.Subject || fields.subject }
      : {}),
    ...(fields.Message || fields.message || fields['Project Details'] || fields['Project Description'] || fields.Notes
      ? {
          message:
            fields.Message ||
            fields.message ||
            fields['Project Details'] ||
            fields['Project Description'] ||
            fields.Notes,
        }
      : {}),
    ...attribution,
    ...fields,
  }

  submissionCache.set(submissionId, { status: 'pending', ts: now })

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
  const timer = controller ? setTimeout(() => controller.abort(), ZAPIER_TIMEOUT_MS) : null

  try {
    const zapRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(zapierPayload),
      signal: controller ? controller.signal : undefined,
    })

    if (!zapRes.ok) {
      submissionCache.delete(submissionId)
      return res.status(502).json({
        ok: false,
        error: 'We could not submit your enquiry right now. Please try again.',
      })
    }

    submissionCache.set(submissionId, { status: 'accepted', ts: Date.now() })
    return res.status(200).json({
      ok: true,
      zapierAccepted: true,
      submissionId,
    })
  } catch (err) {
    submissionCache.delete(submissionId)
    const isTimeout = err?.name === 'AbortError'
    return res.status(isTimeout ? 504 : 502).json({
      ok: false,
      error: isTimeout
        ? 'The submission timed out. Please try again.'
        : 'Unable to submit your enquiry right now. Please try again.',
    })
  } finally {
    if (timer) clearTimeout(timer)
  }
}
