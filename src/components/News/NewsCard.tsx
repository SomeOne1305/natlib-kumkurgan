import { FaEye, FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { STORAGE_PATH } from '../../constants/storage'
import { useLangStore } from '../../store'
import { NewsType } from '../../types/news.type'
import { dateToString } from '../../utils/date-to-string'

const NewsCard = ({ data }: { data: NewsType }) => {
	const { lang } = useLangStore()
	return (
		<div className='flex flex-col items-center '>
			<Link to={'/news/' + data?.slug} className='flex flex-col group'>
				<img
					src={STORAGE_PATH + 'news/' + data?.image}
					className='w-full h-52 rounded-md object-cover'
					alt={data?.title?.[lang]}
				/>
				<div className='py-1'>
					<div className='w-ful mt-2 py-4 flex items-center justify-between'>
						<div className='inline-flex items-center'>
							<FaRegCalendarAlt className='text-lg text-blue-600 mr-1' />
							<span className='text-sm text-gray-500'>
								{dateToString(lang, data?.createdAt)}
							</span>
						</div>
						<div className='inline-flex items-center'>
							<FaEye className='text-lg text-blue-600 mr-1' />
							<span className='text-sm text-gray-500'>{data.views}</span>
						</div>
					</div>
				</div>
				<div className='p-1'>
					<h2 className='text-lg font-bold group-hover:text-blue-900 line-clamp-3 dark:text-slate-100'>
						{data.title?.[lang]}
					</h2>
				</div>
			</Link>
		</div>
	)
}

export default NewsCard
