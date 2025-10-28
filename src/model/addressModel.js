import mongoose, { Schema } from "mongoose";
const addressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  address: { type: String },
  location: { type: String, required: true },
  district_id: {
    type: Schema.Types.ObjectId,
    ref: "District",
    required: true,
  },
});
export default mongoose.model("Address", addressSchema);