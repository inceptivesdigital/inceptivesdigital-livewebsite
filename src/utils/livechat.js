/**
 * LiveChat UI Helper (License 19722747)
 * LiveChat tracking.js is loaded via GTM (GTM-5BV286F5).
 * Use these helpers to safely control the existing LiveChat widget from React UI.
 */

export const LIVECHAT_LICENSE_ID = 19722747

export function isLiveChatReady() {
  return typeof window !== 'undefined' && Boolean(window.LiveChatWidget)
}

export function openLiveChat() {
  if (!isLiveChatReady()) return false
  try {
    window.LiveChatWidget.call('maximize')
    return true
  } catch {
    return false
  }
}

export function minimizeLiveChat() {
  if (!isLiveChatReady()) return false
  try {
    window.LiveChatWidget.call('minimize')
    return true
  } catch {
    return false
  }
}
