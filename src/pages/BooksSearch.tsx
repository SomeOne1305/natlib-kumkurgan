import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import BookCard from '../components/Books/BookCard'
import BookDetails from '../components/Books/BookDetails'
import NoData from '../components/NoData'
import { useLangStore } from '../store'
import { BookType } from '../types/book.type'

const BooksSearch = () => {
	const [params] = useSearchParams()
	const param = params.get('q')
	const books = useLoaderData() as BookType[]
	const { lang } = useLangStore()
	const [id, setId] = useState<string | null>(null)
	return (
		<>
			<div className='w-full py-3 mb-5'>
				<h2 className='text-3xl font-bold dark:text-slate-100'>
					{lang == 'uz'
						? `"${param}" ga ko'ra qidiruv natijalari:`
						: lang === 'ru'
						? `Результаты поиска по "${param}"`
						: `Search results according to "${param}"`}
				</h2>
			</div>
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
			<div className='w-full'>
				{books ? (
					books.map((book, i) => <BookCard book={book} x={i} setId={setId} />)
				) : (
					<NoData />
				)}
				{books?.length === 0 && <NoData />}
			</div>
		</>
	)
}

export default BooksSearch
