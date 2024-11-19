import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Input, PassportInput } from '../components/ui'
import {
	RegisterUserDataForm,
	RegisterUserScheme,
} from '../schemes/user.scheme'
import { AuthServices } from '../services'
import { useLangStore } from '../store'
import '../styles/tel-input.css'

function NewUser() {
	const { lang } = useLangStore()
	const {
		handleSubmit,
		register,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<RegisterUserDataForm>({
		resolver: zodResolver(RegisterUserScheme),
		defaultValues: { phone_number: '+998' }, // Set initial value for phone number
	})

	const token = localStorage.getItem('token')
	const { mutateAsync } = useMutation({
		mutationKey: ['REGISTER_USER'],
		mutationFn: (data: RegisterUserDataForm & { token: string }) =>
			AuthServices.updateUser(data),
		onSuccess: () => {
			localStorage.removeItem('token')
			window.location.href = '/'
			toast.success('Xush kelibsiz!')
		},
		onError: () => {
			toast.error('Xatolik yuz berdi!')
			navigator.vibrate(200)
		},
	})

	const onSubmit = async (data: RegisterUserDataForm) => {
		const { passport_id, ...others } = data
		if (token) {
			await mutateAsync({
				...others,
				passport_id: passport_id.split(' ').join(''),
				token,
			})
		}
	}

	useLayoutEffect(() => {
		register('phone_number')
	}, [register])
	if (!token) {
		return <Navigate to={'/'} />
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full flex flex-col items-center'
		>
			<div className='w-full'>
				<Input label='Ism' wrapper='mt-3 pt-2' {...register('first_name')} />
				<div className='w-full my-2'>
					{errors.first_name && (
						<p className='text-red-500'>
							{lang == 'uz'
								? "Bu maydon bo'sh bo'lmasin !"
								: lang == 'ru'
								? 'Не оставляйте это поле пустым!'
								: 'Do not leave this field empty!'}
						</p>
					)}
				</div>
				<Input
					label='Familiya'
					wrapper='mt-3 pt-2'
					{...register('last_name')}
				/>
				<div className='w-full my-2'>
					{errors.last_name && (
						<p className='text-red-500'>
							{lang == 'uz'
								? "Bu maydon bo'sh bo'lmasin !"
								: lang == 'ru'
								? 'Не оставляйте это поле пустым!'
								: 'Do not leave this field empty!'}
						</p>
					)}
				</div>
				<PhoneInput
					value={getValues('phone_number')}
					inputProps={{
						required: true,
						className:
							'block p-3 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-gray-200 focus:ring outline-none',
					}}
					containerClass='mt-5'
					onChange={val =>
						setValue('phone_number', val.length < 4 ? '+998' : val)
					}
					onlyCountries={['uz']}
					country={'uz'}
					inputClass='w-full'
					placeholder='+998 XX XXX-XX-XX'
					specialLabel='Telefon raqam'
					masks={{
						uz: '(..) ...-..-..',
					}}
					onFocus={() => setValue('phone_number', '+998')}
					copyNumbersOnly
					disableDropdown
				/>
				<div className='w-full my-2'>
					{errors.phone_number && (
						<p className='text-red-500'>
							{lang == 'uz'
								? "Bu maydon bo'sh bo'lmasin !"
								: lang == 'ru'
								? 'Не оставляйте это поле пустым!'
								: 'Do not leave this field empty!'}
						</p>
					)}
				</div>
				<PassportInput
					label='Passport number'
					id='passport_number'
					placeholder='AA 9999999'
					onInput={(e: ChangeEvent<HTMLInputElement>) =>
						setValue('passport_id', e.target.value)
					}
					required
				/>
				<div className='w-full my-2'>
					{errors.passport_id && (
						<p className='text-red-500'>
							{lang == 'uz'
								? "Bu maydon bo'sh bo'lmasin !"
								: lang == 'ru'
								? 'Не оставляйте это поле пустым!'
								: 'Do not leave this field empty!'}
						</p>
					)}
				</div>
			</div>

			<Button className='mt-5 w-full' type='submit'>
				Ro'yxatdan o'tish
			</Button>
		</form>
	)
}

export default NewUser
