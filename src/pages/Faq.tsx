import { useQuery } from '@tanstack/react-query'
import Accordion from '../components/ui/Accordion'
import { FAQsService } from '../services/faqs.service'

const Faq = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['GET_ALL_QUESTIONS'],
		queryFn: async () => await FAQsService.get_all_faqs(),
	})
	console.log(data)

	return (
		<div className='w-full py-4'>
			<div className='w-full py-4 flex justify-between items-center mb-4'>
				<h2 className='text-2xl font-bold dark:text-slate-100'>
					Tez-tez so'raladigan savollar
				</h2>
			</div>
			<div className='w-full'>
				{isLoading ? (
					<span>Loading...</span>
				) : (
					data && <Accordion items={data} />
				)}
			</div>
		</div>
	)
}

export default Faq
