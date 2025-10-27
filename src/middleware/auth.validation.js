import { z } from "zod";

export const customerRegisterSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(4),
});
