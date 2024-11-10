import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import {
	IoChevronBack,
	IoChevronForward,
	IoLogInOutline,
} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { navbar } from '../../constants/navbar'
import { useLangStore } from '../../store'
import useAuthStore from '../../store/useAuthStore'

type Props = {
	children: ReactNode
}

const MobileBar: FC<Props> = ({ children }) => {
	const [opt, setOpt] = useState<'nav' | 'opt'>('nav')
	const [data, setData] = useState<number | null>(null)

	const handleNavClick = (index: number) => {
		setOpt('opt')
		setData(index)
	}

	const handleBackClick = () => {
		setData(null)
		setOpt('nav')
	}

	const { isAuthAvailable } = useAuthStore()
	const { lang } = useLangStore()

	return (
		<div className='md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-20 backdrop-blur-md'>
			<div className='w-full h-full relative'>
				{children}
				<div className='h-full inline-flex justify-starts flex-col w-[70vw] bg-white dark:bg-[#0F172A] dark:text-slate-100 p-2 overflow-x-hidden overflow-y-auto'>
					<AnimatePresence mode='wait' presenceAffectsLayout>
						{opt === 'nav' && (
							<motion.div
								key='nav'
								initial={{ x: '-100%' }}
								animate={{ x: 0 }}
								exit={{ x: '-100%' }}
								className='inline-flex items-start flex-col'
							>
								{navbar.map((item, i) => (
									<motion.div
										key={'mob' + i}
										className='py-2 px-3 inline-flex items-center text-lg cursor-pointer'
										onClick={() => handleNavClick(i)}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
									>
										<span>{item.title?.[lang]}</span>
										{item.children && (
											<IoChevronForward className='text-xl ml-2' />
										)}
									</motion.div>
								))}
							</motion.div>
						)}
						{opt === 'opt' && data !== null && (
							<motion.div
								key='opt'
								initial={{ x: '-100%' }}
								animate={{ x: 0 }}
								exit={{ x: '-100%' }}
								className='inline-flex items-start flex-col'
							>
								<div className='p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-[#2a3a5e] cursor-pointer'>
									<IoChevronBack
										className='text-2xl'
										onClick={handleBackClick}
									/>
								</div>
								{navbar[data].children?.map((item, i) => (
									<motion.div
										key={'mob-child' + i}
										className='py-2 px-3 inline-flex items-center text-lg cursor-pointer'
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
									>
										<span>{item.title?.[lang]}</span>
									</motion.div>
								))}
							</motion.div>
						)}
					</AnimatePresence>
					<div className='inline-flex items-start flex-col text-lg p-2 gap-2'>
						<div className='inline-flex items-center'>
							<FaEnvelope className='text-white mr-1' />
							<span className='tex text-white'>: info@natlib.uz</span>
						</div>
						{!isAuthAvailable && (
							<Link
								to={'/auth/login'}
								className='inline-flex items-center text-white'
							>
								<IoLogInOutline className='text-2xl mr-1' />
								<span className='hover:underline'>Kirish</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileBar
