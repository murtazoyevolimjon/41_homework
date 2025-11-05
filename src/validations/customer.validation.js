import { z } from "zod";

export const customerValidation = z.object({
  name: z.string()
    .min(3, { message: "name kamida 3 ta bulishi kerak" })
    .nonempty({ message: "name bo'sh bulishi mumkin emas" }),

  phone: z.string()
    .min(7, { message: "phone kamida 7 ta bulishi kerak" })
    .nonempty({ message: "phone bo'sh bulishi mumkin emas" }),
  email: z.string().email({ message: "email noto'g'ri formatda" }),
  password: z.string().min(5, { message: "password kamida 5 ta bulishi kerak" }),

  role: z.enum(["admin", "manager", "staff", "customer", "user"]).optional()
});

export const customerUpdValidation = z.object({
  name: z.string().min(3, { message: "name kamida 3 ta belgi bulishi kerak" }).optional(),
  phone: z.string().min(7, { message: "phone kamida 7 ta belgi bulishi kerak" }).optional(),
  email: z.string().email({ message: "email noto'g'ri formatda" }).optional(),
  password: z.string().min(5, { message: "password kamida 5 ta belgi bulishi kerak" }).optional(),
  role: z.enum(["admin", "manager", "staff", "customer", "user"]).optional()
});