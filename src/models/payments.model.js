import mongoose, { model, Schema } from "mongoose";

const paymentSchema = new Schema(
  {
    order_id: { type: Schema.Types.ObjectId, ref: "orders", required: true },
    amount: { type: Number, required: true },
    payment_date: { type: Date, default: Date.now },
    method: { type: String, enum: ["card", "click", "payme"], required: true,
    }},{ versionKey: false, timestamps: true }
)

const paymentModel = model("payments", paymentSchema)
export default paymentModel