import { IoIosBook } from 'react-icons/io'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='w-full bg-white dark:bg-gray-900 mt-auto'>
			<div className='container px-6 py-12 mx-auto'>
				<hr className='my-6 border-gray-200 md:my-10 dark:border-gray-700' />

				<div className='flex flex-col items-center justify-between sm:flex-row'>
					<Link to='/' className='inline-flex items-center dark:text-slate-100'>
						<IoIosBook className='text-4xl' />
						<span className='font-bold text-lg'>Qumqo'rg'on TAKM</span>
					</Link>

					<p className='mt-4 text-base text-gray-500 sm:mt-0 dark:text-gray-300'>
						© Copyright {new Date().getFullYear()}.{' '}
						<FormattedMessage id='footer' />
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
