import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const OWNER_EMAIL = process.env.CONTACT_EMAIL ?? "360websolutionsuk@gmail.com";
const SMTP_USER = process.env.SMTP_USER ?? OWNER_EMAIL;
const SMTP_PASS = process.env.SMTP_PASS ?? "";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

/* ------------------------------------------------------------------ */
/*  Owner notification                                                 */
/* ------------------------------------------------------------------ */
function ownerHtml(d: Record<string, string>, formType: string) {
  const heading =
    formType === "booking"
      ? "New Strategy Session Request"
      : "New Contact Form Message";

  const rows = Object.entries(d)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#0F2A4A;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 12px;color:#333">${v}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0F2A4A;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="margin:0;font-size:20px;color:#fff">${heading}</h1>
        <p style="margin:6px 0 0;font-size:13px;color:#8CA0BD">360 Web Solutions — Website Enquiry</p>
      </div>
      <div style="background:#fff;padding:24px 32px;border:1px solid #E5E7EB;border-top:none;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">${rows}</table>
        <p style="margin:24px 0 0;font-size:12px;color:#999">This email was sent automatically from your website contact form.</p>
      </div>
    </div>`;
}

/* ------------------------------------------------------------------ */
/*  Thank-you email to the user                                        */
/* ------------------------------------------------------------------ */
function thankYouHtml(name: string, formType: string) {
  const firstName = name.split(" ")[0] || "there";
  const body =
    formType === "booking"
      ? `<p style="color:#333;line-height:1.7">Thank you for requesting a free strategy session with <strong>360 Web Solutions</strong>. We&rsquo;ve received your booking details and a member of our team will confirm your session by email within one business day.</p>
         <p style="color:#333;line-height:1.7">In the meantime, feel free to explore our <a href="https://360websolutions.co.uk/#work" style="color:#FF4D3A">case studies</a> to see how we help businesses like yours grow.</p>`
      : `<p style="color:#333;line-height:1.7">Thank you for reaching out to <strong>360 Web Solutions</strong>. We&rsquo;ve received your message and one of our team members will get back to you as soon as possible.</p>
         <p style="color:#333;line-height:1.7">We typically respond within one business day. If your enquiry is urgent, call us at <a href="tel:+442071835339" style="color:#FF4D3A">+44 (0)20 7183 5339</a>.</p>`;

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0F2A4A;padding:24px 32px;border-radius:12px 12px 0 0;text-align:center">
        <img src="https://360websolutions.co.uk/assets/images/logo.png" alt="360 Web Solutions" width="140" style="margin-bottom:8px" />
      </div>
      <div style="background:#fff;padding:32px;border:1px solid #E5E7EB;border-top:none;border-radius:0 0 12px 12px">
        <h2 style="margin:0 0 16px;font-size:22px;color:#0F2A4A">Hi ${firstName},</h2>
        ${body}
        <hr style="border:none;border-top:1px solid #E5E7EB;margin:28px 0" />
        <p style="font-size:13px;color:#888;margin:0">360 Web Solutions — Digital Marketing Agency, London, UK<br/>
        <a href="https://360websolutions.co.uk" style="color:#FF4D3A">360websolutions.co.uk</a></p>
      </div>
    </div>`;
}

/* ------------------------------------------------------------------ */
/*  POST handler                                                       */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      formType = "contact",
      name = "",
      email = "",
      phone = "",
      company = "",
      message = "",
      preferred_date = "",
      preferred_time = "",
      industry = "",
      services = "",
      timezone = "",
    } = body as Record<string, string>;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    if (!SMTP_PASS) {
      console.error("[contact] SMTP_PASS not set — skipping email send");
      return NextResponse.json({ ok: true, warning: "Email not configured" });
    }

    const ownerData: Record<string, string> =
      formType === "booking"
        ? {
            Name: name,
            Email: email,
            Phone: phone,
            Company: company,
            "Preferred Date": preferred_date,
            "Preferred Time": preferred_time,
            Industry: industry,
            "Services Interested": services,
            Timezone: timezone,
            Message: message,
          }
        : {
            Name: name,
            Email: email,
            Phone: phone,
            Company: company,
            Message: message,
          };

    const ownerSubject =
      formType === "booking"
        ? `New Strategy Session Request from ${name}`
        : `New Contact Message from ${name}`;

    await Promise.all([
      transporter.sendMail({
        from: `"360 Web Solutions" <${SMTP_USER}>`,
        to: OWNER_EMAIL,
        subject: ownerSubject,
        html: ownerHtml(ownerData, formType),
        replyTo: email,
      }),

      transporter.sendMail({
        from: `"360 Web Solutions" <${SMTP_USER}>`,
        to: email,
        subject:
          formType === "booking"
            ? "Your Strategy Session Request — 360 Web Solutions"
            : "Thank you for contacting 360 Web Solutions",
        html: thankYouHtml(name, formType),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("[contact] email error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
