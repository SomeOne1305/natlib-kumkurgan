import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/bundle'
import './index.css'
import { LanguageProvider, QueryProvider } from './providers/index.ts'
import { router } from './Router.tsx'

import * as pdfJs from 'pdfjs-dist'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import Loading from './Loading.tsx'

pdfJs.GlobalWorkerOptions.workerSrc =
	'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.min.mjs'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryProvider>
			<LanguageProvider>
				<RouterProvider router={router} fallbackElement={<Loading />} />
			</LanguageProvider>
		</QueryProvider>
	</React.StrictMode>
)
