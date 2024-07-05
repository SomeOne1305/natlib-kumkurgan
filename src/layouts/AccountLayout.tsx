import { FaHeart, FaUser } from 'react-icons/fa'
import { MdOutlineComment } from 'react-icons/md'
import { NavLink, Outlet } from 'react-router-dom'
import { Span } from '../components/ui'

const AccountLayout = () => {
	return (
		<div className='w-full'>
			<div className='container'>
				<div className='w-full h-[35vh] mt-6'>
					<img
						src='https://4kwallpapers.com/images/wallpapers/glass-8k-5k-waves-1920x1080-11962.png'
						className='w-full h-full object-cover rounded-t-md'
						alt=''
					/>
				</div>
				<div className='w-full py-2 px-4 flex max-h-32 border border-t-0 border-gray-300 dark:border-gray-600'>
					<div className='size-56 p-1.5 dark:bg-gray-200 rounded-full bg-white -translate-y-1/2 border border-gray-300 dark:border-gray-600'>
						<div className='w-full h-full rounded-full flex items-center justify-center text-7xl font-bold bg-green-600 text-white'>
							AK
						</div>
					</div>
					<div className='p-3 ml-4 w-2/3'>
						<h3 className='text-xl font-bold dark:text-slate-100'>
							Ahmadullo Kholmuminov
						</h3>
						<p className='py-1 dark:text-slate-100'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
							harum nihil, officia maxime exercitationem vero dicta! Omnis magni
							explicabo voluptas saepe ipsam!
						</p>
					</div>
				</div>
				<div className='w-full'>
					<div className='w-full flex items-center mt-6 border-b border-gray-300 dark:border-gray-600'>
						<NavLink
							to={'edit'}
							className='py-3 px-4 [&.active]:font-bold text-base inline-flex items-center border-b-4 [&.active]:border-blue-700 [&.active]:text-blue-700 dark:[&.active]:border-blue-500 dark:[&.active]:text-blue-500 mr-0.5 border-transparent dark:text-slate-100'
						>
							<FaUser className='text-lg mr-2' />
							<Span onBase='text-lg' onLarge='text-xl'>
								Tahrirlash
							</Span>
						</NavLink>
						<NavLink
							to={'favourites'}
							className='py-3 px-4 [&.active]:font-bold text-base inline-flex items-center border-b-4 [&.active]:border-blue-700 [&.active]:text-blue-700 dark:[&.active]:border-blue-500 dark:[&.active]:text-blue-500 mr-0.5 border-transparent dark:text-slate-100'
						>
							<FaHeart className='text-lg mr-2' />
							<Span onBase='text-lg' onLarge='text-xl'>
								Mening kitoblarim
							</Span>
						</NavLink>
						<NavLink
							to={'my-comments'}
							className='py-3 px-4 [&.active]:font-bold text-base inline-flex items-center border-b-4 [&.active]:border-blue-700 [&.active]:text-blue-700 dark:[&.active]:border-blue-500 dark:[&.active]:text-blue-500 mr-0.5 border-transparent dark:text-slate-100'
						>
							<MdOutlineComment className='text-lg mr-2' />
							<Span onBase='text-lg' onLarge='text-xl'>
								Mening sharhlarim
							</Span>
						</NavLink>
					</div>
				</div>
				<div className='w-full py-3'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default AccountLayout
