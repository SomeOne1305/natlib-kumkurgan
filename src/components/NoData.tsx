import React from 'react'
import { MdWarning } from 'react-icons/md'
import { useLangStore } from '../store'

const NoData: React.FC = () => {
	const { lang } = useLangStore()

	const messages = {
		eng: {
			title: 'No Data Available',
			description:
				'There is no data available at the moment. Please try again later.',
		},
		ru: {
			title: 'Нет данных',
			description: 'Данные отсутствуют. Попробуйте позже.',
		},
		uz: {
			title: "Ma'lumot yo'q",
			description:
				"Hozirda ma'lumot mavjud emas. Iltimos, keyinroq qayta urinib ko'ring.",
		},
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-[50vh] dark:bg-[#0F172A] text-gray-800 p-4'>
			<MdWarning className='text-yellow-500 text-6xl mb-4' />
			<h1 className='text-3xl font-bold mb-2 dark:text-slate-200'>
				{messages[lang].title}
			</h1>
			<p className='text-lg dark:text-slate-500 text-center max-w-md mb-6'>
				{messages[lang].description}
			</p>
		</div>
	)
}

export default NoData
