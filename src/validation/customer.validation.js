import x, { z } from "zod";

export const customerValidation = z.object({
  name: z.string().nonempty({ message: "name bo'sh bulishi mumkin emas" }),
  phone: z.string().nonempty({ message: "phone bo'sh bulishi mumkin emas" }),
  email: z.string().email({ message: "email noto'g'ri formatda" }).optional(),
});
