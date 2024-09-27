import { z } from "zod";
export const formSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email address",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});
