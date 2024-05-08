import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import LanguageProvider from './Providers/LanguageProvider.tsx'
import { router } from './Router.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LanguageProvider>
			<RouterProvider router={router} />
		</LanguageProvider>
	</React.StrictMode>
)
