import { z } from 'zod'

export const ContactScheme = z.object({
	name: z.string().min(3),
	surname: z.string().min(3),
	subject: z.string(),
	phone_number: z.string(),
	message: z.string(),
})

export type ContactFormData = z.infer<typeof ContactScheme>
