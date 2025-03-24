// import nodemailer from "nodemailer";

// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { name, email, subject, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required." });
//     }

//     // Setup nodemailer transporter (Use your SMTP details)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // Your Gmail or SMTP email
//         pass: process.env.EMAIL_PASS, // App password or SMTP password
//       },
//     });

//     try {
//       // Send the email to yourself
//       await transporter.sendMail({
//         from: email,
//         to: process.env.EMAIL_USER, // Your email to receive messages
//         subject: `New Contact Form Submission: ${subject}`,
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       });

//       // Send auto-reply to user
//       await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: "Thank you for reaching out!",
//         text: `Hello ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nBest Regards,\nYour Name`,
//       });

//       return res.status(200).json({ success: "Message sent successfully!" });
//     } catch (error) {
//       return res.status(500).json({ error: "Failed to send message." });
//     }
//   }
//   res.status(405).json({ error: "Method not allowed" });
// }
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for reaching out!",
      text: `Hello ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nBest Regards,\nYour Name`,
    });

    return NextResponse.json({ success: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
