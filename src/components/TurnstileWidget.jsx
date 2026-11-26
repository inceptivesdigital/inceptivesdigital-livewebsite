import { useEffect, useRef } from 'react'

const TURNSTILE_SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

export const TURNSTILE_SITE_KEY = (
  import.meta.env.VITE_TURNSTILE_SITE_KEY || ''
).trim()

export const isTurnstileEnabled = Boolean(TURNSTILE_SITE_KEY)

let scriptPromise = null

function loadTurnstileScript() {
  if (typeof window === 'undefined') return Promise.resolve(null)
  if (window.turnstile) return Promise.resolve(window.turnstile)
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(
      'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    )
    if (existing) {
      const check = () => {
        if (window.turnstile) resolve(window.turnstile)
        else setTimeout(check, 50)
      }
      check()
      return
    }

    const script = document.createElement('script')
    script.src = TURNSTILE_SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => {
      if (window.turnstile) resolve(window.turnstile)
      else reject(new Error('Cloudflare Turnstile failed to initialize'))
    }
    script.onerror = () => reject(new Error('Failed to load Cloudflare Turnstile'))
    document.head.appendChild(script)
  })

  return scriptPromise
}

export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  theme = 'dark',
  size = 'normal',
  resetKey = 0,
  className = '',
}) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const callbacksRef = useRef({ onVerify, onExpire, onError })
  callbacksRef.current = { onVerify, onExpire, onError }

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !containerRef.current) return

    let cancelled = false

    loadTurnstileScript()
      .then((turnstile) => {
        if (cancelled || !turnstile || !containerRef.current) return
        if (widgetIdRef.current !== null) {
          try {
            turnstile.remove(widgetIdRef.current)
          } catch {
            // Ignore cleanup errors
          }
          widgetIdRef.current = null
        }

        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme,
          size,
          callback: (token) => callbacksRef.current.onVerify?.(token),
          'expired-callback': () => callbacksRef.current.onExpire?.(),
          'error-callback': () => callbacksRef.current.onError?.(),
        })
      })
      .catch(() => {
        callbacksRef.current.onError?.()
      })

    return () => {
      cancelled = true
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          // Ignore cleanup errors
        }
        widgetIdRef.current = null
      }
    }
  }, [theme, size])

  useEffect(() => {
    if (resetKey > 0 && widgetIdRef.current !== null && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current)
      } catch {
        // Ignore reset errors
      }
    }
  }, [resetKey])

  if (!TURNSTILE_SITE_KEY) return null

  return (
    <div className={className}>
      <div ref={containerRef} />
    </div>
  )
}
