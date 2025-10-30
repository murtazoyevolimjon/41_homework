import * as nodemailer from "nodemailer";
import "dotenv/config";

console.log("Checking env...");
console.log("GOOGLE_EMAIL:", process.env.GOOGLE_EMAIL ? "found ✅" : "NOT FOUND ❌");
console.log("EMAIL_APP_PASSWORD:", process.env.EMAIL_APP_PASSWORD ? "found ✅" : "NOT FOUND ❌");

// Ishlaydigan transporterni yaratamiz (nodemailer default eksportini chaqiramiz)
const transporter = nodemailer.default.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

(async () => {
  try {
    const info = await transporter.sendMail({
      from: `"Olimjon Murtazoyev" <${process.env.GOOGLE_EMAIL}>`,
      to: "soatmurotovabrorbek23@gmail.com",
      subject: "Salom",
      html: "<b>Hello World</b>",
    });

    console.log("✅ Message sent:", info.messageId);
    console.log({ info });
  } catch (err) {
    console.error("❌ Error sending mail:", err);
  }
})();
