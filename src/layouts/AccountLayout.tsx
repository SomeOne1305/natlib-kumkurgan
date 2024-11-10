import { FaHeart, FaUser } from 'react-icons/fa'
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Span } from '../components/ui'
import { useLangStore } from '../store'
import useAuthStore from '../store/useAuthStore'

const ErrorMsg = (lang: 'uz' | 'ru' | 'eng') => {
	switch (lang) {
		case 'uz':
			return "Iltimos avval ro'yxatdan o'ting !"
		case 'ru':
			return 'Please register first!'
		case 'eng':
			return 'Пожалуйста, сначала зарегистрируйтесь!'
	}
}

const AccountLayout = () => {
	const { isAuthAvailable, user } = useAuthStore()
	const location = useLocation()
	const { lang } = useLangStore()
	if (!isAuthAvailable) {
		toast.error(ErrorMsg(lang))
		return <Navigate to={'/auth/login'} state={{ from: location }} replace />
	}
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
					<div className='size-28 sm:size-32 md:size-36 lg:size-44 xl:size-48 2xl:size-56 p-0.5 md:p-1.5 dark:bg-gray-200 rounded-full bg-white md:-translate-y-1/2 border border-gray-300 dark:border-gray-600'>
						<div className='w-full h-full rounded-full flex items-center justify-center text-3xl md:text-7xl font-bold bg-green-600 text-white'>
							{user &&
								(
									user?.first_name.charAt(0) + user?.last_name.charAt(0)
								).toUpperCase()}
						</div>
					</div>
					<div className='p-3 ml-4 w-2/3'>
						<h3 className='text-xl font-bold dark:text-slate-100'>
							{`${user?.first_name} ${user?.last_name}`}
						</h3>
						<p className='py-1 dark:text-slate-100'>
							{lang === 'uz'
								? "Qumqo'rg'on tuman axborot-kutubxona markazi foydalanuvchisi"
								: lang === 'ru'
								? 'Пользователь информационно-библиотечного центра Кумкурганского района'
								: 'User of the Kumkurgan District Information Library Center'}
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
								{lang === 'uz'
									? 'Tahrirlash'
									: lang === 'ru'
									? 'Редактировать'
									: 'Edit'}
							</Span>
						</NavLink>
						<NavLink
							to={'favourites'}
							className='py-3 px-4 [&.active]:font-bold text-base inline-flex items-center border-b-4 [&.active]:border-blue-700 [&.active]:text-blue-700 dark:[&.active]:border-blue-500 dark:[&.active]:text-blue-500 mr-0.5 border-transparent dark:text-slate-100'
						>
							<FaHeart className='text-lg mr-2' />
							<Span onBase='text-lg' onLarge='text-xl'>
								{lang === 'uz'
									? 'Mening kitoblarim'
									: lang === 'ru'
									? 'Мои книги'
									: 'My Books'}
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
