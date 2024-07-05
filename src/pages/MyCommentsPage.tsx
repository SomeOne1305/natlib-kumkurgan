import { Paragraph } from '../components/ui'

const MyCommentsPage = () => {
	return (
		<div className='w-full'>
			{Array(3)
				.fill('da')
				.map((item, i) => (
					<div className='w-full p-2' key={item + '_' + i}>
						<div className='w-full flex items-center'>
							<div className='w-28 h-24 rounded-md overflow-hidden'>
								<img
									src='https://www.mintrans.uz/files/original/publication/1358_1714580913.jpg'
									className='w-full h-full object-cover'
									alt=''
								/>
							</div>
							<div className='px-3 py-1'>
								<span className='text-lg font-bold'>
									Sojitz va Rönesans kompaniyalari DXSh asosida transport
									sohasidagi loyihalarda ishtirok etishga qiziqmoqda{' '}
								</span>
								<br />
								<p className='text-base text-gray-700 line-clamp-3'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Voluptas, enim, numquam ducimus sapiente repellendus
									inventore, eum est sit maxime at blanditiis ex quaerat ipsum?
								</p>
							</div>
						</div>
						<div className='w-full pl-28 pt-2'>
							<div className='w-full p-2 inline-flex items-start rounded-md'>
								<div className='w-10 h-10' key={'fjoiasd' + '_' + 1}>
									<img
										src='https://ik.imagekit.io/lhvoxkb7i/users/default-user_kHqfmeEDX?updatedAt=1715854915388'
										alt=''
										className='w-10 h-full rounded-full'
									/>
								</div>
								<Paragraph
									onBase='text-lg'
									onLarge='text-xl'
									className='w-[95%] m-1 mt-0 p-[0_8px_8px_8px] text-base dark:text-gray-300 text-gray-700 block'
								>
									<span className='font-bold mr-1 dark:text-slate-100'>
										Anonymous:
									</span>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Doloribus, itaque dolorum? Minus ad, odio aspernatur natus
									corporis vitae ipsa amet iste. Ipsum provident in excepturi
									nemo molestias voluptatum modi nobis ab maxime quam?
									<p className='w-full mt-2'>
										<span className='text-sm text-blue-500 mr-4'>17:30</span>
										<span className='text-sm text-gray-400 mr-4'>
											{'3 days ago'}
										</span>
									</p>
								</Paragraph>
							</div>
						</div>
					</div>
				))}
		</div>
	)
}

export default MyCommentsPage
