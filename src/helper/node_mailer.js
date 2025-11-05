import nodemailer from "nodemailer";
import { config } from "../config/db.js";

export const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });

  const mailOptions = {
    from: config.email.user,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};
