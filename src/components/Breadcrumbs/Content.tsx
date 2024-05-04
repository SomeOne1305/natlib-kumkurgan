import { GoHome } from 'react-icons/go'
import { MdOutlinePrint } from 'react-icons/md'

const Content = () => {
	return (
		<div className="w-full h-[35vh] bg-[url('/src/assets/patterns/moroccan.svg')] bg-[#264DB1] dark:bg-[url('/src/assets/dark-pattern.svg')] dark:bg-[#293a69] flex flex-col justify-end">
			<div className='container'>
				<h1 className='text-4xl font-bold text-white mb-3'>
					Konferensiya va seminarlar
				</h1>
				<div className='w-full flex items-center justify-between'>
					<div className='inline-flex items-center py-1 text-white'>
						<GoHome className='text-2xl mr-1' />
						<a href='#' className='text-xl'>
							Bosh sahifa
						</a>
					</div>
					<div
						className='inline-flex items-center py-1 text-white'
						onClick={() => window.print()}
					>
						<MdOutlinePrint className='text-2xl mr-1' />
						<span className='text-xl'>Chop etish</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content
