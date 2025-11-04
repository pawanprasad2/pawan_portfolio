import { Resend } from "resend";

const resend = new Resend("re_UqyDG5ni_AHYXBpBczpTqYUpVarDGs9uQ");

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        { status: 400 }
      );
    }

    const htmlToOwner = `
      <div style="font-family:'Segoe UI',sans-serif;background:#f7f8fa;padding:30px;">
        <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,0.05);">
          <div style="background:linear-gradient(90deg,#facc15,#eab308);padding:20px 30px;">
            <h2 style="margin:0;color:#1b1f24;">📩 New Contact Message</h2>
          </div>
          <div style="padding:30px;">
            <p style="font-size:16px;color:#333;">Hey Pawan,</p>
            <p style="font-size:15px;color:#555;">You’ve got a new message from your portfolio contact form.</p>
            <table style="width:100%;margin-top:15px;">
              <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
            </table>
            <div style="margin-top:20px;background:#f9f9f9;padding:15px;border-radius:8px;">
              <strong>Message:</strong>
              <p style="margin-top:8px;color:#444;">${message}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    const htmlToSender = `
      <div style="font-family:'Segoe UI',sans-serif;background:#f7f8fa;padding:30px;">
        <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,0.05);">
          <div style="background:linear-gradient(90deg,#facc15,#eab308);padding:20px 30px;">
            <h2 style="margin:0;color:#1b1f24;">Thank You, ${name}!</h2>
          </div>
          <div style="padding:30px;">
            <p style="font-size:16px;color:#333;">
              Thanks for reaching out! I’ve received your message and will get back to you soon.
            </p>
          </div>
        </div>
      </div>
    `;

   
    await resend.emails.send({
      from: `Portfolio Contact <contact@builtbypawan.info>`,
      to:`pawanprasad2322@gmail.com`,
      subject: `New message from ${name} — ${subject}`,
      html: htmlToOwner,
    });

    await resend.emails.send({
      from: `Pawan <contact@builtbypawan.info>`,
      to: email, 
      subject: "Thanks for contacting me!",
      html: htmlToSender,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
