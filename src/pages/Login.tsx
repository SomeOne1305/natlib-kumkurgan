import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { Button, Input } from '../components/ui'

function Login() {
	return (
		<div className='w-full'>
			<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
				<FormattedMessage id='login' />
			</h2>
			<form id='login' className='max-w-screen-xs mx-auto mt-[6%]'>
				<Input
					id='phone_number'
					label='Telefon raqam'
					placeholder='+998 (XX) XXX XX XX'
				/>
				<Input
					id='password'
					type='password'
					label='Password'
					placeholder='password'
					wrapper='mt-5'
				/>
				<Button className='w-full' type='submit'>
					<FormattedMessage id='login' />
				</Button>
				<div className='w-full flex my-[5%] pt-3 items-center py-2'>
					<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600'></div>
					<span className='text-lg uppercase mx-3 text-gray-500 dark:text-slate-300'>
						Yoki
					</span>
					<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600'></div>
				</div>
			</form>
			<div className='w-full py-2 text-center'>
				<Link
					to='/auth/register'
					className='text-lg text-blue-500 hover:underline'
				>
					Parolni unutdingizmi ?
				</Link>
				<br />
				<Link
					to='/auth/register'
					className='text-lg text-blue-500 hover:underline'
				>
					Akkaunt yo'qmi ?
				</Link>
			</div>
		</div>
	)
}

export default Login
