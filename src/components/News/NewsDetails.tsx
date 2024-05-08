import {
	FaEye,
	FaFacebook,
	FaRegCalendarAlt,
	FaRegClock,
	FaShareSquare,
	FaTelegram,
} from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const NewsDetails = () => {
	const { slug } = useParams<{ slug: string }>()
	const navigate = useNavigate()
	const location = useLocation()
	const shareLink = window.location.origin + location.pathname
	console.log(shareLink, slug)

	return (
		<div className='w-full p-4'>
			<div
				className='inline-block p-1.5 rounded-full hover:bg-blue-100 transition-colors duration-150 mb-4 cursor-pointer dark:hover:bg-[#1e283f]'
				onClick={() => navigate(-1)}
			>
				<IoArrowBack className='text-2xl sm:text-3xl text-blue-950 dark:text-white' />
			</div>
			<img
				src='https://bookland.dexignzone.com/xhtml/images/blog/default/blog1.jpg'
				className='w-full object-cover rounded-lg mb-3'
				alt=''
			/>
			<div className='flex items-center justify-between gap-4 mt-8 mb-2 flex-wrap'>
				<div className='inline-flex'>
					<div className='inline-flex items-center '>
						<FaRegCalendarAlt className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>
							27 Aprel, 2024
						</span>
					</div>
					<div className='inline-flex items-center ml-3'>
						<FaRegClock className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>16:33</span>
					</div>

					<div className='inline-flex items-center ml-6'>
						<FaEye className='text-base sm:text-lg text-blue-600 mr-1' />
						<span className='text-sm sm:text-base text-gray-500'>163</span>
					</div>
				</div>
				<div className='inline-flex items-center'>
					<FaShareSquare className='text-lg sm:text-xl text-blue-500  mr-1' />
					<span className='text-lg sm:text-xl mr-5 dark:text-white'>
						Ulashing:
					</span>
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}&quote=<Title goes here...>`}
						className=' m-1 sm:mx-1.5 p-1'
					>
						<FaFacebook className='text-xl sm:text-2xl md:text-3xl  text-blue-700' />
					</a>
					<a
						href={`https://telegram.me/share/url?url=${shareLink}&text=<Title goes here...>`}
						className=' m-1 sm:mx-1.5 p-1'
					>
						<FaTelegram className='text-xl sm:text-2xl md:text-3xl text-sky-500' />
					</a>
				</div>
			</div>
			<div className='py-2 text-3xl font-bold dark:text-slate-100'>
				<h2>
					The Time Is Running Out! Think About These 6 Ways To Change Your
					Library. How To Restore Library?
				</h2>
			</div>

			<div className='w-full text-lg'>
				<p className='mt-3 dark:text-gray-300'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
					adipisci quidem magnam, repellendus dolore aliquid atque qui. Deleniti
					quos veritatis nam non modi ipsum. Enim repudiandae dolores vero ut
					odio cumque, earum saepe nobis id quas aut esse dolore.
				</p>
				<p className='mt-3 dark:text-gray-300'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
					mollitia incidunt id consequuntur expedita inventore molestiae optio
					provident eveniet quisquam sequi ut a eligendi, molestias odio
					explicabo facilis, placeat dolor. Aliquam harum distinctio possimus
					velit in deserunt inventore ab consequatur enim suscipit dolorum cum
					voluptate odit aut, et, at impedit obcaecati illum.
				</p>
				<p className='mt-4 dark:text-gray-300'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					mollitia velit ea quod. Unde rerum perspiciatis nostrum deleniti
					ratione? Quo voluptas, laboriosam laudantium reprehenderit nam
					incidunt quae dolore iure expedita quos aliquam fugiat et eligendi,
					quidem delectus, esse praesentium rerum temporibus sequi
					necessitatibus inventore odio ducimus? Nihil eaque laboriosam ratione
					accusamus, obcaecati autem quam veritatis asperiores, dolore quia,
					voluptatum distinctio molestiae placeat consequuntur ipsum doloribus
					inventore tempora mollitia magnam eos deserunt impedit? Amet esse fuga
					inventore veniam nulla odit recusandae mollitia culpa dolorum fugit
					distinctio facere molestias cumque quidem animi, voluptas magni
					perferendis voluptatem eos! Rem dolor quo eum veniam earum tempora
					rerum quam debitis. Iste corrupti, aperiam suscipit, fugiat culpa
					sequi libero aut perspiciatis harum id expedita quisquam, similique
					dolorum modi exercitationem accusantium. Illum facere nam maxime sint
					odit quod eveniet asperiores quidem beatae itaque, eaque maiores
					recusandae ipsum accusamus, vero facilis. Autem distinctio cupiditate
					beatae eaque, qui eius!
				</p>

				<div className='w-full flex items-center flex-wrap my-3 py-3 '>
					<h3 className='text-xl font-bold dark:text-white'>Teglar: </h3>
					<span className='p-1 text-sm mt-1.5 rounded-lg bg-blue-500 text-white hover:underline mx-1.5'>
						#Yangilik
					</span>
					<span className='p-1 text-sm mt-1.5 rounded-lg bg-blue-500 text-white hover:underline mx-1.5'>
						#Vatan
					</span>
					<span className='p-1 text-sm mt-1.5 rounded-lg bg-blue-500 text-white hover:underline mx-1.5'>
						#Bayram
					</span>
					<span className='p-1 text-sm mt-1.5 rounded-lg bg-blue-500 text-white hover:underline mx-1.5'>
						#KitoblarKuni
					</span>
				</div>
			</div>
		</div>
	)
}

export default NewsDetails
