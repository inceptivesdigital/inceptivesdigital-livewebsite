import { trackGhlLeadSubmission } from './ghlTracking'
import { notifyCallRailFormCapture } from './callrail'
import { trackLeadSubmitted } from './conversionTracking'
import { getLeadAttribution } from './attribution'
import { isTurnstileEnabled } from '../components/TurnstileWidget'

export const SEO_RECIPIENT_EMAIL = 'seo@inceptivesdigital.com'

const SENSITIVE_FIELD_RE =
  /^(turnstiletoken|cf-turnstile-response|captcha|password|pass|secret|token|authorization)$/i

const inFlightFormKeys = new Set()

function createSubmissionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

function sanitizeClientFields(fields = {}) {
  const clean = {}
  for (const [k, v] of Object.entries(fields || {})) {
    if (!k || SENSITIVE_FIELD_RE.test(k.trim())) continue
    if (v !== undefined && v !== null) {
      clean[k] = v
    }
  }
  return clean
}

export async function verifyTurnstileToken(token) {
  if (!isTurnstileEnabled) return { ok: true, skipped: true }
  if (!token) {
    return {
      ok: false,
      error: 'Please complete the security verification before submitting.',
    }
  }

  try {
    const res = await fetch('/api/verify-turnstile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })

    if (
      res.status === 404 &&
      typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1')
    ) {
      return { ok: true, devFallback: true }
    }

    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.success) {
      return {
        ok: false,
        error: data.error || 'Security verification failed. Please try again.',
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      error: 'Could not verify security check. Please try again.',
    }
  }
}

/**
 * Universal form submission helper for all enquiry/lead forms across Inceptives Digital.
 * Flow:
 *   0. Browser in-flight dedup + Cloudflare Turnstile check (when enabled)
 *   1. Server-side /api/lead -> validates, deduplicates (submissionId), strips sensitive fields,
 *      and forwards to private ZAPIER_WEBHOOK_URL (awaits Zapier acceptance)
 *   2. Only after Zapier acceptance:
 *      - Email delivery to seo@inceptivesdigital.com (FormSubmit)
 *      - WordPress admin-ajax fallback (if wpAction)
 *      - GoHighLevel / LeadConnector external-tracking acknowledgement
 *      - CallRail form capture handling
 *      - Website `lead_submitted` dataLayer event (fired once)
 */
export async function submitFormToSeo({
  formId = 'website-form',
  formName = 'Website Form',
  subject = '',
  replyTo = '',
  fields = {},
  wpAction = '',
  wpFormData = null,
  turnstileToken = '',
  submissionId = '',
} = {}) {
  const cleanFields = sanitizeClientFields(fields)
  const dedupKey = `${formId}:${cleanFields.Email || cleanFields.email || cleanFields.Phone || cleanFields.phone || ''}`
  if (inFlightFormKeys.has(dedupKey)) {
    return {
      ok: false,
      duplicate: true,
      error: 'Your submission is already being processed. Please wait a moment.',
    }
  }

  inFlightFormKeys.add(dedupKey)

  try {
    const verification = await verifyTurnstileToken(turnstileToken)
    if (!verification.ok) {
      return { ok: false, error: verification.error }
    }

    const pageUrl =
      typeof window !== 'undefined' ? window.location.href : 'https://inceptivesdigital.com'
    const submittedAt = new Date().toISOString()
    const resolvedSubmissionId = submissionId || createSubmissionId()
    const attribution = getLeadAttribution()

    // 1. Server-side Zapier Catch Hook delivery (must succeed before thank-you / conversion events)
    try {
      const leadRes = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionId: resolvedSubmissionId,
          formId,
          formName,
          sourceUrl: pageUrl,
          submittedAt,
          fields: cleanFields,
          attribution,
          turnstileRequired: isTurnstileEnabled,
          ...(turnstileToken ? { turnstileToken } : {}),
        }),
      })

      const leadData = await leadRes.json().catch(() => ({}))
      if (!leadRes.ok || !leadData.ok) {
        return {
          ok: false,
          error:
            leadData.error ||
            'We could not submit your enquiry right now. Please try again.',
        }
      }
    } catch {
      return {
        ok: false,
        error: 'Network error while submitting your enquiry. Please try again.',
      }
    }

    // 2. Downstream non-blocking integrations (run only after Zapier accepted)
    const emailSubject =
      subject || `${formName} Submission - Inceptives Digital`

    const emailPayload = {
      _subject: emailSubject,
      _template: 'table',
      _captcha: 'false',
      ...(replyTo ? { _replyto: replyTo } : {}),
      Recipient: SEO_RECIPIENT_EMAIL,
      Form: formName,
      'Form ID': formId,
      'Submission ID': resolvedSubmissionId,
      'Page URL': pageUrl,
      ...cleanFields,
    }

    const requests = [
      fetch(`https://formsubmit.co/ajax/${SEO_RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(emailPayload),
      }).catch(() => null),
    ]

    if (wpAction) {
      try {
        const fd = wpFormData instanceof FormData ? wpFormData : new FormData()
        if (!(wpFormData instanceof FormData)) {
          fd.append('action', wpAction)
          fd.append('recipient', SEO_RECIPIENT_EMAIL)
          Object.entries(cleanFields).forEach(([k, v]) => {
            if (v !== undefined && v !== null) fd.append(k, String(v))
          })
        }
        requests.push(
          fetch('https://nextincep.wpenginepowered.com/wp-admin/admin-ajax.php', {
            method: 'POST',
            body: fd,
          }).catch(() => null)
        )
      } catch {
        // Ignore FormData errors
      }
    }

    requests.push(
      trackGhlLeadSubmission({
        formName,
        pageUrl,
        fields: cleanFields,
      }).catch(() => null)
    )

    await Promise.allSettled(requests)

    notifyCallRailFormCapture({
      formName,
      pageUrl,
      fields: cleanFields,
    })

    trackLeadSubmitted({
      formName,
      pageUrl,
      subject: emailSubject,
      fields: cleanFields,
    })

    return {
      ok: true,
      zapierAccepted: true,
      submissionId: resolvedSubmissionId,
      recipient: SEO_RECIPIENT_EMAIL,
    }
  } finally {
    inFlightFormKeys.delete(dedupKey)
  }
}
