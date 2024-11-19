import { useQuery } from '@tanstack/react-query'
import BooksSection from '../components/Books/BooksSection'
import NewsCard from '../components/News/NewsCard'
import TopNews from '../components/News/TopNews'
import NoData from '../components/NoData'
import UsefulLInks from '../components/UsefulLInks'
import { NewsService } from '../services/news.service'

const Home = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['GET_RECOMMENDED_NEWS'],
		queryFn: async () => await NewsService.get_recommend_news(),
	})

	return (
		<>
			<div className='container'>
				<TopNews />
				<BooksSection />
				<div className='w-full'>
					<div className='w-full py-4 mt-[5%]  mb-4'>
						<h2 className='text-2xl font-bold dark:text-slate-100'>
							Yangiliklar
						</h2>
					</div>
					<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 my-3'>
						{isLoading ? (
							<span>Loading...</span>
						) : (
							data &&
							data.length > 0 &&
							data.map(news => (
								<NewsCard data={news} key={'recommeded_news_' + news.id} />
							))
						)}
					</div>
					{data?.length == 0 && <NoData />}
				</div>
				<UsefulLInks />
			</div>
			{/* <Banner /> */}
		</>
	)
}

export default Home
