import { zodResolver } from '@hookform/resolvers/zod'
import { useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BsTelephone } from 'react-icons/bs'
import { CiCalendar } from 'react-icons/ci'
import { FaRegMap } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
import { SlPrinter } from 'react-icons/sl'
import { FormattedMessage } from 'react-intl'
import PhoneInput from 'react-phone-input-2'
import LocationAdd from '../components/LocationAdd'
import { Button, Input, Span } from '../components/ui'
import { ContactFormData, ContactScheme } from '../schemes/contact.scheme'
import { useLangStore } from '../store'

const Contact = () => {
	const { lang } = useLangStore()

	const {
		handleSubmit,
		register,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(ContactScheme),
		defaultValues: { phone_number: '+998' },
	})
	const onSubmit = (data: ContactFormData) => {
		console.log(data)
	}
	if (errors) {
		console.log(errors)
	}
	useLayoutEffect(() => {
		register('phone_number')
	}, [register])
	return (
		<div className='w-full'>
			<div className='w-full flex justify-around'>
				<div className=' p-4'>
					<div className='w-full flex items-center py-3 px-1 mt-[15%]'>
						<div className='p-5 rounded-full bg-blue-200'>
							<FaRegMap className='text-blue-900 text-xl m-1' />
						</div>
						<div className='w-4/5 gap-2 ml-4'>
							<h3 className='text-lg font-bold dark:text-slate-100'>Manzil</h3>
							<p className='text-base text-gray-600 dark:text-slate-100'>
								<Span onBase='text-lg' onLarge='text-xl'>
									Surxondaryo viloyati Qumqo'rg'on tumani
								</Span>
							</p>
						</div>
					</div>
					<div className='w-full flex items-center py-3 px-1 mt-5'>
						<div className='p-5 rounded-full bg-blue-200'>
							<BsTelephone className='text-blue-900 text-xl m-1' />
						</div>
						<div className='w-4/5 gap-2 ml-4'>
							<h3 className='text-lg font-bold dark:text-slate-100'>
								{lang === 'uz'
									? 'Ishonch telefon raqami'
									: lang === 'ru'
									? 'Номер телефона доверия'
									: 'Trust Phone Number'}
							</h3>
							<p className='text-base'>
								<a
									href='#'
									className='hover:underline text-blue-500 inline-flex items-center'
								>
									<IoIosLink className='text-lg mr-2' />
									<Span onBase='text-lg' onLarge='text-xl'>
										+99891 078 4007
									</Span>
								</a>
								<br />
								<a
									href='#'
									className='hover:underline text-blue-500 inline-flex items-center'
								>
									<IoIosLink className='text-lg mr-2' />
									<Span onBase='text-lg' onLarge='text-xl'>
										+99891 078 4007
									</Span>
								</a>
							</p>
						</div>
					</div>
					<div className='w-full flex items-center py-3 px-1 mt-5'>
						<div className='p-5 rounded-full bg-blue-200'>
							<MdAlternateEmail className='text-blue-900 text-xl m-1' />
						</div>
						<div className='w-4/5 gap-2 ml-4'>
							<h3 className='text-lg font-bold dark:text-slate-100'>
								{lang === 'uz'
									? 'Elektron pochta manzili'
									: lang === 'ru'
									? 'Адрес электронной почты'
									: 'Email Address'}
							</h3>
							<p className='text-base'>
								<a
									href='#'
									className='hover:underline text-blue-500 inline-flex items-center'
								>
									<IoIosLink className='text-lg mr-2' />
									<Span onBase='text-lg' onLarge='text-xl'>
										axmadxolmuminov2007@gmail.com
									</Span>
								</a>
							</p>
						</div>
					</div>
					<div className='w-full flex items-center py-3 px-1 mt-5'>
						<div className='p-5 rounded-full bg-blue-200'>
							<SlPrinter className='text-blue-900 text-xl m-1' />
						</div>
						<div className='w-4/5 gap-2 ml-4'>
							<h3 className='text-lg font-bold dark:text-slate-100'>
								{lang === 'uz' ? 'Faks' : lang === 'ru' ? 'Факс' : 'Fax'}
							</h3>
							<p className='text-base'>
								<a
									href='#'
									className='hover:underline text-blue-500 inline-flex items-center'
								>
									<IoIosLink className='text-lg mr-2' />
									<Span onBase='text-lg' onLarge='text-xl'>
										+998(71) 443 77 44
									</Span>
								</a>
							</p>
						</div>
					</div>
					<div className='w-full flex items-center py-3 px-1 mt-5'>
						<div className='p-5 rounded-full bg-blue-200'>
							<CiCalendar className='text-blue-900 text-xl m-1' />
						</div>
						<div className='w-4/5 gap-2 ml-4'>
							<h3 className='text-lg font-bold dark:text-slate-100'>
								{lang === 'uz'
									? 'Ish vaqti'
									: lang === 'ru'
									? 'Время работы'
									: 'Working Hours'}
							</h3>
							<p className='text-base text-gray-600 dark:text-slate-100'>
								<Span onBase='text-lg' onLarge='text-xl'>
									{lang === 'uz'
										? 'Dushanba-juma 09:00-18:00'
										: lang === 'ru'
										? 'Понедельник-пятница 09:00-18:00'
										: 'Monday-Friday 09:00-18:00'}
								</Span>
							</p>
						</div>
					</div>
				</div>
				<div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
					<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
						<FormattedMessage id='contact' />
					</h2>
					<p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
						{lang === 'uz'
							? 'Texnik muammo bormi? Beta funksiyasi haqida fikr bildirmoqchimisiz? Biznes rejamiz haqida maʼlumot kerakmi? Bizga xabar bering.'
							: lang === 'ru'
							? 'У вас есть техническая проблема? Хотите оставить отзыв о бета-функции? Нужны подробности о нашем бизнес-плане? Дайте нам знать.'
							: 'Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.'}
					</p>
					<form
						onSubmit={handleSubmit(onSubmit)}
						id='contact_form'
						className='space-y-8'
					>
						<div className='flex items-center gap-2'>
							<Input
								id='name'
								{...register('name')}
								label={
									lang === 'uz'
										? 'Ismingiz'
										: lang === 'ru'
										? 'Ваше имя'
										: 'Your name'
								}
								placeholder={
									lang === 'uz' ? 'ismingiz' : lang === 'ru' ? 'имя' : 'name'
								}
								required
							/>
							<Input
								id='surname'
								{...register('surname')}
								label={
									lang === 'uz'
										? 'Familiya'
										: lang === 'ru'
										? 'Фамилия'
										: 'Your surname'
								}
								placeholder={
									lang === 'uz'
										? 'familiya'
										: lang === 'ru'
										? 'фамилия'
										: 'surname'
								}
								required
							/>
						</div>
						<div className='w-full flex items-center gap-2'>
							<div className='w-full'>
								<label
									htmlFor='subject'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									{lang === 'uz' ? 'Mavzu' : lang === 'ru' ? 'Тема' : 'Subject'}
								</label>
								<select
									id='subject'
									className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-gray-200 focus:ring outline-none'
									{...register('subject')}
								>
									<option value='ask-question'>
										{lang === 'uz'
											? 'Shaxsiy savol berish'
											: lang === 'ru'
											? 'Задать личный вопрос'
											: 'To ask personal question'}
									</option>
									<option value='collaboration'>
										{lang === 'uz'
											? 'Hamkorlik'
											: lang === 'ru'
											? 'Сотрудничество'
											: 'Collaboration'}
									</option>
									<option value='other'>
										{lang === 'uz'
											? 'Boshqa'
											: lang === 'ru'
											? 'Другое'
											: 'Other'}
									</option>
								</select>
							</div>
							<PhoneInput
								value={getValues('phone_number')}
								inputProps={{
									required: true,
									className:
										'block p-3 py-2.5  w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-gray-200 focus:ring outline-none',
								}}
								containerClass='w-full'
								onChange={val =>
									setValue('phone_number', val.length < 4 ? '+998' : val)
								}
								onlyCountries={['uz']}
								country={'uz'}
								inputClass='w-full'
								placeholder='+998 XX XXX-XX-XX'
								specialLabel={
									lang === 'uz'
										? 'Telefon raqam'
										: lang === 'ru'
										? 'Номер телефона'
										: 'Phone number'
								}
								masks={{
									uz: '(..) ...-..-..',
								}}
								onFocus={() => setValue('phone_number', '+998')}
								copyNumbersOnly
								disableDropdown
							/>
						</div>

						<div className='sm:col-span-2'>
							<label
								htmlFor='message'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
							>
								{lang === 'uz'
									? 'Sizning xabaringiz'
									: lang === 'ru'
									? 'Ваше сообщение'
									: 'Your message'}
							</label>
							<textarea
								id='message'
								rows={6}
								{...register('message')}
								className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring outline-none'
								placeholder='Leave a comment...'
								required
							></textarea>
						</div>
						<Button type='submit'>
							{lang === 'uz'
								? 'Xabar yuborish'
								: lang === 'ru'
								? 'Отправить сообщение'
								: 'Send message'}
						</Button>
					</form>
				</div>
			</div>
			<LocationAdd />
		</div>
	)
}

export default Contact
