import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, city, phone } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL, // Replace with your email
        pass: process.env.EMAIL_PASSWORD, // Replace with your email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "your-company-email@example.com", // Replace with recipient email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nCity: ${city}\nPhone: ${phone}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending message." });
  }
}
