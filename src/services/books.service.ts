import { AxiosResponse } from 'axios'
import { BookType } from '../types/book.type'
import axios from './api'

export const BookService = {
	async get_recommended_books(): Promise<BookType[]> {
		const res: AxiosResponse<BookType[]> = await axios.get('/books/recommended')
		return res.data
	},
	async get_book_by_id(id: string): Promise<BookType> {
		const res: AxiosResponse<BookType> = await axios.get('/books/book/' + id)
		return res.data
	},
	async get_all_books(): Promise<BookType[]> {
		const res: AxiosResponse<BookType[]> = await axios.get('/books/all')
		return res.data
	},
	async get_books(page: number): Promise<{
		data: BookType[]
		total: number
		page: number
		lastPage: number
	}> {
		const res: AxiosResponse<{
			data: BookType[]
			total: number
			page: number
			lastPage: number
		}> = await axios.get(`/books/all?page=${page}&limit=12`)
		return res.data
	},
	async search_books(query: string): Promise<BookType[]> {
		const res: AxiosResponse<BookType[]> = await axios.get(
			'/books/search?q=' + query
		)
		return res.data
	},
}
