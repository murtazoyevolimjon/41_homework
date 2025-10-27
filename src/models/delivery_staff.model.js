import mongoose, { model, Schema } from "mongoose";

const delivery_staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    vehicle_number: { type: String, required: true },
    district_id: {
      type: Schema.Types.ObjectId,
      ref: "district",
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const delivery_staffModel = model("delivery_staff", delivery_staffSchema);

export default delivery_staffModel;

