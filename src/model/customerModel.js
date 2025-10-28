import mongoose from "mongoose";
import bcrypt from "bcrypt";
const customerSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["customer", "delivery_staff", "admin"],
    default: "customer",
  },
});
customerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
customerSchema.methods.comparePassword = async function (customerPassword) {
  const isValidPassword = await bcrypt.compare(customerPassword, this.password);

  return isValidPassword;
};
export default mongoose.model("Customer", customerSchema);
