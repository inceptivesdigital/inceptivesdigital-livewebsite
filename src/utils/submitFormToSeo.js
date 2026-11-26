import { trackGhlLeadSubmission } from './ghlTracking'
import { notifyCallRailFormCapture } from './callrail'
import { trackLeadSubmitted } from './conversionTracking'
import { isTurnstileEnabled } from '../components/TurnstileWidget'

export const SEO_RECIPIENT_EMAIL = 'seo@inceptivesdigital.com'

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

    // In local Vite-only dev (`npm run dev`), /api/* serverless functions are not served (404).
    // On Vercel (`vercel dev` or production), /api/verify-turnstile is always active.
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
 * Universal form submission helper for all forms across Inceptives Digital.
 * Follows the accepted conversion flow from THIRD_PARTY_INTEGRATIONS.md:
 *   0. Cloudflare Turnstile server-side verification (when VITE_TURNSTILE_SITE_KEY is configured)
 *   1. Email delivery to seo@inceptivesdigital.com (table format)
 *   2. GoHighLevel / LeadConnector external-tracking acknowledgement
 *   3. CallRail form capture handling
 *   4. Website `lead_submitted` dataLayer event (triggers GTM GA4 generate_lead, Meta Lead, OpenAI lead_created)
 */
export async function submitFormToSeo({
  formName = 'Website Form',
  subject = '',
  replyTo = '',
  fields = {},
  wpAction = '',
  wpFormData = null,
  turnstileToken = '',
} = {}) {
  const verification = await verifyTurnstileToken(turnstileToken)
  if (!verification.ok) {
    return { ok: false, error: verification.error }
  }
  const pageUrl =
    typeof window !== 'undefined' ? window.location.href : 'https://inceptivesdigital.com'
  const emailSubject =
    subject || `${formName} Submission - Inceptives Digital`

  const payload = {
    _subject: emailSubject,
    _template: 'table',
    _captcha: 'false',
    ...(replyTo ? { _replyto: replyTo } : {}),
    Recipient: SEO_RECIPIENT_EMAIL,
    Form: formName,
    'Page URL': pageUrl,
    ...fields,
  }

  const requests = []

  // 1. FormSubmit AJAX endpoint -> seo@inceptivesdigital.com
  requests.push(
    fetch(`https://formsubmit.co/ajax/${SEO_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch(() => null)
  )

  // 2. WordPress admin-ajax fallback (when hosted alongside WP or proxied)
  if (wpAction) {
    try {
      const fd = wpFormData instanceof FormData ? wpFormData : new FormData()
      if (!(wpFormData instanceof FormData)) {
        fd.append('action', wpAction)
        fd.append('recipient', SEO_RECIPIENT_EMAIL)
        Object.entries(fields).forEach(([k, v]) => {
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

  // 3. GoHighLevel / LeadConnector external tracking acknowledgement (capped at 2.5s)
  requests.push(
    trackGhlLeadSubmission({
      formName,
      pageUrl,
      fields,
    }).catch(() => null)
  )

  await Promise.allSettled(requests)

  // 4. CallRail form capture handling (uses GTM-loaded CallTrk SDK)
  notifyCallRailFormCapture({
    formName,
    pageUrl,
    fields,
  })

  // 5. Emit canonical `lead_submitted` dataLayer event for GTM (GA4, Meta, OpenAI)
  trackLeadSubmitted({
    formName,
    pageUrl,
    subject: emailSubject,
    fields,
  })

  return { ok: true, recipient: SEO_RECIPIENT_EMAIL }
}
