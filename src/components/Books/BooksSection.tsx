import { useQuery } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BookService } from '../../services/books.service'
import { SwiperType } from '../../types'
import NoData from '../NoData'
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
	const { data, isLoading } = useQuery({
		queryKey: ['GET_RECOMMEND_BOOKS'],
		queryFn: async () => await BookService.get_recommended_books(),
	})

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
			{!isLoading && data && data.length > 0 ? (
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
					{data.map((b, x) => (
						<SwiperSlide key={b.id}>
							<BookCard book={b} x={x} setId={setId} />
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<NoData />
			)}
		</div>
	)
}

export default BooksSection
