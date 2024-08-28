import { z } from "zod";

export const UserFormValidation = z.object({
    name: z.string()
        .min(2,"Name must be at least 2 characters.")
        .max(50,"Name must be at most 50 characters."),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/.test(phone), "Invalid phone number"),
})
 