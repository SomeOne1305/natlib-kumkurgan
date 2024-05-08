import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosBook, IoMdClose } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'
import { PiCaretDown } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { navbar } from '../../constants/navbar'
import MobileBar from './MobileBar'

const Header = () => {
	const [isHover, setIsHover] = useState<number>(0)
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div className='w-full'>
			<div className='container'>
				<div className='w-full flex items-center justify-between py-3 my-3'>
					<a href='#' className='inline-flex items-center'>
						<IoIosBook className='dark:text-slate-200 text-8xl' />
						<div className='border-l-2 border-black dark:border-slate-300 pl-1'>
							<span className='text-base dark:text-slate-200'>
								Qumqo'rg'on tumani
							</span>
							<br />
							<span className='text-base dark:text-slate-200'>
								Axborot-kutubxona
							</span>
							<br />
							<span className='text-base dark:text-slate-200'>markazi</span>
						</div>
					</a>

					<div className='px-1 max-lg:hidden'>
						<span className='text-sm dark:text-slate-200'>
							Ishonch telefoni:
						</span>
						<br />
						<span className='text-lg font-semibold dark:text-slate-200'>
							71-202-33-999 (3022)
						</span>
					</div>
					<div
						className='p-1 border rounded-md dark:border-gray-600 border-gray-300 cursor-pointer md:hidden'
						onClick={() => setOpen(true)}
					>
						<IoMenu className='text-4xl dark:text-slate-200' />
					</div>
				</div>
			</div>
			<AnimatePresence>
				{open && (
					<MobileBar>
						<div className='p-1 absolute right-1 top-1 cursor-pointer'>
							<IoMdClose
								className='text-3xl text-white'
								onClick={() => setOpen(false)}
							/>
						</div>
					</MobileBar>
				)}
			</AnimatePresence>
			<div className='container'>
				<div className='w-full flex items-center border-b border-gray-400 max-lg:hidden'>
					{navbar.map(item => (
						<div
							className='inline-flex items-center relative group mr-2'
							key={'nav ' + item.id}
							onMouseEnter={() => setIsHover(item.id)}
							onMouseLeave={() => setIsHover(0)}
						>
							<span className='text-base inline-flex text-gray-600 cursor-pointer px-2 py-3 hover:text-blue-800 dark:hover:text-blue-700 dark:text-slate-300'>
								{item.title}{' '}
								{item.children && (
									<PiCaretDown className='text-lg ml-2 mt-0.5 rotate-0 group-hover:-rotate-180 transition-transform duration-200' />
								)}
							</span>
							<AnimatePresence>
								{item.children && isHover === item.id && (
									<motion.ul
										initial={{ opacity: 0, top: '150%' }}
										animate={{ opacity: 1, top: '99%' }}
										exit={{ opacity: 0, top: '150%' }}
										transition={{ duration: 0.3 }}
										className='inline-flex flex-col items-start py-1 absolute top-[99%] transiton-all duration-300 left-0 border border-gray-200 dark:border-gray-700	 rounded-b-md z-10 bg-white dark:bg-[#141b2c]'
									>
										{item.children?.map((i, z) => (
											<li
												key={'Child ' + z}
												className={`w-full py-2 px-3 text-base ${
													i.title?.split(' ')?.length <= 3
														? 'whitespace-nowrap'
														: ''
												} hover:bg-gray-100 dark:hover:bg-[#252836] hover:text-blue-800 dark:hover:text-blue-700 dark:text-slate-300 list-none`}
											>
												<Link
													to={i.link ? i.link : '/'}
													className='flex relative'
												>
													{i.title}
												</Link>
											</li>
										))}
									</motion.ul>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Header
