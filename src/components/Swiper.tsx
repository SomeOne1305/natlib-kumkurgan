import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSwiper } from 'swiper/react'

export const SlidePrevBtn = () => {
	const swiper = useSwiper()
	return (
		<button
			className='p-2 bg-blue-200 dark:bg-white rounded-full cursor-pointer dark:active:bg-slate-300 text-blue-800 active:bg-blue-300'
			onClick={() => swiper.slidePrev()}
		>
			<FaChevronLeft className='text-lg' />
		</button>
	)
}

export const SlideNextBtn = () => {
	const swiper = useSwiper()
	return (
		<button
			className='p-2 bg-blue-200 dark:bg-white rounded-full cursor-pointer dark:active:bg-slate-300 text-blue-800 active:bg-blue-300'
			onClick={() => swiper.slideNext()}
		>
			<FaChevronRight className='text-lg' />
		</button>
	)
}
