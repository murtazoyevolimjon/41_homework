import mongoose, { Schema } from "mongoose";
const paymentSchema = new mongoose.Schema({
  order_id: {
    type: Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  amount: { type: Number, required: true },
  payment_date: { type: Date, required: true },
  method: {
    type: String,
    enum: ["Credit card", "Cash"],
    default: "Cash",
  },
});
export default mongoose.model("Payment", paymentSchema);
