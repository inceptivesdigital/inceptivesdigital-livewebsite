/**
 * First-touch landing attribution helper.
 * Mirrors the storage keys and cookie used in custom-mobile-application-development/index.html
 * without fabricating any missing attribution values.
 */

const LANDING_QUERY_KEY = 'inceptivesdigital_landing_query'
const LANDING_HREF_KEY = 'inceptivesdigital_landing_href'
const UTM_STORAGE_KEY = 'inceptivesdigital_utm'
const LANDING_QUERY_COOKIE = 'id_landing_query'

const ATTRIBUTION_KEYS = [
  'gclid',
  'gbraid',
  'wbraid',
  'gad_source',
  'msclkid',
  'fbclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
]

function normalizeSearch(search) {
  if (!search) return ''
  return search.charAt(0) === '?' ? search : `?${search}`
}

function readStorage(storage, key) {
  try {
    return storage?.getItem(key) || ''
  } catch {
    return ''
  }
}

function readCookie(name) {
  if (typeof document === 'undefined') return ''
  try {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${escaped}=([^;]*)`))
    return match ? decodeURIComponent(match[1]) : ''
  } catch {
    return ''
  }
}

export function captureLandingAttribution() {
  if (typeof window === 'undefined') return

  const search = window.location.search
  const href = window.location.href

  if (href) {
    try {
      if (!readStorage(window.sessionStorage, LANDING_HREF_KEY)) {
        window.sessionStorage.setItem(LANDING_HREF_KEY, href)
      }
    } catch {
      // Ignore storage errors
    }
    try {
      if (!readStorage(window.localStorage, LANDING_HREF_KEY)) {
        window.localStorage.setItem(LANDING_HREF_KEY, href)
      }
    } catch {
      // Ignore storage errors
    }
  }

  if (search) {
    const normalized = normalizeSearch(search)
    try {
      if (!readStorage(window.sessionStorage, LANDING_QUERY_KEY)) {
        window.sessionStorage.setItem(LANDING_QUERY_KEY, normalized)
      }
    } catch {
      // Ignore storage errors
    }
    try {
      if (!readStorage(window.localStorage, LANDING_QUERY_KEY)) {
        window.localStorage.setItem(LANDING_QUERY_KEY, normalized)
      }
    } catch {
      // Ignore storage errors
    }
    try {
      const domain = window.location.hostname.includes('inceptivesdigital.com')
        ? '; domain=.inceptivesdigital.com'
        : ''
      document.cookie = `${LANDING_QUERY_COOKIE}=${encodeURIComponent(
        normalized
      )}; path=/; max-age=2592000; SameSite=Lax${domain}`
    } catch {
      // Ignore cookie errors
    }

    try {
      if (!readStorage(window.sessionStorage, UTM_STORAGE_KEY)) {
        const params = new URLSearchParams(normalized)
        const utmData = {}
        params.forEach((value, key) => {
          if (value) utmData[key] = value
        })
        if (Object.keys(utmData).length) {
          window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData))
          window.localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData))
        }
      }
    } catch {
      // Ignore storage errors
    }
  }
}

function resolveLandingSearch() {
  if (typeof window === 'undefined') return ''
  const stored =
    readStorage(window.sessionStorage, LANDING_QUERY_KEY) ||
    readStorage(window.localStorage, LANDING_QUERY_KEY) ||
    readCookie(LANDING_QUERY_COOKIE)
  if (stored) return normalizeSearch(stored)

  const landingHref =
    readStorage(window.sessionStorage, LANDING_HREF_KEY) ||
    readStorage(window.localStorage, LANDING_HREF_KEY)
  if (landingHref) {
    try {
      const landingSearch = new URL(landingHref).search
      if (landingSearch) return landingSearch
    } catch {
      // Ignore invalid URL
    }
  }

  return window.location.search || ''
}

function getGaClientId() {
  const raw = readCookie('_ga')
  const match = raw.match(/GA\d+\.\d+\.(\d+\.\d+)/)
  return match ? match[1] : ''
}

export function getLeadAttribution() {
  if (typeof window === 'undefined') return {}

  const search = resolveLandingSearch()
  const params = new URLSearchParams(search)
  const out = {}

  for (const key of ATTRIBUTION_KEYS) {
    const val = params.get(key)
    if (val) out[key] = val
  }

  const landingPage =
    readStorage(window.sessionStorage, LANDING_HREF_KEY) ||
    readStorage(window.localStorage, LANDING_HREF_KEY)
  if (landingPage) out.landing_page = landingPage
  if (search) out.landing_query = search

  const gaClientId = getGaClientId()
  if (gaClientId) out.ga_client_id = gaClientId

  if (typeof document !== 'undefined' && document.referrer) {
    out.referrer = document.referrer
  }

  return out
}
