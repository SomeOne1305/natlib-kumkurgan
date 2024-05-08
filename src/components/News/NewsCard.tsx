import { FaEye, FaRegCalendarAlt } from 'react-icons/fa'
import { GoCommentDiscussion } from 'react-icons/go'
import { Link } from 'react-router-dom'

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
		<div className='flex flex-col items-center '>
			<Link to={slug} className='flex flex-col group'>
				<img
					src='https://bookland.dexignzone.com/xhtml/images/blog/large/blog2.jpg'
					className='w-full h-52 rounded-md object-cover'
					alt='News thumbnail'
				/>
				<div className='py-1'>
					<div className='w-ful mt-2 py-4 flex items-center justify-between'>
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
				<div className='p-1'>
					<h2 className='text-lg font-bold group-hover:text-blue-900 line-clamp-3 dark:text-slate-100'>
						The library is inhabited by spirits that come out of the pages.
					</h2>
				</div>
			</Link>
		</div>
	)
}

export default NewsCard
