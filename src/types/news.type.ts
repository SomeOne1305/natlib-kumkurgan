import { LangType } from '.'

export type NewsType = {
	id: string
	title: LangType
	body: LangType
	views: string
	image: string
	slug: string
	tags: LangType
	createdAt: string
	updatedAt: string
}

export type CommentType = {
	id: string
	name: string
	message: string
	createdAt: string
	updatedAt: string
}
