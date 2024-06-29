import { books } from '../../constants/books'
import BookCard from './BookCard'

const Books = () => {
	return (
		<div className='w-full'>
			<div className='w-full'></div>
			<div className='w-full grid grid-cols-4 gap-4 mt-7'>
				{books.map((book, i) => (
					<BookCard i={book} setId={function () {}} x={i} key={'book' + i} />
				))}
			</div>
		</div>
	)
}

export default Books
