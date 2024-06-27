import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SpeechButton from './components/SpeechButton'
import { useLangStore } from './store'

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

	return (
		<div className='dark:bg-[#0F172A] transition-colors duration-150 min-h-screen'>
			<AnimatePresence>
				<SpeechButton text={selectedText} lang={lang} position={position} />
			</AnimatePresence>
			<Outlet />
		</div>
	)
}

export default App
