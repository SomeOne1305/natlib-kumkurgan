const flags = {
	uzb: 'https://cdn-icons-png.flaticon.com/512/14063/14063216.png',
	rus: 'https://cdn-icons-png.flaticon.com/512/330/330437.png',
	eng: 'https://cdn-icons-png.flaticon.com/512/330/330425.png',
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
