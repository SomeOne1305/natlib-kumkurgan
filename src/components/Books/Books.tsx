import { useQuery } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { BookService } from '../../services/books.service'
import BookCard from './BookCard'
import BookDetails from './BookDetails'

const Books = () => {
	const [id, setId] = useState<string>('')
	const { data, isLoading } = useQuery({
		queryKey: ['GET_ALL_BOOKS'],
		queryFn: async () => await BookService.get_all_books(),
	})
	return (
		<div className='w-full'>
			<div className='w-full'>
				<AnimatePresence>
					{id && (
						<BookDetails id={id}>
							<IoCloseSharp
								className='text-2xl text-slate-200 dark:text-slate-100 ml-auto mb-4 mr-3 cursor-pointer'
								onClick={() => setId('')}
								aria-label='Close'
							/>
						</BookDetails>
					)}
				</AnimatePresence>
			</div>
			<div className='w-full grid grid-cols-4 gap-4 mt-7'>
				{isLoading ? (
					<span>Loading...</span>
				) : (
					data &&
					data.map((book, i) => (
						<BookCard
							book={book}
							setId={setId}
							x={i}
							key={'books_' + book.id}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default Books
