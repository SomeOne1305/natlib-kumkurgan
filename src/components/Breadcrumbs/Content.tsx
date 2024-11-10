import { GoHome } from 'react-icons/go'
import { MdOutlinePrint } from 'react-icons/md'
import { PiCaretRight } from 'react-icons/pi'
import { Link, Params, useMatches } from 'react-router-dom'
import useTitleStore from '../../store/useTitleStore'
interface IMatches {
	id: string
	pathname: string
	params: Params<string>
	data: unknown
	handle: unknown
}

type HandleType = {
	crumb: (param?: string) => React.ReactNode
}
const Content = () => {
	const matches: IMatches[] = useMatches()
	const crumbs = matches
		.filter(match =>
			Boolean(match.handle && (match.handle as HandleType).crumb)
		)
		.map(match => {
			const crumb = (match.handle as HandleType).crumb(
				match.data as string | undefined
			)
			return crumb as React.ReactNode
		})
	console.log(crumbs)
	const { title } = useTitleStore()
	return (
		<div className="w-full h-[35vh] bg-[url('/src/assets/patterns/moroccan.svg')] bg-[#264DB1] dark:bg-[url('/src/assets/dark-pattern.svg')] dark:bg-[#4945FF] flex flex-col justify-end">
			<div className='container py-4'>
				<h1 className='text-4xl font-bold text-white mb-3'>{title ?? ''}</h1>
				<div className='w-full flex items-center justify-between'>
					<div className='inline-flex items-center py-1 text-white'>
						<GoHome className='text-2xl mr-1' />
						<Link to='/' className='text-xl'>
							Bosh sahifa
						</Link>
						<PiCaretRight />
						{crumbs.map((item, i) => (
							<>
								{item}
								{i !== crumbs.length - 1 && <PiCaretRight />}
							</>
						))}
					</div>
					<div
						className='inline-flex items-center py-1 text-white'
						onClick={() => window.print()}
					>
						<MdOutlinePrint className='text-2xl mr-1' />
						<span className='text-xl'>Chop etish</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content
