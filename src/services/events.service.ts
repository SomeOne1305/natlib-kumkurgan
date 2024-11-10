import { AxiosResponse } from 'axios'
import { IEventType } from '../types/event.type'
import axios from './api'
export const EventsService = {
	async get_all_events(): Promise<IEventType[]> {
		const res: AxiosResponse<IEventType[]> = await axios.get('/events/all')
		return res.data
	},
	async get_event_by_slug(slug: string): Promise<IEventType> {
		const res: AxiosResponse<IEventType> = await axios.get('/events/' + slug)
		return res.data
	},
}
