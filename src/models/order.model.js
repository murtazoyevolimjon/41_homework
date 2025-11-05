import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    delivery_staff_id: {
      type: Schema.Types.ObjectId,
      ref: "delivery_staff",
      required: true,
    },
    order_date: { type: Date, default: Date.now() },
    status: {
      type: String,
      enum: ["ordered", "cancelled", "pending"],
      default: "pending",
    },
  },
  { timestamps: true },
)

const orderModel = model("order", orderSchema)

export default orderModel