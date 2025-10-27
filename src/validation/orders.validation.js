import z from "zod";

export const orderValidation = z.object({
  customer_id: z.string().min(1, "customer_id shart"),
  delivery_staff_id: z.string().min(1, "delivery_staff_id shart"),
  status: z.enum(["ordered", "cancelled", "pending"]).optional(),
});
