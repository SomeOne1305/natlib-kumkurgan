export function dateToString(lang: 'uz' | 'ru' | 'eng', date: string): string {
	const months = {
		uz: [
			'Yanvar', // January
			'Fevral', // February
			'Mart', // March
			'Aprel', // April
			'May', // May
			'Iyun', // June
			'Iyul', // July
			'Avgust', // August
			'Sentabr', // September
			'Oktyabr', // October
			'Noyabr', // November
			'Dekabr', // December
		],
		ru: [
			'Январь', // January
			'Февраль', // February
			'Март', // March
			'Апрель', // April
			'Май', // May
			'Июнь', // June
			'Июль', // July
			'Август', // August
			'Сентябрь', // September
			'Октябрь', // October
			'Ноябрь', // November
			'Декабрь', // December
		],
		eng: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
	}
	const date_ = new Date(date)
	return `${date_.getDate()} ${
		months[lang][date_.getMonth()]
	}, ${date_.getFullYear()}`
}
