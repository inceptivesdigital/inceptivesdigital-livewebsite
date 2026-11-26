/**
 * GoHighLevel / LeadConnector External Tracking Integration
 * Public configuration from THIRD_PARTY_INTEGRATIONS.md:
 * - Tracking ID: tk_92e0fd793caf40fab8810a29eb837874
 * - Location ID: ZhyAHJ7q1U5ZrlQmUBQ8
 * - SDK: https://clients.inceptivesdigital.com/js/external-tracking.js
 * - Native SDK submission endpoint: https://backend.leadconnectorhq.com/external-tracking/events
 */

export const GHL_TRACKING_ID = 'tk_92e0fd793caf40fab8810a29eb837874'
export const GHL_LOCATION_ID = 'ZhyAHJ7q1U5ZrlQmUBQ8'
export const GHL_SDK_SRC = 'https://clients.inceptivesdigital.com/js/external-tracking.js'
export const GHL_EVENTS_ENDPOINT = 'https://backend.leadconnectorhq.com/external-tracking/events'

function getAttributionParams() {
  if (typeof window === 'undefined') return {}
  try {
    const params = new URLSearchParams(window.location.search)
    const keys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'gclid',
      'fbclid',
      'msclkid',
    ]
    const attribution = {}
    keys.forEach((k) => {
      const val = params.get(k)
      if (val) attribution[k] = val
    })
    return attribution
  } catch {
    return {}
  }
}

export function ensureGhlSdkLoaded() {
  if (typeof document === 'undefined') return
  const existing = document.querySelector(`script[src="${GHL_SDK_SRC}"]`)
  if (existing) return

  const script = document.createElement('script')
  script.src = GHL_SDK_SRC
  script.async = true
  script.setAttribute('data-tracking-id', GHL_TRACKING_ID)
  document.head.appendChild(script)
}

/**
 * Sends a non-blocking external-form tracking event to GoHighLevel / LeadConnector
 * and waits briefly for acknowledgement (capped so UX never stalls).
 */
export async function trackGhlLeadSubmission({
  formName = 'Website Form',
  pageUrl = '',
  fields = {},
} = {}) {
  if (typeof window === 'undefined') return { ok: false, skipped: true }

  ensureGhlSdkLoaded()

  const email =
    fields.Email || fields.email || fields['Work Email'] || ''
  const phone =
    fields.Phone || fields.phone || fields['Phone Number'] || ''
  const firstName =
    fields['First Name'] ||
    fields.firstName ||
    (fields['Full Name'] ? String(fields['Full Name']).split(' ')[0] : '') ||
    ''
  const lastName =
    fields['Last Name'] ||
    fields.lastName ||
    (fields['Full Name']
      ? String(fields['Full Name']).split(' ').slice(1).join(' ')
      : '') ||
    ''

  const companyName =
    fields.Company || fields.company || fields['Company Name'] || ''
  const notes = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')

  const payload = {
    trackingId: GHL_TRACKING_ID,
    locationId: GHL_LOCATION_ID,
    eventType: 'form_submission',
    formName,
    url: pageUrl || window.location.href,
    referrer: document.referrer || '',
    timestamp: new Date().toISOString(),
    attribution: getAttributionParams(),
    contact: {
      firstName,
      lastName,
      email,
      phone,
      ...(companyName ? { companyName } : {}),
      ...(notes ? { notes } : {}),
    },
    fields,
  }

  // 1. If the GHL external tracking SDK exposes a global tracker, invoke it safely
  try {
    if (typeof window.leadConnectorTrack === 'function') {
      window.leadConnectorTrack('form_submission', payload)
    } else if (window.GHL && typeof window.GHL.track === 'function') {
      window.GHL.track('form_submission', payload)
    }
  } catch {
    // Ignore SDK global errors
  }

  // 2. Post to LeadConnector external-tracking events endpoint with a short timeout
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
  const timer = controller ? setTimeout(() => controller.abort(), 2500) : null

  try {
    const res = await fetch(GHL_EVENTS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      signal: controller ? controller.signal : undefined,
    })
    return { ok: res.ok, status: res.status }
  } catch {
    return { ok: false, fallback: true }
  } finally {
    if (timer) clearTimeout(timer)
  }
}
