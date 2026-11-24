import { useEffect } from 'react'

/**
 * Injects a JSON-LD <script type="application/ld+json"> into document.head
 * and cleans it up when the page unmounts so SPA routes never accumulate stale schemas.
 */
export function useJsonLdSchema(schema, id) {
  useEffect(() => {
    if (!schema || !id) return
    let script = document.getElementById(id)
    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)

    return () => {
      const existing = document.getElementById(id)
      if (existing) existing.remove()
    }
  }, [schema, id])
}
