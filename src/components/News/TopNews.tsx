import { FaEye, FaRegCalendar } from 'react-icons/fa'

const TopNews = () => {
	return (
		<div className='w-full py-3 my-4'>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<div className='flex md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden'>
					<img
						src='https://www.mintrans.uz/files/original/publication/1358_1714580913.jpg'
						className='w-full object-cover rounded-lg'
						alt=''
					/>
					<div className='absolute top-0 left-0 p-3 w-full h-full flex flex-col group justify-end'>
						<div className='w-full translate-y-12 transition-transform duration-500 group-hover:translate-y-0'>
							<div className='w-full mb-2'>
								<h1 className='text-2xl text-white font-bold line-clamp-2'>
									Sojitz va Rönesans kompaniyalari DXSh asosida transport
									sohasidagi loyihalarda ishtirok etishga qiziqmoqda
								</h1>
							</div>
							<div className='w-full py-2 mt-2'>
								<div className='inline-flex items-center text-white mr-3'>
									<FaRegCalendar className='text-xl mr-1' />
									<span className='text-base'>23.04.2022</span>
								</div>
								<div className='inline-flex items-center text-white mr-3'>
									<FaEye className='text-xl mr-1' />
									<span className='text-base'>300</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='flex relative overflow-hidden'>
					<img
						src='https://www.mintrans.uz/files/original/publication/1358_1714580913.jpg'
						className='w-full object-cover rounded-lg'
						alt=''
					/>
					<div className='absolute top-0 left-0 p-3 w-full h-full flex flex-col group justify-end'>
						<div className='w-full translate-y-12 transition-transform duration-500 group-hover:translate-y-0'>
							<div className='w-full mb-2'>
								<h1 className='text-xl text-white font-bold line-clamp-2'>
									Sojitz va Rönesans kompaniyalari DXSh asosida transport
									sohasidagi loyihalarda ishtirok etishga qiziqmoqda
								</h1>
							</div>
							<div className='w-full py-2 mt-2'>
								<div className='inline-flex items-center text-white mr-3'>
									<FaRegCalendar className='text-lg mr-1' />
									<span className='text-base'>23.04.2022</span>
								</div>
								<div className='inline-flex items-center text-white mr-3'>
									<FaEye className='text-lg mr-1' />
									<span className='text-base'>300</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex relative overflow-hidden'>
					<img
						src='https://www.mintrans.uz/files/original/publication/1358_1714580913.jpg'
						className='w-full object-cover rounded-lg'
						alt=''
					/>
					<div className='absolute top-0 left-0 p-3 w-full h-full flex flex-col group justify-end'>
						<div className='w-full translate-y-12 transition-transform duration-500 group-hover:translate-y-0'>
							<div className='w-full mb-2'>
								<h1 className='text-xl text-white font-bold line-clamp-2'>
									Sojitz va Rönesans kompaniyalari DXSh asosida transport
									sohasidagi loyihalarda ishtirok etishga qiziqmoqda
								</h1>
							</div>
							<div className='w-full py-2 mt-2'>
								<div className='inline-flex items-center text-white mr-3'>
									<FaRegCalendar className='text-lg mr-1' />
									<span className='text-base'>23.04.2022</span>
								</div>
								<div className='inline-flex items-center text-white mr-3'>
									<FaEye className='text-lg mr-1' />
									<span className='text-base'>300</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopNews
