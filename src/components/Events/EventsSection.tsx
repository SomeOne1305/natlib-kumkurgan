import EventCard from './EventCard'
import EventsDetails from './EventsDetails'

const EventsSection = () => {
	return (
		<>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{Array(5)
					.fill('a')
					.map((_, i) => (
						<EventCard key={'card' + i} />
					))}
			</div>
			<EventsDetails />
		</>
	)
}

export default EventsSection
