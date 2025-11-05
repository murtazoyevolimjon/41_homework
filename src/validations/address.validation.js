import z from "zod"

export const addressValidation = z.object({
  customer_id: z.string().length(24, { message: "customer_id 24 ta bulishi kerak" }),
  name: z.string().nonempty({ message: "name bo'sh bulishi mumkin emas" }),
  address: z.string().nonempty({ message: "address bo'sh bulishi mumkin emas" }),
  location: z.string().nonempty({ message: "location bo'sh bulishi mumkin emas" }),
  district_id: z.string().length(24, { message: "district_id 24 ta bulishi kerak" }),
}); 



export const addressValidationUpd = z.object({
  customer_id: z.string().length(24, { message: "customer_id 24 ta belgidan iborat bulishi kerak" }).optional(),
  name: z.string().min(1, { message: "name bo'sh bulishi mumkin emas" }).optional(),
  address: z.string().min(1, { message: "address bo'sh bulishi mumkin emas" }).optional(),
  location: z.string().min(1, { message: "location bo'sh bulishi mumkin emas" }).optional(),
  district_id: z.string().length(24, { message: "district_id 24 ta bulishi kerak" }).optional()
})