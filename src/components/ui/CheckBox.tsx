import { InputHTMLAttributes } from 'react'

type checkBoxProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string
}

const CheckBox = ({ label, id, ...others }: checkBoxProps) => {
	return (
		<label
			htmlFor={'checkbox' + id}
			className='flex items-center py-2 cursor-pointer'
		>
			<input
				type='checkbox'
				className='appearance-none hidden peer'
				id={'checkbox' + id}
				{...others}
			/>
			<div
				className={`relative cursor-pointer size-5 border border-gray-400 rounded-md  bg-gray-100 peer-checked:border-red-500 peer-checked:ring-red-500 ring-2 ring-offset-2 ring-transparent peer-checked:bg-red-400 peer-checked:before:bg-tick before:bg-center before:bg-no-repeat before:bg-contain  before:z-20	 before:w-full before:h-full before:absolute before:top-0 before:left-0 peer-checked:before:opacity-100 overflow-hidden`}
			></div>
			<span className='ml-2 font-semibold dark:text-slate-100'>{label}</span>
		</label>
	)
}

export default CheckBox
