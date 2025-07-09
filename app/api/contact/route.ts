import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  const copyToSender = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Copy of your message to ${process.env.EMAIL_USER}`,
    text: `Hi ${name},\n\nHere is a copy of your message:\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(copyToSender);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
