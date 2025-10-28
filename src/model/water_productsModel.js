import mongoose from "mongoose";
const water_productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  volume_liters: { type: Number },
  price: { type: Number },
});
export default mongoose.model("Water_product", water_productSchema);
