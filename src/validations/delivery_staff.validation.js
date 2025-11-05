import z from "zod"

export const delivery_straffValidation = z.object({
  name: z.string().nonempty({ message: "name bo'sh bulishi mumkin emas" }),
  phone: z.string().nonempty({ message: "phone bo'sh bulishi mumkin emas" }),
  vehicle_number: z.string().nonempty({ message: "vehicle_number bo'sh bulishi mumkin emas" }),
  district_id: z.string().length(24, { message: "district_id 24 ta bulishi kerak" }),
  email: z.string().email({ message: "email noto'g'ri formatda" }),
  password: z.string().min(5, { message: "password kamida 5 ta bulishi kerak" }),
  role: z.enum(["admin", "manager", "staff", "customer", "user"]).optional()
})


export const delivery_staffUpdValidation = z.object({
  name: z.string().min(1, { message: "name bo'sh bo'lishi mumkin emas" }).optional(),
  phone: z.string().min(7, { message: "phone kamida 7 ta belgi bo'lishi kerak" }).optional(),
  vehicle_number: z.string().min(1, { message: "vehicle_number bo'sh bo'lishi mumkin emas" }).optional(),
  district_id: z.string().length(24, { message: "district_id 24 ta bo'lishi kerak" }).optional(),
  email: z.string().email({ message: "email noto'g'ri formatda" }).optional(),
  password: z.string().min(5, { message: "password kamida 5 ta belgi bulishi kerak" }).optional(),
  role: z.enum(["admin", "manager", "staff", "customer", "user"]).optional()
})