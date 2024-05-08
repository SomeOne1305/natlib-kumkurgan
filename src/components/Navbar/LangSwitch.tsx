import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import lang from '../../constants/lang'
import { useDetectFlag } from '../../hooks'
import { useLangStore } from '../../store'

const LangSwitch = () => {
	const flag = useDetectFlag()
	const { setLang } = useLangStore()
	const [open, setOpen] = useState<boolean>(false)
	const handleChangeLang = (language: 'uz' | 'ru' | 'eng') => {
		setLang(language)
		setOpen(false)
	}
	return (
		<div className='relative rounded-md cursor-pointer hover:bg-[#4465BA]'>
			<div
				className='inline-flex items-center p-1'
				onClick={() => setOpen(prev => !prev)}
			>
				<img src={flag.flag} alt='' className='size-6 mr-1 select-none' />
				<FaAngleDown className='text-lg text-white ml-1' />
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, top: '150%' }}
						animate={{ opacity: 1, top: '110%' }}
						exit={{ opacity: 0, top: '150%' }}
						transition={{ duration: 0.3 }}
						className='absolute right-0 rounded-md bg-white border border-gray-200 dark:border-gray-700 z-10 p-2 w-32 dark:bg-[#141b2c] flex flex-col'
					>
						{lang.map(item => (
							<div
								key={item.word}
								className='flex p-1 items-center hover:bg-gray-100 dark:hover:bg-[#252836] group cursor-pointer'
								onClick={() => handleChangeLang(item.lang)}
							>
								<img src={item.flag} alt='' className='size-6 mr-1' />
								<span className='text-base group-hover:text-blue-800 dark:group-hover:text-blue-700 dark:text-slate-300'>
									{item.word}
								</span>
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default LangSwitch
