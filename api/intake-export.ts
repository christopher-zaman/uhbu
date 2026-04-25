import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from './_db';

function escapeCsv(value: unknown) {
  if (value === null || value === undefined) return '';

  const stringValue =
    value instanceof Date
      ? value.toISOString()
      : typeof value === 'object'
        ? JSON.stringify(value)
        : String(value);

  return `"${stringValue.replace(/"/g, '""')}"`;
}

function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => {
    if (acc === null || acc === undefined) return '';
    return acc[key];
  }, obj);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const adminPin = req.headers['x-admin-pin'];
  const expectedPin = process.env.MEMBERSHIP_ADMIN_PIN;

  if (!expectedPin || adminPin !== expectedPin) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  try {
    const db = await getDb();

    const items = await db
      .collection('intake')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const headers = [
      'createdAt',
      'firstName',
      'lastName',
      'patientInformation.sex',
      'email',
      'phone',
      'preferredContactMethod',
      'interestType',
      'message',
    ];

    const csvRows = [
      headers.join(','),
      ...items.map((item) =>
        headers.map((header) => escapeCsv(getNestedValue(item, header))).join(',')
      ),
    ];

    const csv = csvRows.join('\n');

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="intake-submissions.csv"'
    );

    return res.status(200).send(csv);
  } catch (error) {
    console.error('Intake export error:', error);
    return res.status(500).json({ error: 'Failed to export intake submissions.' });
  }
}