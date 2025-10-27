import z from "zod";

export const addressValidation = z.object({
  customer_id: z
    .string()
    .length(20, { message: "customer_id 20 ta bulishi kerak" }),
  name: z.string().nonempty({ message: "name bo'sh bulishi mumkin emas" }),
  address: z
    .string()
    .nonempty({ message: "address bo'sh bulishi mumkin emas" }),
  location: z
    .string()
    .nonempty({ message: "location bo'sh bulishi mumkin emas" }),
  district_id: z
    .string()
    .length(20, { message: "district_id 20 ta bulishi kerak" }),
});
