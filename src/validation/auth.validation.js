import z from "zod";

export const registerCustomerValidation = z.object({
  name: z.string().min(2, "name shart"),
  email: z.string().email("email xato"),
  password: z.string().min(6, "password kamida 6 ta bulishi kerak"),
});

export const loginCustomerValidation = z.object({
  email: z.string().email("email xato"),
  password: z.string().min(6, "password kamida 6 ta bulishi kerak"),
});

export const registerStaffValidation = z.object({
  name: z.string().min(2, "name shart"),
  password: z.string().min(6, "password kamida 6 ta bulisji kerak"),
});

export const loginStaffValidation = z.object({
  name: z.string().min(2, "name shart"),
  password: z.string().min(6, "password kamida 6 ta bulishi kerak"),
});
