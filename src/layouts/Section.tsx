import { Outlet } from 'react-router-dom'
import Content from '../components/Breadcrumbs/Content'

const Section = () => {
	return (
		<div className='w-full'>
			<Content />
			<div className='container'>
				<Outlet />
			</div>
		</div>
	)
}

export default Section
