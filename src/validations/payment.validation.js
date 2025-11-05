import z from "zod";

export const paymentValidation = z.object({
  order_id: z.string().min(1, "order_id shart"),
  amount: z.number().positive("amount musbat son bulishi kerak"),
  method: z.enum(["card", "click", "payme"], { required_error: "method shart",}),
  payment_date: z.string().optional().or(z.date()).optional()
});


export const paymentUpdValidation = z.object({
  order_id: z.string().length(24, { message: "order_id 24 ta bo'lishi kerak" }).optional(),
  amount: z.number().positive({ message: "amount musbat son bo'lishi kerak" }).optional(),
  method: z.enum(["card", "click", "payme"], { type_error: "method noto'g'ri qiymat" }).optional(),
  payment_date: z.union([z.string(), z.date()]).optional()
});