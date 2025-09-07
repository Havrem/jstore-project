// schemas/user.schema.ts
import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  name: z.string(),
  address: z.string()
});
export type User = z.infer<typeof userSchema>;