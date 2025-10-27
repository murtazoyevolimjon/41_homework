import z from "zod"

export const districtsValidation = z.object({
  name: z.string().nonempty({ message: "name bo'sh bulishi mumkin emas" }),
});