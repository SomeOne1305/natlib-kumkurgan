import EventCard from './EventCard'

const EventsSection = () => {
	return (
		<>
			<div className='w-full grid grid-cols-1 mt-6 py-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{Array(5)
					.fill('a')
					.map((_, i) => (
						<EventCard key={'card' + i} />
					))}
			</div>
		</>
	)
}

export default EventsSection
