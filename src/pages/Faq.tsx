import Accordion from '../components/ui/Accordion'
import { faqs } from '../constants/faq'

const Faq = () => {
	return (
		<div className='w-full py-4'>
			<div className='w-full py-4 flex justify-between items-center mb-4'>
				<h2 className='text-2xl font-bold dark:text-slate-100'>
					Tavsiya etilgan kitoblar
				</h2>
			</div>

			<Accordion items={faqs} />
		</div>
	)
}

export default Faq
