import { engFlag, rusFlag, uzbFlag } from '../assets/flags'

const flags = {
	uzb: uzbFlag,
	rus: rusFlag,
	eng: engFlag,
}

const lang: { lang: 'uz' | 'ru' | 'eng'; word: string; flag: string }[] = [
	{
		flag: flags.uzb,
		word: "O'zbek",
		lang: 'uz',
	},
	{
		flag: flags.rus,
		word: 'Русский',
		lang: 'ru',
	},
	{
		flag: flags.eng,
		word: 'English',
		lang: 'eng',
	},
]

export default lang
