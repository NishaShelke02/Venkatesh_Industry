const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", async (req, res) => {
  const { name, phone, address, email, product, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // change if needed
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true });

  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

module.exports = router;