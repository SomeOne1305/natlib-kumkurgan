import {
	Link,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import App from './App'
import EventsDetails from './components/Events/EventsDetails'
import EventsSection from './components/Events/EventsSection'
import DocsInfo from './components/Info/DocsInfo'
import StuffInfo from './components/Info/StuffInfo'
import MediaSection from './components/Media/MediaSection'
import NewsDetails from './components/News/NewsDetails'
import NewsSection from './components/News/NewsSection'
import { MainLayout, Section } from './layouts'
import { Home } from './pages'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route
					path='news'
					element={<Section />}
					handle={{
						crumb: () => (
							<Link to={''} className='text-xl mx-2'>
								Yangiliklar
							</Link>
						),
					}}
				>
					<Route path='' element={<NewsSection />} />
					<Route
						path=':slug'
						loader={({ params, context }) => {
							console.log(params, context)

							return ''
						}}
						handle={{
							crumb: () => <span className='text-xl mx-2'>Slug goes here</span>,
						}}
						element={<NewsDetails />}
					/>
				</Route>
				<Route path='events' element={<Section />}>
					<Route path='' element={<EventsSection />} />
					<Route path=':slug' element={<EventsDetails />} />
				</Route>
				<Route path='media' element={<Section />}>
					<Route path='' element={<MediaSection />} />
				</Route>
				<Route path='docs' element={<Section />}>
					<Route path='press-service' element={<StuffInfo />} />
					<Route path='important-documents' element={<DocsInfo />} />
				</Route>
			</Route>
		</Route>
	)
)
