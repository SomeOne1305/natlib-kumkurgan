import NewsCard from './NewsCard'
import NewsDetails from './NewsDetails'

const NewsSection = () => {
	return (
		<>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 my-3'>
				{Array(5)
					.fill('a')
					.map((_, i) => (
						<NewsCard key={'card' + i} />
					))}
			</div>
			<NewsDetails />
		</>
	)
}

export default NewsSection
