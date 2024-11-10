import axios, { AxiosResponse } from 'axios'
import { IUser } from '../types'
import { BookType } from '../types/book.type'

export const UserService = {
	async get_me(): Promise<IUser> {
		const res: AxiosResponse<IUser> = await axios.get('/user/me')
		return res.data
	},
	async update_me(data: { first_name: string; last_name: string }) {
		return (await axios.put('user/update/me', data)).data
	},

	async get_favorites(): Promise<BookType[]> {
		const res: AxiosResponse<BookType[]> = await axios.get('/books/all')
		return res.data
	},
}
