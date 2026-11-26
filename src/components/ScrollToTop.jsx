import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Ensure images decode off the main thread via a single idle pass per route change
  useEffect(() => {
    const applyAsyncDecoding = () => {
      const imgs = document.querySelectorAll('img:not([decoding])')
      imgs.forEach((img) => {
        img.setAttribute('decoding', 'async')
      })
    }

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(applyAsyncDecoding, { timeout: 300 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timerId = window.setTimeout(applyAsyncDecoding, 120)
    return () => window.clearTimeout(timerId)
  }, [pathname])

  return null
}
