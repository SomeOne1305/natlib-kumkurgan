import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { books } from '../../constants/books'
import BookDetails from './BookDetails'
// import Info from '../Info/Info'

const BooksSection = () => {
	const [id, setId] = useState('')
	console.log(id)
	if (id) {
		document.body.style.overflowY = 'hidden'
	} else {
		document.body.style.overflowY = 'unset'
	}

	return (
		<div className='w-full py-4'>
			{/* <Info id={id}>
				<span
					className='text-2xl mt-3 ml-auto float-end mr-2 text-slate-100'
					onClick={() => setId('')}
				>
					<FaRegWindowClose />
				</span>
			</Info> */}
			<AnimatePresence>
				{id.length && (
					<BookDetails id={id}>
						<IoCloseSharp
							className='text-2xl text-slate-200 dark:text-slate-100 ml-auto mb-4 mr-3 cursor-pointer'
							onClick={() => setId('')}
						/>
					</BookDetails>
				)}
			</AnimatePresence>
			<div className='w-full flex items-center justify-between py-2 my-3'>
				<h2 className='text-lg font-semibold dark:text-slate-100'>
					Tavsiya etilganlar
				</h2>
				<div className='p-1.5 rounded-md text-blue-500 bg-sky-200 dark:text-white dark:bg-blue-600'>
					See All
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
				{books.map(i => (
					<div
						key={i.id + 'book'}
						className='flex items-center flex-col mt-2 rounded-md border border-gray-200 dark:border-gray-600 overflow-hidden'
						onClick={() => setId(i.id)}
					>
						<div className='w-full max-h-[420px] h-full relative'>
							<img
								src={i.volumeInfo.imageLinks.thumbnail}
								className='w-full h-full object-cover'
								alt=''
							/>
							<div className='p-2 rounded-md bg-white absolute top-1 right-1 cursor-pointer'>
								<FaRegHeart className='text-3xl' />
							</div>
						</div>
						<div className='w-full p-2 my-auto'>
							<h3 className='text-lg dark:text-slate-100 font-semibold line-clamp-2'>
								{i.volumeInfo.title}
							</h3>
							<span className='mt-2 text-base text-gray-500 font-medium line-clamp-1'>
								{i.volumeInfo.authors?.map(author => author).join(' , ') ||
									'Unknown'}
							</span>
						</div>
					</div>
				))}
			</div>
			{/* <ReadNow />'' */}
		</div>
	)
}

export default BooksSection
