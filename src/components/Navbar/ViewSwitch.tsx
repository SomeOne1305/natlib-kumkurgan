import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BsEyeglasses } from 'react-icons/bs'
import useTextSizeStore from '../../store/useTextSizeStore'
import './view-switch.css'

// const labels = ['Default', 'Base', 'Large']

const CustomRangeSlider = () => {
	return (
		<div className='w-64'>
			<input
				type='range'
				step={'50'}
				name='text-size'
				id='id'
				className='w-full'
			/>
		</div>
	)
}

const ViewSwitch = () => {
	const [open, setOpen] = useState<boolean>(false)
	const { size, setSize } = useTextSizeStore()
	const [value, setValue] = useState<string>('0')
	useEffect(() => {
		if (value === '0') {
			setSize('default')
		} else if (value === '50') {
			setSize('base')
		} else if (value === '100') {
			setSize('large')
		}
	}, [value, setSize, size])
	return (
		<div className='relative'>
			<div
				className='px-1 py-0.5 rounded-md cursor-pointer hover:bg-[#4465BA]'
				onClick={() => setOpen(prev => !prev)}
			>
				<BsEyeglasses className='text-3xl text-white' />
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, top: '150%' }}
						animate={{ opacity: 1, top: '110%' }}
						exit={{ opacity: 0, top: '150%' }}
						transition={{ duration: 0.3 }}
						className='absolute right-0 rounded-md bg-white border border-gray-200 dark:border-gray-700 z-10 p-2 dark:bg-[#141b2c] flex flex-col'
					>
						<span className='text-lg py-2 dark:text-slate-100'>Ko'rinish</span>
						<div className='inline-flex items-center gap-2 '>
							<div className='px-2 py-0.5 border border-slate-400 bg-blue-700'>
								<span className='text-2xl text-white'>A</span>
							</div>
							<div className='px-2 py-0.5 border border-slate-400 bg-gray-500'>
								<span className='text-2xl text-white'>A</span>
							</div>
							<div className='px-2 py-0.5 border border-slate-400 bg-gray-900'>
								<span className='text-2xl text-white'>A</span>
							</div>
						</div>
						<input
							type='range'
							step={50}
							value={value}
							name=''
							id=''
							onChange={e => setValue(e.target.value)}
						/>
						<CustomRangeSlider />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default ViewSwitch
