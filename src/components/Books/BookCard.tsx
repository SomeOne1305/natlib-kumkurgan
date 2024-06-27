// import { motion } from 'framer-motion'
// import { FaRegHeart } from 'react-icons/fa'
// import { IBook } from '../../types'
// type Props = {
// 	x: number
// 	setId: (arg: string) => void
// 	i: IBook
// }
// const BookCard = ({ x, i, setId }: Props) => {
// 	return (
// 		<motion.div
// 			initial={{ scale: 0, opacity: 0 }}
// 			animate={{ scale: 1, opacity: 1 }}
// 			exit={{ scale: 1, opacity: 1 }}
// 			transition={{
// 				delay: 0.1 * x,
// 				duration: 0.5,
// 				stiffness: 200,
// 			}}
// 			key={i.id + 'book'}
// 			className='w-full h-full flex items-center flex-col mt-2 rounded-md border border-gray-200 dark:border-gray-600 overflow-hidden'
// 			onClick={() => setId(i.id)}
// 		>
// 			<div className='w-full max-h-[400px] h-full relative'>
// 				<img
// 					src={i?.volumeInfo?.imageLinks?.thumbnail}
// 					className='w-full h-full object-cover'
// 					alt=''
// 				/>
// 				<div className='p-2 rounded-md bg-white absolute top-1 right-1 cursor-pointer'>
// 					<FaRegHeart className='text-3xl' />
// 				</div>
// 			</div>
// 			<div className='w-full p-2 my-auto'>
// 				<h3 className='text-lg dark:text-slate-100 font-semibold line-clamp-2'>
// 					{i.volumeInfo.title}
// 				</h3>
// 				<span className='mt-2 text-base text-gray-500 font-medium line-clamp-1'>
// 					{i.volumeInfo.authors?.map(author => author).join(' , ') || 'Unknown'}
// 				</span>
// 			</div>
// 		</motion.div>
// 	)
// }

// export default BookCard

import { motion } from 'framer-motion'
import { FaRegHeart } from 'react-icons/fa'
import { IBook } from '../../types'

type Props = {
	x: number
	setId: (arg: string) => void
	i: IBook
}

const BookCard = ({ x, i, setId }: Props) => {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 1, opacity: 1 }}
			transition={{
				delay: 0.1 * x,
				duration: 0.5,
				stiffness: 200,
			}}
			key={i.id + 'book'}
			className='w-full h-full flex flex-col rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer min-h-[500px]'
			onClick={() => setId(i.id)}
		>
			<div className='relative w-full flex-shrink-0 h-64 md:h-80 lg:h-96'>
				<img
					src={i?.volumeInfo?.imageLinks?.thumbnail}
					className='w-full h-full object-cover'
					alt={i.volumeInfo.title}
				/>
				<div className='p-2 rounded-full bg-white dark:bg-gray-800 absolute top-2 right-2 cursor-pointer'>
					<FaRegHeart className='text-xl text-gray-600 dark:text-gray-300' />
				</div>
			</div>
			<div className='w-full p-4 flex flex-col items-start flex-grow'>
				<h3 className='text-lg dark:text-slate-100 font-semibold line-clamp-2'>
					{i.volumeInfo.title}
				</h3>
				<span className='mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium line-clamp-1'>
					{i.volumeInfo.authors?.join(', ') || 'Unknown'}
				</span>
			</div>
		</motion.div>
	)
}

export default BookCard
