import { AxiosResponse } from 'axios'
import { FAQType } from '../types/faq.type'
import axios from './api'

export const FAQsService = {
	async get_all_faqs(): Promise<FAQType[]> {
		const res: AxiosResponse<FAQType[]> = await axios.get('/faq/all')
		return res.data
	},
}
