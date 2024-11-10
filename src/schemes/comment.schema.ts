import { z } from 'zod'

export const CommentScheme = z.object({
	name: z.string().min(4),
	message: z.string().min(10),
})

export type CommentFormData = z.infer<typeof CommentScheme>
