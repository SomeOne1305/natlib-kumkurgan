import { LangType } from '.'

export type MediaType = {
	id: string
	title: LangType
	type: 'image' | 'url' | 'video'
	source: string
	thumbnail: null | string
	createdAt: string
	updatedAt: string
}
