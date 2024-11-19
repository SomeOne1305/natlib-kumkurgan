import Books from '../components/Books/Books'

const AllBooks = () => {
	return (
		<>
			<div className='w-full py-3 mb-5'>
				<h2 className='text-3xl font-bold dark:text-slate-100'>Kitoblar</h2>
			</div>

			<div className='w-full'>
				<Books />
			</div>
		</>
	)
}

export default AllBooks
