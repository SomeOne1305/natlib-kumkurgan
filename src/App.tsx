import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import SpeechButton from './components/SpeechButton'
import { useLangStore, useThemeStore } from './store'

import { useQuery } from '@tanstack/react-query'
import 'react-toastify/ReactToastify.min.css'
import Footer from './components/Footer/Footer'
import { UserService } from './services/user.service'
import useAuthStore from './store/useAuthStore'

type Position = {
	top: number
	left: number
}

const App = () => {
	const { lang } = useLangStore()
	const [position, setPosition] = useState<Position | null>(null)
	const [selectedText, setSelectedText] = useState('')

	useEffect(() => {
		const handleSelectionChange = () => {
			const select = window.getSelection()
			if (select && select.rangeCount > 0) {
				const range = select.getRangeAt(0)
				const rect = range.getBoundingClientRect()
				setPosition({
					top: rect.top + 40,
					left: rect.left + rect.width,
				})
				setSelectedText(select.toString())
			} else {
				setPosition(null)
				setSelectedText('')
			}
		}

		document.addEventListener('selectionchange', handleSelectionChange)
		return () => {
			document.removeEventListener('selectionchange', handleSelectionChange)
		}
	}, [])
	const { setUser, setIsAuthAvailable } = useAuthStore()
	const { data, isSuccess } = useQuery({
		queryKey: ['GET_USER'],
		queryFn: async () => await UserService.get_me(),
	})
	useEffect(() => {
		if (isSuccess) {
			setUser(data)
			setIsAuthAvailable(true)
		} else {
			setUser(null)
		}
	}, [isSuccess, data, setUser, setIsAuthAvailable])

	return (
		<div className='dark:bg-[#0F172A] transition-colors duration-150 min-h-screen flex flex-col justify-between items-center'>
			<ToastContainer
				theme={useThemeStore(({ theme }) => theme)}
				position='top-center'
				draggable
				pauseOnHover={false}
				limit={1}
				transition={Slide}
				autoClose={1600}
			/>
			<AnimatePresence>
				<SpeechButton text={selectedText} lang={lang} position={position} />
			</AnimatePresence>
			<Outlet />
			<Footer />
		</div>
	)
}

export default App
