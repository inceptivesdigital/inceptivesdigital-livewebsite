/**
 * CallRail Integration Helper
 * Company: 691547027 | Installation: 8acc5c6cc37011b7cee7/12
 *
 * IMPORTANT: CallRail swap.js is installed by GTM (GTM-5BV286F5).
 * Do NOT inject a second swap.js script from website code.
 * This helper only calls the already-loaded CallRail SDK for SPA route re-swaps
 * and form capture correlation.
 */

export const CALLRAIL_COMPANY_ID = '691547027'
export const CALLRAIL_INSTALLATION = '8acc5c6cc37011b7cee7/12'

function runSwapOnce() {
  if (typeof window === 'undefined') return false
  try {
    if (window.CallTrk && typeof window.CallTrk.swap === 'function') {
      window.CallTrk.swap()
      return true
    }
  } catch {
    // Ignore CallRail runtime errors
  }
  return false
}

/**
 * Re-triggers CallRail dynamic number swapping after React Router navigation
 * (with delayed retries so lazy-loaded page content also swaps cleanly).
 */
export function triggerCallRailSwap() {
  if (typeof window === 'undefined') return () => {}

  runSwapOnce()
  const t1 = window.setTimeout(runSwapOnce, 450)
  const t2 = window.setTimeout(runSwapOnce, 1400)

  return () => {
    window.clearTimeout(t1)
    window.clearTimeout(t2)
  }
}

/**
 * Notifies the GTM-loaded CallRail SDK of a form submission if CallRail exposes
 * a capture method, and returns correlation state without blocking UX.
 */
export function notifyCallRailFormCapture({ formName = 'Website Form', pageUrl = '', fields = {} } = {}) {
  if (typeof window === 'undefined') return { ok: false, skipped: true }

  try {
    if (window.CallTrk) {
      if (typeof window.CallTrk.captureForm === 'function') {
        window.CallTrk.captureForm({ formName, pageUrl, ...fields })
        return { ok: true, method: 'captureForm' }
      }
      if (typeof window.CallTrk.swap === 'function') {
        window.CallTrk.swap()
      }
      return { ok: true, method: 'sdk_present' }
    }
  } catch {
    // Ignore CallRail SDK errors
  }

  return { ok: false, sdkLoaded: false }
}
