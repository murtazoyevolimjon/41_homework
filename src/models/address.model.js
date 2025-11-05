import mongoose, { model, Schema } from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    address: { type: String, required: true },
    location: { type: String, required: true },
    district_id: {
      type: Schema.Types.ObjectId,
      ref: "district",
      required: true,
    },
  },
  { timestamps: true },
);

const addressModel = model("address", addressSchema);

export default addressModel;