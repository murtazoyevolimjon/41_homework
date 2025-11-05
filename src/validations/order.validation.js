import z from "zod";

export const orderValidation = z.object({
  customer_id: z.string().min(1, "customer_id shart"),
  delivery_staff_id: z.string().min(1, "delivery_staff_id shart"),
  status: z.enum(["ordered", "cancelled", "pending"]).optional(),
})



export const orderUpdValidation = z.object({
  customer_id: z.string().length(24, { message: "customer_id 24 ta belgi bo'lishi kerak" }).optional(),
  delivery_staff_id: z.string().length(24, { message: "delivery_staff_id 24 ta belgi bo'lishi kerak" }).optional(),
  status: z.enum(["ordered", "cancelled", "pending"], { message: "status noto'g'ri qiymat" }).optional(),
})