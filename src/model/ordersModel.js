import mongoose, { Schema } from "mongoose";
const orderSchema = new mongoose.Schema({
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  delivery_staff_id: {
    type: Schema.Types.ObjectId,
    ref: "Delivery_staff",
    required: true,
  },
  order_date: { type: Date, max: Date.now, required: true },
  status: {
    type: String,
    enum: ["Upcoming, Inprogress, Delivered"],
    default: "Upcoming",
  },
});
export default mongoose.model("Order", orderSchema);