import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import {
	FaEye,
	FaFacebook,
	FaRegCalendarAlt,
	FaRegClock,
	FaShareSquare,
	FaTelegram,
} from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { FormattedMessage } from 'react-intl'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { STORAGE_PATH } from '../../constants/storage'
import { CommentFormData, CommentScheme } from '../../schemes/comment.schema'
import { NewsService } from '../../services/news.service'
import { useLangStore } from '../../store'
import { NewsType } from '../../types/news.type'
import { timeAgo } from '../../utils/date-difference'
import { dateToString } from '../../utils/date-to-string'
import Seo from '../seo/Seo'
import { Paragraph, Span } from '../ui'
const NewsDetails = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const shareLink = window.location.origin + location.pathname
	const data = useLoaderData() as NewsType
	const { lang } = useLangStore()
	const {
		data: comments,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['GET_NEWS_COMMENTS'],
		queryFn: async () => await NewsService.get_comments_of_news(data.id),
	})
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<CommentFormData>({
		resolver: zodResolver(CommentScheme),
	})
	const { mutateAsync } = useMutation({
		mutationKey: ['WRITE_COMMENT', data.id],
		mutationFn: async (arg: CommentFormData) =>
			await NewsService.writeComment(arg, data.id),
		onSuccess: async () => {
			await refetch()
			reset({ message: '', name: '' })
		},
		onError: err => console.log(err),
	})
	const onSubmit = async (data: CommentFormData) => {
		await mutateAsync(data)
	}
	return (
		<div className='w-full p-4'>
			<Seo
				title={data?.title?.[lang]}
				description={data?.body?.[lang]}
				image_url={STORAGE_PATH + 'news/' + data?.image}
			/>
			<div
				className='inline-block p-1.5 rounded-full hover:bg-blue-100 transition-colors duration-150 mb-4 cursor-pointer dark:hover:bg-[#1e283f]'
				onClick={() => navigate(-1)}
			>
				<IoArrowBack className='text-2xl sm:text-3xl text-blue-950 dark:text-white' />
			</div>
			<img
				src={STORAGE_PATH + 'news/' + data?.image}
				className='w-full object-cover rounded-lg mb-3'
				alt=''
			/>
			<div className='flex items-center justify-between gap-4 mt-8 mb-2 flex-wrap'>
				<div className='inline-flex'>
					<div className='inline-flex items-center '>
						<FaRegCalendarAlt className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>
							{dateToString(lang, data.createdAt)}
						</span>
					</div>
					<div className='inline-flex items-center ml-3'>
						<FaRegClock className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>{`${new Date(
							data.createdAt
						).getHours()}:${new Date(data.createdAt).getMinutes()}`}</span>
					</div>

					<div className='inline-flex items-center ml-6'>
						<FaEye className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>
							{data.views}
						</span>
					</div>
				</div>
				<div className='inline-flex items-center'>
					<FaShareSquare className='text-lg sm:text-xl text-blue-500  mr-1' />
					<span className='text-lg sm:text-xl mr-5 dark:text-white'>
						Ulashing:
					</span>
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}&quote=${data?.title?.[lang]}`}
						className=' m-1 sm:mx-1.5 p-1'
					>
						<FaFacebook className='text-xl sm:text-2xl md:text-3xl  text-blue-700' />
					</a>
					<a
						href={`https://telegram.me/share/url?url=${shareLink}&text=${data.title?.[lang]}`}
						className=' m-1 sm:mx-1.5 p-1'
					>
						<FaTelegram className='text-xl sm:text-2xl md:text-3xl text-sky-500' />
					</a>
				</div>
			</div>
			<div className='py-2 text-3xl font-bold dark:text-slate-100'>
				<h2>
					<Span onBase='text-[33px]' onLarge='text-4xk'>
						{data?.title?.[lang]}
					</Span>
				</h2>
			</div>

			<div className='w-full'>
				<Paragraph
					onBase='text-xl'
					onLarge='text-[22px]'
					className='text-lg mt-4 dark:text-gray-300'
				>
					{data?.body?.[lang]}
				</Paragraph>

				<div className='w-full flex items-center flex-wrap my-3 py-3 '>
					<h3 className='text-xl font-bold dark:text-white'>Teglar: </h3>

					{data?.tags?.[lang].split(',').map((tag, i) => (
						<span
							key={'news_' + data.id + '_tag_' + i}
							className='p-1 text-sm mt-1.5 rounded-lg bg-blue-500 text-white hover:underline mx-1.5'
						>
							#{tag}
						</span>
					))}
				</div>
				<div className='w-full py-4'>
					<div className='w-full py-2 border-b dark:border-gray-600 mt-[5%]'>
						<Span
							onBase='text-[27px]'
							onLarge='text-3xl'
							className='text-3xl font-bold dark:text-slate-100'
						>
							Izohlar
						</Span>
					</div>
					<div className='w-full p-4 flex flex-col-reverse lg:flex-row'>
						<div className='lg:w-2/3'>
							<div className='w-full p-2'>
								{isLoading ? (
									<span>Loading...</span>
								) : (
									comments &&
									comments.length > 0 &&
									comments.map((comment, i) => (
										<div
											className='w-full p-2 inline-flex items-start rounded-md'
											key={'comment_' + comment.id}
										>
											<div className='w-10 h-10' key={comment + '_' + i}>
												<img
													src='https://ik.imagekit.io/lhvoxkb7i/users/default-user_kHqfmeEDX?updatedAt=1715854915388'
													alt=''
													className='w-10 h-full rounded-full'
												/>
											</div>
											<Paragraph
												onBase='text-lg'
												onLarge='text-xl'
												className='w-[95%] m-1 mt-0 p-[0_8px_8px_8px] text-base dark:text-gray-300 text-gray-700 block'
											>
												<span className='font-bold mr-1 dark:text-slate-100'>
													{comment.name}:
												</span>
												{comment.message}
												<p className='w-full mt-2'>
													<span className='text-sm text-blue-500 mr-4'>
														{`${new Date(comment.createdAt)
															.getHours()
															.toString()
															.padStart(2, '0')}:${new Date(comment.createdAt)
															.getMinutes()
															.toString()
															.padStart(2, '0')}`}
													</span>

													<span className='text-sm text-gray-400 mr-4'>
														{timeAgo(comment.createdAt, lang)}
													</span>
												</p>
											</Paragraph>
										</div>
									))
								)}
								{comments && comments.length == 0 && (
									<div className='w-full'>
										<p className='text-lg dark:text-slate-500 text-end max-w-md mb-6'>
											{lang == 'uz'
												? "Hali hech qanday izoh yo'q."
												: lang == 'ru'
												? 'Пока нет комментариев.'
												: 'There are no comments yet.'}
										</p>
									</div>
								)}
							</div>
						</div>
						<div className='lg:w-1/3'>
							<form
								id='commentForm'
								className='p-5 rounded-lg bg-[#f4f6f6] dark:bg-[#172442]'
								onSubmit={handleSubmit(onSubmit)}
							>
								<div className='form-group'>
									<h4 className='text-xl font-semibold dark:text-slate-100'>
										<FormattedMessage id='comment_title' />
									</h4>
									<label
										htmlFor='message'
										className='block mt-4 mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'
									>
										<FormattedMessage id='comment_mes' />
									</label>
									<textarea
										id='message'
										{...register('message')}
										cols={30}
										rows={5}
										className='form-control block w-full mt-1 dark:bg-slate-900 dark:text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none p-1'
									></textarea>
									<div className='w-full py-2  text-red-500'>
										{errors.message && (
											<FormattedMessage id='comment_err_mes' />
										)}
									</div>
								</div>
								<div className='form-group'>
									<label
										htmlFor='fullname'
										className='block mt-4 mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'
									>
										<FormattedMessage id='comment_name' />
									</label>
									<input
										type='text'
										{...register('name')}
										id='fullname'
										className='form-control block w-full mt-1 p-1.5 rounded-md dark:bg-slate-900 dark:text-white shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
									<div className='w-full py-2 text-red-500'>
										{errors.name && <FormattedMessage id='comment_err_name' />}
									</div>
								</div>

								<div className='w-full py-2 mt-2 flex justify-end'>
									<button
										type='submit'
										id='post'
										className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline-none'
									>
										<FormattedMessage id='comment_sub' />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsDetails
