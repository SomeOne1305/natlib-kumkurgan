import { FaEye, FaRegCalendarAlt } from 'react-icons/fa'
import { GoCommentDiscussion } from 'react-icons/go'

const NewsCard = () => {
	const str =
		'The Time Is Running Out! Think About These 6 Ways To Change Your Library'
	const slug = str
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
	return (
		<div className='flex flex-col items-center border border-gray-300   dark:border-gray-600 rounded-lg overflow-hidden'>
			<a href={slug} className='flex flex-col group'>
				<img
					src='https://bookland.dexignzone.com/xhtml/images/blog/large/blog2.jpg'
					className='w-full h-full object-cover'
					alt='News thumbnail'
				/>
				<div className='p-2'>
					<h2 className='text-xl font-bold group-hover:text-blue-900 line-clamp-3 dark:text-slate-100'>
						The library is inhabited by spirits that come out of the pages.
					</h2>
				</div>
			</a>
			<div className='p-2 pt-0'>
				<div className='py-2'>
					<p className='line-clamp-3 dark:text-gray-300'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
						itaque tempora ipsum corrupti, voluptates expedita consequatur
						laudantium aperiam velit, quo libero vitae ad obcaecati blanditiis.
					</p>
				</div>
				<div className='w-full border-t border-gray-500 mt-2 py-4 flex items-center justify-between'>
					<div className='inline-flex items-center'>
						<FaRegCalendarAlt className='text-lg text-blue-600 mr-1' />
						<span className='text-sm text-gray-500'>27 Aprel, 2024</span>
					</div>
					<div className='inline-flex items-center'>
						<GoCommentDiscussion className='text-lg text-blue-600 mr-1' />
						<span className='mr-4 text-sm text-gray-500'>19</span>

						<FaEye className='text-lg text-blue-600 mr-1' />
						<span className='text-sm text-gray-500'>52</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsCard
