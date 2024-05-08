import Banner from '../components/Banner/Banner'
import BooksSection from '../components/Books/BooksSection'
import DocsInfo from '../components/Info/DocsInfo'
import StuffInfo from '../components/Info/StuffInfo'
import TopNews from '../components/News/TopNews'

const Home = () => {
	return (
		<>
			<div className='container'>
				<TopNews />
				<BooksSection />
				<StuffInfo />
				<DocsInfo />
			</div>
			<Banner />
		</>
	)
}

export default Home
