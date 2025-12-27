import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { fullName, email } = await request.json();

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email are required" },
        { status: 400 },
      );
    }

    // Validate email format
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ").slice(1).join(" ") || "";

    const contact = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
    });

    await resend.contacts.segments.add({
      email: email,
      segmentId: process.env.RESEND_SEGMENT_ID as string,
    });

    await new Promise(r => setTimeout(r, 600));
    await resend.emails.send({
      from: "Nestify <hello@mailing.trynestify.xyz>",
      to: email,
      subject: "Welcome to the Nestify Waitlist! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
              <!-- Logo -->
              <div style="text-align: center; margin-bottom: 32px;">
                <img src="https://trynestify.xyz/brandmark.png" alt="Nestify" width="48" height="48" style="border-radius: 12px;">
              </div>

              <!-- Heading -->
              <h1 style="font-size: 28px; font-weight: 700; color: #18181b; text-align: center; margin: 0 0 16px 0;">
                You're on the list, ${firstName}! 🎉
              </h1>

              <!-- Subheading -->
              <p style="font-size: 16px; color: #71717a; text-align: center; margin: 0 0 32px 0; line-height: 1.6;">
                Thanks for joining the Nestify waitlist. You're now part of an exclusive group of early adopters who will be the first to experience the future of student opportunities.
              </p>

              <!-- Divider -->
              <div style="border-top: 1px solid #e4e4e7; margin: 32px 0;"></div>

              <!-- What's next -->
              <h2 style="font-size: 18px; font-weight: 600; color: #18181b; margin: 0 0 16px 0;">
                What happens next?
              </h2>
              <ul style="padding-left: 20px; margin: 0 0 32px 0; color: #52525b; line-height: 1.8;">
                <li style="margin-bottom: 8px;">We'll keep you updated on our progress</li>
                <li style="margin-bottom: 8px;">You'll get early access before the public launch</li>
                <li style="margin-bottom: 8px;">Exclusive opportunities to shape the platform</li>
              </ul>

              <!-- CTA -->
              <div style="text-align: center;">
                <a href="https://nestify.com" style="display: inline-block; background-color: #18181b; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 50px; font-weight: 500; font-size: 16px;">
                  Visit Nestify →
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; margin-top: 32px;">
              <p style="font-size: 14px; color: #a1a1aa; margin: 0;">
                © ${new Date().getFullYear()} Nestify. All rights reserved.
              </p>
              <p style="font-size: 12px; color: #d4d4d8; margin: 8px 0 0 0;">
                You received this email because you signed up for the Nestify waitlist.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Optionally: Send notification to your team
    // await resend.emails.send({
    //   from: "Nestify Waitlist <notifications@nestify.com>",
    //   to: "team@nestify.com",
    //   subject: `New Waitlist Signup: ${fullName}`,
    //   html: `<p><strong>${fullName}</strong> (${email}) just joined the waitlist!</p>`,
    // });

    return NextResponse.json(
      { message: "Successfully joined waitlist" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
