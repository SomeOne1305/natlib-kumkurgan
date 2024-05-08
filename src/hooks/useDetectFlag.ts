import { useLangStore } from '../store'

const flags = {
	uzb: 'https://cdn-icons-png.flaticon.com/512/14063/14063216.png',
	rus: 'https://cdn-icons-png.flaticon.com/512/330/330437.png',
	eng: 'https://cdn-icons-png.flaticon.com/512/330/330425.png',
}

const useDetectFlag = (): { flag: string; word: string } => {
	const { lang } = useLangStore()
	switch (lang) {
		case 'uz':
			return {
				flag: flags.uzb,
				word: "O'zbek",
			}
		case 'ru':
			return {
				flag: flags.rus,
				word: 'Русский',
			}
		case 'eng':
			return {
				flag: flags.eng,
				word: 'English',
			}
	}
}

export default useDetectFlag
