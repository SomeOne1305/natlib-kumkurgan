import { useQuery } from '@tanstack/react-query'
import { NewsService } from '../../services/news.service'
import NoData from '../NoData'
import NewsCard from './NewsCard'
import TopNews from './TopNews'

const NewsSection = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['GET_ALL_NEWS'],
		queryFn: async () => await NewsService.get_all_news(),
	})
	return (
		<>
			<TopNews />
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 my-3'>
				{isLoading ? (
					<span>Loading...</span>
				) : (
					data &&
					data.length > 0 &&
					data.map(news => <NewsCard key={'news_' + news.id} data={news} />)
				)}
			</div>
			{data?.length == 0 && <NoData />}
		</>
	)
}

export default NewsSection
