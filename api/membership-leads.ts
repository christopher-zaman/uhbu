import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from './_db.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('membership-leads route hit');
    console.log('body:', req.body);

    const {
      firstName,
      lastName,
      email,
      phone,
      preferredContactMethod,
      interestType,
      message,
      source,
    } = req.body || {};

    if (!firstName || !lastName || !email || !preferredContactMethod || !interestType) {
      return res.status(400).json({
        error: 'Missing required fields.',
      });
    }
    // For testing environment variables exist
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    console.log('MONGODB_DB:', process.env.MONGODB_DB);

    const db = await getDb();

    const doc = {
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : '',
      preferredContactMethod: String(preferredContactMethod).trim(),
      interestType: String(interestType).trim(),
      message: message ? String(message).trim() : '',
      source: source ? String(source).trim() : 'membership-page',
      createdAt: new Date(),
    };

    const result = await db.collection('membership_leads').insertOne(doc);

    return res.status(200).json({
      ok: true,
      insertedId: result.insertedId,
    });
  } catch (error: any) {
  console.error('membership-leads error:', error);
  return res.status(500).json({
    error: error?.message || 'Server error while saving membership lead.',
  });
}
}