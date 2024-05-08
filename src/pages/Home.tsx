import Banner from '../components/Banner/Banner'
import BooksSection from '../components/Books/BooksSection'
import TopNews from '../components/News/TopNews'

const Home = () => {
	return (
		<>
			<div className='container'>
				<TopNews />
				<BooksSection />
			</div>
			<Banner />
		</>
	)
}

export default Home
