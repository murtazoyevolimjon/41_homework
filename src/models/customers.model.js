import mongoose, { model, version } from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
);

const customerModel = model("customers", customerSchema);

export default customerModel;
