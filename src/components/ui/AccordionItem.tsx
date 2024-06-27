import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

interface AccordionItemProps {
	title: string
	content: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='border-b border-gray-300'>
			<button
				className='w-full py-4 px-6 text-left focus:outline-none flex justify-between items-center'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{title}</span>
				<span>{isOpen ? '-' : '+'}</span>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: 'auto' }}
						exit={{ height: 0 }}
						transition={{ duration: 0.3 }}
						className='overflow-hidden'
					>
						<div className='p-6'>{content}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default AccordionItem
