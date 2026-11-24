export const SEO_RECIPIENT_EMAIL = 'seo@inceptivesdigital.com'

/**
 * Universal form submission helper for all forms across Inceptives Digital.
 * Delivers structured table submissions to seo@inceptivesdigital.com.
 */
export async function submitFormToSeo({
  formName = 'Website Form',
  subject = '',
  replyTo = '',
  fields = {},
  wpAction = '',
  wpFormData = null,
} = {}) {
  const pageUrl =
    typeof window !== 'undefined' ? window.location.href : 'https://inceptivesdigital.com'
  const emailSubject =
    subject || `${formName} Submission - Inceptives Digital`

  const payload = {
    _subject: emailSubject,
    _template: 'table',
    _captcha: 'false',
    ...(replyTo ? { _replyto: replyTo } : {}),
    Recipient: SEO_RECIPIENT_EMAIL,
    Form: formName,
    'Page URL': pageUrl,
    ...fields,
  }

  const requests = []

  // 1. FormSubmit AJAX endpoint -> seo@inceptivesdigital.com
  requests.push(
    fetch(`https://formsubmit.co/ajax/${SEO_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch(() => null)
  )

  // 2. WordPress admin-ajax fallback (when hosted alongside WP or proxied)
  if (wpAction) {
    try {
      const fd = wpFormData instanceof FormData ? wpFormData : new FormData()
      if (!(wpFormData instanceof FormData)) {
        fd.append('action', wpAction)
        fd.append('recipient', SEO_RECIPIENT_EMAIL)
        Object.entries(fields).forEach(([k, v]) => {
          if (v !== undefined && v !== null) fd.append(k, String(v))
        })
      }
      requests.push(
        fetch('https://nextincep.wpenginepowered.com/wp-admin/admin-ajax.php', {
          method: 'POST',
          body: fd,
        }).catch(() => null)
      )
    } catch {
      // Ignore FormData errors
    }
  }

  await Promise.allSettled(requests)
  return { ok: true, recipient: SEO_RECIPIENT_EMAIL }
}
