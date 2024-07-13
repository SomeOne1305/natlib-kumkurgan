import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import illustration from '../assets/POLL.svg'
import image from '../assets/image copy.png'
// Mock data for demonstration purposes
const initialVotes = {
	HTML: 1,
	Java: 1,
}

type IVotes = {
	HTML: number
	Java: number
	Python: number
	jQuery: number
}

const getStoredVotes = (): IVotes => {
	const storedVotes = localStorage.getItem('votes')
	return storedVotes ? JSON.parse(storedVotes) : initialVotes
}

const setStoredVotes = (votes: IVotes) => {
	localStorage.setItem('votes', JSON.stringify(votes))
}

const VotingPoll = () => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null)
	const [votes, setVotes] = useState<IVotes>(getStoredVotes)
	const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0)

	useEffect(() => {
		setStoredVotes(votes)
	}, [votes])

	const handleVote = () => {
		if (selectedOption) {
			const updatedVotes = {
				...votes,
				[selectedOption as keyof IVotes]:
					votes[selectedOption as keyof IVotes] + 1,
			}
			setVotes(updatedVotes)
			setStoredVotes(updatedVotes)
			setSelectedOption(null)
		}
	}

	return (
		<div className='w-full'>
			<div className='w-full py-4 flex justify-between items-center mt-[5%] mb-6'>
				<h2 className='text-2xl font-bold dark:text-slate-100'>
					Bizni yaxshilashga yordam bering
				</h2>
			</div>
			<img src={image} alt='' />
			<div className='flex flex-col md:flex-row justify-around items-center'>
				<div className='max-w-xl max-h-[410px]'>
					<img
						src={illustration}
						className='w-full h-full object-cover'
						alt=''
					/>
				</div>
				<div className='p-6 max-w-xl bg-white rounded-xl dark:bg-[#161638] shadow-md space-y-4'>
					<h1 className='text-2xl font-bold dark:text-slate-100'>
						<FormattedMessage id='poll' />
					</h1>
					<div className='poll-area space-y-4'>
						{Object.entries(votes).map(([option, count]) => (
							<label
								key={option}
								className={`flex flex-col p-4 border rounded-lg cursor-pointer ${
									selectedOption === option
										? 'border-blue-500'
										: 'border-gray-200'
								}`}
								onClick={() => setSelectedOption(option)}
							>
								<div className='flex justify-between items-center'>
									<div className='flex items-center space-x-2'>
										<span
											className={`circle w-5 h-5 pt-[3px] pl-[3px] rounded-full border ${
												selectedOption === option
													? 'border-blue-500'
													: 'border-gray-400'
											}`}
										>
											{selectedOption === option && (
												<span className='block w-3 h-3 bg-blue-500 rounded-full'></span>
											)}
										</span>
										<span className='text-lg font-medium dark:text-slate-100'>
											{option}
										</span>
									</div>
									<span className='text-gray-600 dark:text-gray-300'>
										{Math.round((count / totalVotes) * 100)}%
									</span>
								</div>
								<div className='progress mt-2 w-full bg-gray-200 rounded-full h-2 overflow-hidden'>
									<motion.div
										className='h-full bg-blue-500 rounded-full'
										initial={{ width: 0 }}
										animate={{ width: `${(count / totalVotes) * 100}%` }}
										transition={{ duration: 0.5 }}
									></motion.div>
								</div>
							</label>
						))}
					</div>
					<div className='text-gray-600 dark:text-slate-200 text-center'>
						Total Votes: {totalVotes}
					</div>
					<button
						onClick={handleVote}
						className='mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-150'
					>
						Submit Vote
					</button>
				</div>
			</div>
		</div>
	)
}

export default VotingPoll
