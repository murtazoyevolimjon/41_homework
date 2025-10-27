import z from "zod";

export const order_itemsValidation = z.object({
  order_id: z
    .string()
    .nonempty({ message: "order_id bo'sh bulishi mumkin emas" }),
  product_id: z
    .string()
    .nonempty({ message: "product_id bo'sh bulishi mumkin emas" }),
  quantity: z
    .number()
    .min(1, { message: "quantity manfiy bulishi mumkin emas" }),
  total_price: z
    .number()
    .min(0, { message: "total_price manfiy bulishi mumkin emas" }),
});
