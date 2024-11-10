import { z } from 'zod'

export const UpdateUserScheme = z.object({
	first_name: z.string().min(4),
	last_name: z.string().min(4),
})

export type UpdateUserFormData = z.infer<typeof UpdateUserScheme>

export const RegisterUserScheme = z.object({
	first_name: z.string().min(4),
	last_name: z.string().min(4),
	phone_number: z.string(),
	passport_id: z.string(),
})

export type RegisterUserDataForm = z.infer<typeof RegisterUserScheme>
