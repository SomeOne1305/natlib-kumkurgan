import { BsTelephone } from 'react-icons/bs'
import { CiCalendar } from 'react-icons/ci'
import { FaRegMap } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
import { SlPrinter } from 'react-icons/sl'
import { FormattedMessage } from 'react-intl'
import LocationAdd from '../components/LocationAdd'
import { Button, Input, Span } from '../components/ui'

const Contact = () => {
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
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ipsum commodi aspernatur eligendi voluptatibus ratione!
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
								Ishonch telefon raqami
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
								Elektron pochta manzili
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
							<h3 className='text-lg font-bold dark:text-slate-100'>Faks</h3>
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
								Ish vaqti
							</h3>
							<p className='text-base text-gray-600 dark:text-slate-100'>
								<Span onBase='text-lg' onLarge='text-xl'>
									Dushanba-juma 09:00-18:00
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
						Got a technical issue? Want to send feedback about a beta feature?
						Need details about our Business plan? Let us know.
					</p>
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
									Subject
								</label>
								<select
									id='subject'
									className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-gray-200 focus:ring outline-none'
									required
								>
									<option value='ask-question'>To ask personal question</option>
									<option value='collabration'>Collabration</option>
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

						<div className='sm:col-span-2'>
							<label
								htmlFor='message'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
							>
								Your message
							</label>
							<textarea
								id='message'
								rows={6}
								className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring outline-none'
								placeholder='Leave a comment...'
								required
							></textarea>
						</div>
						<Button type='submit'>Send message</Button>
					</form>
				</div>
			</div>
			<LocationAdd />
		</div>
	)
}

export default Contact
