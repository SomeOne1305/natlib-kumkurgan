import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/bundle'
import './index.css'
import { LanguageProvider, QueryProvider } from './providers/index.ts'
import { router } from './Router.tsx'

import Loading from './Loading.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryProvider>
				<LanguageProvider>
					<RouterProvider router={router} fallbackElement={<Loading />} />
				</LanguageProvider>
			</QueryProvider>
		</HelmetProvider>
	</React.StrictMode>
)
