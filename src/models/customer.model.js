import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "manager", "customer", "staff"], default: "customer"},
    otp: String,
    otpExpiresAt: Date,
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
)

customerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

export default mongoose.model("customers", customerSchema)