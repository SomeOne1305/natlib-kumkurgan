import { LangType } from '.'

export type GenreType = {
	id: string
	name: LangType
	updatedAt: string
	createdAt: string
}

export type AuthorType = GenreType

export type BookType = {
	id: string
	name: LangType
	description: LangType
	publication_type: LangType
	publisher: string
	authors: AuthorType[]
	genres: GenreType[]
	published_date: string
	isbn: string
	language: LangType
	pages_number: number
	source: string
	cover_image: string
}
