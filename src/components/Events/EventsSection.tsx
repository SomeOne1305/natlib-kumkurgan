import { useQuery } from '@tanstack/react-query'
import { EventsService } from '../../services/events.service'
import EventCard from './EventCard'

const EventsSection = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['GET_ALL_EVENTS'],
		queryFn: async () => await EventsService.get_all_events(),
	})
	return (
		<>
			<div className='w-full grid grid-cols-1 mt-6 py-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{isLoading ? (
					<span>Loading</span>
				) : (
					data &&
					data.map(event => (
						<EventCard key={'event_' + event.id} data={event} />
					))
				)}
			</div>
		</>
	)
}

export default EventsSection
