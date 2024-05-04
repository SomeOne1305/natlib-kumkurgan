import BooksSection from './components/Books/BooksSection'
import Content from './components/Breadcrumbs/Content'
import EventsSection from './components/Events/EventsSection'
import MediaSection from './components/Media/MediaSection'
import Navbar from './components/Navbar/Navbar'
import NewsSection from './components/News/NewsSection'
import TopNews from './components/News/TopNews'

const App = () => {
	return (
		<div className='dark:bg-[#0F172A] transition-colors duration-150 min-h-screen'>
			<Navbar />
			<div className='container'>
				<TopNews />
				<BooksSection />
				<NewsSection />
				<EventsSection />
				<MediaSection />
			</div>
			<Content />
		</div>
	)
}

export default App
