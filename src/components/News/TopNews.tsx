import { useQuery } from '@tanstack/react-query'
import { FaEye, FaRegCalendar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { STORAGE_PATH } from '../../constants/storage'
import { NewsService } from '../../services/news.service'
import { useLangStore } from '../../store'

const TopNews = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['GET_TOP_NEWS'],
		queryFn: async () => await NewsService.get_latest_news(),
	})
	const { lang } = useLangStore()
	console.log(data)

	return (
		<div className='w-full py-3 my-4'>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{isLoading ? (
					<span>loading...</span>
				) : (
					data && (
						<>
							<div className='flex md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden'>
								<img
									src={STORAGE_PATH + '/news/' + data?.[0].image}
									className='w-full object-cover rounded-lg'
									alt={data?.[0].title[lang]}
								/>
								<div className='absolute top-0 left-0 p-3 w-full h-full flex flex-col group justify-end'>
									<div className='w-full translate-y-12 transition-transform duration-500 group-hover:translate-y-0'>
										<Link to={'/news/' + data?.[0].slug} className='w-full'>
											<div className='w-full mb-2'>
												<h1 className='text-2xl text-white font-bold line-clamp-2'>
													{data?.[0].title[lang]}
												</h1>
											</div>
											<div className='w-full py-2 mt-2'>
												<div className='inline-flex items-center text-white mr-3'>
													<FaRegCalendar className='text-xl mr-1' />
													<span className='text-base'>
														{new Date(data?.[0].createdAt).toLocaleDateString()}
													</span>
												</div>
												<div className='inline-flex items-center text-white mr-3'>
													<FaEye className='text-xl mr-1' />
													<span className='text-base'>{data?.[0].views}</span>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>

							<div className='flex relative overflow-hidden'>
								<img
									src={STORAGE_PATH + '/news/' + data?.[1].image}
									className='w-full object-cover rounded-lg'
									alt={data?.[1].title[lang]}
								/>
								<div className='absolute top-0 left-0 p-3 w-full h-full flex flex-col group justify-end'>
									<div className='w-full translate-y-12 transition-transform duration-500 group-hover:translate-y-0'>
										<Link to={'/news/' + data?.[1].slug} className='w-full'>
											<div className='w-full mb-2'>
												<h1 className='text-xl text-white font-bold line-clamp-2'>
													{data?.[1].title[lang]}
												</h1>
											</div>
											<div className='w-full py-2 mt-2'>
												<div className='inline-flex items-center text-white mr-3'>
													<FaRegCalendar className='text-lg mr-1' />
													<span className='text-base'>
														{new Date(data?.[1].createdAt).toLocaleDateString()}
													</span>
												</div>
												<div className='inline-flex items-center text-white mr-3'>
													<FaEye className='text-lg mr-1' />
													<span className='text-base'>{data?.[1].views}</span>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className='flex relative overflow-hidden'>
								<img
									src={STORAGE_PATH + '/news/' + data?.[2].image}
									className='w-full object-cover rounded-lg'
									alt={data?.[2].title[lang]}
								/>
								<div className='absolute top-0 left-0 p-3 w-full h-full flex flex-col group justify-end'>
									<div className='w-full translate-y-12 transition-transform duration-500 group-hover:translate-y-0'>
										<Link to={'/news/' + data?.[2].slug} className='w-full'>
											<div className='w-full mb-2'>
												<h1 className='text-xl text-white font-bold line-clamp-2'>
													{data?.[2].title[lang]}
												</h1>
											</div>
											<div className='w-full py-2 mt-2'>
												<div className='inline-flex items-center text-white mr-3'>
													<FaRegCalendar className='text-lg mr-1' />
													<span className='text-base'>
														{new Date(data?.[2].createdAt).toLocaleDateString()}
													</span>
												</div>
												<div className='inline-flex items-center text-white mr-3'>
													<FaEye className='text-lg mr-1' />
													<span className='text-base'>{data?.[2].views}</span>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</>
					)
				)}
			</div>
		</div>
	)
}

export default TopNews
