import { CheckBox, Input, Paragraph, Span } from '../components/ui'

const MyBooksPage = () => {
	return (
		<div className='w-full'>
			<h2 className='text-3xl font-bold mb-4 mt-4 dark:text-slate-100'>
				My books
			</h2>
			<div className='w-full flex'>
				<div className='w-1/4 pt-10'>
					<div className='w-full mt-2'>
						<h2 className='text-2xl font-bold'>Genres</h2>
						<div className='w-full p-2 pl-4'>
							{Array(6)
								.fill('genre')
								.map((item, i) => (
									<CheckBox id={item + '_' + i} label={`${item} ${i}`} />
								))}
						</div>
					</div>
					<div className='w-full mt-2'>
						<h2 className='text-2xl font-bold'>Authors</h2>
						<div className='w-full p-2 pl-4'>
							{Array(6)
								.fill('Author')
								.map((item, i) => (
									<CheckBox id={item + '_' + i} label={`${item} ${i}`} />
								))}
						</div>
					</div>
				</div>
				<div className='w-3/4'>
					<div className='w-full p-4 flex items-center justify-between'>
						<Input
							type='search'
							placeholder='Search...'
							wrapper='w-auto'
							label='Search'
						/>
						<div className='inline-flex items-center'>
							<span className='text-base mr-2'>Sort by</span>
							<select
								name='sort'
								id='sort'
								className='px-2.5 py-1.5 rounded-md outline-none'
							>
								<option value='date'>Date</option>
								<option value='genre'>Genre</option>
							</select>
						</div>
					</div>
					<div className='w-full grid grid-cols-4 gap-4 p-4'>
						{Array(8)
							.fill('book', 0, 10)
							.map((item, idx) => (
								<div
									className='flex flex-col items-center'
									key={'favourite_book_' + item + idx}
								>
									<div className='w-full'>
										<img
											src='https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium'
											className='w-full max-h-72 object-covers'
											alt=''
										/>
									</div>
									<div className='w-full py-2'>
										<Paragraph
											className='text-sm font-bold line-clamp-2'
											onBase=''
											onLarge=''
										>
											Alone true story
										</Paragraph>
										<Span
											className='text-xs text-gray-500'
											onBase=''
											onLarge=''
										>
											Morgan Maxwell
										</Span>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyBooksPage
