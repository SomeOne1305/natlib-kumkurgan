import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { Button, Input } from '../components/ui'

function Register() {
	return (
		<div className='w-full'>
			<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
				<FormattedMessage id='register' />
			</h2>
			<form action='#' className='space-y-8'>
				<div className='flex items-center gap-2'>
					<Input id='name' label='Your name' placeholder='name' required />
					<Input
						id='surname'
						label='Your surname'
						placeholder='surname'
						required
					/>
				</div>
				<div className='flex items-center gap-2'>
					<div className='w-full'>
						<label
							htmlFor='subject'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Job
						</label>
						<select
							id='subject'
							className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-gray-200 focus:ring outline-none'
							required
							defaultValue={1}
						>
							<option value='ask-question'>Teacher</option>
							<option value='collabration'>Pupil</option>
							<option value='other'>Other</option>
						</select>
					</div>
					<Input
						id='phone-number'
						label='Phone number'
						placeholder='+998 (XX) XXX-XX-XX'
						required
					/>
				</div>

				<Input label='Password' id='password' type='password' />
				<Button type='submit' className='w-full'>
					<FormattedMessage id='register' />
				</Button>
			</form>
			<div className='w-full flex my-[5%] items-center py-2'>
				<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600'></div>
				<span className='text-lg uppercase mx-3 text-gray-500 dark:text-slate-300'>
					Yoki
				</span>
				<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600'></div>
			</div>
			<div className='w-full py-4 text-center'>
				<Link
					to='/auth/login'
					className='text-lg text-blue-500 hover:underline'
				>
					Akkaunt bormi ?
				</Link>
			</div>
		</div>
	)
}

export default Register
