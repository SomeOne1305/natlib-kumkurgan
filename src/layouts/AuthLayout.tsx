import { Outlet } from 'react-router-dom'
const AuthLayout = () => {
	return (
		<div className='w-full'>
			<div className='max-w-screen-md mx-auto mt-10 p-4'>
				<Outlet />
			</div>
		</div>
	)
}

export default AuthLayout
