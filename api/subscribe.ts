import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendNotificationEmail } from './_email.js';

function formatValue(value: any) {
  if (value === null || value === undefined || value === '') {
    return 'Not provided';
  }

  return String(value);
}

function buildSubscribeEmailHtml(doc: any) {
  return `
    
    <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5;">
        <h2>New Email Subscription <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p></h2>
        <h2><strong>Subscriber Email:</strong> ${formatValue(doc.email)}</h2>
        <p><strong>Source:</strong> ${formatValue(doc.source)}</p>
    </div>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {

console.log('subscribe route hit');
console.log('subscribe body:', req.body);
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('NOTIFY_TO_EMAIL:', process.env.NOTIFY_TO_EMAIL);
console.log('FROM_EMAIL:', process.env.FROM_EMAIL);

const {
  email,
  source,
  page,
  cardTitle,
} = req.body || {};

    if (!email) {
      return res.status(400).json({
        error: 'Email is required.',
      });
    }

const doc = {
  email: String(email).trim().toLowerCase(),
  source: source ? String(source).trim() : 'subscribe-form',
  page: page ? String(page).trim() : '',
  cardTitle: cardTitle ? String(cardTitle).trim() : '',
  createdAt: new Date(),
};

    await sendNotificationEmail({
      subject: 'New Email Subscription',
      html: buildSubscribeEmailHtml(doc),
    });

    return res.status(200).json({
      ok: true,
    });

  } catch (error: any) {
    console.error('subscribe error:', error);

    return res.status(500).json({
      error: error?.message || 'Server error while subscribing.',
    });
  }
}