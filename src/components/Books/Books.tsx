import { useInfiniteQuery } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { BookService } from '../../services/books.service'
import NoData from '../NoData'
import BookCard from './BookCard'
import BookDetails from './BookDetails'

const Books = () => {
	const [id, setId] = useState<string>('')

	const { data, isLoading, isError, hasNextPage, fetchNextPage } =
		useInfiniteQuery({
			queryKey: ['GET_ALL_BOOKS_PAGINATE'],
			queryFn: async ({ pageParam = 1 }) =>
				await BookService.get_books(pageParam),
			initialPageParam: 1,
			getNextPageParam: lastPage => {
				return lastPage.page < lastPage.lastPage ? lastPage.page + 1 : undefined
			},
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
				) : isError ? (
					<span>Error loading books.</span>
				) : (
					data?.pages?.map(page =>
						page.data.map((book, i) => (
							<BookCard
								x={i}
								book={book}
								setId={setId}
								key={'books_' + book.id}
							/>
						))
					)
				)}
			</div>
			{data?.pages?.[0]?.data.length === 0 && <NoData />}
			{hasNextPage && (
				<button
					onClick={() => fetchNextPage}
					disabled={!hasNextPage}
					className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
				>
					Load More
				</button>
			)}
		</div>
	)
}

export default Books
