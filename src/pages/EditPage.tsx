import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button, Input } from '../components/ui'
import { queryClient } from '../constants/query'
import { UpdateUserFormData, UpdateUserScheme } from '../schemes/user.scheme'
import { UserService } from '../services/user.service'
import { useLangStore } from '../store'
import useAuthStore from '../store/useAuthStore'

const EditPage = () => {
	const { user } = useAuthStore()
	const { lang } = useLangStore()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<UpdateUserFormData>({
		resolver: zodResolver(UpdateUserScheme),
	})

	const { mutateAsync } = useMutation({
		mutationKey: ['UPDATE_ME'],
		mutationFn: async (data: UpdateUserFormData) =>
			await UserService.update_me(data),
		onSuccess: async () => {
			toast.success(
				lang === 'eng'
					? "User's data updated successfully"
					: lang === 'ru'
					? 'Данные пользователя были успешно обновлены'
					: "Foydalanuvchi ma'lumotlari muvaffaqiyatli yangilandi"
			)
			await queryClient.fetchQuery({ queryKey: ['GET_USER'] })
		},
		onError: () => {
			toast.error(
				lang === 'eng'
					? "Failed to update user's data"
					: lang === 'ru'
					? 'Не удалось обновить данные пользователя'
					: "Foydalanuvchi ma'lumotlarini yangilash muvaffaqiyatsiz bo'ldi"
			)
		},
	})

	const onSubmit = async (data: UpdateUserFormData) => {
		await mutateAsync(data)
	}

	useEffect(() => {
		if (user) {
			reset({
				first_name: user.first_name,
				last_name: user.last_name,
			})
		}
	}, [user, reset])

	return (
		<div className='w-full'>
			<div className='max-w-screen-md mt-6'>
				<form onSubmit={handleSubmit(onSubmit)} className='w-full gap-2'>
					<h2 className='text-3xl font-bold mb-4 dark:text-slate-100'>
						{lang === 'eng'
							? 'Personal details'
							: lang === 'ru'
							? 'Личные данные'
							: "Shaxsiy ma'lumotlar"}
					</h2>
					<Input
						type='text'
						{...register('first_name')}
						label={
							lang === 'eng' ? 'First name' : lang === 'ru' ? 'Имя' : 'Ism'
						}
						id='name'
						wrapper='mt-6'
					/>
					<Input
						type='text'
						{...register('last_name')}
						label={
							lang === 'eng'
								? 'Last name'
								: lang === 'ru'
								? 'Фамилия'
								: 'Familiya'
						}
						id='surname'
						wrapper='mt-6'
					/>
					<div className='w-full py-2'>
						{errors.last_name && (
							<span className='text-red-500'>
								{lang === 'eng'
									? 'This field must not be empty !'
									: lang === 'ru'
									? 'Это поле не должно быть пустым!'
									: "Bu maydon bo'sh bo'lmasligi kerak !"}
							</span>
						)}
					</div>
					<div className='w-full flex justify-end py-2'>
						<Button type='submit'>
							{lang === 'eng'
								? 'Save'
								: lang === 'ru'
								? 'Сохранить'
								: 'Saqlash'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditPage
