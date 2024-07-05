import {
	Link,
	Navigate,
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
import { AccountLayout, AuthLayout, MainLayout, Section } from './layouts'
import {
	BooksPage,
	Contact,
	EditPage,
	Faq,
	Home,
	Login,
	MyBooksPage,
	MyCommentsPage,
	Register,
} from './pages'

import {
	Akm,
	CatalogCenter,
	HistoryOfLibrary,
	LibraryPlans,
	Management,
	PressService,
	Structure,
	StudyHalls,
	Takm,
} from './static-pages'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='books' element={<BooksPage />} />
				<Route path='account' element={<AccountLayout />}>
					<Route path='' element={<Navigate to={'edit'} replace={true} />} />
					<Route path='edit' element={<EditPage />} />
					<Route path='favourites' element={<MyBooksPage />} />
					<Route path='my-comments' element={<MyCommentsPage />} />
				</Route>
				<Route path='auth' element={<AuthLayout />}>
					<Route path='' element={<Navigate to={'login'} replace={true} />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Route>
				<Route path='contact' element={<Section />}>
					<Route
						path=''
						element={<Contact />}
						handle={{
							crumb: () => <span className='text-xl mx-2'>{'> '} Contact</span>,
						}}
					/>
				</Route>
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
				<Route path='faqs' element={<Section />}>
					<Route path='' element={<Faq />} />
				</Route>
				<Route path='media' element={<Section />}>
					<Route path='' element={<MediaSection />} />
				</Route>
				<Route path='docs' element={<Section />}>
					<Route
						path='press-service'
						element={<StuffInfo />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} Matbuot xizmati
								</span>
							),
						}}
					/>
					<Route path='important-documents' element={<DocsInfo />} />
					<Route
						path='study-halls'
						element={<StudyHalls />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} O'quv zallari
								</span>
							),
						}}
					/>
					<Route
						path='library-plans'
						element={<LibraryPlans />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} Kutubxona rejalari
								</span>
							),
						}}
					/>
					<Route
						path='structure'
						element={<Structure />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} Tuzilma
								</span>
							),
						}}
					/>
					<Route
						path='management'
						element={<Management />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} Rahbariyat
								</span>
							),
						}}
					/>
					<Route
						path='history-of-library'
						element={<HistoryOfLibrary />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} Kutubxona tarixi
								</span>
							),
						}}
					/>
					<Route
						path='akm'
						element={<Akm />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} AKM
								</span>
							),
						}}
					/>
					<Route
						path='takm'
						element={<Takm />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} TAKM
								</span>
							),
						}}
					/>
					<Route
						path='catalog-center-of-republic'
						element={<CatalogCenter />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{'> '}Kutubxona haqida {'> '} Respublika yig'ma elektron
									katalog markazi
								</span>
							),
						}}
					/>
					<Route path='press-service' element={<PressService />} />
				</Route>
			</Route>
		</Route>
	)
)
