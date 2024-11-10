import { LoaderFunctionArgs } from 'react-router-dom'
import { EventsService } from './services/events.service'
import { NewsService } from './services/news.service'
import { useLangStore } from './store'
import useTitleStore from './store/useTitleStore'

export const getNewsBySlugLoader = async ({ params }: LoaderFunctionArgs) => {
	if (params.slug) {
		const news = await NewsService.get_news_by_slug(params.slug)
		if (!news) {
			throw new Error('News not found')
		}
		const lang = useLangStore.getState().lang
		useTitleStore.getState().setTitle(news?.title?.[lang])
		return news
	}
}

export const getEventsBySlugLoader = async ({ params }: LoaderFunctionArgs) => {
	if (params.slug) {
		const event = await EventsService.get_event_by_slug(params.slug)
		if (!event) {
			throw new Error('Event not found')
		}
		const lang = useLangStore.getState().lang
		useTitleStore.getState().setTitle(event?.title?.[lang])
		return event
	}
}
