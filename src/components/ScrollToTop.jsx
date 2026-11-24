import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Ensure every image decodes asynchronously off the main thread for faster rendering
  useEffect(() => {
    const optimizeImages = (root = document) => {
      const imgs = root.querySelectorAll ? root.querySelectorAll('img:not([decoding])') : []
      imgs.forEach((img) => {
        img.setAttribute('decoding', 'async')
      })
    }

    optimizeImages()

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.tagName === 'IMG' && !node.hasAttribute('decoding')) {
            node.setAttribute('decoding', 'async')
          } else {
            optimizeImages(node)
          }
        })
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return null
}
