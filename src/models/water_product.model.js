import { Schema, model } from "mongoose";

const waterProductSchema = new Schema(
  {
    name: { type: String, required: true },
    volume_liters: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const waterProductModel = model("products", waterProductSchema);

export default waterProductModel;