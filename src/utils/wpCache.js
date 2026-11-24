const memoryLists = new Map()
const memoryPosts = new Map()

const STORAGE_PREFIX_LIST = 'id_wp_list_v1:'
const STORAGE_PREFIX_POST = 'id_wp_post_v1:'

export function getCachedList(key) {
  if (!key) return null
  if (memoryLists.has(key)) return memoryLists.get(key)
  try {
    const raw = sessionStorage.getItem(STORAGE_PREFIX_LIST + key)
    if (raw) {
      const parsed = JSON.parse(raw)
      memoryLists.set(key, parsed)
      return parsed
    }
  } catch {
    // ignore storage errors
  }
  return null
}

export function setCachedList(key, data) {
  if (!key || !data) return
  memoryLists.set(key, data)
  try {
    sessionStorage.setItem(STORAGE_PREFIX_LIST + key, JSON.stringify(data))
  } catch {
    // ignore storage quota errors
  }
}

export function getCachedPost(slug) {
  if (!slug) return null
  if (memoryPosts.has(slug)) return memoryPosts.get(slug)
  try {
    const raw = sessionStorage.getItem(STORAGE_PREFIX_POST + slug)
    if (raw) {
      const parsed = JSON.parse(raw)
      memoryPosts.set(slug, parsed)
      return parsed
    }
  } catch {
    // ignore storage errors
  }
  return null
}

export function setCachedPost(slug, rawWpPost) {
  if (!slug || !rawWpPost) return
  memoryPosts.set(slug, rawWpPost)
  try {
    sessionStorage.setItem(STORAGE_PREFIX_POST + slug, JSON.stringify(rawWpPost))
  } catch {
    // ignore storage quota errors
  }
}

export function seedCachedPosts(rawPosts = []) {
  if (!Array.isArray(rawPosts)) return
  for (const p of rawPosts) {
    if (p && p.slug) {
      setCachedPost(p.slug, p)
    }
  }
}
