import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { CheckBox, Input, Paragraph, Span } from '../components/ui'
import { STORAGE_PATH } from '../constants/storage'
import { UserService } from '../services/user.service'
import { useLangStore } from '../store'
import { AuthorType, BookType, GenreType } from '../types/book.type'

const MyBooksPage = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedGenres, setSelectedGenres] = useState<string[]>([])
	const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
	const { lang } = useLangStore()

	const { data, isLoading, error } = useQuery({
		queryKey: ['GET_FAVORITES'],
		queryFn: async () => await UserService.get_favorites(),
	})

	// Extract unique genres from the fetched books
	const genres: GenreType[] = useMemo(() => {
		const allGenres: GenreType[] = []
		data?.forEach((book: BookType) => {
			book.genres.forEach(genre => {
				if (!allGenres.some(g => g.id === genre.id)) {
					allGenres.push(genre)
				}
			})
		})
		return allGenres
	}, [data])

	// Extract unique authors from the fetched books
	const authors: AuthorType[] = useMemo(() => {
		const allAuthors: AuthorType[] = []
		data?.forEach((book: BookType) => {
			book.authors.forEach(author => {
				if (!allAuthors.some(a => a.id === author.id)) {
					allAuthors.push(author)
				}
			})
		})
		return allAuthors
	}, [data])

	// Filter books based on search query, selected genres, and selected authors
	const filteredBooks = useMemo(() => {
		return (
			data?.filter((book: BookType) => {
				const matchesSearch =
					book.name[lang]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
					book.description[lang]
						?.toLowerCase()
						.includes(searchQuery.toLowerCase())
				const matchesGenre =
					selectedGenres.length === 0 ||
					book.genres.some(genre => selectedGenres.includes(genre.id))
				const matchesAuthor =
					selectedAuthors.length === 0 ||
					book.authors.some(author => selectedAuthors.includes(author.id))
				return matchesSearch && matchesGenre && matchesAuthor
			}) || []
		)
	}, [data, searchQuery, selectedGenres, selectedAuthors, lang])

	const toggleSelection = (
		id: string,
		setter: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setter(prevState =>
			prevState.includes(id)
				? prevState.filter(itemId => itemId !== id)
				: [...prevState, id]
		)
	}
	return (
		<div className='w-full'>
			<h2 className='text-3xl font-bold mb-4 mt-4 dark:text-slate-100'>
				{lang === 'uz'
					? 'Kitoblarim'
					: lang === 'ru'
					? 'Мои книги'
					: 'My Books'}
			</h2>
			<div className='w-full flex'>
				<div className='w-1/4 pt-10'>
					<div className='w-full mt-2'>
						<h2 className='text-2xl font-bold dark:text-slate-100'>
							{lang === 'uz' ? 'Janrlar' : lang === 'ru' ? 'Жанры' : 'Genres'}
						</h2>
						<div className='w-full p-2 pl-4'>
							{genres.map(genre => (
								<CheckBox
									key={genre.id}
									id={genre.id}
									label={genre.name[lang]}
									checked={selectedGenres.includes(genre.id)}
									onChange={() => toggleSelection(genre.id, setSelectedGenres)}
								/>
							))}
						</div>
					</div>
					<div className='w-full mt-2'>
						<h2 className='text-2xl font-bold dark:text-slate-100'>
							{lang === 'uz'
								? 'Mualliflar'
								: lang === 'ru'
								? 'Авторы'
								: 'Authors'}
						</h2>
						<div className='w-full p-2 pl-4'>
							{authors.map(author => (
								<CheckBox
									key={author.id}
									id={author.id}
									label={author.name[lang]}
									checked={selectedAuthors.includes(author.id)}
									onChange={() =>
										toggleSelection(author.id, setSelectedAuthors)
									}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='w-3/4'>
					{isLoading ? (
						<div>Loading...</div>
					) : error ? (
						<div>Error fetching books</div>
					) : (
						<>
							<div className='w-full p-4 flex items-center justify-between'>
								<Input
									type='search'
									placeholder='Search...'
									wrapper='w-auto'
									label='Search'
									value={searchQuery}
									onChange={e => setSearchQuery(e.target.value)}
								/>
								<div className='inline-flex items-center'></div>
							</div>
							<div className='w-full grid grid-cols-4 gap-4 p-4'>
								{filteredBooks.map(book => (
									<div
										className='flex flex-col items-center'
										key={`favourite_book_${book.id}`}
									>
										<div className='w-full'>
											<img
												src={STORAGE_PATH + 'cover/' + book.cover_image}
												className='w-full max-h-72 object-cover'
												alt={book.name[lang]}
											/>
										</div>
										<div className='w-full py-2'>
											<Paragraph
												onLarge=''
												onBase=''
												className='text-sm font-bold line-clamp-2 dark:text-slate-300'
											>
												{book.name[lang]}
											</Paragraph>
											<Span
												onBase=''
												onLarge=''
												className='text-xs text-gray-500'
											>
												{book.authors
													.map(author => author.name[lang])
													.join(', ')}
											</Span>
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default MyBooksPage
