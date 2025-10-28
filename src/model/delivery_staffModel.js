import mongoose, { Schema } from "mongoose";
const delivery_staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  vehicle_number: { type: String, required: true },
  district_id: {
    type: Schema.Types.ObjectId,
    ref: "District",
  },
});
export default mongoose.model("Delivery_staff", delivery_staffSchema);