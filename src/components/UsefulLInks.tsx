import Swiper from 'swiper'
import { A11y, Controller, Keyboard } from 'swiper/modules'
import { Swiper as Slider, SwiperSlide } from 'swiper/react'

import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import icon from '../assets/gerb.png'
import { useful_links } from '../constants/ministries'
import { Paragraph } from './ui'

const UsefulLInks = () => {
	const [swipe, setSwipe] = useState<Swiper>()
	const [cards, setCards] = useState<number>(0)
	const width = window.innerWidth
	useEffect(() => {
		width > 1280
			? setCards(4)
			: window.innerWidth < 1280 && window.innerWidth > 780
			? setCards(2)
			: setCards(1)
	}, [width])
	return (
		<div className='w-full mt-6'>
			<div className='w-full py-4 flex justify-between items-center mt-[5%] mb-4'>
				<h2 className='text-2xl font-bold dark:text-slate-100'>
					Foydali havolalar
				</h2>
				<div className='inline-flex gap-4 items-center'>
					<button
						className='p-2 bg-blue-200 dark:bg-white rounded-full cursor-pointer dark:active:bg-slate-300 text-blue-800 active:bg-blue-300'
						onClick={() => swipe?.slidePrev()}
					>
						<FaChevronLeft className='text-lg' />
					</button>
					<button
						className={
							'p-2 bg-blue-200 dark:bg-white rounded-full cursor-pointer text-blue-800 dark:active:bg-slate-300 active:bg-blue-300'
						}
						onClick={() => swipe?.slideNext()}
					>
						<FaChevronRight className='text-lg' />
					</button>
				</div>
			</div>

			<Slider
				slidesPerGroupSkip={1}
				spaceBetween={10}
				slidesPerView={cards}
				modules={[Keyboard, Controller, A11y]}
				draggable={true}
				a11y={{
					nextSlideMessage: 'Swiped',
				}}
				onSwiper={swiper => setSwipe(swiper)}
			>
				{useful_links.map((item, i) => (
					<SwiperSlide key={'useful_link_' + i}>
						<div className='w-full min-h-[182px] flex flex-col items-center text-center rounded-lg border border-gray-200 dark:border-gray-600 p-3'>
							<img src={icon} className='size-20' alt='' />
							<a
								href={item.url}
								target='_blank'
								className='text-lg dark:text-slate-100 font-bold mt-5'
							>
								<Paragraph
									className='text-base'
									onBase='text-lg'
									onLarge='text-xl'
								>
									{item.title}
								</Paragraph>
							</a>
						</div>
					</SwiperSlide>
				))}
			</Slider>
		</div>
	)
}

export default UsefulLInks
