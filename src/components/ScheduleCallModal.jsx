import { useEffect, useRef, useState, useCallback } from 'react'

const CALENDLY_EMBED_URL =
  'https://calendly.com/inceptivesdigital-info/30min?embed_type=Inline&embed_domain=1'
const CALENDLY_DIRECT_URL = 'https://calendly.com/inceptivesdigital-info/30min'
const TIMEOUT_MS = 15000

export default function ScheduleCallModal() {
  const [isRendered, setIsRendered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'loaded' | 'error'
  const [iframeSrc, setIframeSrc] = useState('')
  const [reloadKey, setReloadKey] = useState(0)
  const [iframeHeight, setIframeHeight] = useState(700)

  const popupRef = useRef(null)
  const closeBtnRef = useRef(null)
  const retryBtnRef = useRef(null)
  const previousFocusRef = useRef(null)
  const loadTimerRef = useRef(null)
  const closingTimerRef = useRef(null)
  const attemptRef = useRef(0)
  const statusRef = useRef(status)
  statusRef.current = status

  const clearLoadTimer = useCallback(() => {
    if (loadTimerRef.current !== null) {
      window.clearTimeout(loadTimerRef.current)
      loadTimerRef.current = null
    }
  }, [])

  const startCalendarLoad = useCallback(
    (forceReload = false) => {
      clearLoadTimer()

      if (!forceReload && statusRef.current === 'loaded' && iframeSrc) {
        return
      }

      const currentAttempt = ++attemptRef.current
      setStatus('loading')

      if (forceReload) {
        setReloadKey((k) => k + 1)
      }
      setIframeSrc(CALENDLY_EMBED_URL)

      loadTimerRef.current = window.setTimeout(() => {
        if (currentAttempt === attemptRef.current && statusRef.current !== 'loaded') {
          setStatus('error')
          window.requestAnimationFrame(() => {
            retryBtnRef.current?.focus()
          })
        }
      }, TIMEOUT_MS)
    },
    [clearLoadTimer, iframeSrc]
  )

  const openPopup = useCallback(() => {
    if (closingTimerRef.current !== null) {
      window.clearTimeout(closingTimerRef.current)
      closingTimerRef.current = null
    }

    previousFocusRef.current = document.activeElement
    setIsRendered(true)
    document.body.classList.add('schedule-popup-open')

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsActive(true)
        closeBtnRef.current?.focus({ preventScroll: true })
      })
    })

    if (statusRef.current === 'loaded' && iframeSrc) {
      // Reuse already-loaded Calendly iframe
    } else {
      startCalendarLoad(statusRef.current === 'error')
    }
  }, [iframeSrc, startCalendarLoad])

  const closePopup = useCallback(() => {
    setIsActive(false)
    document.body.classList.remove('schedule-popup-open')
    clearLoadTimer()
    attemptRef.current += 1

    if (
      previousFocusRef.current &&
      typeof previousFocusRef.current.focus === 'function' &&
      previousFocusRef.current.isConnected
    ) {
      previousFocusRef.current.focus({ preventScroll: true })
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    closingTimerRef.current = window.setTimeout(
      () => {
        setIsRendered(false)
        closingTimerRef.current = null
      },
      reducedMotion ? 0 : 400
    )
  }, [clearLoadTimer])

  const handleIframeLoad = useCallback(() => {
    if (!iframeSrc) return
    clearLoadTimer()
    setStatus('loaded')
  }, [clearLoadTimer, iframeSrc])

  const handleRetry = useCallback(() => {
    startCalendarLoad(true)
    closeBtnRef.current?.focus()
  }, [startCalendarLoad])

  // Global click delegation: activates on .openpop-shedule and every "Schedule A ..." button/link site-wide
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      // Ignore clicks inside the popup itself
      if (target.closest('#schedulePopup')) return

      const classTrigger = target.closest('.openpop-shedule')
      if (classTrigger) {
        event.preventDefault()
        event.stopPropagation()
        openPopup()
        return
      }

      const clickable = target.closest('a, button')
      if (!clickable) return

      const label = (clickable.textContent || '').replace(/\s+/g, ' ').trim()
      if (
        /\bschedule\s+a\b/i.test(label) ||
        /\bbook\s+a\s+(?:free\s+)?strategy\s+consultation\b/i.test(label)
      ) {
        event.preventDefault()
        event.stopPropagation()
        openPopup()
      }
    }

    // Use capture phase so React Router <Link> or anchor #contact navigation is intercepted cleanly
    document.addEventListener('click', handleDocumentClick, true)
    return () => {
      document.removeEventListener('click', handleDocumentClick, true)
    }
  }, [openPopup])

  // Escape key & focus trap while modal is active
  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closePopup()
        return
      }
      if (event.key !== 'Tab' || !popupRef.current) return

      const focusable = Array.from(
        popupRef.current.querySelectorAll('button:not([disabled]), a[href], iframe:not([tabindex="-1"])')
      ).filter((el) => !el.closest('[hidden]') && el.getClientRects().length > 0)

      if (!focusable.length) {
        event.preventDefault()
        closeBtnRef.current?.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && (document.activeElement === first || !popupRef.current.contains(document.activeElement))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || !popupRef.current.contains(document.activeElement))) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive, closePopup])

  // Listen to Calendly's height messages so popup fits cleanly with zero inner scroll
  useEffect(() => {
    const handleCalendlyMessage = (e) => {
      if (
        e.origin &&
        e.origin.includes('calendly.com') &&
        e.data &&
        e.data.event === 'calendly.page_height'
      ) {
        const height = parseInt(e.data.payload?.height, 10)
        if (height && !isNaN(height)) {
          setIframeHeight(Math.max(660, Math.min(height, 780)))
        }
      }
    }

    window.addEventListener('message', handleCalendlyMessage)
    return () => window.removeEventListener('message', handleCalendlyMessage)
  }, [])

  // Cleanup timers & body lock on unmount
  useEffect(() => {
    return () => {
      clearLoadTimer()
      if (closingTimerRef.current !== null) {
        window.clearTimeout(closingTimerRef.current)
      }
      document.body.classList.remove('schedule-popup-open')
    }
  }, [clearLoadTimer])

  const popupClasses = [
    'schedule-popup',
    isActive ? 'active' : '',
    status === 'loaded' ? 'calendly-loaded' : '',
    status === 'error' ? 'calendly-error' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <style>{`
        #schedulePopup[hidden], #schedulePopup .calendly-load-error[hidden] { display: none !important; }
        #schedulePopup {
          position: fixed;
          inset: 0;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease, visibility 0.35s ease;
        }
        #schedulePopup.active {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }
        #schedulePopup .schedule-popup-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        #schedulePopup.active .schedule-popup-overlay { opacity: 1; }
        #schedulePopup .schedule-popup-box {
          position: relative;
          z-index: 2;
          width: 96%;
          max-width: 1160px;
          max-height: 94vh;
          background: #191919;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
          opacity: 0;
          transform: translateY(30px) scale(0.96);
          transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        #schedulePopup.active .schedule-popup-box {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        #schedulePopup .schedule-popup-close {
          position: absolute;
          top: 10px;
          right: 18px;
          z-index: 10;
          width: 40px;
          height: 40px;
          padding: 0 !important;
          border: 0;
          border-radius: 50%;
          background: transparent !important;
          color: #fff;
          font-size: 30px;
          line-height: 36px;
          text-align: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.25s ease 0.15s, transform 0.25s ease 0.15s;
        }
        #schedulePopup.active .schedule-popup-close {
          opacity: 1;
          transform: scale(1);
        }
        #schedulePopup .schedule-popup-close:hover {
          background: transparent !important;
          transform: scale(1.05) rotate(90deg);
        }
        #schedulePopup .schedule-popup-header {
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 60px 0 30px;
          background: #191919;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        #schedulePopup .schedule-popup-header h2 {
          margin: 0;
          color: #fff;
          font-size: 22px !important;
          line-height: 1.2 !important;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        #schedulePopup .schedule-popup-content {
          position: relative;
          width: 100%;
          min-height: 660px;
          max-height: calc(94vh - 60px);
          background: #ffffff;
          overflow: hidden;
        }
        #schedulePopup .schedule-popup-content iframe {
          display: block;
          width: 100%;
          min-width: 1080px;
          border: 0;
          overflow: hidden;
          position: relative;
          z-index: 2;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.25s ease;
          background: #ffffff;
        }
        @media (max-width: 1023px) {
          #schedulePopup .schedule-popup-content {
            overflow-y: auto;
          }
          #schedulePopup .schedule-popup-content iframe {
            min-width: 0;
          }
        }
        #schedulePopup.calendly-loaded .schedule-popup-content iframe {
          opacity: 1;
          visibility: visible;
        }
        #schedulePopup .calendly-loader {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          background: #191919;
          color: #fff;
          z-index: 3;
          font-size: 15px;
        }
        #schedulePopup .calendly-spinner {
          width: 38px;
          height: 38px;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top-color: #00ce44;
          border-radius: 50%;
          animation: idCalendlySpin 0.8s linear infinite;
        }
        @keyframes idCalendlySpin {
          to { transform: rotate(360deg); }
        }
        #schedulePopup.calendly-loaded .calendly-loader,
        #schedulePopup.calendly-error .calendly-loader {
          display: none;
        }
        #schedulePopup .calendly-load-error {
          position: absolute;
          inset: 0;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 25px;
          text-align: center;
          background: #191919;
          color: #fff;
        }
        #schedulePopup .calendly-load-error strong { font-size: 19px; }
        #schedulePopup .calendly-load-error p {
          margin: 0;
          max-width: 420px;
          color: #ccc;
          font-size: 14px;
          line-height: 1.6;
        }
        #schedulePopup .calendly-error-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;
        }
        #schedulePopup .calendly-error-actions button,
        #schedulePopup .calendly-error-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 10px 20px;
          border: 1px solid #00ce44;
          border-radius: 6px;
          background: #00ce44;
          color: #101010;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
        }
        #schedulePopup .calendly-error-actions a {
          background: transparent;
          color: #fff;
        }
        #schedulePopup :focus-visible {
          outline: 2px solid #00ce44;
          outline-offset: 3px;
        }
        body.schedule-popup-open { overflow: hidden; }
        @media (max-width: 767px) {
          #schedulePopup .schedule-popup-box {
            width: 95%;
            height: 92vh;
            border-radius: 10px;
          }
          #schedulePopup .schedule-popup-header {
            height: 60px;
            padding: 0 60px 0 20px;
          }
          #schedulePopup .schedule-popup-header h2 {
            font-size: 20px !important;
          }
          #schedulePopup .schedule-popup-content {
            height: calc(100% - 60px);
          }
          #schedulePopup .schedule-popup-close {
            top: 12px;
            right: 12px;
            width: 36px;
            height: 36px;
            font-size: 27px;
            line-height: 32px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #schedulePopup, #schedulePopup * {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <div
        id="schedulePopup"
        ref={popupRef}
        className={popupClasses}
        hidden={!isRendered}
        aria-hidden={!isActive}
        role="dialog"
        aria-modal="true"
        aria-labelledby="id-schedule-title"
        tabIndex={-1}
      >
        <div
          className="schedule-popup-overlay"
          aria-hidden="true"
          onClick={closePopup}
        />
        <div className="schedule-popup-box" role="document">
          <button
            ref={closeBtnRef}
            type="button"
            className="schedule-popup-close"
            aria-label="Close scheduling popup"
            onClick={closePopup}
          >
            &times;
          </button>
          <div className="schedule-popup-header">
            <h2 id="id-schedule-title">Schedule a Meeting</h2>
          </div>
          <div className="schedule-popup-content">
            <div
              className="calendly-loader"
              id="idCalendlyLoader"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              hidden={status === 'loaded' || status === 'error'}
            >
              <div className="calendly-spinner" aria-hidden="true" />
              <span className="calendly-loading-text">Loading calendar...</span>
            </div>

            <div
              className="calendly-load-error"
              id="idCalendlyError"
              hidden={status !== 'error'}
              role="alert"
            >
              <strong>Calendar is taking longer than expected</strong>
              <p>Please try again, or open Calendly directly to book your meeting.</p>
              <div className="calendly-error-actions">
                <button
                  ref={retryBtnRef}
                  type="button"
                  id="idCalendlyRetry"
                  onClick={handleRetry}
                >
                  Retry
                </button>
                <a
                  href={CALENDLY_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Calendly
                </a>
              </div>
            </div>

            {iframeSrc && (
              <iframe
                key={reloadKey}
                id="calendlyFrame"
                src={iframeSrc}
                title="Calendly Scheduling Page"
                loading="eager"
                scrolling="no"
                allow="fullscreen"
                style={{
                  height: `${iframeHeight}px`,
                  maxHeight: 'calc(94vh - 60px)',
                  overflow: 'hidden',
                }}
                tabIndex={status === 'loaded' ? 0 : -1}
                onLoad={handleIframeLoad}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
