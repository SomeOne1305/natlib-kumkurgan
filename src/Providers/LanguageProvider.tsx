import { FC, ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import messages_en from '../languages/en.json'
import messages_ru from '../languages/ru.json'
import messages_uz from '../languages/uz.json'
import { useLangStore } from '../store'

const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { lang } = useLangStore()

	const msgs = {
		uz: messages_uz,
		ru: messages_ru,
		eng: messages_en,
	}

	return (
		<IntlProvider locale={lang} messages={msgs[lang as keyof typeof msgs]}>
			{children}
		</IntlProvider>
	)
}

export default LanguageProvider
