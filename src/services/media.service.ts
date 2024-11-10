import { AxiosResponse } from 'axios'
import { MediaType } from '../types/media.type'
import axios from './api'

export const MediaService = {
	async get_all_media(): Promise<MediaType[]> {
		const res: AxiosResponse<MediaType[]> = await axios.get('/gallery/all')
		return res.data
	},
}
