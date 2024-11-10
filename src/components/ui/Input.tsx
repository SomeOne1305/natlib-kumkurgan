import {
	forwardRef,
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	useState,
} from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { cn } from '../../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	wrapper?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ type = 'text', id, label, wrapper, ...others },
	ref
) {
	const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type)

	return (
		<div className={cn('w-full', wrapper)}>
			<label
				htmlFor={id}
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
			>
				{label}
			</label>
			<div className='w-full flex items-center relative'>
				<input
					type={inputType}
					id={id}
					ref={ref}
					className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-gray-200 focus:ring outline-none'
					{...others}
				/>
				{type === 'password' && (
					<div
						className='p-2 pt-3.5 cursor-pointer absolute right-2 top-0'
						onClick={() =>
							setInputType(prev => (prev === 'password' ? 'text' : 'password'))
						}
					>
						{inputType === 'password' ? (
							<FiEye className='text-xl dark:text-white' />
						) : (
							<FiEyeOff className='text-xl dark:text-white' />
						)}
					</div>
				)}
			</div>
		</div>
	)
})

export default Input
