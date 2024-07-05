import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ className, ...others }: buttonProps) {
	return (
		<button
			className={cn(
				'py-3 px-5 text-sm font-medium mt-4 text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300',
				className
			)}
			{...others}
		/>
	)
}

export default Button
