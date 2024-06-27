import React from 'react'
import AccordionItem from './AccordionItem'

interface AccordionProps {
	items: { title: string; content: string }[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
	return (
		<div className='w-full max-w-2xl mx-auto border border-gray-300 rounded-md'>
			{items.map((item, index) => (
				<AccordionItem key={index} title={item.title} content={item.content} />
			))}
		</div>
	)
}

export default Accordion
