import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import OTPField from '../components/OtpComponent'
import { Button } from '../components/ui'
import { AuthServices } from '../services'
import useAuthStore from '../store/useAuthStore'
import { ILogin } from '../types'

// function Login() {
// 	return (
// 		<div className='w-full'>
// 			<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
// 				<FormattedMessage id='login' />
// 			</h2>
// 			<form id='login' className='max-w-screen-xs mx-auto mt-[6%]'>
// 				<Input
// 					id='phone_number'
// 					label='Telefon raqam'
// 					placeholder='+998 (XX) XXX XX XX'
// 				/>
// 				<Input
// 					id='password'
// 					type='password'
// 					label='Password'
// 					placeholder='password'
// 					wrapper='mt-5'
// 				/>
// 				<Button className='w-full' type='submit'>
// 					<FormattedMessage id='login' />
// 				</Button>
// 				<div className='w-full flex my-[5%] pt-3 items-center py-2'>
// 					<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600'></div>
// 					<span className='text-lg uppercase mx-3 text-gray-500 dark:text-slate-300'>
// 						Yoki
// 					</span>
// 					<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600'></div>
// 				</div>
// 			</form>
// 			<div className='w-full py-2 text-center'>
// 				<Link
// 					to='/auth/register'
// 					className='text-lg text-blue-500 hover:underline'
// 				>
// 					Parolni unutdingizmi ?
// 				</Link>
// 				<br />
// 				<Link
// 					to='/auth/register'
// 					className='text-lg text-blue-500 hover:underline'
// 				>
// 					Akkaunt yo'qmi ?
// 				</Link>
// 			</div>
// 		</div>
// 	)
// }

function Login() {
	const { isAuthAvailable } = useAuthStore()
	const [code, setCode] = useState<string[]>(Array(6).fill(''))
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['VERIFY_CODE'],
		mutationFn: (data: ILogin) => AuthServices.login(data),
		onSuccess: () => {
			toast.success('Kirish muvaffaqiyatli amalga oshirildi!')
		},
		onError: () => {
			toast.error('Kiritilgan kod notog`ri yoki eskirgan!')
			navigator.vibrate(200)
		},
	})
	const navigate = useNavigate()
	async function verifyCode() {
		const data = await mutateAsync({ code: code.join('') })

		if (data?.token) {
			localStorage.setItem('token', data?.token)
			navigate('/auth/new-user')
		} else {
			navigate('/', { replace: true })
			window.location.reload()
		}
	}
	useEffect(() => {
		if (isAuthAvailable) {
			navigate('/')
		}
	}, [isAuthAvailable, navigate])
	return (
		<div className='w-full'>
			<h1 className='text-3xl text-white font-bold text-center'>Kirish</h1>
			<p className='text-lg dark:text-slate-300 mb-10 mt-4 p-2'>
				Kirish uchun{' '}
				<a
					href='https://t.me/kumkurgan_takm_bot'
					target='_blank'
					className='text-blue-500'
				>
					@kumkurgan_takm_bot
				</a>
				ga kiring va berilgan bir martalik kodni bu yerga kiriting
			</p>
			<OTPField setOtp={setCode} otp={code} />
			<Button
				className='w-full mt-7 select-none'
				disabled={code.filter(e => e !== '').length !== 6 || isPending}
				onClick={verifyCode}
			>
				Tasdislash
			</Button>
		</div>
	)
}

export default Login
