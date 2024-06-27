import Fancybox from '../components/Media/FancyBox'

const Structure = () => {
	return (
		<div className='w-full p-6 mt-4 text-center'>
			<h1 className='text-xl dark:text-slate-100 font-semibold my-6'>
				Tashkiliy tuzilma
			</h1>
			<Fancybox>
				<a
					href='https://uznel.natlib.uz:444/FN/dl_image/uload/userfiles/images/4375568(1).jpg'
					className='w-full flex justify-center'
					data-fancybox
				>
					<img
						src='https://uznel.natlib.uz:444/FN/dl_image/uload/userfiles/images/4375568(1).jpg'
						alt=''
					/>
				</a>
			</Fancybox>
			<h1 className='text-xl dark:text-slate-100 font-semibold my-6 pt-3'>
				Alisher Navoiy nomidagi O‘zbekiston Milliy kutubxonasi – axborot resurs
				markazining TUZILMASI
			</h1>
			<Fancybox>
				<a
					href='https://uznel.natlib.uz:444/FN/dl_image/uload/userfiles/images/4375571(1).jpg'
					className='w-full flex justify-center'
					data-fancybox
				>
					<img
						src='https://uznel.natlib.uz:444/FN/dl_image/uload/userfiles/images/4375571(1).jpg'
						className='mx-auto'
						alt=''
					/>
				</a>
			</Fancybox>
		</div>
	)
}

export default Structure
