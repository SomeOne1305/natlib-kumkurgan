import { FaPlay } from 'react-icons/fa'
import { IoImageOutline } from 'react-icons/io5'
import Fancybox from './FancyBox'

const MediaSection = () => {
	return (
		<div className='w-full'>
			<div className='w-full py-3 my-4 border-b border-gray-800 dark:border-gray-400'>
				<h1 className='text-2xl font-bold dark:text-slate-100'>
					Multimedialar
				</h1>
			</div>
			<Fancybox
				options={{
					Carousel: {
						infinite: false,
					},
				}}
			>
				<div className='w-full grid grid-cols-4 gap-3'>
					<a
						data-fancybox='gallery'
						href='https://lipsum.app/id/60/1600x1200'
						className='flex flex-col group mt-4'
					>
						<div className='relative w-full rounded-lg overflow-hidden'>
							<img
								src='https://lipsum.app/id/60/200x150'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#1e305198] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
								<div className='pt-4 pl-5 pr-4 pb-4 bg-[#142440] rounded-full z-10'>
									<IoImageOutline className='text-3xl text-white' />
								</div>
							</div>
						</div>
						<h3 className='text-lg font-bold dark:text-slate-100 px-1 py-3'>
							Today is your day
						</h3>
					</a>
					<a
						data-fancybox='gallery'
						href='https://videos.pexels.com/video-files/20184664/20184664-hd_1920_1080_30fps.mp4'
						className='flex flex-col group mt-4'
					>
						<div className='relative w-full rounded-lg overflow-hidden'>
							<img
								src='https://lipsum.app/id/88/200x150'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#1e305198] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
								<div className='pt-4 pl-5 pr-4 pb-4 bg-[#142440] rounded-full z-10'>
									<FaPlay className='text-3xl text-white' />
								</div>
							</div>
						</div>
						<h3 className='text-lg font-bold dark:text-slate-100 px-1 py-3'>
							Today is your day
						</h3>
					</a>
					<a
						data-fancybox='gallery'
						href='https://www.youtube.com/watch?v=H-ur2ZeSLOc'
						className='flex flex-col group mt-4'
					>
						<div className='relative w-full rounded-lg overflow-hidden'>
							<img
								src='https://lipsum.app/id/25/200x150'
								className='w-full h-full object-cover'
							/>
							<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#1e305198] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
								<div className='pt-4 pl-5 pr-4 pb-4 bg-[#142440] rounded-full z-10'>
									<FaPlay className='text-3xl text-white' />
								</div>
							</div>
						</div>
						<h3 className='text-lg font-bold dark:text-slate-100 px-1 py-3'>
							Today is your day
						</h3>
					</a>
				</div>
			</Fancybox>
		</div>
	)
}

export default MediaSection
