import mongoose, { model, Schema } from "mongoose";

const water_productsSchema = new Schema(
  {
    name: { type: String, required: true },
    volume_liters: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true },
);

const water_productsModel = model("products", water_productsSchema);

export default water_productsModel