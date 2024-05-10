import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'
import { IBook } from '../../types'

const BookDetails = ({ id, children }: { id: string; children: ReactNode }) => {
	const [book, setBook] = useState<IBook>({} as IBook)
	const getData = async () => {
		if (id) {
			await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
				.then(res => res.json())
				.then(data => setBook(data))
		}
	}

	useEffect(() => {
		getData()
	}, [id])
	return (
		<motion.div
			className='w-full h-screen flex flex-col justify-end fixed left-0 z-10 bg-black bg-opacity-80'
			initial={{ top: '150%', opacity: 0 }}
			animate={{ top: 0, opacity: 1 }}
			exit={{ top: '150%', opacity: 0 }}
		>
			<div className='w-full py-1'>{children}</div>
			<div className='w-full h-[90%] bg-white dark:bg-[#0F172A] rounded-t-xl overflow-y-auto'>
				<div className='container'>
					<div className='w-full py-3'>
						<div className='w-full py-2 mt-2 grid grid-cols-1 sm:grid-cols-3 items-start'>
							<div className='flex pt-5'>
								<img
									className='w-full h-full object-cover rounded-lg border border-gray-300'
									src={book?.volumeInfo?.imageLinks?.extraLarge}
									alt=''
								/>
							</div>
							<div className='p-3 sm:col-span-2'>
								<h2 className='text-2xl font-bold dark:text-slate-100'>
									{book?.volumeInfo?.title}
								</h2>
								<p className='text-lg mt-4 dark:text-slate-200'>
									{book?.volumeInfo?.description}
								</p>
							</div>
						</div>
						<table className='md:w-1/2 w-full dark:text-slate-100 text-gray-800 text-left'>
							<caption className='text-left py-2 mt-2'>
								<h2 className='dark:text-gray-300 font-medium text-xl mb-2'>
									Ma'lumotlar:
								</h2>
							</caption>
							<tbody>
								<tr className='border-y border-gray-700'>
									<th className='px-2 py-1'>Nashr turi: </th>
									<td className='px-2 py-1'>{book?.volumeInfo?.printType}</td>
								</tr>
								<tr className='border-y border-gray-700'>
									<th className='px-2 py-1'>Nashriyot:</th>
									<td className='px-2 py-1'>{book?.volumeInfo?.publisher}</td>
								</tr>
								<tr className='border-y border-gray-700'>
									<th className='px-2 py-1'>Muallifi:</th>
									<td className='px-2 py-1'>
										{book?.volumeInfo?.authors?.map(a => a).join(' , ')}
									</td>
								</tr>
								<tr className='border-y border-gray-700'>
									<th className='px-2 py-1'>ISBN:</th>
									<td className='px-2 py-1'>
										ISBN10{' '}
										{book?.volumeInfo?.industryIdentifiers?.[0]?.identifier}{' '}
										<br />
										ISBN13{' '}
										{book?.volumeInfo?.industryIdentifiers?.[1]?.identifier}
									</td>
								</tr>
								<tr className='border-y border-gray-700'>
									<th className='px-2 py-1'>Chop etilgan sana:</th>
									<td className='px-2 py-1'>
										{book?.volumeInfo?.publishedDate}
									</td>
								</tr>
								<tr className='border-y border-gray-700'>
									<th className='px-2 py-1'>Tili:</th>
									<td className='px-2 py-1'>{book?.volumeInfo?.language}</td>
								</tr>
								<tr className='border-y border-gray-700'>
									<th className='px-2 py-1'>Sahifalar soni:</th>
									<td className='px-2 py-1'>{book?.volumeInfo?.pageCount}</td>
								</tr>
								<tr className='border-y border-gray-700'>
									<th className='px-2 py-1'>Kategoriyalar:</th>
									<td className='px-2 py-1'>
										<div className='flex items-center flex-wrap'>
											{book?.volumeInfo?.categories?.map((item, i) => (
												<span
													key={'category' + i}
													className='text-xs p-1 rounded-lg bg-blue-700 text-white m-1'
												>
													{item}
												</span>
											))}
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default BookDetails
