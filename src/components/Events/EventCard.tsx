import { FaEye, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const EventCard = () => {
	return (
		<div className='flex items-center'>
			<div className='w-1/2 h-full'>
				<Link to={'some-route-there'}>
					<img
						src='https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE='
						className='w-full object-cover rounded-lg'
						alt=''
					/>
				</Link>
			</div>
			<div className='w-1/2 h-full flex flex-col items-start justify-center p-1.5'>
				<div className='pb-1'>
					<h2 className='font-semibold text-lg line-clamp-2 dark:text-slate-100'>
						"O'zbekiston kalajagi - buyuk davlat"
					</h2>
				</div>
				<div className='py-1 inline-flex items-start flex-col'>
					<div className='inline-flex items-center'>
						<FaRegCalendarAlt className='text-lg mr-1 text-blue-500' />
						<span className='text-base whitespace-nowrap dark:text-slate-300'>
							Noyabr 19-20
						</span>
					</div>
					<div className='inline-flex items-center'>
						<FaRegClock className='text-lg mr-1  text-blue-500' />
						<span className='text-base whitespace-nowrap dark:text-slate-300'>
							13:00 - 15:00
						</span>
					</div>
				</div>
				<div className='py-1  w-full flex items-center justify-between pr-1'>
					<span className='text-sm text-gray-500'>19.11.2021</span>
					<div className='inline-flex items-center'>
						<FaEye className='text-base text-blue-500 mr-1' />
						<span className='text-sm text-gray-500'>190</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventCard
