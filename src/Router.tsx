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
	Register,
} from './pages'

import { Suspense } from 'react'
import NoData from './components/NoData'
import {
	getEventsBySlugLoader,
	getNewsBySlugLoader,
	searchBook,
} from './loaders'
import Loading from './Loading'
import AllBooks from './pages/AllBooks'
import BooksSearch from './pages/BooksSearch'
import NewUser from './pages/NewUser'
import { Management } from './static-pages'
import { useLangStore } from './store'
import useTitleStore from './store/useTitleStore'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route path='/' element={<MainLayout />}>
				<Route
					path=''
					element={
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					}
				/>
				<Route path='books' element={<BooksPage />}>
					<Route path='' index element={<AllBooks />} />
					<Route
						path='search'
						loader={searchBook}
						element={<BooksSearch />}
						errorElement={<NoData />}
					/>
				</Route>
				<Route path='account' element={<AccountLayout />}>
					<Route path='' element={<Navigate to={'edit'} replace={true} />} />
					<Route path='edit' element={<EditPage />} />
					<Route path='favourites' element={<MyBooksPage />} />
				</Route>
				<Route path='auth' element={<AuthLayout />}>
					<Route path='' element={<Navigate to={'login'} replace={true} />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='new-user' element={<NewUser />} />
				</Route>
				<Route path='contact' element={<Section />}>
					<Route
						path=''
						element={<Contact />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{useLangStore.getState().lang == 'uz'
										? "Biz bilan bog'lanish"
										: useLangStore.getState().lang == 'ru'
										? 'Связаться с нами'
										: 'Contact us'}
								</span>
							),
						}}
					/>
				</Route>
				<Route
					path='news'
					element={<Section />}
					handle={{
						crumb: () => (
							<Link
								to={'/news'}
								className='text-xl mx-2'
								onClick={() => useTitleStore.getState().setTitle(null)}
							>
								Yangiliklar
							</Link>
						),
					}}
					errorElement={<NoData />}
				>
					<Route path='' element={<NewsSection />} />
					<Route
						path=':slug'
						loader={getNewsBySlugLoader}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{useTitleStore.getState().title}
								</span>
							),
						}}
						element={<NewsDetails />}
						errorElement={<NoData />}
					/>
				</Route>
				<Route
					path='events'
					element={<Section />}
					handle={{
						crumb: () => (
							<Link
								to={'/events'}
								className='text-xl mx-2'
								onClick={() => useTitleStore.getState().setTitle(null)}
							>
								{useLangStore.getState().lang == 'uz'
									? 'Tadbirlar'
									: useLangStore.getState().lang == 'ru'
									? 'Мероприятия'
									: 'Events'}
							</Link>
						),
					}}
				>
					<Route path='' element={<EventsSection />} />
					<Route
						path=':slug'
						element={<EventsDetails />}
						loader={getEventsBySlugLoader}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{useTitleStore.getState().title}
								</span>
							),
						}}
						errorElement={<NoData />}
					/>
				</Route>
				<Route
					path='faqs'
					element={<Section />}
					handle={{
						crumb: () => (
							<span className='text-xl mx-2'>
								{useLangStore.getState().lang == 'uz'
									? 'Tez-tez beriladigan savollar'
									: useLangStore.getState().lang == 'ru'
									? 'Часто задаваемые вопросы'
									: 'Frequently asked questions'}
							</span>
						),
					}}
				>
					<Route path='' element={<Faq />} />
				</Route>
				<Route
					path='media'
					element={<Section />}
					handle={{
						crumb: () => (
							<span className='text-xl mx-2'>
								<span className='text-xl mx-2'>
									{useLangStore.getState().lang == 'uz'
										? 'Multimedialar'
										: useLangStore.getState().lang == 'ru'
										? 'Мультимедиа'
										: 'Multimedia'}
								</span>
							</span>
						),
					}}
				>
					<Route path='' element={<MediaSection />} />
				</Route>
				<Route path='docs' element={<Section />}>
					<Route
						path='management'
						element={<Management />}
						handle={{
							crumb: () => (
								<span className='text-xl mx-2'>
									{useLangStore.getState().lang == 'uz'
										? 'Rahbariyat'
										: useLangStore.getState().lang == 'ru'
										? 'Руководство'
										: 'Management'}
								</span>
							),
						}}
					/>
				</Route>
			</Route>
		</Route>
	),
	{
		future: {
			v7_relativeSplatPath: true,
		},
	}
)
