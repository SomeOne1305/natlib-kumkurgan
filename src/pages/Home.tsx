import BooksSection from '../components/Books/BooksSection'
import NewsCard from '../components/News/NewsCard'
import TopNews from '../components/News/TopNews'
import UsefulLInks from '../components/UsefulLInks'
import VotingPoll from '../components/VotingPoll'

const Home = () => {
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
						{Array(5)
							.fill('a')
							.map((_, i) => (
								<NewsCard key={'card' + i} />
							))}
					</div>
				</div>
				<UsefulLInks />
				<VotingPoll />
			</div>
			{/* <Banner /> */}
		</>
	)
}

export default Home
