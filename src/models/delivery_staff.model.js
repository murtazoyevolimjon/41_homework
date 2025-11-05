import mongoose, { Schema, model } from "mongoose";
import { hashPasswordBeforeSave, hashPasswordBeforeUpdate, comparePasswords } from "../middleware/password.middleware.js";

const deliveryStaffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    vehicle_number: { type: String, required: true },
    district_id: {
      type: Schema.Types.ObjectId,
      ref: "districts",
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["admin", "manager", "staff", "customer"],
      default: "staff",
    },

    otp: { type: String, default: null },
    otpExpiresAt: { type: Date, default: null },
    isVerified: { type: Boolean, default: false },

    accessToken: { type: String, default: null },
    refreshToken: { type: String, default: null },
  },
  { timestamps: true }
)

deliveryStaffSchema.pre("save", hashPasswordBeforeSave);
deliveryStaffSchema.pre("findOneAndUpdate", hashPasswordBeforeUpdate);

deliveryStaffSchema.methods.comparePassword = async function (enteredPassword) {
  return comparePasswords(enteredPassword, this.password);
}

const DeliveryStaffModel = model("delivery_staff", deliveryStaffSchema)

export default DeliveryStaffModel


