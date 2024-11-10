interface LanguageTitles {
	uz: string // Uzbek title
	ru: string // Russian title
	eng: string // English title
}
interface ChildNav {
	title: LanguageTitles
	link: string
}
interface NavItem {
	id: number
	title: LanguageTitles
	link?: string
	children?: ChildNav[]
}

export const navbar: NavItem[] = [
	{
		id: 1,
		title: {
			uz: 'Kutubxona haqida',
			ru: 'О библиотеке',
			eng: 'About the Library',
		},
		children: [
			{
				title: { uz: 'Rahbariyat', ru: 'Руководство', eng: 'Management' },
				link: 'docs/management',
			},
		],
	},
	{
		id: 4,
		title: {
			uz: 'Kutubxona xizmati',
			ru: 'Услуги библиотеки',
			eng: 'Library Services',
		},
		children: [
			{
				title: { uz: 'Yangiliklar', ru: 'Новости', eng: 'News' },
				link: 'news',
			},
			{
				title: {
					uz: "Ko'p beriladigan savollar",
					ru: 'Часто задаваемые вопросы',
					eng: 'Frequently Asked Questions',
				},
				link: '/faqs',
			},
			{
				title: { uz: 'Tadbirlar', ru: 'Мероприятия', eng: 'Events' },
				link: 'events',
			},
			{
				title: { uz: 'Multimedia', ru: 'Мультимедиа', eng: 'Multimedia' },
				link: 'media',
			},
		],
	},
	{
		id: 5,
		title: { uz: 'Mening kutubxonam', ru: 'Моя библиотека', eng: 'My Library' },
		children: [
			{
				title: {
					uz: "Shaxsiy ma'lumotlarni boshqarish",
					ru: 'Управление личными данными',
					eng: 'Manage Personal Information',
				},
				link: '/account/edit',
			},
			{
				title: { uz: 'Mening javonim', ru: 'Моя полка', eng: 'My Shelf' },
				link: '/account/favourites',
			},
		],
	},
	{
		id: 6,
		title: { uz: 'Qidiruv', ru: 'Поиск', eng: 'Search' },
		children: [
			{
				title: { uz: 'Kitoblar', ru: 'Книги', eng: 'Books' },
				link: 'books',
			},
		],
	},
	{
		id: 7,
		title: { uz: "Bog'lanish", ru: 'Контакты', eng: 'Contact' },
		link: 'contact',
	},
]
