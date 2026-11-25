import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { triggerCallRailSwap } from '../utils/callrail'
import { trackPageView } from '../utils/conversionTracking'

/**
 * Runs inside <BrowserRouter> to keep third-party SPA integrations synchronized
 * across client-side route changes:
 * - Re-swaps CallRail dynamic phone numbers on each page navigation
 * - Emits virtual_page_view to GTM dataLayer on route transitions
 */
export default function ThirdPartyRouteTracker() {
  const { pathname, search } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    const cancelSwap = triggerCallRailSwap()

    // Skip firing a duplicate virtual_page_view on initial hard load (GTM handles initial PageView)
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      const timer = window.setTimeout(() => {
        trackPageView(`${pathname}${search}`, document.title)
      }, 150)
      return () => {
        cancelSwap()
        window.clearTimeout(timer)
      }
    }

    return cancelSwap
  }, [pathname, search])

  return null
}
