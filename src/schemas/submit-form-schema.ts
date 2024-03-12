import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const submitFormSchema = z.strictObject({
  name: z.string().min(1).max(50),
  surname: z.string().min(1).max(50),
  phone: z.string().regex(phoneRegex, "Invalid phone number."),
  email: z.string().min(1).email(),
  birthdate: z.string().min(1).max(50),
  address: z.string().min(1).max(100),
  city: z.string().min(1).max(50),
  state: z.string().min(1).max(50),
  zip: z.string().min(1).max(10),
});
