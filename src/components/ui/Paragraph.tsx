import React from 'react'
import useTextSizeStore from '../../store/useTextSizeStore'
import { IText } from '../../types'
import { cn } from '../../utils/cn'

type paragraphProps = React.AllHTMLAttributes<HTMLSpanElement> & IText
const Paragraph = ({
	onLarge,
	onBase,
	className,
	...props
}: paragraphProps) => {
	const { size } = useTextSizeStore()
	return (
		<p
			className={cn(
				className,
				size == 'default' ? '' : size == 'base' ? onBase : onLarge
			)}
			{...props}
		/>
	)
}

export default Paragraph
