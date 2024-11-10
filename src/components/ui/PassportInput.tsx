import { InputHTMLAttributes, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { cn } from '../../utils/cn'

interface PassportInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: string
	wrapper?: string
}

export default function PassportInput({
	label,
	id,
	wrapper,
	...props
}: PassportInputProps) {
	const [inputType, setInputType] = useState<'text' | 'password'>('text')
	const [formattedValue, setFormattedValue] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\s/g, '') // Remove spaces for validation
		const regex = /^[A-Za-z]{2}\d{0,7}$/ // Updated regex to require exactly 2 letters followed by numbers

		// Check if the input starts with letters before allowing numbers
		if (value.length <= 2 && /^[A-Za-z]*$/.test(value)) {
			setFormattedValue(value.toUpperCase()) // Allow only letters
			setErrorMessage('')
		} else if (value.length > 2 && regex.test(value)) {
			// Ensure the input is valid and format with space
			const formatted = value.replace(/([A-Za-z]{2})(\d{1,7})/, '$1 $2')
			setFormattedValue(formatted) // Format with space
			setErrorMessage('')
		} else if (value.length > 2 && /^[A-Za-z]{2}/.test(value)) {
			setErrorMessage('You must enter numbers after the two letters.')
		} else {
			setErrorMessage(
				'Input must be 2 letters followed by 7 numbers (e.g., AD9312832)'
			)
		}
	}

	return (
		<div className={cn('w-full mt-4', wrapper)}>
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
					value={formattedValue}
					onChange={handleChange}
					maxLength={10}
					{...props}
					className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-gray-200 focus:ring outline-none'
				/>
				{inputType === 'password' && (
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
			{errorMessage && (
				<p className='text-red-500 text-sm mt-1'>{errorMessage}</p>
			)}
		</div>
	)
}
