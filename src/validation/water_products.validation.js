import z from "zod";

export const productValidation = z.object({
  name: z.string().min(2, "Mahsulot nomi kamida 2 ta bulishi kerak"),
  volume_liters: z
    .number()
    .positive("Hajm musbat bulishi kerak")
    .max(1000, "1000 litrdan oshmasin"),
  price: z.number().positive("Narx musbat bulishi kerak"),
});