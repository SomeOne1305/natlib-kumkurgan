import React from 'react'
import { useLangStore } from '../../store'
import { FAQType } from '../../types/faq.type'
import AccordionItem from './AccordionItem'

interface AccordionProps {
	items: FAQType[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
	const { lang } = useLangStore()
	return (
		<div className='w-full border border-gray-300 dark:border-gray-600 rounded-md'>
			{items.map((item, i) => (
				<AccordionItem
					index={i}
					key={'question_' + item.id}
					title={item.question?.[lang]}
					content={item.answer?.[lang]}
				/>
			))}
		</div>
	)
}

export default Accordion
