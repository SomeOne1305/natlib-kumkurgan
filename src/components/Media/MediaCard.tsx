import { FaPlay } from 'react-icons/fa'
import { IoImageOutline } from 'react-icons/io5'
import { STORAGE_PATH } from '../../constants/storage'
import { useLangStore } from '../../store'
import { MediaType } from '../../types/media.type'

const MediaCard = ({ media }: { media: MediaType }) => {
	const { lang } = useLangStore()
	const fancy_source = (type: typeof media.type) => {
		switch (type) {
			case 'url':
				return media.source
			default:
				return STORAGE_PATH + 'media/' + media.source
		}
	}
	const image_source = (type: typeof media.type) => {
		switch (type) {
			case 'image':
				return STORAGE_PATH + 'media/' + media.source
			case 'url':
				return STORAGE_PATH + 'cover/' + media.thumbnail
			case 'video':
				return STORAGE_PATH + 'cover/' + media.thumbnail
		}
	}

	return (
		<a
			data-fancybox='gallery'
			href={fancy_source(media.type)}
			className='flex flex-col group mt-4'
		>
			<div className='relative w-full h-[230px] rounded-lg overflow-hidden'>
				<img
					src={image_source(media.type)}
					className='w-full h-full object-cover'
				/>
				<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#1e305198] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
					<div className='pt-4 pl-5 pr-4 pb-4 bg-[#142440] rounded-full z-10'>
						{media.type !== 'image' ? (
							<FaPlay className='text-3xl text-white' />
						) : (
							<IoImageOutline className='text-3xl text-white' />
						)}
					</div>
				</div>
			</div>
			<h3 className='text-lg font-bold dark:text-slate-100 px-1 py-3'>
				{media?.title?.[lang]}
			</h3>
		</a>
	)
}

export default MediaCard
