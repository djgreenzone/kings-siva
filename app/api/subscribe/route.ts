import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

const API_KEY = process.env.MAILCHIMP_API_KEY || "";
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID || "";
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX || ""; // e.g. "us21"
// "subscribed" = added straight away. "pending" = Mailchimp sends a confirmation
// email first (use this if your audience is set to double opt-in).
const STATUS_IF_NEW = process.env.MAILCHIMP_STATUS_IF_NEW || "subscribed";

// Tags applied to every entrant so you can find + segment them in Mailchimp
// (Audience > Contacts > filter by tag) and trigger workflows.
// Rename via MAILCHIMP_TAGS (comma-separated) in your env.
const TAGS = (process.env.MAILCHIMP_TAGS || "Samoa Giveaway 2026,Website Entry")
  .split(",")
  .map((t) => t.trim())
  .filter(Boolean);

export async function POST(req: Request) {
  if (!API_KEY || !AUDIENCE_ID || !SERVER_PREFIX) {
    return NextResponse.json(
      { ok: false, error: "Mailchimp is not configured yet." },
      { status: 500 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request." }, { status: 400 });
  }

  // Honeypot — if filled, silently accept (bot) without writing to Mailchimp.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const base = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0`;
  const auth = "Basic " + Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const subscriberHash = crypto.createHash("md5").update(email).digest("hex");

  // ---- Merge fields matched to the King's Siva Academy audience (us21 / ad88253946) ----
  // First Name=MMERGE1, Last Name=LNAME, Email=EMAIL, Post Code=MMERGE14, Phone=PHONE
  const merge_fields: Record<string, string> = {
    MMERGE1: body.firstName || "",
    LNAME: body.lastName || "",
    MMERGE14: body.postcode || "",
    PHONE: body.phone || "",
  };

  try {
    // Upsert the member
    const upsert = await fetch(`${base}/lists/${AUDIENCE_ID}/members/${subscriberHash}`, {
      method: "PUT",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({
        email_address: email,
        status_if_new: STATUS_IF_NEW,
        merge_fields,
      }),
    });

    if (!upsert.ok) {
      const data = await upsert.json().catch(() => ({}));
      // Already a member / compliance state etc. — surface a friendly message.
      const detail = (data && (data.title || data.detail)) || "Could not subscribe.";
      return NextResponse.json(
        { ok: false, error: detail },
        { status: upsert.status }
      );
    }

    // Apply tags so entrants are segmentable in your automations.
    await fetch(`${base}/lists/${AUDIENCE_ID}/members/${subscriberHash}/tags`, {
      method: "POST",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({
        tags: TAGS.map((name) => ({ name, status: "active" })),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
