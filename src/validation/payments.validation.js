import z from "zod";

export const paymentValidation = z.object({
  order_id: z.string().min(1, "order_id shart"),
  amount: z.number().positive("amount musbat son bulishi kerak"),
  method: z.enum(["card", "click", "payme"], {
    required_error: "method shart",
  }),
  payment_date: z.string().datetime().optional().or(z.date()).optional()
});