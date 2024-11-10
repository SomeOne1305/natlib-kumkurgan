import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { IoCaretDown, IoCaretUp } from 'react-icons/io5'

interface AccordionItemProps {
	index: number
	title: string
	content: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({
	index,
	title,
	content,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='border-b border-gray-300 dark:border-gray-600'>
			<button
				className='w-full py-4 px-6 text-left focus:outline-none flex justify-between items-center border-b border-gray-300 dark:border-gray-600'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className='font-bold text-blue-900 dark:text-sky-400'>
					{index + 1}.{' ' + title}
				</span>
				{isOpen ? (
					<IoCaretUp className='dark:text-slate-100' />
				) : (
					<IoCaretDown className='dark:text-slate-100' />
				)}
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
						<div className='p-6 text-gray-800 dark:text-slate-300'>
							{content}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default AccordionItem
