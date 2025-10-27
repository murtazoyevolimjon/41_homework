import mongoose, { model } from "mongoose";

const districtsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
);

const districtModel = model("districts", districtsSchema);

export default districtModel;
