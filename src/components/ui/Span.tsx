import React from 'react'
import useTextSizeStore from '../../store/useTextSizeStore'
import { IText } from '../../types'
import { cn } from '../../utils/cn'

type spanProps = React.AllHTMLAttributes<HTMLSpanElement> & IText
/**
 * @param onLarge string
 * @param onBase string
 * @returns JSX.Element
 */
const Span = ({ onLarge, onBase, className, ...props }: spanProps) => {
	const { size } = useTextSizeStore()
	return (
		<span
			className={cn(
				className,
				size == 'default' ? '' : size == 'base' ? onBase : onLarge
			)}
			{...props}
		/>
	)
}

export default Span
