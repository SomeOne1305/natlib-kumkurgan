import { FaEye, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { STORAGE_PATH } from '../../constants/storage'
import { useLangStore } from '../../store'
import { IEventType } from '../../types/event.type'
import { dateToString } from '../../utils/date-to-string'

const EventCard = ({ data }: { data: IEventType }) => {
	const { lang } = useLangStore()

	return (
		<div className='flex items-center'>
			<div className='w-1/2 h-full'>
				<Link to={'/events/' + data?.slug}>
					<img
						src={STORAGE_PATH + 'events/' + data?.source}
						className='w-full object-cover rounded-lg'
						alt={data?.title?.[lang]}
					/>
				</Link>
			</div>
			<div className='w-1/2 h-full flex flex-col items-start justify-center p-1.5'>
				<div className='pb-1'>
					<h2 className='font-semibold text-lg line-clamp-2 dark:text-slate-100'>
						{data?.title?.[lang]}
					</h2>
				</div>
				<div className='py-1 inline-flex items-start flex-col'>
					<div className='inline-flex items-center'>
						<FaRegCalendarAlt className='text-lg mr-1 text-blue-500' />
						<span className='text-base whitespace-nowrap dark:text-slate-300'>
							{dateToString(lang, data.date)}
						</span>
					</div>
					<div className='inline-flex items-center'>
						<FaRegClock className='text-lg mr-1  text-blue-500' />
						<span className='text-base whitespace-nowrap dark:text-slate-300'>
							{data?.time}
						</span>
					</div>
				</div>
				<div className='py-1  w-full flex items-center justify-between pr-1'>
					<span className='text-sm text-gray-500'>
						{new Date(data?.createdAt).toLocaleDateString()}
					</span>
					<div className='inline-flex items-center'>
						<FaEye className='text-base text-blue-500 mr-1' />
						<span className='text-sm text-gray-500'>{data?.views}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventCard
