import { AxiosResponse } from 'axios'
import { CommentFormData } from '../schemes/comment.schema'
import { CommentType, NewsType } from '../types/news.type'
import axios from './api'

export const NewsService = {
	async get_latest_news(): Promise<NewsType[]> {
		const res: AxiosResponse<NewsType[]> = await axios.get('/news/latest')
		return res.data
	},
	async get_recommend_news(): Promise<NewsType[]> {
		const res: AxiosResponse<NewsType[]> = await axios.get('/news/recommended')
		return res.data
	},
	async get_all_news(): Promise<NewsType[]> {
		const res: AxiosResponse<NewsType[]> = await axios.get('/news/all')
		return res.data
	},
	async get_news_by_slug(slug: string): Promise<NewsType> {
		const res: AxiosResponse<NewsType> = await axios.get('/news/' + slug)
		return res.data
	},
	async get_comments_of_news(id: string): Promise<CommentType[]> {
		const res: AxiosResponse<CommentType[]> = await axios.get(
			'/comments/comment/' + id
		)
		return res.data
	},
	async writeComment(data: CommentFormData, id: string) {
		return (await axios.post('comments/write/' + id, data)).data
	},
}
