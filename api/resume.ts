import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendNotificationEmail } from './_email.js';

function formatValue(value: any) {
  if (value === null || value === undefined || value === '') return 'Not provided';
  return String(value);
}

function buildResumeEmailHtml(doc: any) {
  return `
    <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5;">
      <h2>New Resume Submission</h2>

      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>

      <hr />

      <p><strong>Name:</strong> ${formatValue(doc.name)}</p>
      <p><strong>Email:</strong> ${formatValue(doc.email)}</p>
      <p><strong>Message:</strong> ${formatValue(doc.message)}</p>
      <p><strong>Resume Link:</strong> <a href="${formatValue(doc.resumeLink)}">${formatValue(doc.resumeLink)}</a></p>
      <p><strong>Source:</strong> ${formatValue(doc.source)}</p>
    </div>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, resumeLink } = req.body || {};

    if (!name || !email || !resumeLink) {
      return res.status(400).json({
        error: 'Name, email, and resume link are required.',
      });
    }

    const doc = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      message: message ? String(message).trim() : '',
      resumeLink: String(resumeLink).trim(),
      source: 'resume-upload-form',
      createdAt: new Date(),
    };

    await sendNotificationEmail({
      subject: 'New Resume Submission',
      html: buildResumeEmailHtml(doc),
    });

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error('resume submission error:', error);

    return res.status(500).json({
      error: error?.message || 'Server error while submitting resume.',
    });
  }
}