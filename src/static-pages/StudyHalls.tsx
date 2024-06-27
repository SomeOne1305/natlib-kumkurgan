import { Span } from '../components/ui'

const StudyHalls = () => {
	const links = [
		'“Adolat” yuridik adabiyotlar zali',
		'“Alisher Navoiy” adabiy meroslar zali',
		'“Jahon” xorijiy adabiyot zali',
		'“Ijod” musiqiy adabiyotlar zali',
		'“Ilm” dissertatsiyalar zali',
		'“Internet va media markazi”',
		'“Istiqbol” talaba va yoshlar zali',
		'“Kashfiyot” ilmiy zali',
		'“Nodir” noyob manbalar zali',
		'“Tafakkur” bosh o‘qish zali',
		'“O‘zbekiston” milliy adabiyotlar zali',
		'“Koreaga nigoh”  o‘quv zali',
		'“Amerikaga nigoh” o‘quv zali',
		'“Xitoyga nigoh” o‘quv zali ',
	]
	return (
		<div className='w-full p-6'>
			<h1 className='text-2xl font-bold dark:text-white mt-6'>O'quv zallari</h1>
			<ul className='px-4 py-8'>
				{links.map((i, j) => (
					<li className='list-decimal dark:text-white' key={'link_' + j}>
						<a
							href='#'
							className='font-semibold hover:underline ml-2 text-sky-500'
						>
							<Span className='text-lg' onBase='text-xl' onLarge='text-2xl'>
								{i}
							</Span>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default StudyHalls
