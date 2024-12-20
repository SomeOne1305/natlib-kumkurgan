import {
	FaEye,
	FaFacebook,
	FaRegCalendarAlt,
	FaRegClock,
	FaShareSquare,
	FaTelegram,
} from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { MdOutlineLocationOn } from 'react-icons/md'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { STORAGE_PATH } from '../../constants/storage'
import { useLangStore } from '../../store'
import { IEventType } from '../../types/event.type'
import { dateToString } from '../../utils/date-to-string'
import Seo from '../seo/Seo'

const EventsDetails = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const shareLink = window.location.origin + location.pathname

	const data = useLoaderData() as IEventType
	const { lang } = useLangStore()
	return (
		<div className='w-full p-4'>
			<Seo
				title={data?.title?.[lang]}
				description={data?.title?.[lang]}
				image_url={STORAGE_PATH + 'events/' + data?.source}
			/>
			<div
				className='inline-block p-1.5 rounded-full hover:bg-blue-100 transition-colors duration-150 mb-4 cursor-pointer dark:hover:bg-[#1e283f]'
				onClick={() => navigate(-1)}
			>
				<IoArrowBack className='text-2xl sm:text-3xl text-blue-950 dark:text-white' />
			</div>
			<img
				src={STORAGE_PATH + 'events/' + data?.source}
				alt={data?.title?.[lang]}
				className='w-full object-cover rounded-lg mb-3'
				loading='lazy'
			/>
			<div className='flex items-center justify-between gap-4 mt-8 mb-2 flex-wrap'>
				<div className='inline-flex'>
					<div className='inline-flex items-center '>
						<FaRegCalendarAlt className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>
							{dateToString(lang, data?.createdAt)}
						</span>
					</div>
					<div className='inline-flex items-center ml-3'>
						<FaRegClock className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>{`${new Date(
							data?.createdAt
						).getHours()}:${new Date(data.createdAt).getMinutes()}`}</span>
					</div>

					<div className='inline-flex items-center ml-6'>
						<FaEye className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>
							{data?.views}
						</span>
					</div>
				</div>
				<div className='inline-flex items-center'>
					<FaShareSquare className='text-lg sm:text-xl text-blue-500  mr-1' />
					<span className='text-lg sm:text-xl mr-5 dark:text-white'>
						Ulashing:
					</span>
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}&quote=${data?.title?.[lang]}`}
						className=' m-1 sm:mx-1.5 p-1'
					>
						<FaFacebook className='text-xl sm:text-2xl md:text-3xl  text-blue-700' />
					</a>
					<a
						href={`https://telegram.me/share/url?url=${shareLink}&text=${data?.title?.[lang]}`}
						className=' m-1 sm:mx-1.5 p-1'
					>
						<FaTelegram className='text-xl sm:text-2xl md:text-3xl text-sky-500' />
					</a>
				</div>
			</div>
			<div className='py-2 text-3xl font-bold dark:text-white'>
				<h2>{data?.title?.[lang]}</h2>
			</div>

			<div className='w-full'>
				<div className='py-3 my-2 flex flex-col items-start'>
					<h2 className='text-2xl font-semibold dark:text-slate-100'>
						Sana va vaqti
					</h2>
					<div className='inline-flex items-center mt-3'>
						<FaRegCalendarAlt className='text-2xl mr-2 dark:text-blue-600' />
						<span className='text-xl dark:text-slate-200'>
							{dateToString(lang, data.date)}
						</span>
					</div>
					<div className='inline-flex items-center mt-3'>
						<FaRegClock className='text-2xl mr-2 dark:text-blue-600' />
						<span className='text-xl dark:text-slate-200'>{data?.time}</span>
					</div>
				</div>
				<div className='py-3 my-2'>
					<h2 className='text-2xl font-semibold dark:text-slate-100'>
						Joylashuvi
					</h2>
					<div className='inline-flex items-center  mt-3'>
						<MdOutlineLocationOn className='text-3xl text-red-600 mr-2' />
						<span className='text-xl font-medium dark:text-slate-200'>
							Shox ko'chasi 15, Axborot Resurs markazi, Qumqo'rg'on
						</span>
					</div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.4685229916937!2d67.58086722393304!3d37.83234282202523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b559845462fdad%3A0x22fcf616b09b7ced!2sQumqo&#39;rg&#39;on%20shahar%20madaniyat%20markazi!5e0!3m2!1sru!2s!4v1714293745582!5m2!1sru!2s'
						className='md:w-1/2 w-full h-[50vh] mt-4 rounded-xl border border-gray-300'
						loading='lazy'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default EventsDetails
