/**
 * Conversion & Analytics Tracking Helper (GTM dataLayer + optional gtag)
 *
 * Accepted conversion flow (from THIRD_PARTY_INTEGRATIONS.md):
 *   form validation/delivery -> GHL acknowledgement -> CallRail capture
 *   -> website `lead_submitted` dataLayer event
 *   -> GTM fires GA4 `generate_lead`, Meta `Lead`, and OpenAI `lead_created`.
 *
 * Note: Do NOT install a duplicate GA4 library here. GTM (GTM-5BV286F5) manages
 * GA4 (G-5HF96FEJHZ), Google Ads (AW-18137474214), Meta Pixel (1311118190948804),
 * OpenAI Ads Pixel (21BtPQD1FG7KoRGMsezNw5), CallRail, LiveChat, and Clarity.
 */

export const GTM_CONTAINER_ID = 'GTM-5BV286F5'

function getDataLayer() {
  if (typeof window === 'undefined') return null
  window.dataLayer = window.dataLayer || []
  return window.dataLayer
}

/**
 * Pushes the canonical `lead_submitted` event to GTM's dataLayer.
 */
export function trackLeadSubmitted({
  formName = 'Website Form',
  pageUrl = '',
  subject = '',
  fields = {},
} = {}) {
  const dataLayer = getDataLayer()
  if (!dataLayer) return

  const resolvedUrl = pageUrl || window.location.href
  const pagePath = window.location.pathname || '/'

  dataLayer.push({
    event: 'lead_submitted',
    form_name: formName,
    page_url: resolvedUrl,
    page_path: pagePath,
    subject: subject || fields.Subject || '',
    lead_source: 'website',
  })
}

/**
 * Pushes SPA virtual page_view events on React Router navigation so GTM tags
 * can track client-side route transitions cleanly.
 */
export function trackPageView(pathname = '', title = '') {
  const dataLayer = getDataLayer()
  if (!dataLayer) return

  const pagePath = pathname || window.location.pathname
  const pageLocation = window.location.href
  const pageTitle = title || document.title

  dataLayer.push({
    event: 'virtual_page_view',
    page_path: pagePath,
    page_location: pageLocation,
    page_title: pageTitle,
  })
}

/**
 * Generic interaction event helper that emits through an existing window.gtag
 * if loaded by GTM, without installing a second Google tag library.
 */
export function trackLandingEvent(action, params = {}) {
  if (typeof window === 'undefined' || !action) return

  const dataLayer = getDataLayer()
  if (dataLayer) {
    dataLayer.push({
      event: action,
      ...params,
    })
  }

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, params)
    }
  } catch {
    // Ignore gtag errors
  }
}
