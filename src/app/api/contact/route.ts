import { NextResponse } from "next/server";
import { contactDetails } from "@/data/contact";

const LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  phone: 40,
  message: 5000,
} as const;

type Inquiry = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

function text(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readInquiry(body: unknown): Inquiry | null {
  if (!body || typeof body !== "object") return null;
  const input = body as Record<string, unknown>;

  if (text(input.website, 200)) return null;

  const inquiry: Inquiry = {
    name: text(input.name, LIMITS.name),
    email: text(input.email, LIMITS.email),
    company: text(input.company, LIMITS.company),
    phone: text(input.phone, LIMITS.phone),
    service: text(input.service, 80),
    message: text(input.message, LIMITS.message),
  };

  const serviceOk = contactDetails.serviceOptions.some(
    (option) => option === inquiry.service
  );

  if (!inquiry.name || !isEmail(inquiry.email) || !serviceOk) {
    return null;
  }

  return inquiry;
}

function inquiryText(inquiry: Inquiry) {
  return [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company || "—"}`,
    `Phone: ${inquiry.phone || "—"}`,
    `Service: ${inquiry.service}`,
    "",
    inquiry.message || "—",
  ].join("\n");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (body && typeof body === "object" && text((body as Record<string, unknown>).website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const inquiry = readInquiry(body);
  if (!inquiry) {
    return NextResponse.json({ error: "Check the required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: "Mail is not configured." }, { status: 503 });
  }

  const subject = `Project inquiry: ${inquiry.service} — ${inquiry.name}`.replace(
    /[\r\n]+/g,
    " "
  );

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [contactDetails.email],
      reply_to: inquiry.email,
      subject,
      text: inquiryText(inquiry),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend rejected the contact email.", response.status, detail);
    return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
