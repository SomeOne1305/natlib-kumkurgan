import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoMdClose, IoMdDownload, IoMdEye } from 'react-icons/io'
import { useLoaderData } from 'react-router-dom'
import { STORAGE_PATH } from '../../constants/storage'
import BookViewer from '../../providers/BookViewer'
import { useLangStore } from '../../store'
import { BookType } from '../../types/book.type'

const DownloadButton = ({
	book_name,
	source,
}: {
	book_name: string
	source: string
}) => {
	const handleDownload = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/static/books/${source}`
			)
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const blob = await response.blob()
			const url = window.URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = book_name || 'default-filename.pdf' // Provide a default name if none exists
			document.body.appendChild(a)
			a.click()
			a.remove()
			window.URL.revokeObjectURL(url) // Clean up the URL object
		} catch (error) {
			console.error('Download failed:', error)
		}
	}

	return (
		<button
			className='p-3 rounded-md bg-blue-600 text-white inline-flex items-center text-base'
			onClick={handleDownload}
			title='Download'
		>
			<IoMdDownload />
		</button>
	)
}

const BooksDetailPage = () => {
	const [open, setOpen] = useState<boolean>(false)
	const book = useLoaderData() as BookType
	const { lang } = useLangStore()
	console.log(STORAGE_PATH + 'books/' + book?.source)

	return (
		<div className='w-full h-screen flex flex-col justify-end'>
			<AnimatePresence>
				{open && book && (
					<motion.div
						className='w-full h-full fixed z-50 overflow-y-auto bg-black bg-opacity-80 backdrop-blur'
						transition={{ duration: 0.5 }}
						initial={{ top: '150%', opacity: 0 }}
						animate={{ top: 0, opacity: 1 }}
						exit={{ top: '150%', opacity: 0 }}
					>
						<div className='w-full relative'>
							<div
								className='absolute top-2 right-2 cursor-pointer'
								onClick={() => setOpen(false)}
							>
								<IoMdClose className='text-3xl text-white' />
							</div>
							<BookViewer url={STORAGE_PATH + 'books/' + book.source} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className='w-full bg-white dark:bg-[#0F172A] rounded-t-xl'>
				<div className='container'>
					<div className='w-full'>
						{!book ? (
							<span>Loading</span>
						) : (
							book && (
								<div className='w-full py-3'>
									<div className='w-full py-2 mt-2 grid grid-cols-1 sm:grid-cols-3 items-start'>
										<div className='flex pt-5 relative'>
											<img
												className='w-full h-full object-cover rounded-lg border border-gray-300'
												src={STORAGE_PATH + '/cover/' + book?.cover_image}
												alt=''
											/>
											<div className='absolute top-6 right-1'>
												<button
													className='px-3 py-2 rounded-md bg-green-600 text-white inline-flex items-center text-base mr-2'
													onClick={() => setOpen(true)}
												>
													<IoMdEye className='text-lg mr-2' /> Ko'rish
												</button>
												<DownloadButton
													book_name={book.name?.[lang]}
													source={book.source}
												/>
											</div>
										</div>
										<div className='p-3 sm:col-span-2'>
											<h2 className='text-2xl font-bold dark:text-slate-100'>
												{book?.name?.[lang]}
											</h2>
											<p className='text-lg mt-4 dark:text-slate-200'>
												{book?.description?.[lang]}
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
												<td className='px-2 py-1'>
													{book?.publication_type?.[lang]}
												</td>
											</tr>
											<tr className='border-y border-gray-700'>
												<th className='px-2 py-1'>Nashriyot:</th>
												<td className='px-2 py-1'>{book?.publisher}</td>
											</tr>
											<tr className='border-y border-gray-700'>
												<th className='px-2 py-1'>Muallifi:</th>
												<td className='px-2 py-1'>
													{book?.authors?.map(a => a.name?.[lang]).join(' , ')}
												</td>
											</tr>
											<tr className='border-y border-gray-700'>
												<th className='px-2 py-1'>ISBN:</th>
												<td className='px-2 py-1'>ISBN13 {book?.isbn}</td>
											</tr>
											<tr className='border-y border-gray-700'>
												<th className='px-2 py-1'>Chop etilgan sana:</th>
												<td className='px-2 py-1'>
													{new Date(
														JSON.parse(book?.published_date ?? '')
													).toLocaleDateString()}
												</td>
											</tr>
											<tr className='border-y border-gray-700'>
												<th className='px-2 py-1'>Tili:</th>
												<td className='px-2 py-1'>{book?.language?.[lang]}</td>
											</tr>
											<tr className='border-y border-gray-700'>
												<th className='px-2 py-1'>Sahifalar soni:</th>
												<td className='px-2 py-1'>{book?.pages_number}</td>
											</tr>
											<tr className='border-y border-gray-700'>
												<th className='px-2 py-1'>Janrlar:</th>
												<td className='px-2 py-1'>
													<div className='flex items-center flex-wrap'>
														{book?.genres?.map(item => (
															<span
																key={'category' + item.id}
																className='text-xs p-1 rounded-lg bg-blue-700 text-white m-1'
															>
																{item.name?.[lang]}
															</span>
														))}
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BooksDetailPage
