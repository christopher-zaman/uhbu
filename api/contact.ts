import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendNotificationEmail } from './_email.js';

function formatValue(value: any) {
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  if (value === null || value === undefined || value === '') return 'Not provided';
  return String(value);
}

function buildContactEmailHtml(doc: any) {
  return `
    <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>

      <hr />

      <p><strong>Name:</strong> ${formatValue(doc.name)}</p>
      <p><strong>Email:</strong> ${formatValue(doc.email)}</p>
      <p><strong>Phone:</strong> ${formatValue(doc.phone)}</p>
      <p><strong>Subject:</strong> ${formatValue(doc.subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${formatValue(doc.message)}</p>

      <hr />

      <p><strong>SMS Consent:</strong> ${formatValue(doc.smsConsent)}</p>
      <p><strong>Page Submitted From:</strong> ${formatValue(doc.pageLocation)}</p>
    </div>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
      smsConsent,
      pageLocation,
    } = req.body || {};

    if (!name || !email || !phone || !message || !smsConsent) {
      return res.status(400).json({
        error: 'Missing required fields.',
      });
    }

    const doc = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      subject: subject ? String(subject).trim() : '',
      message: String(message).trim(),
      smsConsent: Boolean(smsConsent),
      pageLocation: pageLocation ? String(pageLocation).trim() : '',
      source: 'contact-form',
      createdAt: new Date(),
    };

    await sendNotificationEmail({
      subject: doc.subject
        ? `New Contact Form Submission - ${doc.subject}`
        : 'New Contact Form Submission',
      html: buildContactEmailHtml(doc),
    });

    return res.status(200).json({
      ok: true,
    });
  } catch (error: any) {
    console.error('contact form error:', error);

    return res.status(500).json({
      error: error?.message || 'Server error while sending contact form.',
    });
  }
}