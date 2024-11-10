export function timeAgo(date: string, lang: 'uz' | 'ru' | 'eng') {
	const now = new Date()
	const old = new Date(date)
	const seconds = Math.floor((now.getTime() - old.getTime()) / 1000)
	let interval = Math.floor(seconds / 31536000)

	let timeString

	if (interval > 1) {
		// Years
		timeString = `${interval} ${getTranslation('year', interval, lang)}`
	} else if ((interval = Math.floor(seconds / 2592000)) > 1) {
		// Months
		timeString = `${interval} ${getTranslation('month', interval, lang)}`
	} else if ((interval = Math.floor(seconds / 86400)) > 1) {
		// Days
		timeString = `${interval} ${getTranslation('day', interval, lang)}`
	} else if ((interval = Math.floor(seconds / 3600)) > 1) {
		// Hours
		timeString = `${interval} ${getTranslation('hour', interval, lang)}`
	} else if ((interval = Math.floor(seconds / 60)) > 1) {
		// Minutes
		timeString = `${interval} ${getTranslation('minute', interval, lang)}`
	} else {
		// Just now
		timeString = getTranslation('justNow', 1, lang)
	}

	return timeString + ` ${getTranslation('ago', 1, lang)}`
}

function getTranslation(
	unit: 'year' | 'day' | 'month' | 'minute' | 'hour' | 'justNow' | 'ago',
	count: number,
	lang: 'uz' | 'ru' | 'eng'
) {
	const translations = {
		eng: {
			year: count > 1 ? 'years' : 'year',
			month: count > 1 ? 'months' : 'month',
			day: count > 1 ? 'days' : 'day',
			hour: count > 1 ? 'hours' : 'hour',
			minute: count > 1 ? 'minutes' : 'minute',
			ago: 'ago',
			justNow: 'just now',
		},
		ru: {
			year: count > 1 ? 'года' : 'год',
			month: count > 1 ? 'месяца' : 'месяц',
			day: count > 1 ? 'дня' : 'день',
			hour: count > 1 ? 'часа' : 'час',
			minute: count > 1 ? 'минут' : 'минута',
			ago: 'назад',
			justNow: 'только что',
		},
		uz: {
			year: count > 1 ? 'yil' : 'yil',
			month: count > 1 ? 'oy' : 'oy',
			day: count > 1 ? 'kun' : 'kun',
			hour: count > 1 ? 'soat' : 'soat',
			minute: count > 1 ? 'daqiqalar' : 'daqiqalar',
			ago: 'oldin',
			justNow: 'hozir',
		},
	}

	return translations[lang][unit]
}
