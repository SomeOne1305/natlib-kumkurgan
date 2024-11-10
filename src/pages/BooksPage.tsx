import 'swiper/css/scrollbar'
import videoSrc from '../assets/background.mp4'
import Books from '../components/Books/Books'
import { Span } from '../components/ui'

const BooksPage = () => {
	return (
		<div className='w-full'>
			<div className='w-full h-[350px] relative'>
				<video
					src={videoSrc}
					className='w-full h-full object-cover'
					loop
					autoPlay
					muted
				></video>
				<div className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-[#000000a2]'></div>
				<div className='absolute top-0 left-0 w-full z-10'>
					<div className='p-2'>
						<form className='max-w-lg mt-[10%] mx-auto'>
							<label
								htmlFor='default-search'
								className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
							>
								Search
							</label>
							<div className='relative'>
								<div className='absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none'>
									<svg
										className='w-4 h-4 text-gray-500 dark:text-gray-400'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 20 20'
									>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
										/>
									</svg>
								</div>
								<input
									type='search'
									id='default-search'
									className='block w-full p-5 m-2 outline-none focus:ring-[2px] ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Search Mockups, Logos...'
									required
								/>
								<button
									type='submit'
									className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
								>
									Search
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='w-full'>
				<div className='container'>
					<div className='w-full py-3 mx-5'>
						<div className='w-full py-3 mb-5'>
							<h2 className='text-3xl font-bold dark:text-slate-100'>
								Kitoblar
							</h2>
						</div>
						<div className='w-full flex items-center overflow-x-auto scroll-hide'>
							{[
								'Biography',
								'Business',
								'Chick Lit',
								"Children's",
								'Christian',
								'Classics',
								'Comics',
								'Contemporary',
								'Cookbooks',
								'Crime',
								'Ebooks',
								'Fantasy',
								'Fiction',
								'Gay and Lesbian',
								'Graphic Novels',
								'Historical Fiction',
								'History',
								'Horror',
								'Humor and Comedy',
							].map(item => (
								<Span
									onBase=''
									onLarge=''
									className='px-4 py-2 rounded-3xl text-nowrap bg-blue-200 text-blue-700 mx-2 first:ml-0 select-none first:bg-blue-500 first:text-white'
									key={'genre_' + item}
								>
									{item}
								</Span>
							))}
						</div>
						<div className='w-full'>
							<Books />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BooksPage
