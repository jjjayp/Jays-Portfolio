import { NextResponse } from "next/server";

// Lazy-load Resend only when configured
let ResendCtor: any = null;
try {
  // @ts-ignore - optional dep at runtime
  const { Resend } = require("resend");
  ResendCtor = Resend;
} catch {
  // no-op if not installed
}

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const CONTACT_TO = process.env.CONTACT_TO || "jay.v.patel@uconn.edu";   // your email
const CONTACT_FROM = process.env.CONTACT_FROM || "Portfolio <noreply@uconn.edu>";

export async function POST(req: Request) {
  const form = await req.formData();

  // Honeypot check
  const company = String(form.get("company") || "");
  if (company.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 }); // silently accept spam
  }

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const intent = String(form.get("intent") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // If Resend is configured, send an email
  if (ResendCtor && RESEND_API_KEY && CONTACT_TO) {
    try {
      const resend = new ResendCtor(RESEND_API_KEY);
      await resend.emails.send({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `Portfolio contact: ${name}${intent ? ` (${intent})` : ""}`,
        text: `From: ${name} <${email}>\nIntent: ${intent || "n/a"}\n\n${message}`,
      });
      return NextResponse.json({ ok: true }, { status: 200 });
    } catch (e) {
      console.error("Resend error:", e);
      return NextResponse.json(
        { error: "Failed to send email. Please try again or email me directly." },
        { status: 500 }
      );
    }
  }

  // Fallback: no email provider configured — log and pretend success
  console.log("[Contact Fallback] ", { name, email, intent, message });
  return NextResponse.json({ ok: true }, { status: 200 });
}
