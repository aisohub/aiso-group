/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Accepts form submissions from the AISO Group contact page and forwards
 * them via Resend.
 *
 * Required env vars (Cloudflare Pages dashboard > Settings > Environment variables):
 *   RESEND_API_KEY       — API key from resend.com
 *
 * Optional env vars (have sensible defaults):
 *   RESEND_FROM_DOMAIN   — Verified Resend sending domain.
 *                          Default: notifications.aiso-hub.com (already verified).
 *   RESEND_TO_EMAIL      — Destination inbox for form submissions.
 *                          Default: hello@aisogroup.com
 */
export async function onRequestPost(context) {
  const { request, env } = context;

  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) {
    return jsonResponse({ error: 'Expected application/json' }, 415);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400);
  }

  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return jsonResponse({ error: 'Missing required fields: name, email, message' }, 422);
  }

  if (!env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return jsonResponse({ error: 'Service temporarily unavailable' }, 503);
  }

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    message,
  ]
    .filter((l) => l !== null)
    .join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `AISO Group Contact <contact@${env.RESEND_FROM_DOMAIN ?? 'notifications.aiso-hub.com'}>`,
      to: [env.RESEND_TO_EMAIL ?? 'hello@aisogroup.com'],
      reply_to: email,
      subject: `AISO Group inquiry from ${name}`,
      text: emailBody,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', res.status, err);
    return jsonResponse({ error: 'Failed to send message' }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
