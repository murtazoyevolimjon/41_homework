import z from "zod";

export const productValidation = z.object({
  name: z.string().min(2, "Mahsulot nomi kamida 2 ta bulishi kerak"),
  volume_liters: z.number().positive("Hajm musbat bulishi kerak").max(1000, "1000 litrdan oshmasin"),
  price: z.number().positive("Narx musbat bulishi kerak"),
})


export const productUpdValidation = z.object({
  name: z.string().min(2, { message: "Mahsulot nomi kamida 2 ta belgi bo'lishi kerak" }).optional(),
  volume_liters: z.number().positive({ message: "Hajm musbat bo'lishi kerak" }).max(1000, { message: "Hajm 1000 litrdan oshmasligi kerak" }).optional(),
  price: z.number().positive({ message: "Narx musbat bo'lishi kerak" }).optional(),
});