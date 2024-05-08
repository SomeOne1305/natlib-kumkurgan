import { Outlet } from 'react-router-dom'
import { useLangStore } from './store'

const App = () => {
	const { lang } = useLangStore()
	console.log(lang)

	return (
		<div className='dark:bg-[#0F172A] transition-colors duration-150 min-h-screen'>
			<Outlet />
		</div>
	)
}

export default App
