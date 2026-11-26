/**
 * Vercel Serverless Function: Verify Cloudflare Turnstile token
 * POST /api/verify-turnstile
 * Body: { token: string }
 * Env: TURNSTILE_SECRET_KEY
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY
  if (!secretKey) {
    return res.status(500).json({
      success: false,
      error: 'TURNSTILE_SECRET_KEY is not configured on the server.',
    })
  }

  const token = req.body?.token
  if (!token || typeof token !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Missing Turnstile verification token.',
    })
  }

  const forwardedFor = req.headers['x-forwarded-for']
  const remoteIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : typeof forwardedFor === 'string'
      ? forwardedFor.split(',')[0].trim()
      : req.socket?.remoteAddress

  try {
    const body = new URLSearchParams({
      secret: secretKey,
      response: token,
      ...(remoteIp ? { remoteip: remoteIp } : {}),
    })

    const verifyRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      }
    )

    const data = await verifyRes.json()

    if (!data.success) {
      return res.status(403).json({
        success: false,
        error: 'Security verification failed. Please try again.',
        codes: data['error-codes'] || [],
      })
    }

    return res.status(200).json({ success: true })
  } catch {
    return res.status(502).json({
      success: false,
      error: 'Unable to reach Cloudflare Turnstile verification service.',
    })
  }
}
