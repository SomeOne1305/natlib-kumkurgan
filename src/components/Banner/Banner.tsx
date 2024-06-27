import React from 'react'

const Banner: React.FC = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
			<div className='flex flex-row items-center max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg'>
				<div className='flex flex-col text-center md:text-left md:w-1/2 p-4'>
					<h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>
						Welcome to Your Library Web App
					</h1>
					<p className='text-lg md:text-2xl text-gray-700 mb-4'>
						Discover a world of knowledge at your fingertips. Borrow books, read
						reviews, and explore our extensive catalog from the comfort of your
						home.
					</p>
				</div>
				<div className='flex justify-center md:w-1/2'>
					<img
						src='/path/to/illustration1.png'
						alt='Illustration 1'
						className='w-24 h-24 md:w-48 md:h-48 m-2'
					/>
					<img
						src='/path/to/illustration2.png'
						alt='Illustration 2'
						className='w-24 h-24 md:w-48 md:h-48 m-2'
					/>
					<img
						src='/path/to/illustration3.png'
						alt='Illustration 3'
						className='w-24 h-24 md:w-48 md:h-48 m-2'
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner
