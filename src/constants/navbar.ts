export const navbar = [
	{
		id: 1,
		title: 'Kutubxona haqida',
		children: [
			{
				title: 'Tuzilma',
				link: 'docs/structure',
			},
			{
				title: 'Rahbariyat',
				link: 'docs/management',
			},
			// {
			// 	title: 'Kutubxona tarixi',
			// 	link: 'docs/history-of-library',
			// },
		],
	},
	{
		id: 4,
		title: 'Kutubxona xizmati',
		children: [
			{
				title: 'Yangiliklar',
				link: 'news',
			},
			{
				title: "Ko'p beriladigan savollar",
				link: '/faqs',
			},
			// {
			// 	title: 'Savollar va javoblar',
			// },
			{
				title: 'Tadbirlar',
				link: 'events',
			},
			// {
			// 	title: "E'lonlar",
			// },
			{
				title: 'Multimedia',
				link: 'media',
			},
		],
	},
	{
		id: 5,
		title: 'Mening kutubxonam',
		children: [
			{
				title: "Shaxsiy ma'lumotlarni boshqarish",
				link: '/account/edit',
			},
			{
				title: 'Mening javonim',
				link: '/account/favourites',
			},
			{
				title: 'Mening sharhim',
				link: '/account/my-comments',
			},
		],
	},
	{
		id: 6,
		title: 'Qidiruv',
		children: [
			// {
			// 	title: 'Umumiy qidiruv',
			// },
			{
				title: 'Kitoblar',
				link: 'books',
			},
		],
	},
	{
		id: 7,
		title: "Bog'lanish",
		link: 'contact',
	},
]
