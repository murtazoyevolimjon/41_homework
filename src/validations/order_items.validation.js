import z from "zod"

export const order_itemsValidation = z.object({
  order_id: z.string().nonempty({ message: "order_id bo'sh bulishi mumkin emas" }),
  product_id: z.string().nonempty({ message: "product_id bo'sh bulishi mumkin emas" }),
  quantity: z.number().min(1, { message: "quantity manfiy bulishi mumkin emas" }),
  total_price: z.number().min(0, { message: "total_price manfiy bulishi mumkin emas" }),
});



export const order_itemsUpdValidation = z.object({
  order_id: z.string().length(24, { message: "order_id 24 ta belgi bo'lishi kerak" }).optional(),
  product_id: z.string().length(24, { message: "product_id 24 ta bo'lishi kerak" }).optional(),
  quantity: z.number().int({ message: "quantity butun son bo'lishi kerak" }).min(1, { message: "quantity kamida 1 bo'lishi kerak" }).optional(),
  total_price: z.number().min(0, { message: "total_price manfiy bo'lishi mumkin emas" }).optional(),
});