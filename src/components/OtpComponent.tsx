import React, { FC, useEffect, useRef, useState } from 'react'
import '../styles/otp.css'

interface IOtpComponent {
	otp: string[]
	setOtp: (arg: string[]) => void
}

const OTPField: FC<IOtpComponent> = ({ otp, setOtp }) => {
	const [activeOTPIndex, setActiveOTPIndex] = useState(0)
	const inputRefs = useRef<HTMLInputElement[]>([])

	const handleOnChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const { value } = e.target
		const newOTP = [...otp]
		if (/^[0-9]$/.test(value)) {
			// Only accept digits
			newOTP[index] = value
			setOtp(newOTP)
			setActiveOTPIndex(index + 1) // Move to the next input
		} else if (value === '') {
			// Allow clearing input
			newOTP[index] = ''
			setOtp(newOTP)
		}
	}

	const handleOnKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === 'Backspace') {
			e.preventDefault()
			const newOTP = [...otp]
			newOTP[index] = ''
			setOtp(newOTP)
			setActiveOTPIndex(Math.max(0, index - 1)) // Move to the previous input if not the first one
		} else if (e.key === 'ArrowLeft') {
			setActiveOTPIndex(Math.max(0, index - 1))
		} else if (e.key === 'ArrowRight') {
			setActiveOTPIndex(Math.min(otp.length - 1, index + 1))
		}
	}

	useEffect(() => {
		inputRefs.current[activeOTPIndex]?.focus()
	}, [activeOTPIndex])

	return (
		<div className='flex justify-between items-center space-x-1 md:space-x-2'>
			{otp.map((_, index) => (
				<React.Fragment key={index}>
					<input
						ref={el => (inputRefs.current[index] = el!)}
						type='text'
						inputMode='numeric' // Mobile keyboard with numbers only
						className='w-10 h-10 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-gray-600 dark:text-slate-100 focus:border-blue-500 focus:text-blue-500 transition otp'
						onChange={e => handleOnChange(e, index)}
						onKeyDown={e => handleOnKeyDown(e, index)}
						value={otp[index]}
						maxLength={1} // Ensure single character input
					/>
					{index === otp.length - 1 ? null : <span className='px-0.5' />}
				</React.Fragment>
			))}
		</div>
	)
}

export default OTPField
