// src/models/otp.model.js
import mongoose, { Schema } from "mongoose";

const otpSchema = new Schema({
  email: { type: String, required: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model("otp", otpSchema);