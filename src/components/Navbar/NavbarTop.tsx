import { FaEnvelope, FaFacebook, FaTelegram, FaYoutube } from 'react-icons/fa'
import { IoLogInOutline } from 'react-icons/io5'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'
import Dropdown from './Dropdown'
import LangSwitch from './LangSwitch'
import ThemeSwitch from './ThemeSwitch'
import ViewSwitch from './ViewSwitch'

const NavbarTop = () => {
	const { isAuthAvailable } = useAuthStore()

	return (
		<div className='w-full bg-[#264DB1] dark:bg-[#4945FF]'>
			{/* <MobileBar /> */}
			<div className='container'>
				<div className='w-full flex items-center justify-between py-3'>
					<div className='inline-flex items-center gap-2'>
						<div className='p-1 rounded-md text-white bg-[#4465BA] dark:bg-[#8383cc]'>
							<FaFacebook className='text-base' />
						</div>
						<div className='p-1 rounded-md text-white bg-[#4465BA] dark:bg-[#8383cc]'>
							<FaYoutube className='text-base' />
						</div>
						<div className='p-1 rounded-md text-white bg-[#4465BA] dark:bg-[#8383cc]'>
							<FaTelegram className='text-base' />
						</div>

						<FaEnvelope className='text-white ml-4 mr-1 max-lg:hidden' />
						<span className='text-sm text-white max-lg:hidden'>
							<FormattedMessage id='email' />: info@natlib.uz
						</span>
					</div>
					<div className='inline-flex items-center gap-4'>
						<ThemeSwitch />
						<LangSwitch />
						<ViewSwitch />
						{isAuthAvailable && <Dropdown />}

						{!isAuthAvailable && (
							<Link
								to={'/auth/login'}
								className='inline-flex items-center text-white text-sm max-lg:hidden'
							>
								<IoLogInOutline className='text-xl mr-1' />
								<span className='hover:underline'>
									<FormattedMessage id='login' />
								</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavbarTop
