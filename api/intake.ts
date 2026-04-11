import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from './_db.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};

    const firstName = String(body.firstName ?? '').trim();
    const lastName = String(body.lastName ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const phone = body.phone ? String(body.phone).trim() : '';
    const preferredContactMethod = body.preferredContactMethod
      ? String(body.preferredContactMethod).trim()
      : '';
    const interestType = body.interestType ? String(body.interestType).trim() : 'intake';
    const message = body.message ? String(body.message).trim() : '';
    const source = body.source ? String(body.source).trim() : 'intake-form';

    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        error: 'Missing required fields.',
      });
    }

    const db = await getDb();

    const doc = {
      firstName,
      lastName,
      email,
      phone,
      preferredContactMethod,
      interestType,
      message,
      source,

      patientInformation: body.patientInformation || {},
      emergencyContact: body.emergencyContact || {},
      employment: body.employment || {},
      insurance: body.insurance || {},
      history: body.history || {},
      consent: body.consent || {},
      release: body.release || {},

      createdAt: new Date(),
    };

    const result = await db.collection('intake').insertOne(doc);

    return res.status(200).json({
      ok: true,
      insertedId: result.insertedId,
    });
  } catch (error: any) {
    console.error('intake error:', error);
    return res.status(500).json({
      error: error?.message || 'Server error while saving intake submission.',
    });
  }
}