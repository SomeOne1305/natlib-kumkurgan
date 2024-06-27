import { Span } from '../components/ui'

const LibraryPlans = () => {
	const links = [
		'21-oktyabr O‘zbek tili bayrami kuniga bag‘ishlangan tadbirlar rejasi',
		'Axborot-kutubxona markazlari tomonidan 21-oktyabr O‘zbek tili bayrami kuniga bag‘ishlangan tadbirlar ',
		'Davlat dasturini amalga oshirish bo‘yicha chora-tadbirlar rejasi',
		'Alisher Navoiy nomidagi O‘zbekiston Milliy kutubxonasining ish relalari',
		' 2023-yil tuman-shahar axborot-kutubxona markazlari ish rejalari',
		'Alisher Navoiy nomidagi O‘zbekiston Milliy kutubxonasining ma’naviy-ma’rifiy ishlar bo‘yicha tadbirlar rejasi',
		'O‘zbekiston Milliy kutubxonasi huzuridagi respublika metodik kengashining ish rejasi',
		'Axborot-kutubxona markazlarining 2023-yil ish rejalari ',
		'Axborot-kutubxona markazlarining 2022-yil ish rejalari ',
		'Axborot-kutubxona markazlarining 2021-yil ish rejalari ',
		'Axborot-kutubxona markazlarining 2020-yil ish rejalari ',
	]
	return (
		<div className='w-full p-6'>
			<div className='w-full p-6'>
				<h1 className='text-2xl font-bold dark:text-white mt-6'>
					Kutubxona rejalari
				</h1>
				<ul className='px-4 py-8'>
					{links.map((i, j) => (
						<li className='list-decimal dark:text-white' key={'link_' + j}>
							<a
								href='https://uznel.natlib.uz:444/FN/dl_image/uload/userfiles/files/21%20oktabr(1).pdf'
								className='font-semibold hover:underline ml-2 text-sky-500'
								target='_blank'
							>
								<Span className='text-lg' onBase='text-xl' onLarge='text-2xl'>
									{i} (.pdf)
								</Span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default LibraryPlans
