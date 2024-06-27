import { motion } from 'framer-motion'
import { RiVoiceprintFill } from 'react-icons/ri'

interface SpeechButtonProps {
	text: string
	lang: string
	position: { top: number; left: number } | null
}

const SpeechButton: React.FC<SpeechButtonProps> = ({
	text,
	lang,
	position,
}) => {
	const handleReadAloud = () => {
		if (!text) {
			console.error('No text selected.')
			return
		}
		const utterance = new SpeechSynthesisUtterance(text)
		utterance.lang = lang === 'ru' ? 'ru-RU' : 'en-US'
		utterance.onerror = event => {
			console.error('Speech synthesis error:', event.error)
		}

		window.speechSynthesis.speak(utterance)
	}

	if (!position || !text) return null

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0 }}
			transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
			style={{ top: position.top, left: position.left }}
			className='fixed z-40 bg-red-500 text-white rounded-lg p-2 flex items-center space-x-2'
		>
			<button
				onClick={handleReadAloud}
				className='bg-white text-black rounded-full p-1'
			>
				<RiVoiceprintFill className='text-xl' />
			</button>
		</motion.div>
	)
}

export default SpeechButton
