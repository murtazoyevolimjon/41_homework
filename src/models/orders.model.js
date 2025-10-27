import { Schema, model } from "mongoose";

const orderSchema = new Schema(
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
  { versionKey: false, timestamps: true },
);

const orderModel = model("orders", orderSchema);

export default orderModel;