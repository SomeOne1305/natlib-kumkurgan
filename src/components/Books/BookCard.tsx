import { motion } from 'framer-motion'
import { FaRegHeart } from 'react-icons/fa'
import { STORAGE_PATH } from '../../constants/storage'
import { useLangStore } from '../../store'
import { BookType } from '../../types/book.type'

type Props = {
	x: number
	setId: (arg: string) => void
	book: BookType
}

const BookCard = ({ x, book, setId }: Props) => {
	const { lang } = useLangStore()
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
			key={book.id + '_book'}
			className='w-full h-full flex flex-col rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer md:min-h-[500px]'
			onClick={() => setId(book.id)}
		>
			<div className='relative w-full flex-shrink-0 h-64 md:h-80 lg:h-96'>
				<img
					src={STORAGE_PATH + '/cover/' + book.cover_image}
					className='w-full h-full object-cover'
					alt={book.name?.[lang]}
				/>
				<div className='p-2 rounded-full bg-white dark:bg-gray-800 absolute top-2 right-2 cursor-pointer'>
					<FaRegHeart className='text-xl text-gray-600 dark:text-gray-300' />
				</div>
			</div>
			<div className='w-full p-4 flex flex-col items-start flex-grow'>
				<h3 className='text-lg dark:text-slate-100 font-semibold line-clamp-2'>
					{book.name?.[lang]}
				</h3>
				<span className='mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium line-clamp-1'>
					{book?.authors?.map(au => au.name?.[lang]).join(', ')}
				</span>
			</div>
		</motion.div>
	)
}

export default BookCard
