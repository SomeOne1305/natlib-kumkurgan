import { Button, Input } from '../components/ui'

const EditPage = () => {
	return (
		<div className='w-full'>
			<div className='max-w-screen-md mt-6'>
				<div className='w-full gap-2'>
					<h2 className='text-3xl font-bold mb-4 dark:text-slate-100'>
						Personal details
					</h2>
					<Input type='text' label='Name' id='name' wrapper='mt-6' />
					<Input type='text' label='Surname' id='surname' wrapper='mt-6' />
					<div className='w-full mt-6'>
						<label
							htmlFor='description'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Description
						</label>
						<textarea
							id='description'
							className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-gray-200 focus:ring outline-none'
							placeholder='Description'
							rows={12}
							required
						/>
					</div>
					<div className='w-full flex justify-end py-2'>
						<Button type='submit'>Save</Button>
					</div>
				</div>
				<div className='w-full py-3'>
					<h2 className='text-3xl font-bold mb-4 dark:text-slate-100'>
						Change password
					</h2>
					<div className='w-full flex gap-2'>
						<Input
							type='password'
							label='Previous password'
							id='prev-password'
						/>
						<Input type='password' label='New password' id='new-password' />
						<Input
							type='password'
							label='Repeat password'
							id='repeat-password'
						/>
					</div>
					<div className='flex justify-end'>
						<Button>Change</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditPage
