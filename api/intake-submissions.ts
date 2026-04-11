import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from './_db.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const providedPin = String(req.headers['x-admin-pin'] || '').trim();
    const expectedPin = process.env.MEMBERSHIP_ADMIN_PIN;

    if (!expectedPin) {
      return res.status(500).json({ error: 'Missing MEMBERSHIP_ADMIN_PIN in environment variables.' });
    }

    if (providedPin !== expectedPin) {
      return res.status(401).json({ error: 'Unauthorized.' });
    }

    const db = await getDb();

    const items = await db
      .collection('intake')
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();
console.log('intake-list count:', items.length);
console.log('first intake item:', items[0]);
    return res.status(200).json({
      ok: true,
      items,
    });
  } catch (error: any) {
    console.error('intake-list error:', error);
    return res.status(500).json({
      error: error?.message || 'Server error while loading intake submissions.',
    });
  }
}