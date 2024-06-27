import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
import { books } from '../../constants/books'
import { SwiperType } from '../../types'
import BookCard from './BookCard'
import BookDetails from './BookDetails'

const BooksSection = () => {
	const [id, setId] = useState('')
	const [swipe, setSwipe] = useState<SwiperType>()

	useEffect(() => {
		if (id) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'unset'
		}
	}, [id])

	return (
		<div className='w-full py-4'>
			<AnimatePresence>
				{id && (
					<BookDetails id={id}>
						<IoCloseSharp
							className='text-2xl text-slate-200 dark:text-slate-100 ml-auto mb-4 mr-3 cursor-pointer'
							onClick={() => setId('')}
							aria-label='Close'
						/>
					</BookDetails>
				)}
			</AnimatePresence>
			<div className='w-full py-4 flex justify-between items-center mb-4'>
				<h2 className='text-2xl font-bold dark:text-slate-100'>
					Tavsiya etilgan kitoblar
				</h2>
				<div className='inline-flex gap-4 items-center'>
					<button
						className='p-2 bg-blue-200 dark:bg-white rounded-full cursor-pointer dark:active:bg-slate-300 text-blue-800 active:bg-blue-300 hover:bg-blue-300 dark:hover:bg-slate-300 transition-colors duration-200'
						onClick={() => swipe?.slidePrev()}
						aria-label='Previous Slide'
					>
						<FaChevronLeft className='text-lg' />
					</button>
					<button
						className='p-2 bg-blue-200 dark:bg-white rounded-full cursor-pointer text-blue-800 dark:active:bg-slate-300 active:bg-blue-300 hover:bg-blue-300 dark:hover:bg-slate-300 transition-colors duration-200'
						onClick={() => swipe?.slideNext()}
						aria-label='Next Slide'
					>
						<FaChevronRight className='text-lg' />
					</button>
				</div>
			</div>
			{books.length > 0 ? (
				<Swiper
					slidesPerView={1}
					spaceBetween={15}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
					}}
					onSwiper={swiper => setSwipe(swiper)}
				>
					{books.map((i, x) => (
						<SwiperSlide key={i.id}>
							<BookCard i={i} x={x} setId={setId} />
						</SwiperSlide>
					))}
					<SwiperSlide className='h-full'>
						<div className='w-full min-h-[500px] border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-center'>
							<FaPlus />
						</div>
					</SwiperSlide>
				</Swiper>
			) : (
				<div className='text-center text-gray-500 dark:text-gray-400'>
					No books available.
				</div>
			)}
		</div>
	)
}

export default BooksSection
