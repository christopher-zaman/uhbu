import { sendNotificationEmail } from './_email.js';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from './_db.js';



function formatValue(value: any) {
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  if (value === null || value === undefined || value === '') return 'Not provided';
  return String(value);
}


function formatOptional(value: any) {
  if (value === null || value === undefined || value === '') return '';
  return String(value);
}

function formatFullName(...parts: any[]) {
  const name = parts.map(formatOptional).filter(Boolean).join(' ');
  return name || 'Not provided';
}

function formatAddress(patient: any) {
  const line1 = formatOptional(patient.address1);
  const line2 = formatOptional(patient.address2);
  const city = formatOptional(patient.city);
  const state = formatOptional(patient.state);
  const zip = formatOptional(patient.zip);

  const cityStateZip = [city, state, zip].filter(Boolean).join(', ');
  const address = [line1, line2, cityStateZip].filter(Boolean).join(', ');

  return address || 'Not provided';
}

function formatConditions(conditions: Record<string, any> = {}) {
  const rows = Object.entries(conditions)
    .map(([condition, answer]) => {
      return `
        <tr>
          <td style="padding: 6px 10px; border-bottom: 1px solid #eee;">${condition}</td>
          <td style="padding: 6px 10px; border-bottom: 1px solid #eee;">${formatValue(answer)}</td>
        </tr>
      `;
    })
    .join('');

  return rows || `
    <tr>
      <td colspan="2" style="padding: 6px 10px;">No history conditions provided.</td>
    </tr>
  `;
}

function buildIntakeEmailHtml(doc: any) {
  const patient = doc.patientInformation || {};
  const emergency = doc.emergencyContact || {};
  const insurance = doc.insurance || {};
  const history = doc.history || {};
  const consent = doc.consent || {};
  const release = doc.release || {};

  return `
    <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5;">
      <h2 style="margin-bottom: 4px;">New Intake Form Submission</h2>
      <p style="margin-top: 0; color: #666;">Submitted: ${new Date().toLocaleString()}</p>

      <hr />

      <h3>Patient Information</h3>
      <p><strong>Name:</strong> ${formatFullName(patient.firstName, patient.middleName, patient.lastName)}</p>
      <p><strong>Preferred Name:</strong> ${formatValue(patient.preferredName)}</p>
      <p><strong>Sex:</strong> ${formatValue(patient.sex)}</p>
      <p><strong>Date of Birth:</strong> ${formatValue(patient.dob)}</p>
      <p><strong>Reason for Visit:</strong> ${formatValue(patient.visitReason)}</p>
      <p><strong>Reason Other:</strong> ${formatValue(patient.visitReasonOther)}</p>
      <p><strong>Primary Phone:</strong> ${formatValue(patient.primaryPhone)}</p>
      <p><strong>Cell Phone:</strong> ${formatValue(patient.cellPhone)}</p>
      <p><strong>Email:</strong> ${formatValue(patient.email)}</p>
      <p><strong>Address:</strong> ${formatAddress(patient)}</p>
      

      <hr />

      <h3>Emergency Contact</h3>
      <p><strong>Name:</strong> ${formatFullName(emergency.firstName, emergency.lastName)}</p>
      <p><strong>Phone:</strong> ${formatValue(emergency.phone)}</p>
      <p><strong>Relationship:</strong> ${formatValue(emergency.relationship)}</p>

      <hr />

      <h3>Insurance</h3>
      <p><strong>Has Insurance:</strong> ${formatValue(insurance.hasInsurance)}</p>

      <hr />

      <h3>History</h3>
      <p><strong>Current Physician:</strong> ${formatValue(history.currentPhysicianName)}</p>
      <p><strong>Current Physician Phone:</strong> ${formatValue(history.currentPhysicianPhone)}</p>
      <p><strong>Date of Last Visit:</strong> ${formatValue(history.lastVisit)}</p>

      <h4>Conditions</h4>
      <table style="border-collapse: collapse; width: 100%; max-width: 700px;">
        <thead>
          <tr>
            <th align="left" style="padding: 6px 10px; border-bottom: 2px solid #ddd;">Condition</th>
            <th align="left" style="padding: 6px 10px; border-bottom: 2px solid #ddd;">Answer</th>
          </tr>
        </thead>
        <tbody>
          ${formatConditions(history.conditions)}
        </tbody>
      </table>

      <hr />

      <h3>Consent</h3>
      <p><strong>Patient Name:</strong> ${formatFullName(consent.patientFirstName, consent.patientLastName)}</p>
      <p><strong>Signature Name:</strong> ${formatValue(consent.signatureName)}</p>
      <p><strong>Consent Accepted:</strong> ${formatValue(consent.accepted)}</p>

      <hr />

      <h3>Release</h3>
      <p><strong>Release Accepted:</strong> ${formatValue(release.accepted)}</p>
      <p><strong>Release Notes:</strong> ${formatValue(release.notes)}</p>
    </div>
  `;
}

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

  try {
  await sendNotificationEmail({
    subject: 'New Intake Form Submission',
    html: buildIntakeEmailHtml(doc),
  });
} catch (emailError) {
  console.error('Intake email notification failed:', emailError);
}

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