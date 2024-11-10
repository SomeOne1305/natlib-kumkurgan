import { useQuery } from '@tanstack/react-query'
import { MediaService } from '../../services/media.service'
import Fancybox from './FancyBox'
import MediaCard from './MediaCard'

const MediaSection = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['GET_ALL_MEDIA'],
		queryFn: async () => await MediaService.get_all_media(),
	})
	return (
		<div className='w-full'>
			<div className='w-full py-3 my-4 border-b border-gray-800 dark:border-gray-400'>
				<h1 className='text-2xl font-bold dark:text-slate-100'>
					Multimedialar
				</h1>
			</div>
			<Fancybox
				options={{
					Carousel: {
						infinite: false,
					},
				}}
			>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
					{isLoading ? (
						<span>Loading...</span>
					) : (
						data &&
						data.map(media => <MediaCard media={media} key={media.id} />)
					)}
				</div>
			</Fancybox>
		</div>
	)
}

export default MediaSection
