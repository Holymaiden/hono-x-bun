import { z } from 'zod';

export const signUpEmailScheme = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type SignUpEmailType = z.infer<typeof signUpEmailScheme>;
