import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { Resend } from "resend";

type EmailParams = {
  subject: string;
  html: string;
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  return new Resend(apiKey);
}

export async function sendNotificationEmail({
  subject,
  html,
}: EmailParams) {
  const resend = getResend();

  const to = process.env.NOTIFY_TO_EMAIL;

  if (!to) {
    console.warn("Missing NOTIFY_TO_EMAIL");
    return;
  }

  const emailResult = await resend.emails.send({
    from:
      process.env.FROM_EMAIL ||
      "Ultimate Health DPC <onboarding@resend.dev>",
    to,
    cc: process.env.NOTIFY_CC_EMAIL || undefined,
    subject,
    html,
  });
}