import mongoose, { model, Schema } from "mongoose";

const order_itemSchema = new mongoose.Schema(
  {
    order_id: { type: Schema.Types.ObjectId, ref: "orders", required: true },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    quantity: { type: Number, required: true },
    total_price: { type: Number, required: true },
  },
  { timestamps: true },
)

const order_itemModel = model("order_items", order_itemSchema)

export default order_itemModel